"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  course: string;
  message: string;
  honeypot: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  course: "",
  message: "",
  honeypot: "",
};

const courseOptions = [
  "White Belt",
  "Yellow Belt",
  "Green Belt",
  "Black Belt",
  "Root Cause Analysis",
  "Kaizen",
  "5S",
  "Six Sigma Statistics",
  "Corporate / Group Training",
  "Consulting Services",
  "Other",
];

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSuccess("Thanks — your enquiry has been sent. We'll be in touch shortly.");
      setForm(initialState);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          value={form.firstName}
          onChange={(v) => updateField("firstName", v)}
          required
        />
        <Field
          label="Last name"
          value={form.lastName}
          onChange={(v) => updateField("lastName", v)}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => updateField("email", v)}
          required
        />
        <Field
          label="Company"
          value={form.company}
          onChange={(v) => updateField("company", v)}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          value={form.phone}
          onChange={(v) => updateField("phone", v)}
        />
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Course of interest
          </label>
          <select
            value={form.course}
            onChange={(e) => updateField("course", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:bg-white/[0.07]"
          >
            <option value="" className="bg-surface text-text">
              Select a course...
            </option>
            {courseOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-surface text-text">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden">
        <Field
          label="Leave this empty"
          value={form.honeypot}
          onChange={(v) => updateField("honeypot", v)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Tell us about your training or improvement needs
        </label>
        <textarea
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:bg-white/[0.07]"
          placeholder="Number of delegates, preferred dates, delivery mode, specific objectives..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full border border-accent-border bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent2 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>

        {success ? <p className="text-sm text-accent2">{success}</p> : null}
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:bg-white/[0.07]"
      />
    </div>
  );
}
