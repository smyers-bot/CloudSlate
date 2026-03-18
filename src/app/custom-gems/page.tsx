import CTAButton from "@/components/ui/CTAButton";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gemini Gems for Your Business | CloudSlate",
  description:
    "Company-specific AI assistants built on Gemini Gems that automate real workflows in Google Docs, Sheets, Slides, Drive, and Gmail. Starting at $3,000.",
};

const useCases = [
  {
    department: "Sales",
    title: "Proposal Generation",
    description:
      "Draft personalized proposals from your pricing sheets and historical win data. Close deals faster with AI-powered accuracy.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    department: "Legal & Compliance",
    title: "Contract Review",
    description:
      "Automatically review contracts against your compliance checklists. Flag risks, missing clauses, and deviations from standard terms.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    department: "Customer Support",
    title: "Ticket Triage & Response",
    description:
      "Triage incoming tickets, research past resolutions, and draft replies using Workspace Flows. Cut response times by 60%.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    department: "HR & People Ops",
    title: "Onboarding Assistant",
    description:
      "Guide new hires through onboarding workflows, answer policy questions, and automate paperwork routing from day one.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    department: "Marketing",
    title: "Brief & Content Ideation",
    description:
      "Create campaign briefs, generate content ideas, and align messaging with brand guidelines automatically.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    department: "Finance",
    title: "Report Analysis",
    description:
      "Summarize financial reports, surface key trends, and generate executive-ready insights from raw spreadsheet data.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We interview your team, audit existing workflows, and identify the highest-impact automation opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We map each Gem's instructions, data sources, and integration points. You review and approve before we build.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "We build your Gems, connect them to your data, and run iterative testing with your team until accuracy hits the mark.",
  },
  {
    step: "04",
    title: "Deploy & Train",
    description:
      "We roll out Gems to your team, deliver hands-on training sessions, and provide 30 days of post-launch support.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,000",
    description: "Perfect for teams ready to pilot AI-powered workflows.",
    features: [
      "1 custom Gem built for your team",
      "Workflow discovery session",
      "Team training workshop",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$12,000",
    description: "For organizations scaling AI across departments.",
    features: [
      "3 custom Gems across departments",
      "NotebookLM knowledge base setup",
      "Cross-department workflow mapping",
      "Team training for all Gem users",
      "60 days of post-launch support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored scope for complex, multi-team deployments.",
    features: [
      "Unlimited custom Gems",
      "Full NotebookLM deployment",
      "Dedicated Gemini strategist",
      "Custom Workspace Flows",
      "Ongoing managed support",
    ],
  },
];

const faqs = [
  {
    question: "What exactly is a Gemini Gem?",
    answer:
      "A Gem is a custom AI assistant that lives in the side panel of Google Workspace apps like Docs, Sheets, Slides, Drive, and Gmail. It follows instructions you define, references your specific data, and performs tasks the way your team needs.",
  },
  {
    question: "How long does it take to build a custom Gem?",
    answer:
      "Most single-Gem projects take 2-3 weeks from kickoff to deployment. Multi-Gem engagements typically run 4-8 weeks depending on complexity and the number of data sources involved.",
  },
  {
    question: "Do Gems have access to our company data?",
    answer:
      "Gems operate within your Google Workspace environment and respect your existing IAM permissions. They can reference Google Drive files, Sheets, and Docs that your team already has access to. No data leaves your Workspace tenant.",
  },
  {
    question: "Can we modify a Gem after it's deployed?",
    answer:
      "Absolutely. Gems are designed to evolve with your workflows. We provide documentation and training so your team can make adjustments, or you can engage us for ongoing optimization.",
  },
  {
    question: "Do we need Gemini Business or Enterprise licenses?",
    answer:
      "Yes, your users need an active Gemini add-on license (Business or Enterprise) to access custom Gems in the Workspace side panel. We can help you assess licensing during the Discovery phase.",
  },
];

export default function CustomGemsPage() {
  return (
    <main>
      <SchemaMarkup
        type="service"
        name="Custom Gemini Gems Development"
        description="Company-specific AI assistants built on Gemini Gems that automate real workflows in Google Docs, Sheets, Slides, Drive, and Gmail."
        priceRange="$3,000 - $12,000+"
      />
      <SchemaMarkup
        type="faq"
        faqs={faqs}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-24 px-6 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Flagship Service
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Custom Gemini Gems Built for Your Business
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Company-specific AI assistants that automate real workflows inside
            the Google Workspace tools your team already uses every day.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book a Free Gems Consultation
            </CTAButton>
            <CTAButton href="/tools/gems-idea-generator" variant="outline" size="lg">
              Try the Gems Idea Generator
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What Are Custom Gems */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            What Are Custom Gems?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Gemini Gems are custom AI assistants that live directly in the side
              panels of Google Docs, Sheets, Slides, Drive, and Gmail. Unlike
              generic chatbots, each Gem is built around your company&apos;s
              specific data, terminology, and workflows.
            </p>
            <p>
              Think of a Gem as a specialist team member who has read every
              document, memorized every process, and is available instantly in
              the tools your team already uses. No context-switching, no new apps
              to learn, no copy-pasting between systems.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Google Docs & Slides", "Google Sheets & Drive", "Gmail & Meet"].map(
              (app) => (
                <div
                  key={app}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-800">{app}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Use Case Gallery */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Gems for Every Department
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              See how custom Gems transform workflows across your organization.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <article
                key={useCase.department}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {useCase.icon}
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {useCase.department}
                </p>
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {useCase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              How We Build Your Gems
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A proven four-step process from workflow audit to team adoption.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="mb-3 block text-4xl font-extrabold text-primary/15">
                  {step.step}
                </span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Transparent project-based pricing. No hidden fees, no per-seat
              charges for our services.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border bg-white p-8 shadow-sm ${
                  tier.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-slate-200"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-1 text-xl font-bold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mb-4 text-3xl font-extrabold text-primary">
                  {tier.price}
                </p>
                <p className="mb-6 text-sm text-slate-600">
                  {tier.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "secondary"}
                  size="md"
                >
                  Get Started
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 px-6 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Build Your Custom Gems?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            Book a free 30-minute consultation to explore which workflows your
            team can automate with custom Gemini Gems.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact" variant="outline" size="lg">
              Book a Free Gems Consultation
            </CTAButton>
            <CTAButton href="/tools/gems-idea-generator" variant="outline" size="lg">
              Try the Gems Idea Generator
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
