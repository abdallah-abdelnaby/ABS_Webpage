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
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.brand.shortName}`,
  },
  description: siteConfig.metadata.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${plexMono.variable}`}>
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
