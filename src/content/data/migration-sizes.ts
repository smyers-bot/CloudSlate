export type MigrationSize = {
  slug: string;
  name: string;
  userRange: string;
  title: string;
  description: string;
  metaDescription: string;
  timeline: string;
  priceRange: string;
  considerations: string[];
  phases: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const migrationSizes: MigrationSize[] = [
  {
    slug: "50-users",
    name: "Small Teams",
    userRange: "10-50 users",
    title: "Migrate 50 Users to Google Workspace from Microsoft 365",
    description:
      "Small team migrations are the fastest path to Google Workspace and Gemini AI. With fewer than 50 users, your team can be fully migrated and AI-enabled in as little as two weeks with minimal disruption.",
    metaDescription:
      "Migrate 50 users from Microsoft 365 to Google Workspace. 2-week timeline, $15-50/seat, includes free Gemini AI enablement. Save 40% on average on licensing costs.",
    timeline: "2-3 weeks",
    priceRange: "$15-30/seat",
    considerations: [
      "Fastest migration timeline with lowest complexity",
      "All users can be migrated in a single weekend cutover",
      "Minimal change management required with small teams",
      "Entire team can be trained in a single session",
      "Ideal for proving the value before scaling to larger organizations",
    ],
    phases: [
      {
        name: "Assessment & Planning",
        description:
          "We audit your current M365 setup, map user data and permissions, and create a migration plan. Typically 2-3 days.",
      },
      {
        name: "Pre-Migration Setup",
        description:
          "We configure your Google Workspace domain, set up admin controls, and prepare the migration tools. 1-2 days.",
      },
      {
        name: "Data Migration",
        description:
          "Email, calendar, contacts, and Drive files are migrated with zero data loss. Often completed over a weekend. 1-2 days.",
      },
      {
        name: "Training & Go-Live",
        description:
          "Hands-on team training covering Gmail, Drive, Docs, and Gemini AI basics. DNS cutover and go-live support. 1-2 days.",
      },
      {
        name: "Gemini Quick Start",
        description:
          "Your first custom Gem is built and deployed, and your team gets their initial NotebookLM setup. Included at no extra cost. 3-5 days.",
      },
    ],
    faqs: [
      {
        question: "Can we migrate over a weekend to avoid disruption?",
        answer:
          "Yes. For teams under 50 users, we typically complete the data migration over a weekend so your team starts Monday on Google Workspace with minimal disruption.",
      },
      {
        question: "What about our existing email archives?",
        answer:
          "All email history, including attachments, is migrated to Gmail. Your team retains access to their full email archive in Google Workspace.",
      },
      {
        question: "How much will we save on licensing?",
        answer:
          "A 50-user team on M365 E3 + Copilot ($66/user/mo) switching to Google Workspace Business Standard ($14/user/mo) saves approximately $31,200 per year. That savings more than covers the migration cost.",
      },
    ],
  },
  {
    slug: "250-users",
    name: "Mid-Size Companies",
    userRange: "50-250 users",
    title: "Migrate 250 Users to Google Workspace from Microsoft 365",
    description:
      "Mid-size migrations require phased planning to maintain business continuity. With 50 to 250 users, we migrate department-by-department, providing targeted training and AI enablement for each team's specific workflows.",
    metaDescription:
      "Migrate 250 users from Microsoft 365 to Google Workspace. Phased migration over 4-6 weeks, $15-40/seat, includes Gemini AI enablement for every department.",
    timeline: "4-6 weeks",
    priceRange: "$15-40/seat",
    considerations: [
      "Phased department-by-department migration for minimal disruption",
      "More complex email routing and coexistence during transition",
      "Department-specific training sessions for higher adoption",
      "Change management support included for smooth transition",
      "Multiple custom Gems deployed across departments post-migration",
    ],
    phases: [
      {
        name: "Discovery & Assessment",
        description:
          "Deep-dive into your M365 environment: shared mailboxes, distribution lists, custom configurations, third-party integrations. 1 week.",
      },
      {
        name: "Architecture & Planning",
        description:
          "Design the Workspace organizational structure, security policies, and migration sequence. Stakeholder alignment. 1 week.",
      },
      {
        name: "Pilot Migration",
        description:
          "Migrate a pilot group (typically IT + early adopters) to validate the process and identify any issues. 1 week.",
      },
      {
        name: "Phased Migration",
        description:
          "Migrate remaining departments in planned waves, with email coexistence and calendar interop during transition. 1-2 weeks.",
      },
      {
        name: "Training & AI Enablement",
        description:
          "Department-specific training sessions plus Gemini Quick Start: custom Gems and NotebookLM setup for key use cases. 1 week.",
      },
    ],
    faqs: [
      {
        question: "How do you handle the transition period when some users are on M365 and some on Workspace?",
        answer:
          "We set up email coexistence and calendar interop so both platforms work seamlessly during the transition. Users on different systems can still email and schedule meetings with each other.",
      },
      {
        question: "What about shared mailboxes and distribution lists?",
        answer:
          "All shared mailboxes, distribution lists, and groups are mapped and recreated in Google Workspace with equivalent functionality. We verify each one post-migration.",
      },
      {
        question: "How much will a 250-user company save?",
        answer:
          "A 250-user company on M365 E3 + Copilot saves approximately $156,000 per year by switching to Google Workspace Business Standard. This savings covers the entire migration and AI enablement investment within the first few months.",
      },
    ],
  },
  {
    slug: "1000-users",
    name: "Large Organizations",
    userRange: "250-1,000 users",
    title: "Migrate 1,000 Users to Google Workspace from Microsoft 365",
    description:
      "Large-scale migrations require enterprise-grade planning, dedicated project management, and careful change management. We've guided organizations with hundreds of users through seamless transitions with zero data loss and high adoption rates.",
    metaDescription:
      "Migrate 1,000 users from Microsoft 365 to Google Workspace. Enterprise migration with dedicated PM, phased rollout, and full Gemini AI enablement. Save $600K+/year on licensing.",
    timeline: "8-12 weeks",
    priceRange: "$20-40/seat",
    considerations: [
      "Dedicated project manager for the entire engagement",
      "Complex Active Directory and SSO integration",
      "Multi-phase rollout with extensive pilot testing",
      "Executive change management and communication plan",
      "Enterprise-grade security configuration and compliance verification",
    ],
    phases: [
      {
        name: "Enterprise Assessment",
        description:
          "Comprehensive audit of M365 environment: AD structure, SSO, compliance configurations, third-party integrations, custom applications. 2 weeks.",
      },
      {
        name: "Architecture Design",
        description:
          "Design enterprise Workspace architecture: OU structure, security policies, DLP rules, SSO integration, mobile device management. 2 weeks.",
      },
      {
        name: "Pilot & Validation",
        description:
          "Migrate 50-100 users as a pilot group. Validate all workflows, integrations, and security configurations. 2 weeks.",
      },
      {
        name: "Enterprise Migration",
        description:
          "Phased migration of remaining users in planned waves with 24/7 support during cutover weekends. 3-4 weeks.",
      },
      {
        name: "AI Enablement Program",
        description:
          "Organization-wide Gemini enablement: multiple custom Gems per department, NotebookLM deployment, Workspace Flows automation, and ongoing managed support. 2-4 weeks.",
      },
    ],
    faqs: [
      {
        question: "How do you handle Active Directory integration?",
        answer:
          "We configure Google Cloud Directory Sync (GCDS) or use Google Cloud Identity to sync your existing AD. SSO is configured through your existing identity provider (Okta, Azure AD, etc.) for seamless authentication.",
      },
      {
        question: "What about compliance requirements?",
        answer:
          "Google Workspace Enterprise includes SOC 2, ISO 27001, HIPAA eligibility, and FedRAMP compliance. We configure DLP, audit logging, and retention policies to meet your specific compliance requirements.",
      },
      {
        question: "What's the ROI for a 1,000-user migration?",
        answer:
          "A 1,000-user organization on M365 E3 + Copilot saves approximately $624,000 per year on licensing alone. Even after accounting for migration costs, the investment pays for itself within the first quarter.",
      },
    ],
  },
  {
    slug: "5000-users",
    name: "Enterprise",
    userRange: "1,000-5,000+ users",
    title: "Migrate 5,000+ Users to Google Workspace from Microsoft 365",
    description:
      "Enterprise migrations at this scale are transformative IT programs. With thousands of users, multiple offices, and complex compliance requirements, we bring a team of specialists and Google engineering support to ensure a flawless transition.",
    metaDescription:
      "Migrate 5,000+ users from Microsoft 365 to Google Workspace. Full enterprise program with Google engineering support, dedicated team, and organization-wide Gemini AI deployment.",
    timeline: "16-24 weeks",
    priceRange: "$15-50/seat",
    considerations: [
      "Full program team: project manager, migration engineers, change management lead",
      "Direct Google engineering support through our SELECT partnership",
      "Multi-office, multi-region coordination",
      "Executive sponsorship and organizational change management",
      "Comprehensive security review and compliance gap analysis",
    ],
    phases: [
      {
        name: "Program Initiation",
        description:
          "Executive alignment, program team assembly, stakeholder mapping, and risk assessment. Detailed project plan with milestones and governance. 3-4 weeks.",
      },
      {
        name: "Environment Design",
        description:
          "Enterprise architecture: multi-domain setup, SSO, MDM, DLP, compliance configurations, third-party integration mapping, and custom application assessment. 3-4 weeks.",
      },
      {
        name: "Pilot Program",
        description:
          "Migrate 200-500 users across representative departments. Full validation of all workflows, integrations, and security controls. 3-4 weeks.",
      },
      {
        name: "Enterprise Rollout",
        description:
          "Phased migration of remaining users in coordinated waves across offices and regions. 24/7 support, war room operations during cutover windows. 4-8 weeks.",
      },
      {
        name: "AI Transformation",
        description:
          "Organization-wide Gemini deployment: custom Gem program across all departments, NotebookLM knowledge bases, Workspace Flows automation, and managed support onboarding. 3-4 weeks.",
      },
    ],
    faqs: [
      {
        question: "Do you have experience with migrations at this scale?",
        answer:
          "As a Google Workspace SELECT Partner, we have access to Google's migration engineering resources and tooling designed for large-scale deployments. Our partnership ensures enterprise-grade support throughout the engagement.",
      },
      {
        question: "How do you manage change across thousands of users?",
        answer:
          "We deploy a formal change management program: executive communications, department champions, training academies, and adoption dashboards. Change management is not an afterthought; it's built into every phase.",
      },
      {
        question: "What's the total cost savings at this scale?",
        answer:
          "A 5,000-user organization on M365 E3 + Copilot saves over $3.1 million per year on licensing by switching to Google Workspace Enterprise. The migration investment typically pays for itself within the first month of licensing savings.",
      },
    ],
  },
];

export function getMigrationSizeBySlug(slug: string): MigrationSize | undefined {
  return migrationSizes.find((m) => m.slug === slug);
}

export function getAllMigrationSizeSlugs(): string[] {
  return migrationSizes.map((m) => m.slug);
}
