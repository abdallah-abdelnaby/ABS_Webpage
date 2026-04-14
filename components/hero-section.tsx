"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { SiteConfig } from "@/config/site";

import { HeroArchitectureIllustration } from "./technical-illustrations";

type HeroSectionProps = {
  hero: SiteConfig["hero"];
};

function buttonClass(variant: SiteConfig["hero"]["ctas"][number]["variant"]) {
  return variant === "primary" ? "button-primary" : "button-secondary";
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-midnight-950 pb-20 pt-24 md:pb-28 md:pt-28" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(77,134,255,0.2),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(77,134,255,0.14),transparent_22%),linear-gradient(180deg,#09111f_0%,#09111f_58%,#0f1828_100%)]" />
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="drift-slow absolute -left-16 top-24 h-56 w-56 rounded-full bg-accent-500/12 blur-3xl" />
        <div className="drift-slow absolute right-0 top-10 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="grid gap-12 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="eyebrow text-white/55">{hero.eyebrow}</p>
              <h1
                id="hero-heading"
                className="max-w-4xl text-balance text-[clamp(3rem,6vw,5.9rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white"
              >
                {hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white md:text-xl">{hero.subheadline}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <Link key={cta.href} href={cta.href} className={buttonClass(cta.variant)}>
                  {cta.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {hero.tags.map((tag) => (
                <span key={tag} className="data-chip-dark">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {hero.metrics.map((metric) => (
                <div key={metric.value} className="dark-panel p-5">
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                  <p className="mt-3 text-sm font-semibold text-white">{metric.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white">{metric.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroArchitectureIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
