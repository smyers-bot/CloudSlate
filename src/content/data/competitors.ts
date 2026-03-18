export type Competitor = {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  geminiAdvantages: { category: string; gemini: string; competitor: string }[];
  costComparison: { item: string; gemini: string; competitor: string }[];
  faqs: { question: string; answer: string }[];
};

export const competitors: Competitor[] = [
  {
    slug: "copilot",
    name: "Microsoft Copilot",
    title: "Gemini vs. Microsoft Copilot: Enterprise AI Comparison",
    description:
      "Microsoft Copilot costs $30/user/month on top of your Microsoft 365 license. Gemini is included in Google Workspace Business and Enterprise plans. Compare features, pricing, and real-world capabilities to see which AI platform delivers more value.",
    metaDescription:
      "Gemini vs Microsoft Copilot 2026 comparison. Compare pricing ($30/user vs included), features, customization, and total cost of ownership for enterprise AI assistants.",
    geminiAdvantages: [
      {
        category: "Pricing",
        gemini: "Included in Workspace Business/Enterprise plans",
        competitor: "$30/user/month add-on to M365 license",
      },
      {
        category: "Custom AI Assistants",
        gemini: "Custom Gems with your company's knowledge and processes",
        competitor: "Copilot Studio requires Power Platform licensing",
      },
      {
        category: "Knowledge Management",
        gemini: "NotebookLM included for AI-powered research and Q&A",
        competitor: "No equivalent included; requires third-party tools",
      },
      {
        category: "Workflow Automation",
        gemini: "Workspace Flows built into the platform",
        competitor: "Power Automate requires additional licensing",
      },
      {
        category: "Data Privacy",
        gemini: "Enterprise data never used to train models",
        competitor: "Enterprise data not used for training, but complex data governance",
      },
    ],
    costComparison: [
      {
        item: "Base productivity suite",
        gemini: "$14/user/mo (Workspace Business Standard)",
        competitor: "$36/user/mo (M365 E3)",
      },
      {
        item: "AI assistant",
        gemini: "Included",
        competitor: "$30/user/mo (Copilot add-on)",
      },
      {
        item: "Custom AI agents",
        gemini: "Included (Gems)",
        competitor: "$30/user/mo+ (Copilot Studio)",
      },
      {
        item: "Total per user/month",
        gemini: "$14",
        competitor: "$66+",
      },
    ],
    faqs: [
      {
        question: "Is Gemini really included in Google Workspace?",
        answer:
          "Yes. Google Workspace Business Standard ($14/user/mo) and Enterprise plans include Gemini, custom Gems, NotebookLM, and Workspace Flows at no additional cost.",
      },
      {
        question: "Can Gemini do everything Copilot can?",
        answer:
          "Gemini and Copilot have different strengths. Gemini excels in custom AI assistants (Gems), knowledge management (NotebookLM), and cost efficiency. Copilot has deeper integration with legacy Microsoft tools. For most mid-market companies, Gemini delivers more value at a fraction of the cost.",
      },
      {
        question: "What about companies heavily invested in Microsoft?",
        answer:
          "Migration from Microsoft 365 to Google Workspace is straightforward and often cost-neutral. The licensing savings alone typically cover the entire migration and AI enablement investment.",
      },
      {
        question: "How does Copilot Studio compare to custom Gems?",
        answer:
          "Copilot Studio requires Power Platform licensing ($30+/user/mo) and technical expertise to build custom agents. Gemini Gems are included in Workspace plans and can be customized by non-technical users with our guidance.",
      },
    ],
  },
  {
    slug: "chatgpt-enterprise",
    name: "ChatGPT Enterprise",
    title: "Gemini vs. ChatGPT Enterprise: Which AI Platform for Business?",
    description:
      "ChatGPT Enterprise is a standalone AI tool that lives outside your productivity suite. Gemini is built directly into Google Workspace where your team already works. Compare integration depth, pricing, and practical business value.",
    metaDescription:
      "Gemini vs ChatGPT Enterprise comparison. Built-in AI vs standalone tool. Compare integration, pricing, custom assistants, and enterprise security for business AI.",
    geminiAdvantages: [
      {
        category: "Integration",
        gemini: "Built into Docs, Sheets, Slides, Gmail, Drive",
        competitor: "Standalone app; requires copy-paste or API integration",
      },
      {
        category: "Pricing",
        gemini: "Included in Workspace plans",
        competitor: "$60/user/month standalone",
      },
      {
        category: "Custom Assistants",
        gemini: "Custom Gems with company knowledge, accessible in Workspace",
        competitor: "Custom GPTs available but outside work context",
      },
      {
        category: "Knowledge Management",
        gemini: "NotebookLM for AI-powered research within your org data",
        competitor: "No equivalent knowledge management tool",
      },
      {
        category: "Admin Controls",
        gemini: "Full Workspace admin console with DLP, audit logs, OU controls",
        competitor: "Enterprise admin dashboard with less granular controls",
      },
    ],
    costComparison: [
      {
        item: "Productivity suite",
        gemini: "$14/user/mo (includes AI)",
        competitor: "$36/user/mo (M365, no AI)",
      },
      {
        item: "AI platform",
        gemini: "Included",
        competitor: "$60/user/mo (ChatGPT Enterprise)",
      },
      {
        item: "Total per user/month",
        gemini: "$14",
        competitor: "$96",
      },
    ],
    faqs: [
      {
        question: "Isn't ChatGPT more powerful than Gemini?",
        answer:
          "Both models are highly capable. The practical difference for businesses is integration: Gemini works inside the apps your team uses daily, while ChatGPT requires switching to a separate tool. Built-in AI gets used; standalone tools often get abandoned.",
      },
      {
        question: "Can we use both ChatGPT and Gemini?",
        answer:
          "You can, but most organizations find that paying for a standalone AI tool on top of their productivity suite is unnecessary when Gemini provides equivalent capabilities built directly into Google Workspace.",
      },
      {
        question: "What about ChatGPT's custom GPTs?",
        answer:
          "Custom GPTs are useful but exist outside your work environment. Gemini Gems operate within Docs, Sheets, and Gmail where your team is already working, leading to higher adoption and more practical daily use.",
      },
    ],
  },
  {
    slug: "claude",
    name: "Claude for Business",
    title: "Gemini vs. Claude for Business: Enterprise AI Comparison",
    description:
      "Claude is a strong AI model, but it's a standalone platform that requires separate licensing and integration. Gemini delivers comparable AI capabilities built directly into the Google Workspace tools your team uses every day.",
    metaDescription:
      "Gemini vs Claude for Business comparison. Built-in Workspace AI vs standalone platform. Compare integration, pricing, and enterprise features for business AI adoption.",
    geminiAdvantages: [
      {
        category: "Integration",
        gemini: "Native in Docs, Sheets, Slides, Gmail, Drive",
        competitor: "Standalone platform; requires API integration",
      },
      {
        category: "Pricing",
        gemini: "Included in Workspace plans",
        competitor: "$30-60/user/month standalone",
      },
      {
        category: "Custom Assistants",
        gemini: "Custom Gems within Workspace apps",
        competitor: "Projects feature available but separate from work tools",
      },
      {
        category: "Workflow Automation",
        gemini: "Workspace Flows for end-to-end automation",
        competitor: "No built-in workflow automation",
      },
      {
        category: "Knowledge Management",
        gemini: "NotebookLM for organizational knowledge",
        competitor: "No equivalent knowledge management product",
      },
    ],
    costComparison: [
      {
        item: "Productivity suite + AI",
        gemini: "$14/user/mo (all included)",
        competitor: "$36/user/mo (M365) + $30-60/user/mo (Claude)",
      },
      {
        item: "Total per user/month",
        gemini: "$14",
        competitor: "$66-96",
      },
    ],
    faqs: [
      {
        question: "Is Gemini as capable as Claude?",
        answer:
          "Both are leading AI models with different strengths. For business productivity, what matters most is how AI integrates into daily workflows. Gemini's native Workspace integration means your team uses AI without changing how they work.",
      },
      {
        question: "What about Claude's longer context window?",
        answer:
          "NotebookLM handles long-document analysis within Google Workspace, effectively giving you long-context capabilities for business documents without needing a separate tool.",
      },
      {
        question: "Can we use Claude alongside Google Workspace?",
        answer:
          "You can, but adding a standalone AI tool creates additional cost, training burden, and adoption challenges. Most organizations find Gemini's built-in capabilities cover their needs at a fraction of the total cost.",
      },
    ],
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    title: "Gemini vs. Notion AI: Workspace AI Comparison",
    description:
      "Notion AI adds AI features to Notion's workspace, but it requires your team to move their work into Notion. Gemini AI works in the Google Workspace tools your team already uses, with no migration and no additional platform to manage.",
    metaDescription:
      "Gemini vs Notion AI comparison. Add AI to your existing Google Workspace vs migrating to a new platform. Compare features, pricing, and enterprise capabilities.",
    geminiAdvantages: [
      {
        category: "Platform",
        gemini: "AI built into your existing productivity suite",
        competitor: "Requires adopting Notion as your workspace platform",
      },
      {
        category: "Pricing",
        gemini: "Included in Workspace plans",
        competitor: "$10/user/mo add-on to Notion plans",
      },
      {
        category: "Enterprise Features",
        gemini: "Full enterprise admin console, DLP, compliance certifications",
        competitor: "Enterprise features available but less mature",
      },
      {
        category: "Custom AI",
        gemini: "Custom Gems tailored to your business processes",
        competitor: "AI features are general-purpose within Notion",
      },
      {
        category: "Ecosystem",
        gemini: "Works across Docs, Sheets, Slides, Gmail, Drive, Meet",
        competitor: "Limited to Notion's workspace environment",
      },
    ],
    costComparison: [
      {
        item: "Productivity suite + AI",
        gemini: "$14/user/mo (all included)",
        competitor: "$18-25/user/mo (Notion Business + AI)",
      },
    ],
    faqs: [
      {
        question: "We already use Notion. Should we switch?",
        answer:
          "If your team uses both Google Workspace and Notion, you're paying for overlapping functionality. Consolidating on Workspace with Gemini eliminates the redundancy and gives you more capable AI tools at a lower total cost.",
      },
      {
        question: "Can Notion AI create custom assistants like Gems?",
        answer:
          "Notion AI provides general-purpose AI features within Notion documents. It doesn't offer the equivalent of custom Gems that can be trained on your specific processes and deployed across your Workspace apps.",
      },
      {
        question: "What about Notion's knowledge base features?",
        answer:
          "NotebookLM provides comparable knowledge management capabilities within Google Workspace, without requiring your team to learn and maintain a separate platform.",
      },
    ],
  },
];

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}

export function getAllCompetitorSlugs(): string[] {
  return competitors.map((c) => c.slug);
}
