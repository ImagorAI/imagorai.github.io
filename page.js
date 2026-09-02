(function () {
  "use strict";

  /* Shared across every secondary page: nav + footer strings */
  const SHARED = {
    en: {
      nav_generator: "Generator",
      nav_trending: "Trending",
      nav_about: "About",
      footer_tag: "Free AI image prompt generator",
      footer_contact: "Contact",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms"
    },
    pt: {
      nav_generator: "Gerador",
      nav_trending: "Em alta",
      nav_about: "Sobre",
      footer_tag: "Gerador gratuito de prompts para imagens com IA",
      footer_contact: "Contato",
      footer_privacy: "Política de Privacidade",
      footer_terms: "Termos de Uso"
    }
  };

  let lang = "en";
  try {
    const saved = window.localStorage.getItem("imagorai_lang");
    if (saved === "en" || saved === "pt") lang = saved;
  } catch (e) { /* localStorage unavailable — default to en */ }

  function apply(dict) {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    const titleEl = document.getElementById("doc-title");
    if (titleEl && dict[lang].doc_title) {
      titleEl.textContent = dict[lang].doc_title;
      document.title = dict[lang].doc_title;
    }
    const descEl = document.getElementById("doc-desc");
    if (descEl && dict[lang].doc_desc) descEl.setAttribute("content", dict[lang].doc_desc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html") + "_html";
      if (dict[lang][key] !== undefined) el.innerHTML = dict[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[lang][key] !== undefined) el.setAttribute("placeholder", dict[lang][key]);
    });
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  window.ImagorPage = {
    init: function (pageDict) {
      const merged = { en: Object.assign({}, SHARED.en, pageDict.en), pt: Object.assign({}, SHARED.pt, pageDict.pt) };
      apply(merged);
      document.querySelectorAll(".lang-switch button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const next = btn.getAttribute("data-lang");
          if (next === lang) return;
          lang = next;
          try { window.localStorage.setItem("imagorai_lang", lang); } catch (e) {}
          apply(merged);
        });
      });
    }
  };
})();
