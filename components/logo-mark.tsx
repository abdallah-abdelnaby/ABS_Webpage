import Image from "next/image";

import type { SiteConfig } from "@/config/site";

type LogoMarkProps = {
  brand: SiteConfig["brand"];
  theme?: "light" | "dark";
  compact?: boolean;
  src?: string;
  withBadge?: boolean;
};

export function LogoMark({
  brand,
  theme = "dark",
  compact = false,
  src = "/logo.png",
  withBadge = false,
}: LogoMarkProps) {
  const sizeClass = compact ? "h-[4rem] w-[14.5rem] md:h-[4.45rem] md:w-[16rem]" : "h-[4.25rem] w-[15.5rem] md:h-[5rem] md:w-[18rem]";
  const imageClass =
    theme === "dark"
      ? "object-contain drop-shadow-[0_10px_24px_rgba(2,8,23,0.28)]"
      : "object-contain";

  return (
    <div
      className={`relative ${sizeClass} ${
        withBadge ? "rounded-[22px] bg-white px-3 py-2" : ""
      }`}
    >
      <Image
        src={src}
        alt={brand.fullName}
        fill
        priority
        sizes={compact ? "(max-width: 768px) 190px, 216px" : "(max-width: 768px) 248px, 288px"}
        className={`${imageClass} ${withBadge ? "p-2" : ""}`}
      />
    </div>
  );
}
