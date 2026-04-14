import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  className,
  tone = "dark",
}: SectionHeadingProps) {
  const eyebrowClass = tone === "light" ? "text-white/55" : "text-steel-500";
  const titleClass = tone === "light" ? "text-white" : "text-steel-900";
  const descriptionClass = tone === "light" ? "text-white/70" : "text-steel-500";

  return (
    <div className={`mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between ${className ?? ""}`}>
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p> : null}
        <h2 id={id} className={`text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl ${titleClass}`}>
          {title}
        </h2>
        <p className={`max-w-2xl text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
