import Image from "next/image";

import type { SiteConfig } from "@/config/site";

type LogoMarkProps = {
  brand: SiteConfig["brand"];
  theme?: "light" | "dark";
  compact?: boolean;
  priority?: boolean;
  src?: string;
  withBadge?: boolean;
};

export function LogoMark({
  brand,
  theme = "dark",
  compact = false,
  priority = false,
  src = "/logo.png",
  withBadge = false,
}: LogoMarkProps) {
  // Both supplied logo assets contain transparent space on their right and
  // bottom edges. Size the visible artwork instead of reserving that empty
  // canvas in the header/footer.
  const sizeClass = compact
    ? "h-12 w-[6.25rem] md:h-[3.25rem] md:w-[6.75rem]"
    : "h-[4.5rem] w-[9.35rem] md:h-[5rem] md:w-[10.4rem]";
  const imageClass =
    theme === "dark"
      ? "object-contain drop-shadow-[0_10px_24px_rgba(2,8,23,0.28)]"
      : "object-contain";

  return (
    <div
      className={`relative overflow-hidden ${sizeClass} ${
        withBadge ? "rounded-xl bg-white" : ""
      }`}
    >
      <Image
        src={src}
        alt={brand.fullName}
        width={730}
        height={365}
        priority={priority}
        sizes={compact ? "108px" : "166px"}
        className={imageClass}
        style={{
          position: "absolute",
          left: "-19.3%",
          top: "-24.8%",
          height: "146%",
          width: "141%",
          maxWidth: "none",
          objectFit: "fill",
          objectPosition: "left top",
        }}
      />
    </div>
  );
}
