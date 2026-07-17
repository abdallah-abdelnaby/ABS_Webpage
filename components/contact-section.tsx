"use client";

import Link from "next/link";
import { Check, MapPin } from "lucide-react";

import type { SiteConfig } from "@/config/site";

import { ContactForm } from "./contact-form";
import { MotionReveal, StaggerItem, StaggerWrap } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

type ContactSectionProps = {
  contact: SiteConfig["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-steel-100 py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <SectionHeading
          id="contact-heading"
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <MotionReveal>
          <div className="relative overflow-hidden rounded-[34px] bg-midnight-950 p-7 text-white shadow-panelStrong md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,134,255,0.18),transparent_28%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="eyebrow text-white/50">Pre-project framing</p>
                <h3 className="text-balance text-3xl font-semibold tracking-[-0.04em]">{contact.banner.title}</h3>
                <p className="text-base leading-7 text-white/70">{contact.banner.description}</p>
              </div>
              <Link href={contact.banner.ctaHref} className="button-tertiary shrink-0">
                {contact.banner.ctaLabel}
              </Link>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <MotionReveal>
            <div id="contact-form" className="surface-card scroll-mt-24 p-6 md:scroll-mt-28 md:p-8">
              <ContactForm
                fields={contact.form.fields}
                projectTypeOptions={contact.form.projectTypeOptions}
                honeypotName={contact.form.honeypotName}
                selectPlaceholder={contact.form.selectPlaceholder}
                submitLabel={contact.form.submitLabel}
                submittingLabel={contact.form.submittingLabel}
                successLabel={contact.form.successLabel}
                errorLabel={contact.form.errorLabel}
              />
            </div>
          </MotionReveal>

          <StaggerWrap className="grid gap-5" staggerChildren={0.08}>
            <StaggerItem>
              <aside className="surface-card p-6 md:p-8">
                <div className="grid gap-6">
                  <div>
                    <p className="eyebrow text-steel-500">{contact.addressLabel}</p>
                    <address className="mt-3 not-italic text-base leading-7 text-steel-900">
                      {contact.address.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </address>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-3 inline-flex text-sm font-semibold text-accent-600 underline decoration-accent-500/30 underline-offset-4 transition hover:text-accent-500"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="grid gap-3">
                    {contact.companyDetails.map((detail) => (
                      <div key={detail.label} className="flex items-start justify-between gap-4 rounded-2xl border border-steel-200 bg-steel-50 px-4 py-3">
                        <span className="text-sm text-steel-500">{detail.label}</span>
                        <span className="max-w-[65%] text-right text-sm leading-6 text-steel-900">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </StaggerItem>

            <StaggerItem>
              <div className="relative rounded-[32px] border border-white/10 bg-midnight-950 p-6 text-white shadow-panelStrong md:p-8">
                <p className="eyebrow text-white/50">What you can expect</p>
                <ul className="mt-5 space-y-4">
                  {contact.responsePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-6 text-white/70">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="dark-panel overflow-hidden p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04]">
                  <iframe
                    title={`Map for ${contact.map.caption}`}
                    src={contact.map.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,21,0.04),transparent_24%,transparent_72%,rgba(5,11,21,0.28))]" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-midnight-900/90 px-4 py-3 backdrop-blur-sm">
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-white">
                          <MapPin className="h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                          <p className="text-sm font-semibold text-white">{contact.map.label}</p>
                        </div>
                        <p className="mt-1 text-sm text-white">{contact.map.caption}</p>
                      </div>
                      <a
                        href={contact.map.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-tertiary shrink-0 px-4 py-2 text-xs"
                      >
                        Open Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerWrap>
        </div>
      </div>
    </section>
  );
}
