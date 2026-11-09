/* ==========================================================
   MER website assistant (chat widget), works offline
   No API key, no server: answers come from the knowledge base
   files in assets/js/kb/ and are matched right in the browser.
   ========================================================== */
(() => {
  "use strict";

  /* ---------- 1. Parse the knowledge base ---------- */
  // Format (see assets/js/kb/*.js):
  //   ## intent-id
  //   q: question one | question two | ...
  //   a: English answer
  //   ur: Roman Urdu answer (optional)
  // Contact details come from site-content.js (one place for the whole site)
  const SITE = window.SITE;
  const C = SITE ? {
    email: SITE.contact.email,
    whatsapp: SITE.contact.whatsappDisplay,
    whatsappLink: `https://wa.me/${String(SITE.contact.whatsappNumber || "").replace(/\D/g, "")}`,
  } : (window.MER_CONFIG || {});

  // Topics built from site-content.js, so the bot always matches the website
  if (SITE) {
    const lines = [];
    (SITE.faq || []).forEach((f, i) => lines.push(`## site-faq-${i}`, `q: ${f.q.replace(/\|/g, "/")}`, `a: ${f.a}`));
    if ((SITE.projects || []).length) {
      lines.push("## portfolio", "a: Some of our work:");
      SITE.projects.slice(0, 8).forEach((p) => lines.push(`- **${p.title}** (${p.meta})`));
      lines.push("See them all on our [Work page](work.html).");
    }
    (SITE.services || []).forEach((s) => lines.push(`## site-svc-${s.id}`, `q: ${s.title} | about ${s.title} | ${s.clock.replace("‑", "-")} service`, `a: **${s.title}**: ${s.text}`, `Tags: ${s.tags.join(", ")}. [Ask about this](contact.html).`));
    window.MER_KB = (window.MER_KB || "") + "\n" + lines.join("\n") + "\n";
  }

  const fill = (s) => s
    .replace(/\{EMAIL\}/g, C.email || "hello@yourdomain.com")
    .replace(/\{WHATSAPP\}/g, C.whatsapp || "+92 300 0000000")
    .replace(/\{WA_LINK\}/g, C.whatsappLink || "https://wa.me/923000000000");

  function parseKB(text) {
    const intents = [], byId = new Map();
    let cur = null;
    text.split(/\r?\n/).forEach((raw) => {
      const line = raw.trim();
      if (!line || line.startsWith("//")) return;
      if (line.startsWith("## ")) {
        // The same id can appear again (e.g. in kb-5-extra.js) to add more phrasings
        const id = line.slice(3).trim();
        cur = byId.get(id);
        if (!cur) { cur = { id, q: [], a: "", ur: "" }; intents.push(cur); byId.set(id, cur); }
        cur._last = null;
        return;
      }
      if (!cur) return;
      const m = line.match(/^(q|a|ur):\s?(.*)$/);
      if (!m) { if (cur._last) cur[cur._last] += "\n" + line; return; } // continuation line
      if (m[1] === "q") { cur.q.push(...m[2].split("|").map((s) => s.trim()).filter(Boolean)); cur._last = null; }
      else { cur[m[1]] = m[2]; cur._last = m[1]; }
    });
    return intents.filter((i) => i.q.length && i.a);
  }
  const INTENTS = parseKB(window.MER_KB || "");

  /* ---------- 2. Text normalisation ---------- */
  const SYN = {
    // price
    kitna: "price", kitne: "price", kitni: "price", cost: "price", costs: "price", charge: "price", charges: "price", rate: "price", rates: "price", fee: "price", fees: "price", paise: "price", paisa: "price", qeemat: "price", qimat: "price", rupees: "price", rs: "price", pkr: "price", dollar: "price", dollars: "price", budget: "price", expensive: "price", cheap: "price", sasta: "price", mehenga: "price", mehnga: "price", pricing: "price", quote: "price", quotation: "price",
    // make / build
    banwana: "make", banwani: "make", banana: "make", banani: "make", banate: "make", banao: "make", banega: "make", banegi: "make", build: "make", develop: "make", create: "make", design: "design", designing: "design",
    // website
    site: "website", websites: "website", webpage: "website", webside: "website", wesite: "website", websit: "website",
    // shop
    store: "shop", dukaan: "shop", dukan: "shop", ecommerce: "shop", "e-commerce": "shop", onlinestore: "shop", shopify: "shopify",
    application: "app", apps: "app", android: "app", ios: "app", iphone: "app",
    // time
    waqt: "time", kab: "time", din: "days", hafte: "weeks", hafta: "week", timeline: "time", duration: "time", deadline: "time", long: "time",
    // contact
    rabta: "contact", number: "contact", phone: "contact", email: "contact", mail: "contact", reach: "contact",
    meeting: "call", meet: "call", zoom: "call", calls: "call", baat: "talk",
    shukriya: "thanks", thank: "thanks", thankyou: "thanks", thx: "thanks", ty: "thanks", jazakallah: "thanks",
    salam: "hello", assalam: "hello", assalamualaikum: "hello", aoa: "hello", hi: "hello", hey: "hello", hlo: "hello", helo: "hello", hii: "hello",
    services: "service", kaam: "work", projects: "project", portfolio: "work", samples: "work", sample: "work",
    logo: "logo", logos: "logo", branding: "brand",
    madad: "help", help: "help",
    seo: "seo", ranking: "seo", rank: "seo",
    ugc: "ugc", reel: "reels", reels: "reels", video: "video", videos: "video", photo: "photo", photos: "photo", photography: "photo", shoot: "shoot",
  };
  const STOP = new Set(("a an the is are am was were be been do does did can could would should will shall may might " +
    "i me my mine we our you your yours it its this that these those to of in on at for from with by about as and or " +
    "please plz pls kindly just also really very so some any tell know want need like " +
    "kya hai hain ho hoga hogi ka ki ke ko se me mein mai main mujhe muje mjhe hum hamein humein ap aap apka apki apke aapka aapki aapke " +
    "yeh ye woh wo is us un batao bataen bataye btao btain chahiye chahte chahta chahti karo karna karte karta karti kar " +
    "bhi bi to tu toh na nahi ya aur or hi").split(" "));

  const stem = (w) => (w.length > 4 ? w.replace(/(ings|ing|edly|ed|es|s)$/, "") : w);
  function tokens(text) {
    return text.toLowerCase()
      .replace(/&/g, " and ").replace(/[’']/g, "")
      .replace(/[^a-z0-9؀-ۿ+#.\s-]/g, " ")
      .replace(/[.-]/g, " ")
      .split(/\s+/).filter(Boolean)
      .map((w) => SYN[w] || w)
      .filter((w) => !STOP.has(w))
      .map(stem);
  }
  const grams = (s) => { const t = " " + s.toLowerCase().replace(/[^a-z0-9 ]/g, "") + " "; const g = new Set(); for (let i = 0; i < t.length - 2; i++) g.add(t.slice(i, i + 3)); return g; };
  const dice = (a, b) => { if (!a.size || !b.size) return 0; let n = 0; a.forEach((x) => b.has(x) && n++); return (2 * n) / (a.size + b.size); };

  /* ---------- 3. TF-IDF index over every question phrasing ---------- */
  const DOCS = [];
  INTENTS.forEach((it, idx) => it.q.forEach((q) => DOCS.push({ idx, q, t: tokens(q), g: grams(q) })));
  const DF = new Map();
  DOCS.forEach((d) => new Set(d.t).forEach((w) => DF.set(w, (DF.get(w) || 0) + 1)));
  const N = DOCS.length || 1;
  const idf = (w) => Math.log(1 + N / (1 + (DF.get(w) || 0)));
  function vec(toks) {
    const v = new Map();
    toks.forEach((w) => v.set(w, (v.get(w) || 0) + 1));
    let norm = 0;
    v.forEach((tf, w) => { const x = tf * idf(w); v.set(w, x); norm += x * x; });
    return { v, norm: Math.sqrt(norm) || 1 };
  }
  DOCS.forEach((d) => (d.vec = vec(d.t)));
  const cos = (a, b) => { let s = 0; const [sm, lg] = a.v.size < b.v.size ? [a, b] : [b, a]; sm.v.forEach((x, w) => { const y = lg.v.get(w); if (y) s += x * y; }); return s / (a.norm * b.norm); };

  function search(text) {
    const qt = tokens(text), qv = vec(qt), qg = grams(text);
    const best = new Map();
    DOCS.forEach((d) => {
      const s = 0.72 * cos(qv, d.vec) + 0.28 * dice(qg, d.g);
      if (s > (best.get(d.idx) || 0)) best.set(d.idx, s);
    });
    return [...best.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([idx, score]) => ({ it: INTENTS[idx], score }));
  }

  const UR_MARK = /\b(kya|kia|hai|hain|kitna|kitne|kitni|kaise|kese|kaisay|mujhe|muje|aap|ap|apka|apki|nahi|nai|karo|karte|batao|btao|chahiye|kab|kahan|kyun|kiun|acha|theek|thik|hoga|hogi|wala|wali|banwana|banana|salam|shukriya|bhai|yar|yaar)\b/i;
  const isUrdu = (t) => UR_MARK.test(t);
  window.MER_CHAT = { search, count: () => ({ intents: INTENTS.length, questions: DOCS.length }) };

  /* ---------- 4. Chat widget UI ---------- */
  const STORE = "mer-chat-v2";
  const SUGGESTIONS = ["What services do you offer?", "Website kitne ka banega?", "How long does a project take?", "Book a video call"];
  const WELCOME = "Hi! 👋 I'm the MER assistant. Ask me about our services, prices, timelines or your project idea. Aap Roman Urdu mein bhi pooch sakte hain.";
  const FALLBACK = "Hmm, I'm not sure about that one yet. 🤔 You can:\n- Try asking in a different way\n- [Book a free video call](#book) and ask the team directly\n- Or WhatsApp us at {WHATSAPP}";
  const FALLBACK_UR = "Maaf kijiye, is sawal ka jawab mere paas abhi nahi hai. 🤔 Aap:\n- Sawal thoda doosre tareeqe se poochein\n- [Free video call book karein](#book) aur team se seedha baat karein\n- Ya WhatsApp karein: {WHATSAPP}";

  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function md(text) {
    let h = esc(fill(text));
    h = h.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    h = h.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^\s)]+|#[\w-]+|[\w-]+\.html(?:#[\w-]+)?)\)/g, (m, label, href) => {
      const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${href}"${ext}>${label}</a>`;
    });
    h = h.replace(/(^|\n)[-•] (.+)/g, "$1<span class=\"mc-li\">$2</span>");
    return h.replace(/\n/g, "<br>");
  }

  let history = [];
  try { history = JSON.parse(sessionStorage.getItem(STORE) || "[]"); } catch (e) { history = []; }
  const save = () => { try { sessionStorage.setItem(STORE, JSON.stringify(history.slice(-40))); } catch (e) {} };

  const root = document.createElement("div");
  root.className = "mc";
  root.innerHTML = `
    <button class="mc-fab" aria-label="Open chat" aria-expanded="false">
      <span class="mc-fab__px" aria-hidden="true"><i></i><i class="e"></i><i></i><i></i><i class="c"></i><i></i><i></i><i class="e"></i><i></i></span>
      <span class="mc-fab__x" aria-hidden="true">✕</span>
      <span class="mc-fab__ping" aria-hidden="true"></span>
    </button>
    <section class="mc-panel" role="dialog" aria-label="MER assistant chat" aria-hidden="true">
      <header class="mc-head">
        <span class="mc-av"><img src="assets/brand/mer-icon-for-dark-bg.svg" alt=""></span>
        <div><b>MER Assistant</b><small>● Online · replies instantly</small></div>
        <button class="mc-reset" title="New chat" aria-label="Start a new chat">↻</button>
        <button class="mc-close" aria-label="Close chat">✕</button>
      </header>
      <div class="mc-body" aria-live="polite"></div>
      <div class="mc-sugs"></div>
      <form class="mc-form">
        <input class="mc-in" type="text" maxlength="500" placeholder="Ask anything… / kuch bhi poochein" aria-label="Your message" autocomplete="off">
        <button class="mc-send" aria-label="Send">↑</button>
      </form>
      <p class="mc-note">Automated assistant · for exact quotes, book a free call.</p>
    </section>`;
  document.body.appendChild(root);

  const fab = root.querySelector(".mc-fab"), panel = root.querySelector(".mc-panel");
  const body = root.querySelector(".mc-body"), sugs = root.querySelector(".mc-sugs");
  const form = root.querySelector(".mc-form"), input = root.querySelector(".mc-in"), sendBtn = root.querySelector(".mc-send");
  let busy = false;

  const scroll = () => { body.scrollTop = body.scrollHeight; };
  function bubble(role, html) {
    const el = document.createElement("div");
    el.className = `mc-msg ${role === "user" ? "me" : "bot"}`;
    el.innerHTML = html;
    body.appendChild(el); scroll();
    wireLinks(el);
    return el;
  }
  function chips(list) { sugs.innerHTML = list.map((s) => `<button type="button">${esc(s)}</button>`).join(""); }
  function render() {
    body.innerHTML = "";
    bubble("bot", md(WELCOME));
    history.forEach((m) => bubble(m.role, m.html || md(m.text)));
    chips(history.length ? [] : SUGGESTIONS);
  }

  // "#book" links open the booking tab of the contact section (or go to it on other pages)
  function wireLinks(el) {
    el.querySelectorAll("a").forEach((a) => a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href === "#book") {
        e.preventDefault(); setOpen(false);
        const btn = document.querySelector("[data-open-booking]");
        if (btn) btn.click(); else location.href = "contact.html#book";
      } else if (href.startsWith("#")) {
        if (!document.querySelector(href)) { e.preventDefault(); location.href = href === "#contact" ? "contact.html" : "index.html" + href; }
        setOpen(false);
      }
    }));
  }

  function setOpen(open) {
    root.classList.toggle("is-open", open);
    fab.setAttribute("aria-expanded", String(open));
    fab.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    panel.setAttribute("aria-hidden", String(!open));
    if (open) { root.classList.add("seen"); setTimeout(() => input.focus({ preventScroll: true }), 250); }
  }
  fab.addEventListener("click", () => setOpen(!root.classList.contains("is-open")));
  root.querySelector(".mc-close").addEventListener("click", () => setOpen(false));
  root.querySelector(".mc-reset").addEventListener("click", () => { history = []; save(); render(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && root.classList.contains("is-open")) setOpen(false); });
  sugs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) ask(b.textContent); });
  form.addEventListener("submit", (e) => { e.preventDefault(); ask(input.value); });

  function answerFor(text) {
    const ur = isUrdu(text);
    const hits = search(text);
    const top = hits[0];
    const pick = (it) => (ur && it.ur ? it.ur : it.a);
    if (top && top.score >= 0.42) {
      const more = hits.slice(1).filter((h) => h.score >= 0.3 && h.it.id !== top.it.id).slice(0, 2).map((h) => h.it.q[0]);
      return { html: md(pick(top.it)), more };
    }
    if (top && top.score >= 0.3) {
      const opts = hits.filter((h) => h.score >= 0.2).slice(0, 3).map((h) => h.it.q[0]);
      return { html: md((ur ? "Shayad aap ye poochna chahte hain:\n\n" : "Here's what I found:\n\n") + pick(top.it)), more: opts.slice(1) };
    }
    return { html: md(ur ? FALLBACK_UR : FALLBACK), more: ["What services do you offer?", "How much does a website cost?", "Book a video call"] };
  }

  function ask(text) {
    text = (text || "").trim().slice(0, 500);
    if (!text || busy) return;
    busy = true; sendBtn.disabled = true; input.value = ""; sugs.innerHTML = "";
    history.push({ role: "user", text }); save();
    bubble("user", md(text));
    const out = bubble("bot", '<span class="mc-typing"><i></i><i></i><i></i></span>');
    const { html, more } = answerFor(text);
    const delay = Math.min(1400, 350 + html.length * 2);
    setTimeout(() => {
      out.innerHTML = html; wireLinks(out); scroll();
      history.push({ role: "bot", html }); save();
      chips(more || []);
      busy = false; sendBtn.disabled = false; input.focus({ preventScroll: true });
    }, delay);
  }

  render();
  try {
    if (!sessionStorage.getItem("mer-chat-nudged")) setTimeout(() => { if (!root.classList.contains("seen")) root.classList.add("nudge"); sessionStorage.setItem("mer-chat-nudged", "1"); }, 9000);
  } catch (e) {}
})();
