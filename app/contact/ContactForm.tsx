"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

const interests = [
  "Demo at an upcoming edition",
  "Partner / sponsor an edition",
  "Join the community",
  "Press / media",
  "Just saying hi",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interests, setInterests] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  function toggleInterest(i: string) {
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    (payload as Record<string, unknown>).interests = interests;

    const endpoint = siteConfig.contact.endpoint;

    // Demo mode — no endpoint configured. Show a friendly confirmation.
    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      form.reset();
      setInterests([]);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setStatus("success");
      form.reset();
      setInterests([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sensus-50"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-sensus-50">
          Got it.
        </h3>
        <p className="mt-3 text-sm text-sensus-300 text-pretty">
          We'll get back to you within a week. In the meantime, follow along on{" "}
          <a
            href={siteConfig.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-sensus-100 hover:text-sensus-50"
          >
            X
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-sensus-300 hover:text-sensus-50 underline underline-offset-4"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Company / project" name="company" />
        <Field label="X / Twitter (optional)" name="twitter" placeholder="@handle" />
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-[0.18em] text-sensus-400 mb-3">
          I'm interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => toggleInterest(i)}
              className={`px-3 py-1.5 text-sm rounded-full ring-1 transition-all ${
                interests.includes(i)
                  ? "bg-white/15 ring-white/25 text-sensus-50"
                  : "bg-white/[0.03] ring-white/10 text-sensus-300 hover:bg-white/[0.06]"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-[0.18em] text-sensus-400 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you building, and what stage are you at?"
          className="w-full rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-sm text-sensus-50 placeholder:text-sensus-500 focus:outline-none focus:ring-white/25 focus:bg-white/[0.06] transition"
        />
      </div>

      {error && (
        <div className="rounded-xl ring-1 ring-red-400/30 bg-red-500/5 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-sensus-400">
          By submitting you agree to our{" "}
          <a href="#" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="chrome-text bg-white/[0.06] hover:bg-white/[0.10] ring-1 ring-white/15 hover:ring-white/25 shadow-glass hover:shadow-glass-hover transition-all inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-[0.18em] text-sensus-400 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-sm text-sensus-50 placeholder:text-sensus-500 focus:outline-none focus:ring-white/25 focus:bg-white/[0.06] transition"
      />
    </div>
  );
}
