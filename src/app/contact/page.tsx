import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | CloudSlate - Get Started with Gemini AI",
  description:
    "Book a free AI consultation, request a custom Gems demo, or start a migration assessment. Contact CloudSlate to unlock your Google Workspace AI potential.",
};

const contactPaths = [
  {
    title: "Book an AI Consultation",
    description:
      "Free 30-minute call to discuss your Gemini goals, assess your current Workspace setup, and identify quick wins.",
    cta: "Book a Consultation",
    href: "/contact#form",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "Request a Gems Demo",
    description:
      "See custom Gemini Gems in action for your industry. We'll walk through real examples tailored to your workflows.",
    cta: "Request a Demo",
    href: "/contact#form",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Start a Migration Assessment",
    description:
      "Get a detailed migration plan from Microsoft 365 to Google Workspace, including a full savings analysis.",
    cta: "Start Assessment",
    href: "/contact#form",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&rsquo;s Unlock Your Workspace AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Choose how you&rsquo;d like to get started, or send us a message
            below.
          </p>
        </div>
      </section>

      {/* ─── CONTACT PATHS ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {contactPaths.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                  {path.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {path.description}
                </p>
                <div className="mt-6">
                  <CTAButton href={path.href} variant="primary" size="sm">
                    {path.cta}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="form" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tell us about your goals and we&rsquo;ll be in touch within one
                business day.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── SELF-SERVICE ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Prefer Self-Service?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Try our free tools to assess your AI readiness, estimate savings,
              and discover the right Gems for your team.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "AI Readiness Assessment",
                  href: "/tools/ai-readiness-assessment",
                },
                {
                  label: "Cost Savings Calculator",
                  href: "/tools/cost-calculator",
                },
                {
                  label: "Gem Discovery Tool",
                  href: "/tools/gem-discovery",
                },
              ].map((tool) => (
                <CTAButton
                  key={tool.label}
                  href={tool.href}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  {tool.label}
                </CTAButton>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
