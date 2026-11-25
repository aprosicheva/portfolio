/* =========================================================================
   ПЕЧАТНАЯ ВЕРСИЯ — сборка A4-документа из того же контента.
   Открывается как print.html?lang=ru (или ?lang=en), печатается в PDF.
   7 страниц: обложка · профиль · кейс 01 (2 стр.) · кейс 02 · компетенции · опыт
   ========================================================================= */

(function () {
  "use strict";

  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") === "en" ? "en" : "ru";
  const d = PORTFOLIO[lang];
  const total = 7;

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const L = {
    ru: {
      footRole: "бренд-менеджер",
      portfolio: "Портфолио бренд-менеджера",
      about: "Обо мне",
      cases: "Кейсы",
      skills: "Компетенции",
      approach: "Подход",
      exp: "Опыт",
      challenge: "Задача",
      actions: "Что сделала",
      result: "Масштаб",
      client: "Клиент",
      detail: "Детали",
      contacts: "Контакты",
      closing: "Открыта к предложениям и разговору о задачах",
      edu: "Образование",
      tools: "Инструменты",
      what: "Что ищу",
      continuation: "Продолжение кейса"
    },
    en: {
      footRole: "brand manager",
      portfolio: "Brand manager portfolio",
      about: "About",
      cases: "Cases",
      skills: "Skills",
      approach: "Approach",
      exp: "Experience",
      challenge: "Challenge",
      actions: "What I did",
      result: "Scale",
      client: "Client",
      detail: "Details",
      contacts: "Contacts",
      closing: "Open to offers and to a conversation about your challenges",
      edu: "Education",
      tools: "Tools",
      what: "What I am looking for",
      continuation: "Case continued"
    }
  }[lang];

  const nameFlat = () => d.hero.name.replace(/\n/g, " ");

  const foot = (n) => `
    <div class="sheet__foot">
      <span><b>${esc(nameFlat())}</b> · ${esc(L.footRole)}</span>
      <span>${String(n).padStart(2, "0")} / ${total}</span>
    </div>`;

  /* ---------------- 01 обложка ---------------- */

  const cover = `
  <section class="sheet cover">
    <div class="cover__top">
      <span>${esc(L.portfolio)} <span class="dot">✳</span> 2026</span>
      <span>${esc(d.hero.meta[0])}</span>
    </div>

    <div class="cover__mid">
      <h1 class="cover__name">${esc(d.hero.name)}</h1>
      <p class="cover__role">${esc(d.hero.role)}</p>
      <div class="cover__rule"></div>
      <p class="cover__lead">${esc(d.hero.lead)}</p>
      <p class="cover__sub">${esc(d.hero.sub)}</p>

      <div class="cover__tags">
        ${d.marquee.map((t) => `<span>${esc(t)}</span>`).join("")}
      </div>
    </div>

    <div class="cover__bottom">
      <div class="cover__contacts">
        <span><b>${esc(L.contacts)}</b></span>
        <span>${esc(d.contact.mail)}</span>
        <span>${esc(d.contact.phone)}</span>
        ${d.contact.links.map((l) => `<span>${esc(l.label)} · ${esc(l.v)}</span>`).join("")}
        <span>${esc(d.hero.meta.join(" · "))}</span>
      </div>
      <div class="cover__index">
        <div><i>01</i><span>${esc(L.about)}</span><em>02</em></div>
        <div><i>02</i><span>${esc(L.cases)}</span><em>03–05</em></div>
        <div><i>03</i><span>${esc(L.skills)}</span><em>06</em></div>
        <div><i>04</i><span>${esc(L.exp)}</span><em>07</em></div>
      </div>
    </div>

    <div class="band">
      ${d.stats.map((s) => `<div><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("")}
    </div>
  </section>`;

  /* ---------------- 02 профиль ---------------- */

  const profile = `
  <section class="sheet">
    <p class="eyebrow"><i>01</i>${esc(d.about.label)}</p>
    <h2>${esc(d.about.title)}</h2>

    <div class="two" style="grid-template-columns:1fr 58mm;gap:9mm;align-items:start">
      <div>
        ${d.about.text.map((p) => `<p style="break-inside:avoid">${esc(p)}</p>`).join("")}
      </div>
      <div>
        ${d.about.photo ? `<img src="${esc(d.about.photo)}" alt="" class="portrait">` : ""}
      </div>
    </div>

    <div class="stats" style="margin-top:7mm">
      ${d.stats.map((s) => `<div><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("")}
    </div>

    <div class="two" style="margin-top:8mm;grid-template-columns:1fr 1.15fr;gap:9mm">
      <div>
        <p class="mini-title">${esc(L.what)}</p>
        <dl class="kv">
          ${d.lookingFor.items.map((it) => `<div><dt>${esc(it.k)}</dt><dd>${esc(it.v)}</dd></div>`).join("")}
        </dl>
      </div>
      <div>
        <p class="mini-title">${esc(L.edu)}</p>
        <div class="edu">
          ${d.education.items.map((e) => `<div><b>${esc(e.v)}</b><span>${esc(e.l)}</span></div>`).join("")}
        </div>
        <p class="mini-title" style="margin-top:5mm">${esc(L.tools)}</p>
        <div class="chips">
          ${d.education.tools.map((t) => `<span>${esc(t)}</span>`).join("")}
        </div>
      </div>
    </div>
    ${foot(2)}
  </section>`;

  /* ---------------- 03–04 кейс 01: FitnessLook ---------------- */

  function caseHead(c) {
    return `
      <p class="eyebrow"><i>02</i>${esc(L.cases)}</p>

      <div class="case__head">
        <span class="case__no">${esc(c.no)}</span>
        <div>
          <h2 class="case__title">${esc(c.title)}</h2>
          <p class="case__sub">${esc(c.subtitle)}</p>
        </div>
      </div>

      <div class="case__meta">
        ${c.meta.map((m) => `<div><dt>${esc(m.k)}</dt><dd>${esc(m.v)}</dd></div>`).join("")}
      </div>

      ${c.scope ? `<p class="case__scope">${esc(c.scope)}</p>` : ""}`;
  }

  function caseBody(c) {
    return `
      <div class="two" style="gap:9mm;margin-bottom:1mm">
        <div class="block">
          <h3>${esc(L.challenge)}</h3>
          <p>${esc(c.challenge)}</p>
        </div>
        <div class="block block--insight">
          <h3>${esc(L.approach)}</h3>
          <p>${esc(c.approach)}</p>
        </div>
      </div>

      <div class="block">
        <h3>${esc(L.actions)}</h3>
        <ol class="actions">
          ${c.actions.map((a) => `<li>${esc(a)}</li>`).join("")}
        </ol>
      </div>`;
  }

  function brandsBlock(c) {
    if (!c.brands) return "";
    return `
      <div class="block" style="margin-bottom:0">
        <h3>${esc(c.brandsTitle)}</h3>
        <div class="brands">
          ${c.brands.map((b) => `
            <article class="brand">
              <h5>${esc(b.name)}</h5>
              <p class="brand__role">${esc(b.role)}</p>
              <ul class="brand__points">
                ${(b.points || []).slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join("")}
              </ul>
            </article>`).join("")}
        </div>
      </div>`;
  }

  function resultBand(c) {
    return `
      <div class="result">
        <div>
          <p class="mini-title" style="border:0;padding:0;margin:0 0 3mm">${esc(L.result)}</p>
          <div class="result__metrics">
            ${c.metrics.map((m) => `<div><b>${esc(m.v)}</b><span>${esc(m.l)}</span></div>`).join("")}
          </div>
        </div>
        <p class="note">${esc(c.note)}</p>
      </div>`;
  }

  function tagsBlock(c) {
    return `<div class="tags">${c.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;
  }

  function fitnessSheets(c) {
    return `
    <section class="sheet">
      ${caseHead(c)}
      ${caseBody(c)}
      ${brandsBlock(c)}
      ${foot(3)}
    </section>

    <section class="sheet">
      <p class="eyebrow"><i>02</i>${esc(L.continuation)} · ${esc(c.title)}</p>
      <div class="imgs imgs--4">
        ${(c.brands || []).map((b) => b.images && b.images[0]).filter(Boolean).slice(0, 4).map((im) => `<figure><img src="${esc(im.src)}" alt="${esc(im.alt)}"></figure>`).join("")}
      </div>
      ${tagsBlock(c)}

      <div class="block" style="margin-top:6mm;margin-bottom:0">
        <h3>${esc(d.shoots.title)}</h3>
        <p style="font-size:7.8pt;line-height:1.45;margin:0 0 3mm;max-width:150mm">${esc(d.shoots.sub)}</p>
        <div class="imgs imgs--shoot">
          ${d.shoots.images.slice(0, 3).map((im) => `<figure><img src="${esc(im.src)}" alt="${esc(im.alt)}"></figure>`).join("")}
        </div>
      </div>

      ${resultBand(c)}
      ${foot(4)}
    </section>`;
  }

  /* ---------------- 05 кейс 02: digital ---------------- */

  function resultsBlock(c) {
    if (!c.results) return "";
    return `
      <table class="results">
        <thead>
          <tr><th>${esc(L.client)}</th><th>${esc(L.result)}</th><th>${esc(L.detail)}</th></tr>
        </thead>
        <tbody>
          ${c.results.map((r) => `<tr><td>${esc(r.name)}</td><td class="m">${esc(r.metric)}</td><td>${esc(r.note)}</td></tr>`).join("")}
        </tbody>
      </table>`;
  }

  function caseSheet(c, page) {
    return `
    <section class="sheet">
      ${caseHead(c)}
      ${caseBody(c)}
      ${resultsBlock(c)}
      ${c.gallery ? `<div class="imgs imgs--${Math.min(2, c.gallery.length)}">${c.gallery.slice(0, 2).map((im) => `<figure><img src="${esc(im.src)}" alt="${esc(im.alt)}"></figure>`).join("")}</div>` : ""}
      ${tagsBlock(c)}
      ${resultBand(c)}
      ${foot(page)}
    </section>`;
  }

  /* ---------------- 06 компетенции + подход ---------------- */

  const skills = `
  <section class="sheet">
    <p class="eyebrow"><i>03</i>${esc(d.expertiseHead.label)}</p>
    <h2>${esc(d.expertiseHead.title)}</h2>
    <p style="max-width:146mm;margin-bottom:7mm">${esc(d.expertiseHead.sub)}</p>

    <div class="skills">
      ${d.expertise.map((e) => `
        <div>
          <b>${esc(e.title)}</b>
          <span>${esc(e.desc)}</span>
        </div>`).join("")}
    </div>

    <div style="margin-top:10mm">
      <p class="mini-title"><i>04</i> · ${esc(d.processHead.label)}</p>
      <div class="two" style="grid-template-columns:repeat(4,1fr);gap:6mm">
        ${d.process.map((s) => `
          <div style="border-top:1pt solid var(--ink);padding-top:3.5mm">
            <span style="color:var(--accent);font-size:9pt;font-weight:600">${esc(s.step)}</span>
            <p style="font-size:10pt;font-weight:800;letter-spacing:-0.02em;color:var(--ink);margin:2mm 0 1.6mm">${esc(s.title)}</p>
            <p style="font-size:8pt;line-height:1.45;margin:0">${esc(s.desc)}</p>
          </div>`).join("")}
      </div>
    </div>

    ${foot(6)}
  </section>`;

  /* ---------------- 07 опыт + закрытие ---------------- */

  const experience = `
  <section class="sheet">
    <p class="eyebrow"><i>05</i>${esc(d.experienceHead.label)}</p>
    <h2>${esc(d.experienceHead.title)}</h2>

    ${d.experience.map((j) => `
      <div class="job">
        <div>
          <div class="job__period">${esc(j.period)}</div>
          <div class="job__place">${esc(j.place)}</div>
        </div>
        <div>
          <h3>${esc(j.company)}</h3>
          <p class="job__company">${esc(j.role)}</p>
          <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </div>
      </div>`).join("")}

    <div class="closing">
      <div>
        <h3>${esc(L.closing)}</h3>
        <p>${esc(d.contact.sub)}</p>
      </div>
      <div style="text-align:right">
        <div class="mail">${esc(d.contact.mail)}</div>
        <div class="links">${esc(d.contact.phone)}</div>
        <div class="links">${d.contact.links.map((l) => esc(l.v)).join(" · ")}</div>
      </div>
    </div>

    ${foot(7)}
  </section>`;

  document.documentElement.lang = lang;
  document.title = d.title;
  document.getElementById("doc").innerHTML =
    cover +
    profile +
    fitnessSheets(d.cases[0]) +
    caseSheet(d.cases[1], 5) +
    skills +
    experience;

  document.body.dataset.ready = "1";

  /* диагностика переполнения: print.html?lang=ru&debug=1 */
  if (params.get("debug") === "1") {
    const style = document.createElement("style");
    style.textContent = ".sheet{height:auto!important;min-height:297mm}";
    document.head.appendChild(style);

    const info = [...document.querySelectorAll(".sheet")].map((s, i) => {
      const need = Math.round(s.getBoundingClientRect().height);
      const have = Math.round((297 * 96) / 25.4);
      const over = need > have ? " OVER+".concat(((need - have) / 96 * 25.4).toFixed(0), "mm") : "";
      return `p${i + 1}:${need}${over}`;
    });

    const box = document.createElement("pre");
    box.id = "fit";
    box.style.cssText =
      "position:fixed;left:0;top:0;z-index:9999;margin:0;padding:8px;background:#ff0;color:#000;font:12px monospace;white-space:pre-wrap";
    box.textContent = "A4=" + Math.round((297 * 96) / 25.4) + "px\n" + info.join("\n");
    document.body.appendChild(box);
  }
})();
