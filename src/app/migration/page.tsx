import CTAButton from "@/components/ui/CTAButton";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft 365 to Google Workspace Migration | CloudSlate",
  description:
    "Migrate from Microsoft 365 to Google Workspace and save 40% on average on licensing. Every migration includes a custom Gem and NotebookLM setup at no extra cost.",
};

const migrationItems = [
  {
    from: "Outlook",
    to: "Gmail & Calendar",
    description: "Email, calendar events, contacts, and distribution lists.",
  },
  {
    from: "OneDrive",
    to: "Google Drive",
    description: "Personal files with permissions and sharing settings preserved.",
  },
  {
    from: "SharePoint",
    to: "Shared Drives",
    description: "Team sites, document libraries, and folder structures.",
  },
  {
    from: "Teams",
    to: "Google Meet & Chat",
    description: "Chat history, channels, and meeting configurations.",
  },
  {
    from: "Azure AD",
    to: "Google Identity & SSO",
    description: "User accounts, groups, security policies, and SSO configuration.",
  },
  {
    from: "DNS & MX",
    to: "Google DNS",
    description: "MX records, SPF, DKIM, DMARC, and custom domain configuration.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description:
      "We audit your current M365 environment: user count, data volumes, third-party integrations, and custom configurations. You get a detailed migration plan with timeline and risk assessment.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We design the target Workspace architecture, map user groups, plan data migration batches, and configure identity federation. Nothing moves until you sign off.",
  },
  {
    step: "03",
    title: "Pilot Migration",
    description:
      "We migrate a small pilot group first to validate the process, identify edge cases, and gather feedback before the full rollout.",
  },
  {
    step: "04",
    title: "Full Migration",
    description:
      "Batch-by-batch migration with minimal disruption. We run parallel systems during the transition so your team never loses access to email or files.",
  },
  {
    step: "05",
    title: "Post-Migration Support",
    description:
      "30 days of dedicated support covering user training, issue resolution, and optimization. We make sure your team is productive from day one.",
  },
];

export default function MigrationPage() {
  return (
    <main>
      <SchemaMarkup
        type="service"
        name="Microsoft 365 to Google Workspace Migration"
        description="Migrate from Microsoft 365 to Google Workspace and save 40% on average on licensing. Every migration includes a custom Gem and NotebookLM setup at no extra cost."
        priceRange="$15 - $50 per seat"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-24 px-6 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Migration Services
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Migrate from Microsoft 365 to Google Workspace
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Save 40% on average on licensing costs and unlock Gemini AI capabilities
            that Microsoft charges extra for. We handle every step of the
            migration.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/tools/cost-calculator" variant="primary" size="lg">
              Calculate Your Savings
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Start Migration Assessment
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            The Cost Difference Is Staggering
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* M365 Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Microsoft 365
              </p>
              <p className="mb-1 text-lg font-medium text-slate-700">
                E3 + Copilot
              </p>
              <p className="mb-4 text-4xl font-extrabold text-slate-900">
                $66<span className="text-lg font-medium text-slate-500">/user/mo</span>
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  M365 E3 license: $36/user/mo
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Copilot add-on: $30/user/mo
                </li>
              </ul>
            </div>

            {/* Workspace Card */}
            <div className="rounded-2xl border-2 border-secondary bg-white p-8 shadow-sm ring-2 ring-secondary/20">
              <div className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                40% Savings
              </div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Google Workspace
              </p>
              <p className="mb-1 text-lg font-medium text-slate-700">
                Business Standard + Gemini
              </p>
              <p className="mb-4 text-4xl font-extrabold text-secondary">
                $14<span className="text-lg font-medium text-slate-500">/user/mo</span>
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Gemini AI included in every plan
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No separate AI add-on required
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            For a 200-person company, that is over $124,000 in annual savings.
          </p>
        </div>
      </section>

      {/* What We Migrate */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Migrate
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A complete, end-to-end migration covering every component of your
              Microsoft environment.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {migrationItems.map((item) => (
              <div
                key={item.from}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2 text-sm">
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
                    {item.from}
                  </span>
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="rounded bg-primary-light px-2 py-0.5 font-medium text-primary">
                    {item.to}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Migration Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A battle-tested five-step process designed for zero data loss and
              minimal disruption.
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-lg font-extrabold text-primary">
                  {step.step}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemini Quick Start */}
      <section className="bg-primary-light py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-10 shadow-md">
            <div className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-bold text-secondary">
              Included at No Extra Cost
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Gemini AI Quick Start
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              Every migration includes a Gemini Quick Start package so your team
              starts getting value from AI on day one, not months later.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900">
                    1 Custom Gem
                  </h3>
                  <p className="text-sm text-slate-600">
                    A custom Gemini Gem built for your highest-impact workflow,
                    fully configured and ready to use.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900">
                    NotebookLM for IT
                  </h3>
                  <p className="text-sm text-slate-600">
                    A NotebookLM instance loaded with your IT documentation so
                    your support team can answer Workspace questions instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Migration Pricing
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Simple per-seat pricing that scales with your organization.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Per Seat
            </p>
            <p className="mb-4 text-4xl font-extrabold text-slate-900">
              $15 &ndash; $50
            </p>
            <p className="mb-8 text-slate-600">
              Price varies based on data volume per user, number of third-party
              integrations, and complexity of your identity and security
              configuration.
            </p>
            <ul className="mx-auto mb-10 max-w-md space-y-3 text-left">
              {[
                "Full email, calendar, and contacts migration",
                "OneDrive and SharePoint data transfer",
                "Identity and SSO configuration",
                "DNS and MX record cutover",
                "1 custom Gem + NotebookLM for IT (included)",
                "30 days of post-migration support",
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
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CTAButton href="/tools/cost-calculator" variant="primary" size="lg">
                Calculate Your Savings
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="md">
                Start Migration Assessment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 px-6 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Cut Costs and Unlock AI?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            Find out exactly how much your organization can save by switching
            from Microsoft 365 to Google Workspace with Gemini AI.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/tools/cost-calculator" variant="outline" size="lg">
              Calculate Your Savings
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Start Migration Assessment
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
