import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Custom Gems", href: "/custom-gems" },
      { label: "NotebookLM", href: "/notebooklm" },
      { label: "Migration", href: "/migration" },
      { label: "Managed Support", href: "/pricing" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "AI Readiness Assessment", href: "/tools/ai-readiness-assessment" },
      { label: "Cost Calculator", href: "/tools/cost-calculator" },
      { label: "Gems Idea Generator", href: "/tools/gems-idea-generator" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Guides", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Partner Badge", href: "/about" },
    ],
  },
];

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.6 10.4C25.2 5.8 21.4 2 16.8 2c-3.6 0-6.8 2.2-8 5.4C4.4 8 1.2 11.6 1.2 16c0 4.8 3.8 8.4 8.4 8.4h15.2c3.6 0 6.4-2.8 6.4-6.4 0-3.4-2.6-6.2-5.6-6.4V10.4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <CloudIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">
                Cloud<span className="text-primary">Slate</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Your Gemini AI Enablement Partner
            </p>
            <div className="mt-6">
              <Image
                src="/images/gws-partner-badge.png"
                alt="Google Workspace SELECT Partner"
                width={180}
                height={60}
                className="opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            &copy; 2026 CloudSlate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
