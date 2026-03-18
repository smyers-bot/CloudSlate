import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gems Idea Generator | CloudSlate",
  description:
    "Discover which custom Gemini Gems could transform your team's workflows. Get personalized AI assistant recommendations based on your industry and department.",
  openGraph: {
    title: "Custom Gems Idea Generator | CloudSlate",
    description:
      "Get personalized Gemini Gem recommendations for your team's workflows.",
    url: "https://cloudslate.org/tools/gems-idea-generator",
  },
};

export default function GemsIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
