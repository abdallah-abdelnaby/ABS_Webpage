"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import type { ContactField } from "@/config/site";

type ContactFormProps = {
  fields: readonly ContactField[];
  projectTypeOptions: readonly string[];
  honeypotName: string;
  selectPlaceholder: string;
  submitLabel: string;
  successLabel: string;
};

export function ContactForm({
  fields,
  projectTypeOptions,
  honeypotName,
  selectPlaceholder,
  submitLabel,
  successLabel,
}: ContactFormProps) {
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get(honeypotName)) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    setSuccessMessage(successLabel);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} onChange={() => successMessage && setSuccessMessage("")}>
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
              className={baseClassName}
            />
          </div>
        );
      })}

      <button type="submit" className="button-primary w-full justify-center">
        {submitLabel}
      </button>

      <p aria-live="polite" className={successMessage ? "rounded-2xl border border-accent-500/15 bg-accent-500/5 p-3 text-sm text-steel-500" : "sr-only"}>
        {successMessage}
      </p>
    </form>
  );
}
