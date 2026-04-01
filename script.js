const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");
const chatMessages = document.querySelector("#chatMessages");
let languageToggle = document.querySelector("#languageToggle");
let languageLabel = document.querySelector("#languageLabel");
const htmlRoot = document.documentElement;
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const siteMenu = document.querySelector("#siteMenu");
const siteHeader = document.querySelector(".site-header");
const topBanner = document.querySelector(".top-banner");
const contactStrip = document.querySelector(".contact-strip");
const chatSection = document.querySelector(".chat-section");
const chatClose = document.querySelector("#chatClose");
const searchTrigger = document.querySelector("#searchTrigger");
const searchPanel = document.querySelector("#searchPanel");
const searchForm = document.querySelector("#searchForm");
const siteSearch = document.querySelector("#siteSearch");
let themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
let themeLabelElements = document.querySelectorAll("[data-theme-label]");
const heroSection = document.querySelector(".hero");
const heroOrbs = document.querySelectorAll(".hero-orb");
const revealElements = document.querySelectorAll("[data-reveal]");

const pageMetaTranslations = {
  "om-projektet.html": {
    da: { title: "Om Projektet | SnakFørDetGårGalt.dk", hero: "SnakFørDetGårGalt.dk" },
    en: { title: "About the Project | SnakFørDetGårGalt.dk", hero: "SnakFørDetGårGalt.dk" }
  },
  "teori.html": {
    da: { title: "Teori | SnakFørDetGårGalt.dk", hero: "Teoretisk grundlag" },
    en: { title: "Theory | SnakFørDetGårGalt.dk", hero: "Theoretical foundation" }
  },
  "metode.html": {
    da: { title: "Metode | SnakFørDetGårGalt.dk", hero: "Metode" },
    en: { title: "Method | SnakFørDetGårGalt.dk", hero: "Method" }
  },
  "analyse.html": {
    da: { title: "Analyse | SnakFørDetGårGalt.dk", hero: "Analyse" },
    en: { title: "Analysis | SnakFørDetGårGalt.dk", hero: "Analysis" }
  },
  "diskussion.html": {
    da: { title: "Diskussion | SnakFørDetGårGalt.dk", hero: "Diskussion" },
    en: { title: "Discussion | SnakFørDetGårGalt.dk", hero: "Discussion" }
  },
  "konklusion.html": {
    da: { title: "Konklusion | SnakFørDetGårGalt.dk", hero: "Konklusion" },
    en: { title: "Conclusion | SnakFørDetGårGalt.dk", hero: "Conclusion" }
  },
  "medieprodukt.html": {
    da: { title: "Produkt | SnakFørDetGårGalt.dk", hero: "Produkt" },
    en: { title: "Product | SnakFørDetGårGalt.dk", hero: "Product" }
  },
  "litteraturliste.html": {
    da: { title: "Litteraturliste | SnakFørDetGårGalt.dk", hero: "Litteraturliste" },
    en: { title: "Literature List | SnakFørDetGårGalt.dk", hero: "Literature List" }
  },
  "brug-af-ai.html": {
    da: { title: "Brug af AI | SnakFørDetGårGalt.dk", hero: "Brug af AI" },
    en: { title: "Use of AI | SnakFørDetGårGalt.dk", hero: "Use of AI" }
  },
  "bilag.html": {
    da: { title: "Bilag | SnakFørDetGårGalt.dk", hero: "Her finder du bilag 1 med interviewguide og bilag 2 med diskursanalyse." },
    en: { title: "Appendices | SnakFørDetGårGalt.dk", hero: "Here you will find appendix 1 with the interview guide and appendix 2 with the discourse analysis." }
  }
};

const commonStaticTranslations = {
  da: {
    skipLink: "Gå til indhold",
    menuHome: "Hjem",
    menuAbout: "Om projektet",
    menuTheory: "Teori",
    menuMethod: "Metode",
    menuAnalysis: "Analyse",
    menuDiscussion: "Diskussion",
    menuConclusion: "Konklusion",
    menuProduct: "Produkt",
    menuReferences: "Litteraturliste",
    menuAi: "Brug af AI",
    menuAppendix: "Bilag",
    footerTop: "Tilbage til toppen ↑",
    footerTagline: "Hvis du har brug for at tale, er vi her.",
    searchAria: "Søg",
    searchLabel: "Søg på siden",
    searchPlaceholder: "Søg",
    pageAboutLead: "Projektets forside til den faglige struktur. Her finder du gruppemedlemmer, indledning og motivation samt problemstilling, før resten af opgaven fortsætter på egne undersider."
  },
  en: {
    skipLink: "Skip to content",
    menuHome: "Home",
    menuAbout: "About the project",
    menuTheory: "Theory",
    menuMethod: "Method",
    menuAnalysis: "Analysis",
    menuDiscussion: "Discussion",
    menuConclusion: "Conclusion",
    menuProduct: "Product",
    menuReferences: "Literature list",
    menuAi: "Use of AI",
    menuAppendix: "Appendix",
    footerTop: "Back to top ↑",
    footerTagline: "If you need to talk, we are here.",
    searchAria: "Search",
    searchLabel: "Search the site",
    searchPlaceholder: "Search",
    pageAboutLead: "The project front page for the academic structure. Here you will find the group members, introduction and motivation, and the problem statement before the rest of the paper continues on separate subpages."
  }
};

function buildMenuIconSvg(key) {
  const icons = {
    home: `<svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-5h4v5"/></svg>`,
    about: `<svg viewBox="0 0 24 24"><path d="M12 8h.01"/><path d="M11 12h1v5h1"/><circle cx="12" cy="12" r="9"/></svg>`,
    theory: `<svg viewBox="0 0 24 24"><path d="M12 6v12"/><path d="M6 12h12"/><circle cx="12" cy="12" r="9"/></svg>`,
    method: `<svg viewBox="0 0 24 24"><path d="M8 5h8"/><path d="M10 5v4l-4.5 8a2 2 0 0 0 1.74 3h9.52A2 2 0 0 0 18.5 17L14 9V5"/></svg>`,
    analysis: `<svg viewBox="0 0 24 24"><path d="M5 18h14"/><path d="M7 14h10"/><path d="M9 10h6"/><path d="M11 6h2"/></svg>`,
    discussion: `<svg viewBox="0 0 24 24"><path d="M4 7h16"/><path d="M4 12h10"/><path d="M4 17h7"/></svg>`,
    conclusion: `<svg viewBox="0 0 24 24"><path d="M5 13 9 17 19 7"/></svg>`,
    media: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/></svg>`,
    references: `<svg viewBox="0 0 24 24"><path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2"/><path d="M6 4a2 2 0 0 0-2 2v14h2"/></svg>`,
    ai: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/><path d="M4.6 9a1.65 1.65 0 0 1-.33-1.82"/><path d="M9 4.6a1.65 1.65 0 0 1 1.82-.33"/><path d="M15 19.4a1.65 1.65 0 0 0 1.82.33"/><path d="M4.6 15a1.65 1.65 0 0 0-.33 1.82"/><path d="M19.4 9a1.65 1.65 0 0 1 .33-1.82"/><path d="M9 19.4a1.65 1.65 0 0 1-1.82.33"/><path d="M15 4.6a1.65 1.65 0 0 0 1.82-.33"/></svg>`,
    appendix: `<svg viewBox="0 0 24 24"><path d="M6 4h12v16H6z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>`
  };

  return icons[key] || icons.about;
}

function resolveMenuIconKey(href = "") {
  if (href.includes("index.html") || href === "#top") return "home";
  if (href.includes("om-projektet")) return "about";
  if (href.includes("teori")) return "theory";
  if (href.includes("metode")) return "method";
  if (href.includes("analyse")) return "analysis";
  if (href.includes("diskussion")) return "discussion";
  if (href.includes("konklusion")) return "conclusion";
  if (href.includes("medieprodukt")) return "media";
  if (href.includes("litteraturliste")) return "references";
  if (href.includes("brug-af-ai")) return "ai";
  if (href.includes("bilag")) return "appendix";
  return "about";
}

function enhanceMenuIcons() {
  const menuLinks = document.querySelectorAll(".menu-item-link");
  if (!menuLinks.length) return;

  menuLinks.forEach((link) => {
    if (link.querySelector(".menu-option-icon")) return;

    const icon = document.createElement("span");
    icon.className = "menu-option-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = buildMenuIconSvg(resolveMenuIconKey(link.getAttribute("href") || ""));
    link.prepend(icon);
  });
}

function ensureMenuAccessibilitySection() {
  const menuList = document.querySelector(".menu-list");
  if (!menuList || menuList.querySelector(".menu-accessibility-actions")) return;

  const accessibilityItem = document.createElement("details");
  accessibilityItem.className = "menu-item";
  accessibilityItem.innerHTML = `
    <summary>
      <span class="menu-option-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
      </span>
      <span data-i18n="menu.interpretation">Sprog og tilgængelighed</span>
    </summary>
    <div class="submenu menu-accessibility-actions">
      <button class="theme-menu-button" type="button" id="languageToggle" aria-label="Change language">
        <span class="menu-option-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg>
        </span>
        <span id="languageLabel">English</span>
      </button>
      <button class="theme-menu-button" type="button" data-theme-toggle>
        <span class="menu-option-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 3v2.5"/><path d="M12 18.5V21"/><path d="M4.93 4.93l1.77 1.77"/><path d="M17.3 17.3l1.77 1.77"/><path d="M3 12h2.5"/><path d="M18.5 12H21"/><path d="M4.93 19.07l1.77-1.77"/><path d="M17.3 6.7l1.77-1.77"/><circle cx="12" cy="12" r="4"/></svg>
        </span>
        <span data-theme-label>Dark mode</span>
      </button>
    </div>
  `;

  menuList.append(accessibilityItem);
}

function updateChatSendState() {
  if (!chatForm || !messageInput) return;
  const hasValue = messageInput.value.trim().length > 0;
  chatForm.classList.toggle("has-value", hasValue);
  const sendButton = chatForm.querySelector(".chat-send-button");
  if (sendButton) {
    sendButton.setAttribute("aria-hidden", hasValue ? "false" : "true");
    sendButton.tabIndex = hasValue ? 0 : -1;
  }
}

function syncBodyScrollLock() {
  const shouldLockScroll =
    chatSection?.classList.contains("chat-expanded") || isMenuOpen();
  document.body.style.overflow = shouldLockScroll ? "hidden" : "";
}

function syncHeaderLayout() {
  if (siteHeader) {
    const headerOffset = Math.round(siteHeader.getBoundingClientRect().bottom);
    htmlRoot.style.setProperty("--header-offset", `${headerOffset}px`);
  }
}

function setupRevealAnimations() {
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));
}

function setupHeroMotion() {
  if (!heroSection || !heroOrbs.length) return;

  const orbStrengths = [16, 24, 12, 20];

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    heroOrbs.forEach((orb, index) => {
      const strength = orbStrengths[index] || 16;
      orb.style.setProperty("--orb-x", `${offsetX * strength}px`);
      orb.style.setProperty("--orb-y", `${offsetY * strength}px`);
    });
  });

  heroSection.addEventListener("pointerleave", () => {
    heroOrbs.forEach((orb) => {
      orb.style.setProperty("--orb-x", "0px");
      orb.style.setProperty("--orb-y", "0px");
    });
  });
}

function setupTiltCards() {
  if (
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const tiltTargets = document.querySelectorAll(
    [
      ".help-card",
      ".resource-card",
      ".chat-shell",
      ".production-panel",
      ".menu-panel",
      ".resource-image",
      ".resource-video"
    ].join(", ")
  );

  tiltTargets.forEach((element) => {
    element.setAttribute("data-tilt-card", "true");

    const maxTilt =
      element.classList.contains("help-card") ? 10 :
      element.classList.contains("production-panel") ? 5 :
      element.classList.contains("menu-panel") ? 4 :
      7;

    const resetTilt = () => {
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--glow-x", "50%");
      element.style.setProperty("--glow-y", "50%");
      element.style.setProperty("--glow-alpha", "0");
    };

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const percentX = (event.clientX - rect.left) / rect.width;
      const percentY = (event.clientY - rect.top) / rect.height;
      const rotateY = (percentX - 0.5) * maxTilt;
      const rotateX = (0.5 - percentY) * maxTilt;

      element.style.setProperty("--tilt-x", `${rotateX}deg`);
      element.style.setProperty("--tilt-y", `${rotateY}deg`);
      element.style.setProperty("--glow-x", `${percentX * 100}%`);
      element.style.setProperty("--glow-y", `${percentY * 100}%`);
      element.style.setProperty("--glow-alpha", "1");
    });

    element.addEventListener("pointerleave", resetTilt);
    resetTilt();
  });
}

ensureMenuAccessibilitySection();
enhanceMenuIcons();
languageToggle = document.querySelector("#languageToggle");
languageLabel = document.querySelector("#languageLabel");
themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
themeLabelElements = document.querySelectorAll("[data-theme-label]");

const translations = {
  da: {
    "banner.text": "Der er hjælp at hente, og du behøver ikke stå alene med det.",
    "utility.call": "Ring",
    "utility.text": "Skriv",
    "utility.chat": "Chat",
    "search.label": "Søg på siden",
    "search.button": "Søg",
    "search.placeholder": "Søg",
    "search.close": "Luk",
    "menu.button": "Menu",
    "menu.close": "Luk menu",
    "menu.home": "Hjem",
    "menu.getHelp": "Få hjælp",
    "menu.learn": "Viden",
    "menu.involved": "Bliv en del af indsatsen",
    "menu.providers": "For fagpersoner",
    "menu.faq": "FAQ",
    "menu.media": "Ressourcer",
    "menu.about": "Om projektet",
    "menu.interpretation": "Sprog og tilgængelighed",
    "submenu.expect": "Hvad du kan forvente",
    "submenu.chat": "Chat med os",
    "submenu.sources": "Kilder og baggrund",
    "submenu.prevention": "Forebyggelse og dialog",
    "submenu.share": "Del viden",
    "submenu.support": "Støt projektet",
    "submenu.research": "Forskning",
    "submenu.method": "Metode og perspektiv",
    "submenu.free": "Er det gratis?",
    "submenu.anonymous": "Er det anonymt?",
    "hero.kicker": "Støtte uden fordømmelse",
    "hero.title": "Hvis du har brug for at tale, er vi her.",
    "hero.body": "Vi ved, at livets udfordringer kan føles tunge. Hvis du står med ensomhed, hårde tanker, vrede, afvisning eller online fællesskaber, der trækker dig i en negativ retning, kan det hjælpe at tale med nogen. Du er ikke alene.",
    "actions.call": "Ring",
    "actions.text": "Skriv",
    "actions.chat": "Chat",
    "actions.deaf": "Hørehæmmet",
    "expect.eyebrow": "Hvad du kan forvente",
    "expect.title": "Et trygt første skridt",
    "expect.body": "Projektet er lavet for at forebygge misogyniske og destruktive tankemønstre gennem støtte, refleksion og tidlig dialog. Her er tonen rolig, respektfuld og uden fordømmelse.",
    "chat.eyebrow": "Chat med os",
    "chat.title": "Skriv med os anonymt og gratis",
    "chat.body": "Denne chat er en demo til projektet. Den viser, hvordan en første kontakt kan føles enkel, rolig og overskuelig.",
    "box.two.eyebrow": "Et alternativ",
    "box.two.title": "Tal før spiralen vokser",
    "box.two.body": "En tidlig samtale kan hjælpe med at bryde isolation, vrede og destruktive online mønstre.",
    "box.three.eyebrow": "Et trygt valg",
    "box.three.title": "Anonymt og overskueligt",
    "box.three.body": "Du kan starte stille. Du behøver ikke have de rigtige ord klar for at række ud.",
    "visual.one": "Billedeområde",
    "visual.two": "Billedeområde",
    "visual.three": "Billedeområde",
    "chat.headerTitle": "Snak med os",
    "chat.headerBody": "Gratis og uden fordømmelse",
    "chat.headerSubbody": "Anyone. Anytime. Anonymous.",
    "chat.status": "Online nu",
    "chat.inputLabel": "Skriv en besked",
    "chat.send": "Send",
    "chat.placeholder": "Skriv din besked her...",
    "sources.eyebrow": "Projektets baggrund",
    "sources.title": "Kilder og viden",
    "sources.body": "Indholdet er inspireret af forskning og formidling om online risikoadfærd, incel-kultur, algoritmer og forebyggelse gennem dialog.",
    "sources.download": "Download vores projekt",
    "production.eyebrow": "Produktionsproces",
    "production.title": "Fra analyse til medieprodukt",
    "production.introOne": "Vores medieprodukt er en kort SoMe-video på 1-3 minutter, der henvender sig til unge mænd i risiko for incel-påvirkning. Formatet er valgt, fordi målgruppen primært møder både modfortællinger og radikaliserende indhold i hurtige, algoritmestyrede feeds på platforme som TikTok, Instagram Reels og YouTube Shorts.",
    "production.introTwo": "Videoen tager udgangspunkt i vores diskursanalyse og viser, hvordan gentagelse, humor og polariserende udsagn kan skabe en oplevelse af normalitet. Dramaturgisk bevæger den sig fra relativt uskyldigt indhold om selvoptimering mod mere ekstreme og fjendtlige fortællinger, før et markant brud med stilhed og sort skærm skaber plads til refleksion.",
    "production.introThree": "Som supplement har vi udviklet SnakFørDetGårGalt.dk, der tilbyder et trygt sted med støtte, viden og konkrete redskaber til at bryde med negative online fællesskaber.",
    "production.videoLink": "Se produktet her",
    "production.siteLink": "Tilhørende hjemmeside: SnakFørDetGårGalt.dk",
    "production.quote": "\"Hvis du mærker, at disse fællesskaber trækker dig ind: stop og scroll væk. Eller kontakt os.\"",
    "production.literatureTitle": "Litteraturliste",
    "production.litOne": "Zuboff, Shoshana (2019). The Age of Surveillance Capitalism. PublicAffairs.",
    "production.litTwo": "Gillespie, Tarleton (2018). Custodians of the Internet. Yale University Press.",
    "production.litThree": "Falktoft Ulrik (2025). Os og Dem. Materiale til Digital Kultur, Erhvervsakademi København.",
    "production.litFour": "Læremiddel.dk (2020). Diskursanalyse.",
    "production.litFive": "Izotova, N., Polishchuk, M., Taranik-Tkachuk, K. (2021). Discourse analysis and digital technologies.",
    "production.litSix": "Baker, Ging & Brandt Andreasen (2024). Recommending Toxicity.",
    "production.litSeven": "Center for Digital Pædagogik (2025). Forundersøgelse - Incelfællesskaber i stor vækst.",
    "production.litEight": "Reddit: I am turning into an incel.",
    "production.litNine": "Videnskab.dk: Incels og 80/20-reglen.",
    "production.litTen": "BBC (2018). Elliot Rodger: How misogynist killer became 'incel hero'.",
    "production.aiTitle": "Brug af AI",
    "production.aiBodyOne": "Vi har brugt AI til at vibe-kode vores hjemmeside.",
    "production.aiBodyTwo": "AI er desuden anvendt som skrive- og strukturassistent til idégenerering samt forslag til disposition og kapitelstruktur. Alle faglige valg, formuleringer, analyser, konklusioner, kilder og faktatjek er udarbejdet og verificeret af forfatterne.",
    "footer.top": "Tilbage til toppen ↑",
    "footer.tagline": "Hvis du har brug for støtte, så ræk ud. Et trygt sted at tale, før det går galt.",
    "footer.contact": "Kontakt",
    "footer.accessibility": "Tilgængelighed",
    "footer.support": "Støt",
    "footer.confidential": "Fortrolighed",
    "footer.privacy": "Privatliv",
    "footer.terms": "Vilkår",
    initialOne: "Hej. Du kan skrive her, hvis du har brug for at vende svære tanker, ensomhed eller frustrationer.",
    initialTwo: "Du behøver ikke formulere det perfekt. Hvad fylder mest hos dig lige nu?",
    toggle: "English",
    replies: [
      "Tak fordi du skriver. Det giver mening, at det fylder.",
      "Du er ikke alene med det her. Vil du prøve at sætte lidt flere ord på det?",
      "Vi kan tage det i små bidder. Hvad er det sværeste lige nu?",
      "Det er stærkt, at du rækker ud. En samtale tidligt kan gøre en forskel."
    ]
  },
  en: {
    "banner.text": "Help is available, and you do not have to carry this alone.",
    "utility.call": "Call",
    "utility.text": "Text",
    "utility.chat": "Chat",
    "search.label": "Search the site",
    "search.button": "Search",
    "search.placeholder": "Search",
    "search.close": "Close",
    "menu.button": "Menu",
    "menu.close": "Close Menu",
    "menu.home": "Home",
    "menu.getHelp": "Get Help",
    "menu.learn": "Learn",
    "menu.involved": "Get Involved",
    "menu.providers": "Providers & Professionals",
    "menu.faq": "FAQs",
    "menu.media": "Resources",
    "menu.about": "About the Project",
    "menu.interpretation": "Language & Accessibility",
    "submenu.expect": "What to Expect",
    "submenu.chat": "Chat with Us",
    "submenu.sources": "Sources and Background",
    "submenu.prevention": "Prevention and Dialogue",
    "submenu.share": "Share Knowledge",
    "submenu.support": "Support the Project",
    "submenu.research": "Research",
    "submenu.method": "Method and Perspective",
    "submenu.free": "Is it free?",
    "submenu.anonymous": "Is it anonymous?",
    "hero.kicker": "Support without judgment",
    "hero.title": "If you need to talk, we are here.",
    "hero.body": "We understand that life can feel heavy. If you are dealing with loneliness, difficult thoughts, anger, rejection, or online communities that pull you in a harmful direction, talking to someone can help. You are not alone.",
    "actions.call": "Call",
    "actions.text": "Text",
    "actions.chat": "Chat",
    "actions.deaf": "Deaf/HoH",
    "expect.eyebrow": "What to Expect",
    "expect.title": "A safe first step",
    "expect.body": "This project is designed to prevent misogynistic and destructive thinking patterns through support, reflection, and early dialogue. The tone here is calm, respectful, and non-judgmental.",
    "chat.eyebrow": "Chat with us",
    "chat.title": "Write to us anonymously and for free",
    "chat.body": "This chat is a project demo. It shows how a first conversation can feel simple, calm, and manageable.",
    "box.two.eyebrow": "An alternative",
    "box.two.title": "Talk before the spiral grows",
    "box.two.body": "An early conversation can help break isolation, anger, and destructive online patterns.",
    "box.three.eyebrow": "A safe option",
    "box.three.title": "Anonymous and manageable",
    "box.three.body": "You can start gently. You do not need to have the right words ready to reach out.",
    "visual.one": "Image area",
    "visual.two": "Image area",
    "visual.three": "Image area",
    "chat.headerTitle": "Talk with us",
    "chat.headerBody": "Free and without judgment",
    "chat.headerSubbody": "Anyone. Anytime. Anonymous.",
    "chat.status": "Online now",
    "chat.inputLabel": "Write a message",
    "chat.send": "Send",
    "chat.placeholder": "Write your message here...",
    "sources.eyebrow": "Project background",
    "sources.title": "Sources and knowledge",
    "sources.body": "The content is informed by research and reporting on online risk behavior, incel culture, algorithms, and prevention through dialogue.",
    "sources.download": "Download our project",
    "production.eyebrow": "Production process",
    "production.title": "From analysis to media product",
    "production.introOne": "Our media product is a short social media video of 1-3 minutes aimed at young men at risk of incel influence. We chose this format because the target group primarily encounters both counter-narratives and radicalizing content in fast, algorithm-driven feeds on platforms such as TikTok, Instagram Reels, and YouTube Shorts.",
    "production.introTwo": "The video draws on our discourse analysis and shows how repetition, humor, and polarizing statements can create a sense of normality. Dramaturgically, it moves from relatively harmless self-improvement content toward more extreme and hostile narratives before a sharp break with silence and a black screen creates space for reflection.",
    "production.introThree": "As a supplement, we developed SnakFørDetGårGalt.dk, which offers a safe place with support, knowledge, and concrete tools for breaking away from negative online communities.",
    "production.videoLink": "View the product here",
    "production.siteLink": "Related website: SnakFørDetGårGalt.dk",
    "production.quote": "\"If you feel these communities pulling you in: stop and scroll away. Or contact us.\"",
    "production.literatureTitle": "Literature list",
    "production.litOne": "Zuboff, Shoshana (2019). The Age of Surveillance Capitalism. PublicAffairs.",
    "production.litTwo": "Gillespie, Tarleton (2018). Custodians of the Internet. Yale University Press.",
    "production.litThree": "Falktoft Ulrik (2025). Os og Dem. Material for Digital Culture, Copenhagen School of Design and Technology.",
    "production.litFour": "Læremiddel.dk (2020). Discourse analysis.",
    "production.litFive": "Izotova, N., Polishchuk, M., Taranik-Tkachuk, K. (2021). Discourse analysis and digital technologies.",
    "production.litSix": "Baker, Ging & Brandt Andreasen (2024). Recommending Toxicity.",
    "production.litSeven": "Center for Digital Pædagogik (2025). Preliminary study - incel communities are growing rapidly.",
    "production.litEight": "Reddit: I am turning into an incel.",
    "production.litNine": "Videnskab.dk: Incels and the 80/20 rule.",
    "production.litTen": "BBC (2018). Elliot Rodger: How misogynist killer became 'incel hero'.",
    "production.aiTitle": "Use of AI",
    "production.aiBodyOne": "We used AI to vibe-code our website.",
    "production.aiBodyTwo": "AI was also used as a writing and structure assistant for idea generation and suggestions for outline and chapter structure. All academic choices, wording, analyses, conclusions, sources, and fact checks were prepared and verified by the authors.",
    "footer.top": "Return to top ↑",
    "footer.tagline": "If you need support, reach out. A safe place to talk before things go wrong.",
    "footer.contact": "Contact",
    "footer.accessibility": "Accessibility",
    "footer.support": "Support",
    "footer.confidential": "Confidentiality",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    initialOne: "Hi. You can write here if you need to talk through difficult thoughts, loneliness, or frustration.",
    initialTwo: "You do not need to phrase it perfectly. What feels heaviest right now?",
    toggle: "Dansk",
    replies: [
      "Thank you for writing. It makes sense that this is weighing on you.",
      "You do not have to carry this alone. Would you like to say a little more about it?",
      "We can take it in small steps. What feels hardest right now?",
      "Reaching out is a strong first step. Early conversation can make a difference."
    ]
  }
};

let currentLanguage = "da";
let currentTheme = "light";
const themeLabels = {
  da: {
    light: "Mørk tilstand",
    dark: "Lys tilstand"
  },
  en: {
    light: "Dark mode",
    dark: "Light mode"
  }
};

function updateLanguageBlocks(language) {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.hidden = element.dataset.lang !== language;
  });
}

function updateThemeButtons() {
  const label = themeLabels[currentLanguage]?.[currentTheme] || themeLabels.da.light;
  themeLabelElements.forEach((element) => {
    element.textContent = label;
  });
}

function updateStaticSubpageUi(language) {
  const copy = commonStaticTranslations[language] || commonStaticTranslations.da;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const pageCopy = pageMetaTranslations[currentPage]?.[language];

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = copy.skipLink;

  const contactLinks = document.querySelectorAll(".contact-strip-inner a");
  if (contactLinks[0]) contactLinks[0].textContent = translations[language]["utility.call"];
  if (contactLinks[1]) contactLinks[1].textContent = translations[language]["utility.text"];
  if (contactLinks[2]) contactLinks[2].textContent = translations[language]["utility.chat"];

  if (searchTrigger) {
    searchTrigger.setAttribute("aria-label", copy.searchAria);
  }

  const searchLabel = document.querySelector('label[for="siteSearch"]');
  if (searchLabel) searchLabel.textContent = copy.searchLabel;

  if (siteSearch) {
    siteSearch.placeholder = copy.searchPlaceholder;
  }

  const menuLinkMap = [
    ["index.html#top", copy.menuHome],
    ["om-projektet.html#top", copy.menuAbout],
    ["teori.html#top", copy.menuTheory],
    ["metode.html#top", copy.menuMethod],
    ["analyse.html#top", copy.menuAnalysis],
    ["diskussion.html#top", copy.menuDiscussion],
    ["konklusion.html#top", copy.menuConclusion],
    ["medieprodukt.html#top", copy.menuProduct],
    ["litteraturliste.html#top", copy.menuReferences],
    ["brug-af-ai.html#top", copy.menuAi],
    ["bilag.html#top", copy.menuAppendix]
  ];

  menuLinkMap.forEach(([href, text]) => {
    const link = document.querySelector(`.menu-item-link[href="${href}"]`);
    const label = link?.querySelector("span:last-child");
    if (label) label.textContent = text;
  });

  const returnTop = document.querySelector(".return-top");
  if (returnTop) returnTop.textContent = copy.footerTop;

  const footerColumns = document.querySelectorAll(".footer-column");
  if (footerColumns[0]) {
    const links = footerColumns[0].querySelectorAll("a");
    if (links[0]) links[0].textContent = translations[language]["footer.contact"];
    if (links[1]) links[1].textContent = translations[language]["footer.accessibility"];
    if (links[2]) links[2].textContent = translations[language]["footer.support"];
  }
  if (footerColumns[1]) {
    const links = footerColumns[1].querySelectorAll("a");
    if (links[0]) links[0].textContent = translations[language]["footer.confidential"];
    if (links[1]) links[1].textContent = translations[language]["footer.privacy"];
    if (links[2]) links[2].textContent = translations[language]["footer.terms"];
  }

  const footerTagline = document.querySelector(".footer-tagline-box p");
  if (footerTagline) footerTagline.textContent = copy.footerTagline;

  if (pageCopy) {
    document.title = pageCopy.title;
    const heroTitle = document.querySelector(".subpage-title");
    if (heroTitle) heroTitle.textContent = pageCopy.hero;
  }

  if (currentPage === "om-projektet.html") {
    const aboutLead = document.querySelector(".subpage-lead");
    if (aboutLead) aboutLead.textContent = copy.pageAboutLead;
  }
}

function setLanguage(language) {
  currentLanguage = language;
  htmlRoot.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (value) {
      element.textContent = value;
    }
  });

  if (messageInput) {
    messageInput.placeholder = translations[language]["chat.placeholder"];
  }
  if (siteSearch) {
    siteSearch.placeholder = translations[language]["search.placeholder"];
  }
  const initialMessageOne = document.querySelector("#initialMessageOne");
  const initialMessageTwo = document.querySelector("#initialMessageTwo");
  if (initialMessageOne) {
    initialMessageOne.textContent = translations[language].initialOne;
  }
  if (initialMessageTwo) {
    initialMessageTwo.textContent = translations[language].initialTwo;
  }
  if (languageLabel) {
    languageLabel.textContent = translations[language].toggle;
  }
  updateLanguageBlocks(language);
  updateStaticSubpageUi(language);
  updateThemeButtons();
  try {
    localStorage.setItem("siteLanguage", language);
  } catch {}
}

function setTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.body.classList.toggle("theme-dark", currentTheme === "dark");
  updateThemeButtons();
  try {
    localStorage.setItem("siteTheme", currentTheme);
  } catch {}
}

function createMessage(text, type) {
  const article = document.createElement("article");
  const paragraph = document.createElement("p");
  article.className = `message ${type}`;
  paragraph.textContent = text;
  article.appendChild(paragraph);
  return article;
}

function appendMessage(text, type) {
  chatMessages.appendChild(createMessage(text, type));
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function runSiteSearch(query) {
  const value = query.trim().toLowerCase();

  if (!value) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const searchTargets = [
    { keywords: ["chat", "snak", "talk", "skriv"], href: "index.html#chat" },
    { keywords: ["hjælp", "help", "støtte", "support"], href: "index.html#helpCards" },
    { keywords: ["analyse", "analysis", "diskursanalyse"], href: "analyse.html#analysis-overview" },
    { keywords: ["målgruppe", "target group"], href: "analyse.html#analysis-target-group" },
    { keywords: ["litteratur", "literature", "kilder", "sources"], href: "analyse.html#analysis-sources" },
    { keywords: ["motivation"], href: "om-projektet.html#motivation" },
    { keywords: ["problemformulering", "research question"], href: "om-projektet.html#problemformulering" },
    { keywords: ["teori", "theory"], href: "om-projektet.html#teori" },
    { keywords: ["metode", "method"], href: "om-projektet.html#metode" },
    { keywords: ["fund", "findings"], href: "om-projektet.html#analyse" },
    { keywords: ["diskussion", "konklusion", "conclusion"], href: "om-projektet.html#diskussion-konklusion" },
    { keywords: ["produktion", "produktionsproces", "production"], href: "om-projektet.html#produktionsproces" },
    { keywords: ["projektmateriale", "project material"], href: "om-projektet.html#projektmateriale" },
    { keywords: ["brug af ai", "ai"], href: "om-projektet.html#brug-af-ai" },
    { keywords: ["medieprodukt", "media product", "video", "somer-video"], href: "medieprodukt.html#media-overview" },
    { keywords: ["virkemidler", "creative tools"], href: "medieprodukt.html#media-ai" },
    { keywords: ["hjem", "home"], href: "index.html#top" }
  ];

  const match = searchTargets.find((target) =>
    target.keywords.some((keyword) => value.includes(keyword))
  );

  const targetHref = match?.href || `${currentPage}#mainContent`;
  const [targetPage, targetHash] = targetHref.split("#");

  if (targetPage === currentPage || targetPage === "") {
    const element = document.querySelector(`#${targetHash || "mainContent"}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (targetHash) {
      history.replaceState(null, "", `#${targetHash}`);
    }
    return;
  }

  window.location.href = targetHref;
}

function openSearchPanel() {
  if (!searchPanel) return;
  searchPanel.hidden = false;
  window.requestAnimationFrame(() => {
    searchPanel.classList.add("is-open");
  });
  searchTrigger?.setAttribute("aria-expanded", "true");
  window.setTimeout(() => siteSearch?.focus(), 0);
}

function closeSearchPanel() {
  if (!searchPanel) return;
  searchPanel.classList.remove("is-open");
  searchTrigger?.setAttribute("aria-expanded", "false");
  window.setTimeout(() => {
    if (!searchPanel.classList.contains("is-open")) {
      searchPanel.hidden = true;
    }
  }, 240);
}

function expandChat() {
  chatSection?.classList.add("chat-expanded");
  syncBodyScrollLock();
}

function collapseChat() {
  chatSection?.classList.remove("chat-expanded");
  syncBodyScrollLock();
}

function isMenuOpen() {
  return menuToggle?.getAttribute("aria-expanded") === "true";
}

function closeMenu() {
  if (!siteMenu || !menuToggle) return;
  menuToggle.setAttribute("aria-expanded", "false");
  siteMenu.classList.remove("is-open");
  syncBodyScrollLock();
  window.setTimeout(() => {
    if (!siteMenu.classList.contains("is-open")) {
      siteMenu.hidden = true;
    }
  }, 360);
}

function openMenu() {
  if (!siteMenu || !menuToggle) return;
  syncHeaderLayout();
  siteMenu.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
  syncBodyScrollLock();
  window.requestAnimationFrame(() => {
    siteMenu.classList.add("is-open");
  });
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  expandChat();
  appendMessage(message, "user");
  messageInput.value = "";
  updateChatSendState();

  const replies = translations[currentLanguage].replies;
  const reply = replies[Math.floor(Math.random() * replies.length)];

  window.setTimeout(() => {
    appendMessage(reply, "assistant");
  }, 450);
});

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "da" ? "en" : "da");
});

messageInput?.addEventListener("input", updateChatSendState);

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  runSiteSearch(siteSearch?.value || "");
  closeSearchPanel();
});

searchTrigger?.addEventListener("click", () => {
  if (searchPanel?.hidden) {
    openSearchPanel();
    return;
  }

  const query = siteSearch?.value?.trim() || "";
  if (query) {
    runSiteSearch(query);
    closeSearchPanel();
    return;
  }

  closeSearchPanel();
});

document.addEventListener("click", (event) => {
  if (!searchPanel || searchPanel.hidden) return;
  if (searchPanel.contains(event.target) || searchTrigger?.contains(event.target)) return;
  closeSearchPanel();
});

messageInput?.addEventListener("focus", expandChat);
chatClose?.addEventListener("click", collapseChat);
updateChatSendState();

menuToggle?.addEventListener("click", () => {
  if (isMenuOpen()) closeMenu();
  else openMenu();
});

menuClose?.addEventListener("click", closeMenu);

siteMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

siteMenu?.addEventListener("click", (event) => {
  if (event.target === siteMenu) {
    closeMenu();
  }
});

let savedLanguage = "da";
try {
  savedLanguage = localStorage.getItem("siteLanguage") || "da";
} catch {}

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("siteTheme") || "light";
} catch {}

syncHeaderLayout();
window.addEventListener("load", syncHeaderLayout);
window.addEventListener("resize", syncHeaderLayout);
setTheme(savedTheme === "dark" ? "dark" : "light");
setLanguage(savedLanguage === "en" ? "en" : "da");
setupRevealAnimations();
setupHeroMotion();
setupTiltCards();


