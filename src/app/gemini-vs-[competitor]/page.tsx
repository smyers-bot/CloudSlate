import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompetitorBySlug, getAllCompetitorSlugs } from "@/content/data/competitors";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import CTAButton from "@/components/ui/CTAButton";

type Props = { params: Promise<{ competitor: string }> };

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor } = await params;
  const comp = getCompetitorBySlug(competitor);
  if (!comp) return {};
  return { title: `${comp.title} | CloudSlate`, description: comp.metaDescription };
}

export default async function CompetitorPage({ params }: Props) {
  const { competitor } = await params;
  const comp = getCompetitorBySlug(competitor);
  if (!comp) notFound();

  return (
    <>
      <SchemaMarkup type="faq" faqs={comp.faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
            Comparison
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {comp.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {comp.description}
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Feature Comparison
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <div>Category</div>
              <div className="text-primary">Gemini + Workspace</div>
              <div>{comp.name}</div>
            </div>
            {comp.geminiAdvantages.map((row, idx) => (
              <div
                key={row.category}
                className={`grid grid-cols-3 gap-0 p-4 text-sm ${
                  idx !== comp.geminiAdvantages.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="font-medium text-slate-900">{row.category}</div>
                <div className="text-slate-600">{row.gemini}</div>
                <div className="text-slate-600">{row.competitor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cost Comparison
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See the real total cost of ownership.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <div>Item</div>
              <div className="text-secondary">Gemini + Workspace</div>
              <div>{comp.name}</div>
            </div>
            {comp.costComparison.map((row, idx) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 gap-0 p-4 text-sm ${
                  idx === comp.costComparison.length - 1
                    ? "bg-secondary/5 font-bold"
                    : "border-b border-slate-100"
                }`}
              >
                <div className="font-medium text-slate-900">{row.item}</div>
                <div className={idx === comp.costComparison.length - 1 ? "text-secondary" : "text-slate-600"}>
                  {row.gemini}
                </div>
                <div className="text-slate-600">{row.competitor}</div>
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
            {comp.faqs.map((faq) => (
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
            See the Difference for Yourself
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free consultation and we&rsquo;ll show you exactly how much you can save with Google Workspace and Gemini AI.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book a Free Consultation
            </CTAButton>
            <CTAButton href="/tools/cost-calculator" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Try the Cost Calculator
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
