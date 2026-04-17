import Footer from "./Footer";

const InfoPage = ({ content, footerContent }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(139,92,246,0.12),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.08),transparent_20%),linear-gradient(180deg,rgba(5,7,18,1),rgba(7,9,20,1))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:44px_44px]" />

      <section id="inicio" className="relative z-10 px-5 pb-12 pt-32 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-200/70">
              {content.kicker}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.92] text-[#f0edff] md:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {content.description}
            </p>
          </div>

          <div className="mt-10 max-w-sm rounded-[1.55rem] border border-white/10 bg-white/[0.04] px-5 py-5">
            <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
              {content.updatedLabel}
            </p>
            <p className="mt-3 text-xl font-semibold text-[#f0edff]">
              {content.updatedValue}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-6">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,30,0.92),rgba(7,9,20,0.98))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)] md:p-7"
              >
                <h2 className="text-2xl font-semibold text-[#f0edff] md:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-circular-web text-base leading-7 text-white/62"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-4 font-circular-web text-sm leading-6 text-white/72"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,12,26,0.96),rgba(6,8,18,1))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)]">
              <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-200/72">
                {content.aside.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[#f0edff]">
                {content.aside.title}
              </h2>
              <p className="mt-4 font-circular-web text-sm leading-6 text-white/60">
                {content.aside.description}
              </p>

              <div className="mt-6 space-y-3">
                {content.aside.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-4 font-circular-web text-sm leading-6 text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {content.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {content.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 font-general text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:border-white/20 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <Footer content={footerContent} />
    </main>
  );
};

export default InfoPage;
