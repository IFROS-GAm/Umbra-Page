import Footer from "./Footer";

const localeLabels = {
  es: {
    toc: "Contenido",
    important: "Nota importante",
    effective: "En vigor",
    updated: "Ultima actualizacion",
    summary: "Resumen rapido",
    links: "Enlaces relacionados",
  },
  en: {
    toc: "Contents",
    important: "Important note",
    effective: "Effective",
    updated: "Last updated",
    summary: "Quick summary",
    links: "Related links",
  },
  fr: {
    toc: "Contenu",
    important: "Note importante",
    effective: "Date d'effet",
    updated: "Derniere mise a jour",
    summary: "Resume rapide",
    links: "Liens utiles",
  },
};

const slugify = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const TermsPage = ({
  content,
  footerContent,
  currentLanguage = "es",
  onLanguageChange,
}) => {
  const labels = localeLabels[currentLanguage] ?? localeLabels.es;
  const sections = content.sections ?? [];
  const tocItems =
    content.toc?.map((item) => ({
      ...item,
      id: item.id ?? slugify(item.title),
    })) ??
    sections.map((section) => ({
      id: section.id ?? slugify(section.title),
      title: section.tocTitle ?? section.title.replace(/^\d+\.\s*/, ""),
    }));

  const introParagraphs =
    content.introParagraphs?.length ? content.introParagraphs : [content.description];

  const metaItems = [
    content.effectiveValue
      ? {
          label: content.effectiveLabel ?? labels.effective,
          value: content.effectiveValue,
        }
      : null,
    content.updatedValue
      ? {
          label: content.updatedLabel ?? labels.updated,
          value: content.updatedValue,
        }
      : null,
  ].filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-[#f5f1ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,72,255,0.18),transparent_28%),radial-gradient(circle_at_82%_9%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_50%_24%,rgba(117,58,255,0.12),transparent_24%),linear-gradient(180deg,#0a0a12_0%,#06060c_52%,#040408_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-position:center_center] [background-size:96px_96px]" />

      <section className="relative z-10 px-5 pb-12 pt-32 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-[1180px]">
          <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-200/72">
            {content.kicker}
          </p>
          <h1 className="special-font mt-5 max-w-[11ch] text-[clamp(3.6rem,10vw,6.8rem)] font-zentry uppercase leading-[0.84] text-[#f5f1ff]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-3xl font-circular-web text-base leading-8 text-white/72 md:text-lg">
            {content.description}
          </p>

          {metaItems.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-[38rem]">
              {metaItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.45rem] border border-white/10 bg-white/[0.045] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl"
                >
                  <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
                    {item.label}
                  </p>
                  <p className="mt-3 font-circular-web text-2xl leading-none text-[#f5f1ff]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-14 grid gap-10 xl:grid-cols-[minmax(0,0.72fr)_280px]">
            <div>
              <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
                {content.tocLabel ?? labels.toc}
              </p>
              <ol className="mt-5 space-y-3">
                {tocItems.map((item, index) => (
                  <li key={item.id} className="flex gap-3 font-circular-web text-lg text-white/74">
                    <span className="w-6 shrink-0 text-[#f5f1ff]">{index + 1}.</span>
                    <a
                      href={`#${item.id}`}
                      className="text-violet-200/88 transition hover:text-white"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
                {content.aside?.label ?? labels.summary}
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#f5f1ff]">
                {content.aside?.title}
              </h2>
              <p className="mt-4 font-circular-web text-sm leading-6 text-white/66">
                {content.aside?.description}
              </p>

              {content.aside?.items?.length ? (
                <div className="mt-6 space-y-3">
                  {content.aside.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-white/10 bg-black/20 px-4 py-4 font-circular-web text-sm leading-6 text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}

              {content.links?.length ? (
                <div className="mt-6">
                  <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
                    {labels.links}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {content.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="font-circular-web text-sm text-violet-200/88 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>

          <div className="mt-14 max-w-4xl space-y-6">
            {introParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-circular-web text-base leading-8 text-white/74 md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {content.notice ? (
              <div className="rounded-[1.7rem] border border-violet-300/20 bg-[linear-gradient(180deg,rgba(124,78,255,0.12),rgba(16,16,25,0.84))] px-6 py-6 shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-200/74">
                  {content.noticeLabel ?? labels.important}
                </p>
                <p className="mt-4 font-circular-web text-base font-semibold leading-8 text-[#f5f1ff] md:text-lg">
                  {content.notice}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-4xl space-y-14">
            {sections.map((section) => {
              const id = section.id ?? slugify(section.title);

              return (
                <article
                  key={id}
                  id={id}
                  className="scroll-mt-28 border-t border-white/8 pt-12 first:border-t-0 first:pt-0"
                >
                  <h2 className="special-font max-w-[14ch] text-[clamp(2.6rem,6vw,4.4rem)] font-zentry uppercase leading-[0.88] text-[#f5f1ff]">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-circular-web text-base leading-8 text-white/74 md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className="mt-8 space-y-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-5 py-4 font-circular-web text-base leading-7 text-white/76"
                        >
                          <span className="mt-2 size-2 rounded-full bg-violet-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer
          content={footerContent}
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </main>
  );
};

export default TermsPage;
