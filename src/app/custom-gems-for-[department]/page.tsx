import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { departments, getDepartmentBySlug, getAllDepartmentSlugs } from "@/content/data/departments";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import CTAButton from "@/components/ui/CTAButton";

type Props = { params: Promise<{ department: string }> };

export async function generateStaticParams() {
  return getAllDepartmentSlugs().map((slug) => ({ department: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { department } = await params;
  const dept = getDepartmentBySlug(department);
  if (!dept) return {};
  return { title: `${dept.title} | CloudSlate`, description: dept.metaDescription };
}

export default async function DepartmentGemsPage({ params }: Props) {
  const { department } = await params;
  const dept = getDepartmentBySlug(department);
  if (!dept) notFound();

  return (
    <>
      <SchemaMarkup
        type="service"
        name={dept.title}
        description={dept.metaDescription}
        priceRange="$3,000 - $12,000+"
      />
      <SchemaMarkup type="faq" faqs={dept.faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
            {dept.name}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {dept.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {dept.description}
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get a Custom Gem for {dept.name}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common {dept.name} Challenges
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Does your {dept.name.toLowerCase()} team face any of these?
            </p>
            <ul className="mt-8 space-y-4">
              {dept.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gem Examples */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Custom Gems We Build for {dept.name}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every Gem is tailored to your specific processes and workflows.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {dept.gemExamples.map((gem) => (
              <div key={gem.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{gem.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{gem.description}</p>
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
            {dept.faqs.map((faq) => (
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
            Ready to Transform Your {dept.name} Team?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free consultation and we&rsquo;ll show you exactly how custom Gems can accelerate your {dept.name.toLowerCase()} workflows.
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
