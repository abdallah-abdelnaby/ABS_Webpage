import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.brand.shortName}`,
  },
  description: siteConfig.metadata.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.brand.fullName,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    locale: "en_GB",
    images: [{ url: "/logo.png", width: 730, height: 365, alt: siteConfig.brand.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: ["/logo.png"],
  },
};

const { company } = siteConfig;

// Structured data so search engines can show the company correctly.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: siteConfig.brand.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  email: company.email,
  vatID: company.vatId,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: "37075",
    addressLocality: "Göttingen",
    addressCountry: "DE",
  },
  sameAs: [
    "https://www.linkedin.com/company/abs-alternative-bold-solutions-ug-haftungsbeschr%C3%A4nkt",
    "https://journal.absolution-gmbh.com/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-[80] rounded-xl bg-accent-500 px-3 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed"
        >
          {siteConfig.a11y.skipToContentLabel}
        </a>

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader
            brand={siteConfig.brand}
            navigation={siteConfig.navigation}
            cta={siteConfig.hero.ctas[0]}
            navigationLabel={siteConfig.a11y.primaryNavigationLabel}
          />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <SiteFooter
            brand={siteConfig.brand}
            footer={siteConfig.footer}
            legal={siteConfig.legal}
            navigationLabel={siteConfig.a11y.legalNavigationLabel}
          />
        </div>
      </body>
    </html>
  );
}
