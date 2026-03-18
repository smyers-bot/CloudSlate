import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M365 to Google Workspace Cost Calculator | CloudSlate",
  description:
    "Calculate your exact savings when migrating from Microsoft 365 to Google Workspace with Gemini AI included. See monthly, annual, and multi-year projections.",
  openGraph: {
    title: "M365 to Google Workspace Cost Calculator | CloudSlate",
    description:
      "Calculate your exact savings when migrating from Microsoft 365 to Google Workspace.",
    url: "https://cloudslate.org/tools/cost-calculator",
  },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
