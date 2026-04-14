"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";

import type { HeroCta, NavItem, SiteConfig } from "@/config/site";

import { LogoMark } from "./logo-mark";

type SiteHeaderProps = {
  brand: SiteConfig["brand"];
  navigation: readonly NavItem[];
  cta: HeroCta;
  navigationLabel: string;
};

function normalizeHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function SiteHeader({ brand, navigation, cta, navigationLabel }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncLocationState = () => {
      if (window.location.pathname !== "/") {
        setActiveHref(window.location.pathname);
        return;
      }

      setActiveHref(window.location.hash || "");
      setIsOpen(false);
    };

    syncLocationState();
    window.addEventListener("hashchange", syncLocationState);
    window.addEventListener("popstate", syncLocationState);

    return () => {
      window.removeEventListener("hashchange", syncLocationState);
      window.removeEventListener("popstate", syncLocationState);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;

    const sections = navigation
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigation, pathname]);

  function handleNavigationClick(href: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) {
        setIsOpen(false);
        return;
      }

      if (pathname !== "/") {
        setIsOpen(false);
        return;
      }

      const target = document.getElementById(href.slice(1));

      if (!target) {
        setIsOpen(false);
        return;
      }

      event.preventDefault();
      setActiveHref(href);
      setIsOpen(false);

      const header = document.querySelector<HTMLElement>("[data-site-header]");
      const headerOffset = header?.offsetHeight ?? 96;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

      window.history.pushState(null, "", href);
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
    };
  }

  const baseLinkClass =
    "group relative text-sm font-medium text-steel-500 transition-colors duration-300 hover:text-steel-900 focus-visible:outline-none";

  return (
    <header
      data-site-header
      className={`sticky top-0 z-50 border-b border-steel-200 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-panel" : ""
      }`}
    >
      <div className="shell">
        <div className={`flex items-center justify-between gap-4 transition-[padding] duration-300 ${isScrolled ? "py-3" : "py-4"}`}>
          <Link href="/" aria-label={brand.shortName} className="min-w-0 shrink-0">
            <LogoMark brand={brand} theme="light" compact withBadge />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label={navigationLabel}>
            {navigation.map((item) => {
              const isActive = activeHref === item.href || activeHref === normalizeHref(item.href);

              return (
                <Link
                  key={item.href}
                  href={normalizeHref(item.href)}
                  className={`${baseLinkClass} ${isActive ? "text-steel-900" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleNavigationClick(item.href)}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-accent-400 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={normalizeHref(cta.href)}
              className="button-primary rounded-xl px-4 py-2.5"
            >
              {cta.label}
            </Link>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden ${
              isOpen
                ? "border-accent-400/50 bg-accent-500/10 text-accent-500"
                : "border-steel-200 bg-white text-steel-900 hover:border-accent-300/55 hover:text-accent-500"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-navigation" className="border-t border-steel-200 bg-white py-4 lg:hidden">
            <nav className="flex flex-col gap-2" aria-label={navigationLabel}>
              {navigation.map((item) => {
                const isActive = activeHref === item.href || activeHref === normalizeHref(item.href);

                return (
                  <Link
                    key={item.href}
                    href={normalizeHref(item.href)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-steel-100 text-steel-900 shadow-[inset_0_0_0_1px_rgba(47,111,237,0.2)]"
                        : "text-steel-600 hover:bg-steel-50 hover:text-steel-900"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={handleNavigationClick(item.href)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href={normalizeHref(cta.href)}
                className="button-primary mt-2 justify-center rounded-xl px-4 py-3"
                onClick={() => setIsOpen(false)}
              >
                {cta.label}
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
