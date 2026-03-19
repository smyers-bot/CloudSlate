import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import ServiceCard from "@/components/ui/ServiceCard";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup
        type="howto"
        name="How CloudSlate Enables Gemini AI for Your Business"
        description="From assessment to optimization in four focused phases."
        steps={[
          { name: "Assess", text: "We audit your current Workspace setup, identify AI opportunities, and map them to business outcomes." },
          { name: "Build", text: "Our team creates custom Gems, configures NotebookLM sources, and designs Workspace Flows for your use cases." },
          { name: "Deploy", text: "We roll out AI tools team by team with hands-on training, documentation, and change management support." },
          { name: "Optimize", text: "We monitor adoption, refine prompts and configurations, and expand to new departments and workflows." },
        ]}
      />
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-24 sm:py-32 lg:py-40">
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glowing orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Get More From{" "}
            <span className="bg-gradient-to-r from-[#4285f4] via-[#34a853] to-[#fbbc04] bg-clip-text text-transparent">
              Google Workspace
            </span>
            {" "}&mdash; or Make the Switch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Already on Workspace? We&rsquo;ll unlock Gemini AI, custom Gems, and
            NotebookLM to transform your workflows. Still on Microsoft 365?
            We&rsquo;ll migrate you seamlessly&nbsp;&mdash; and save you 40% on average on licensing.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/tools/ai-readiness-assessment" size="lg">
              Take the Free AI Readiness Assessment
            </CTAButton>
            <CTAButton
              href="/tools/cost-calculator"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Calculate Your M365 Savings
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/gws-partner-badge.png"
              alt="Google Workspace SELECT Partner badge"
              width={120}
              height={60}
              className="object-contain"
            />
            <span className="text-sm font-semibold text-slate-700">
              Trusted Google Workspace SELECT Partner
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[
              { value: "20+", label: "Years Combined Expertise" },
              { value: "Custom", label: "Gems Built for Your Workflows" },
              { value: "Dedicated", label: "Account Teams" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              You&rsquo;re Already Paying for AI.{" "}
              <span className="text-primary">Are You Using It?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Gemini, custom Gems, NotebookLM, and Workspace Flows are bundled
              into every Google Workspace Business and Enterprise license. Yet
              most mid-market companies get zero value from these built-in AI
              capabilities.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                stat: "78%",
                detail:
                  "of Workspace licenses include Gemini AI features that go completely unused",
              },
              {
                stat: "$0",
                detail:
                  "additional cost for Gemini, Gems, NotebookLM, and Flows on supported plans",
              },
              {
                stat: "3x",
                detail:
                  "productivity gain reported by teams using custom Gems for daily workflows",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <p className="text-4xl font-extrabold text-primary">
                  {item.stat}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              AI Enablement, Built for Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From custom AI assistants to full platform migrations, we turn your
              Workspace investment into measurable productivity gains.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Custom Gems Development"
              description="We build company-specific Gemini Gems that understand your data, follow your processes, and accelerate the work your teams do every day."
              href="/custom-gems"
              features={[
                "Tailored to your workflows",
                "2-4 week delivery",
                "Training included",
                "30-day optimization",
              ]}
              icon={
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                  />
                </svg>
              }
            />

            <ServiceCard
              title="NotebookLM Deployment"
              description="Transform your company knowledge into an AI-powered research engine that any team member can query instantly and securely."
              href="/notebooklm"
              features={[
                "Department-level deployment",
                "Enterprise compliance",
                "Deep Research capability",
                "Team sharing with IAM",
              ]}
              icon={
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              }
            />

            <ServiceCard
              title="Migration Services"
              description="Move from Microsoft 365 to Google Workspace with zero disruption and a Gemini Quick Start that puts AI to work from day one."
              href="/migration"
              features={[
                "Full data migration",
                "Identity & SSO setup",
                "Gemini Quick Start included",
                "Dedicated support team",
              ]}
              icon={
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ─── COST-NEUTRAL PITCH ─── */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Same Cost.{" "}
              <span className="text-accent">10x More Productive.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              See how Google Workspace with built-in Gemini compares to
              Microsoft&rsquo;s add-on approach.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* M365 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Microsoft 365
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">M365 E3</span>
                  <span className="font-semibold text-white">$36/user/mo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">+ Copilot</span>
                  <span className="font-semibold text-white">$30/user/mo</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total</span>
                    <span className="text-2xl font-extrabold text-danger">
                      $66
                      <span className="text-base font-normal text-slate-400">
                        /user/mo
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google */}
            <div className="rounded-2xl border-2 border-secondary bg-slate-800 p-8 relative">
              <span className="absolute -top-3 right-6 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white">
                RECOMMENDED
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Google Workspace
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Workspace Standard</span>
                  <span className="font-semibold text-white">$14/user/mo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Gemini AI</span>
                  <span className="font-semibold text-secondary">Included</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total</span>
                    <span className="text-2xl font-extrabold text-secondary">
                      $14
                      <span className="text-base font-normal text-slate-400">
                        /user/mo
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton
              href="/tools/cost-calculator"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              See Your Exact Savings
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From assessment to optimization in four focused phases.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connector line (desktop) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-12 left-[12.5%] hidden h-0.5 w-[75%] bg-gradient-to-r from-primary via-primary to-primary/30 lg:block"
            />

            {[
              {
                step: "01",
                title: "Assess",
                description:
                  "We audit your current Workspace setup, identify AI opportunities, and map them to business outcomes.",
              },
              {
                step: "02",
                title: "Build",
                description:
                  "Our team creates custom Gems, configures NotebookLM sources, and designs Workspace Flows for your use cases.",
              },
              {
                step: "03",
                title: "Deploy",
                description:
                  "We roll out AI tools team by team with hands-on training, documentation, and change management support.",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "We monitor adoption, refine prompts and configurations, and expand to new departments and workflows.",
              },
            ].map((phase) => (
              <div key={phase.step} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-white">
                  <span className="text-2xl font-extrabold text-primary">
                    {phase.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Unlock Your Workspace AI?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Find out exactly which Gemini capabilities your team can leverage
            today&nbsp;&mdash; in less than five minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/tools/ai-readiness-assessment" variant="secondary" size="lg">
              Take the Free AI Readiness Assessment
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Or{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              book a free consultation
            </a>{" "}
            with our team.
          </p>
        </div>
      </section>
    </>
  );
}
