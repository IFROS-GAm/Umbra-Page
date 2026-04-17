import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroShowcase = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef(null);
  const selectorRefs = useRef([]);

  const activeCard = content.cards[activeIndex];

  useGSAP(
    () => {
      if (!stageRef.current) return;

      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 26, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    },
    { dependencies: [activeIndex] }
  );

  useGSAP(() => {
    selectorRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 0, x: -18 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        }
      );
    });
  }, []);

  const handleStageMove = (event) => {
    if (!stageRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    gsap.to(stageRef.current, {
      rotateX: (relativeY - 0.5) * 8,
      rotateY: (relativeX - 0.5) * -10,
      transformPerspective: 1400,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleStageLeave = () => {
    if (!stageRef.current) return;

    gsap.to(stageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#03050d] px-5 py-24 sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.13),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(96,165,250,0.12),transparent_24%),linear-gradient(180deg,rgba(3,5,13,0.98),rgba(5,7,18,1))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-1/2 top-0 h-36 w-[55%] -translate-x-1/2 rounded-full bg-violet-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 rounded-[2.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,12,28,0.96),rgba(7,10,22,0.92))] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.34)] backdrop-blur-sm lg:grid-cols-[minmax(320px,0.42fr)_minmax(0,1fr)] lg:p-8">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-300">
                {content.kicker}
              </p>
              <h2 className="special-font mt-6 text-4xl font-zentry uppercase leading-[0.9] text-[#dfdff2] md:text-6xl">
                {content.title}
              </h2>
              <p className="mt-6 max-w-xl font-circular-web text-base leading-7 text-white/60 md:text-lg">
                {content.description}
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {content.cards.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.title}
                    ref={(node) => {
                      selectorRefs.current[index] = node;
                    }}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-[1.45rem] border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-violet-300/35 bg-violet-300/[0.09] shadow-[0_18px_50px_rgba(139,92,246,0.16)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-full border font-general text-[11px] tracking-[0.24em] ${
                          isActive
                            ? "border-violet-300/35 bg-violet-300/15 text-violet-200"
                            : "border-white/10 bg-black/30 text-white/45"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-300">
                          Umbra
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#dfdff2]">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-circular-web text-sm leading-6 text-white/55">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-12 top-6 h-24 rounded-full bg-sky-300/10 blur-3xl" />
            <div
              ref={stageRef}
              onMouseMove={handleStageMove}
              onMouseLeave={handleStageLeave}
              className="relative overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,13,29,0.98),rgba(5,8,19,0.95))] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.38)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />

              <div className="relative rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 md:p-5">
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/60 backdrop-blur-md">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(content.cards.length).padStart(2, "0")}
                </div>

                <div className="flex min-h-[420px] items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_18%,rgba(196,181,253,0.18),transparent_26%),radial-gradient(circle_at_80%_82%,rgba(96,165,250,0.16),transparent_30%),linear-gradient(180deg,rgba(14,18,40,0.96),rgba(8,10,24,0.98))] p-4 md:min-h-[620px] md:p-6">
                  <img
                    src={activeCard.image}
                    alt={activeCard.alt}
                    className="max-h-full w-full rounded-[1.35rem] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
                <div className="rounded-[1.45rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-300">
                    Umbra
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#dfdff2] md:text-4xl">
                    {activeCard.title}
                  </h3>
                  <p className="mt-3 max-w-2xl font-circular-web text-base leading-7 text-white/68">
                    {activeCard.description}
                  </p>
                </div>

                <div className="rounded-[1.45rem] border border-sky-300/15 bg-sky-300/[0.06] p-5">
                  <p className="font-general text-[10px] uppercase tracking-[0.24em] text-sky-200">
                    Umbra
                  </p>
                  <p className="mt-3 text-5xl font-semibold leading-none text-[#dfdff2]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    {content.cards.map((item, index) => (
                      <span
                        key={item.title}
                        className={`h-2 flex-1 rounded-full ${
                          index === activeIndex
                            ? "bg-sky-200"
                            : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
