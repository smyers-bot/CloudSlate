"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── TYPES ─── */
type DepartmentData = {
  name: string;
  tasks: { name: string; hoursPerWeek: number; automationRate: number }[];
};

/* ─── CONSTANTS ─── */
const DEPARTMENTS: DepartmentData[] = [
  {
    name: "Sales",
    tasks: [
      { name: "Writing proposals & quotes", hoursPerWeek: 6, automationRate: 0.65 },
      { name: "Email drafting & follow-ups", hoursPerWeek: 5, automationRate: 0.55 },
      { name: "CRM data entry & updates", hoursPerWeek: 4, automationRate: 0.7 },
      { name: "Prospect research & briefings", hoursPerWeek: 3, automationRate: 0.6 },
      { name: "Meeting prep & summaries", hoursPerWeek: 3, automationRate: 0.5 },
    ],
  },
  {
    name: "Marketing",
    tasks: [
      { name: "Content creation & briefs", hoursPerWeek: 7, automationRate: 0.55 },
      { name: "Social media drafting", hoursPerWeek: 5, automationRate: 0.6 },
      { name: "Campaign reporting", hoursPerWeek: 4, automationRate: 0.65 },
      { name: "SEO research & optimization", hoursPerWeek: 3, automationRate: 0.45 },
      { name: "Email marketing copy", hoursPerWeek: 3, automationRate: 0.55 },
    ],
  },
  {
    name: "Customer Support",
    tasks: [
      { name: "Ticket response drafting", hoursPerWeek: 8, automationRate: 0.6 },
      { name: "Knowledge base updates", hoursPerWeek: 4, automationRate: 0.55 },
      { name: "Escalation summaries", hoursPerWeek: 3, automationRate: 0.65 },
      { name: "Customer follow-ups", hoursPerWeek: 4, automationRate: 0.5 },
      { name: "FAQ & documentation", hoursPerWeek: 3, automationRate: 0.6 },
    ],
  },
  {
    name: "HR / People Ops",
    tasks: [
      { name: "Onboarding documentation", hoursPerWeek: 5, automationRate: 0.6 },
      { name: "Policy Q&A responses", hoursPerWeek: 4, automationRate: 0.7 },
      { name: "Job description writing", hoursPerWeek: 3, automationRate: 0.65 },
      { name: "Employee communications", hoursPerWeek: 3, automationRate: 0.5 },
      { name: "Performance review prep", hoursPerWeek: 3, automationRate: 0.45 },
    ],
  },
  {
    name: "Finance",
    tasks: [
      { name: "Report generation & narratives", hoursPerWeek: 6, automationRate: 0.55 },
      { name: "Expense categorization", hoursPerWeek: 4, automationRate: 0.7 },
      { name: "Invoice processing", hoursPerWeek: 4, automationRate: 0.65 },
      { name: "Budget variance analysis", hoursPerWeek: 3, automationRate: 0.5 },
      { name: "Audit prep & documentation", hoursPerWeek: 3, automationRate: 0.45 },
    ],
  },
  {
    name: "Legal / Compliance",
    tasks: [
      { name: "Contract review & flagging", hoursPerWeek: 7, automationRate: 0.5 },
      { name: "NDA & agreement drafting", hoursPerWeek: 5, automationRate: 0.6 },
      { name: "Regulatory research", hoursPerWeek: 4, automationRate: 0.45 },
      { name: "Compliance documentation", hoursPerWeek: 3, automationRate: 0.55 },
      { name: "Policy updates & summaries", hoursPerWeek: 3, automationRate: 0.6 },
    ],
  },
  {
    name: "Operations",
    tasks: [
      { name: "SOP documentation", hoursPerWeek: 5, automationRate: 0.6 },
      { name: "Meeting notes & action items", hoursPerWeek: 4, automationRate: 0.65 },
      { name: "Vendor evaluation & comparison", hoursPerWeek: 3, automationRate: 0.55 },
      { name: "Process documentation", hoursPerWeek: 4, automationRate: 0.6 },
      { name: "Internal reporting", hoursPerWeek: 3, automationRate: 0.5 },
    ],
  },
  {
    name: "Executive",
    tasks: [
      { name: "Board deck preparation", hoursPerWeek: 6, automationRate: 0.5 },
      { name: "Strategic briefings & research", hoursPerWeek: 4, automationRate: 0.55 },
      { name: "Cross-department summaries", hoursPerWeek: 3, automationRate: 0.6 },
      { name: "Communication drafting", hoursPerWeek: 3, automationRate: 0.55 },
      { name: "KPI reporting & dashboards", hoursPerWeek: 3, automationRate: 0.5 },
    ],
  },
];

const HOURLY_RATES: { label: string; rate: number }[] = [
  { label: "$35/hr (Entry-level)", rate: 35 },
  { label: "$55/hr (Mid-level)", rate: 55 },
  { label: "$75/hr (Senior)", rate: 75 },
  { label: "$100/hr (Manager)", rate: 100 },
  { label: "$150/hr (Director+)", rate: 150 },
];

/* ─── FORMATTING ─── */
function fmt(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/* ─── MAIN PAGE ─── */
export default function GeminiROICalculatorPage() {
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState(10);
  const [rateIndex, setRateIndex] = useState(2); // Senior default
  const [adoptionRate, setAdoptionRate] = useState(70);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const toggleDept = (name: string) => {
    setSelectedDepts((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
    setShowResults(false);
  };

  const canCalculate = selectedDepts.length > 0 && teamSize > 0;

  /* ─── CALCULATIONS ─── */
  const calc = useMemo(() => {
    if (!showResults) return null;

    const rate = HOURLY_RATES[rateIndex].rate;
    const adoptionMultiplier = adoptionRate / 100;

    const deptBreakdowns = DEPARTMENTS.filter((d) =>
      selectedDepts.includes(d.name)
    ).map((dept) => {
      const taskBreakdowns = dept.tasks.map((task) => {
        const hoursSavedPerPerson = task.hoursPerWeek * task.automationRate * adoptionMultiplier;
        const totalHoursSaved = hoursSavedPerPerson * teamSize;
        return {
          name: task.name,
          hoursSavedPerWeek: totalHoursSaved,
          automationRate: task.automationRate,
        };
      });

      const totalHoursPerWeek = taskBreakdowns.reduce(
        (sum, t) => sum + t.hoursSavedPerWeek, 0
      );

      return {
        name: dept.name,
        tasks: taskBreakdowns,
        hoursPerWeek: totalHoursPerWeek,
        hoursPerMonth: totalHoursPerWeek * 4.33,
        hoursPerYear: totalHoursPerWeek * 52,
      };
    });

    const totalHoursPerWeek = deptBreakdowns.reduce(
      (sum, d) => sum + d.hoursPerWeek, 0
    );
    const totalHoursPerMonth = totalHoursPerWeek * 4.33;
    const totalHoursPerYear = totalHoursPerWeek * 52;
    const annualSavings = totalHoursPerYear * rate;
    const monthlySavings = totalHoursPerMonth * rate;

    // ROI calculation (assuming Workspace Business Standard at $14/user/mo)
    const annualWorkspaceCost = teamSize * 14 * 12;
    const roi = annualSavings > 0 ? ((annualSavings - annualWorkspaceCost) / annualWorkspaceCost) * 100 : 0;

    // Equivalent FTEs saved
    const fteSaved = totalHoursPerYear / 2080; // 2080 = 40hrs * 52 weeks

    return {
      deptBreakdowns,
      totalHoursPerWeek,
      totalHoursPerMonth,
      totalHoursPerYear,
      monthlySavings,
      annualSavings,
      roi,
      fteSaved,
      hourlyRate: rate,
    };
  }, [showResults, selectedDepts, teamSize, rateIndex, adoptionRate]);

  const inputBase =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const selectBase = `${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%2394a3b8%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Free Calculator
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Gemini AI ROI Calculator
          </h1>
          <p className="text-lg text-slate-300">
            Estimate how many hours your team can save each week with Gemini AI
            in Google Workspace. See the dollar value of recovered productivity.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* ─── INPUTS ─── */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">
              Configure Your Team
            </h2>

            <div className="space-y-6">
              {/* Department Selection */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Select Departments Using Gemini AI
                </label>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {DEPARTMENTS.map((dept) => {
                    const selected = selectedDepts.includes(dept.name);
                    return (
                      <button
                        key={dept.name}
                        type="button"
                        onClick={() => toggleDept(dept.name)}
                        className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                          selected
                            ? "border-primary bg-primary-light text-primary"
                            : "border-slate-200 text-slate-600 hover:border-primary hover:bg-primary-light/50"
                        }`}
                      >
                        {dept.name}
                      </button>
                    );
                  })}
                </div>
                {selectedDepts.length > 0 && (
                  <p className="mt-2 text-xs text-slate-500">
                    {selectedDepts.length} department{selectedDepts.length !== 1 ? "s" : ""} selected
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {/* Team Size */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    People per Department
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={9999}
                    className={inputBase}
                    value={teamSize}
                    onChange={(e) => {
                      setTeamSize(Math.max(1, parseInt(e.target.value) || 1));
                      setShowResults(false);
                    }}
                  />
                </div>

                {/* Hourly Rate */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Avg. Employee Cost
                  </label>
                  <select
                    className={selectBase}
                    value={rateIndex}
                    onChange={(e) => {
                      setRateIndex(Number(e.target.value));
                      setShowResults(false);
                    }}
                  >
                    {HOURLY_RATES.map((r, i) => (
                      <option key={r.label} value={i}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Adoption Rate */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Expected Adoption Rate
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={20}
                      max={100}
                      step={5}
                      value={adoptionRate}
                      onChange={(e) => {
                        setAdoptionRate(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary"
                    />
                    <span className="w-12 text-right text-sm font-semibold text-primary">
                      {adoptionRate}%
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={!canCalculate}
                onClick={() => setShowResults(true)}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                Calculate My ROI
              </button>
            </div>
          </div>

          {/* ─── RESULTS ─── */}
          {showResults && calc && (
            <div className="mt-8 space-y-6">
              {/* Summary Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Hours Saved / Week
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-primary">
                    {Math.round(calc.totalHoursPerWeek)}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">across all teams</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Hours Saved / Year
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-primary">
                    {Math.round(calc.totalHoursPerYear).toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">recovered productivity</p>
                </div>
                <div className="rounded-2xl border-2 border-secondary bg-white p-6 shadow-sm text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Annual Value
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-secondary">
                    {fmt(calc.annualSavings)}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">at {fmt(calc.hourlyRate)}/hr</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Equivalent FTEs
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-800">
                    {calc.fteSaved.toFixed(1)}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">full-time employees</p>
                </div>
              </div>

              {/* ROI Highlight */}
              <div className="rounded-2xl bg-gradient-to-r from-secondary to-secondary-dark p-6 text-white">
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                      Estimated ROI on Google Workspace
                    </p>
                    <p className="mt-1 text-4xl font-extrabold">
                      {Math.round(calc.roi)}% ROI
                    </p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-white/80">
                      {fmt(calc.monthlySavings)}/mo in recovered productivity
                    </p>
                    <p className="text-sm text-white/80">
                      {fmt(calc.annualSavings)}/yr total value
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Breakdown */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Hours Saved by Department
                </h3>
                <div className="space-y-6">
                  {calc.deptBreakdowns.map((dept) => (
                    <div key={dept.name}>
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="font-semibold text-slate-800">{dept.name}</h4>
                        <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                          {Math.round(dept.hoursPerWeek)} hrs/week
                        </span>
                      </div>
                      <div className="space-y-2">
                        {dept.tasks.map((task) => {
                          const maxHours = Math.max(
                            ...dept.tasks.map((t) => t.hoursSavedPerWeek)
                          );
                          return (
                            <div key={task.name}>
                              <div className="mb-1 flex items-center justify-between text-sm">
                                <span className="text-slate-600">{task.name}</span>
                                <span className="font-medium text-slate-800">
                                  {task.hoursSavedPerWeek.toFixed(1)} hrs/wk
                                </span>
                              </div>
                              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                                <div
                                  className="h-full rounded-full bg-primary/70 transition-all duration-500"
                                  style={{
                                    width: `${(task.hoursSavedPerWeek / maxHours) * 100}%`,
                                    minWidth: "0.5rem",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Get There */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  How Gemini Delivers These Savings
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <h4 className="mb-1 font-semibold text-slate-800">Custom Gems</h4>
                    <p className="text-sm text-slate-600">
                      AI assistants trained on your data that automate repetitive tasks in Docs, Sheets, and Gmail.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <h4 className="mb-1 font-semibold text-slate-800">NotebookLM</h4>
                    <p className="text-sm text-slate-600">
                      AI-powered knowledge engine that answers questions from your company&apos;s documents instantly.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h4 className="mb-1 font-semibold text-slate-800">Workspace Flows</h4>
                    <p className="text-sm text-slate-600">
                      Automated workflows connecting Gmail, Drive, Sheets, and Docs to eliminate manual handoffs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Gate */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                {!emailSubmitted ? (
                  <>
                    <h3 className="mb-2 text-sm font-semibold text-slate-700">
                      Get Your Full ROI Report
                    </h3>
                    <p className="mb-4 text-sm text-slate-500">
                      Enter your email to receive a detailed breakdown with
                      implementation recommendations for your team.
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
                        onClick={async () => {
                          const body = new FormData();
                          body.append("access_key", "8ee928a3-0d39-42fc-88fd-a03f49e1235c");
                          body.append("subject", "Gemini ROI Calculator - Lead");
                          body.append("from_name", "CloudSlate ROI Calculator");
                          body.append("email", email);
                          body.append("Team Size per Dept", String(teamSize));
                          body.append("Departments", selectedDepts.join(", "));
                          body.append("Avg Hourly Rate", fmt(HOURLY_RATES[rateIndex].rate));
                          body.append("Adoption Rate", `${adoptionRate}%`);
                          body.append("Hours Saved / Week", String(Math.round(calc.totalHoursPerWeek)));
                          body.append("Hours Saved / Year", String(Math.round(calc.totalHoursPerYear)));
                          body.append("Annual Value", fmt(calc.annualSavings));
                          body.append("ROI", `${Math.round(calc.roi)}%`);
                          body.append("FTEs Equivalent", calc.fteSaved.toFixed(1));
                          try { await fetch("https://api.web3forms.com/submit", { method: "POST", body }); } catch {}
                          setEmailSubmitted(true);
                        }}
                        className="shrink-0 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Send Report
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-700">
                      Your ROI report will be sent to <strong>{email}</strong> shortly.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Free AI Consultation
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
