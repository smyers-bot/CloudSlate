import {
  generateOrganizationSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  type FAQItem,
  type BreadcrumbItem,
} from "@/lib/schema";

type OrganizationProps = {
  type: "organization";
};

type ServiceProps = {
  type: "service";
  name: string;
  description: string;
  priceRange?: string;
  areaServed?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  };
};

type FAQProps = {
  type: "faq";
  faqs: FAQItem[];
};

type BreadcrumbProps = {
  type: "breadcrumb";
  items: BreadcrumbItem[];
};

type HowToProps = {
  type: "howto";
  name: string;
  description: string;
  steps: { name: string; text: string }[];
};

type SchemaMarkupProps =
  | OrganizationProps
  | ServiceProps
  | FAQProps
  | BreadcrumbProps
  | HowToProps;

export default function SchemaMarkup(props: SchemaMarkupProps) {
  let schema: Record<string, unknown>;

  switch (props.type) {
    case "organization":
      schema = generateOrganizationSchema();
      break;
    case "service":
      schema = generateServiceSchema(props.name, props.description, props.priceRange, {
        areaServed: props.areaServed,
        offers: props.offers,
      });
      break;
    case "faq":
      schema = generateFAQSchema(props.faqs);
      break;
    case "breadcrumb":
      schema = generateBreadcrumbSchema(props.items);
      break;
    case "howto":
      schema = generateHowToSchema(props.name, props.description, props.steps);
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
