export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  challenges: string[];
  solutions: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    title: "Google Workspace AI for Healthcare",
    description:
      "Healthcare organizations manage sensitive patient data, complex compliance requirements, and cross-department coordination. Google Workspace with Gemini AI provides HIPAA-eligible tools that streamline clinical documentation, research, and administrative workflows.",
    metaDescription:
      "Google Workspace AI solutions for healthcare. HIPAA-eligible Gemini tools for clinical documentation, research, and administrative workflows. Custom Gems and NotebookLM for healthcare teams.",
    challenges: [
      "HIPAA compliance requirements for all digital tools",
      "Clinical documentation consuming physician time",
      "Cross-department communication gaps",
      "Research data scattered across systems",
      "Staff onboarding in high-turnover environments",
    ],
    solutions: [
      {
        name: "Clinical Documentation Gem",
        description:
          "Assists with drafting clinical notes, discharge summaries, and care coordination documents within your secure Workspace environment.",
      },
      {
        name: "Research Knowledge Base",
        description:
          "NotebookLM deployment that lets research teams query clinical studies, protocols, and internal research with natural language.",
      },
      {
        name: "Compliance Policy Assistant",
        description:
          "A custom Gem trained on your compliance handbook that answers staff questions about HIPAA, safety protocols, and regulatory requirements.",
      },
    ],
    faqs: [
      {
        question: "Is Google Workspace HIPAA compliant?",
        answer:
          "Google Workspace Enterprise plans are HIPAA-eligible and Google offers a Business Associate Agreement (BAA). When configured properly, Workspace and Gemini meet healthcare compliance requirements.",
      },
      {
        question: "Can Gemini access patient health information?",
        answer:
          "Gemini tools operate within your Workspace admin controls. You determine what data Gems can access, and enterprise-grade DLP policies prevent unauthorized data exposure.",
      },
      {
        question: "How does this compare to healthcare-specific AI tools?",
        answer:
          "Unlike niche healthcare AI tools, Gemini is built into the productivity suite your teams already use. This means no additional integrations, no data silos, and no separate training for staff.",
      },
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    title: "Google Workspace AI for Financial Services",
    description:
      "Financial services firms manage regulatory compliance, client communications, and complex data analysis across multiple teams. Gemini AI within Google Workspace provides secure, auditable AI tools that accelerate financial workflows.",
    metaDescription:
      "Google Workspace AI for financial services. Secure Gemini tools for compliance, client communications, and financial analysis. Custom Gems and NotebookLM for finance professionals.",
    challenges: [
      "Strict regulatory and compliance requirements",
      "Client communication volume and personalization demands",
      "Complex financial analysis and reporting",
      "Audit trail requirements for all documentation",
      "Data security and segregation mandates",
    ],
    solutions: [
      {
        name: "Client Brief Generator",
        description:
          "A Gem that creates personalized client meeting briefs by synthesizing portfolio data, market context, and relationship history.",
      },
      {
        name: "Regulatory Knowledge Base",
        description:
          "NotebookLM deployment with your compliance documentation, enabling teams to query regulatory requirements in plain language.",
      },
      {
        name: "Report Automation",
        description:
          "Workspace Flows that automate recurring financial reports, pulling data from Sheets and formatting for client or internal distribution.",
      },
    ],
    faqs: [
      {
        question: "Does Google Workspace meet financial services compliance requirements?",
        answer:
          "Google Workspace Enterprise includes SOC 2, ISO 27001, and other compliance certifications. Data residency controls, DLP, and audit logging support financial regulatory requirements.",
      },
      {
        question: "Can we restrict Gemini access by team or role?",
        answer:
          "Yes. Google Workspace admin controls let you enable or disable Gemini features by organizational unit, ensuring sensitive teams have appropriate access levels.",
      },
      {
        question: "How do you handle data segregation between client accounts?",
        answer:
          "Gems and NotebookLM instances can be configured per team or department. Combined with Workspace access controls, you maintain proper information barriers.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    title: "Google Workspace AI for Manufacturing",
    description:
      "Manufacturing companies deal with complex supply chains, safety protocols, and quality documentation. Gemini AI helps manufacturing teams access operational knowledge faster, automate reporting, and maintain consistency across facilities.",
    metaDescription:
      "Google Workspace AI for manufacturing. Streamline quality documentation, safety protocols, and operational reporting with custom Gemini Gems and NotebookLM for manufacturing teams.",
    challenges: [
      "SOPs and quality docs scattered across systems",
      "Safety protocol training and compliance tracking",
      "Multi-shift and multi-facility communication",
      "Production reporting and variance analysis",
      "Supply chain documentation management",
    ],
    solutions: [
      {
        name: "Quality & Safety Assistant",
        description:
          "A Gem trained on your quality manuals and safety protocols that guides workers through procedures and exception handling.",
      },
      {
        name: "Production Report Generator",
        description:
          "Automates daily and weekly production reports by pulling data from Sheets and formatting for management review.",
      },
      {
        name: "Supplier Knowledge Base",
        description:
          "NotebookLM loaded with supplier agreements, specifications, and quality standards for instant lookup by procurement teams.",
      },
    ],
    faqs: [
      {
        question: "Can floor workers access Gems on mobile devices?",
        answer:
          "Yes. Gemini works within the Google Workspace mobile apps, making Gems accessible on phones and tablets on the production floor.",
      },
      {
        question: "How do we handle multiple facilities?",
        answer:
          "Gems can be configured with facility-specific SOPs while sharing common company-wide procedures. Workspace organizational units manage access per location.",
      },
      {
        question: "Does this integrate with our ERP system?",
        answer:
          "Gems work within Google Workspace. ERP data can be exported to Sheets or connected via Workspace Flows for analysis and reporting within the Google ecosystem.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    title: "Google Workspace AI for Professional Services",
    description:
      "Professional services firms run on expertise and client relationships. Gemini AI helps consultants, accountants, and advisors deliver higher-quality work faster with custom AI assistants and centralized knowledge management.",
    metaDescription:
      "Google Workspace AI for professional services. Help consultants and advisors deliver faster with custom Gemini Gems, NotebookLM knowledge bases, and automated workflows.",
    challenges: [
      "Knowledge locked in individual consultants' heads",
      "Proposal and deliverable creation consuming billable hours",
      "Client onboarding documentation bottlenecks",
      "Difficulty reusing past work and methodologies",
      "Maintaining quality standards across engagement teams",
    ],
    solutions: [
      {
        name: "Proposal Generator",
        description:
          "A Gem that creates client proposals using your templates, past engagements, and service descriptions, cutting proposal time significantly.",
      },
      {
        name: "Methodology Knowledge Base",
        description:
          "NotebookLM loaded with your frameworks, case studies, and methodologies for instant consultant reference.",
      },
      {
        name: "Client Deliverable Reviewer",
        description:
          "A Gem that reviews deliverables against your quality standards and client requirements before submission.",
      },
    ],
    faqs: [
      {
        question: "Can Gems maintain client confidentiality?",
        answer:
          "Gems operate within Google Workspace's security framework. Access controls ensure client-specific Gems and data are only accessible to authorized engagement team members.",
      },
      {
        question: "How do partners and senior staff benefit?",
        answer:
          "Senior staff spend less time on routine deliverable review and proposal creation. Gems handle first drafts and quality checks, so partners focus on client strategy and relationship management.",
      },
      {
        question: "Can it learn from our past engagements?",
        answer:
          "Yes. A Gem can be loaded with anonymized past deliverables, methodologies, and templates, building an institutional knowledge base that improves with each engagement.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    title: "Google Workspace AI for Education",
    description:
      "Educational institutions already use Google Workspace extensively. Gemini AI unlocks new capabilities for administrators, faculty, and support staff with custom AI assistants that understand your institution's policies and processes.",
    metaDescription:
      "Google Workspace AI for education. Custom Gemini Gems for administrators, faculty, and support staff. Automate admissions, policy queries, and curriculum development.",
    challenges: [
      "Admissions volume straining staff capacity",
      "Faculty spending time on administrative tasks instead of teaching",
      "Policy and procedure questions from students and staff",
      "Curriculum documentation and accreditation preparation",
      "Budget constraints limiting technology investments",
    ],
    solutions: [
      {
        name: "Admissions Assistant",
        description:
          "A Gem that helps admissions staff draft responses, track requirements, and answer applicant questions using your institution's policies.",
      },
      {
        name: "Curriculum Knowledge Base",
        description:
          "NotebookLM loaded with curriculum documents, accreditation standards, and program requirements for faculty reference.",
      },
      {
        name: "Student FAQ Gem",
        description:
          "Answers common student questions about registration, financial aid, academic policies, and campus resources using your institution's handbook.",
      },
    ],
    faqs: [
      {
        question: "Does our education Workspace plan include Gemini?",
        answer:
          "Google Workspace for Education Plus and Education Standard include Gemini features. We can assess your current plan and recommend the most cost-effective path to AI enablement.",
      },
      {
        question: "How do you handle FERPA requirements?",
        answer:
          "Google Workspace for Education is FERPA compliant. Gems are configured within your existing Workspace security controls, ensuring student data is handled appropriately.",
      },
      {
        question: "Can faculty create their own Gems?",
        answer:
          "We can train faculty to create and manage their own Gems for specific courses or departments. Our engagement includes hands-on training and documentation for ongoing self-service.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    title: "Google Workspace AI for Real Estate",
    description:
      "Real estate firms manage high volumes of listings, client communications, and transaction documentation. Gemini AI streamlines property descriptions, client follow-ups, and market analysis within the tools your agents already use.",
    metaDescription:
      "Google Workspace AI for real estate. Automate listing descriptions, client communications, and market analysis with custom Gemini Gems built for real estate professionals.",
    challenges: [
      "Writing unique property descriptions for every listing",
      "Managing client communications across multiple deals",
      "Market analysis and comparable property research",
      "Transaction documentation and compliance",
      "Agent onboarding and training",
    ],
    solutions: [
      {
        name: "Listing Description Writer",
        description:
          "A Gem that generates compelling, unique property descriptions from basic details, tailored to your brokerage's voice and target market.",
      },
      {
        name: "Client Follow-Up Drafter",
        description:
          "Generates personalized follow-up emails based on showing feedback, buyer criteria, and transaction stage.",
      },
      {
        name: "Market Analysis Assistant",
        description:
          "Analyzes comparable sales data in Sheets and produces market reports for client presentations.",
      },
    ],
    faqs: [
      {
        question: "Can agents use Gems on their phones during showings?",
        answer:
          "Yes. Gemini is available in the Google Workspace mobile apps, so agents can access their Gems from any device during showings, open houses, or client meetings.",
      },
      {
        question: "How do you handle multiple MLS systems?",
        answer:
          "MLS data can be exported to Sheets where Gems can analyze and use it. Workspace Flows can automate regular data imports from your MLS system.",
      },
      {
        question: "Can a Gem help with compliance documentation?",
        answer:
          "Yes. A Gem can be trained on your transaction checklists and compliance requirements, guiding agents through required documentation at each stage of a deal.",
      },
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    title: "Google Workspace AI for Technology Companies",
    description:
      "Technology companies move fast and need AI tools that keep up. Gemini AI within Google Workspace helps engineering, product, and go-to-market teams work more efficiently with custom AI assistants that understand your tech stack and processes.",
    metaDescription:
      "Google Workspace AI for technology companies. Custom Gemini Gems for engineering docs, product specs, and GTM workflows. Accelerate your tech team's productivity.",
    challenges: [
      "Engineering documentation falling behind development speed",
      "Product specs and requirements scattered across tools",
      "Go-to-market teams needing technical content quickly",
      "Cross-functional alignment between engineering and business teams",
      "Onboarding new engineers to complex codebases and architectures",
    ],
    solutions: [
      {
        name: "Technical Doc Assistant",
        description:
          "A Gem that helps engineers draft and update technical documentation, API references, and architecture decision records.",
      },
      {
        name: "Product Knowledge Base",
        description:
          "NotebookLM loaded with product specs, roadmaps, and competitive analysis for instant team reference across departments.",
      },
      {
        name: "Release Notes Generator",
        description:
          "Creates customer-facing release notes from engineering changelogs and product specs, tailored to your communication style.",
      },
    ],
    faqs: [
      {
        question: "We already use GitHub Copilot. How is this different?",
        answer:
          "Copilot focuses on code completion within the IDE. Gemini Gems handle business workflows: documentation, product specs, customer communications, and cross-team collaboration within Google Workspace.",
      },
      {
        question: "Can Gems access our internal wikis or Confluence?",
        answer:
          "Gems work within Google Workspace. Content from external wikis can be imported into Google Docs or Drive, or loaded directly into NotebookLM for a searchable knowledge base.",
      },
      {
        question: "How do you handle fast-moving product changes?",
        answer:
          "Gems are quick to update. When your product evolves, updating the Gem's knowledge base takes minutes, not weeks. Our managed support plan includes ongoing Gem optimization.",
      },
    ],
  },
  {
    slug: "nonprofit",
    name: "Nonprofit",
    title: "Google Workspace AI for Nonprofits",
    description:
      "Nonprofits do more with less. Google Workspace for Nonprofits is already free or heavily discounted, and Gemini AI helps small teams amplify their impact with custom AI assistants for grant writing, donor communications, and program management.",
    metaDescription:
      "Google Workspace AI for nonprofits. Stretch limited resources with custom Gemini Gems for grant writing, donor communications, and program reporting at nonprofit-friendly pricing.",
    challenges: [
      "Small teams wearing many hats",
      "Grant writing consuming significant staff time",
      "Donor communication personalization at scale",
      "Program reporting and impact measurement",
      "Limited technology budgets",
    ],
    solutions: [
      {
        name: "Grant Writer Assistant",
        description:
          "A Gem that drafts grant proposals using your organization's mission, past applications, and funder-specific requirements.",
      },
      {
        name: "Donor Communication Gem",
        description:
          "Generates personalized donor updates, thank-you letters, and campaign appeals based on giving history and engagement level.",
      },
      {
        name: "Impact Report Generator",
        description:
          "Compiles program data from Sheets into formatted impact reports for board presentations and funder updates.",
      },
    ],
    faqs: [
      {
        question: "Can nonprofits afford this?",
        answer:
          "Many nonprofits already have Google Workspace for Nonprofits at no cost. Our Starter package at $3,000 for one custom Gem delivers immediate productivity gains that typically save more in staff time than the investment.",
      },
      {
        question: "Does Google offer nonprofit pricing for Gemini?",
        answer:
          "Google Workspace for Nonprofits plans include Gemini features. We help you assess what's already included in your plan and identify any upgrades needed for full AI enablement.",
      },
      {
        question: "Can volunteers use the Gems?",
        answer:
          "Gems are accessible to anyone with a Google Workspace account in your organization. Volunteer access depends on your Workspace licensing and admin configuration.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    title: "Google Workspace AI for Retail",
    description:
      "Retail businesses manage inventory, customer communications, and multi-location coordination. Gemini AI helps retail teams create product content, analyze sales data, and maintain consistent customer experiences across channels.",
    metaDescription:
      "Google Workspace AI for retail. Automate product descriptions, sales analysis, and multi-location coordination with custom Gemini Gems built for retail operations.",
    challenges: [
      "Product description creation for large catalogs",
      "Sales data analysis across multiple locations",
      "Seasonal staffing and training",
      "Customer service consistency across channels",
      "Inventory and merchandising documentation",
    ],
    solutions: [
      {
        name: "Product Description Writer",
        description:
          "A Gem that generates SEO-optimized product descriptions from specs and photos, maintaining your brand voice across hundreds of SKUs.",
      },
      {
        name: "Sales Analytics Assistant",
        description:
          "Analyzes sales data in Sheets across locations and generates insights on trends, top performers, and inventory recommendations.",
      },
      {
        name: "Training Knowledge Base",
        description:
          "NotebookLM loaded with training materials, product knowledge, and customer service guidelines for rapid seasonal staff onboarding.",
      },
    ],
    faqs: [
      {
        question: "Can store employees access Gems on shared devices?",
        answer:
          "Yes. Gems work through Google Workspace accounts, which can be accessed on shared devices. Admin controls manage what each account can access.",
      },
      {
        question: "How do you handle multiple store locations?",
        answer:
          "Gems can serve all locations with location-aware responses, or you can deploy location-specific Gems. Workspace organizational units manage access and permissions per store.",
      },
      {
        question: "Can it integrate with our POS system?",
        answer:
          "Gems work within Google Workspace. POS data can be exported to Sheets for analysis, or Workspace Flows can automate regular data imports for the Gem to work with.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
