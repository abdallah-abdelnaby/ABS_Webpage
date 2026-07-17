"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Loader2 } from "lucide-react";

import type { ContactField } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  fields: readonly ContactField[];
  projectTypeOptions: readonly string[];
  honeypotName: string;
  selectPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successLabel: string;
  errorLabel: string;
  endpoint?: string;
};

export function ContactForm({
  fields,
  projectTypeOptions,
  honeypotName,
  selectPlaceholder,
  submitLabel,
  submittingLabel,
  successLabel,
  errorLabel,
  endpoint = "/api/contact",
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  // Move keyboard focus to the result message once a submission resolves, so
  // keyboard/screen-reader users land on the outcome instead of on <body>
  // (the submit button loses focus when it is disabled mid-request).
  useEffect(() => {
    if (status === "success" || status === "error") {
      feedbackRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // The hidden honeypot field is sent along and validated server-side, so the
    // server is the single source of truth. The client never silently drops a
    // submission (a browser autofilling the field must not lose a real inquiry).
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setFeedback(data?.error || errorLabel);
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback(successLabel);
    } catch {
      setStatus("error");
      setFeedback(errorLabel);
    }
  }

  const isSubmitting = status === "submitting";

  const feedbackClassName =
    status === "error"
      ? "rounded-2xl border border-red-500/25 bg-red-500/[0.06] p-3 text-sm text-red-700 focus:outline-none"
      : status === "success"
        ? "rounded-2xl border border-accent-500/20 bg-accent-500/[0.06] p-3 text-sm text-steel-700 focus:outline-none"
        : "sr-only";

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      onChange={() => {
        if (status === "success" || status === "error") {
          setStatus("idle");
          setFeedback("");
        }
      }}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor={honeypotName}>{honeypotName}</label>
        <input id={honeypotName} name={honeypotName} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {fields.map((field) => {
        const inputId = `field-${field.name}`;
        const baseClassName =
          "w-full rounded-2xl border border-steel-200 bg-white px-4 py-3.5 text-[15px] text-steel-900 placeholder:text-steel-400 transition focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/10";

        if (field.type === "textarea") {
          return (
            <div key={field.name} className="space-y-2.5">
              <label htmlFor={inputId} className="text-sm font-medium text-steel-700">
                {field.label}
              </label>
              <textarea
                id={inputId}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                rows={6}
                className={baseClassName}
              />
            </div>
          );
        }

        if (field.type === "select") {
          return (
            <div key={field.name} className="space-y-2.5">
              <label htmlFor={inputId} className="text-sm font-medium text-steel-700">
                {field.label}
              </label>
              <select
                id={inputId}
                name={field.name}
                required={field.required}
                defaultValue=""
                className={baseClassName}
              >
                <option value="" disabled>
                  {selectPlaceholder}
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={field.name} className="space-y-2.5">
            <label htmlFor={inputId} className="text-sm font-medium text-steel-700">
              {field.label}
            </label>
            <input
              id={inputId}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              maxLength={field.maxLength}
              className={baseClassName}
            />
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            {submittingLabel}
          </>
        ) : (
          submitLabel
        )}
      </button>

      <p
        ref={feedbackRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={feedbackClassName}
      >
        {feedback}
      </p>
    </form>
  );
}
