(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. UI TRANSLATIONS
  --------------------------------------------------------- */
  const I18N = {
    en: {
      doc_title: "ImagorAI — Free AI Image Prompt Generator",
      doc_desc: "Turn a simple idea into a powerful AI image prompt in seconds. No login, no prompt engineering — free bilingual AI image prompt generator.",
      nav_generator: "Generator",
      nav_trending: "Trending",
      nav_about: "About",
      hero_badge: "AI Image Prompt Generator • Free",
      hero_title_html: 'Create images that <span class="grad">stop the scroll.</span>',
      hero_sub: "Turn a simple idea into a powerful AI image prompt — no prompt engineering required.",
      hero_status: "Ready to create",
      benefit_1: "No login",
      benefit_2: "Instant prompts",
      benefit_3: "Copy & create",
      gen_title: "Prompt Generator",
      field_idea: "Your idea (optional)",
      field_idea_hint: "Describe what you want to create and we'll turn it into a detailed prompt using the options below.",
      field_idea_placeholder: "A woman walking through Tokyo at night",
      field_subject: "What to create?",
      field_style: "Style",
      field_lighting: "Lighting",
      field_mood: "Mood",
      field_location: "Location",
      field_camera: "Camera",
      field_ratio: "Aspect ratio",
      btn_generate: "Generate Prompt",
      btn_surprise: "Surprise Me",
      btn_copy: "Copy Prompt",
      btn_copied: "Copied ✓",
      result_label: "Your Prompt Is Ready",
      trend_title: "Trending Prompts",
      trend_sub: "Try what people are creating right now.",
      tag_viral: "Viral", tag_trending: "Trending", tag_hot: "Hot", tag_new: "New",
      card1_title: "AI Headshots", card1_desc: "Professional profile photos",
      card2_title: "Cinematic Travel", card2_desc: "Luxury travel photography",
      card3_title: "90s Yearbook", card3_desc: "Nostalgic social photos",
      card4_title: "Luxury Editorial", card4_desc: "High-fashion aesthetics",
      why_title: "Simple. Fast. Actually useful.",
      why_desc: "No prompt engineering degree required. Pick a few options and let ImagorAI build the structure for you.",
      feat1_title: "Seconds, not minutes",
      feat1_desc: "Go from idea to polished prompt without writing everything from scratch.",
      feat2_title: "Built for visual creators",
      feat2_desc: "Portraits, travel, fashion, products and social content — all in one place.",
      feat3_title: "No account needed",
      feat3_desc: "The first version runs entirely in your browser. No signup, subscription, or database is required.",
      footer_tag: "Free AI image prompt generator",
      footer_contact: "Contact",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",

      how_title: "From idea to image.",
      how_sub: "See exactly how ImagorAI turns a simple thought into a prompt worth using.",
      how_step1_label: "Your idea",
      how_step1_example: "A woman walking through Tokyo at night",
      how_step2_label: "ImagorAI",
      how_step2_prompt: "Create a cinematic travel photo set in Tokyo, with neon lighting and a mysterious atmosphere. Shot with a 35mm wide angle lens, realistic details, natural textures, refined composition, professional photography quality, subtle depth of field, high visual clarity. Aspect ratio 16:9.",
      how_step3_label: "Your result",
      how_cta: "Create your own prompt →"
    },
    pt: {
      doc_title: "ImagorAI — Gerador Gratuito de Prompts para Imagens com IA",
      doc_desc: "Transforme uma ideia simples em um prompt de imagem com IA poderoso em segundos. Sem cadastro, sem prompt engineering — gerador bilíngue e gratuito.",
      nav_generator: "Gerador",
      nav_trending: "Em alta",
      nav_about: "Sobre",
      hero_badge: "Gerador de Prompts para Imagens com IA • Grátis",
      hero_title_html: 'Crie imagens que <span class="grad">fazem as pessoas parar de rolar.</span>',
      hero_sub: "Transforme uma ideia simples em um poderoso prompt para imagens com IA — sem precisar entender de prompt engineering.",
      hero_status: "Pronto para criar",
      benefit_1: "Sem cadastro",
      benefit_2: "Prompts instantâneos",
      benefit_3: "Copie e crie",
      gen_title: "Gerador de Prompt",
      field_idea: "Sua ideia (opcional)",
      field_idea_hint: "Descreva o que você quer criar e vamos transformar isso em um prompt detalhado usando as opções abaixo.",
      field_idea_placeholder: "Uma mulher caminhando por Tóquio à noite",
      field_subject: "O que você quer criar?",
      field_style: "Estilo",
      field_lighting: "Iluminação",
      field_mood: "Clima",
      field_location: "Local",
      field_camera: "Câmera",
      field_ratio: "Proporção",
      btn_generate: "Gerar prompt",
      btn_surprise: "Surpreenda-me",
      btn_copy: "Copiar prompt",
      btn_copied: "Copiado ✓",
      result_label: "Seu Prompt Está Pronto",
      trend_title: "Prompts em alta",
      trend_sub: "Experimente o que está bombando agora.",
      tag_viral: "Viral", tag_trending: "Em alta", tag_hot: "Hot", tag_new: "Novo",
      card1_title: "Retratos com IA", card1_desc: "Fotos profissionais de perfil",
      card2_title: "Viagem Cinematográfica", card2_desc: "Fotografia de viagem premium",
      card3_title: "Anuário dos anos 90", card3_desc: "Fotos nostálgicas para redes",
      card4_title: "Editorial de Luxo", card4_desc: "Estética de alta moda",
      why_title: "Simples. Rápido. Realmente útil.",
      why_desc: "Você não precisa saber prompt engineering. Escolha algumas opções e o ImagorAI monta a estrutura para você.",
      feat1_title: "Segundos, não minutos",
      feat1_desc: "Passe da ideia ao prompt elaborado sem escrever tudo do zero.",
      feat2_title: "Feito para criadores visuais",
      feat2_desc: "Retratos, viagens, moda, produtos e conteúdo social — tudo em um só lugar.",
      feat3_title: "Sem cadastro",
      feat3_desc: "A primeira versão roda inteiramente no navegador. Não é necessário cadastro, assinatura ou banco de dados.",
      footer_tag: "Gerador gratuito de prompts para imagens com IA",
      footer_contact: "Contato",
      footer_privacy: "Política de Privacidade",
      footer_terms: "Termos de Uso",

      how_title: "Da ideia à imagem.",
      how_sub: "Veja exatamente como o ImagorAI transforma uma ideia simples em um prompt que vale a pena usar.",
      how_step1_label: "Sua ideia",
      how_step1_example: "Uma mulher caminhando por Tóquio à noite",
      how_step2_label: "ImagorAI",
      how_step2_prompt: "Crie uma foto de viagem de estilo cinematográfico, ambientada em Tóquio, com iluminação neon e uma atmosfera misteriosa. Fotografado com uma lente grande angular 35mm, detalhes realistas, texturas naturais, composição refinada, qualidade fotográfica profissional, profundidade de campo sutil, alta nitidez visual. Proporção 16:9.",
      how_step3_label: "Seu resultado",
      how_cta: "Crie seu próprio prompt →"
    }
  };

  /* ---------------------------------------------------------
     2. GENERATOR OPTIONS
     each option: id, en label, pt label, en phrase (for the
     sentence), pt phrase (for the sentence)
  --------------------------------------------------------- */
  const OPTIONS = {
    subject: [
      { id: "portrait", en: "Portrait", pt: "Retrato", phraseEn: "portrait", phrasePt: "retrato" },
      { id: "travel", en: "Travel photo", pt: "Foto de viagem", phraseEn: "travel photo", phrasePt: "foto de viagem" },
      { id: "product", en: "Product photo", pt: "Foto de produto", phraseEn: "product photo", phrasePt: "foto de produto" },
      { id: "fashion", en: "Fashion photo", pt: "Foto de moda", phraseEn: "fashion photo", phrasePt: "foto de moda" },
      { id: "food", en: "Food photo", pt: "Foto de comida", phraseEn: "food photo", phrasePt: "foto de comida" },
      { id: "interior", en: "Interior design", pt: "Design de interiores", phraseEn: "interior design scene", phrasePt: "cena de design de interiores" },
      { id: "social", en: "Social media photo", pt: "Foto para redes sociais", phraseEn: "social media photo", phrasePt: "foto para redes sociais" }
    ],
    style: [
      { id: "cinematic", en: "Cinematic", pt: "Cinematográfico", phraseEn: "cinematic", phrasePt: "cinematográfico" },
      { id: "luxury", en: "Luxury editorial", pt: "Editorial de luxo", phraseEn: "luxury editorial", phrasePt: "editorial de luxo" },
      { id: "minimalist", en: "Minimalist", pt: "Minimalista", phraseEn: "minimalist", phrasePt: "minimalista" },
      { id: "vintage", en: "Vintage film", pt: "Filme vintage", phraseEn: "vintage film", phrasePt: "estilo filme vintage" },
      { id: "photoreal", en: "Photorealistic", pt: "Fotorrealista", phraseEn: "photorealistic", phrasePt: "fotorrealista" },
      { id: "dreamy", en: "Dreamy", pt: "Onírico", phraseEn: "dreamy", phrasePt: "onírico" },
      { id: "futuristic", en: "Futuristic", pt: "Futurista", phraseEn: "futuristic", phrasePt: "futurista" }
    ],
    lighting: [
      { id: "golden", en: "Golden hour", pt: "Golden hour", phraseEn: "golden hour lighting", phrasePt: "iluminação de golden hour" },
      { id: "studio", en: "Soft studio light", pt: "Luz suave de estúdio", phraseEn: "soft studio lighting", phrasePt: "luz suave de estúdio" },
      { id: "window", en: "Natural window light", pt: "Luz natural de janela", phraseEn: "natural window light", phrasePt: "luz natural de janela" },
      { id: "neon", en: "Neon lighting", pt: "Luz neon", phraseEn: "neon lighting", phrasePt: "iluminação neon" },
      { id: "lowkey", en: "Dramatic low-key light", pt: "Luz dramática", phraseEn: "dramatic low-key lighting", phrasePt: "iluminação dramática de baixo contraste" },
      { id: "daylight", en: "Bright daylight", pt: "Luz do dia", phraseEn: "bright daylight", phrasePt: "luz do dia brilhante" }
    ],
    mood: [
      { id: "elegant", en: "Elegant", pt: "Elegante", phraseEn: "elegant", phrasePt: "elegante" },
      { id: "mysterious", en: "Mysterious", pt: "Misteriosa", phraseEn: "mysterious", phrasePt: "misteriosa" },
      { id: "energetic", en: "Energetic", pt: "Energética", phraseEn: "energetic", phrasePt: "energética" },
      { id: "calm", en: "Calm", pt: "Calma", phraseEn: "calm", phrasePt: "calma" },
      { id: "playful", en: "Playful", pt: "Divertida", phraseEn: "playful", phrasePt: "divertida" },
      { id: "powerful", en: "Powerful", pt: "Impactante", phraseEn: "powerful", phrasePt: "impactante" }
    ],
    location: [
      { id: "paris", en: "Paris", pt: "Paris", phraseEn: "Paris", phrasePt: "Paris" },
      { id: "nyc", en: "New York City", pt: "Nova York", phraseEn: "New York City", phrasePt: "Nova York" },
      { id: "tokyo", en: "Tokyo", pt: "Tóquio", phraseEn: "Tokyo", phrasePt: "Tóquio" },
      { id: "beach", en: "Tropical beach", pt: "Praia tropical", phraseEn: "a tropical beach", phrasePt: "uma praia tropical" },
      { id: "studio", en: "Modern studio", pt: "Estúdio moderno", phraseEn: "a modern studio", phrasePt: "um estúdio moderno" },
      { id: "euro", en: "European street", pt: "Rua europeia", phraseEn: "a European street", phrasePt: "uma rua europeia" },
      { id: "hotel", en: "Luxury hotel", pt: "Hotel de luxo", phraseEn: "a luxury hotel", phrasePt: "um hotel de luxo" }
    ],
    camera: [
      { id: "35mm", en: "35mm wide angle", pt: "Grande angular 35mm", phraseEn: "a 35mm wide angle lens", phrasePt: "uma lente grande angular 35mm" },
      { id: "50mm", en: "50mm natural perspective", pt: "Perspectiva natural 50mm", phraseEn: "a 50mm lens for a natural perspective", phrasePt: "uma lente 50mm de perspectiva natural" },
      { id: "85mm", en: "85mm portrait lens", pt: "Lente de retrato 85mm", phraseEn: "an 85mm portrait lens", phrasePt: "uma lente de retrato 85mm" },
      { id: "24mm", en: "24mm architectural lens", pt: "Lente arquitetônica 24mm", phraseEn: "a 24mm architectural lens", phrasePt: "uma lente arquitetônica 24mm" },
      { id: "macro", en: "Macro lens", pt: "Lente macro", phraseEn: "a macro lens", phrasePt: "uma lente macro" },
      { id: "smartphone", en: "Smartphone photography", pt: "Fotografia de smartphone", phraseEn: "a smartphone camera", phrasePt: "a câmera de um smartphone" }
    ],
    ratio: [
      { id: "1:1", en: "1:1", pt: "1:1" },
      { id: "4:5", en: "4:5", pt: "4:5" },
      { id: "16:9", en: "16:9", pt: "16:9" },
      { id: "9:16", en: "9:16", pt: "9:16" }
    ]
  };

  const FIELD_ORDER = ["subject", "style", "lighting", "mood", "location", "camera", "ratio"];

  /* current state */
  let lang = "en";
  try {
    const saved = window.localStorage.getItem("imagorai_lang");
    if (saved === "en" || saved === "pt") lang = saved;
  } catch (e) { /* localStorage unavailable — default to en */ }
  const selected = {
    subject: "portrait",
    style: "cinematic",
    lighting: "golden",
    mood: "elegant",
    location: "paris",
    camera: "85mm",
    ratio: "4:5"
  };
  let hasGenerated = false;

  /* ---------------------------------------------------------
     3. RENDER CHIPS
  --------------------------------------------------------- */
  function renderChips() {
    FIELD_ORDER.forEach(function (field) {
      const container = document.querySelector('[data-field="' + field + '"]');
      if (!container) return;
      container.innerHTML = "";
      OPTIONS[field].forEach(function (opt) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip" + (selected[field] === opt.id ? " selected" : "");
        chip.textContent = lang === "en" ? opt.en : opt.pt;
        chip.setAttribute("data-id", opt.id);
        chip.addEventListener("click", function () {
          selected[field] = opt.id;
          renderChips();
          if (hasGenerated) generate();
        });
        container.appendChild(chip);
      });
    });
  }

  /* ---------------------------------------------------------
     4. PROMPT GENERATION (natural-language templates)
  --------------------------------------------------------- */
  function findOpt(field, id) {
    return OPTIONS[field].find(function (o) { return o.id === id; });
  }

  function buildPrompt() {
    const s = {};
    FIELD_ORDER.forEach(function (f) { s[f] = findOpt(f, selected[f]); });

    const ideaEl = document.getElementById("ideaInput");
    const idea = ideaEl ? ideaEl.value.trim() : "";

    if (idea) {
      if (lang === "en") {
        return "Create a " + s.style.phraseEn + " image of " + idea + ", with " +
          s.lighting.phraseEn + " and a " + s.mood.phraseEn + " atmosphere. Shot with " + s.camera.phraseEn +
          ", realistic details, natural textures, refined composition, professional photography quality, " +
          "subtle depth of field, high visual clarity. Aspect ratio " + s.ratio.en + ".";
      }
      return "Crie uma imagem de estilo " + s.style.phrasePt + " a partir da ideia: " + idea + ", com " +
        s.lighting.phrasePt + " e uma atmosfera " + s.mood.phrasePt + ". Fotografado com " + s.camera.phrasePt +
        ", detalhes realistas, texturas naturais, composição refinada, qualidade fotográfica profissional, " +
        "profundidade de campo sutil, alta nitidez visual. Proporção " + s.ratio.pt + ".";
    }

    if (lang === "en") {
      return "Create a " + s.style.phraseEn + " " + s.subject.phraseEn + " set in " +
        s.location.phraseEn + ", with " + s.lighting.phraseEn + " and a " + s.mood.phraseEn +
        " atmosphere. Shot with " + s.camera.phraseEn +
        ", realistic details, natural textures, refined composition, professional photography quality, " +
        "subtle depth of field, high visual clarity. Aspect ratio " + s.ratio.en + ".";
    }

    return "Crie um(a) " + s.subject.phrasePt + " de estilo " + s.style.phrasePt + ", ambientado(a) em " +
      s.location.phrasePt + ", com " + s.lighting.phrasePt + " e uma atmosfera " + s.mood.phrasePt +
      ". Fotografado com " + s.camera.phrasePt +
      ", detalhes realistas, texturas naturais, composição refinada, qualidade fotográfica profissional, " +
      "profundidade de campo sutil, alta nitidez visual. Proporção " + s.ratio.pt + ".";
  }

  function generate() {
    const resultBlock = document.getElementById("resultBlock");
    const resultText = document.getElementById("resultText");
    resultText.textContent = buildPrompt();
    resultBlock.classList.add("show");
    hasGenerated = true;
    resetCopyState();
  }

  function surprise() {
    const ideaEl = document.getElementById("ideaInput");
    if (ideaEl) ideaEl.value = "";
    FIELD_ORDER.forEach(function (field) {
      const opts = OPTIONS[field];
      const pick = opts[Math.floor(Math.random() * opts.length)];
      selected[field] = pick.id;
    });
    renderChips();
    generate();
  }

  /* ---------------------------------------------------------
     5. COPY TO CLIPBOARD
  --------------------------------------------------------- */
  function resetCopyState() {
    const copyBtn = document.getElementById("copyBtn");
    const copyLabel = document.getElementById("copyLabel");
    copyBtn.classList.remove("copied");
    copyLabel.textContent = I18N[lang].btn_copy;
  }

  function resetHowCopyState() {
    const btn = document.getElementById("howCopyBtn");
    const label = document.getElementById("howCopyLabel");
    if (!btn || !label) return;
    btn.classList.remove("copied");
    label.textContent = I18N[lang].btn_copy;
  }

  function copyWithFeedback(text, btnEl, labelEl, resetFn) {
    function markCopied() {
      btnEl.classList.add("copied");
      labelEl.textContent = I18N[lang].btn_copied;
      setTimeout(resetFn, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(function () {
        fallbackCopy(text, markCopied);
      });
    } else {
      fallbackCopy(text, markCopied);
    }
  }

  function copyPrompt() {
    const text = document.getElementById("resultText").textContent;
    copyWithFeedback(text, document.getElementById("copyBtn"), document.getElementById("copyLabel"), resetCopyState);
  }

  function copyHowPrompt() {
    const text = document.getElementById("howPromptText").textContent;
    copyWithFeedback(text, document.getElementById("howCopyBtn"), document.getElementById("howCopyLabel"), resetHowCopyState);
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    cb();
  }

  /* ---------------------------------------------------------
     6. LANGUAGE SWITCHING
  --------------------------------------------------------- */
  function applyLanguage() {
    const dict = I18N[lang];
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.getElementById("doc-title").textContent = dict.doc_title;
    document.title = dict.doc_title;
    document.getElementById("doc-desc").setAttribute("content", dict.doc_desc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      const htmlKey = key + "_html";
      if (dict[htmlKey] !== undefined) el.innerHTML = dict[htmlKey];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    renderChips();
    if (hasGenerated) generate(); else resetCopyState();
    resetHowCopyState();
  }

  function setLanguage(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    try { window.localStorage.setItem("imagorai_lang", lang); } catch (e) {}
    applyLanguage();
  }

  /* ---------------------------------------------------------
     7. INIT
  --------------------------------------------------------- */
  function initScrollReveal() {
    const cards = document.querySelectorAll(".how-section .reveal");
    if (!cards.length) return;

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      cards.forEach(function (c) { c.classList.add("in-view"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    cards.forEach(function (c) { observer.observe(c); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderChips();
    if (lang === "pt") applyLanguage();

    document.getElementById("generateBtn").addEventListener("click", generate);
    document.getElementById("surpriseBtn").addEventListener("click", surprise);
    document.getElementById("copyBtn").addEventListener("click", copyPrompt);

    const ideaInput = document.getElementById("ideaInput");
    if (ideaInput) {
      ideaInput.addEventListener("input", function () {
        if (hasGenerated) generate();
      });
    }

    const howCopyBtn = document.getElementById("howCopyBtn");
    if (howCopyBtn) howCopyBtn.addEventListener("click", copyHowPrompt);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });

    initScrollReveal();
  });
})();
