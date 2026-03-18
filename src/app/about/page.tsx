import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About | CloudSlate - Your Dedicated Gemini AI Enablement Partner",
  description:
    "CloudSlate is a Google Workspace SELECT Partner helping mid-market companies unlock the full potential of Gemini AI with custom Gems, NotebookLM deployment, and dedicated account teams.",
};

const differentiators = [
  {
    title: "Gemini Specialists",
    description:
      "We don't dabble in every AI platform. We go deep on Google's Gemini ecosystem so your team gets true expertise, not generic advice.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Teams",
    description:
      "You get a named person, not a ticket queue. Your dedicated account team knows your business, your workflows, and your goals.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Google Workspace SELECT Partner",
    description:
      "We hold Google's highest partnership tier for Workspace, giving you direct access to Google engineering support and early feature previews.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Custom-Built AI",
    description:
      "No off-the-shelf solutions. Every Gem, every NotebookLM deployment, every Workspace Flow is tailored to your specific business processes.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 01-.556-2.048l2.25-3.9a1.5 1.5 0 012.048-.556l5.1 3.06m-3.742 6.504l5.1 3.06a1.5 1.5 0 002.048-.556l2.25-3.9a1.5 1.5 0 00-.556-2.048l-5.1-3.06m-3.742 6.504L8.667 9.938m3.742 6.504l3.764-6.532M7.5 21h9"
        />
      </svg>
    ),
  },
];


export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Your Dedicated Gemini AI Enablement Partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We help mid-market companies unlock the AI capabilities already built
            into their Google Workspace. No add-ons. No upsells. Just real
            productivity gains from the tools you&rsquo;re already paying for.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most mid-market companies are sitting on powerful AI tools they
              never knew they had. Gemini, custom Gems, NotebookLM, and Workspace
              Flows are all included in Google Workspace&nbsp;&mdash; but without
              the right partner, they go unused.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              CloudSlate exists to change that. We combine deep Gemini expertise
              with dedicated account management to help every team in your
              organization work faster, smarter, and with less friction.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY CLOUDSLATE ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Why CloudSlate
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Four things that set us apart from every other consulting firm.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partner badge */}
          <div className="mt-16 flex justify-center">
            <Image
              src="/images/gws-partner-badge.png"
              alt="Google Workspace SELECT Partner badge"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Certifications &amp; Partnerships
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our team holds Google Cloud certifications across Workspace
              Administration, Cloud Digital Leader, and Gemini AI, ensuring every
              recommendation is backed by verified expertise and current best
              practices.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                "Google Workspace Administrator",
                "Google Cloud Digital Leader",
                "Gemini for Google Workspace",
              ].map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s Talk About Your AI Goals
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you&rsquo;re exploring Gemini for the first time or ready to
            scale AI across your organization, we&rsquo;re here to help.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Let&rsquo;s Talk About Your AI Goals
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
