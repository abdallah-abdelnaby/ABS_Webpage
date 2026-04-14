"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { SiteConfig } from "@/config/site";

import { MotionReveal, StaggerItem, StaggerWrap } from "./motion-reveal";
import { EngagementIllustration } from "./technical-illustrations";

type EngagementsSectionProps = {
  featuredWork: SiteConfig["featuredWork"];
};

export function EngagementsSection({ featuredWork }: EngagementsSectionProps) {
  return (
    <section id="engagements" className="bg-steel-100 py-20 md:py-24" aria-labelledby="engagements-heading">
      <div className="shell">
        <h2 id="engagements-heading" className="sr-only">
          {featuredWork.title}
        </h2>

        <StaggerWrap className="grid gap-6 xl:grid-cols-2" staggerChildren={0.1}>
          {featuredWork.items.map((item) => (
            <StaggerItem key={item.organization}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden rounded-[34px] border border-steel-200 bg-white shadow-panel"
              >
                <EngagementIllustration variant={item.variant} label={item.label} />

                <div className="grid gap-6 p-7 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <p className="eyebrow text-steel-500">{item.sector}</p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-steel-900">{item.organization}</h3>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-base leading-7 text-steel-700">{item.status}</p>
                    <p className="mt-3 text-base leading-7 text-steel-500">{item.summary}</p>
                    <p className="mt-3 text-sm leading-6 text-steel-500">{item.detail}</p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {item.scope.map((scopeItem) => (
                        <span key={scopeItem} className="data-chip">
                          {scopeItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <MotionReveal className="min-w-[10rem]" delay={0.12}>
                    <div className="rounded-[24px] border border-steel-200 bg-steel-50 p-5">
                      <p className="eyebrow text-steel-500">Status marker</p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-steel-900">{item.marker}</p>
                      <p className="mt-3 text-sm leading-6 text-steel-500">Completed work and accepted future scope remain intentionally separated.</p>
                    </div>
                  </MotionReveal>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
