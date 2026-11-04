import type { Metadata } from "next";

import { siteConfig, type LegalSection } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy / Datenschutz",
  description: `Privacy policy (Datenschutzerklärung) of ${siteConfig.brand.fullName}`,
  alternates: { canonical: "/privacy" },
};

function PolicyBody({
  id,
  lang,
  heading,
  updatedLabel,
  updated,
  intro,
  sections,
}: {
  id: string;
  lang: string;
  heading: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
}) {
  return (
    <section id={id} lang={lang} className="scroll-mt-28 space-y-8" aria-labelledby={`${id}-heading`}>
      <div className="border-b border-steel-200 pb-6">
        <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-[-0.03em] text-steel-900 md:text-3xl">
          {heading}
        </h2>
        <p className="mt-3 text-sm text-steel-400">
          {updatedLabel}: {updated}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-steel-500">{intro}</p>
      </div>
      {sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-steel-900">{section.title}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-steel-500">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </section>
  );
}

export default function PrivacyPage() {
  const { privacy } = siteConfig;

  return (
    <section className="bg-steel-50 py-20 md:py-24" aria-labelledby="privacy-heading">
      <div className="shell max-w-5xl">
        <article className="surface-card overflow-hidden p-6 md:p-10">
          <header className="mb-10 border-b border-steel-200 pb-8">
            <p className="eyebrow text-steel-500">Legal</p>
            <h1 id="privacy-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-steel-900 md:text-4xl">
              Privacy Policy / Datenschutzerklärung
            </h1>
            <p className="mt-4 text-sm text-steel-500">
              <a href="#en" className="underline underline-offset-4">English</a>
              {" · "}
              <a href="#de" className="underline underline-offset-4">Deutsch</a>
            </p>
          </header>

          <div className="space-y-16">
            <PolicyBody
              id="en"
              lang="en"
              heading="Privacy Policy"
              updatedLabel="Last updated"
              updated={privacy.lastUpdated.en}
              intro={privacy.en.intro}
              sections={privacy.en.sections}
            />
            <PolicyBody
              id="de"
              lang="de"
              heading="Datenschutzerklärung"
              updatedLabel="Stand"
              updated={privacy.lastUpdated.de}
              intro={privacy.de.intro}
              sections={privacy.de.sections}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
