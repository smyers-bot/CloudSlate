export type Department = {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  painPoints: string[];
  gemExamples: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const departments: Department[] = [
  {
    slug: "sales",
    name: "Sales",
    title: "Custom Gemini Gems for Sales Teams",
    description:
      "Sales teams waste hours on manual prospect research, writing outreach emails from scratch, and hunting through CRM notes. Custom Gems automate the repetitive work so your reps spend more time selling.",
    metaDescription:
      "Custom Gemini Gems built for sales teams. Automate prospect research, generate personalized outreach, and accelerate deal cycles with AI assistants tailored to your sales process.",
    painPoints: [
      "Hours spent on manual prospect research before calls",
      "Generic outreach emails that get ignored",
      "Inconsistent messaging across the sales team",
      "CRM data entry and activity logging bottlenecks",
      "Slow onboarding for new sales hires",
    ],
    gemExamples: [
      {
        name: "Prospect Researcher",
        description:
          "Pulls company data, recent news, and competitive intel into a pre-call brief in under 60 seconds.",
      },
      {
        name: "Outreach Writer",
        description:
          "Generates personalized emails using your brand voice, case studies, and the prospect's industry context.",
      },
      {
        name: "Deal Summarizer",
        description:
          "Synthesizes CRM notes, email threads, and call transcripts into a concise deal status update for pipeline reviews.",
      },
    ],
    faqs: [
      {
        question: "Can a Gem connect to our CRM?",
        answer:
          "Gems work within the Google Workspace ecosystem. They can reference data you paste or upload, and with Workspace Flows, you can automate pulling CRM data into Google Sheets for the Gem to analyze.",
      },
      {
        question: "How long does it take to build a sales Gem?",
        answer:
          "Most sales Gems are built and deployed within 2-3 weeks, including the workflow discovery session, development, testing, and team training.",
      },
      {
        question: "Will my sales reps actually use it?",
        answer:
          "Adoption is built into our process. Every Gem deployment includes hands-on training and 30 days of optimization based on real-world usage patterns and feedback.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    title: "Custom Gemini Gems for Marketing Teams",
    description:
      "Marketing teams juggle content creation, campaign briefs, brand consistency, and performance reporting. Custom Gems act as always-available assistants that know your brand guidelines and produce on-brand content instantly.",
    metaDescription:
      "Custom Gemini Gems for marketing teams. Generate on-brand content, streamline campaign workflows, and maintain brand consistency with AI assistants built for your marketing process.",
    painPoints: [
      "Content creation bottlenecks slowing campaign launches",
      "Off-brand messaging from team members or agencies",
      "Time-consuming repurposing of content across channels",
      "Manual reporting and performance analysis",
      "Inconsistent tone across touchpoints",
    ],
    gemExamples: [
      {
        name: "Brand Voice Writer",
        description:
          "Generates blog posts, social copy, and email campaigns that match your exact brand voice and style guide.",
      },
      {
        name: "Campaign Brief Builder",
        description:
          "Creates structured campaign briefs from a few bullet points, complete with goals, audience segments, and channel strategy.",
      },
      {
        name: "Content Repurposer",
        description:
          "Transforms a single piece of content into multiple formats: blog to social threads, webinar to blog post, case study to email sequence.",
      },
    ],
    faqs: [
      {
        question: "Can a Gem learn our brand voice?",
        answer:
          "Yes. During the workflow discovery session, we analyze your existing content and brand guidelines to configure the Gem with your specific tone, terminology, and style preferences.",
      },
      {
        question: "Does it replace our content team?",
        answer:
          "No. Gems accelerate your team's output by handling first drafts, repurposing, and repetitive content tasks. Your team focuses on strategy and final polish.",
      },
      {
        question: "Can it generate visuals or just text?",
        answer:
          "Gemini Gems are primarily text-based. For visual content, they can generate detailed creative briefs and alt text, and they work alongside Google Workspace tools like Slides for presentation creation.",
      },
    ],
  },
  {
    slug: "hr",
    name: "Human Resources",
    title: "Custom Gemini Gems for HR Teams",
    description:
      "HR teams answer the same benefits questions, onboarding queries, and policy clarifications hundreds of times. Custom Gems give employees instant, accurate answers while freeing HR to focus on strategic initiatives.",
    metaDescription:
      "Custom Gemini Gems for HR teams. Automate employee onboarding, answer benefits questions instantly, and streamline HR workflows with AI assistants trained on your policies.",
    painPoints: [
      "Repetitive benefits and policy questions consuming HR bandwidth",
      "Slow onboarding processes with inconsistent information",
      "Manual leave tracking and policy lookup",
      "Difficulty keeping employees informed of policy changes",
      "Time-consuming job description and offer letter drafting",
    ],
    gemExamples: [
      {
        name: "Policy Assistant",
        description:
          "Answers employee questions about PTO, benefits, expense policies, and company guidelines using your actual handbook.",
      },
      {
        name: "Onboarding Guide",
        description:
          "Walks new hires through day-by-day onboarding checklists, IT setup, and team introductions with context-aware responses.",
      },
      {
        name: "Job Description Writer",
        description:
          "Generates compliant, inclusive job descriptions based on role requirements and your company's standard templates.",
      },
    ],
    faqs: [
      {
        question: "Is employee data safe with a Gem?",
        answer:
          "Gems operate within Google Workspace's enterprise security framework. Data stays within your organization's Google environment and is never used to train external models.",
      },
      {
        question: "Can the Gem handle sensitive HR topics?",
        answer:
          "Gems are configured with guardrails to handle only appropriate queries. For sensitive topics like complaints or legal matters, the Gem can be set up to redirect employees to the right person.",
      },
      {
        question: "How do we keep the Gem's information current?",
        answer:
          "Updating a Gem's knowledge base is straightforward. When policies change, you upload the new documents and the Gem immediately reflects the updated information.",
      },
    ],
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    title: "Custom Gemini Gems for Customer Support Teams",
    description:
      "Support teams handle high ticket volumes with inconsistent response quality. Custom Gems give agents instant access to product knowledge, troubleshooting steps, and templated responses that maintain your service standards.",
    metaDescription:
      "Custom Gemini Gems for customer support teams. Reduce response times, improve consistency, and empower agents with AI assistants trained on your product knowledge base.",
    painPoints: [
      "Long response times during peak ticket volume",
      "Inconsistent answer quality across agents",
      "New agents struggling to find the right information",
      "Repetitive tier-1 questions consuming senior agent time",
      "Knowledge scattered across wikis, docs, and tribal knowledge",
    ],
    gemExamples: [
      {
        name: "Ticket Response Drafter",
        description:
          "Generates accurate, empathetic responses based on your knowledge base and tone guidelines, ready for agent review.",
      },
      {
        name: "Troubleshooting Guide",
        description:
          "Walks agents through diagnostic steps based on the customer's issue, pulling from your technical documentation.",
      },
      {
        name: "Escalation Summarizer",
        description:
          "Creates concise summaries of ticket history and customer context when escalating to senior support or engineering.",
      },
    ],
    faqs: [
      {
        question: "Can a Gem handle customer-facing interactions directly?",
        answer:
          "Gems are designed to assist your agents, not replace them. They draft responses that agents review and send, maintaining the human touch your customers expect.",
      },
      {
        question: "How does it stay current with product changes?",
        answer:
          "When you update your product documentation, the Gem's knowledge base is updated accordingly. We also include 30 days of optimization to refine responses based on real ticket data.",
      },
      {
        question: "What about multilingual support?",
        answer:
          "Gemini supports dozens of languages. A custom Gem can be configured to draft responses in the customer's language while following your brand guidelines.",
      },
    ],
  },
  {
    slug: "operations",
    name: "Operations",
    title: "Custom Gemini Gems for Operations Teams",
    description:
      "Operations teams manage complex processes with SOPs scattered across multiple systems. Custom Gems centralize operational knowledge and guide team members through procedures with accuracy and speed.",
    metaDescription:
      "Custom Gemini Gems for operations teams. Centralize SOPs, automate reporting, and guide teams through complex procedures with AI assistants built for your operations.",
    painPoints: [
      "SOPs scattered across wikis, drives, and email threads",
      "Inconsistent process execution across shifts or locations",
      "Time-consuming manual status reports and data compilation",
      "Slow exception handling when procedures aren't followed",
      "New hire training takes weeks to become effective",
    ],
    gemExamples: [
      {
        name: "SOP Navigator",
        description:
          "Guides team members through standard operating procedures step-by-step, with context-aware answers to exception scenarios.",
      },
      {
        name: "Status Report Generator",
        description:
          "Compiles data from multiple sources into formatted status reports, ready for stakeholder review.",
      },
      {
        name: "Vendor Classifier",
        description:
          "Categorizes and routes vendor inquiries, purchase orders, and invoices based on your internal classification rules.",
      },
    ],
    faqs: [
      {
        question: "Can a Gem work with our existing operational tools?",
        answer:
          "Gems operate within Google Workspace. For data from external tools, Workspace Flows can pipe information into Sheets or Docs where the Gem can access and analyze it.",
      },
      {
        question: "How do we handle multi-location operations?",
        answer:
          "Gems can be configured with location-specific SOPs and procedures. One Gem can serve all locations while adapting its responses based on the user's context.",
      },
      {
        question: "What about compliance and audit trails?",
        answer:
          "All Gem interactions within Google Workspace are subject to your organization's admin controls and audit logging, giving you visibility into how AI tools are being used.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    title: "Custom Gemini Gems for Finance Teams",
    description:
      "Finance teams spend excessive time on manual data analysis, report formatting, and answering the same budget questions. Custom Gems accelerate financial workflows while keeping sensitive data within your secure Google environment.",
    metaDescription:
      "Custom Gemini Gems for finance teams. Automate financial reporting, streamline budget analysis, and answer recurring finance questions with AI assistants built for your processes.",
    painPoints: [
      "Hours spent formatting recurring financial reports",
      "Manual data reconciliation across spreadsheets",
      "Repetitive budget variance questions from department heads",
      "Slow month-end and quarter-end close processes",
      "Policy lookup for expense approvals and procurement",
    ],
    gemExamples: [
      {
        name: "Budget Analyst",
        description:
          "Analyzes budget vs. actual data in Sheets and generates variance explanations with recommended action items.",
      },
      {
        name: "Expense Policy Guide",
        description:
          "Answers employee questions about expense policies, approval thresholds, and reimbursement procedures using your actual finance handbook.",
      },
      {
        name: "Report Formatter",
        description:
          "Takes raw financial data and structures it into presentation-ready reports with consistent formatting and executive summaries.",
      },
    ],
    faqs: [
      {
        question: "Is our financial data secure with Gemini?",
        answer:
          "Google Workspace enterprise plans include data loss prevention, audit logging, and encryption at rest and in transit. Your financial data never leaves your organization's Google environment.",
      },
      {
        question: "Can a Gem replace our financial analysts?",
        answer:
          "No. Gems handle repetitive data formatting, lookups, and first-draft analysis. Your team focuses on judgment calls, strategy, and stakeholder communication.",
      },
      {
        question: "Does it integrate with our accounting software?",
        answer:
          "Gems work within Google Workspace. Financial data can be imported into Sheets via Workspace Flows or manual export, where the Gem can analyze and report on it.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    title: "Custom Gemini Gems for Legal Teams",
    description:
      "Legal teams handle high volumes of contract reviews, policy questions, and compliance checks. Custom Gems provide instant access to your legal knowledge base and accelerate document-heavy workflows.",
    metaDescription:
      "Custom Gemini Gems for legal teams. Accelerate contract review, automate policy lookups, and streamline legal workflows with AI assistants trained on your legal documentation.",
    painPoints: [
      "Contract review backlogs slowing deal velocity",
      "Repetitive policy and compliance questions from business teams",
      "Manual NDA and template management",
      "Time-consuming legal research and precedent lookup",
      "Inconsistent contract language across the organization",
    ],
    gemExamples: [
      {
        name: "Contract Reviewer",
        description:
          "Flags non-standard clauses, missing terms, and risk areas in contracts by comparing against your approved templates and playbook.",
      },
      {
        name: "Legal FAQ Assistant",
        description:
          "Answers common legal questions from business teams about policies, IP, NDAs, and compliance using your internal legal resources.",
      },
      {
        name: "Template Generator",
        description:
          "Creates first drafts of NDAs, SOWs, and standard agreements using your approved templates and clause library.",
      },
    ],
    faqs: [
      {
        question: "Can a Gem provide legal advice?",
        answer:
          "No. Gems are configured to provide information based on your existing legal documents and templates, not legal advice. All outputs should be reviewed by qualified legal professionals.",
      },
      {
        question: "How do we maintain attorney-client privilege?",
        answer:
          "Gems operate within your Google Workspace environment with enterprise-grade security controls. Access can be restricted to specific users, and all interactions are subject to your admin policies.",
      },
      {
        question: "Can it handle contracts in multiple languages?",
        answer:
          "Gemini supports multiple languages and can review and draft contracts in the languages your business operates in, while following your organization's templates and standards.",
      },
    ],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departments.map((d) => d.slug);
}
