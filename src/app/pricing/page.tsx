import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Pricing | CloudSlate - Gemini AI Enablement",
  description:
    "Transparent pricing for custom Gemini Gems, NotebookLM deployment, Workspace Flows automation, and Microsoft 365 to Google Workspace migration services.",
};

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,000",
    description: "Perfect for teams ready to test the power of a single custom Gem.",
    features: [
      "1 custom Gemini Gem",
      "Workflow discovery session",
      "Team training",
      "30-day optimization",
    ],
    cta: "Start with One Gem",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$12,000",
    description: "The most popular choice for teams scaling AI across a department.",
    features: [
      "3 custom Gemini Gems",
      "NotebookLM setup for 1 department",
      "Priority support",
      "Quarterly reviews",
    ],
    cta: "Most Popular",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations going all-in on Gemini AI across the business.",
    features: [
      "Unlimited custom Gems",
      "Multi-department NotebookLM",
      "Workspace Flows automation",
      "Dedicated account team",
    ],
    cta: "Contact Us",
    href: "/contact",
    highlighted: false,
  },
];

const additionalServices = [
  {
    service: "NotebookLM Deployment",
    price: "$5,000 - $15,000",
    unit: "per department",
  },
  {
    service: "Workspace Flows Automation",
    price: "$2,000 - $10,000",
    unit: "per workflow",
  },
  {
    service: "Migration (M365 to Google Workspace)",
    price: "$15 - $50",
    unit: "per seat (includes Gemini Quick Start)",
  },
  {
    service: "Managed Support",
    price: "$5 - $15",
    unit: "/user/month (dedicated account team, QBRs, ongoing Gem optimization)",
  },
];

const faqs = [
  {
    question: "What's included in the Starter package?",
    answer:
      "The Starter package includes a full workflow discovery session where we identify the best use case for your first Gem, custom development and testing, team training to ensure adoption, and 30 days of optimization to refine the Gem based on real-world usage.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No. Every engagement is project-based with clear deliverables and timelines. Managed Support is month-to-month with no long-term commitment required. We earn your ongoing business through results.",
  },
  {
    question: "Can we start small and scale up?",
    answer:
      "Absolutely. Most clients start with the Starter package to prove the value of a single custom Gem, then expand to Growth or Enterprise as they see results. Every engagement is designed to demonstrate ROI before scaling.",
  },
  {
    question: "What if we already have Google Workspace but aren't using Gemini?",
    answer:
      "That's exactly who we help. If you're on a Workspace Business or Enterprise plan, you likely already have access to Gemini, Gems, NotebookLM, and Flows. We help you activate and customize these tools for your specific workflows.",
  },
  {
    question: "How does the cost-neutral migration work?",
    answer:
      "When migrating from Microsoft 365 to Google Workspace, the per-user licensing savings typically cover the entire cost of migration and AI enablement services. We provide a detailed savings analysis during the assessment phase so you can see the numbers before committing.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup type="faq" faqs={faqs} />
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Transparent Pricing. Real ROI.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every engagement starts small and scales with proven results.
          </p>
        </div>
      </section>

      {/* ─── CUSTOM GEMS PRICING ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Custom Gems Development
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose the package that fits your team&rsquo;s needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-2 border-primary bg-white shadow-xl ring-1 ring-primary/10"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {tier.price}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton
                    href={tier.href}
                    variant={tier.highlighted ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL SERVICES ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Extend your AI enablement with deployment, automation, and ongoing support.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {additionalServices.map((item, idx) => (
                <div
                  key={item.service}
                  className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between ${
                    idx !== additionalServices.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.service}</p>
                    <p className="text-sm text-slate-500">{item.unit}</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COST-NEUTRAL COMPARISON ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-secondary bg-secondary/5 p-8 text-center sm:p-12">
              <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Your Investment Pays for Itself
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Microsoft 365 E3 + Copilot
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">
                    $66<span className="text-base font-normal text-slate-500">/user/mo</span>
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-2 ring-secondary">
                  <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                    Google Workspace + Gemini
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-secondary">
                    $14<span className="text-base font-normal text-slate-500">/user/mo</span>
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg font-medium text-slate-700">
                The savings on licensing alone cover your entire AI enablement investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to See Real ROI from AI?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free consultation and we&rsquo;ll map out exactly how Gemini AI
            can transform your workflows.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
