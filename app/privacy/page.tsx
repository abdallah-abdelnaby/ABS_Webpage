import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.privacy.pageTitle,
  description: `${siteConfig.privacy.pageTitle} - ${siteConfig.brand.fullName}`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-steel-50 py-20 md:py-24" aria-labelledby="privacy-heading">
      <div className="shell max-w-5xl">
        <article className="surface-card overflow-hidden p-6 md:p-10">
          <header className="mb-10 border-b border-steel-200 pb-8">
            <p className="eyebrow text-steel-500">Legal</p>
            <h1 id="privacy-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-steel-900 md:text-4xl">
              {siteConfig.privacy.pageTitle}
            </h1>
            <p className="mt-3 text-sm text-steel-400">
              {siteConfig.privacy.lastUpdatedLabel}: {siteConfig.privacy.lastUpdatedValue}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-steel-500">{siteConfig.privacy.intro}</p>
          </header>

          <div className="space-y-8">
            {siteConfig.privacy.sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-steel-900">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-steel-500">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
