import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.legal.pageTitle,
  description: `${siteConfig.legal.pageTitle} - ${siteConfig.brand.fullName}`,
};

export default function ImpressumPage() {
  return (
    <section className="bg-steel-50 py-20 md:py-24" aria-labelledby="impressum-heading">
      <div className="shell max-w-5xl">
        <article className="surface-card overflow-hidden p-6 md:p-10">
          <header className="mb-10 border-b border-steel-200 pb-8">
            <p className="eyebrow text-steel-500">Legal</p>
            <h1 id="impressum-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-steel-900 md:text-4xl">
              {siteConfig.legal.pageTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-steel-500">
              Registered company details for ABS - Alternative Bold Solutions UG (haftungsbeschränkt).
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="surface-card-muted p-6">
              <h2 className="text-lg font-semibold text-steel-900">{siteConfig.legal.labels.company}</h2>
              <p className="mt-4 text-base leading-7 text-steel-500">{siteConfig.legal.companyName}</p>

              <h3 className="eyebrow mt-6 text-steel-500">{siteConfig.legal.labels.address}</h3>
              <address className="mt-3 not-italic text-base leading-7 text-steel-500">
                <p>{siteConfig.legal.address.street}</p>
                <p>{siteConfig.legal.address.postalCodeCity}</p>
                <p>{siteConfig.legal.address.country}</p>
              </address>
            </section>

            <section className="surface-card-muted p-6">
              <h2 className="text-lg font-semibold text-steel-900">{siteConfig.legal.labels.registrationData}</h2>
              <dl className="mt-4 space-y-3">
                {siteConfig.legal.registration.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-steel-200 bg-white px-4 py-3">
                    <dt className="eyebrow text-steel-500">{item.label}</dt>
                    <dd className="mt-2 text-base font-medium text-steel-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
