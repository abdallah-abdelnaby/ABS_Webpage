"use client";

import type { SiteConfig } from "@/config/site";

import { MotionReveal, StaggerItem, StaggerWrap } from "./motion-reveal";

type CapabilitiesSectionProps = {
  capabilities: SiteConfig["capabilities"];
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-midnight-950 py-20 md:py-24" aria-labelledby="capabilities-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(77,134,255,0.18),transparent_24%),radial-gradient(circle_at_86%_76%,rgba(77,134,255,0.12),transparent_22%)]" />
      <div className="absolute inset-0 grid-dark opacity-25" />

      <div className="shell relative">
        <h2 id="capabilities-heading" className="sr-only">
          {capabilities.title}
        </h2>

        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <MotionReveal>
            <div className="dark-panel p-6 md:p-8">
              <p className="eyebrow text-white/50">Focus areas</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {capabilities.focusAreas.map((focusArea) => (
                  <span key={focusArea} className="data-chip-dark">
                    {focusArea}
                  </span>
                ))}
              </div>

              <StaggerWrap className="mt-8 grid gap-4 md:grid-cols-2" staggerChildren={0.08}>
                {capabilities.groups.map((group) => (
                  <StaggerItem key={group.title}>
                    <article className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="eyebrow text-white/42">{group.title}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{group.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerWrap>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-3 shadow-panelStrong">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-steel-50">
                <div className="border-b border-steel-200 px-6 py-5 md:px-7">
                  <p className="eyebrow text-steel-500">{capabilities.matrix.title}</p>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-steel-500">{capabilities.matrix.description}</p>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-[1.15fr_repeat(3,minmax(0,1fr))]">
                    <div className="border-b border-steel-200 px-6 py-4 text-sm font-semibold text-steel-400">Domain</div>
                    <div className="border-b border-l border-steel-200 px-6 py-4 text-sm font-semibold text-steel-400">Architecture</div>
                    <div className="border-b border-l border-steel-200 px-6 py-4 text-sm font-semibold text-steel-400">Build</div>
                    <div className="border-b border-l border-steel-200 px-6 py-4 text-sm font-semibold text-steel-400">Operate</div>

                    {capabilities.matrix.rows.map((row) => (
                      <div key={row.label} className="contents">
                        <div className="border-b border-steel-200 px-6 py-5">
                          <p className="text-base font-semibold text-steel-900">{row.label}</p>
                        </div>
                        <div className="border-b border-l border-steel-200 px-6 py-5 text-sm leading-6 text-steel-500">{row.architecture}</div>
                        <div className="border-b border-l border-steel-200 px-6 py-5 text-sm leading-6 text-steel-500">{row.implementation}</div>
                        <div className="border-b border-l border-steel-200 px-6 py-5 text-sm leading-6 text-steel-500">{row.operations}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 p-4 md:hidden">
                  {capabilities.matrix.rows.map((row) => (
                    <article key={row.label} className="rounded-[24px] border border-steel-200 bg-white p-5 shadow-panel">
                      <h3 className="text-lg font-semibold text-steel-900">{row.label}</h3>
                      <div className="mt-4 space-y-3 text-sm leading-6 text-steel-500">
                        <div>
                          <p className="eyebrow text-steel-400">Architecture</p>
                          <p className="mt-1">{row.architecture}</p>
                        </div>
                        <div>
                          <p className="eyebrow text-steel-400">Build</p>
                          <p className="mt-1">{row.implementation}</p>
                        </div>
                        <div>
                          <p className="eyebrow text-steel-400">Operate</p>
                          <p className="mt-1">{row.operations}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
