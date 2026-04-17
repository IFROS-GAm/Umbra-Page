const toneMap = {
  violet: {
    beam: "via-violet-300/55",
    glow: "bg-violet-300/20",
    dot: "bg-violet-200",
  },
  sky: {
    beam: "via-sky-300/55",
    glow: "bg-sky-300/20",
    dot: "bg-sky-200",
  },
  mix: {
    beam: "via-fuchsia-300/55",
    glow: "bg-fuchsia-300/20",
    dot: "bg-fuchsia-200",
  },
};

const alignMap = {
  left: "left-[18%]",
  center: "left-1/2 -translate-x-1/2",
  right: "right-[18%]",
};

const SectionTransition = ({ tone = "violet", align = "center" }) => {
  const palette = toneMap[tone] ?? toneMap.violet;
  const position = alignMap[align] ?? alignMap.center;

  return (
    <div aria-hidden className="relative h-24 overflow-hidden bg-transparent">
      <div
        className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent ${palette.beam} to-transparent opacity-80`}
      />
      <div
        className={`absolute ${position} top-1/2 h-24 w-48 -translate-y-1/2 rounded-full ${palette.glow} blur-3xl`}
      />
      <div
        className={`absolute ${position} top-1/2 size-2 -translate-y-1/2 rounded-full ${palette.dot} shadow-[0_0_20px_currentColor]`}
      />
    </div>
  );
};

export default SectionTransition;
