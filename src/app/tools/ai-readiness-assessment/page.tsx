"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── TYPES ─── */
type FormData = {
  companyName: string;
  userCount: string;
  industry: string;
  currentPlatform: string;
  workspacePlan: string;
  geminiUsage: string;
  customGems: string;
  notebookLMUsage: string;
  workflowChallenges: string[];
  email: string;
};

/* ─── CONSTANTS ─── */
const USER_COUNT_OPTIONS = [
  "1-49",
  "50-99",
  "100-249",
  "250-499",
  "500-999",
  "1000+",
];

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
  "Manufacturing",
  "Retail / E-commerce",
  "Other",
];

const WORKSPACE_PLANS = [
  "Business Starter",
  "Business Standard",
  "Business Plus",
  "Enterprise",
];

const GEMINI_USAGE_OPTIONS = [
  "Never heard of it",
  "Aware but not using",
  "Basic usage",
  "Advanced usage",
];

const CUSTOM_GEMS_OPTIONS = ["None", "1-2", "3-5", "6+"];

const NOTEBOOKLM_OPTIONS = ["Not using", "Exploring", "Active use"];

const WORKFLOW_CHALLENGES = [
  "Repetitive document creation",
  "Manual data entry",
  "Slow customer response times",
  "Knowledge scattered across tools",
  "Inefficient onboarding",
  "Manual reporting",
  "Email overload",
  "Meeting follow-up delays",
];

const CHALLENGE_TO_GEM: Record<string, { name: string; description: string }> =
  {
    "Repetitive document creation": {
      name: "Doc Drafter Gem",
      description:
        "Auto-generates proposals, reports, and briefs from templates and structured data in your Drive.",
    },
    "Manual data entry": {
      name: "Data Entry Automator Gem",
      description:
        "Extracts structured data from emails, PDFs, and forms and populates your Sheets automatically.",
    },
    "Slow customer response times": {
      name: "Support Response Gem",
      description:
        "Drafts customer replies using your knowledge base and past ticket resolutions in Gmail.",
    },
    "Knowledge scattered across tools": {
      name: "Knowledge Finder Gem",
      description:
        "Searches across Drive, Docs, and Sheets to surface answers from your company's institutional knowledge.",
    },
    "Inefficient onboarding": {
      name: "Onboarding Guide Gem",
      description:
        "Walks new hires through checklists, answers policy questions, and routes paperwork automatically.",
    },
    "Manual reporting": {
      name: "Report Builder Gem",
      description:
        "Pulls data from Sheets and generates executive-ready reports with trends and insights in Docs.",
    },
    "Email overload": {
      name: "Inbox Triage Gem",
      description:
        "Categorizes, summarizes, and drafts replies for high-volume inboxes so your team focuses on what matters.",
    },
    "Meeting follow-up delays": {
      name: "Meeting Action Gem",
      description:
        "Extracts action items from Meet transcripts and creates follow-up tasks and summary docs automatically.",
    },
  };

/* ─── SCORING ─── */
function calculateScore(data: FormData): number {
  let score = 0;

  // Company size (larger = more potential)
  const sizeMap: Record<string, number> = {
    "1-49": 5,
    "50-99": 8,
    "100-249": 12,
    "250-499": 15,
    "500-999": 18,
    "1000+": 20,
  };
  score += sizeMap[data.userCount] ?? 0;

  // Platform
  if (data.currentPlatform === "Google Workspace") score += 15;
  else if (data.currentPlatform === "Microsoft 365") score += 5;
  else if (data.currentPlatform === "Both") score += 10;

  // Workspace plan tier
  const planMap: Record<string, number> = {
    "Business Starter": 5,
    "Business Standard": 7,
    "Business Plus": 8,
    Enterprise: 10,
  };
  score += planMap[data.workspacePlan] ?? 0;

  // AI usage - lower usage = higher opportunity
  const geminiMap: Record<string, number> = {
    "Never heard of it": 15,
    "Aware but not using": 12,
    "Basic usage": 8,
    "Advanced usage": 3,
  };
  score += geminiMap[data.geminiUsage] ?? 0;

  // Custom Gems - fewer = more opportunity
  const gemsMap: Record<string, number> = {
    None: 10,
    "1-2": 7,
    "3-5": 4,
    "6+": 2,
  };
  score += gemsMap[data.customGems] ?? 0;

  // NotebookLM
  const notebookMap: Record<string, number> = {
    "Not using": 8,
    Exploring: 5,
    "Active use": 2,
  };
  score += notebookMap[data.notebookLMUsage] ?? 0;

  // Workflow challenges (+5 each)
  score += data.workflowChallenges.length * 5;

  return Math.min(score, 100);
}

function getScoreLabel(score: number) {
  if (score <= 30)
    return { label: "Early Stage", color: "text-danger", ring: "#ea4335" };
  if (score <= 60)
    return {
      label: "Growing Opportunity",
      color: "text-accent-dark",
      ring: "#fbbc04",
    };
  return {
    label: "High Impact Potential",
    color: "text-secondary",
    ring: "#34a853",
  };
}

/* ─── COMPONENTS ─── */
function ScoreGauge({ score }: { score: number }) {
  const { label, color, ring } = getScoreLabel(score);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40">
        <svg className="h-40 w-40 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={ring}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-extrabold ${color}`}>{score}</span>
          <span className="text-xs text-slate-500">/ 100</span>
        </div>
      </div>
      <p className={`mt-4 text-lg font-bold ${color}`}>{label}</p>
    </div>
  );
}

function StepIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              i + 1 === current
                ? "bg-primary text-white"
                : i + 1 < current
                  ? "bg-secondary text-white"
                  : "bg-slate-200 text-slate-500"
            }`}
          >
            {i + 1 < current ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div
              className={`h-0.5 w-8 sm:w-12 ${i + 1 < current ? "bg-secondary" : "bg-slate-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function AIReadinessAssessmentPage() {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    userCount: "",
    industry: "",
    currentPlatform: "",
    workspacePlan: "",
    geminiUsage: "",
    customGems: "",
    notebookLMUsage: "",
    workflowChallenges: [],
    email: "",
  });

  const update = (field: keyof FormData, value: string | string[]) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleChallenge = (challenge: string) => {
    setFormData((prev) => {
      const current = prev.workflowChallenges;
      if (current.includes(challenge)) {
        return {
          ...prev,
          workflowChallenges: current.filter((c) => c !== challenge),
        };
      }
      if (current.length >= 3) return prev;
      return {
        ...prev,
        workflowChallenges: [...current, challenge],
      };
    });
  };

  const canAdvance = () => {
    switch (step) {
      case 1:
        return formData.companyName && formData.userCount && formData.industry;
      case 2:
        return formData.currentPlatform;
      case 3:
        return (
          formData.geminiUsage &&
          formData.customGems &&
          formData.notebookLMUsage
        );
      case 4:
        return formData.workflowChallenges.length > 0;
      default:
        return true;
    }
  };

  const score = calculateScore(formData);
  const { label } = getScoreLabel(score);

  const recommendedGems = formData.workflowChallenges
    .slice(0, 3)
    .map((c) => CHALLENGE_TO_GEM[c])
    .filter(Boolean);

  /* ─── STEP LABELS ─── */
  const stepTitles = [
    "Company Information",
    "Current Stack",
    "AI Usage",
    "Workflow Challenges",
    "Your Results",
  ];

  /* ─── INPUT STYLES ─── */
  const inputBase =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const selectBase = `${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%2394a3b8%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Free Assessment
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            AI Readiness Assessment
          </h1>
          <p className="text-lg text-slate-300">
            Discover how much untapped AI potential exists in your Google
            Workspace environment. Takes less than 5 minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <StepIndicator current={step} total={5} />

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">
              {stepTitles[step - 1]}
            </h2>

            {/* ─── STEP 1: Company Info ─── */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className={inputBase}
                    placeholder="Acme Corp"
                    value={formData.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Number of Users
                  </label>
                  <select
                    className={selectBase}
                    value={formData.userCount}
                    onChange={(e) => update("userCount", e.target.value)}
                  >
                    <option value="">Select range</option>
                    {USER_COUNT_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Industry
                  </label>
                  <select
                    className={selectBase}
                    value={formData.industry}
                    onChange={(e) => update("industry", e.target.value)}
                  >
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* ─── STEP 2: Current Stack ─── */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Current Platform
                  </label>
                  <select
                    className={selectBase}
                    value={formData.currentPlatform}
                    onChange={(e) => update("currentPlatform", e.target.value)}
                  >
                    <option value="">Select platform</option>
                    {[
                      "Google Workspace",
                      "Microsoft 365",
                      "Both",
                      "Other",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                {(formData.currentPlatform === "Google Workspace" ||
                  formData.currentPlatform === "Both") && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Workspace Plan Tier
                    </label>
                    <select
                      className={selectBase}
                      value={formData.workspacePlan}
                      onChange={(e) => update("workspacePlan", e.target.value)}
                    >
                      <option value="">Select plan</option>
                      {WORKSPACE_PLANS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* ─── STEP 3: AI Usage ─── */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Gemini Usage
                  </label>
                  <select
                    className={selectBase}
                    value={formData.geminiUsage}
                    onChange={(e) => update("geminiUsage", e.target.value)}
                  >
                    <option value="">Select level</option>
                    {GEMINI_USAGE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Custom Gems Deployed
                  </label>
                  <select
                    className={selectBase}
                    value={formData.customGems}
                    onChange={(e) => update("customGems", e.target.value)}
                  >
                    <option value="">Select count</option>
                    {CUSTOM_GEMS_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    NotebookLM Usage
                  </label>
                  <select
                    className={selectBase}
                    value={formData.notebookLMUsage}
                    onChange={(e) => update("notebookLMUsage", e.target.value)}
                  >
                    <option value="">Select level</option>
                    {NOTEBOOKLM_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* ─── STEP 4: Workflow Challenges ─── */}
            {step === 4 && (
              <div>
                <p className="mb-4 text-sm text-slate-600">
                  Select your top 3 workflow challenges (
                  {formData.workflowChallenges.length}/3 selected)
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {WORKFLOW_CHALLENGES.map((challenge) => {
                    const selected =
                      formData.workflowChallenges.includes(challenge);
                    const disabled =
                      !selected && formData.workflowChallenges.length >= 3;
                    return (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() => toggleChallenge(challenge)}
                        disabled={disabled}
                        className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                          selected
                            ? "border-primary bg-primary-light text-primary"
                            : disabled
                              ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                              : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:bg-primary-light/50"
                        }`}
                      >
                        {challenge}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─── STEP 5: Results ─── */}
            {step === 5 && !showResults && (
              <div className="space-y-5">
                <p className="text-sm text-slate-600">
                  Enter your email to see your full AI Readiness Report with
                  personalized Gem recommendations.
                </p>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className={inputBase}
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  disabled={!formData.email}
                  onClick={async () => {
                    const body = new FormData();
                    body.append("access_key", "8ee928a3-0d39-42fc-88fd-a03f49e1235c");
                    body.append("subject", "AI Readiness Assessment Submission");
                    body.append("from_name", "CloudSlate AI Assessment");
                    body.append("email", formData.email);
                    body.append("Company", formData.companyName);
                    body.append("Users", formData.userCount);
                    body.append("Industry", formData.industry);
                    body.append("Platform", formData.currentPlatform);
                    body.append("Workspace Plan", formData.workspacePlan);
                    body.append("Gemini Usage", formData.geminiUsage);
                    body.append("Custom Gems", formData.customGems);
                    body.append("NotebookLM Usage", formData.notebookLMUsage);
                    body.append("Workflow Challenges", formData.workflowChallenges.join(", "));
                    body.append("AI Readiness Score", `${score}/100 - ${label}`);
                    body.append("Recommended Gems", recommendedGems.map(g => g.name).join(", "));
                    try { await fetch("https://api.web3forms.com/submit", { method: "POST", body }); } catch {}
                    setShowResults(true);
                  }}
                  className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  View My Results
                </button>
              </div>
            )}

            {step === 5 && showResults && (
              <div className="space-y-8">
                <ScoreGauge score={score} />

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">
                      {formData.companyName}
                    </strong>{" "}
                    scored{" "}
                    <strong className="text-primary">{score}/100</strong> &mdash;{" "}
                    {label}.
                    {score > 60
                      ? " Your organization has significant untapped AI potential. Custom Gems and NotebookLM could deliver immediate productivity gains."
                      : score > 30
                        ? " There are clear opportunities to accelerate your AI adoption with targeted Gem deployments."
                        : " Starting your AI journey now positions you ahead of competitors. Let us help you build a roadmap."}
                  </p>
                </div>

                {/* Recommended Gems */}
                {recommendedGems.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-slate-900">
                      Recommended Custom Gems for You
                    </h3>
                    <div className="space-y-3">
                      {recommendedGems.map((gem) => (
                        <div
                          key={gem.name}
                          className="rounded-xl border border-slate-200 bg-white p-5"
                        >
                          <div className="mb-1 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
                              <svg
                                className="h-4 w-4 text-primary"
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
                            <h4 className="font-bold text-slate-900">
                              {gem.name}
                            </h4>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600">
                            {gem.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Book a Free AI Consultation
                  </Link>
                  <Link
                    href="/tools/gems-idea-generator"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-light"
                  >
                    Try the Gems Idea Generator
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {!(step === 5 && showResults) && step !== 5 && (
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
                    step === 1
                      ? "invisible"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!canAdvance()}
                  onClick={() => setStep((s) => Math.min(5, s + 1))}
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {step === 4 ? "See My Score" : "Next"}
                </button>
              </div>
            )}

            {step === 5 && !showResults && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
