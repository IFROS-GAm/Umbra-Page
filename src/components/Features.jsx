import { TiLocationArrow } from "react-icons/ti";

const editorialCopy = {
  es: {
    heroWord: "UMBRA+",
    liveWord: "ACTIVO+",
    dmWord: "DM+",
    channelsWord: "CANALES",
    desktopWord: "DESKTOP+",
    buildWord: "BUILDS+",
    introLabel: "Mapa visual de funciones",
    liveLabel: "Presencia en tiempo real",
    dmLabel: "Mensajes directos",
    channelsLabel: "Lectura clara",
    desktopLabel: "Cliente instalable",
    buildLabel: "Descargas y base",
    buildNote: "Github, desktop y web desde una misma entrada.",
  },
  en: {
    heroWord: "UMBRA+",
    liveWord: "LIVE+",
    dmWord: "DM+",
    channelsWord: "CHANNELS",
    desktopWord: "DESKTOP+",
    buildWord: "BUILDS+",
    introLabel: "Visual feature map",
    liveLabel: "Realtime presence",
    dmLabel: "Direct messages",
    channelsLabel: "Clear reading",
    desktopLabel: "Installable client",
    buildLabel: "Downloads and source",
    buildNote: "GitHub, desktop and web from one entry point.",
  },
  fr: {
    heroWord: "UMBRA+",
    liveWord: "ACTIF+",
    dmWord: "DM+",
    channelsWord: "CANAUX",
    desktopWord: "DESKTOP+",
    buildWord: "BUILDS+",
    introLabel: "Carte visuelle des fonctions",
    liveLabel: "Presence en temps reel",
    dmLabel: "Messages directs",
    channelsLabel: "Lecture claire",
    desktopLabel: "Client installable",
    buildLabel: "Telechargements et source",
    buildNote: "GitHub, desktop et web depuis une seule entree.",
  },
};

const detectLocale = (content) => {
  if (content.kicker === "Core features") return "en";
  if (content.kicker === "Fonctions principales") return "fr";
  return "es";
};

const renderMedia = (item, fit = "cover", priority = false) => {
  const mediaClass =
    fit === "contain" ? "size-full object-contain" : "size-full object-cover";

  if (item.mediaType === "video") {
    return (
      <video
        src={item.media}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={mediaClass}
      />
    );
  }

  return (
    <img
      src={item.media}
      alt={item.alt ?? item.title}
      loading={priority ? "eager" : "lazy"}
      className={mediaClass}
    />
  );
};

const MicroLabel = ({ children, tone = "dark" }) => (
  <p
    className={`font-general text-[10px] uppercase tracking-[0.24em] ${
      tone === "light" ? "text-[#efeefe]/72" : "text-white/58"
    }`}
  >
    {children}
  </p>
);

const Features = ({ content }) => {
  const locale = detectLocale(content);
  const copy = editorialCopy[locale] ?? editorialCopy.es;
  const [primary, servers, channels, dms, desktop] = [
    content.primary,
    ...content.cards,
  ];

  return (
    <section
      id="funciones"
      className="relative overflow-hidden bg-transparent px-5 pb-24 pt-6 sm:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(129,140,248,0.14),transparent_18%),radial-gradient(circle_at_84%_16%,rgba(56,189,248,0.1),transparent_18%),radial-gradient(circle_at_50%_78%,rgba(168,85,247,0.12),transparent_24%),linear-gradient(180deg,rgba(8,10,24,0),rgba(8,10,24,0.22))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute left-[8%] top-16 size-28 rounded-full border border-violet-300/15" />
      <div className="absolute right-[7%] top-32 h-44 w-44 rounded-full bg-violet-300/10 blur-3xl" />
      <div className="absolute bottom-20 left-[14%] h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute left-1/2 top-[28%] h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div>
            <MicroLabel tone="light">{copy.introLabel}</MicroLabel>
            <h2 className="special-font mt-5 max-w-5xl text-5xl font-zentry uppercase leading-[0.9] text-[#efedff] md:text-7xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {content.description}
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,38,0.84),rgba(9,10,24,0.94))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <MicroLabel tone="light">{content.kicker}</MicroLabel>
            <p className="mt-4 text-4xl font-black leading-none tracking-[-0.08em] text-[#efedff] md:text-6xl">
              05
            </p>
            <p className="mt-3 max-w-[16rem] font-circular-web text-sm leading-6 text-white/60">
              Umbra reparte sus funciones en un layout mas fuerte, mas claro y
              menos parecido a un grid comun.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[112px]">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,18,38,0.84),rgba(10,11,25,0.96))] shadow-[0_22px_70px_rgba(0,0,0,0.18)] md:col-span-2 lg:col-span-6 lg:row-span-4">
            <div className="absolute inset-0">
              {renderMedia(primary, "cover", true)}
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,14,28,0.18),rgba(13,12,24,0.22)_50%,rgba(10,10,20,0.82))]" />

            <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
              <MicroLabel tone="light">{primary.title}</MicroLabel>
              <div>
                <p className="special-font text-[clamp(4rem,10vw,8.4rem)] font-zentry uppercase leading-[0.82] text-[#f0edff]">
                  {copy.heroWord}
                </p>
                <p className="mt-3 max-w-[24rem] font-circular-web text-sm leading-6 text-white/82 md:text-base">
                  {primary.description}
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#efeeff] shadow-[0_22px_70px_rgba(0,0,0,0.12)] lg:col-span-6 lg:row-span-6">
            <div className="absolute inset-x-0 bottom-0 top-[34%]">
              {renderMedia(servers, "cover")}
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.9)_36%,rgba(10,8,20,0.45)_72%,rgba(10,8,20,0.18)_100%)]" />

            <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <MicroLabel tone="light">{copy.liveLabel}</MicroLabel>
                <div className="flex items-center gap-2 text-white/55">
                  <span className="rounded-[0.6rem] border border-white/10 px-2 py-1 text-[10px]">
                    {servers.title}
                  </span>
                </div>
              </div>

              <div>
                <p className="special-font text-[clamp(4.8rem,15vw,10rem)] font-zentry uppercase leading-[0.82] text-[#efedff]">
                  {copy.liveWord}
                </p>
                <p className="mt-3 max-w-[20rem] font-circular-web text-sm leading-6 text-white/68 md:text-base">
                  {servers.description}
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,21,44,0.9),rgba(10,12,24,0.96))] shadow-[0_22px_70px_rgba(0,0,0,0.14)] lg:col-span-4 lg:row-span-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(139,92,246,0.16),transparent_26%),radial-gradient(circle_at_84%_76%,rgba(56,189,248,0.08),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
              <MicroLabel tone="light">{copy.dmLabel}</MicroLabel>
              <p className="special-font text-[clamp(4rem,9vw,7rem)] font-zentry uppercase leading-[0.82] text-[#efedff]">
                {copy.dmWord}
              </p>
              <p className="max-w-[16rem] font-circular-web text-sm leading-6 text-white/64 md:text-base">
                {dms.description}
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#efeeff] shadow-[0_22px_70px_rgba(0,0,0,0.12)] lg:col-span-4 lg:row-span-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(139,92,246,0.18),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.98),rgba(16,12,32,0.98))]" />

            <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
              <MicroLabel tone="light">{copy.channelsLabel}</MicroLabel>
              <div>
                <p className="special-font text-[clamp(3.4rem,6.8vw,5.8rem)] font-zentry uppercase leading-[0.84] text-[#efedff]">
                  {copy.channelsWord}
                </p>
                <p className="mt-3 max-w-[15rem] font-circular-web text-sm leading-6 text-white/68 md:text-base">
                  {channels.description}
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,40,0.94),rgba(9,10,24,0.98))] shadow-[0_22px_70px_rgba(0,0,0,0.16)] lg:col-span-4 lg:row-span-4">
            <div className="absolute inset-x-4 top-4 h-[58%] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(223,223,242,0.08),rgba(214,214,236,0.03))] p-3">
              <div className="size-full overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_20%_18%,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(56,189,248,0.12),transparent_32%),linear-gradient(180deg,rgba(14,18,36,0.92),rgba(9,10,24,0.96))]">
                {renderMedia(desktop, "contain")}
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
              <MicroLabel tone="light">{copy.desktopLabel}</MicroLabel>
              <p className="special-font mt-2 text-[clamp(3rem,6vw,5rem)] font-zentry uppercase leading-[0.82] text-[#efedff]">
                {copy.desktopWord}
              </p>
              <p className="mt-3 max-w-[17rem] font-circular-web text-sm leading-6 text-white/66 md:text-base">
                {desktop.description}
              </p>
            </div>
          </article>

          <article
            id="descargas"
            className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[linear-gradient(135deg,rgba(91,62,194,0.92)_0%,rgba(132,92,255,0.9)_34%,rgba(83,162,255,0.88)_100%)] text-[#f6f3ff] shadow-[0_22px_70px_rgba(0,0,0,0.18)] md:col-span-2 lg:col-span-8 lg:row-span-3"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_24%)]" />
            <div className="absolute -right-8 top-4 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-2xl" />

            <div className="relative grid h-full gap-6 p-5 md:grid-cols-[minmax(0,1fr)_260px] md:p-6">
              <div className="flex flex-col justify-between">
                <div>
                  <MicroLabel tone="light">{copy.buildLabel}</MicroLabel>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                    {content.downloadCard.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-circular-web text-base leading-7 text-white/78">
                    {content.downloadCard.description}
                  </p>
                </div>

                <p className="mt-4 max-w-[18rem] font-general text-[10px] uppercase tracking-[0.22em] text-white/60">
                  {copy.buildNote}
                </p>
              </div>

              <div className="flex flex-col items-start justify-between md:items-end">
                <p className="special-font text-[clamp(3.3rem,6vw,5.5rem)] font-zentry uppercase leading-[0.82] text-[#f6f3ff]">
                  {copy.buildWord}
                </p>
                <div className="rounded-full border border-white/10 bg-white/10 p-4">
                  <TiLocationArrow className="text-5xl" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
