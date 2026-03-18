import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | CloudSlate",
  description:
    "Take our free 5-minute assessment to discover your organization's AI readiness score and get personalized Gemini Gem recommendations for Google Workspace.",
  openGraph: {
    title: "AI Readiness Assessment | CloudSlate",
    description:
      "Discover your organization's AI readiness score and get personalized Gemini Gem recommendations.",
    url: "https://cloudslate.org/tools/ai-readiness-assessment",
  },
};

export default function AIReadinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
