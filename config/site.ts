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

export type HeroVisualModule = {
  label: string;
  detail: string;
};

export type ServiceIcon = "code" | "ai" | "blockchain" | "hpc" | "consulting" | "compiler";

export type Service = {
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

export type CapabilityGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type CapabilityMatrixRow = {
  label: string;
  architecture: string;
  implementation: string;
  operations: string;
};

export type FeaturedEngagementVariant = "digitization" | "network";

export type FeaturedEngagement = {
  organization: string;
  sector: string;
  label: string;
  status: string;
  summary: string;
  detail: string;
  marker: string;
  scope: string[];
  variant: FeaturedEngagementVariant;
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

export const siteConfig = {
  metadata: {
    title: "ABS | Alternative Bold Solutions",
    description:
      "ABS is a premium software engineering consultancy and product studio delivering custom software, AI, OCR digitization workflows, blockchain systems, HPC support, and technical advisory for complex digital programs.",
  },
  brand: {
    shortName: "ABS",
    strapline: "Alternative Bold Solutions",
    fullName: "ABS - Alternative Bold Solutions UG (haftungsbeschränkt)",
  },
  a11y: {
    skipToContentLabel: "Skip to content",
    primaryNavigationLabel: "Primary navigation",
    legalNavigationLabel: "Legal navigation",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Engineering Consultancy for Complex Digital Systems",
    headline: "Precision software delivery for organizations operating at technical depth.",
    subheadline:
      "ABS partners with enterprises, research institutions, and serious product teams to architect, implement, and operationalize advanced systems across software, AI, OCR, blockchain, and compute-intensive infrastructure.",
    ctas: [
      { label: "Discuss a Project", href: "#contact", variant: "primary" },
      { label: "Explore Services", href: "#services", variant: "secondary" },
    ] satisfies HeroCta[],
    metrics: [
      {
        value: "Completed",
        label: "Institutional delivery",
        detail: "Delivered application-related work for the University of Göttingen.",
      },
      {
        value: "Accepted",
        label: "Commercial collaboration scope",
        detail: "A technical collaboration proposal was accepted for Stellar.",
      },
      {
        value: "6 domains",
        label: "Integrated technical coverage",
        detail: "Software, compiler design, AI, OCR, blockchain, HPC, and architecture advisory.",
      },
    ] satisfies HeroMetric[],
    tags: [
      "Custom Software",
      "Web Development",
      "Mobile Development",
      "AI Apps",
      "Compiler Design",
      "AI + OCR",
      "Blockchain",
      "Distributed Systems",
      "HPC",
      "Technical Advisory",
    ],
    visual: {
      badge: "Architecture-first execution across product, data, and infrastructure.",
      modules: [
        { label: "Document Ingestion", detail: "OCR, parsing, classification" },
        { label: "Application Layer", detail: "Product logic, APIs, portals" },
        { label: "Model Orchestration", detail: "AI workflows, validation, routing" },
        { label: "Operations & Control", detail: "Observability, governance, support" },
      ] satisfies HeroVisualModule[],
      footer: "Structured delivery from architecture framing to operational support.",
    },
  },
  trust: {
    eyebrow: "Selected References",
    title: "Credibility presented with restraint.",
    description:
      "A concise signal set for institutional and commercial work already delivered or commercially accepted. No logo wall, no inflated claims.",
    items: [
      {
        name: "University of Göttingen",
        context: "Digital humanities and application-related delivery",
        statement:
          "Completed and delivered work on application-related tasks in the field of digital humanities.",
        marker: "Completed engagement",
      },
      {
        name: "Stellar (U.S. Company)",
        context: "Technical collaboration proposal",
        statement:
          "Accepted proposal for technical collaboration. This represents awarded scope, not a completed delivery.",
        marker: "Accepted proposal",
      },
    ] satisfies TrustItem[],
    highlights: ["Germany-based legal entity", "Founder-led execution", "Enterprise and academic fit"],
  },
  services: {
    eyebrow: "Services",
    title: "Capabilities structured around delivery, not buzzwords.",
    description:
      "ABS is most effective where the scope is technically non-trivial, the constraints matter, and architectural quality has to survive beyond launch week.",
    items: [
      {
        title: "Custom Software Systems",
        description:
          "Architecture and implementation for web platforms, internal tools, APIs, and product-facing systems with maintainable foundations.",
        impact: "Build systems that remain coherent as teams, features, and operational demands grow.",
        icon: "code",
      },
      {
        title: "AI, OCR, and Digitization Workflows",
        description:
          "Applied AI pipelines, document intelligence, OCR processing, and digitization workflows for structured operational use rather than demos.",
        impact: "Turn document-heavy processes into auditable, scalable pipelines with measurable throughput.",
        icon: "ai",
      },
      {
        title: "Compiler Design and Language Tooling",
        description:
          "Design and implementation of parsers, intermediate representations, semantic analysis, code generation, and domain-specific language tooling for technically demanding systems.",
        impact: "Create language and transformation layers that improve correctness, automation, and long-term control over complex technical workflows.",
        icon: "compiler",
      },
      {
        title: "Blockchain and Trust Infrastructure",
        description:
          "Technical implementation and analysis for distributed workflows, trust layers, integrations, and blockchain-based system components.",
        impact: "Introduce distributed system patterns where they serve the operating model instead of distracting from it.",
        icon: "blockchain",
      },
      {
        title: "HPC and Performance-Oriented Computing",
        description:
          "Support for compute-intensive workflows, performance-aware architecture, and technically demanding research or operational environments.",
        impact: "Improve throughput, system design, and deployment decisions where compute cost and performance matter.",
        icon: "hpc",
      },
      {
        title: "Architecture and Technical Advisory",
        description:
          "Senior technical guidance for discovery, system planning, implementation sequencing, vendor evaluation, and delivery risk reduction.",
        impact: "Reduce ambiguity early so delivery decisions remain defensible under real-world constraints.",
        icon: "consulting",
      },
    ] satisfies Service[],
  },
  capabilities: {
    eyebrow: "Capability Architecture",
    title: "Breadth shown as an operating system for delivery.",
    description:
      "The goal is not to look broad. The goal is to cover adjacent technical domains with enough rigor that clients do not need a different specialist for every architectural seam.",
    focusAreas: [
      "Product engineering",
      "Data and AI workflows",
      "Document intelligence",
      "Distributed systems",
      "Compute-intensive infrastructure",
      "Technical due diligence",
    ],
    groups: [
      {
        title: "Build",
        summary: "System architecture, implementation, and release planning for new products or internal platforms.",
        items: ["Web platforms", "APIs", "Operational portals", "Mobile extensions"],
      },
      {
        title: "Integrate",
        summary: "Applied AI, OCR, and cross-system workflow design where data has to move cleanly across boundaries.",
        items: ["OCR pipelines", "AI routing", "Workflow automation", "Validation layers"],
      },
      {
        title: "Scale",
        summary: "Performance-aware engineering and infrastructure thinking for systems under technical load.",
        items: ["HPC support", "Compute strategy", "Operational visibility", "Resilience planning"],
      },
      {
        title: "Advise",
        summary: "Technical framing and decision support when scope, sequencing, or architecture quality is at risk.",
        items: ["Discovery", "Architecture reviews", "Delivery planning", "Technical audits"],
      },
    ] satisfies CapabilityGroup[],
    matrix: {
      title: "Delivery coverage",
      description: "Where ABS typically contributes across the lifecycle.",
      rows: [
        {
          label: "Software Platforms",
          architecture: "System design, API boundaries, product scoping",
          implementation: "Application development, integrations, release management",
          operations: "Maintenance planning, support, improvement backlog",
        },
        {
          label: "AI and OCR",
          architecture: "Pipeline design, evaluation criteria, control points",
          implementation: "OCR ingestion, AI orchestration, workflow automation",
          operations: "Monitoring, exception handling, model/process refinement",
        },
        {
          label: "Blockchain Systems",
          architecture: "Trust model analysis, protocol fit, workflow design",
          implementation: "Distributed components, integrations, transaction flows",
          operations: "Technical governance, security review, ongoing adaptation",
        },
        {
          label: "HPC and Compute",
          architecture: "Performance-aware system planning and resource strategy",
          implementation: "Compute workflow support and execution design",
          operations: "Optimization, observability, operational tuning",
        },
      ] satisfies CapabilityMatrixRow[],
    },
  },
  featuredWork: {
    eyebrow: "Selected Engagements",
    title: "Engagements framed like serious project summaries.",
    description:
      "A restrained view of work signals, with clear distinctions between completed delivery and commercially accepted future scope.",
    items: [
      {
        organization: "University of Göttingen",
        sector: "Academic / Research Collaboration",
        label: "Completed",
        status: "Delivered and accepted institutional scope",
        summary:
          "Application-related work delivered in a digital humanities context with emphasis on practical implementation quality.",
        detail: "Commercially documented completed delivery. Presented here as executed work, not pipeline marketing.",
        marker: "Completed",
        scope: ["Digital humanities", "Application support", "Structured delivery"],
        variant: "digitization",
      },
      {
        organization: "Stellar (U.S. Company)",
        sector: "Commercial Technical Collaboration",
        label: "Accepted Proposal",
        status: "Awarded scope accepted for future collaboration",
        summary:
          "Technical collaboration proposal accepted for a significant commercial engagement with a U.S.-based company.",
        detail: "Status is an accepted proposal. It is intentionally distinguished from completed delivery.",
        marker: "Accepted",
        scope: ["Systems planning", "Technical collaboration", "Implementation roadmap"],
        variant: "network",
      },
    ] satisfies FeaturedEngagement[],
  },
  process: {
    eyebrow: "Process",
    title: "A delivery methodology built for complex scopes.",
    description:
      "ABS uses a structured sequence that keeps architecture decisions, implementation work, and operational constraints aligned.",
    steps: [
      {
        title: "Discovery",
        description: "Clarify objectives, constraints, stakeholders, and risk before committing to build paths.",
        deliverable: "Scope framing and technical brief",
      },
      {
        title: "Architecture",
        description: "Define the system model, interfaces, delivery phases, and control points that the project will rely on.",
        deliverable: "Architecture and sequencing plan",
      },
      {
        title: "Implementation",
        description: "Build the core system with explicit quality standards, validation steps, and maintainability in mind.",
        deliverable: "Working system increments",
      },
      {
        title: "Validation",
        description: "Refine the solution through measured feedback loops, technical checks, and targeted iteration.",
        deliverable: "Validated release candidate",
      },
      {
        title: "Operate",
        description: "Deploy, support, and improve the system with operational visibility and disciplined follow-through.",
        deliverable: "Operational handover and support model",
      },
    ] satisfies ProcessStep[],
  },
  about: {
    eyebrow: "About ABS",
    title: "Technical depth without theatre.",
    description:
      "ABS is designed for clients who need clarity under complexity: not a generic agency, not a slideware consultancy, and not a trend-driven product shop.",
    quote: "The job is to reduce uncertainty while increasing execution quality.",
    quoteSource: "ABS operating principle",
    principles: [
      {
        title: "Clarity Before Velocity",
        description: "Speed matters, but only after the architecture, risks, and delivery sequence are legible enough to defend.",
      },
      {
        title: "Engineering Over Theatre",
        description: "Visual polish and clear communication matter, but the core value is rigorous implementation and responsible system design.",
      },
      {
        title: "Built for Long-Term Use",
        description: "Solutions are structured to survive iteration, handover, maintenance, and organizational change.",
      },
    ] satisfies Principle[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Discuss the scope before complexity compounds.",
    description:
      "Send a concise brief. ABS will respond with a practical next step grounded in technical feasibility, architecture, and delivery sequencing.",
    banner: {
      title: "Need senior engineering input early?",
      description:
        "ABS is most useful in architecture-heavy initiatives, pre-project scoping, rescue situations, and technically difficult delivery programs.",
      ctaLabel: "Open the Inquiry Form",
      ctaHref: "#contact-form",
    },
    addressLabel: "Registered Office",
    address: ["Christophorusweg 4", "37075 Göttingen", "Germany"],
    companyDetails: [
      { label: "Company", value: "ABS - Alternative Bold Solutions UG (haftungsbeschränkt)" },
      { label: "Base", value: "Göttingen, Germany" },
      { label: "Handelsregister", value: "HRB 208086" },
    ] satisfies CompanyDetail[],
    responsePoints: [
      "A grounded view of technical feasibility",
      "Suggested next steps for scope and sequencing",
      "A response written for decision-makers, not generic lead capture",
    ],
    map: {
      label: "Göttingen, Germany",
      caption: "Christophorusweg 4, 37075 Göttingen",
      embedUrl:
        "https://www.openstreetmap.org/export/embed.html?bbox=9.9318002%2C51.5470965%2C9.9392002%2C51.5506965&layer=mapnik&marker=51.5488965%2C9.9355002",
      externalUrl: "https://www.openstreetmap.org/?mlat=51.5488965&mlon=9.9355002#map=18/51.5488965/9.9355002",
    },
    form: {
      honeypotName: "website",
      projectTypeOptions: [
        "Custom Software",
        "AI / OCR / Digitization",
        "Blockchain / Distributed Systems",
        "HPC / Technical Computing",
        "Architecture / Technical Advisory",
      ],
      fields: [
        { label: "Name", name: "name", type: "text", required: true, placeholder: "Your full name" },
        {
          label: "Organization",
          name: "organization",
          type: "text",
          required: true,
          placeholder: "Company or institution",
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          required: true,
          placeholder: "name@company.com",
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
          placeholder: "Describe the technical problem, current constraints, target timeline, and desired outcome.",
        },
      ] satisfies ContactField[],
      selectPlaceholder: "Select project type",
      submitLabel: "Send Inquiry",
      successLabel:
        "Inquiry captured locally. Connect this form to an API route or CRM endpoint to enable delivery.",
    },
  },
  legal: {
    pageTitle: "Impressum",
    labels: {
      company: "Company",
      address: "Address",
      registrationData: "Registration Data",
    },
    companyName: "ABS - Alternative Bold Solutions UG (haftungsbeschränkt)",
    address: {
      street: "Christophorusweg 4",
      postalCodeCity: "37075 Göttingen",
      country: "Germany",
    },
    registration: [
      { label: "Steuernummer", value: "20/200/43488" },
      { label: "Handelsregister", value: "HRB 208086" },
    ],
  },
  privacy: {
    pageTitle: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "April 10, 2026",
    intro:
      "This is a professional GDPR-oriented placeholder privacy policy for ABS - Alternative Bold Solutions UG (haftungsbeschränkt). Legal counsel should review and finalize this text before production use.",
    sections: [
      {
        title: "1. Controller",
        paragraphs: [
          "Controller within the meaning of GDPR is ABS - Alternative Bold Solutions UG (haftungsbeschränkt), Christophorusweg 4, 37075 Göttingen, Germany.",
          "For data protection requests, please use the official contact channels provided on this website.",
        ],
      },
      {
        title: "2. Categories of Data",
        paragraphs: [
          "Depending on your interaction, ABS may process contact details, communication content, technical usage data, and information required to provide services.",
          "Processing is limited to what is necessary for defined and legitimate purposes.",
        ],
      },
      {
        title: "3. Legal Bases and Purpose",
        paragraphs: [
          "Processing may rely on Art. 6(1)(a), (b), (c), or (f) GDPR depending on context and purpose.",
          "Purposes include responding to inquiries, delivering contracted services, system security, and legal compliance.",
        ],
      },
      {
        title: "4. Transfers and Processors",
        paragraphs: [
          "Data may be processed by carefully selected service providers under appropriate contractual safeguards.",
          "Where transfers outside the EEA occur, suitable GDPR transfer mechanisms should be applied.",
        ],
      },
      {
        title: "5. Data Subject Rights",
        paragraphs: [
          "Data subjects may have rights of access, rectification, erasure, restriction, objection, portability, and consent withdrawal where applicable.",
          "Data subjects may also lodge a complaint with a competent supervisory authority.",
        ],
      },
      {
        title: "6. Security and Retention",
        paragraphs: [
          "Appropriate technical and organizational measures are implemented to protect personal data.",
          "Retention periods are determined by purpose, legal obligations, and contractual requirements.",
        ],
      },
    ],
  },
  footer: {
    description:
      "Custom software, compiler design, AI workflows, OCR digitization systems, blockchain components, HPC support, and technical advisory for serious digital programs.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ] satisfies LinkItem[],
    serviceLinks: [
      { label: "Custom Software", href: "#services" },
      { label: "Compiler Design", href: "#services" },
      { label: "AI / OCR", href: "#services" },
      { label: "Blockchain Systems", href: "#services" },
      { label: "HPC Support", href: "#services" },
      { label: "Technical Advisory", href: "#services" },
    ] satisfies LinkItem[],
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Privacy Policy", href: "/privacy" },
    ] satisfies LinkItem[],
    rightsLabel: "All rights reserved.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
