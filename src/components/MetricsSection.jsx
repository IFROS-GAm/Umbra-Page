import { useEffect, useRef, useState } from "react";

const toneStyles = {
  warm: {
    fill:
      "bg-[linear-gradient(90deg,rgba(248,113,113,0.92),rgba(251,191,36,0.86),rgba(255,255,255,0.92))]",
    glow: "shadow-[0_0_28px_rgba(251,191,36,0.18)]",
    dot: "bg-amber-300",
  },
  cool: {
    fill:
      "bg-[linear-gradient(90deg,rgba(76,29,149,0.9),rgba(167,139,250,0.94),rgba(224,231,255,0.95))]",
    glow: "shadow-[0_0_28px_rgba(167,139,250,0.22)]",
    dot: "bg-violet-300",
  },
  neutral: {
    fill:
      "bg-[linear-gradient(90deg,rgba(71,85,105,0.92),rgba(148,163,184,0.88),rgba(241,245,249,0.9))]",
    glow: "shadow-[0_0_24px_rgba(148,163,184,0.18)]",
    dot: "bg-slate-300",
  },
};

const MetricBar = ({ bar, index, cardIndex, active }) => {
  const tone = toneStyles[bar.tone] ?? toneStyles.cool;
  const delay = `${cardIndex * 180 + index * 140}ms`;

  return (
    <div
      className="rounded-[1.35rem] border border-white/8 bg-black/20 p-4 backdrop-blur-sm"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`size-2 rounded-full ${tone.dot}`} />
            <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/46">
              {bar.label}
            </p>
          </div>
        </div>
        <p className="shrink-0 font-circular-web text-sm text-[#f4efff]">{bar.display}</p>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`h-full rounded-full ${tone.fill} ${tone.glow} transition-[width] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]`}
          style={{
            width: active ? `${bar.value}%` : "0%",
            transitionDelay: delay,
          }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between font-general text-[10px] uppercase tracking-[0.2em] text-white/34">
        <span>0</span>
        <span>{bar.axisLabel ?? "Objetivo"}</span>
      </div>
    </div>
  );
};

const MetricsSection = ({ content }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.28 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metricas"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#04050b] px-5 py-24 sm:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(139,92,246,0.14),transparent_28%),linear-gradient(180deg,rgba(4,5,11,0.96),rgba(7,7,18,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(300px,0.48fr)] xl:items-end">
          <div>
            <p className="font-general text-xs uppercase tracking-[0.3em] text-violet-300">
              {content.kicker}
            </p>
            <h2 className="special-font mt-5 max-w-[12ch] text-[clamp(2.9rem,6vw,5.3rem)] font-zentry uppercase leading-[0.88] text-[#f6f1ff]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl font-circular-web text-base leading-7 text-white/68 md:text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {content.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-3 font-circular-web text-base text-[#f4efff]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {content.cards.map((card, cardIndex) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,18,31,0.96),rgba(9,10,18,0.98))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-200/18 bg-violet-200/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-violet-100/84">
                  {card.eyebrow}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/54">
                  {card.unit}
                </span>
              </div>

              <h3 className="mt-6 max-w-[16ch] font-circular-web text-[1.7rem] leading-[1.05] text-[#f6f1ff] md:text-[2rem]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-2xl font-circular-web text-sm leading-6 text-white/56 md:text-base md:leading-7">
                {card.note}
              </p>

              <div className="mt-8 space-y-4">
                {card.bars.map((bar, index) => (
                  <MetricBar
                    key={`${card.title}-${bar.label}`}
                    bar={bar}
                    index={index}
                    cardIndex={cardIndex}
                    active={isVisible}
                  />
                ))}
              </div>

              <div className="mt-7 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/38">
                  {content.summaryLabel}
                </p>
                <p className="mt-3 font-circular-web text-sm leading-6 text-white/68 md:text-base">
                  {card.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
