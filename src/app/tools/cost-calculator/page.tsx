"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── TYPES ─── */
type M365Plan = {
  name: string;
  price: number;
};

type AddOn = {
  name: string;
  price: number;
};

/* ─── CONSTANTS ─── */
const M365_PLANS: M365Plan[] = [
  { name: "Business Basic", price: 6 },
  { name: "Business Standard", price: 12.5 },
  { name: "Business Premium", price: 22 },
  { name: "E3", price: 36 },
  { name: "E5", price: 57 },
];

const ADDONS: AddOn[] = [
  { name: "Teams Premium", price: 10 },
  { name: "Power BI Pro", price: 10 },
  { name: "Intune", price: 8 },
  { name: "Project Plan 3", price: 30 },
];

const WORKSPACE_PRICE = 14;
const MIGRATION_COST_PER_USER = 25;

const TERMS = [
  { label: "1 Year", years: 1 },
  { label: "3 Year", years: 3 },
  { label: "5 Year", years: 5 },
];

/* ─── FORMATTING ─── */
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyDetailed(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/* ─── MAIN PAGE ─── */
export default function CostCalculatorPage() {
  const [users, setUsers] = useState(100);
  const [planIndex, setPlanIndex] = useState(3); // E3 default
  const [copilot, setCopilot] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [termIndex, setTermIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const toggleAddon = (name: string) =>
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );

  /* ─── CALCULATIONS ─── */
  const calc = useMemo(() => {
    const plan = M365_PLANS[planIndex];
    const addonCost = ADDONS.filter((a) =>
      selectedAddons.includes(a.name)
    ).reduce((sum, a) => sum + a.price, 0);
    const copilotCost = copilot ? 30 : 0;

    const m365Monthly = users * (plan.price + copilotCost + addonCost);
    const workspaceMonthly = users * WORKSPACE_PRICE;
    const monthlySavings = m365Monthly - workspaceMonthly;
    const annualSavings = monthlySavings * 12;
    const migrationInvestment = users * MIGRATION_COST_PER_USER;
    const breakEvenMonths =
      monthlySavings > 0
        ? Math.ceil(migrationInvestment / monthlySavings)
        : Infinity;

    const term = TERMS[termIndex];
    const termSavings = annualSavings * term.years - migrationInvestment;

    return {
      plan,
      m365Monthly,
      workspaceMonthly,
      monthlySavings,
      annualSavings,
      migrationInvestment,
      breakEvenMonths,
      termSavings,
      termYears: term.years,
      termLabel: term.label,
      hasSavings: monthlySavings > 0,
    };
  }, [users, planIndex, copilot, selectedAddons, termIndex]);

  /* ─── BAR CHART ─── */
  const maxCost = Math.max(calc.m365Monthly, calc.workspaceMonthly, 1);

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
            M365 to Google Workspace Savings Calculator
          </h1>
          <p className="text-lg text-slate-300">
            See exactly how much your organization can save by switching to
            Google Workspace with Gemini AI included at no extra cost.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* ─── INPUTS ─── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-bold text-slate-900">
                  Your Current Setup
                </h2>

                <div className="space-y-5">
                  {/* Users */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Number of Users
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={99999}
                      className={inputBase}
                      value={users}
                      onChange={(e) =>
                        setUsers(
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                    />
                  </div>

                  {/* Plan */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Current M365 Plan
                    </label>
                    <select
                      className={selectBase}
                      value={planIndex}
                      onChange={(e) => setPlanIndex(Number(e.target.value))}
                    >
                      {M365_PLANS.map((p, i) => (
                        <option key={p.name} value={i}>
                          {p.name} (${p.price}/user/mo)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Copilot */}
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Copilot Add-on
                      </p>
                      <p className="text-xs text-slate-500">
                        $30/user/mo
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={copilot}
                      onClick={() => setCopilot(!copilot)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
                        copilot ? "bg-primary" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow-sm transition-transform ${
                          copilot ? "translate-x-5.5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-slate-700">
                      Additional Add-ons
                    </p>
                    <div className="space-y-2">
                      {ADDONS.map((addon) => (
                        <label
                          key={addon.name}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 transition-colors hover:bg-slate-50"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAddons.includes(addon.name)}
                            onChange={() => toggleAddon(addon.name)}
                            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                          />
                          <span className="flex-1 text-sm text-slate-700">
                            {addon.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            ${addon.price}/user/mo
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Term */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-slate-700">
                      Contract Term
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {TERMS.map((term, i) => (
                        <button
                          key={term.label}
                          type="button"
                          onClick={() => setTermIndex(i)}
                          className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                            termIndex === i
                              ? "border-primary bg-primary-light text-primary"
                              : "border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {term.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RESULTS ─── */}
            <div className="space-y-6 lg:col-span-3">
              {/* Cost Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Microsoft 365
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-800">
                    {formatCurrency(calc.m365Monthly)}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">per month</p>
                  <p className="mt-3 text-xs text-slate-400">
                    {formatCurrencyDetailed(
                      calc.m365Monthly / (users || 1)
                    )}
                    /user/mo
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-secondary bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Google Workspace
                    </p>
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                      Gemini included
                    </span>
                  </div>
                  <p className="mt-2 text-3xl font-extrabold text-secondary">
                    {formatCurrency(calc.workspaceMonthly)}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">per month</p>
                  <p className="mt-3 text-xs text-slate-400">
                    ${WORKSPACE_PRICE}/user/mo
                  </p>
                </div>
              </div>

              {/* Savings Highlight */}
              {calc.hasSavings && (
                <div className="rounded-2xl bg-gradient-to-r from-secondary to-secondary-dark p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                    Your Monthly Savings
                  </p>
                  <p className="mt-1 text-4xl font-extrabold">
                    {formatCurrency(calc.monthlySavings)}
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    {formatCurrency(calc.annualSavings)} annually &middot;{" "}
                    {formatCurrency(calc.termSavings)} over {calc.termLabel}{" "}
                    (net of migration)
                  </p>
                </div>
              )}

              {!calc.hasSavings && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <p className="text-slate-600">
                    Your current M365 plan is less expensive per user. Consider
                    the value of included Gemini AI, Gems, and NotebookLM when
                    evaluating TCO.
                  </p>
                </div>
              )}

              {/* Bar Chart */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Monthly Cost Comparison
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Microsoft 365</span>
                      <span className="font-semibold text-slate-800">
                        {formatCurrency(calc.m365Monthly)}
                      </span>
                    </div>
                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                      <div
                        className="flex h-full items-center rounded-lg bg-slate-700 px-3 text-xs font-semibold text-white transition-all duration-500"
                        style={{
                          width: `${(calc.m365Monthly / maxCost) * 100}%`,
                          minWidth: "2rem",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Google Workspace</span>
                      <span className="font-semibold text-secondary">
                        {formatCurrency(calc.workspaceMonthly)}
                      </span>
                    </div>
                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                      <div
                        className="flex h-full items-center rounded-lg bg-secondary px-3 text-xs font-semibold text-white transition-all duration-500"
                        style={{
                          width: `${(calc.workspaceMonthly / maxCost) * 100}%`,
                          minWidth: "2rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Term Projections */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Savings Projection
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {TERMS.map((term) => {
                    const savings =
                      calc.annualSavings * term.years -
                      calc.migrationInvestment;
                    return (
                      <div
                        key={term.label}
                        className={`rounded-xl border p-4 ${
                          term.years === calc.termYears
                            ? "border-primary bg-primary-light"
                            : "border-slate-200"
                        }`}
                      >
                        <p className="text-xs font-medium text-slate-500">
                          {term.label}
                        </p>
                        <p
                          className={`mt-1 text-xl font-extrabold ${
                            savings > 0 ? "text-secondary" : "text-slate-400"
                          }`}
                        >
                          {savings > 0
                            ? formatCurrency(savings)
                            : formatCurrency(0)}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          net savings
                        </p>
                      </div>
                    );
                  })}
                </div>
                {calc.hasSavings && calc.breakEvenMonths < Infinity && (
                  <p className="mt-4 text-center text-sm text-slate-600">
                    Migration investment of{" "}
                    <strong>{formatCurrency(calc.migrationInvestment)}</strong>{" "}
                    pays for itself in{" "}
                    <strong className="text-primary">
                      {calc.breakEvenMonths} month
                      {calc.breakEvenMonths !== 1 ? "s" : ""}
                    </strong>
                    .
                  </p>
                )}
              </div>

              {/* Email Gate */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                {!emailSubmitted ? (
                  <>
                    <h3 className="mb-2 text-sm font-semibold text-slate-700">
                      Get a CFO-Ready Savings Report
                    </h3>
                    <p className="mb-4 text-sm text-slate-500">
                      Enter your email to download a detailed PDF report you can
                      share with leadership.
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
                        Send Report
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
                      Your savings report will be sent to{" "}
                      <strong>{email}</strong> shortly.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start Your Migration Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
