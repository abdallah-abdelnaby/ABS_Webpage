function MiniBars({ widths }: { widths: string[] }) {
  return (
    <div className="space-y-2.5">
      {widths.map((width, index) => (
        <div key={`${width}-${index}`} className="h-2 rounded-full bg-white/12">
          <div className={`h-full rounded-full bg-gradient-to-r from-accent-400/85 to-white/50 ${width}`} />
        </div>
      ))}
    </div>
  );
}

function DotField() {
  return (
    <>
      <span className="signal-dot absolute left-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-accent-400 shadow-[0_0_24px_rgba(77,134,255,0.8)]" />
      <span className="signal-dot absolute left-[38%] top-[36%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
      <span className="signal-dot absolute right-[28%] top-[24%] h-2.5 w-2.5 rounded-full bg-accent-300 shadow-[0_0_24px_rgba(103,232,249,0.7)]" />
      <span className="signal-dot absolute bottom-[26%] left-[24%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
      <span className="signal-dot absolute bottom-[20%] right-[20%] h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_26px_rgba(77,134,255,0.75)]" />
    </>
  );
}

export function HeroArchitectureIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.02/1] overflow-hidden rounded-[34px] border border-white/10 bg-midnight-900 px-6 pb-6 pt-5 shadow-panelStrong"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(77,134,255,0.24),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(77,134,255,0.16),transparent_22%),radial-gradient(circle_at_78%_76%,rgba(26,188,156,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 grid-dark opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.02),transparent_36%)]" />

      <div className="relative h-full min-h-[31rem]">
        <div className="absolute left-[4%] top-[6%] w-[34%] rounded-[26px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm shadow-[0_18px_50px_-28px_rgba(2,8,23,0.85)]">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
          <MiniBars widths={["w-[74%]", "w-full", "w-[62%]", "w-[84%]"]} />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
            <div className="h-16 rounded-2xl border border-accent-400/20 bg-accent-400/10" />
            <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
          </div>
        </div>

        <div className="absolute right-[3%] top-[4%] w-[29%] rounded-[28px] border border-white/10 bg-midnight-800/90 p-4 shadow-[0_25px_80px_-44px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 rounded-[22px] border border-white/10 bg-white/[0.05]" />
            <div className="h-20 rounded-[22px] border border-accent-400/20 bg-accent-400/10" />
            <div className="col-span-2 h-16 rounded-[22px] border border-white/10 bg-white/[0.05]" />
          </div>
          <div className="mt-4 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-300" />
            <span className="h-2.5 w-14 rounded-full bg-white/15" />
            <span className="h-2.5 flex-1 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="absolute left-[8%] top-[34%] h-px w-[28%] bg-gradient-to-r from-transparent via-accent-400/75 to-white/25 tech-line" />
        <div className="absolute right-[19%] top-[34%] h-px w-[22%] bg-gradient-to-r from-white/25 via-accent-300/70 to-transparent tech-line" />
        <div className="absolute left-1/2 top-[20%] h-[52%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-400/60 to-transparent tech-line" />

        <div className="absolute left-1/2 top-[49%] z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_38%,rgba(5,10,22,0.14)_62%,transparent_64%)] shadow-[0_0_120px_-38px_rgba(77,134,255,0.5)]">
          <div className="absolute inset-[18px] rounded-full border border-accent-400/30" />
          <div className="absolute inset-[38px] rounded-full border border-white/12" />
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-accent-400/30 bg-accent-400/12 shadow-[0_0_38px_rgba(77,134,255,0.28)]" />
          <div className="absolute left-[12%] top-1/2 h-px w-[24%] -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" />
          <div className="absolute right-[12%] top-1/2 h-px w-[24%] -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" />
          <div className="absolute left-1/2 top-[12%] h-[24%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-400/70 to-transparent" />
          <div className="absolute left-1/2 bottom-[12%] h-[24%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-400/70 to-transparent" />
        </div>

        <div className="absolute bottom-[14%] left-[5%] w-[37%] rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm shadow-[0_18px_50px_-28px_rgba(2,8,23,0.85)]">
          <div className="mb-4 flex gap-3">
            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.04]" />
            <div className="h-12 w-12 rounded-2xl border border-accent-400/20 bg-accent-400/10" />
            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.04]" />
          </div>
          <MiniBars widths={["w-[88%]", "w-[68%]", "w-[78%]"]} />
        </div>

        <div className="absolute bottom-[10%] right-[4%] w-[34%] rounded-[28px] border border-white/10 bg-midnight-800/90 p-5 shadow-[0_25px_80px_-44px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`h-12 rounded-2xl border ${index === 1 || index === 4 ? "border-accent-400/25 bg-accent-400/10" : "border-white/10 bg-white/[0.05]"}`}
              />
            ))}
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-accent-400/70 to-transparent tech-line" />
          <div className="mt-4 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_18px_rgba(77,134,255,0.65)]" />
            <div className="h-2 flex-1 rounded-full bg-white/10">
              <div className="h-full w-[61%] rounded-full bg-gradient-to-r from-accent-400 to-white/55" />
            </div>
          </div>
        </div>

        <DotField />
      </div>
    </div>
  );
}

export function EngagementIllustration({
  variant,
  label,
}: {
  variant: "digitization" | "network";
  label: string;
}) {
  const isDigitization = variant === "digitization";

  return (
    <div aria-hidden="true" className="relative h-56 overflow-hidden rounded-[28px] border border-white/10 bg-midnight-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(77,134,255,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 grid-dark opacity-35" />
      <span className="data-chip-dark absolute left-6 top-6">{label}</span>

      {isDigitization ? (
        <>
          <div className="absolute left-10 top-14 h-28 w-[5.5rem] rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_24px_60px_-35px_rgba(0,0,0,0.8)]" />
          <div className="absolute left-16 top-10 h-28 w-[5.5rem] rounded-2xl border border-white/12 bg-white/[0.1]" />
          <div className="absolute left-24 top-[4.5rem] h-28 w-[5.5rem] rounded-2xl border border-accent-400/30 bg-accent-400/10" />
          <div className="absolute left-[11rem] top-[8.4rem] h-px w-36 bg-gradient-to-r from-accent-400/70 to-transparent tech-line" />
          <span className="signal-dot absolute left-[19.5rem] top-[7.9rem] h-3 w-3 rounded-full bg-accent-400" />
          <div className="absolute right-10 top-14 w-40 rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
            <MiniBars widths={["w-[72%]", "w-full", "w-[58%]"]} />
          </div>
        </>
      ) : (
        <>
          <div className="absolute left-12 top-20 h-16 w-16 rounded-2xl border border-white/12 bg-white/[0.08]" />
          <div className="absolute left-40 top-12 h-16 w-16 rounded-2xl border border-accent-400/30 bg-accent-400/12" />
          <div className="absolute left-40 top-28 h-16 w-16 rounded-2xl border border-white/12 bg-white/[0.06]" />
          <div className="absolute right-16 top-20 h-16 w-16 rounded-2xl border border-white/12 bg-white/[0.08]" />
          <div className="absolute left-[6rem] top-[7.8rem] h-px w-20 bg-gradient-to-r from-white/20 via-accent-400/70 to-white/20" />
          <div className="absolute left-[11rem] top-[5.8rem] h-14 w-px bg-gradient-to-b from-white/20 via-accent-400/70 to-white/20" />
          <div className="absolute left-[13rem] top-[7.8rem] h-px w-44 bg-gradient-to-r from-white/20 via-accent-400/70 to-white/20 tech-line" />
          <span className="signal-dot absolute left-[8.6rem] top-[7.4rem] h-3 w-3 rounded-full bg-accent-400" />
          <span className="signal-dot absolute right-[7.5rem] top-[7.4rem] h-3 w-3 rounded-full bg-accent-400" />
          <div className="absolute bottom-8 right-10 w-48 rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-2xl border border-white/10 bg-white/[0.06]" />
              <div className="h-10 rounded-2xl border border-accent-400/30 bg-accent-400/12" />
              <div className="h-10 rounded-2xl border border-white/10 bg-white/[0.06]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
