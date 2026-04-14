"use client";

import { BadgeCheck, Blocks, Hammer, Search, ShieldCheck } from "lucide-react";

import type { SiteConfig } from "@/config/site";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

const icons = [Search, Blocks, Hammer, BadgeCheck, ShieldCheck];

type ProcessSectionProps = {
  process: SiteConfig["process"];
};

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="scroll-mt-28 bg-steel-50 py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="shell">
        <SectionHeading
          id="process-heading"
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <div className="hidden xl:block">
          <ol className="grid grid-cols-5 gap-5">
            {process.steps.map((step, index) => {
              const Icon = icons[index] ?? ShieldCheck;
              const isLast = index === process.steps.length - 1;

              return (
                <li key={step.title} className="relative h-full">
                  <MotionReveal delay={index * 0.05} className="h-full">
                    {!isLast ? (
                      <span className="absolute left-[5.25rem] right-[-1.25rem] top-8 h-px bg-gradient-to-r from-accent-500/45 to-steel-200" />
                    ) : null}

                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-steel-200 bg-white text-accent-500 shadow-panel">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <span className="eyebrow text-steel-400">0{index + 1}</span>
                    </div>

                    <article className="surface-card flex h-[18rem] flex-col p-6">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-steel-900">{step.title}</h3>
                      <p className="mt-4 text-base leading-7 text-steel-500">{step.description}</p>
                      <div className="mt-auto border-t border-steel-200 pt-4">
                        <p className="eyebrow text-accent-600">Deliverable</p>
                        <p className="mt-2 text-sm leading-6 text-steel-500">{step.deliverable}</p>
                      </div>
                    </article>
                  </MotionReveal>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="space-y-5 xl:hidden">
          {process.steps.map((step, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            const isLast = index === process.steps.length - 1;

            return (
              <MotionReveal key={step.title} delay={index * 0.04}>
                <div className="relative pl-16">
                  {!isLast ? <span className="absolute left-6 top-12 h-[calc(100%+1.25rem)] w-px bg-steel-200" /> : null}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-steel-200 bg-white text-accent-500 shadow-panel">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <article className="surface-card p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-steel-900">{step.title}</h3>
                      <span className="eyebrow text-steel-400">0{index + 1}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-steel-500">{step.description}</p>
                    <div className="mt-4 border-t border-steel-200 pt-4">
                      <p className="eyebrow text-accent-600">Deliverable</p>
                      <p className="mt-2 text-sm leading-6 text-steel-500">{step.deliverable}</p>
                    </div>
                  </article>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
