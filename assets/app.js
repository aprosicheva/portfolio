/* =========================================================================
   РЕНДЕР И ИНТЕРАКЦИИ
   Собирает страницу из PORTFOLIO (assets/content.js) на выбранном языке.
   Обычно этот файл трогать не нужно.
   ========================================================================= */

(function () {
  "use strict";

  const root = document.getElementById("app");
  const urlLang = new URLSearchParams(location.search).get("lang");
  const QA = new URLSearchParams(location.search).has("qa");

  /* localStorage может быть недоступен (file://, приватный режим) — не падаем */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  const state = {
    lang: urlLang === "en" || urlLang === "ru" ? urlLang : store.get("pf-lang") || detectLang()
  };

  function detectLang() {
    const p = (navigator.language || "ru").slice(0, 2).toLowerCase();
    return p === "ru" ? "ru" : "en";
  }

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  /* многострочный текст: \n → <br> на десктопе, пробел на узких экранах
     решается через CSS white-space: pre-line, поэтому просто оставляем \n */
  const nl = (s) => esc(s);

  const reveal = (delay = 0) =>
    delay ? ` data-reveal style="--d:${delay}ms"` : " data-reveal";

  /* ---------------- шапка ---------------- */

  function header(d) {
    return `
    <header class="site-header" id="hdr">
      <a class="brand" href="#top" aria-label="${esc(d.hero.name.replace(/\n/g, " "))}">
        <b>${esc(initials(d.hero.name))}</b><span>${esc(d.hero.role)}</span>
      </a>
      <nav class="nav" aria-label="Sections">
        ${d.nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <div class="lang" role="group" aria-label="Language">
          <button type="button" data-lang="ru" aria-pressed="${state.lang === "ru"}">RU</button>
          <button type="button" data-lang="en" aria-pressed="${state.lang === "en"}">EN</button>
        </div>
        <a class="btn btn--ghost btn--sm" href="${pdfHref()}" download="${pdfName()}">
          ${esc(d.navCta)}
          ${icon("down")}
        </a>
      </div>
    </header>`;
  }

  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase())
      .join("") + ".";
  }

  function pdfHref() {
    return state.lang === "ru" ? "portfolio-ru.pdf" : "portfolio-en.pdf";
  }

  /* имя файла при скачивании — чтобы у эйчара в загрузках был нормальный файл */
  function pdfName() {
    return state.lang === "ru"
      ? "Апросичева_Олеся_бренд-менеджер_портфолио.pdf"
      : "Aprosicheva_Olesya_Brand_Manager_Portfolio.pdf";
  }

  /* ---------------- иконки ---------------- */

  function icon(name) {
    const p = {
      down: '<path d="M7 3v8m0 0 3.2-3.2M7 11 3.8 7.8M2 13h10" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      arrow: '<path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    return `<svg viewBox="0 0 14 14" aria-hidden="true">${p[name] || ""}</svg>`;
  }

  /* ---------------- hero ---------------- */

  function hero(d) {
    return `
    <section class="hero" id="top">
      <div class="hero__glow-2" aria-hidden="true"></div>
      <div class="hero__inner">
        <p class="kicker"${reveal()}>${esc(d.hero.kicker)}</p>
        <h1${reveal(80)}>${nl(d.hero.name)}</h1>
        <div class="hero__row">
          <div${reveal(160)}>
            <p class="role">${esc(d.hero.role)}</p>
            <p class="lead">${nl(d.hero.lead)}</p>
          </div>
          <div class="hero__side"${reveal(240)}>
            <p class="hero__sub">${esc(d.hero.sub)}</p>
            <div class="hero__cta">
              <a class="btn btn--solid" href="#cases">${esc(d.hero.ctaPrimary)}${icon("arrow")}</a>
              <a class="btn btn--ghost" href="${pdfHref()}" download="${pdfName()}">${esc(d.hero.ctaSecondary)}${icon("down")}</a>
            </div>
            <ul class="hero__meta">
              ${d.hero.meta.map((m) => `<li>${esc(m)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        ${[...d.marquee, ...d.marquee].map((t) => `<span>${esc(t)}</span>`).join("")}
      </div>
    </div>`;
  }

  /* ---------------- обо мне ---------------- */

  function about(d) {
    return `
    <section class="section section--paper" id="about">
      <div class="wrap">
        <div class="section__head">
          <p class="eyebrow"${reveal()}><b>${esc(d.about.no)}</b>${esc(d.about.label)}</p>
          <h2 class="section__title"${reveal(60)}>${nl(d.about.title)}</h2>
        </div>
        <div class="about__grid">
          <div class="about__text"${reveal(120)}>
            ${d.about.text.map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
          <div${reveal(200)}>
            ${d.about.photo ? `<img class="about__photo" src="${esc(d.about.photo)}" alt="${esc(d.hero.name.replace(/\n/g, " "))}">` : ""}
            <dl class="facts">
              ${d.about.facts.map((f) => `<li><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></li>`).join("")}
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--plum" style="padding-block:clamp(40px,6vw,80px)">
      <div class="wrap">
        <div class="stats">
          ${d.stats.map((s, i) => `
            <div class="stat"${reveal(i * 70)}>
              <span class="stat__v">${esc(s.v)}</span>
              <span class="stat__l">${esc(s.l)}</span>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- кейсы ---------------- */

  function cases(d) {
    return `
    <section class="section section--paper" id="cases">
      <div class="wrap">
        <div class="section__head head--split">
          <div>
            <p class="eyebrow"${reveal()}><b>${esc(d.casesHead.no)}</b>${esc(d.casesHead.label)}</p>
            <h2 class="section__title"${reveal(60)} style="margin-top:16px">${nl(d.casesHead.title)}</h2>
          </div>
          <p class="section__sub"${reveal(140)}>${esc(d.casesHead.sub)}</p>
        </div>

        ${d.cases.map((c, i) => caseBlock(c, i)).join("")}
      </div>
    </section>`;
  }

  function caseBlock(c, i) {
    const delay = i * 60;
    return `
    <article class="case"${reveal(delay)}>
      <div class="case__head">
        <span class="case__no">${esc(c.no)}</span>
        <div class="case__title-wrap">
          <h3 class="case__title">${esc(c.title)}</h3>
          <p class="case__sub">${esc(c.subtitle)}</p>
        </div>
        <dl class="case__meta">
          ${c.meta.map((m) => `<div><dt>${esc(m.k)}</dt><dd>${esc(m.v)}</dd></div>`).join("")}
        </dl>
      </div>

      ${c.scope ? `<p class="case__scope"><span></span>${esc(c.scope)}</p>` : ""}

      <div class="case__grid">
        <div class="block">
          <h4>${esc(label(c, "challenge"))}</h4>
          <p>${esc(c.challenge)}</p>
        </div>
        <div class="block block--insight">
          <h4>${esc(label(c, "approach"))}</h4>
          <p>${esc(c.approach)}</p>
        </div>
        <div class="block">
          <h4>${esc(label(c, "actions"))}</h4>
          <ul class="case__actions">
            ${c.actions.map((a) => `<li>${esc(a)}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${c.brands ? brandsBlock(c) : ""}
      ${c.results ? resultsTable(c, label(c, "client"), label(c, "result")) : ""}
      ${c.gallery ? gallery(c.gallery, c.galleryCols || 2) : ""}

      <div class="case__foot">
        <div class="block">
          <h4>${esc(label(c, "result"))}</h4>
          <div class="metrics">
            ${c.metrics.map((m) => `<div class="metric"><b>${esc(m.v)}</b><span>${esc(m.l)}</span></div>`).join("")}
          </div>
        </div>
        <div>
          <p class="case__note">${esc(c.note)}</p>
          <ul class="tags">
            ${c.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>`;
  }

  function label(c, key) {
    const map = {
      ru: {
        challenge: "Задача", approach: "Подход", actions: "Что сделала", result: "Масштаб",
        client: "Клиент", metric: "Результат", detail: "Детали"
      },
      en: {
        challenge: "Challenge", approach: "Approach", actions: "What I did", result: "Scale",
        client: "Client", metric: "Result", detail: "Details"
      }
    };
    return map[state.lang][key];
  }

  /* добиваем последний ряд сетки, чтобы не было дыр */
  function gridMod(images) {
    const n = (images || []).length;
    if (n <= 3) return "";
    const rest = n % 3;
    if (rest === 1) return "brandblock__grid--rest1";
    if (rest === 2) return "brandblock__grid--rest2";
    return "";
  }
  /* бренды внутри портфеля */
  function brandsBlock(c) {
    return `
      <div class="brands">
        <p class="brands__title">${esc(c.brandsTitle)}</p>
        <div class="brands__list">
          ${c.brands.map((b, i) => `
            <article class="brandblock"${reveal(i * 50)}>
              <div class="brandblock__head">
                <h4>${esc(b.name)}</h4>
                <p class="brandblock__role">${esc(b.role)}</p>
              </div>
              <div class="brandblock__body">
                <ul class="brandblock__points">
                  ${(b.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}
                </ul>
                ${(b.images && b.images.length) ? `
                  <div class="brandblock__grid ${gridMod(b.images)}" style="grid-template-columns:repeat(${Math.min(b.images.length, 3)},1fr)">
                    ${b.images.map((im) => `
                      <figure><img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="${QA ? "eager" : "lazy"}" decoding="async" data-zoom></figure>`).join("")}
                  </div>` : ""}
              </div>
            </article>`).join("")}
        </div>
      </div>`;
  }
  /* таблица результатов по клиентам */
  function resultsTable(c, colClient, colResult) {
    return `
      <div class="results">
        <div class="results__head">
          <span>${esc(colClient)}</span>
          <span>${esc(colResult)}</span>
          <span>${esc(label(c, "detail"))}</span>
        </div>
        ${c.results.map((r) => `
          <div class="results__row">
            <span class="results__name">${esc(r.name)}</span>
            <span class="results__metric">${esc(r.metric)}</span>
            <span class="results__note">${esc(r.note)}</span>
          </div>`).join("")}
      </div>`;
  }

  /* галерея кейса */
  function gallery(items, cols) {
    return `
      <div class="gallery gallery--${cols}">
        ${items.map((im, i) => `
          <figure class="gallery__item${im.shape === "wide" ? " gallery__item--wide" : ""}${im.shape === "spread" ? " gallery__item--spread" : ""}${im.full ? " gallery__item--full" : ""}"${reveal(i * 60)}>
            <img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="${QA ? "eager" : "lazy"}" decoding="async">
            <figcaption>${esc(im.alt)}</figcaption>
          </figure>`).join("")}
      </div>`;
  }

  /* ---------------- съёмки ---------------- */

  function shoots(d) {
    return `
    <section class="section section--ink" id="shoots">
      <div class="wrap">
        <div class="section__head">
          <p class="eyebrow"${reveal()}><b>${esc(d.shoots.no)}</b>${esc(d.shoots.label)}</p>
          <h2 class="section__title"${reveal(60)}>${nl(d.shoots.title)}</h2>
          <p class="section__sub"${reveal(140)}>${esc(d.shoots.sub)}</p>
        </div>
        <div class="shoots__grid">
          ${d.shoots.images.map((im, i) => `
            <figure${reveal(i * 80)}>
              <img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="${QA ? "eager" : "lazy"}" decoding="async">
            </figure>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- компетенции ---------------- */

  function expertise(d) {
    return `
    <section class="section section--bone" id="expertise">
      <div class="wrap">
        <div class="section__head head--split">
          <div>
            <p class="eyebrow"${reveal()}><b>${esc(d.expertiseHead.no)}</b>${esc(d.expertiseHead.label)}</p>
            <h2 class="section__title"${reveal(60)} style="margin-top:16px">${nl(d.expertiseHead.title)}</h2>
          </div>
          <p class="section__sub"${reveal(140)}>${esc(d.expertiseHead.sub)}</p>
        </div>

        <div class="exp-list">
          ${d.expertise.map((e, i) => `
            <div class="exp-row"${reveal(i * 50)}>
              <span class="exp-row__idx">0${i + 1}</span>
              <h3 class="exp-row__title">${esc(e.title)}</h3>
              <div class="exp-row__body">
                <p class="exp-row__desc">${esc(e.desc)}</p>
                <ul class="exp-row__items">
                  ${e.items.map((it) => `<li>${esc(it)}</li>`).join("")}
                </ul>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- подход ---------------- */

  function process(d) {
    return `
    <section class="section section--ink" id="process">
      <div class="wrap">
        <div class="section__head">
          <p class="eyebrow"${reveal()}><b>${esc(d.processHead.no)}</b>${esc(d.processHead.label)}</p>
          <h2 class="section__title"${reveal(60)}>${nl(d.processHead.title)}</h2>
        </div>
        <div class="process">
          ${d.process.map((s, i) => `
            <div class="step"${reveal(i * 60)}>
              <span class="step__n">${esc(s.step)}</span>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.desc)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- опыт ---------------- */

  function experience(d) {
    return `
    <section class="section section--paper" id="experience">
      <div class="wrap">
        <div class="section__head">
          <p class="eyebrow"${reveal()}><b>${esc(d.experienceHead.no)}</b>${esc(d.experienceHead.label)}</p>
          <h2 class="section__title"${reveal(60)}>${nl(d.experienceHead.title)}</h2>
        </div>

        <div class="timeline">
          ${d.experience.map((j, i) => `
            <div class="tl-item"${reveal(i * 60)}>
              <div class="tl-weekday">
                <span class="tl-period">${esc(j.period)}</span>
                <span class="tl-place">${esc(j.place)}</span>
              </div>
              <div>
                <h3 class="tl-role">${esc(j.role)}</h3>
                <p class="tl-company">${esc(j.company)}</p>
                <ul class="tl-bullets">
                  ${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
                </ul>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- образование + поиск ---------------- */

  function education(d) {
    return `
    <section class="section section--bone" id="education">
      <div class="wrap two-col">
        <div${reveal()}>
          <p class="sub-title">${esc(d.education.title)}</p>
          <ul class="edu-list">
            ${d.education.items.map((e) => `<li><b>${esc(e.v)}</b><span>${esc(e.l)}</span></li>`).join("")}
          </ul>
          <p class="sub-title" style="margin-top:34px">${esc(d.education.toolsTitle)}</p>
          <ul class="tool-chips">
            ${d.education.tools.map((t) => `<li>${esc(t)}</li>`).join("")}
          </ul>
        </div>
        <div class="look-card"${reveal(120)}>
          <p class="sub-title">${esc(d.lookingFor.title)}</p>
          <dl>
            ${d.lookingFor.items.map((it) => `<div class="row"><dt>${esc(it.k)}</dt><dd>${esc(it.v)}</dd></div>`).join("")}
          </dl>
        </div>
      </div>
    </section>`;
  }

  /* ---------------- контакты ---------------- */

  function contact(d) {
    return `
    <section class="contact" id="contact">
      <div class="wrap">
        <p class="eyebrow"${reveal()}><b>${esc(d.contact.no)}</b>${esc(d.contact.label)}</p>
        <h2 class="contact__title"${reveal(60)}>${nl(d.contact.title)}</h2>
        <div class="contact__grid">
          <div${reveal(120)}>
            <p class="contact__sub">${esc(d.contact.sub)}</p>
            <a class="mail" href="mailto:${esc(d.contact.mail)}">${esc(d.contact.mail)}</a>
            <p class="contact__phone">
              <a href="tel:${esc(d.contact.phone.replace(/[^+\d]/g, ""))}">${esc(d.contact.phone)}</a>
            </p>
            <div class="contact__links">
              ${d.contact.links.map((l) => `
                <a href="${esc(l.href)}" target="_blank" rel="noopener">
                  <b>${esc(l.label)}</b><span>${esc(l.v)}</span>
                </a>`).join("")}
            </div>
          </div>
          <a class="btn contact__pdf" href="${pdfHref()}" download="${pdfName()}"${reveal(180)}>
            ${esc(d.pdfLabel)}${icon("down")}
          </a>
        </div>
      </div>
    </section>`;
  }

  function footer(d) {
    return `
    <footer class="site-footer">
      <div class="wrap">
        <span>${esc(d.footer)}</span>
        ${d.footerNote ? `<span class="footer-note">${esc(d.footerNote)}</span>` : ""}
        <a href="#top">${state.lang === "ru" ? "Наверх" : "Back to top"} ↑</a>
      </div>
    </footer>`;
  }

  /* ---------------- сборка ---------------- */

  function render() {
    const d = PORTFOLIO[state.lang];
    document.documentElement.lang = state.lang;
    document.title = d.title;
    root.innerHTML = [
      header(d), hero(d), about(d), cases(d), shoots(d), expertise(d),
      process(d), experience(d), education(d), contact(d), footer(d)
    ].join("");

    bind();
    observe();
  }

  /* ---------------- поведение ---------------- */

  function bind() {
    /* увеличение фото по клику */
    let overlay = null;
    const closeZoom = () => {
      if (!overlay) return;
      overlay.classList.remove("is-open");
      const el = overlay;
      overlay = null;
      document.body.style.overflow = "";
      setTimeout(() => el.remove(), 250);
    };
    const onKey = (e) => { if (e.key === "Escape") closeZoom(); };
    root.querySelectorAll("[data-zoom]").forEach((img) => {
      img.addEventListener("click", () => {
        closeZoom();
        overlay = document.createElement("div");
        overlay.className = "lightbox";
        overlay.innerHTML = `<img src="${img.getAttribute("src")}" alt="${img.getAttribute("alt")}">
          <button class="lightbox__close" aria-label="Закрыть">×</button>`;
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => overlay && overlay.classList.add("is-open"));
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay || e.target.closest(".lightbox__close")) closeZoom();
        });
      });
    });
    document.addEventListener("keydown", onKey);

    root.querySelectorAll("[data-lang]").forEach((b) => {
      b.addEventListener("click", () => {
        const next = b.dataset.lang;
        if (next === state.lang) return;
        state.lang = next;
        store.set("pf-lang", next);
        const y = window.scrollY;
        render();
        window.scrollTo({ top: y, behavior: "instant" });
      });
    });
  }

  let io;
  function observe() {
    const els = root.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    if (io) io.disconnect();
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
  }

  function onScroll() {
    const hdr = document.getElementById("hdr");
    if (!hdr) return;
    hdr.classList.toggle("is-stuck", window.scrollY > window.innerHeight * 0.65);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  render();
  onScroll();
})();
