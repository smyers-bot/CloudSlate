import CTAButton from "@/components/ui/CTAButton";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotebookLM Enterprise Deployment | CloudSlate",
  description:
    "Deploy Google's NotebookLM as your team's AI-powered knowledge engine. Natural language queries, Deep Research, auto-generated explainers, and enterprise-grade security.",
};

const capabilities = [
  {
    title: "Natural Language Queries",
    description:
      "Ask questions in plain English and get sourced answers grounded in your uploaded documents. No query syntax to learn.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Deep Research",
    description:
      "Go beyond surface-level answers. NotebookLM synthesizes insights across hundreds of pages to surface patterns and connections humans miss.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Auto-Generated Explainers",
    description:
      "Transform dense documents into summaries, FAQs, study guides, and audio overviews your team can consume in minutes.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    title: "Team Sharing & Collaboration",
    description:
      "Share notebooks across teams with granular permissions. Everyone works from the same knowledge base with consistent answers.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "IAM-Based Access Control",
    description:
      "Leverage your existing Google Workspace IAM policies. Users only see content they are authorized to access.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

const departmentUseCases = [
  {
    department: "Sales Enablement",
    description:
      "Centralize case studies, competitive intelligence, and product specifications. Reps find answers in seconds instead of searching across dozens of folders.",
    sources: ["Case studies", "Competitive intel", "Product specs", "Pricing guides"],
  },
  {
    department: "New Hire Onboarding",
    description:
      "Load company policies, training materials, and product documentation into a single notebook. New hires get instant, accurate answers from day one.",
    sources: ["HR policies", "Training materials", "Product docs", "Org charts"],
  },
  {
    department: "Customer Support",
    description:
      "Build a living knowledge base from troubleshooting guides, product documentation, and past ticket resolutions for faster, more consistent support.",
    sources: ["Knowledge base", "Troubleshooting guides", "Product docs", "FAQs"],
  },
  {
    department: "Product & Engineering",
    description:
      "Keep technical documentation, architecture decision records, and API references queryable. Reduce onboarding time for new engineers by weeks.",
    sources: ["Technical docs", "ADRs", "API references", "Runbooks"],
  },
  {
    department: "Legal & Compliance",
    description:
      "Maintain searchable compliance libraries and contract template repositories. Surface relevant clauses and precedents across your entire document corpus.",
    sources: ["Compliance libraries", "Contract templates", "Regulatory filings", "Legal memos"],
  },
];

const complianceFeatures = [
  {
    title: "VPC Service Controls",
    description: "Restrict data access to your organization's virtual perimeter.",
  },
  {
    title: "Audit Trails",
    description: "Full logging of every query and document access for compliance review.",
  },
  {
    title: "No Training on Your Data",
    description: "Your uploaded documents are never used to train Google's models.",
  },
  {
    title: "Data Residency",
    description: "Control where your data is stored to meet regional compliance requirements.",
  },
  {
    title: "Admin Console Controls",
    description: "Manage NotebookLM access through your existing Google Workspace admin console.",
  },
  {
    title: "DLP Integration",
    description: "Integrates with Google's Data Loss Prevention rules to prevent sensitive data exposure.",
  },
];

export default function NotebookLMPage() {
  return (
    <main>
      <SchemaMarkup
        type="service"
        name="NotebookLM Enterprise Deployment"
        description="Deploy Google's NotebookLM as your team's AI-powered knowledge engine with natural language queries, Deep Research, and enterprise-grade security."
        priceRange="$5,000 - $15,000"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-24 px-6 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Knowledge Management
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            NotebookLM: Your Team&apos;s AI-Powered Knowledge Engine
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Turn your company&apos;s scattered documents into an intelligent,
            searchable knowledge base that gives your team instant, sourced
            answers.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Schedule a NotebookLM Deployment Demo
          </CTAButton>
        </div>
      </section>

      {/* What is NotebookLM */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            What is NotebookLM?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              NotebookLM is Google&apos;s enterprise knowledge tool that
              transforms your uploaded documents into an AI-powered research
              assistant. Upload PDFs, Google Docs, Slides, web pages, and audio
              files, then query them using natural language.
            </p>
            <p>
              Every answer is grounded in your sources with inline citations, so
              your team can verify accuracy and trace insights back to the
              original material. It is not a generic chatbot; it only knows what
              you give it.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Key Capabilities
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Enterprise-grade AI knowledge management, built on Gemini.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {capability.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Department */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Use Cases by Department
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              NotebookLM adapts to any team that depends on institutional knowledge.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departmentUseCases.map((useCase) => (
              <article
                key={useCase.department}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {useCase.department}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.sources.map((source) => (
                    <span
                      key={source}
                      className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Compliance */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Enterprise Compliance & Security
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              NotebookLM meets the security and compliance requirements that
              mid-market and enterprise organizations demand.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Deployments are scoped per department to ensure a focused, high-impact rollout.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Per Department Deployment
            </p>
            <p className="mb-4 text-4xl font-extrabold text-slate-900">
              $5,000 &ndash; $15,000
            </p>
            <p className="mb-8 text-slate-600">
              Price varies based on document volume, number of notebooks, source
              complexity, and training requirements.
            </p>
            <ul className="mx-auto mb-10 max-w-md space-y-3 text-left">
              {[
                "Notebook architecture & source curation",
                "Document ingestion & optimization",
                "Custom query templates for your workflows",
                "Team training & adoption workshops",
                "30 days of post-deployment support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <CTAButton href="/contact" variant="primary" size="lg">
              Schedule a NotebookLM Deployment Demo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 px-6 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Turn Your Documents Into a Competitive Advantage
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            See how NotebookLM can transform how your team accesses and uses
            institutional knowledge.
          </p>
          <CTAButton href="/contact" variant="outline" size="lg">
            Schedule a NotebookLM Deployment Demo
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
