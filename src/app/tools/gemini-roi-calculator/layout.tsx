import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini ROI Calculator | CloudSlate",
  description:
    "Calculate how many hours your team can save with Gemini AI in Google Workspace. Estimate productivity gains, cost savings, and ROI by department.",
  openGraph: {
    title: "Gemini ROI Calculator | CloudSlate",
    description:
      "Estimate hours saved and ROI from deploying Gemini AI across your Google Workspace teams.",
    url: "https://cloudslate.org/tools/gemini-roi-calculator",
  },
};

export default function GeminiROILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
