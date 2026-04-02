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

const pageContentTranslations = {};

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

pageContentTranslations["om-projektet.html"] = {
  en: `
    <section class="subpage-hero" id="top">
      <div class="content-section">
        <p class="eyebrow">About the project</p>
        <h1 class="subpage-title">SnakFørDetGårGalt.dk</h1>
        <p class="subpage-lead">The project's front page for the academic structure. Here you will find the group members, introduction and motivation, and the problem statement before the rest of the paper continues on separate subpages.</p>
      </div>
    </section>
    <section class="content-section">
      <article class="resource-card subpage-card">
        <div class="production-copy">
          <h2>Group members</h2>
          <ul class="production-list">
            <li>Astrid Sofie Falkenberg, asfa0002@stud.ek.dk, Final editor</li>
            <li>Frederik Egede Johansen, frjo0008@stud.ek.dk, Idea developer</li>
            <li>Mohsen Estakhr, moes0001@stud.ek.dk, Analyst</li>
            <li>Oscar Bertram Merino Andersen, osan0001@stud.ek.dk, Communicator</li>
          </ul>
        </div>
      </article>
    </section>
    <section class="content-section" id="motivation">
      <article class="resource-card subpage-card">
        <div class="production-copy">
          <figure class="section-intro-figure">
            <img class="section-intro-image about-intro-image" src="abdos.jpg" alt="Boy and adult in a serious conversation" />
            <figcaption>The moving cover of Sting's "Fragile" in the Netflix series Adolescence (2025)</figcaption>
          </figure>
          <h2>Introduction and motivation</h2>
          <p>It is no coincidence that the Netflix series <em>Adolescence</em> won Film of the Year 2025 and that the series' lead actor, Owen Cooper, won a Golden Globe. The series addresses a highly relevant topic in digital culture: how incel culture affects young people. It is a topic that is growing both nationally and internationally. In the series, social media and extreme misogynistic attitudes are shown to have radicalized the 13-year-old Jamie and led to the murder of his female classmate.</p>
          <p>The manosphere is an umbrella term for online communities and opinion leaders who share specific views on gender and masculinity, often with a critical stance toward equality. A central part of the manosphere is incel culture, which includes men living in involuntary celibacy. The ideology is built on a distorted understanding of masculinity, where men feel entitled to sexual relationships with women. When that expectation is not met, feelings of failure and injustice are intensified in online communities where extreme gendered views are reinforced.</p>
          <p>We chose to immerse ourselves in the manosphere with a special focus on incel culture because the topic is both current and complex. It is not simply about lonely men on the internet, but about how digital communities can shape understandings of gender and masculinity and, in the worst case, lead to hatred and violence. <em>Adolescence</em> shows how dangerous it can become when young people are influenced by extreme views online.</p>
          <p>In this paper we therefore investigate the incel phenomenon. We describe incel culture as a digital culture, its spread, and the reasons why incel communities seem to be growing. We also examine the significance of algorithms, why they accelerate this growth, and why young men in particular may be at risk of online radicalization. Finally, based on our analysis, we discuss how social media algorithms and digital communities affect young men's self-understanding and how responsibility is distributed between platforms, users, and society.</p>
        </div>
      </article>
    </section>
    <section class="content-section" id="problemstilling">
      <article class="resource-card subpage-card">
        <div class="production-copy">
          <p class="eyebrow">Problem statement</p>
          <h2>Main research question</h2>
          <p><strong>How do recommendation algorithms on TikTok and YouTube contribute to the spread of incel-related content, and how does this affect young Danish men's self-perception and digital behaviour?</strong></p>
          <h2>Sub-questions</h2>
          <ul class="production-list">
            <li>How do young Danish men experience the content they are presented with on social media, as revealed through interviews?</li>
            <li>How does incel-related content affect young Danish men's self-perception and understanding of masculinity today?</li>
            <li>How do social media recommendation algorithms contribute to the spread of incel-related content?</li>
          </ul>
        </div>
      </article>
    </section>
    <section class="content-section" id="sideoversigt">
      <article class="resource-card subpage-card">
        <div class="production-copy">
          <h2>Read the project chapter by chapter</h2>
          <div class="production-grid">
            <section class="production-panel"><h3>Theoretical foundation</h3><p>Theoretical introduction and first- and second-semester theory.</p><p><a class="project-page-link" href="teori.html#top">Go to Theory</a></p></section>
            <section class="production-panel"><h3>Method</h3><p>Qualitative interview and discourse analysis in full length.</p><p><a class="project-page-link" href="metode.html#top">Go to Method</a></p></section>
            <section class="production-panel"><h3>Analysis</h3><p>The full analysis section with interview findings, discourses, and algorithms.</p><p><a class="project-page-link" href="analyse.html#top">Go to Analysis</a></p></section>
            <section class="production-panel"><h3>Discussion</h3><p>The full discussion of platforms, responsibility, and normalization.</p><p><a class="project-page-link" href="diskussion.html#top">Go to Discussion</a></p></section>
            <section class="production-panel"><h3>Conclusion</h3><p>The project's overall conclusion and limitations.</p><p><a class="project-page-link" href="konklusion.html#top">Go to Conclusion</a></p></section>
            <section class="production-panel"><h3>Product</h3><p>SoMe video, website, process, and purpose behind the media product.</p><p><a class="project-page-link" href="medieprodukt.html#top">Go to Product</a></p></section>
            <section class="production-panel"><h3>Literature list</h3><p>Books, articles, websites, and sources gathered as in the project.</p><p><a class="project-page-link" href="litteraturliste.html#top">Go to Literature list</a></p></section>
            <section class="production-panel"><h3>Use of AI</h3><p>The full statement about the use of AI and NotebookLM in the process.</p><p><a class="project-page-link" href="brug-af-ai.html#top">Go to Use of AI</a></p></section>
            <section class="production-panel"><h3>Appendix</h3><p>Interview guide and discourse analysis as a separate appendix page.</p><p><a class="project-page-link" href="bilag.html#top">Go to Appendix</a></p></section>
          </div>
        </div>
      </article>
    </section>
    <section class="content-section" id="download-project">
      <article class="resource-card subpage-card resource-layout">
        <div class="production-copy resource-copy">
          <p class="eyebrow">Download</p>
          <h2>Download our project</h2>
          <p>Here you can download the full PDF version of the project with all sections collected in one document.</p>
        </div>
        <div class="resource-image-wrap download-project-media">
          <img class="resource-image" src="projekt-doc-forside.png" alt="Front page of the project Incel culture" />
          <a class="project-page-link" href="Digital-kultur-Eksamen-2026-Incel-kulturen.pdf" download>Download PDF</a>
        </div>
      </article>
    </section>
  `
};

pageContentTranslations["teori.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Theoretical foundation</p><h1 class="subpage-title">Theoretical foundation</h1></div></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><p>To understand how incel culture affects young men's digital behaviour, and how digital platforms help shape and reinforce that influence, we work with three theoretical perspectives. We use Ulrik Falktoft's "Us and Them" model, which offers a social-psychological view of how groups form communities, define themselves against others, and can gradually move toward polarization and hostility. We also use Shoshana Zuboff's theory of surveillance capitalism as our main theory. It explains how social media platforms collect, analyse, and use behavioural data to predict and shape future actions through mechanisms such as tuning and herding. Finally, we use Tarleton Gillespie's theory of platforms as custodians of the internet, where social media acts as active gatekeepers deciding what becomes visible.</p></div></article></section>
    <section class="content-section" id="semester-one"><article class="resource-card subpage-card"><div class="production-copy"><h2>Us and Them</h2><p>The "Us and Them" model, developed by Ulrik Falktoft for the course Digital Culture, is used to understand how people divide others into groups and how that affects feelings and actions. The model shows that we feel the strongest empathy and responsibility toward those closest to us, while this responsibility decreases the farther others are from our own group. In the long run, this can lead to polarization and radicalization.</p><p>The model builds on central social-psychological theories such as Social Identity Theory, Realistic Conflict Theory, and Minimal Group Paradigm. Together, these theories explain how identity is formed through groups, how conflict may arise through competition, and how even small differences can create strong distinctions between "us" and "them."</p><p>The model divides relations into five layers, from "my own people," where empathy and responsibility are strongest, to "the dangerous ones," who are seen as threats and met with hostility. In digital communities, these divisions can be intensified, because people quickly feel connected to like-minded others while opponents more easily become enemies.</p><p>In relation to incel culture, the model helps explain how digital communities produce enemy images, especially of women, and legitimize increasingly extreme attitudes.</p></div></article></section>
    <section class="content-section" id="semester-two"><article class="resource-card subpage-card"><div class="production-copy"><h2>Zuboff - our main theory</h2><p>A central theory in this project is Shoshana Zuboff's theory of surveillance capitalism, a new form of capitalism in which human behaviour itself becomes the commodity being exchanged. Surveillance capitalism gives rise to a new instrumental power that collects data about human behaviour and shapes future behaviour on that basis. This power is inseparable from digital environments, where search terms, click patterns, and dwell time become behavioural surplus.</p><p>Zuboff's concepts of tuning and herding are especially important. Tuning refers to small, almost invisible nudges in feeds, search suggestions, and notifications that steer individuals in a particular direction. Herding refers to the coordination of many users at once, so that groups move in the same direction and engage with the same type of content. Shadow text is the hidden digital text platforms write about us based on our data. It contains predictions, patterns, and analyses we do not have access to, yet it is used to shape the content we see.</p><p>When, for example, young men search for appearance-related content, they generate large amounts of behavioural surplus. The more they search, pause, click, and dwell on certain content, the more data platforms gather and use to suggest further content. In this way, their future behaviour is gradually shaped.</p><h2>Tarleton Gillespie - custodians of the internet</h2><p>Another important theory is Tarleton Gillespie's understanding of social media platforms as active custodians of the digital sphere. In <em>Custodians of the Internet</em>, Gillespie argues that platforms such as YouTube, TikTok, and Facebook are not neutral tools, but systems that, through design, algorithms, and moderation, determine what users see. Platforms therefore do not simply reflect reality - they also help produce it.</p><p>Gillespie challenges the idea of the "neutral platform" by showing that content is always filtered and prioritized. Algorithms particularly highlight content that creates engagement, which can gradually lead users toward more extreme material. Moderation is also a core platform function, but both user-reporting and automated systems can be imprecise and often fail to understand context. At the same time, moderation is frequently opaque to users.</p><p>Gillespie therefore describes platforms as "visibility machines" that control what becomes visible. This control is closely tied to the platforms' goal of retaining attention, which can strengthen certain types of content and push users toward more extreme narratives.</p></div></article></section>
  `
};

pageContentTranslations["metode.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Method</p><h1 class="subpage-title">Method</h1></div></section>
    <section class="content-section" id="interview"><article class="resource-card subpage-card"><div class="production-copy"><h2>Qualitative interview</h2><p>We chose qualitative interviews as our method of investigation. We conducted three interviews with boys aged 15 to 18. All of them were selected through our own social relations. None of the three can be described as radicalized; rather, they are ordinary teenage boys with an ordinary use of social media. By interviewing them, we can gain insight into how average young people may be influenced by incel culture.</p><p>We chose qualitative interviews because we wanted in-depth knowledge about young people's experiences of social media, especially in relation to incel culture. This method makes it possible to understand how selected individuals experience a phenomenon in their own lives. It does not give broad knowledge about many young men's experiences, but rather deep knowledge about a smaller number of participants. We designed the interviews as semi-structured interviews, meaning that we prepared a range of questions while also remaining open to new questions that emerged from the participants' responses.</p><p><img class="resource-image" src="metode-interview-scene.jpg" alt="Young man and woman in a serious conversation" /></p><p>For ethical reasons, we began the interviews by explaining that the study was part of our project in Digital Culture, so that the interviewees understood the context. We also informed them that they were anonymous. Finally, we ended by asking how they had experienced the interview, so we could ensure that it had felt safe and not intrusive.</p><p>After the interviews, we listened to the recordings two to three times. The interviews primarily help illuminate the final part of our problem formulation: how incel culture affects young Danish men. We therefore developed the interview guide shown in Appendix 1.</p><p>The questions were designed to shed light on several conditions at once: the kind of content the boys actively seek out, the content they are exposed to without actively searching for it, and how they themselves experience the influence of social media.</p></div></article></section>
    <section class="content-section" id="discourse"><article class="resource-card subpage-card"><div class="production-copy"><h2>Discourse analysis</h2><p>Discourse analysis is a qualitative method that examines how language creates meaning and shapes our understanding of the world. The focus is on recurring concepts and explanations, and on how they can normalize particular attitudes and identities.</p><p>In this project, we use discourse analysis to examine how masculinity and understandings of gender are articulated in manosphere- and incel-adjacent content, as well as in more mainstream self-improvement content on TikTok and YouTube Shorts. We focus especially on recurring words and narratives such as "looksmaxxing," "alpha/sigma," "80/20," and "hypergamy," and on how "us and them" thinking appears in videos, hashtags, and comment sections.</p><p>This method is relevant because TikTok and YouTube do not merely display content; they also help circulate and amplify specific discourses through their short-video format and engagement mechanisms such as likes, comments, and recommendations. Discourse analysis therefore helps us describe how certain ideas gradually become more normal and more available to users.</p><p>A limitation of discourse analysis is that it cannot prove direct cause and effect. It cannot demonstrate that one video creates a specific attitude. What it can show is which explanations, labels, and ways of understanding the world become available to users - and we combine that with our other data to strengthen the overall analysis. The discourse analysis itself can be found in Appendix 2.</p></div></article></section>
  `
};

pageContentTranslations["analyse.html"] = {
  en: `
    <section class="subpage-hero" id="top">
      <div class="content-section">
        <h1 class="subpage-title">Analysis</h1>
        <p class="subpage-lead">In this analysis, we examine how incel culture and manosphere ideas affect young Danish men through their use of social media. The analysis consists of three parts. First, we examine how incel culture affects young people's digital behaviour on social media, based on our interviews with three boys aged 15 to 18. Next, we examine how the incel environment itself affects young men's self-perception and digital behaviour through central discourses such as "looksmaxxing," "hypergamy," and the "80/20 rule." Finally, we examine how recommendation algorithms on social media help spread incel culture and manospheric content. Together, the three analytical parts provide an overall insight into how psychology, digital techniques, and social communities work together to shape boys' and young men's understanding of gender, identity, and belonging in 2026.</p>
        <p><img class="resource-image analysis-small-image" src="incel-closeup.jpg" alt="Close-up of the word incel" /></p>
        <section class="analysis-flow">
          <article class="resource-card subpage-card">
            <div class="production-copy resource-copy">
              <h2>How do young Danish men experience the content they are presented with on social media?</h2>
              <p>Young people in Denmark spend an average of 2 hours and 40 minutes a day on social media. This means that a large part of their everyday life takes place online, where algorithms decide what they see. These algorithms are not neutral. They often highlight content that appeals to insecurity, body ideals, or traditional ideas of what it means to be a "real man."</p>
              <p>Studies show that incel culture is growing rapidly. Even though many numbers are international, there is little doubt that these ideas also reach Danish youth. The issue is not only whether young men identify with incel culture, but also that they are exposed to it, often without noticing it themselves. Terms such as "looksmaxxing," "sigma," and "mewing" appear in their feeds and help shape ideas of masculinity.</p>
              <p>We interviewed three boys aged 15 to 18 about their use of social media. They primarily use TikTok, YouTube, Discord, Snapchat, and Instagram, and spend between three and five hours a day online. Common to all three is that they rarely search actively for content. Instead, they let the apps decide what they see. One of them explains: "I rarely find content myself, because I let the app find it for me. If I liked a similar video before, the app picks it up and shows me similar videos."</p>
              <p>According to Shoshana Zuboff, this is not accidental. It is precisely how surveillance capitalism works. The boys are pushed from one video to the next, and the platform continuously tries to predict what they will want to watch next. Zuboff describes this as tuning: a subtle steering of behaviour through digital design.</p>
              <blockquote class="production-quote">"I never think about why some videos appear. I just keep scrolling if I am not interested."<br />"Sometimes I get videos about bodybuilding or money, but it just appears. I do not know why."<br />"I mainly use YouTube and TikTok, and videos about becoming better just appear, even though I did not search for them."</blockquote>
              <p>These quotes show that the boys feel they control their own media use, while their own statements also reveal that they are still being influenced. One boy describes how he first received a few videos about bodybuilding, but gradually got more and more, making him reflect on his appearance. Zuboff's ideas about shadow text and tuning help explain why this influence is so difficult to detect.</p>
            </div>
          </article>
          <article class="resource-card subpage-card">
            <div class="production-copy resource-copy">
              <h2>How does incel-related content affect young Danish men's self-perception and understanding of masculinity today?</h2>
              <p>This part of the analysis focuses on how incel culture influences members' self-perception and digital behaviour through the discourses we identified. As described in the method section, we looked for recurring words such as "looksmaxxing," "alpha/sigma," "80/20," and "hypergamy," as well as for signs of "us and them" thinking in videos, hashtags, and comments. To investigate these terms, we looked at Reddit and at the article on incels and the 80/20 rule.</p>
              <p><img class="resource-image" src="what-is-an-incel.webp" alt="What is an incel" /></p>
              <p>One of the clearest patterns is how personal insecurity is gradually transformed into fixed explanations and identities. In self-optimization discourse, a person's value becomes tied to performance, which can create feelings of inadequacy and guilt. Here, Ulrik Falktoft's "Us and Them" model is useful, because it shows how the world becomes divided into groups toward whom empathy and moral responsibility vary.</p>
              <p>For many members, the starting point is vulnerability. Reddit examples show young men describing loneliness, insecurity about appearance and height, and repeated rejection by women. One user writes that being "5'4 and ugly" has made him turn "more and more into an incel." This vulnerability becomes an entry point into the community, where members feel understood and included.</p>
              <p>In discussions of the 80/20 rule and hypergamy, personal experiences are transformed into collective truths. These explanations present women as the cause of male loneliness and make individual rejection seem like proof of a larger system. In the next phase, women are no longer seen as individuals, but as functional objects within a hierarchy. This is reinforced by influencers such as Andrew Tate, whose messages frame relationships as transactions and masculine value as a matter of dominance, success, and physical superiority.</p>
              <p><img class="resource-image" src="elliot-roger.jpg" alt="Elliot Rodger" /></p>
              <p>The analysis of vulnerability is central, because it is not only insecurity itself that matters, but also the feeling of desperation and anxiety that incel culture actively pursues. Radicalization is completed when this vulnerability turns into ressentiment: a bitter feeling that society has lied to him. At this point, the self is placed among "my own," while women and society are seen as hostile.</p>
              <p>In the final layer of Falktoft's model, women and society are perceived as "the dangerous ones." This mechanical anger is what turns figures such as Elliot Rodger into symbols of resistance in incel culture. In 2014 he murdered six people, including two women, motivated by misogyny and rejection, and was later elevated to martyr status in incel communities.</p>
              <p>Overall, the environment affects members' self-perception by transforming personal insecurity into a collective identity based on anger and determinism. At the same time, digital behaviour is shaped by platform structures that reward and amplify extreme positions. The result is a self-reinforcing system where psychological vulnerability and algorithmic logic work together to keep the individual in a polarized and hostile worldview.</p>
            </div>
          </article>
          <article class="resource-card subpage-card">
            <div class="production-copy resource-copy">
              <h2>How do recommendation algorithms on social media contribute to the spread of incel-related content?</h2>
              <p>To examine algorithms and their importance for incel culture, we rely on Dublin City University's report <em>Recommending Toxicity</em>. The report investigates how YouTube and TikTok shape these communities and how algorithms help spread manosphere and toxic content. It shows that all four fictional users in the study were shown toxic or manospheric content within 23 minutes, even though only two of them actively searched for it.</p>
              <p>According to Zuboff, this can be understood through what she calls "The Machine Zone," where algorithms shape users' pathways and maintain their attention. Social media's endless scrolling is a central tool in this process, keeping users engaged through targeted recommendations.</p>
              <p><img class="resource-image" src="youtube-manosphere-chart.png" alt="Chart showing YouTube manosphere-curious development" /></p>
              <blockquote class="production-quote">"Once an account showed interest by watching manosphere content, the amount rapidly increased. By the last round of the experiment (i.e. after 400 videos or 2-3 hours viewing), the vast majority of the content being recommended to the phones was problematic or toxic (TikTok 76% and YouTube Shorts 78%), primarily falling into the manosphere (alpha male and anti-feminist) category."</blockquote>
              <p>This shows that platforms actively recommend more and more of the same content if it helps keep users engaged, regardless of moral consequences. Tarleton Gillespie similarly argues that social media platforms act as private regulators of public conversation. They do not merely reflect public opinion; they help structure and normalize it. In the case of incel culture, this means that the digital public sphere gradually makes manospheric language and ideas more ordinary and more visible.</p>
            </div>
          </article>
        </section>
      </div>
    </section>
  `
};

pageContentTranslations["diskussion.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Discussion</p><h1 class="subpage-title">Discussion</h1></div></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><p>Our analysis suggests that social media platforms such as TikTok and YouTube do not necessarily radicalize young men directly, but that through algorithms and repeated exposure they can gradually shape young men's self-understanding. The interviews show that young users rarely feel that they actively search for this content; instead, it "just appears." This is supported by the Dublin City University report, which documents that users are exposed to manospheric content after only 23 minutes, whether or not they actively seek it out.</p><p>On the one hand, content about self-improvement, training, and success is not in itself necessarily problematic. It can also be experienced as motivating. On the other hand, our analysis shows that this content may function as an entry point into more polarized and extreme understandings of gender and relationships. The important issue is therefore not only the explicitly extreme content, but the gradual transition from mainstream self-improvement to incel- or manosphere-adjacent discourse.</p><p>When concepts such as "sigma," "looksmaxxing," and "alpha" appear as humor and memes, they become difficult to identify as ideological. One may therefore argue that the influence is effective precisely because it is not experienced as direct influence. Our interviews point in that direction: the young men distance themselves from incel culture, yet they still use and recognize its concepts in everyday life. This suggests that normalization happens through repetition and irony rather than through direct persuasion.</p><p>At the same time, it is unrealistic to expect young people to fully understand the algorithmic systems they encounter in everyday life. As Zuboff explains, platform logic is designed to influence user behaviour through nearly invisible mechanisms such as tuning. One could argue that young people should develop a more critical awareness of their media use. At the same time, both our analysis and our empirical material show that the influence is so subtle that it is problematic to place responsibility solely on the individual user.</p><p>A possible response is to create more open dialogue about the content young people encounter online. However, our interviews also show that unpleasant or violent content is often kept private, which makes the influence invisible to the surrounding world. Awareness may therefore need to be created not only through information, but through conversations in which young people can reflect on their experiences. At the same time, it can be questioned whether adults are realistically able to keep up with rapidly changing digital cultures, where terms and trends constantly shift form.</p><p>The role of platforms is also central. According to Tarleton Gillespie, social media platforms are not neutral but active curators of visibility. They do not simply mirror user interests; they help determine what becomes visible and therefore normal. One may therefore argue that platforms should take greater responsibility and moderate more actively. At the same time, Zuboff's theory shows that the economic logic of platforms makes the problem even more complex. If the most engaging content is also often the most polarizing, then platforms have a built-in incentive to highlight exactly that material.</p><p>Overall, the discussion suggests that there is no single simple solution. Young men's self-understanding is shaped by a combination of discourses, algorithms, and social practices in which the influence is often hidden and gradual. Responsibility is therefore shared between users and platforms. Prevention requires a balance between regulation, digital literacy, and a deeper understanding of how platforms structure the reality young people encounter in everyday life.</p></div></article></section>
  `
};

pageContentTranslations["konklusion.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Conclusion</p><h1 class="subpage-title">Conclusion</h1></div></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><p>Our analysis shows that recommendation algorithms play a central role in spreading incel-related content by reinforcing and repeating certain types of material based on user behaviour. The content often appears as entertainment, self-improvement, or humor, but through repetition it helps normalize specific understandings of gender, relationships, and masculinity. The discourse analysis therefore shows that incel-related ideas do not only exist in closed communities; they are also integrated into mainstream content and become part of young people's daily media use.</p><p>This is supported by our interviews, which show that young Danish men rarely feel that they actively seek out such content. Instead, they are exposed to it through algorithmically selected material. Although they distance themselves from incel ideology and perceive the content as humorous or superficial, their statements also show that they are still affected by it. When they reflect on their appearance, use terms such as "sigma," or encounter self-improvement content, this suggests that these discourses help shape their self-perception and their understanding of what it means to be a man.</p><p>Overall, the project points to an indirect and gradual form of influence that emerges through the interaction between algorithms, discourses, and young people's media use. It is important to stress, however, that the project cannot establish a direct causal link between exposure and radicalization, and that the limited empirical material cannot be generalized.</p><p>The conclusion therefore points to a need for greater attention to how algorithmic systems shape the reality young people navigate, and to how these influences can be made more visible through reflection and dialogue.</p></div></article></section>
  `
};

pageContentTranslations["medieprodukt.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Product</p><h1 class="subpage-title">Product</h1></div></section>
    <section class="content-section">
      <article class="resource-card subpage-card resource-layout">
        <div class="production-copy resource-copy">
          <p>Our media product is a short SoMe video of 1-3 minutes aimed at young men at risk of incel influence. We chose this format because the target group primarily encounters both counter-narratives and radicalizing content in fast, algorithm-driven feeds on platforms such as TikTok, Instagram Reels, and YouTube Shorts. The video reflects how short, repetitive messages about masculinity, success, and "us versus them" thinking are communicated through memes, hooks, and comments, and how these discourses gradually become normalized.</p>
        </div>
        <div class="resource-image-wrap homepage-product-media">
          <video class="resource-video homepage-product-video" controls playsinline preload="metadata"><source src="produkt-video.mp4" type="video/mp4" /></video>
        </div>
      </article>
    </section>
    <section class="content-section">
      <article class="resource-card subpage-card">
        <div class="production-copy">
          <h2>Production process</h2>
          <p>Creatively, the video draws on our discourse analysis, which shows how repetition, humor, and polarizing statements create a sense of normality. Inspired by Shoshana Zuboff's "The Machine Zone," the video is structured as an uncomfortable echo chamber in which comments, short statements, and simplified explanations dominate. The minimalist black-and-white aesthetic removes distractions and emphasizes the power of language, while pseudonymous usernames underline that these discourses stem from real digital communities.</p>
          <p>Dramaturgically, the video begins with relatively harmless self-improvement content, but gradually moves toward more extreme and hostile narratives. Through increasing tempo, repetition, and an intensifying sound design, it creates a sense of pressure and one-sidedness that imitates the algorithmic exposure users experience on social media. A sharp break midway through - with silence and a black screen - functions as a moment of reflection where the viewer can step out of the flow and consider the meaning of the content.</p>
          <p>The purpose is to confront the viewer with these discourses in their "natural" form and then link the experience to concepts such as echo chambers and algorithmic amplification. As a supplement to the video, we developed the website SnakFørDetGårGalt.dk, which offers concrete tools for breaking away from destructive communities. The website functions as a calm, safe, and action-oriented space for young men at risk of incel influence.</p>
          <p>Where the video confronts the viewer with the discourses and mechanisms that shape algorithmically driven feeds, the website offers an alternative: a place for support, reflection, and concrete ways to reach out. In producing the website, we drew on our analysis of the target group, their media habits, and the visual and linguistic devices that characterize digital platforms. The site was therefore designed with simple navigation, calm colours, clear contact options, and inclusive language that avoids being judgmental.</p>
          <blockquote class="production-quote">"If you feel these communities pulling you in: stop and scroll away. Or contact us."</blockquote>
        </div>
      </article>
    </section>
  `
};

pageContentTranslations["litteraturliste.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Literature list</p><h1 class="subpage-title">Literature list</h1><p class="subpage-lead">Here the literature list is divided into books, scientific articles, and websites.</p></div></section>
    <section class="content-section"><article class="resource-card subpage-card resource-layout"><div class="production-copy resource-copy"><h2>Books</h2><ul class="production-list"><li>Brinkmann, Svend & Tanggaard, Lene, 2010. Interviewet - samtalen som forskningsmetode. I S. Brinkmann & L. Tanggaard (Red.), Kvalitative metoder: En grundbog (29-53). Hans Reitzels Forlag.</li><li>Gillespie, Tarleton, 2018). Custodians of The Internet. Yale University Press/New Haven & London.</li><li>Zuboff, Shoshana, 2019. The Age of Surveillance Capitalism. PublicAffairs, Hachette Book Group (*note that this book does not have page numbers, so we used PDF page numbers)</li></ul><h2>Scientific articles</h2><ul class="production-list"><li>Baker, Catherine., Ging, Debbie., Andreasen, Maja Brandt., 2024. Recommending Toxicity: The role of algorithmic recommender functions on YouTube Shorts and TikTok in promoting male supremacist influencers. DCU Anti-Bullying Centre, Dublin City University. Available at: <a href="https://www.dcu.ie/sites/default/files/advanced_processing_technology_editor/2025-12/1.-recommending-toxicity_the-role-of-algorithmic-recommender-functions-on-youtube-shorts-and-tiktok-in-promoting-male-supremacist-influencers-2.pdf" target="_blank" rel="noreferrer">link</a></li><li>Center for Digital Pædagogik, 2025. Forundersøgelse - Incelfællesskaber i stor vækst. Available at: <a href="https://cfdp.dk/wp-content/uploads/2025/04/Forundersoegelse-Incelfaellesskaber-i-stor-vaekst-Center-for-Digital-Paedagogik.pdf" target="_blank" rel="noreferrer">link</a></li><li>Izotova, N., Polishchuk, M., Taranik-Tkachuk, K., 2021, Discourse analysis and digital technologies: (TikTok, hashtags, Instagram, YouTube): universal and specific aspects in international practice.</li><li>Falktoft, Ulrik, 2025, Os og Dem. Til brug for faget "Digital Kultur" på IT-Arkitektur, Erhvervsakademi København.</li><li>Haandbæk Schmidt, Christina, 2020. Diskursanalyse. 2. udg. Available at: <a href="https://laeremiddel.dk/wp-content/uploads/2021/04/Diskursanalyse_printversion_2020.pdf" target="_blank" rel="noreferrer">link</a></li><li>Kannik Haastrup, Helle, 2025. Adolescence: Derfor gør film og tv-serier os klogere. Available at: <a href="https://videnskab.dk/kultur-samfund/adolescence-derfor-goer-film-og-tv-serier-os-klogere/" target="_blank" rel="noreferrer">link</a></li></ul><h2>Websites</h2><ul class="production-list"><li>Andersen Nielsen, Simon, 2025, DR, Forskere afliver myte om unges brug af sociale medier - men peger på sårbar gruppe. Available at: <a href="https://www.dr.dk/nyheder/indland/forskere-afliver-myte-om-unges-brug-af-sociale-medier-men-peger-paa-saarbar-gruppe" target="_blank" rel="noreferrer">link</a></li><li>BBC, 2018, Elliot Rodger: How misogynist killer became 'incel hero'. Available at: <a href="https://www.bbc.com/news/world-us-canada-43892189" target="_blank" rel="noreferrer">link</a></li><li>Reddit, I am turning into an incel, "Substantial-Wave-406". Available at: <a href="https://www.reddit.com/r/Vent/comments/1qi4jv6/i_am_turning_into_an_incel/" target="_blank" rel="noreferrer">link</a></li><li>Videnskab.dk, 2026, Incels og 80/20-reglen: Forstå forskning bag kvindehadet i ny tv-serie. Available at: <a href="https://videnskab.dk/kultur-samfund/incels-og-80-20-reglen-forstaa-forskning-bag-kvindehadet-i-ny-tv-serie/" target="_blank" rel="noreferrer">link</a></li></ul></div><div class="resource-image-wrap bibliography-book-media"><img class="resource-image bibliography-book-image" src="zubuf-cover.jpg" alt="Cover of The Age of Surveillance Capitalism by Shoshana Zuboff" /></div></article></section>
  `
};

pageContentTranslations["brug-af-ai.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Use of AI</p><h1 class="subpage-title">Use of AI</h1></div></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><p>We used AI to vibe-code our website. In the process, we looked at 988lifeline.org and used its general website structure as inspiration when building our own site. After that, we continuously edited specific elements so that the design matched our own project and target group. Through work with transparency, colour choices, images, layout, and typography, we aimed to create a more trustworthy and safe expression. We also created a logo for the site so that the website would appear more coherent and authentic.</p><p>AI was used as a writing and structure assistant for idea generation and suggestions for disposition and chapter structure; all choices, formulations, analyses, conclusions, sources, and fact-checking were prepared and verified by the authors.</p><p>We also used NotebookLM to help locate sources and theories, but all choices, formulations, analyses, conclusions, sources, and fact-checking were prepared and verified by the authors.</p><p><a class="project-page-link" href="https://notebooklm.google.com/notebook/14027cb8-fab9-4202-96c9-858b5f7f4bac" target="_blank" rel="noreferrer">Open NotebookLM link</a></p></div></article></section>
  `
};

pageContentTranslations["bilag.html"] = {
  en: `
    <section class="subpage-hero" id="top"><div class="content-section"><p class="eyebrow">Appendix</p><h1 class="subpage-title">Here you will find appendix 1 with the interview guide and appendix 2 with the discourse analysis.</h1></div></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><h2>Appendix 1: Interview guide</h2><ol class="production-list"><li><strong>Opening questions:</strong> We are working on a project about social media. We would like to understand how young boys experience using social media in everyday life. We are especially interested in concrete experiences - not what you think in general, but how it feels and unfolds for you. There are no right or wrong answers, and everything is anonymous. You only need to answer what you are comfortable with.</li><li><strong>Behaviour on social media:</strong> Which social media platforms do you use the most? How did you end up using these platforms? What does a typical day on social media look like for you? How do you find content - do you search yourself, or does it come via recommendations and the "For You" page?</li><li><strong>Exploring content:</strong> Have you ever come across videos or posts about how to become more confident, how to achieve financial success, or how to change your appearance? Are there topics you see a lot of even if you do not actively search for them? Do you know people such as Andrew Tate or Casper Krause?</li><li><strong>Language and concepts:</strong> Have you heard words such as "looksmaxxing," "alpha," "sigma," and "mewing"? Where have you heard them, and what do you think they mean?</li><li><strong>Social media influence:</strong> If you see something you find strange, unpleasant, or violent, what do you do? Do you talk to anyone about it? Do you think what you see on social media affects you or your friends?</li><li><strong>Closing questions:</strong> Is there anything we have not talked about that you think is important to mention? And how has it been to talk about social media in this way?</li></ol></div></article></section>
    <section class="content-section"><article class="resource-card subpage-card"><div class="production-copy"><h2>Appendix 2: Discourse analysis</h2><p><strong>Purpose:</strong> The purpose is to show how certain words, narratives, and explanatory models can create and normalize understandings of masculinity, dating, and value among young men through short videos, captions, and comment fields.</p><p><strong>Material:</strong> Platforms: TikTok and YouTube Shorts. Types of content: self-improvement, fitness, dating advice, and sigma/alpha memes. Units of analysis: short videos, captions, hashtags, and top comments.</p><p><strong>Analytical approach:</strong> The analysis focuses on recurring keywords and labels, how problems are explained, ideals of the "real man," us/them markers, and normalization through humor, trends, and repetition.</p><h2>Results: Four discursive patterns</h2><p><strong>Pattern 1: Self-optimization as moral duty</strong><br />The content frames masculinity as a constant project in which the body, economy, discipline, and mindset must be optimized. The message is often that the individual is responsible for everything and that failure is due to lack of effort.</p><p><strong>Pattern 2: Hierarchy and labels</strong><br />Masculinity is presented as a hierarchy. Labels such as alpha, sigma, and chad work as quick categories that confer status or shame. Even when it is "just for fun," it normalizes a standard for what a "real" man should be.</p><p><strong>Pattern 3: Dating as a market and simple explanations</strong><br />Complex social issues such as dating, rejection, and relationships are explained with simple rules such as 80/20 and hypergamy. That makes the explanations easy to share, easy to remember, and difficult to discuss in a nuanced way.</p><p><strong>Pattern 4: Us and them and the feeling of injustice</strong><br />A "we" is established, and a "them" - women, feminism, or the system - is made into the cause of problems. Over time, that can legitimize anger and resignation and affect both self-image and digital behaviour.</p><p><strong>Partial conclusion:</strong> On TikTok and YouTube Shorts, manosphere and incel-adjacent discourses can appear in a sliding transition from seemingly harmless self-improvement content to more polarized explanations about gender and dating. Because the platforms reward short, engaging formats, simple rules, labels, and us/them frameworks can easily be repeated and gradually come to appear normal.</p></div></article></section>
  `
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

function updatePageContent(language) {
  const mainContent = document.querySelector("#mainContent");
  if (!mainContent) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const hasPageTranslation = Boolean(pageContentTranslations[currentPage]);

  if (!hasPageTranslation) {
    return;
  }

  if (!mainContent.dataset.originalDa) {
    mainContent.dataset.originalDa = mainContent.innerHTML;
  }

  if (language === "en" && pageContentTranslations[currentPage]?.en) {
    mainContent.innerHTML = pageContentTranslations[currentPage].en;
    return;
  }

  if (language === "da" && mainContent.dataset.originalDa) {
    mainContent.innerHTML = mainContent.dataset.originalDa;
  }
}

function setLanguage(language) {
  currentLanguage = language;
  htmlRoot.lang = language;

  updatePageContent(language);

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


