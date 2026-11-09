/* ==========================================================
   MER — interactions & animation
   Libraries: GSAP + ScrollTrigger, Lenis (all loaded from CDN)
   ========================================================== */
(() => {
  "use strict";

  /* ---------- Settings you can change ---------- */
  const CONFIG = {
    // Paste a Formspree / Getform / your own endpoint here to receive form
    // submissions by email. Left empty, the form opens the visitor's email app.
    FORM_ENDPOINT: (window.SITE && window.SITE.settings.formEndpoint) || "",
    CONTACT_EMAIL: (window.SITE && window.SITE.contact.email) || "hello@yourdomain.com",
    // Paste your Cal.com or Calendly booking link here (e.g. "https://cal.com/mer/discovery").
    // Then "Request this time" opens your real booking page, which sends calendar
    // invites with a Google Meet / Zoom link. Left empty, it emails the request instead.
    BOOKING_URL: (window.SITE && window.SITE.settings.bookingUrl) || "",
  };

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;

  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null;
  if (!reduceMotion && typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  function scrollToTarget(target) {
    const el = typeof target === "string" ? $(target) : target;
    if (!el) return false;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
    else el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    return true;
  }

  /* ---------- Mobile menu ---------- */
  const burger = $(".burger");
  const mobileMenu = $(".mobile-menu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (burger) { burger.setAttribute("aria-expanded", String(open)); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
    if (mobileMenu) mobileMenu.setAttribute("aria-hidden", String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  }
  burger && burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- In-page links ---------- */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#'], [data-scroll-to]");
    if (!a) return;
    const sel = a.getAttribute("data-scroll-to") || a.getAttribute("href");
    if (!sel || sel === "#") return;
    const wasOpen = document.body.classList.contains("menu-open");
    if (wasOpen) setMenu(false);
    if ($(sel)) {
      e.preventDefault();
      setTimeout(() => scrollToTarget(sel), wasOpen ? 350 : 0);
      history.replaceState(null, "", sel === "#top" ? location.pathname : sel);
    }
  });

  /* ---------- Header: hide on scroll down, show on scroll up ---------- */
  const header = $(".header");
  let lastY = 0;
  function onScroll(y) {
    if (!header) return;
    header.classList.toggle("is-scrolled", y > 20);
    if (!document.body.classList.contains("menu-open")) {
      header.classList.toggle("is-hidden", y > lastY && y > 300);
    }
    lastY = y;
  }
  if (lenis) lenis.on("scroll", ({ scroll }) => onScroll(scroll));
  else addEventListener("scroll", () => onScroll(scrollY), { passive: true });

  /* ---------- Text splitting ---------- */
  function makeWord(content, cls) {
    const w = document.createElement("span");
    w.className = cls;
    if (cls === "word") {
      const inner = document.createElement("span");
      inner.className = "word-inner";
      typeof content === "string" ? (inner.textContent = content) : inner.appendChild(content);
      w.appendChild(inner);
    } else {
      typeof content === "string" ? (w.textContent = content) : w.appendChild(content);
    }
    return w;
  }
  function splitWords(el, cls = "word") {
    const label = el.textContent.replace(/\s+/g, " ").trim();
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(" "));
            else frag.appendChild(makeWord(p, cls));
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) {
          if (n.classList.contains("hl")) {
            const placeholder = document.createComment("");
            n.replaceWith(placeholder);
            placeholder.replaceWith(makeWord(n, cls));
          } else walk(n);
        }
      });
    };
    walk(el);
    el.setAttribute("aria-label", label);
    $$("." + cls, el).forEach((w) => w.setAttribute("aria-hidden", "true"));
    return $$("." + cls, el);
  }

  /* ---------- Reveal animations ---------- */
  const introTargets = []; // things that animate right after the preloader

  function setupReveals() {
    if (!hasGSAP || reduceMotion) return;

    $$("[data-split]").forEach((el) => {
      splitWords(el);
      const inners = $$(".word-inner", el);
      const vars = { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.045 };
      if (el.hasAttribute("data-after-loader")) {
        gsap.set(inners, { yPercent: 110 });
        introTargets.push(() => gsap.to(inners, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.06 }));
      } else {
        gsap.from(inners, { ...vars, scrollTrigger: { trigger: el, start: "top 88%" } });
      }
    });

    $$("[data-reveal]").forEach((el) => {
      const type = el.getAttribute("data-reveal");
      const from = type === "up" ? { y: 70, opacity: 0 } : { y: 16, opacity: 0 };
      if (el.hasAttribute("data-after-loader")) {
        gsap.set(el, from);
        introTargets.push(() => gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: type === "up" ? 0.35 : 0.15 }));
      } else {
        gsap.set(el, from);
      }
    });
    // Batch so items entering together stagger nicely
    ScrollTrigger.batch("[data-reveal]:not([data-after-loader])", {
      start: "top 90%",
      once: true,
      onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.1, overwrite: true }),
    });

    // Purple highlight pills grow from the left
    $$(".hl").forEach((hl) => {
      gsap.fromTo(hl, { "--hl": 0 }, { "--hl": 1, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: hl, start: "top 85%" } });
    });

    // Scroll-lit statement (words go from dim to full)
    $$("[data-lit]").forEach((el) => {
      const words = splitWords(el, "lit");
      gsap.to(words, {
        opacity: 1, ease: "none", stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
      });
    });

    // Image parallax inside work cards
    $$("[data-parallax]").forEach((el) => {
      gsap.fromTo(el, { yPercent: -7 }, {
        yPercent: 7, ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // Marquee band leans with scroll
    // Crossing strips open and close like scissors as you scroll past
    const bandST = { trigger: ".band", start: "top bottom", end: "bottom top", scrub: true };
    const stripA = $(".band__strip--a"), stripB = $(".band__strip--b");
    if (stripA) gsap.fromTo(stripA, { rotate: -7 }, { rotate: -2.5, ease: "none", scrollTrigger: bandST });
    if (stripB) gsap.fromTo(stripB, { rotate: 7 }, { rotate: 2.5, ease: "none", scrollTrigger: { ...bandST } });

    // Big footer wordmark rises in
    const mark = $(".footer__mark");
    if (mark) gsap.from(mark, { yPercent: 40, opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: mark, start: "top 95%" } });
  }

  /* ---------- Process: horizontal scroll on desktop ---------- */
  function setupProcess() {
    const section = $(".process");
    if (!section || !hasGSAP || reduceMotion) return;
    const track = $(".process__track", section);
    const bar = $(".process__progress i", section);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1000px)", () => {
      section.classList.add("is-horizontal");
      const distance = () => {
        const wrap = track.parentElement;
        const cs = getComputedStyle(wrap);
        const inner = wrap.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        return Math.max(0, track.scrollWidth - inner);
      };
      const tween = gsap.to(track, {
        x: () => -distance(), ease: "none",
        scrollTrigger: {
          trigger: section, start: "top top", end: () => "+=" + distance(),
          pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
        },
      });
      return () => { tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); gsap.set(track, { clearProps: "transform" }); section.classList.remove("is-horizontal"); };
    });
  }

  /* ---------- Hero pixel field (canvas) ---------- */
  function pixelField(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    const GAP = 30, RADIUS = 190;
    let w = 0, h = 0, dpr = 1, cols = 0, rows = 0, energy, spark, running = false, rafId = 0, t0 = performance.now();
    const m = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
      energy = new Float32Array(cols * rows);
      spark = new Float32Array(cols * rows);
      if (!running) draw(performance.now());
    }

    function draw(now) {
      ctx.clearRect(0, 0, w, h);
      // Smooth pointer; on touch devices it wanders on its own
      if (!m.active) {
        const t = (now - t0) / 1000;
        m.tx = w * (0.62 + 0.25 * Math.sin(t * 0.35));
        m.ty = h * (0.42 + 0.22 * Math.sin(t * 0.52 + 1.3));
      }
      m.x += (m.tx - m.x) * 0.12; m.y += (m.ty - m.y) * 0.12;

      // Random sparkles
      if (Math.random() < 0.35) spark[(Math.random() * spark.length) | 0] = 1;

      const offX = (w - (cols - 1) * GAP) / 2, offY = (h - (rows - 1) * GAP) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = offX + c * GAP, y = offY + r * GAP;
          const dx = x - m.x, dy = y - m.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const target = d < RADIUS ? 1 - d / RADIUS : 0;
          energy[i] += (target - energy[i]) * 0.14;
          spark[i] *= 0.955;
          const e = Math.max(energy[i], spark[i] * 0.8);
          const s = 2 + e * 11;
          if (e > 0.03) {
            ctx.fillStyle = `rgba(123,77,255,${(0.18 + e * 0.82).toFixed(3)})`;
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.07)";
          }
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
      if (running) rafId = requestAnimationFrame(draw);
    }

    function start() { if (running || reduceMotion) return; running = true; rafId = requestAnimationFrame(draw); }
    function stop() { running = false; cancelAnimationFrame(rafId); }

    host.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const r = canvas.getBoundingClientRect();
      m.tx = e.clientX - r.left; m.ty = e.clientY - r.top; m.active = true;
    });
    host.addEventListener("pointerleave", () => { m.active = false; });

    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop())).observe(canvas);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    resize();
  }

  /* ---------- Custom cursor ---------- */
  function setupCursor() {
    const cur = $(".cursor");
    if (!cur || isTouch || !hasGSAP) return;
    const xTo = gsap.quickTo(cur, "x", { duration: 0.25, ease: "power3" });
    const yTo = gsap.quickTo(cur, "y", { duration: 0.25, ease: "power3" });
    addEventListener("pointermove", (e) => { xTo(e.clientX); yTo(e.clientY); cur.classList.add("is-visible"); });
    document.addEventListener("pointerleave", () => cur.classList.remove("is-visible"));
    document.addEventListener("pointerover", (e) => {
      cur.classList.toggle("is-hover", !!e.target.closest("a, button, .svc, label, select, input, textarea"));
    });
  }

  /* ---------- Services clock: scroll turns the hand ---------- */
  function setupClock() {
    const sec = $(".clock-sec");
    if (!sec) return;
    const items = $$(".clock__item", sec);
    const panels = $$(".clock-panel", sec);
    const dots = $$(".clock-dots i", sec);
    const hand = $(".clock__hand--main", sec);
    const minHand = $(".clock__hand--min", sec);
    const n = items.length;
    const step = 360 / n;

    // Tick marks: 60 ticks, a purple one at every service
    const svg = $(".clock__ticks", sec);
    if (svg) {
      let out = "";
      const tick = (deg, major) => {
        const a = (deg * Math.PI) / 180;
        const r1 = 192, r2 = major ? 172 : 184;
        const x1 = 200 + r1 * Math.sin(a), y1 = 200 - r1 * Math.cos(a);
        const x2 = 200 + r2 * Math.sin(a), y2 = 200 - r2 * Math.cos(a);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${major ? "#7B4DFF" : "#3A3546"}" stroke-width="${major ? 3 : 1.4}" stroke-linecap="square"/>`;
      };
      const majors = Array.from({ length: n }, (_, i) => i * step);
      for (let k = 0; k < 60; k++) {
        const deg = k * 6;
        if (!majors.some((m) => Math.abs(m - deg) < 2.5)) out += tick(deg, false);
      }
      majors.forEach((m) => (out += tick(m, true)));
      out += `<circle cx="200" cy="200" r="150" fill="none" stroke="#2C2836" stroke-dasharray="2 6"/>`;
      svg.innerHTML = out;
    }

    let current = -1;
    function setActive(i) {
      i = Math.max(0, Math.min(n - 1, i));
      if (i === current) return;
      current = i;
      items.forEach((el, k) => el.classList.toggle("is-active", k === i));
      panels.forEach((el, k) => el.classList.toggle("is-active", k === i));
      dots.forEach((el, k) => el.classList.toggle("on", k === i));
      $$(".cs-icon", sec).forEach((el, k) => el.classList.toggle("is-active", k === i));
      $$(".cs-proj", sec).forEach((el, k) => el.classList.toggle("is-active", k === i));
    }
    const turn = (deg) => {
      if (hasGSAP) {
        gsap.set(hand, { rotate: deg });
        gsap.set(minHand, { rotate: deg * 6 });
      } else {
        hand.style.transform = `rotate(${deg}deg)`;
        minHand.style.transform = `rotate(${deg * 6}deg)`;
      }
    };
    setActive(0);

    // No animation library or reduced motion: clicking a service turns the hand
    if (!hasGSAP || reduceMotion) {
      items.forEach((el, k) => el.addEventListener("click", () => { setActive(k); turn(k * step); }));
      return;
    }

    const state = { p: 0 };
    const spheres = $$(".sphere--1, .sphere--2, .sphere--3, .sphere--4", sec);
    const HOLD = 0.4; // share of each segment where the hand rests on a service
    const easeIO = gsap.parseEase("power2.inOut");
    // Map scroll progress to a "ticking" angle: rest on a service, then swing to the next
    const angleFor = (p) => {
      const raw = Math.min(p, 0.99999) * (n - 1);
      const i = Math.floor(raw);
      const f = raw - i;
      const t = f < HOLD ? 0 : easeIO((f - HOLD) / (1 - HOLD));
      return (i + t) * step;
    };
    const tween = gsap.to(state, {
      p: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        start: "top top",
        end: () => "+=" + Math.round(innerHeight * 0.5 * n),
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      onUpdate: () => {
        const a = state.p >= 1 ? step * (n - 1) : angleFor(state.p);
        turn(a);
        setActive(Math.round(a / step));
        // Spheres drift and orbit slightly as the clock turns
        spheres.forEach((s, k) => gsap.set(s, { y: (k % 2 ? -1 : 1) * state.p * 20 * (k + 1), rotate: state.p * (k % 2 ? -90 : 120) }));
      },
    });

    // Clicking a service scrolls to the point where the hand rests on it
    items.forEach((el, k) => el.addEventListener("click", () => {
      const st = tween.scrollTrigger;
      const frac = (k + HOLD / 2) / (n - 1);
      const y = st.start + (st.end - st.start) * Math.min(frac, 1);
      if (lenis) lenis.scrollTo(y, { duration: 1.2 }); else scrollTo({ top: y, behavior: "smooth" });
    }));
  }

  /* ---------- Services accordion ---------- */
  function setupServices() {
    const items = $$(".svc");
    const toggle = (item) => {
      const open = !item.classList.contains("is-open");
      items.forEach((i) => { i.classList.remove("is-open"); i.setAttribute("aria-expanded", "false"); });
      if (open) { item.classList.add("is-open"); item.setAttribute("aria-expanded", "true"); }
      setTimeout(() => hasGSAP && ScrollTrigger.refresh(), 650);
    };
    items.forEach((item) => {
      item.addEventListener("click", () => toggle(item));
      item.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(item); } });
    });
  }

  /* ---------- FAQ accordion ---------- */
  function setupFaq() {
    $$(".faq__item").forEach((item) => {
      const q = $(".faq__q", item);
      q.addEventListener("click", () => {
        const open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        q.setAttribute("aria-expanded", String(open));
        setTimeout(() => hasGSAP && ScrollTrigger.refresh(), 600);
      });
    });
  }

  /* ---------- Contact form ---------- */
  function setupForm() {
    const form = $(".form");
    if (!form) return;
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const checks = [
        ["name", (v) => v.trim().length > 1],
        ["email", emailOk],
        ["message", (v) => v.trim().length > 5],
      ];
      let firstBad = null;
      checks.forEach(([name, ok]) => {
        const input = form.elements[name];
        const field = input.closest(".field");
        const bad = !ok(String(data.get(name) || ""));
        field.classList.toggle("has-error", bad);
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      const services = data.getAll("service").join(", ") || "Not specified";
      const payload = {
        name: data.get("name"), email: data.get("email"), phone: data.get("phone"),
        budget: data.get("budget") || "Not specified", services, message: data.get("message"),
      };
      const success = $(".form__success", form);
      const btn = $("button[type=submit]", form);

      if (CONFIG.FORM_ENDPOINT) {
        btn.disabled = true;
        try {
          const res = await fetch(CONFIG.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
          if (!res.ok) throw new Error(res.status);
          $("h3", success).textContent = "Message sent!";
          $("p", success).textContent = "Thanks! We'll get back to you within one working day.";
        } catch (err) {
          btn.disabled = false;
          alert("Sorry, something went wrong. Please email us at " + CONFIG.CONTACT_EMAIL);
          return;
        }
      } else {
        const body = `Name: ${payload.name}\nEmail: ${payload.email}\nWhatsApp: ${payload.phone || "-"}\nBudget: ${payload.budget}\nServices: ${services}\n\n${payload.message}`;
        location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry — " + payload.name)}&body=${encodeURIComponent(body)}`;
        $("h3", success).textContent = "Almost done!";
        $("p", success).textContent = "Your email app has opened with your message. Just press send and we'll reply within one working day.";
      }
      form.classList.add("is-sent");
      hasGSAP && ScrollTrigger.refresh();
    });
    form.addEventListener("input", (e) => { const f = e.target.closest(".field"); f && f.classList.remove("has-error"); });
  }

  /* ---------- Contact: tabs, message form, video call booking ---------- */
  function setupContact() {
    const card = $("[data-ct]");
    if (!card) return;
    const tabs = $(".ct-tabs", card);
    const form = $("[data-ct-form]", card), book = $("[data-ct-book]", card), done = $("[data-ct-done]", card);
    const panes = [form, book, done];
    const refresh = () => hasGSAP && setTimeout(() => ScrollTrigger.refresh(), 60);
    const show = (i) => {
      panes.forEach((p, k) => p.classList.toggle("on", k === i));
      $$("[data-ct-tab]", card).forEach((b) => { const on = +b.dataset.ctTab === i; b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on)); });
      tabs.classList.toggle("right", i === 1);
      refresh();
    };
    $$("[data-ct-tab]", card).forEach((b) => b.addEventListener("click", () => show(+b.dataset.ctTab)));
    $$("[data-open-booking]").forEach((b) => b.addEventListener("click", () => { show(1); scrollToTarget(card); }));
    $("[data-again]", card).addEventListener("click", () => show(0));
    // Links like contact.html#book open the booking tab directly
    if (location.hash === "#book") { show(1); setTimeout(() => scrollToTarget(card), 600); }

    // Chip groups
    card.addEventListener("click", (e) => {
      const chip = e.target.closest(".ct-chip"); if (!chip) return;
      const grp = chip.parentElement;
      if (grp.hasAttribute("data-single")) $$(".ct-chip", grp).forEach((c) => c.classList.toggle("on", c === chip));
      else chip.classList.toggle("on");
    });
    const picked = (name) => $$(`[data-name="${name}"] .ct-chip.on`, card).map((c) => c.textContent).join(", ");
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    const finish = (text) => { $("[data-done-text]", card).textContent = text; show(2); };
    const mailto = (subject, bodyText) => { location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`; };

    // Message form
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = form.elements.name, email = form.elements.email, msg = form.elements.message;
      const bad = [[name, name.value.trim().length > 1], [email, emailOk(email.value.trim())], [msg, msg.value.trim().length > 5]];
      bad.forEach(([el, ok]) => el.classList.toggle("bad", !ok));
      const first = bad.find(([, ok]) => !ok); if (first) { first[0].focus(); return; }
      const payload = { name: name.value.trim(), email: email.value.trim(), services: picked("services") || "Not specified", budget: picked("budget") || "Not specified", message: msg.value.trim() };
      if (CONFIG.FORM_ENDPOINT) {
        try {
          const r = await fetch(CONFIG.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
          if (!r.ok) throw new Error(r.status);
          finish("Message sent! We'll get back to you within one working day.");
        } catch (err) { alert("Sorry, something went wrong. Please email us at " + CONFIG.CONTACT_EMAIL); }
      } else {
        mailto(`New project enquiry — ${payload.name}`, `Name: ${payload.name}\nEmail: ${payload.email}\nServices: ${payload.services}\nBudget: ${payload.budget}\n\n${payload.message}`);
        finish("Your email app has opened with your message. Just press send and we'll reply within one working day.");
      }
    });
    form.addEventListener("input", (e) => e.target.classList && e.target.classList.remove("bad"));

    // Booking calendar (Mon–Fri, from tomorrow, next 30 days; times in PKT)
    const TIMES = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM", "8:00 PM", "9:30 PM"];
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const isAvail = (d) => { const t = new Date(); t.setHours(0,0,0,0); return d > t && d.getDay() !== 0 && d.getDay() !== 6 && (d - t) / 864e5 <= 30; };
    const fmtDay = (d) => d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    const calEl = $("[data-cal]", book), slotsEl = $("[data-slots]", book), pickEl = $("[data-pick]", book), confirm = $("[data-confirm]", book);
    const now = new Date();
    let view = new Date(now.getFullYear(), now.getMonth(), 1), selDay = null, selTime = null;
    for (let i = 1; i < 10; i++) { const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i); if (isAvail(d)) { selDay = d; view = new Date(d.getFullYear(), d.getMonth(), 1); break; } }
    function drawCal() {
      const y = view.getFullYear(), m = view.getMonth(), first = (new Date(y, m, 1).getDay() + 6) % 7, days = new Date(y, m + 1, 0).getDate();
      let h = `<div class="cal__head"><span class="cal__month">${MONTHS[m]} ${y}</span><span class="cal__nav"><button type="button" data-p aria-label="Previous month">‹</button><button type="button" data-n aria-label="Next month">›</button></span></div><div class="cal__grid">`;
      ["MO","TU","WE","TH","FR","SA","SU"].forEach((w) => (h += `<span class="cal__wd">${w}</span>`));
      for (let i = 0; i < first; i++) h += "<span></span>";
      for (let d = 1; d <= days; d++) {
        const dt = new Date(y, m, d);
        h += `<button type="button" class="cal__day ${isAvail(dt) ? "avail" : "off"} ${dt.toDateString() === now.toDateString() ? "today" : ""} ${selDay && dt.toDateString() === selDay.toDateString() ? "sel" : ""}" data-d="${d}">${d}</button>`;
      }
      calEl.innerHTML = h + "</div>";
    }
    function drawSlots() {
      if (!selDay) return;
      slotsEl.innerHTML = `<div class="slots__title">${fmtDay(selDay)}</div>` + TIMES.map((t) => `<button type="button" class="slot ${t === selTime ? "sel" : ""}">${t}</button>`).join("") + `<div class="tz">Pakistan time (PKT, GMT+5)</div>`;
      pickEl.textContent = selTime ? `${fmtDay(selDay)} · ${selTime} · 30 min` : "Now pick a time";
      confirm.disabled = !selTime;
    }
    calEl.addEventListener("click", (e) => {
      if (e.target.closest("[data-p]")) { view.setMonth(view.getMonth() - 1); return drawCal(); }
      if (e.target.closest("[data-n]")) { view.setMonth(view.getMonth() + 1); return drawCal(); }
      const b = e.target.closest(".cal__day.avail"); if (!b) return;
      selDay = new Date(view.getFullYear(), view.getMonth(), +b.dataset.d); selTime = null; drawCal(); drawSlots();
    });
    slotsEl.addEventListener("click", (e) => { const s = e.target.closest(".slot"); if (s) { selTime = s.textContent; drawSlots(); } });
    drawCal(); drawSlots();

    confirm.addEventListener("click", () => {
      const nm = book.querySelector('[name="bname"]'), em = book.querySelector('[name="bemail"]');
      const ok1 = nm.value.trim().length > 1, ok2 = emailOk(em.value.trim());
      nm.classList.toggle("bad", !ok1); em.classList.toggle("bad", !ok2);
      if (!ok1 || !ok2) return (ok1 ? em : nm).focus();
      const app = picked("app") || "Google Meet";
      const when = `${fmtDay(selDay)} at ${selTime} (PKT)`;
      if (CONFIG.BOOKING_URL) {
        const ymd = `${selDay.getFullYear()}-${pad(selDay.getMonth() + 1)}-${pad(selDay.getDate())}`;
        const u = new URL(CONFIG.BOOKING_URL);
        u.searchParams.set("date", ymd); u.searchParams.set("name", nm.value.trim()); u.searchParams.set("email", em.value.trim());
        window.open(u.toString(), "_blank", "noopener");
        finish(`Your booking page opened in a new tab with ${fmtDay(selDay)} selected. Confirm the time there and you'll get a calendar invite with the ${app} link.`);
      } else {
        mailto(`Video call request — ${nm.value.trim()}`, `Hi MER team,\n\nI'd like a free discovery call.\n\nName: ${nm.value.trim()}\nEmail: ${em.value.trim()}\nPreferred time: ${when}\nApp: ${app}\n`);
        finish(`Your email app has opened with your request for ${when} on ${app}. Press send, and we'll confirm with a meeting link.`);
      }
    });
  }
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- Work page filters ---------- */
  function setupFilters() {
    const btns = $$(".filters button");
    if (!btns.length) return;
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => x.classList.toggle("is-active", x === b));
      const f = b.dataset.filter;
      $$(".card[data-cat]").forEach((c) => c.classList.toggle("is-filtered", f !== "all" && !c.dataset.cat.split(" ").includes(f)));
      hasGSAP && ScrollTrigger.refresh();
    }));
  }

  /* ---------- Preloader ---------- */
  function runPreloader(onDone) {
    const pre = $(".preloader");
    if (!pre) { onDone(); return; }
    const grid = $(".preloader__grid", pre);
    const countEl = $(".preloader__count span", pre);
    const pattern = "X...XXX.XXX.A.XX...XX...X";
    pattern.split("").forEach((ch) => {
      const i = document.createElement("i");
      if (ch === ".") i.className = "is-empty";
      if (ch === "A") i.className = "is-core";
      grid.appendChild(i);
    });

    if (!hasGSAP || reduceMotion) { pre.remove(); onDone(); return; }

    let quick = false;
    try { quick = sessionStorage.getItem("mer-visited") === "1"; sessionStorage.setItem("mer-visited", "1"); } catch (e) {}

    lenis && lenis.stop();
    const all = $$("i", grid);
    // Order: left column, right column, inner pixels, then the purple core
    const order = all
      .map((el, idx) => ({ el, r: Math.floor(idx / 5), c: idx % 5 }))
      .filter((p) => !p.el.classList.contains("is-empty"))
      .sort((a, b) => {
        const g = (p) => (p.el.classList.contains("is-core") ? 3 : p.c === 0 ? 0 : p.c === 4 ? 1 : 2);
        return g(a) - g(b) || a.r - b.r;
      })
      .map((p) => p.el);

    const loaded = Promise.race([
      Promise.all([
        document.fonts ? document.fonts.ready : Promise.resolve(),
        new Promise((r) => (document.readyState === "complete" ? r() : addEventListener("load", r, { once: true }))),
      ]),
      new Promise((r) => setTimeout(r, 4000)),
    ]);

    const counter = { v: 0 };
    const paint = () => (countEl.textContent = Math.round(counter.v));
    const tl = gsap.timeline();
    tl.to(counter, { v: 88, duration: quick ? 0.5 : 1.5, ease: "power2.inOut", onUpdate: paint }, 0);
    tl.to(order, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2.2)", stagger: quick ? 0.025 : 0.08 }, 0.1);
    tl.call(() => { tl.pause(); loaded.then(() => tl.resume()); });
    tl.to(counter, { v: 100, duration: 0.35, ease: "power1.out", onUpdate: paint });
    tl.to(grid, { scale: 1.15, duration: 0.5, ease: "power2.in" }, "+=0.1");
    tl.to(order.slice().reverse(), { opacity: 0, duration: 0.25, stagger: 0.012 }, "<");
    tl.to(pre, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "-=0.15");
    tl.call(onDone, null, "-=0.55");
    tl.call(() => { pre.remove(); lenis && lenis.start(); ScrollTrigger.refresh(); });
  }

  /* ---------- Boot ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  setupReveals();
  setupClock();
  setupProcess();
  setupServices();
  setupFaq();
  setupForm();
  setupContact();
  setupFilters();
  setupCursor();
  pixelField($(".hero__canvas"));

  runPreloader(() => introTargets.forEach((fn) => fn()));

  if (hasGSAP && document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
