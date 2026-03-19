"use client";

import { useState, FormEvent } from "react";

const WEB3FORMS_KEY = "8ee928a3-0d39-42fc-88fd-a03f49e1235c";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Contact Form Submission - CloudSlate");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-12 rounded-2xl border-2 border-secondary bg-secondary/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
          <svg className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
        <p className="mt-2 text-slate-600">
          We&rsquo;ll be in touch within one business day. In the meantime, try our free tools to explore your AI potential.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-12 space-y-6">
        <input type="hidden" name="from_name" value="CloudSlate Website" />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-900">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="user-count" className="block text-sm font-semibold text-slate-900">
            Number of Users
          </label>
          <select
            id="user-count"
            name="user-count"
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a range</option>
            <option value="1-50">1 - 50</option>
            <option value="51-200">51 - 200</option>
            <option value="201-500">201 - 500</option>
            <option value="501-1000">501 - 1,000</option>
            <option value="1001-5000">1,001 - 5,000</option>
            <option value="5001+">5,001+</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us about your goals, current setup, and how we can help..."
          />
        </div>

        {/* Honeypot spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" />

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-center text-sm text-danger">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Or email us directly at{" "}
        <a href="mailto:hello@cloudslate.org" className="font-medium text-primary hover:text-primary-dark">
          hello@cloudslate.org
        </a>
      </p>
    </>
  );
}
