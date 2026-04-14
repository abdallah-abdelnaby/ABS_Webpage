import Link from "next/link";

import type { SiteConfig } from "@/config/site";

import { LogoMark } from "./logo-mark";

type SiteFooterProps = {
  brand: SiteConfig["brand"];
  footer: SiteConfig["footer"];
  legal: SiteConfig["legal"];
  navigationLabel: string;
};

function normalizeHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function SiteFooter({ brand, footer, legal, navigationLabel }: SiteFooterProps) {
  return (
    <footer className="relative overflow-hidden bg-[#050b15] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(77,134,255,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 grid-dark opacity-15" />

      <div className="shell relative py-14 md:py-16">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <LogoMark brand={brand} theme="dark" src="/logo-footer.png" />
            <p className="max-w-md text-sm leading-7 text-white/62">{footer.description}</p>
            <p className="text-sm text-white/48">
              {brand.fullName} · {footer.rightsLabel}
            </p>
          </div>

          <nav aria-label={navigationLabel} className="space-y-4">
            <p className="eyebrow text-white/40">Quick links</p>
            <ul className="space-y-3 text-sm text-white/68">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={normalizeHref(link.href)} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <p className="eyebrow text-white/40">Services</p>
            <ul className="space-y-3 text-sm text-white/68">
              {footer.serviceLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={normalizeHref(link.href)} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <p className="eyebrow text-white/40">Registered office</p>
              <address className="mt-3 not-italic text-sm leading-7 text-white/68">
                <p>{legal.companyName}</p>
                <p>{legal.address.street}</p>
                <p>{legal.address.postalCodeCity}</p>
                <p>{legal.address.country}</p>
              </address>
            </div>

            <div>
              <p className="eyebrow text-white/40">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-white/68">
                {footer.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
