import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.legal.pageTitle,
  description: `${siteConfig.legal.pageTitle} – ${siteConfig.brand.fullName}`,
  alternates: { canonical: "/impressum" },
};

const { company } = siteConfig;

type Row = { label: string; value: React.ReactNode };

function DetailList({ rows }: { rows: Row[] }) {
  return (
    <dl className="mt-4 space-y-3">
      {rows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-steel-200 bg-white px-4 py-3">
          <dt className="eyebrow text-steel-500">{row.label}</dt>
          <dd className="mt-2 text-base font-medium leading-7 text-steel-900">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const address = (country: string) => (
  <>
    {company.name}
    <br />
    {company.street}
    <br />
    {company.postalCodeCity}
    <br />
    {country}
  </>
);

const email = (
  <a href={`mailto:${company.email}`} className="text-accent-600 underline underline-offset-4">
    {company.email}
  </a>
);

export default function ImpressumPage() {
  return (
    <section className="bg-steel-50 py-20 md:py-24" aria-labelledby="impressum-heading">
      <div className="shell max-w-5xl">
        <article className="surface-card overflow-hidden p-6 md:p-10">
          <header className="mb-10 border-b border-steel-200 pb-8">
            <p className="eyebrow text-steel-500">Legal</p>
            <h1 id="impressum-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-steel-900 md:text-4xl">
              Impressum
            </h1>
            <p className="mt-4 text-sm text-steel-500">
              <a href="#de" className="underline underline-offset-4">Deutsch</a>
              {" · "}
              <a href="#en" className="underline underline-offset-4">English</a>
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <section id="de" lang="de" className="surface-card-muted scroll-mt-28 p-6">
              <h2 className="text-lg font-semibold text-steel-900">Angaben gemäß § 5 DDG</h2>
              <DetailList
                rows={[
                  { label: "Anbieter", value: address("Deutschland") },
                  { label: "Vertreten durch", value: `${company.managingDirector} (Geschäftsführer)` },
                  { label: "Kontakt", value: <>E-Mail: {email}</> },
                  { label: "Registereintrag", value: `${company.registerCourt}, ${company.registerNumber}` },
                  { label: "Umsatzsteuer-ID (§ 27a UStG)", value: company.vatId },
                  {
                    label: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
                    value: `${company.managingDirector}, ${company.street}, ${company.postalCodeCity}`,
                  },
                ]}
              />
              <p className="mt-5 text-sm leading-6 text-steel-500">
                Verbraucherstreitbeilegung: Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section id="en" lang="en" className="surface-card-muted scroll-mt-28 p-6">
              <h2 className="text-lg font-semibold text-steel-900">Legal notice (§ 5 DDG)</h2>
              <DetailList
                rows={[
                  { label: "Provider", value: address("Germany") },
                  { label: "Represented by", value: `${company.managingDirector} (managing director)` },
                  { label: "Contact", value: <>E-mail: {email}</> },
                  { label: "Commercial register", value: `${company.registerCourt}, ${company.registerNumber}` },
                  { label: "VAT ID (§ 27a UStG)", value: company.vatId },
                  {
                    label: "Responsible for content (§ 18(2) MStV)",
                    value: `${company.managingDirector}, ${company.street}, ${company.postalCodeCity}`,
                  },
                ]}
              />
              <p className="mt-5 text-sm leading-6 text-steel-500">
                Consumer dispute resolution: we are neither willing nor obliged to take part in dispute resolution
                proceedings before a consumer arbitration board.
              </p>
            </section>
          </div>

          <p className="mt-8 text-sm text-steel-500">
            See also our{" "}
            <Link href="/privacy" className="text-accent-600 underline underline-offset-4">
              privacy policy / Datenschutzerklärung
            </Link>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
