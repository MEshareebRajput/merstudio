/* ==========================================================
   MER renderer: builds shared parts of every page from site-content.js
   (header, menu, footer, contact, services, process, projects, FAQ ...).
   You normally don't need to edit this file: edit site-content.js instead.
   ========================================================== */
(() => {
  "use strict";
  const S = window.SITE;
  if (!S) { console.warn("site-content.js is missing"); return; }

  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const C = S.contact || {};
  const waLink = `https://wa.me/${(C.whatsappNumber || "").replace(/\D/g, "")}`;
  const LINKS = {
    email: `mailto:${C.email}`, whatsapp: waLink, phone: `tel:${(C.phone || "").replace(/\s/g, "")}`,
    booking: "contact.html#book",
  };

  const ARROW = '<span class="btn__icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" stroke-width="1.6"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" stroke-width="1.6"/></svg></span>';
  const btn = (label, href, cls = "") => `<a href="${esc(href)}" class="btn ${cls}"><span class="btn__label"><span>${esc(label)}</span><span aria-hidden="true">${esc(label)}</span></span>${ARROW}</a>`;

  const ICONS = {
    web: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9l2 2-2 2M11 13h4"/>',
    shop: '<path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    brand: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3M4 20l1-4"/>',
    app: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    ai: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z"/>',
    seo: '<path d="M3 20h18M5 16l5-5 4 3 6-7M15 7h5v5"/>',
    video: '<rect x="2.5" y="5" width="14" height="14" rx="2"/><path d="M16.5 10l5-3v10l-5-3zM8 9.5v5l4-2.5z"/>',
    ugc: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 15.5s-3.5-2-3.5-4.3A1.8 1.8 0 0 1 12 10a1.8 1.8 0 0 1 3.5 1.2c0 2.3-3.5 4.3-3.5 4.3z"/>',
    photo: '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/>',
  };
  const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.web}</svg>`;

  const GRID = '<i></i><i class="e"></i><i class="e"></i><i class="e"></i><i></i><i></i><i></i><i class="e"></i><i></i><i></i><i></i><i class="e"></i><i class="c"></i><i class="e"></i><i></i><i></i><i class="e"></i><i class="e"></i><i class="e"></i><i></i><i></i><i class="e"></i><i class="e"></i><i class="e"></i><i></i>';
  const VISUALS = {
    browser: '<div class="mock__browser"><div class="mock__bar"><i></i><i></i><i></i></div><div class="mock__page"><div class="mock__line mock__line--h"></div><div class="mock__line" style="width:85%"></div><div class="mock__line mock__line--p"></div><div class="mock__row"><i></i><i></i><i></i></div></div></div>',
    phones: '<div class="mock__duo"><div class="mock__phone"><div class="mock__line mock__line--h"></div><div class="mock__line"></div><div class="mock__line mock__line--p"></div></div><div class="mock__phone"><div class="mock__line mock__line--h" style="width:50%"></div><div class="mock__line"></div><div class="mock__line" style="width:60%"></div></div></div>',
    brand: `<div class="mock__brand"><div class="mock__brand-grid">${GRID}</div></div>`,
    phone: '<div class="mock__phone" style="width:30%"><div class="mock__line mock__line--h"></div><div class="mock__line"></div><div class="mock__line" style="width:70%"></div><div class="mock__line mock__line--p"></div></div>',
    chat: '<div class="mock__chat"><i class="in"></i><i class="out"></i><i class="in s"></i><i class="out s"></i></div>',
    chart: '<div class="mock__chart"><i style="height:30%"></i><i style="height:45%"></i><i style="height:40%"></i><i style="height:62%"></i><i style="height:75%"></i><i style="height:92%"></i></div>',
    video: '<div class="mock__video"><span class="play"></span><span class="bar"><i></i></span></div>',
    ugc: '<div class="mock__phone mock__ugc" style="width:32%"><span class="play"></span><span class="heart"></span></div>',
    photos: '<div class="mock__photos"><i></i><i></i><i></i></div>',
  };
  const visual = (p) => p.image
    ? `<div class="mock" style="background:var(--panel)"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>`
    : `<div class="mock mock--${esc(p.color || "a")}">${VISUALS[p.visual] || VISUALS.browser}</div>`;
  const projectHref = (p) => (p.link ? p.link : "contact.html");
  const projectTarget = (p) => (p.link ? ' target="_blank" rel="noopener"' : "");
  const projectById = (id) => (S.projects || []).find((p) => p.id === id);

  /* ---------- Templates ---------- */
  const T = {};

  T.header = () => `
  <header class="header">
    <div class="container header__inner">
      <a href="index.html" class="header__logo" aria-label="${esc(S.brand.name)} home"><img src="assets/brand/mer-logo-horizontal-for-dark-bg.svg" alt="${esc(S.brand.name)}" width="90" height="30"></a>
      <nav class="nav" aria-label="Main">
        ${S.menu.filter((m) => m.page !== "contact.html").map((m) => `<a href="${esc(m.page)}" class="ulink${page === m.page ? " is-active" : ""}"${page === m.page ? ' aria-current="page"' : ""}>${esc(m.label)}</a>`).join("")}
        ${btn("Start a project", "contact.html", "btn--sm")}
      </nav>
      <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </header>
  <div class="mobile-menu" aria-hidden="true">
    <nav aria-label="Mobile">
      <a href="index.html"><span>00</span>Home</a>
      ${S.menu.map((m, i) => `<a href="${esc(m.page)}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(m.label)}</a>`).join("")}
    </nav>
    <div class="mobile-menu__foot"><a href="${LINKS.email}">${esc(C.email)}</a><span>${esc(S.brand.location)}</span></div>
  </div>`;

  T.footer = () => {
    const soc = Object.entries(S.social || {}).filter(([, u]) => u);
    return `
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <p class="footer__lead">${esc(S.brand.slogan).replace("Big", '<span class="text-purple">Big</span>')}</p>
        <div><h4>Explore</h4><ul><li><a class="ulink" href="index.html">Home</a></li>${S.menu.map((m) => `<li><a class="ulink" href="${esc(m.page)}">${esc(m.label)}</a></li>`).join("")}</ul></div>
        <div><h4>Contact</h4><ul><li><a class="ulink" href="${LINKS.email}">${esc(C.email)}</a></li><li><a class="ulink" href="${waLink}" target="_blank" rel="noopener">WhatsApp ${esc(C.whatsappDisplay)}</a></li><li>${esc(S.brand.location)}</li></ul></div>
        <div><h4>Social</h4><ul>${soc.map(([k, u]) => `<li><a class="ulink" href="${esc(u)}" target="_blank" rel="noopener">${k[0].toUpperCase() + k.slice(1)}</a></li>`).join("") || "<li>Coming soon</li>"}</ul></div>
      </div>
      <svg class="footer__mark" viewBox="0 0 202 60" aria-hidden="true" fill="currentColor">
        <path d="M0 60V0h16l16 22L48 0h16v60H50V24L32 46 14 24v36z"/><path transform="translate(74 0)" d="M0 0h44v14H14v9h26v14H14v9h30v14H0z"/><path transform="translate(128 0)" fill-rule="evenodd" d="M0 0h36l14 14v12l-10 8 10 26H35l-8-23H14v23H0z M14 14v11h18l4-3.5v-4L32 14z"/><rect x="188" y="46" width="14" height="14" fill="#7B4DFF"/>
      </svg>
      <div class="footer__bottom"><span>© ${new Date().getFullYear()} ${esc(S.brand.name)}. All rights reserved.</span><a href="terms.html" class="ulink">Terms &amp; Privacy</a><a href="#top" class="to-top ulink" data-scroll-to="#top">Back to top ↑</a></div>
    </div>
  </footer>`;
  };

  T.contact = () => {
    const chips = (name, list, single, on = -1) => `<div class="ct-chips" ${single ? "data-single" : "data-multi"} data-name="${name}">${list.map((l, i) => `<button type="button" class="ct-chip${i === on ? " on" : ""}">${esc(l)}</button>`).join("")}</div>`;
    return `
    <section class="ct" id="contact">
      <div class="container ct__grid">
        <div>
          <span class="label" data-reveal="fade">Contact</span>
          <h2 class="ct__title" data-split>Have an idea? <span>Let's build it.</span></h2>
          <p class="ct__lead" data-reveal="fade">Send us a message or book a free 30-minute video call. Pick whatever is easier for you.</p>
          <div class="ct__ways" data-reveal="up">
            <a class="ct__way" href="${LINKS.email}"><i>✉</i><div>${esc(C.email)}<small>Email us anytime</small></div></a>
            <a class="ct__way" href="${waLink}" target="_blank" rel="noopener"><i>✆</i><div>WhatsApp ${esc(C.whatsappDisplay)}<small>Quick questions, quick answers</small></div></a>
            <button class="ct__way" type="button" data-open-booking><i>▶</i><div>Free video call<small>Google Meet or Zoom · 30 min</small></div></button>
          </div>
        </div>
        <div class="ct-card" data-reveal="up" data-ct>
          <div class="ct-tabs" role="tablist"><span class="ct-tabs__ind"></span>
            <button class="on" role="tab" aria-selected="true" data-ct-tab="0">✉ Send a message</button>
            <button role="tab" aria-selected="false" data-ct-tab="1">▶ Book a video call</button>
          </div>
          <form class="ct-pane on" data-ct-form novalidate>
            <div class="ct-row2">
              <div><label class="ct-lbl" for="ct-name">Your name</label><input class="ct-in" id="ct-name" name="name" placeholder="Ali Khan" autocomplete="name"></div>
              <div><label class="ct-lbl" for="ct-email">Email</label><input class="ct-in" id="ct-email" name="email" type="email" placeholder="you@company.com" autocomplete="email"></div>
            </div>
            <div class="ct-field"><span class="ct-lbl">What do you need?</span>${chips("services", S.services.map((s) => s.clock.replace("‑", "-")), false)}</div>
            <div class="ct-field"><span class="ct-lbl">Budget</span>${chips("budget", ["< $1k", "$1k–3k", "$3k–10k", "$10k+", "Not sure"], true)}</div>
            <div class="ct-field"><label class="ct-lbl" for="ct-msg">Project details</label><textarea class="ct-in" id="ct-msg" name="message" rows="3" placeholder="A few lines about your idea, goals and timeline…"></textarea></div>
            <div class="ct-foot"><span class="ct-note">By sending this you agree to our <a href="terms.html">terms</a>. We reply ${esc(C.replyTime)}.</span><button class="ct-btn" type="submit">Send message ↗</button></div>
          </form>
          <div class="ct-pane" data-ct-book>
            <div class="ct-bookhead"><div><b>Free discovery call</b><small>30 min · Video call · No obligation</small></div>${chips("app", ["Google Meet", "Zoom"], true, 0)}</div>
            <div class="ct-bookgrid"><div class="cal" data-cal></div><div class="slots" data-slots><div class="slots__title">Pick a day first</div></div></div>
            <div class="ct-row2" style="margin-bottom:0"><input class="ct-in" name="bname" placeholder="Your name" autocomplete="name"><input class="ct-in" name="bemail" type="email" placeholder="Email for the invite" autocomplete="email"></div>
            <div class="ct-foot"><span class="ct-note" data-pick>No time selected</span><button class="ct-btn" type="button" data-confirm disabled>Request this time ↗</button></div>
          </div>
          <div class="ct-pane" data-ct-done><div class="ct-done"><div class="px"><i></i><i class="e"></i><i></i><i></i><i class="c"></i><i></i><i></i><i class="e"></i><i></i></div><h3>Almost done!</h3><p data-done-text>Thanks! We'll reply soon.</p><button class="ct-btn" type="button" data-again style="margin-top:20px">Back</button></div></div>
        </div>
      </div>
    </section>`;
  };

  T.clock = () => {
    const sv = S.services, n = sv.length, step = 360 / n;
    return `
    <section class="clock-sec" id="services">
      <div class="clock-sec__grain" aria-hidden="true"></div>
      <h2 class="visually-hidden">Our services</h2>
      <div class="container clock-sec__inner">
        <div class="clock-side clock-side--left" aria-live="polite">
          ${sv.map((s, i) => `<div class="cs-icon${i === 0 ? " is-active" : ""}"><span class="cs-icon__tile">${icon(s.icon)}</span><span class="cs-icon__num">${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}</span><h3>${esc(s.title)}</h3></div>`).join("")}
        </div>
        <div class="clock-stage">
          <span class="sphere sphere--1" aria-hidden="true"></span><span class="sphere sphere--4" aria-hidden="true"></span>
          <div class="clock">
            <svg class="clock__ticks" viewBox="0 0 400 400" aria-hidden="true"></svg>
            ${sv.map((s, i) => `<button class="clock__item${i === 0 ? " is-active" : ""}" style="--a:${(i * step).toFixed(2)}deg" aria-label="${esc(s.title)}"><span class="clock__label"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(s.clock)}</span></span></button>`).join("")}
            <span class="clock__hand clock__hand--min" aria-hidden="true"></span>
            <span class="clock__hand clock__hand--main" aria-hidden="true"><i></i></span>
            <span class="sphere clock__hub" aria-hidden="true"></span>
          </div>
          <span class="sphere sphere--2" aria-hidden="true"></span><span class="sphere sphere--3" aria-hidden="true"></span>
        </div>
        <div class="clock-side clock-side--right">
          ${sv.map((s, i) => { const p = projectById(s.project) || S.projects[0]; return `<a href="${esc(projectHref(p))}"${projectTarget(p)} class="cs-proj${i === 0 ? " is-active" : ""}"><div class="cs-proj__media">${visual(p)}</div><div class="cs-proj__info"><span>Related project</span><h4>${esc(p.title)}</h4><p>${esc(p.tags.join(" · "))}</p></div></a>`; }).join("")}
        </div>
      </div>
    </section>`;
  };

  T.process = () => `
    <section class="section section--paper process" id="process">
      <div class="process__pin">
        <div class="container"><div class="sec-head sec-head--split">
          <div><span class="label" data-reveal="fade">How we work</span><h2 class="h2" data-split style="margin-top:22px">From idea to launch in ${S.process.length} steps.</h2></div>
          <p class="lead" data-reveal="fade">A simple, transparent process. You always know what's happening, what's next and what it costs.</p>
        </div></div>
        <div class="container">
          <div class="process__track">
            ${S.process.map((st, i) => { const on = Math.ceil(((i + 1) / S.process.length) * 9); return `<article class="step"><div class="step__top"><span class="step__num">${String(i + 1).padStart(2, "0")}</span><span class="step__pixels">${Array.from({ length: 9 }, (_, k) => `<i${k < on ? ' class="on"' : ""}></i>`).join("")}</span></div><div><h3>${esc(st.title)}</h3><p>${esc(st.text)}</p><ul class="step__list">${st.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div></article>`; }).join("")}
          </div>
          <div class="process__progress"><i></i></div>
        </div>
      </div>
    </section>`;

  T.projectCard = (p) => `<a href="${esc(projectHref(p))}"${projectTarget(p)} class="card" data-cat="${esc(p.category)}" data-reveal="up"><div class="card__media"><span class="card__badge">${esc(p.badge)}</span><div class="card__visual" data-parallax>${visual(p)}</div><span class="card__view">${p.link ? "VISIT" : "ENQUIRE"}</span></div><div class="card__info"><div><h3 class="card__title">${esc(p.title)}</h3><p class="card__meta">${esc(p.meta)}</p></div><div class="card__tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div></a>`;

  T.filters = () => {
    const names = { web: "Websites", shop: "E-commerce", app: "Mobile apps", brand: "Branding", video: "Video & UGC", photo: "Photo" };
    const cats = [...new Set(S.projects.map((p) => p.category))];
    return `<button class="is-active" data-filter="all">All</button>${cats.map((c) => `<button data-filter="${esc(c)}">${esc(names[c] || c)}</button>`).join("")}`;
  };

  T.models = () => S.models.map((m, i) => `<article class="model${m.popular ? " model--featured" : ""}" data-reveal="up">${m.popular ? '<span class="model__tag">Popular</span>' : ""}<span class="model__icon">${Array.from({ length: 9 }, (_, k) => `<i${k < [1, 4, 9][i % 3] ? ' class="on"' : ""}></i>`).join("")}</span><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p><ul>${m.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></article>`).join("");

  T.faqItems = (limit) => (limit ? S.faq.slice(0, limit) : S.faq).map((f, i) => `<div class="faq__item${i === 0 ? " is-open" : ""}"><button class="faq__q" aria-expanded="${i === 0}">${esc(f.q)}<span class="faq__icon"></span></button><div class="faq__a"><div><p>${esc(f.a)}</p></div></div></div>`).join("");

  // Service cards: a visual preview (from the related project) + details. The first card is wide.
  T.serviceCards = () => S.services.map((s, i) => {
    const p = projectById(s.project) || S.projects[0];
    return `<a class="sv${i === 0 ? " sv--wide" : ""}" href="contact.html" id="svc-${esc(s.id)}" data-reveal="up">
      <div class="sv__media">${visual(p)}<span class="sv__num">${String(i + 1).padStart(2, "0")}</span><span class="sv__icon">${icon(s.icon)}</span></div>
      <div class="sv__body">
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
        <ul class="sv__tags">${s.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <span class="sv__cta"><span>Start this project</span><i aria-hidden="true">↗</i></span>
      </div>
    </a>`;
  }).join("");

  T.contactInfo = () => `
    <div class="info-grid">
      <a class="info" href="${LINKS.email}"><small>Email</small><b>${esc(C.email)}</b></a>
      <a class="info" href="${waLink}" target="_blank" rel="noopener"><small>WhatsApp</small><b>${esc(C.whatsappDisplay)}</b></a>
      <a class="info" href="${LINKS.phone}"><small>Phone</small><b>${esc(C.phone)}</b></a>
      <div class="info"><small>Location</small><b>${esc(C.city)}</b></div>
      <div class="info"><small>Working hours</small><b>${esc(C.hours)}</b></div>
      <div class="info"><small>Reply time</small><b>We reply ${esc(C.replyTime)}</b></div>
    </div>`;

  /* ---------- Render ---------- */
  // Whole blocks: <div data-render="header"></div> etc. are replaced
  $$("[data-render]").forEach((el) => {
    const kind = el.getAttribute("data-render");
    const limit = +el.getAttribute("data-limit") || 0;
    let html = "";
    switch (kind) {
      case "header": case "footer": case "contact": case "clock": case "process": case "contactInfo":
        el.outerHTML = T[kind](); return;
      case "projects": {
        let list = S.projects;
        if (el.hasAttribute("data-featured")) list = list.filter((p) => p.featured);
        if (limit) list = list.slice(0, limit);
        html = list.map(T.projectCard).join(""); break;
      }
      case "filters": html = T.filters(); break;
      case "models": html = T.models(); break;
      case "faq": html = T.faqItems(limit); break;
      case "serviceCards": html = T.serviceCards(); break;
      case "band": {
        const words = S.services.map((s) => s.clock.replace("‑", "-"));
        html = words.map((w) => `<span>${esc(w)}</span>`).join(""); break;
      }
    }
    el.innerHTML = html;
  });

  // Small bindings: data-text="contact.email", data-href="email|whatsapp|phone"
  $$("[data-text]").forEach((el) => {
    const v = el.getAttribute("data-text").split(".").reduce((o, k) => (o ? o[k] : undefined), S);
    if (v != null) el.textContent = v;
  });
  $$("[data-href]").forEach((el) => { const k = el.getAttribute("data-href"); if (LINKS[k]) el.setAttribute("href", LINKS[k]); });
  if (!S.settings.takingProjects) $$("[data-if='takingProjects']").forEach((el) => el.remove());

  // Contact page: open the booking tab when the URL ends with #book
  window.MER_LINKS = LINKS;
})();
