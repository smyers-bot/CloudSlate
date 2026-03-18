import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMigrationSizeBySlug, getAllMigrationSizeSlugs } from "@/content/data/migration-sizes";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import CTAButton from "@/components/ui/CTAButton";

type Props = { params: Promise<{ size: string }> };

export async function generateStaticParams() {
  return getAllMigrationSizeSlugs().map((slug) => ({ size: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { size } = await params;
  const migration = getMigrationSizeBySlug(size);
  if (!migration) return {};
  return { title: `${migration.title} | CloudSlate`, description: migration.metaDescription };
}

export default async function MigrationSizePage({ params }: Props) {
  const { size } = await params;
  const migration = getMigrationSizeBySlug(size);
  if (!migration) notFound();

  return (
    <>
      <SchemaMarkup
        type="service"
        name={migration.title}
        description={migration.metaDescription}
        priceRange={migration.priceRange}
      />
      <SchemaMarkup type="faq" faqs={migration.faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
            {migration.userRange}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {migration.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {migration.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Timeline: {migration.timeline}
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              {migration.priceRange} per seat
            </div>
          </div>
          <div className="mt-8">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get a Migration Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What to Expect for {migration.userRange}
            </h2>
            <ul className="mt-8 space-y-4">
              {migration.considerations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Migration Phases */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Migration Process
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A proven, phased approach for a seamless transition.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-8">
            {migration.phases.map((phase, idx) => (
              <div key={phase.name} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  {idx < migration.phases.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-slate-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-slate-900">{phase.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{phase.description}</p>
                </div>
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
            {migration.faqs.map((faq) => (
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
            Ready to Make the Switch?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a free migration assessment and see exactly how much you&rsquo;ll save.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get a Free Assessment
            </CTAButton>
            <CTAButton href="/tools/cost-calculator" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Calculate Your Savings
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
