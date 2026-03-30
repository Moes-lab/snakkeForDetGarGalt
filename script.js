const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");
const chatMessages = document.querySelector("#chatMessages");
const languageToggle = document.querySelector("#languageToggle");
const languageLabel = document.querySelector("#languageLabel");
const htmlRoot = document.documentElement;
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const siteMenu = document.querySelector("#siteMenu");
const chatSection = document.querySelector(".chat-section");
const chatClose = document.querySelector("#chatClose");
const searchTrigger = document.querySelector("#searchTrigger");
const searchPanel = document.querySelector("#searchPanel");
const searchClose = document.querySelector("#searchClose");
const searchForm = document.querySelector("#searchForm");
const siteSearch = document.querySelector("#siteSearch");

const translations = {
  da: {
    "banner.text": "Der er hjælp at hente, og du behøver ikke stå alene med det.",
    "utility.call": "Ring",
    "utility.text": "Skriv",
    "utility.chat": "Chat",
    "search.label": "Søg på siden",
    "search.button": "Search",
    "search.placeholder": "Search",
    "search.close": "Close",
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

  messageInput.placeholder = translations[language]["chat.placeholder"];
  if (siteSearch) {
    siteSearch.placeholder = translations[language]["search.placeholder"];
  }
  document.querySelector("#initialMessageOne").textContent = translations[language].initialOne;
  document.querySelector("#initialMessageTwo").textContent = translations[language].initialTwo;
  languageLabel.textContent = translations[language].toggle;
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

  const searchTargets = [
    { keywords: ["chat", "snak", "talk", "skriv"], selector: "#chat" },
    { keywords: ["hjælp", "help", "støtte", "support"], selector: "#helpCards" },
    { keywords: ["kilder", "sources", "viden", "learn", "research"], selector: "#resources" },
    { keywords: ["faq", "spørgsmål"], selector: "#resources" },
    { keywords: ["hjem", "home"], selector: "#top" }
  ];

  const match = searchTargets.find((target) =>
    target.keywords.some((keyword) => value.includes(keyword))
  );

  const element = document.querySelector(match?.selector || "#mainContent");
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openSearchPanel() {
  if (!searchPanel) return;
  searchPanel.hidden = false;
  searchTrigger?.setAttribute("aria-expanded", "true");
  window.setTimeout(() => siteSearch?.focus(), 0);
}

function closeSearchPanel() {
  if (!searchPanel) return;
  searchPanel.hidden = true;
  searchTrigger?.setAttribute("aria-expanded", "false");
}

function expandChat() {
  chatSection?.classList.add("chat-expanded");
  document.body.style.overflow = "hidden";
}

function collapseChat() {
  chatSection?.classList.remove("chat-expanded");
  document.body.style.overflow = "";
}

function closeMenu() {
  siteMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}

function openMenu() {
  siteMenu.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  expandChat();
  appendMessage(message, "user");
  messageInput.value = "";

  const replies = translations[currentLanguage].replies;
  const reply = replies[Math.floor(Math.random() * replies.length)];

  window.setTimeout(() => {
    appendMessage(reply, "assistant");
  }, 450);
});

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "da" ? "en" : "da");
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  runSiteSearch(siteSearch?.value || "");
  closeSearchPanel();
});

searchTrigger?.addEventListener("click", () => {
  if (searchPanel?.hidden) openSearchPanel();
  else closeSearchPanel();
});

searchClose?.addEventListener("click", closeSearchPanel);

messageInput?.addEventListener("focus", expandChat);
chatClose?.addEventListener("click", collapseChat);

menuToggle?.addEventListener("click", () => {
  if (siteMenu.hidden) openMenu();
  else closeMenu();
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

setLanguage("da");
