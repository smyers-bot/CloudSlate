const BASE_URL = "https://www.cloudslate.org";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  priceRange?: string;
  areaServed?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CloudSlate",
    url: BASE_URL,
    logo: `${BASE_URL}/images/cloudslate-logo.png`,
    description:
      "CloudSlate helps mid-market companies unlock the full potential of Gemini AI for Google Workspace through Custom Gems, NotebookLM deployment, and Google Workspace migration.",
    sameAs: [
      "https://www.linkedin.com/company/cloudslate",
      "https://twitter.com/cloudslate",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${BASE_URL}/contact`,
    },
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  priceRange?: string,
  options?: {
    areaServed?: string;
    offers?: {
      price?: string;
      priceCurrency?: string;
      description?: string;
    };
  }
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "CloudSlate",
      url: BASE_URL,
    },
    areaServed: options?.areaServed ?? "US",
  };

  if (priceRange) {
    schema.priceRange = priceRange;
  }

  if (options?.offers) {
    schema.offers = {
      "@type": "Offer",
      price: options.offers.price,
      priceCurrency: options.offers.priceCurrency ?? "USD",
      description: options.offers.description,
    };
  }

  return schema;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
