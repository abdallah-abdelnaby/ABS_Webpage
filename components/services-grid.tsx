"use client";

import { Blocks, BrainCircuit, Braces, Code2, Compass, Cpu } from "lucide-react";
import { motion } from "framer-motion";

import type { Service, ServiceIcon, SiteConfig } from "@/config/site";

import { StaggerItem, StaggerWrap } from "./motion-reveal";

const iconMap: Record<ServiceIcon, typeof Code2> = {
  code: Code2,
  ai: BrainCircuit,
  compiler: Braces,
  blockchain: Blocks,
  hpc: Cpu,
  consulting: Compass,
};

type ServicesGridProps = {
  services: SiteConfig["services"];
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group dark-panel relative h-full p-6 md:p-7"
    >
      <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(145deg,rgba(77,134,255,0.18),transparent_34%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-accent-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="eyebrow text-white">0{index + 1}</span>
        </div>

        <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white">{service.title}</h3>
        <p className="mt-3 text-base leading-7 text-white">{service.description}</p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="eyebrow text-white">Business impact</p>
          <p className="mt-3 text-sm leading-6 text-white">{service.impact}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section
      id="services"
      className="relative overflow-hidden scroll-mt-28 bg-midnight-950 py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(77,134,255,0.16),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(77,134,255,0.1),transparent_22%)]" />
      <div className="absolute inset-0 grid-dark opacity-25" />

      <div className="shell relative">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow text-white">{services.eyebrow}</p>
            <h2
              id="services-heading"
              className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl"
            >
              {services.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white md:text-lg">{services.description}</p>
          </div>
        </div>

        <StaggerWrap className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" staggerChildren={0.08}>
          {services.items.map((service, index) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
