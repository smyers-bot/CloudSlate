import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/content/data/industries";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import CTAButton from "@/components/ui/CTAButton";

type Props = { params: Promise<{ industry: string }> };

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ industry: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) return {};
  return { title: `${ind.title} | CloudSlate`, description: ind.metaDescription };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) notFound();

  return (
    <>
      <SchemaMarkup
        type="service"
        name={ind.title}
        description={ind.metaDescription}
      />
      <SchemaMarkup type="faq" faqs={ind.faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
            {ind.name}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {ind.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {ind.description}
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get Started for {ind.name}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {ind.name} Challenges We Solve
            </h2>
            <ul className="mt-8 space-y-4">
              {ind.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span className="text-slate-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              AI Solutions for {ind.name}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Custom-built AI tools designed for {ind.name.toLowerCase()} workflows.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {ind.solutions.map((solution) => (
              <div key={solution.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{solution.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {ind.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Bring AI to Your {ind.name} Organization?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free consultation and see how Gemini AI can transform {ind.name.toLowerCase()} workflows.
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
