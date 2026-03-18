import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Resources | CloudSlate - Free Gemini AI Tools",
  description:
    "Free tools to assess your AI readiness, estimate savings from switching to Google Workspace, and discover custom Gemini Gems for your team.",
};

const tools = [
  {
    title: "AI Readiness Assessment",
    description:
      "Answer five quick questions about your current workflows and get a personalized AI readiness score with recommended next steps.",
    href: "/tools/ai-readiness-assessment",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Cost Savings Calculator",
    description:
      "Compare Microsoft 365 + Copilot costs against Google Workspace with Gemini included. See your projected savings over 1, 3, and 5 years.",
    href: "/tools/cost-calculator",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    title: "Gem Idea Generator",
    description:
      "Discover the best custom Gemini Gem concepts for your industry and department. Get tailored AI assistant ideas you can deploy today.",
    href: "/tools/gems-idea-generator",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Free AI Tools &amp; Resources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Assess your AI readiness, estimate your savings, and discover the
            right Gemini Gems for your team — all free, no account required.
          </p>
        </div>
      </section>

      {/* ─── TOOLS GRID ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <article
                key={tool.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light">
                  {tool.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {tool.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>
                <div className="mt-6">
                  <CTAButton href={tool.href} variant="outline" size="md">
                    Try It Free
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get the latest guides, tutorials, and Gemini AI insights delivered
              to your inbox.
            </p>
            <form className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:max-w-sm"
              />
              <CTAButton type="submit" variant="primary" size="md">
                Subscribe
              </CTAButton>
            </form>
            <p className="mt-4 text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Want a Personalized Assessment?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our team will audit your current setup, identify the highest-impact
              AI opportunities, and build a custom roadmap for your organization.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact" variant="primary" size="lg">
                Book a Free Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
