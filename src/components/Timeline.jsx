import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const Timeline = ({ content }) => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const copyRef = useRef(null);
  const imageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = content.steps;
  const active = steps[activeIndex];
  const activeMilestone = active.milestone ?? active.year;
  const activeMarker = active.marker ?? String(activeIndex + 1).padStart(2, "0");

  useGSAP(
    () => {
      if (!sectionRef.current || !pinRef.current) return;

      const updateState = (nextProgress) => {
        const safeProgress = clamp(nextProgress, 0, 1);
        const nextIndex = clamp(
          Math.round(safeProgress * (steps.length - 1)),
          0,
          steps.length - 1
        );

        setProgress(safeProgress);
        setActiveIndex((current) =>
          current === nextIndex ? current : nextIndex
        );
      };

      updateState(0);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top+=140",
          end: () =>
            `+=${Math.max(window.innerHeight * (steps.length + 0.75), 2600)}`,
          pin: pinRef.current,
          scrub: 0.35,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateState(self.progress),
        });

        return () => {
          trigger.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef, dependencies: [steps.length] }
  );

  useGSAP(
    () => {
      if (!copyRef.current || !imageRef.current) return;

      gsap.fromTo(
        [copyRef.current, imageRef.current],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    },
    { dependencies: [activeIndex] }
  );

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative mt-20 overflow-hidden bg-[#05050d] lg:mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(96,165,250,0.14),transparent_26%),linear-gradient(180deg,rgba(5,5,13,0.98),rgba(7,7,18,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div
        ref={pinRef}
        className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="lg:hidden">
            <div className="max-w-xl">
              <p className="font-general text-[11px] uppercase tracking-[0.28em] text-violet-300">
                {content.kicker}
              </p>
              <h2 className="special-font mt-5 max-w-[11ch] text-[2.7rem] font-zentry uppercase leading-[0.9] text-[#dfdff2]">
                {content.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/62">
                {content.description}
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {steps.map((step, index) => {
                const stepMarker = step.marker ?? String(index + 1).padStart(2, "0");
                const stepMilestone = step.milestone ?? step.year;

                return (
                  <article
                    key={`${stepMarker}-${stepMilestone}`}
                    className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,16,40,0.96),rgba(8,8,18,0.98))] shadow-[0_22px_70px_rgba(0,0,0,0.32)]"
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] border border-violet-300/30 bg-violet-300/10 font-general text-[11px] uppercase tracking-[0.22em] text-violet-100 shadow-[0_12px_28px_rgba(168,85,247,0.14)]">
                          {stepMarker}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-300">
                            {step.sublabel}
                          </div>
                          <h3 className="special-font mt-2 text-[2.15rem] font-zentry uppercase leading-[0.92] text-[#f3f0ff]">
                            {stepMilestone}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-white/72">
                        {step.label}
                      </p>
                    </div>

                    <div className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-3">
                      <div className="mb-3 flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-3 py-2">
                        <span className="font-general text-[10px] uppercase tracking-[0.24em] text-white/55">
                          {stepMarker} / {String(steps.length).padStart(2, "0")}
                        </span>
                        <span className="size-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(168,85,247,0.85)]" />
                      </div>
                      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(168,85,247,0.16),transparent_34%),linear-gradient(180deg,rgba(14,14,30,0.94),rgba(7,7,18,0.98))] p-3">
                        <div className="absolute left-1/2 top-6 h-16 w-2/3 -translate-x-1/2 rounded-full bg-violet-300/15 blur-2xl" />
                        <img
                          src={step.image}
                          alt={`${stepMilestone} - ${step.sublabel}`}
                          className="relative z-10 h-auto w-full rounded-[1rem] object-contain"
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="hidden gap-10 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1fr)]">
            <div ref={copyRef} className="flex flex-col justify-center">
              <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-300">
                {content.kicker}
              </p>
              <h2 className="special-font mt-6 text-4xl font-zentry uppercase leading-[0.9] text-[#dfdff2] md:text-6xl">
                {content.title}
              </h2>
              <p className="mt-6 max-w-xl font-circular-web text-base leading-7 text-white/60 md:text-lg">
                {content.description}
              </p>

              <div className="mt-10 flex flex-wrap items-start gap-4">
                <div className="flex size-16 items-center justify-center rounded-[1.4rem] border border-violet-300/25 bg-violet-300/10 font-general text-sm uppercase tracking-[0.22em] text-violet-100 shadow-[0_16px_40px_rgba(168,85,247,0.16)]">
                  {activeMarker}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-300">
                    {active.sublabel}
                  </div>
                  <div className="special-font mt-3 max-w-2xl text-[clamp(2.7rem,5vw,4.8rem)] font-zentry uppercase leading-[0.92] text-[#f3f0ff]">
                    {activeMilestone}
                  </div>
                </div>
              </div>

              <div className="mt-8 w-[min(560px,84vw)] rounded-full bg-white/10">
                <div
                  className="relative h-[3px] rounded-full bg-gradient-to-r from-violet-300 via-[#dfdff2] to-sky-300"
                  style={{ width: `${Math.max(Math.round(progress * 100), 5)}%` }}
                >
                  <div className="absolute right-[-7px] top-1/2 size-4 -translate-y-1/2 rounded-full bg-[#dfdff2] shadow-[0_0_20px_rgba(255,255,255,0.85),0_0_45px_rgba(96,165,250,0.35)]" />
                </div>
              </div>

              <div className="mt-8 flex min-h-28 max-w-xl flex-col gap-3">
                <div className="font-circular-web text-lg leading-7 text-white/75">
                  {active.label}
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {steps.map((step, index) => {
                  const stepMarker = step.marker ?? String(index + 1).padStart(2, "0");
                  const stepMilestone = step.milestone ?? step.year;

                  return (
                    <div
                      key={`${stepMarker}-${stepMilestone}`}
                      className={`rounded-[1.25rem] border px-4 py-3 transition-all duration-200 ${
                        index === activeIndex
                          ? "border-violet-300/40 bg-violet-300/10 text-violet-100 shadow-[0_16px_40px_rgba(168,85,247,0.14)]"
                          : "border-white/10 bg-white/5 text-white/55"
                      }`}
                    >
                      <div className="font-general text-[9px] uppercase tracking-[0.22em] opacity-70">
                        {stepMarker}
                      </div>
                      <div className="mt-2 font-circular-web text-sm uppercase tracking-[0.06em]">
                        {stepMilestone}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div ref={imageRef} className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.18),transparent_55%)] blur-3xl" />
              <div className="relative flex min-h-[26rem] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,30,0.94),rgba(7,7,18,0.98))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:min-h-[34rem] md:p-6">
                <div className="absolute left-1/2 top-10 h-28 w-3/4 -translate-x-1/2 rounded-full bg-violet-300/15 blur-3xl" />
                <img
                  src={active.image}
                  alt={`${activeMilestone} - ${active.sublabel}`}
                  className="relative z-10 max-h-full w-full rounded-[1.4rem] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
