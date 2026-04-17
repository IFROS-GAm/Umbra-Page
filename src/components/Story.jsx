import clsx from "clsx";

import Button from "./Button";

const stackCardClasses = [
  "story-stack-card story-stack-card-primary",
  "story-stack-card story-stack-card-secondary",
  "story-stack-card story-stack-card-tertiary",
];

const stageCardClasses = [
  "story-stage-card story-stage-card-a scene-drift",
  "story-stage-card story-stage-card-b scene-drift-alt",
  "story-stage-card story-stage-card-c scene-drift-slow",
];

const stageSignalClasses = [
  "story-signal-line story-signal-line-a",
  "story-signal-line story-signal-line-b",
  "story-signal-line story-signal-line-c",
];

const Story = ({ content }) => {
  const repoUrl = "https://github.com/IFROS-GAm/Umbra";
  const points = content.points ?? [];

  return (
    <section
      id="repo"
      className="relative overflow-hidden bg-[#04040c] px-5 py-24 sm:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.18),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(148,163,184,0.1),transparent_24%),linear-gradient(180deg,rgba(4,4,12,0.98),rgba(5,6,16,1))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(480px,1fr)]">
          <div className="story-copy-panel p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-violet-300/18 bg-violet-300/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-violet-100/90">
                {content.kicker}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/48">
                Open build
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <h2 className="special-font max-w-4xl text-4xl font-zentry uppercase leading-[0.9] text-[#f4efff] md:text-6xl">
                  {content.title}
                </h2>
                <p className="mt-6 max-w-2xl font-circular-web text-base leading-7 text-white/68 md:text-lg">
                  {content.description}
                </p>
              </div>

              <div className="story-side-pod">
                <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/72">
                  Umbra shield
                </p>
                <p className="mt-4 text-6xl font-black tracking-[-0.08em] text-[#f3eeff]">
                  {String(points.length).padStart(2, "0")}
                </p>
                <p className="mt-3 font-circular-web text-sm leading-6 text-white/58">
                  Capas alineadas alrededor de privacidad, base propia e
                  interfaz consistente.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 [perspective:2200px]">
              {points.map((point, index) => (
                <article
                  key={point}
                  className={clsx(
                    stackCardClasses[index] ?? stackCardClasses[index % stackCardClasses.length]
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="story-stack-card-dot" />
                  </div>
                  <p className="mt-6 font-circular-web text-lg leading-8 text-white/86">
                    {point}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                id="repo-link"
                title={content.ctaTitle}
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                containerClass="cursor-pointer bg-[#f0edff] text-black shadow-[0_14px_35px_rgba(240,237,255,0.18)]"
              />
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-general text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:border-white/20 hover:text-white"
              >
                github.com/IFROS-GAm/Umbra
              </a>
            </div>
          </div>

          <div className="story-stage">
            <div className="story-stage-noise" />
            <div className="story-stage-aura" />
            <div className="story-stage-bloom story-stage-bloom-left" />
            <div className="story-stage-bloom story-stage-bloom-right" />
            <div className="story-stage-lens story-stage-lens-a" />
            <div className="story-stage-lens story-stage-lens-b" />
            <div className="story-energy-column" />

            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.22em] text-white/48">
              Private mesh
            </div>

            <div className="story-stage-meta">
              <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/72">
                Umbra relay
              </p>
              <p className="mt-3 font-circular-web text-sm leading-6 text-white/62">
                Open foundation for private communities, wrapped in a calmer and
                more dimensional visual stage.
              </p>
              <div className="story-stage-meta-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            {points.map((point, index) => (
              <div key={`${index}-${point}`} className="contents">
                <div
                  aria-hidden="true"
                  className={clsx(
                    stageSignalClasses[index] ??
                      stageSignalClasses[index % stageSignalClasses.length]
                  )}
                />
                <article
                  className={clsx(
                    stageCardClasses[index] ??
                      stageCardClasses[index % stageCardClasses.length]
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="story-stage-card-glyph" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-circular-web text-sm leading-6 text-white/82">
                    {point}
                  </p>
                </article>
              </div>
            ))}

            <div className="story-core-halo" aria-hidden="true" />
            <div className="story-orbit story-orbit-horizontal" aria-hidden="true" />
            <div className="story-orbit story-orbit-vertical" aria-hidden="true" />
            <div className="story-orbit story-orbit-diagonal" aria-hidden="true" />
            <div className="story-orbit story-orbit-inner" aria-hidden="true" />
            <div className="story-floor" aria-hidden="true" />

            <div className="story-core-cluster" aria-hidden="true">
              <div className="story-core-cube">
                <div className="story-core-face story-core-front-face">
                  <div className="story-core-sheen" />
                  <div className="story-core-orb" />
                </div>
                <div className="story-core-face story-core-top-face" />
                <div className="story-core-face story-core-side-face" />
              </div>

              <div className="story-core-pillar" />

              <div className="story-satellite story-satellite-a" />
              <div className="story-satellite story-satellite-b" />
              <div className="story-satellite story-satellite-c" />
            </div>

            <div className="story-command-dock">
              <div>
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
                  Umbra repo
                </p>
                <p className="mt-2 font-circular-web text-sm text-white/70">
                  Open foundation for private communities
                </p>
              </div>
              <div className="rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.22em] text-violet-200">
                live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
