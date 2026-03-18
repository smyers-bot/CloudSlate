"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── TYPES ─── */
type GemConcept = {
  name: string;
  description: string;
  estimatedTimeSaved: string;
  complexity: "Low" | "Medium" | "High";
  departments: string[];
  industries: string[];
};

/* ─── CONSTANTS ─── */
const INDUSTRIES = [
  "Professional Services",
  "Technology",
  "Healthcare",
  "Education",
  "Legal",
  "Financial Services",
  "Nonprofits",
  "Real Estate",
  "Marketing / Agency",
  "Other",
];

const DEPARTMENTS = [
  "Sales",
  "Marketing",
  "Customer Support",
  "HR / People Ops",
  "Legal / Compliance",
  "Finance",
  "Operations",
  "IT",
  "Executive",
];

const TEAM_SIZES = ["1-10", "11-25", "26-50", "51-100", "100+"];

const TASK_PLACEHOLDERS = [
  "e.g., Writing proposals",
  "e.g., Reviewing contracts",
  "e.g., Answering customer FAQs",
];

/* ─── GEM CONCEPT MATRIX (30+ concepts) ─── */
const GEM_CONCEPTS: GemConcept[] = [
  // Sales
  {
    name: "Proposal Drafter",
    description:
      "Generates tailored proposals from your pricing templates, case studies, and CRM notes. Adapts tone and scope to each prospect automatically.",
    estimatedTimeSaved: "5-8 hours/week per user",
    complexity: "Medium",
    departments: ["Sales"],
    industries: ["All"],
  },
  {
    name: "Sales Email Composer",
    description:
      "Crafts personalized outreach sequences, follow-ups, and nurture emails based on prospect data and your winning email patterns.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Low",
    departments: ["Sales"],
    industries: ["All"],
  },
  {
    name: "Deal Briefing Assistant",
    description:
      "Summarizes account history, recent communications, and competitor intel into a one-page brief before every sales call.",
    estimatedTimeSaved: "2-4 hours/week per user",
    complexity: "Medium",
    departments: ["Sales", "Executive"],
    industries: ["All"],
  },
  // Marketing
  {
    name: "Content Brief Generator",
    description:
      "Creates detailed content briefs with SEO keywords, audience targeting, and brand voice guidelines from a single topic input.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Low",
    departments: ["Marketing"],
    industries: ["All"],
  },
  {
    name: "Social Media Scheduler",
    description:
      "Drafts platform-specific social posts from blog content, press releases, or campaign themes. Adapts copy length and hashtags per channel.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Low",
    departments: ["Marketing"],
    industries: ["All"],
  },
  {
    name: "Campaign Analytics Narrator",
    description:
      "Pulls campaign data from Sheets and generates narrative performance reports with insights and recommended next steps.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Marketing", "Executive"],
    industries: ["All"],
  },
  // Customer Support
  {
    name: "Ticket Response Drafter",
    description:
      "Analyzes incoming tickets, searches your knowledge base, and drafts accurate replies using your brand voice and resolution history.",
    estimatedTimeSaved: "6-10 hours/week per user",
    complexity: "Medium",
    departments: ["Customer Support"],
    industries: ["All"],
  },
  {
    name: "Knowledge Base Builder",
    description:
      "Converts resolved tickets and internal docs into structured FAQ articles and troubleshooting guides for self-service portals.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Customer Support", "IT"],
    industries: ["All"],
  },
  {
    name: "Escalation Summarizer",
    description:
      "Compiles ticket history, customer context, and attempted resolutions into concise escalation briefs for tier-2 support or managers.",
    estimatedTimeSaved: "2-3 hours/week per user",
    complexity: "Low",
    departments: ["Customer Support"],
    industries: ["All"],
  },
  // HR / People Ops
  {
    name: "Onboarding Concierge",
    description:
      "Guides new hires through day-by-day onboarding checklists, answers policy questions, and routes forms to the right approvers.",
    estimatedTimeSaved: "5-8 hours/week per user",
    complexity: "Medium",
    departments: ["HR / People Ops"],
    industries: ["All"],
  },
  {
    name: "Policy Q&A Assistant",
    description:
      "Answers employee questions about PTO, benefits, expense policies, and compliance guidelines using your actual handbook as source.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Low",
    departments: ["HR / People Ops"],
    industries: ["All"],
  },
  {
    name: "Job Description Writer",
    description:
      "Generates role-specific job descriptions from a brief intake form, incorporating your company culture, requirements, and DEI language.",
    estimatedTimeSaved: "2-4 hours/week per user",
    complexity: "Low",
    departments: ["HR / People Ops"],
    industries: ["All"],
  },
  // Legal / Compliance
  {
    name: "Contract Review Assistant",
    description:
      "Scans contracts against your compliance checklists and flags missing clauses, non-standard terms, and risk areas for attorney review.",
    estimatedTimeSaved: "6-10 hours/week per user",
    complexity: "High",
    departments: ["Legal / Compliance"],
    industries: ["All"],
  },
  {
    name: "Regulatory Update Tracker",
    description:
      "Monitors regulatory changes relevant to your industry and generates impact summaries with recommended action items for compliance teams.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Medium",
    departments: ["Legal / Compliance"],
    industries: ["Healthcare", "Financial Services", "Legal"],
  },
  {
    name: "NDA & Agreement Drafter",
    description:
      "Produces first drafts of NDAs, service agreements, and standard contracts from your approved templates and clause library.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Legal / Compliance"],
    industries: ["All"],
  },
  // Finance
  {
    name: "Expense Report Processor",
    description:
      "Extracts data from receipt images and emails, categorizes expenses, and populates report templates in Sheets with policy compliance flags.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Finance"],
    industries: ["All"],
  },
  {
    name: "Financial Report Narrator",
    description:
      "Transforms raw spreadsheet data into executive-ready narratives with trend analysis, variance explanations, and forward-looking commentary.",
    estimatedTimeSaved: "5-8 hours/week per user",
    complexity: "Medium",
    departments: ["Finance", "Executive"],
    industries: ["All"],
  },
  {
    name: "Invoice Data Extractor",
    description:
      "Reads incoming invoices from email attachments, extracts line items, amounts, and vendor details, and populates your tracking sheets.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Low",
    departments: ["Finance", "Operations"],
    industries: ["All"],
  },
  // Operations
  {
    name: "SOP Documentation Builder",
    description:
      "Converts meeting notes, Slack threads, and ad-hoc process descriptions into structured Standard Operating Procedures with clear steps.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Low",
    departments: ["Operations"],
    industries: ["All"],
  },
  {
    name: "Vendor Comparison Analyzer",
    description:
      "Ingests vendor proposals and generates side-by-side comparison matrices with scoring based on your evaluation criteria.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Medium",
    departments: ["Operations", "IT"],
    industries: ["All"],
  },
  {
    name: "Meeting Action Tracker",
    description:
      "Extracts action items from Meet transcripts, assigns owners, and creates follow-up task documents with due dates and status tracking.",
    estimatedTimeSaved: "2-4 hours/week per user",
    complexity: "Low",
    departments: ["Operations", "Executive"],
    industries: ["All"],
  },
  // IT
  {
    name: "IT Troubleshooting Guide",
    description:
      "Walks users through diagnostic steps for common IT issues using your runbooks and resolution database. Reduces tier-1 ticket volume.",
    estimatedTimeSaved: "5-8 hours/week per user",
    complexity: "Medium",
    departments: ["IT"],
    industries: ["All"],
  },
  {
    name: "Security Incident Reporter",
    description:
      "Generates structured incident reports from raw event data, maps findings to your security framework, and drafts stakeholder notifications.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "High",
    departments: ["IT"],
    industries: ["Technology", "Financial Services", "Healthcare"],
  },
  // Executive
  {
    name: "Board Deck Builder",
    description:
      "Aggregates department KPIs, financial summaries, and strategic updates into a polished board presentation outline in Slides.",
    estimatedTimeSaved: "6-10 hours/week per user",
    complexity: "High",
    departments: ["Executive"],
    industries: ["All"],
  },
  {
    name: "Competitive Intel Briefer",
    description:
      "Compiles competitive intelligence from shared Drive folders and generates weekly briefing docs with strategic implications.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Medium",
    departments: ["Executive", "Sales", "Marketing"],
    industries: ["All"],
  },
  // Industry-specific
  {
    name: "Patient Intake Processor",
    description:
      "Extracts and validates patient information from intake forms, flags missing data, and populates structured records for clinical review.",
    estimatedTimeSaved: "5-8 hours/week per user",
    complexity: "High",
    departments: ["Operations", "Customer Support"],
    industries: ["Healthcare"],
  },
  {
    name: "Curriculum Planner",
    description:
      "Generates lesson plans, learning objectives, and assessment rubrics from course outlines aligned to educational standards.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Operations"],
    industries: ["Education"],
  },
  {
    name: "Grant Proposal Writer",
    description:
      "Drafts grant proposals from your program data, impact metrics, and funder guidelines. Adapts narratives for different grant requirements.",
    estimatedTimeSaved: "6-10 hours/week per user",
    complexity: "High",
    departments: ["Executive", "Operations"],
    industries: ["Nonprofits", "Education"],
  },
  {
    name: "Listing Description Generator",
    description:
      "Creates compelling property listings from MLS data, photos, and neighborhood information with SEO-optimized descriptions.",
    estimatedTimeSaved: "3-5 hours/week per user",
    complexity: "Low",
    departments: ["Sales", "Marketing"],
    industries: ["Real Estate"],
  },
  {
    name: "Client Brief Assembler",
    description:
      "Compiles client briefs for agency projects by pulling brand guidelines, past campaign data, and project scope into a single document.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Operations", "Marketing"],
    industries: ["Marketing / Agency", "Professional Services"],
  },
  {
    name: "Audit Checklist Generator",
    description:
      "Produces audit checklists and documentation templates from regulatory requirements tailored to your firm and client type.",
    estimatedTimeSaved: "4-6 hours/week per user",
    complexity: "Medium",
    departments: ["Legal / Compliance", "Finance"],
    industries: ["Financial Services", "Professional Services"],
  },
];

/* ─── SCORING ─── */
function scoreAndRank(
  concepts: GemConcept[],
  industry: string,
  department: string,
  tasks: string[]
): (GemConcept & { matchScore: number })[] {
  const taskKeywords = tasks
    .join(" ")
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2);

  return concepts
    .map((gem) => {
      let score = 0;

      // Department match
      if (gem.departments.includes(department)) score += 10;

      // Industry match
      if (
        gem.industries.includes("All") ||
        gem.industries.includes(industry)
      )
        score += 5;

      // Keyword match from task descriptions
      const gemText = `${gem.name} ${gem.description}`.toLowerCase();
      for (const keyword of taskKeywords) {
        if (gemText.includes(keyword)) score += 3;
      }

      return { ...gem, matchScore: score };
    })
    .filter((g) => g.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
}

/* ─── COMPLEXITY BADGE ─── */
function ComplexityBadge({ level }: { level: "Low" | "Medium" | "High" }) {
  const styles = {
    Low: "bg-secondary/10 text-secondary",
    Medium: "bg-accent/20 text-accent-dark",
    High: "bg-danger/10 text-danger",
  };
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[level]}`}
    >
      {level}
    </span>
  );
}

/* ─── MAIN PAGE ─── */
export default function GemsIdeaGeneratorPage() {
  const [industry, setIndustry] = useState("");
  const [department, setDepartment] = useState("");
  const [tasks, setTasks] = useState(["", "", ""]);
  const [teamSize, setTeamSize] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const updateTask = (index: number, value: string) =>
    setTasks((prev) => prev.map((t, i) => (i === index ? value : t)));

  const canGenerate =
    industry && department && tasks.some((t) => t.trim().length > 0);

  const results = useMemo(
    () =>
      showResults
        ? scoreAndRank(GEM_CONCEPTS, industry, department, tasks)
        : [],
    [showResults, industry, department, tasks]
  );

  const inputBase =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const selectBase = `${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%2394a3b8%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Free Tool
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Custom Gems Idea Generator
          </h1>
          <p className="text-lg text-slate-300">
            Discover which custom Gemini Gems could transform your team&apos;s
            workflows. Get personalized AI assistant recommendations in seconds.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          {/* ─── INPUT FORM ─── */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">
              Tell Us About Your Team
            </h2>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Industry
                  </label>
                  <select
                    className={selectBase}
                    value={industry}
                    onChange={(e) => {
                      setIndustry(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Department
                  </label>
                  <select
                    className={selectBase}
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select department</option>
                    {DEPARTMENTS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Top 3 Repetitive Tasks
                </label>
                <div className="space-y-3">
                  {tasks.map((task, i) => (
                    <input
                      key={i}
                      type="text"
                      className={inputBase}
                      placeholder={TASK_PLACEHOLDERS[i]}
                      value={task}
                      onChange={(e) => {
                        updateTask(i, e.target.value);
                        setShowResults(false);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Team Size
                </label>
                <select
                  className={selectBase}
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                >
                  <option value="">Select size</option>
                  {TEAM_SIZES.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                disabled={!canGenerate}
                onClick={() => setShowResults(true)}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                Generate Gem Ideas
              </button>
            </div>
          </div>

          {/* ─── RESULTS ─── */}
          {showResults && results.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Recommended Gems for Your Team
              </h2>

              <div className="space-y-4">
                {results.map((gem) => (
                  <div
                    key={gem.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                          <svg
                            className="h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {gem.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {gem.estimatedTimeSaved}
                        </span>
                        <ComplexityBadge level={gem.complexity} />
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {gem.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Want CloudSlate to build this Gem?
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Email Gate */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                {!emailSubmitted ? (
                  <>
                    <h3 className="mb-2 text-sm font-semibold text-slate-700">
                      Save Your Results
                    </h3>
                    <p className="mb-4 text-sm text-slate-500">
                      Enter your email to save these Gem recommendations and
                      receive a detailed implementation guide.
                    </p>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        className={`${inputBase} flex-1`}
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="button"
                        disabled={!email}
                        onClick={() => setEmailSubmitted(true)}
                        className="shrink-0 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Save Results
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-700">
                      Your results and implementation guide will be sent to{" "}
                      <strong>{email}</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Free Gems Consultation
              </Link>
            </div>
          )}

          {showResults && results.length === 0 && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-slate-600">
                No exact matches found for your combination. Try adjusting your
                department or adding more detail to your task descriptions.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Talk to us about a custom solution
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
