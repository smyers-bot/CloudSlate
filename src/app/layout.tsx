import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a73e8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cloudslate.org"),
  title: "CloudSlate | Gemini AI Enablement Partner",
  description:
    "Unlock the full potential of Gemini AI for Google Workspace. CloudSlate helps mid-market companies build Custom Gems, deploy NotebookLM, and migrate to Google Workspace with expert guidance.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CloudSlate | Gemini AI Enablement Partner",
    description:
      "Unlock the full potential of Gemini AI for Google Workspace. CloudSlate helps mid-market companies build Custom Gems, deploy NotebookLM, and migrate to Google Workspace.",
    url: "https://www.cloudslate.org",
    siteName: "CloudSlate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudSlate | Gemini AI Enablement Partner",
    description:
      "Unlock the full potential of Gemini AI for Google Workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SchemaMarkup type="organization" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
