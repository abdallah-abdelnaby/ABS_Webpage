export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = LinkItem;

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroMetric = {
  value: string;
  label: string;
  detail: string;
};

export type ServiceIcon = "code" | "ai" | "blockchain" | "hpc" | "consulting" | "compiler";

export type Service = {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: ServiceIcon;
};

export type TrustItem = {
  name: string;
  context: string;
  statement: string;
  marker: string;
};

export type Project = {
  name: string;
  category: string;
  status: string;
  description: string;
  tags: string[];
  /** Public URL. Projects without one show a label instead of a link. */
  href?: string;
  ctaLabel?: string;
  /** Shown in the preview frame when there is no public URL. */
  previewLabel: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  summary: string;
  background: string[];
  focus: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
  deliverable: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type ContactField = {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
};

export type CompanyDetail = {
  label: string;
  value: string;
};

export type ContactMap = {
  label: string;
  caption: string;
  embedUrl: string;
  externalUrl: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

const company = {
  name: "ABS - Alternative Bold Solutions UG (haftungsbeschränkt)",
  street: "Christophorusweg 4",
  postalCodeCity: "37075 Göttingen",
  email: "contact@absolution-gmbh.com",
  managingDirector: "Abdallah Mohammed Abdallah Abdelnaby",
  registerCourt: "Amtsgericht Göttingen",
  registerNumber: "HRB 208086",
  vatId: "DE460537781",
} as const;

export const siteConfig = {
  url: "https://absolution-gmbh.com",
  company,
  metadata: {
    title: "ABS | AI, OCR and compiler engineering from Göttingen",
    description:
      "ABS is a Göttingen software company building document AI and OCR pipelines, LLM assistants, HPC-backed ML experiments, and compiler and blockchain tooling for research institutions and companies.",
  },
  brand: {
    shortName: "ABS",
    strapline: "Alternative Bold Solutions",
    fullName: company.name,
  },
  a11y: {
    skipToContentLabel: "Skip to content",
    primaryNavigationLabel: "Primary navigation",
    legalNavigationLabel: "Legal navigation",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Software and AI engineering · Göttingen, Germany",
    headline: "Reliable AI and compiler engineering for research and industry.",
    subheadline:
      "ABS builds document AI and OCR pipelines, LLM assistants, GPU-backed ML experiments, and compiler and blockchain tooling. We work with universities, research infrastructures and technology companies, and we publish what we can as open source.",
    ctas: [
      { label: "Discuss a project", href: "#contact", variant: "primary" },
      { label: "See our work", href: "#projects", variant: "secondary" },
    ] satisfies HeroCta[],
    metrics: [
      {
        value: "USD 120k",
        label: "Stellar Community Fund award",
        detail: "Build award (SCF #41) for SORDEC, our Soroban WebAssembly decompiler.",
      },
      {
        value: "Delivered",
        label: "University of Göttingen",
        detail: "AI page-segmentation editor for the Institut für Digital Humanities, 2026.",
      },
      {
        value: "Live",
        label: "AI Research Journal",
        detail: "Our autonomous research pipeline publishes papers with full reproducibility bundles.",
      },
    ] satisfies HeroMetric[],
    tags: ["Document AI + OCR", "LLM / RAG assistants", "Compilers", "Blockchain tooling", "HPC + GPU", "Technical advisory"],
  },
  trust: {
    eyebrow: "Track record",
    title: "Work delivered, funded and in production.",
    description:
      "ABS was registered in Göttingen in January 2026. The team behind it has built research software, OCR pipelines and compilers for several years before that.",
    items: [
      {
        name: "University of Göttingen",
        context: "Client project · Institut für Digital Humanities",
        statement:
          "eManuskript editor: multi-model AI page segmentation for historical manuscripts, with exports to PAGE-XML, TEI, IIIF and COCO. Delivered January to March 2026.",
        marker: "Delivered",
      },
      {
        name: "Stellar Development Foundation",
        context: "Stellar Community Fund #41 · Build Award",
        statement:
          "SORDEC, a decompiler that turns Soroban WebAssembly smart contracts back into readable source for audits and reviews. USD 120k award; first milestones delivered in 2026.",
        marker: "Funded, in progress",
      },
      {
        name: "Hyperledger Solang",
        context: "Stellar Community Fund · Public Goods",
        statement:
          "Maintenance of the Soroban target in the open-source Hyperledger Solang compiler, which compiles Solidity to Soroban WebAssembly.",
        marker: "Open source",
      },
      {
        name: "Team experience before ABS",
        context: "Research software, ML and compilers",
        statement:
          "OCR-D workflows on HPC (OPERANDI, DFG-funded) and RAG assistants for libraries (LibraryAI); manuscript layout segmentation (eManuSkript / Mergen) and multimodal ML research at NYU Abu Dhabi; the Hyperledger Solang compiler, IOTA Foundation R&D, the Web3 Foundation's Solang Playground and Kubernetes for a German government rail project.",
        marker: "Team background",
      },
    ] satisfies TrustItem[],
    highlights: ["Registered in Göttingen (HRB 208086)", "Open-source compiler work", "Research and industry clients"],
  },
  services: {
    eyebrow: "Services",
    title: "What we build.",
    description:
      "We do our best work where the problem is technically hard and the result has to keep working after handover.",
    items: [
      {
        id: "service-ai-ocr",
        title: "Document AI, OCR and digitisation",
        description:
          "OCR and handwritten text recognition, layout analysis and post-OCR correction for historical and business documents, with standard exports such as PAGE-XML, TEI and IIIF.",
        impact: "Searchable, structured text from scans, with quality you can measure.",
        icon: "ai",
      },
      {
        id: "service-llm",
        title: "LLM and RAG assistants",
        description:
          "Retrieval-augmented assistants that answer from your own documents and cite their sources, running on your infrastructure or a provider you choose.",
        impact: "Answers grounded in your data, with sources a person can check.",
        icon: "consulting",
      },
      {
        id: "service-compiler",
        title: "Compilers and language tooling",
        description:
          "Parsers, intermediate representations, code generation, decompilers and developer tooling, including work on the Hyperledger Solang compiler.",
        impact: "Correct translation between languages, and tools that make code reviewable.",
        icon: "compiler",
      },
      {
        id: "service-blockchain",
        title: "Blockchain and smart-contract tooling",
        description:
          "Smart-contract compilers, decompilers and analysis tools for the Stellar/Soroban ecosystem and other WebAssembly-based chains.",
        impact: "Contracts that can be audited and understood after deployment.",
        icon: "blockchain",
      },
      {
        id: "service-hpc",
        title: "HPC and GPU workloads",
        description:
          "Running OCR and ML workloads on GPU clusters: containerised jobs, Slurm scheduling, resource prediction and reproducible experiment pipelines.",
        impact: "Lower compute cost and results you can rerun.",
        icon: "hpc",
      },
      {
        id: "service-software",
        title: "Custom software and technical advisory",
        description:
          "Web platforms, APIs and internal tools, plus architecture reviews and project scoping when you need a second technical opinion.",
        impact: "Systems your own team can maintain.",
        icon: "code",
      },
    ] satisfies Service[],
  },
  projects: {
    eyebrow: "Projects",
    title: "Our own products and research.",
    description:
      "Alongside client work, ABS builds its own tools. Where a project is public, you can open it and judge the engineering yourself.",
    items: [
      {
        name: "ABS AI Research Journal",
        category: "Autonomous AI research",
        status: "Live",
        description:
          "An autonomous AI scientist that chooses research questions, preregisters and runs GPU experiments, reproduces its own results, and publishes them as open-access papers. Every paper ships with its reproducibility bundle: code, container, seeds, logs and the agent's reasoning trace. All content is AI-generated.",
        tags: ["Autonomous AI", "GPU compute", "Reproducible ML", "Open access"],
        href: "https://journal.absolution-gmbh.com/",
        ctaLabel: "Visit the Journal",
        previewLabel: "journal.absolution-gmbh.com",
      },
      {
        name: "SORDEC",
        category: "Smart-contract decompiler",
        status: "In development",
        description:
          "A decompiler for Soroban smart contracts on Stellar. It turns deployed WebAssembly back into readable code so auditors and developers can review contracts whose source is not published. Funded by a Stellar Community Fund build award.",
        tags: ["WebAssembly", "Decompilation", "Soroban", "Security review"],
        previewLabel: "sordec · soroban wasm → source",
      },
      {
        name: "Hyperledger Solang: Soroban target",
        category: "Open-source compiler",
        status: "Open source",
        description:
          "Solang compiles Solidity smart contracts to WebAssembly. We maintain its Soroban target so Solidity developers can deploy on Stellar, with support from the Stellar Community Fund.",
        tags: ["Compiler", "Solidity", "Soroban", "Open source"],
        href: "https://github.com/hyperledger-solang/solang",
        ctaLabel: "View on GitHub",
        previewLabel: "github.com/hyperledger-solang/solang",
      },
    ] satisfies Project[],
  },
  team: {
    eyebrow: "Team",
    title: "The people doing the work.",
    description:
      "A small team of engineers from Göttingen's research software community, working with trusted freelancers on larger projects.",
    members: [
      {
        name: "Abdallah Abdelnaby",
        role: "Software Engineer · PhD Candidate in Computer Science",
        initials: "AA",
        summary:
          "Builds LLM assistants, OCR pipelines and HPC workflows for research libraries. His PhD at the University of Göttingen is on reliable and efficient LLM assistants for scholarly libraries on shared HPC infrastructure.",
        background: [
          "PhD candidate, University of Göttingen (GAUSS)",
          "M.Sc. Applied Computer Science, University of Göttingen",
          "B.Sc. Computer Engineering, American University in Cairo",
        ],
        focus: ["LLM / RAG", "OCR-D on HPC", "Research software"],
      },
      {
        name: "Mohamed Basuony",
        role: "Software Engineer · PhD Candidate in Digital Humanities",
        initials: "MB",
        summary:
          "Builds PyTorch pipelines for manuscript image analysis and layout segmentation, and containerised services to run them. Co-author of the eManuSkript palaeography tools presented at DHd 2026.",
        background: [
          "PhD candidate in Digital Humanities, University of Göttingen",
          "M.Sc. Applied Computer Science, University of Göttingen",
          "B.Sc. Computer Science, American University in Cairo",
          "Previously: research assistant at NYU Abu Dhabi, IBM Consulting",
        ],
        focus: ["Computer vision", "Layout analysis", "ML engineering"],
      },
      {
        name: "Salaheldin Soliman",
        role: "Software Engineer · Infrastructure and Security",
        initials: "SS",
        summary:
          "Spent about three and a half years on the Hyperledger Solang compiler, leading the work on its Soroban target. Works on infrastructure, security and system integration.",
        background: [
          "M.Sc. Applied Computer Science, University of Göttingen",
          "B.Sc. Computer Engineering, American University in Cairo",
          "Previously: IOTA Foundation R&D, Web3 Foundation (Solang Playground), Kubernetes for a German government rail project, Linux Foundation mentee",
        ],
        focus: ["Compilers", "Infrastructure", "Security"],
      },
    ] satisfies TeamMember[],
  },
  process: {
    eyebrow: "Process",
    title: "How a project runs.",
    description:
      "Every project follows the same five steps, so you know what you get at each stage.",
    steps: [
      {
        title: "Discovery",
        description: "We clarify goals, constraints, data and risks before proposing how to build anything.",
        deliverable: "Scope and technical brief",
      },
      {
        title: "Architecture",
        description: "We define the system, its interfaces and the delivery phases, and agree on how success will be measured.",
        deliverable: "Architecture and project plan",
      },
      {
        title: "Implementation",
        description: "We build in small increments with tests, code review and regular demos.",
        deliverable: "Working increments",
      },
      {
        title: "Validation",
        description: "We measure the result against the agreed criteria, such as OCR accuracy, answer quality or throughput, and fix what falls short.",
        deliverable: "Evaluated release",
      },
      {
        title: "Handover",
        description: "We deploy, document and hand over, or keep running and supporting the system if you prefer.",
        deliverable: "Documentation and support plan",
      },
    ] satisfies ProcessStep[],
  },
  about: {
    eyebrow: "About ABS",
    title: "A Göttingen software company with research roots.",
    description:
      "ABS - Alternative Bold Solutions was registered in Göttingen in January 2026. Our team comes from university research software, digital humanities and open-source compiler projects, and we bring that standard of evidence to client work.",
    quote: "If a result cannot be reproduced, it is not finished.",
    quoteSource: "How we work",
    principles: [
      {
        title: "Measure, then claim",
        description: "We agree on metrics up front and report results honestly, including when something does not work.",
      },
      {
        title: "Reproducible by default",
        description: "Containers, pinned versions, logged seeds and documented pipelines, so anyone can rerun the work.",
      },
      {
        title: "Built to hand over",
        description: "Clean code, documentation and open standards, so your team is not locked in to us.",
      },
    ] satisfies Principle[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about your project.",
    description:
      "Send a short description of the problem. We reply personally, with questions or a suggested next step.",
    banner: {
      title: "Not sure yet what you need?",
      description:
        "Early conversations are often the most useful: scoping a digitisation project, checking whether an LLM assistant fits, or reviewing an existing architecture.",
      ctaLabel: "Open the inquiry form",
      ctaHref: "#contact-form",
    },
    addressLabel: "Registered office",
    address: [company.street, company.postalCodeCity, "Germany"],
    email: company.email,
    companyDetails: [
      { label: "Company", value: company.name },
      { label: "Commercial register", value: `${company.registerCourt}, ${company.registerNumber}` },
      { label: "VAT ID", value: company.vatId },
    ] satisfies CompanyDetail[],
    responsePoints: [
      "A personal reply from an engineer, not a sales team",
      "An honest view of what is feasible",
      "A concrete next step: a call, a scoping note or a quote",
    ],
    map: {
      label: "Göttingen, Germany",
      caption: `${company.street}, ${company.postalCodeCity}`,
      embedUrl:
        "https://www.openstreetmap.org/export/embed.html?bbox=9.9318002%2C51.5470965%2C9.9392002%2C51.5506965&layer=mapnik&marker=51.5488965%2C9.9355002",
      externalUrl: "https://www.openstreetmap.org/?mlat=51.5488965&mlon=9.9355002#map=18/51.5488965/9.9355002",
      consentNote:
        "The map is loaded from OpenStreetMap only after you click. OpenStreetMap then receives your IP address.",
      loadLabel: "Load map",
    },
    form: {
      honeypotName: "website",
      projectTypeOptions: [
        "Document AI / OCR / Digitisation",
        "LLM / RAG Assistant",
        "Compilers / Language Tooling",
        "Blockchain / Smart-Contract Tooling",
        "HPC / GPU Workloads",
        "Custom Software / Technical Advisory",
      ],
      fields: [
        {
          label: "Name",
          name: "name",
          type: "text",
          required: true,
          placeholder: "Your full name",
          autoComplete: "name",
          maxLength: 200,
        },
        {
          label: "Organization",
          name: "organization",
          type: "text",
          required: true,
          placeholder: "Company or institution",
          autoComplete: "organization",
          maxLength: 200,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          required: true,
          placeholder: "name@company.com",
          autoComplete: "email",
          maxLength: 320,
        },
        {
          label: "Project Type",
          name: "projectType",
          type: "select",
          required: true,
        },
        {
          label: "Message",
          name: "message",
          type: "textarea",
          required: true,
          placeholder: "What problem are you solving, what is in place today, and what is your timeline?",
          maxLength: 5000,
        },
      ] satisfies ContactField[],
      selectPlaceholder: "Select project type",
      submitLabel: "Send inquiry",
      submittingLabel: "Sending…",
      successLabel: "Thank you, your inquiry has been sent. We will reply personally soon.",
      errorLabel: "Your inquiry couldn't be sent just now. Please try again, or email us directly.",
      privacyNote: "We use your details only to answer your inquiry. See our",
      privacyLinkLabel: "privacy policy",
    },
    autoReply: {
      fromName: "ABS - Alternative Bold Solutions",
      subject: "We've received your inquiry - ABS",
      // {name} is replaced with the sender's name.
      greeting: "Hello {name},",
      paragraphs: [
        "Thank you for contacting ABS - Alternative Bold Solutions. Your inquiry has reached us.",
        "We read every message personally and will reply with questions or a suggested next step.",
        "If anything urgent comes up in the meantime, simply reply to this email.",
      ],
      signature: "The ABS team",
    },
  },
  legal: {
    pageTitle: "Impressum",
    companyName: company.name,
    address: {
      street: company.street,
      postalCodeCity: company.postalCodeCity,
      country: "Germany",
    },
  },
  privacy: {
    pageTitle: "Privacy Policy",
    lastUpdated: { en: "4 November 2026", de: "4. November 2026" },
    en: {
      intro:
        "This policy explains which personal data ABS processes when you visit absolution-gmbh.com or contact us, why, and what rights you have. We do not use analytics, advertising or tracking cookies.",
      sections: [
        {
          title: "1. Controller",
          paragraphs: [
            `${company.name}, ${company.street}, ${company.postalCodeCity}, Germany. Represented by the managing director ${company.managingDirector}. E-mail: ${company.email}.`,
            "We have not appointed a data protection officer, as we are not legally required to. Please send any data protection request to the e-mail address above.",
          ],
        },
        {
          title: "2. Hosting and delivery (Cloudflare)",
          paragraphs: [
            "This website runs on Cloudflare Workers, operated by Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA. When you open a page, Cloudflare processes technical data such as your IP address, the page requested, date and time, browser type and referrer, in order to deliver the site and protect it against attacks.",
            "Legal basis: Art. 6(1)(f) GDPR. Our legitimate interest is a secure, fast and reliable website. We have a data processing agreement with Cloudflare. Cloudflare is certified under the EU-U.S. Data Privacy Framework, which the European Commission has recognised as adequate (Art. 45 GDPR); standard contractual clauses apply in addition.",
            "Cloudflare may set strictly necessary security cookies to tell people from bots. These need no consent (§ 25(2) TDDDG).",
          ],
        },
        {
          title: "3. Fonts",
          paragraphs: [
            "Fonts are served from our own server. Your browser does not connect to Google or any other font provider.",
          ],
        },
        {
          title: "4. Contact form and e-mail",
          paragraphs: [
            "When you use the contact form, we process your name, organisation, e-mail address, project type and message. When you e-mail us, we process your e-mail address and the content of your message. We use this data only to answer your inquiry and, where it leads to one, to prepare and carry out a contract.",
            "Form submissions are sent by e-mail to our mailbox, and you receive an automatic confirmation. Our e-mail is hosted by Google (Google Workspace), operated in the EU by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, under a data processing agreement. Data may also be processed by Google LLC in the USA, which is certified under the EU-U.S. Data Privacy Framework.",
            "Legal basis: Art. 6(1)(b) GDPR for inquiries about a contract, otherwise Art. 6(1)(f) GDPR (our interest in answering messages).",
            "We delete inquiries once they are fully dealt with, unless statutory retention obligations apply, for example for business correspondence (§ 257 HGB, § 147 AO).",
          ],
        },
        {
          title: "5. Map (OpenStreetMap)",
          paragraphs: [
            "The map on our contact section is only loaded after you click \"Load map\". Your browser then connects to the OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom, which receives your IP address and technical request data.",
            "Legal basis: your consent, Art. 6(1)(a) GDPR and § 25(1) TDDDG, given by clicking. You can withdraw it at any time by reloading the page. The European Commission has issued an adequacy decision for the United Kingdom.",
          ],
        },
        {
          title: "6. Links to other websites",
          paragraphs: [
            "We link to other sites such as our AI Research Journal, GitHub and LinkedIn. They are only contacted when you follow a link. Their own privacy policies apply there.",
          ],
        },
        {
          title: "7. Your rights",
          paragraphs: [
            "You have the right to access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to withdraw consent at any time with effect for the future (Art. 7(3)).",
            "Where we rely on Art. 6(1)(f) GDPR, you may object to the processing on grounds relating to your particular situation (Art. 21 GDPR).",
            "You may also lodge a complaint with a supervisory authority. Ours is: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover, Germany.",
          ],
        },
        {
          title: "8. Other information",
          paragraphs: [
            "You are not obliged to provide personal data, but without it we cannot answer your inquiry. We do not use automated decision-making or profiling.",
            "We update this policy when our website or the law changes. The current version is always on this page.",
          ],
        },
      ] satisfies LegalSection[],
    },
    de: {
      intro:
        "Diese Erklärung beschreibt, welche personenbezogenen Daten ABS verarbeitet, wenn Sie absolution-gmbh.com besuchen oder uns kontaktieren, zu welchem Zweck, und welche Rechte Sie haben. Wir setzen keine Analyse-, Werbe- oder Tracking-Cookies ein.",
      sections: [
        {
          title: "1. Verantwortlicher",
          paragraphs: [
            `${company.name}, ${company.street}, ${company.postalCodeCity}, Deutschland. Vertreten durch den Geschäftsführer ${company.managingDirector}. E-Mail: ${company.email}.`,
            "Ein Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben und wurde nicht benannt. Bitte richten Sie Anfragen zum Datenschutz an die oben genannte E-Mail-Adresse.",
          ],
        },
        {
          title: "2. Hosting und Auslieferung (Cloudflare)",
          paragraphs: [
            "Diese Website läuft auf Cloudflare Workers der Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA. Beim Aufruf einer Seite verarbeitet Cloudflare technische Daten wie Ihre IP-Adresse, die aufgerufene Seite, Datum und Uhrzeit, Browsertyp und Referrer, um die Website auszuliefern und vor Angriffen zu schützen.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist ein sicherer, schneller und zuverlässiger Betrieb der Website. Mit Cloudflare besteht ein Vertrag zur Auftragsverarbeitung. Cloudflare ist nach dem EU-U.S. Data Privacy Framework zertifiziert, für das ein Angemessenheitsbeschluss der EU-Kommission vorliegt (Art. 45 DSGVO); ergänzend gelten Standardvertragsklauseln.",
            "Cloudflare kann technisch notwendige Sicherheits-Cookies setzen, um Menschen von Bots zu unterscheiden. Dafür ist keine Einwilligung erforderlich (§ 25 Abs. 2 TDDDG).",
          ],
        },
        {
          title: "3. Schriftarten",
          paragraphs: [
            "Die Schriftarten werden von unserem eigenen Server ausgeliefert. Ihr Browser baut keine Verbindung zu Google oder anderen Schriftanbietern auf.",
          ],
        },
        {
          title: "4. Kontaktformular und E-Mail",
          paragraphs: [
            "Wenn Sie das Kontaktformular nutzen, verarbeiten wir Name, Organisation, E-Mail-Adresse, Projektart und Nachricht. Wenn Sie uns eine E-Mail schreiben, verarbeiten wir Ihre E-Mail-Adresse und den Inhalt der Nachricht. Wir nutzen diese Daten nur, um Ihre Anfrage zu beantworten und gegebenenfalls einen Vertrag vorzubereiten und durchzuführen.",
            "Formularanfragen werden per E-Mail an unser Postfach gesendet; Sie erhalten eine automatische Eingangsbestätigung. Unser E-Mail-Dienst ist Google Workspace, in der EU betrieben von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, auf Grundlage eines Vertrags zur Auftragsverarbeitung. Eine Verarbeitung durch Google LLC in den USA ist möglich; Google LLC ist nach dem EU-U.S. Data Privacy Framework zertifiziert.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei Anfragen mit Bezug zu einem Vertrag, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (unser Interesse an der Beantwortung von Anfragen).",
            "Wir löschen Anfragen, sobald sie abschließend bearbeitet sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen, etwa für Geschäftsbriefe (§ 257 HGB, § 147 AO).",
          ],
        },
        {
          title: "5. Karte (OpenStreetMap)",
          paragraphs: [
            "Die Karte im Kontaktbereich wird erst geladen, wenn Sie auf „Load map“ klicken. Ihr Browser verbindet sich dann mit der OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich, die Ihre IP-Adresse und technische Anfragedaten erhält.",
            "Rechtsgrundlage ist Ihre Einwilligung durch den Klick, Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können sie jederzeit widerrufen, indem Sie die Seite neu laden. Für das Vereinigte Königreich liegt ein Angemessenheitsbeschluss der EU-Kommission vor.",
          ],
        },
        {
          title: "6. Links zu anderen Websites",
          paragraphs: [
            "Wir verlinken auf andere Websites, etwa unser AI Research Journal, GitHub und LinkedIn. Diese werden erst kontaktiert, wenn Sie einem Link folgen. Dort gelten deren Datenschutzerklärungen.",
          ],
        },
        {
          title: "7. Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie auf jederzeitigen Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3).",
            "Soweit wir uns auf Art. 6 Abs. 1 lit. f DSGVO stützen, können Sie der Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, widersprechen (Art. 21 DSGVO).",
            "Sie können sich außerdem bei einer Aufsichtsbehörde beschweren. Für uns zuständig ist: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.",
          ],
        },
        {
          title: "8. Sonstiges",
          paragraphs: [
            "Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen; ohne sie können wir Ihre Anfrage jedoch nicht beantworten. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
            "Wir passen diese Erklärung an, wenn sich unsere Website oder die Rechtslage ändert. Die aktuelle Fassung finden Sie stets auf dieser Seite.",
          ],
        },
      ] satisfies LegalSection[],
    },
  },
  footer: {
    description:
      "Document AI and OCR, LLM assistants, compilers and blockchain tooling, and HPC workloads, from Göttingen.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Team", href: "#team" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ] satisfies LinkItem[],
    serviceLinks: [
      { label: "Document AI / OCR", href: "#service-ai-ocr" },
      { label: "LLM assistants", href: "#service-llm" },
      { label: "Compilers", href: "#service-compiler" },
      { label: "Blockchain tooling", href: "#service-blockchain" },
      { label: "HPC and GPU", href: "#service-hpc" },
      { label: "Custom software", href: "#service-software" },
    ] satisfies LinkItem[],
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Privacy Policy / Datenschutz", href: "/privacy" },
    ] satisfies LinkItem[],
    rightsLabel: "All rights reserved.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
