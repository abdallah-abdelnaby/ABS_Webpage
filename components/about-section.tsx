"use client";

import type { SiteConfig } from "@/config/site";

import { MotionReveal, StaggerItem, StaggerWrap } from "./motion-reveal";

type AboutSectionProps = {
  about: SiteConfig["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-28 bg-midnight-950 py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(77,134,255,0.16),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(77,134,255,0.12),transparent_20%)]" />
      <div className="absolute inset-0 grid-dark opacity-20" />

      <div className="shell relative">
        <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
          <MotionReveal>
            <div className="space-y-5">
              <p className="eyebrow text-white/55">{about.eyebrow}</p>
              <h2 id="about-heading" className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                {about.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">{about.description}</p>

              <blockquote className="dark-panel mt-8 overflow-hidden p-6 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,134,255,0.16),transparent_30%)]" />
                <div className="relative">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">“{about.quote}”</p>
                  <footer className="mt-4 text-sm text-white">{about.quoteSource}</footer>
                </div>
              </blockquote>
            </div>
          </MotionReveal>

          <StaggerWrap className="grid gap-4 md:grid-cols-3 xl:grid-cols-1" staggerChildren={0.08}>
            {about.principles.map((principle, index) => (
              <StaggerItem key={principle.title}>
                <article className="dark-panel h-full p-6">
                  <p className="eyebrow text-white">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">{principle.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white">{principle.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerWrap>
        </div>
      </div>
    </section>
  );
}
