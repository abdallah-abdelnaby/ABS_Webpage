"use client";

import { motion } from "framer-motion";

import type { SiteConfig } from "@/config/site";

import { MotionReveal, StaggerItem, StaggerWrap } from "./motion-reveal";

type TrustBarProps = {
  trust: SiteConfig["trust"];
};

export function TrustBar({ trust }: TrustBarProps) {
  return (
    <section className="relative border-y border-steel-200 bg-white py-14 md:py-16" aria-labelledby="trust-heading">
      <div className="shell">
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <MotionReveal>
            <div className="space-y-5">
              <p className="eyebrow text-steel-500">{trust.eyebrow}</p>
              <h2 id="trust-heading" className="text-balance text-3xl font-semibold tracking-[-0.045em] text-steel-900 md:text-5xl">
                {trust.title}
              </h2>
              <p className="max-w-xl text-base leading-7 text-steel-500 md:text-lg">{trust.description}</p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {trust.highlights.map((highlight) => (
                  <span key={highlight} className="data-chip">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>

          <StaggerWrap className="grid gap-4 md:grid-cols-2" staggerChildren={0.12}>
            {trust.items.map((item) => (
              <StaggerItem key={item.name}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full rounded-[30px] border border-steel-200 bg-gradient-to-b from-white to-steel-50 p-6 shadow-panel"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow text-steel-500">{item.context}</p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-steel-900">{item.name}</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-accent-500/20 bg-accent-500/5 px-3 py-1.5 text-[0.72rem] font-medium text-accent-600">
                      {item.marker}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-steel-500">{item.statement}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerWrap>
        </div>
      </div>
    </section>
  );
}
