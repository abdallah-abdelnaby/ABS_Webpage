"use client";

import { motion } from "framer-motion";

import type { SiteConfig, TeamMember } from "@/config/site";

import { StaggerItem, StaggerWrap } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

type TeamSectionProps = {
  team: SiteConfig["team"];
};

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col rounded-[30px] border border-steel-200 bg-gradient-to-b from-white to-steel-50 p-6 shadow-panel md:p-8"
    >
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-midnight-950 text-lg font-semibold tracking-[-0.02em] text-accent-300"
        >
          {member.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-steel-900">{member.name}</h3>
          <p className="mt-1 text-sm leading-6 text-steel-500">{member.role}</p>
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-steel-700">{member.summary}</p>

      <ul className="mt-6 space-y-2 border-t border-steel-200 pt-5 text-sm leading-6 text-steel-500">
        {member.background.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
        {member.focus.map((item) => (
          <span key={item} className="data-chip">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="scroll-mt-28 border-b border-steel-200 bg-white py-20 md:scroll-mt-32 md:py-24"
      aria-labelledby="team-heading"
    >
      <div className="shell">
        <SectionHeading id="team-heading" eyebrow={team.eyebrow} title={team.title} description={team.description} />

        <StaggerWrap className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerChildren={0.1}>
          {team.members.map((member) => (
            <StaggerItem key={member.name}>
              <MemberCard member={member} />
            </StaggerItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
