"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Project, SiteConfig } from "@/config/site";

import { StaggerItem, StaggerWrap } from "./motion-reveal";
import { SectionHeading } from "./section-heading";
import { ProjectPreviewIllustration } from "./technical-illustrations";

type ProjectsSectionProps = {
  projects: SiteConfig["projects"];
};

function ProjectCard({ project }: { project: Project }) {
  const host = new URL(project.href).host;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="grid overflow-hidden rounded-[34px] border border-steel-200 bg-white shadow-panel lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="p-3 lg:order-last">
        <ProjectPreviewIllustration host={host} />
      </div>

      <div className="flex flex-col justify-between gap-8 p-6 md:p-9">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow text-steel-500">{project.category}</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-3 py-1.5 text-[0.72rem] font-medium text-accent-600">
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-steel-900 md:text-3xl">{project.name}</h3>
          <p className="mt-4 text-base leading-7 text-steel-500">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span key={tag} className="data-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-steel-200 pt-6">
          <a href={project.href} target="_blank" rel="noopener" className="button-primary gap-2">
            {project.ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <span className="text-sm text-steel-500 [font-family:var(--font-mono)]">{host}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-b border-steel-200 bg-steel-100 py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="shell">
        <SectionHeading
          id="projects-heading"
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <StaggerWrap className="grid gap-6" staggerChildren={0.1}>
          {projects.items.map((project) => (
            <StaggerItem key={project.href}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
