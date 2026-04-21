import Features from "./Features";
import Footer from "./Footer";

const featuresPageIntroByLocale = {
  es: {
    kicker: "Pagina separada",
    title: "Funciones Umbra",
    description:
      "La landing principal se queda ligera y esta pagina concentra la parte visual del producto con una composicion mucho mas editorial.",
    note:
      "Una vista separada para leer servidores, canales, DMs y builds sin mezclarlo con el resto del recorrido.",
    backLabel: "Volver al inicio",
  },
  en: {
    kicker: "Separate page",
    title: "Umbra features",
    description:
      "The main landing stays lighter while this page holds the product story with a much more editorial composition.",
    note:
      "A separate view to read servers, channels, DMs and builds without mixing everything into the main journey.",
    backLabel: "Back to home",
  },
  fr: {
    kicker: "Page separee",
    title: "Fonctions Umbra",
    description:
      "La landing principale reste plus legere et cette page concentre l'histoire produit avec une composition plus editoriale.",
    note:
      "Une vue separee pour lire serveurs, canaux, DMs et builds sans melanger tout le parcours principal.",
    backLabel: "Retour a l'accueil",
  },
};

const FeaturesPage = ({ content, footerContent, currentLanguage, onLanguageChange }) => {
  const intro =
    featuresPageIntroByLocale[content.locale] ?? featuresPageIntroByLocale.es;

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#060713]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(139,92,246,0.14),transparent_18%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.12),transparent_18%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.03),transparent_22%),linear-gradient(180deg,rgba(6,7,19,1),rgba(8,10,24,1))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-[6%] top-40 size-32 rounded-full border border-violet-300/15" />
      <div className="absolute right-[10%] top-32 h-56 w-56 rounded-full bg-violet-300/10 blur-3xl" />
      <div className="absolute left-[12%] top-[46%] h-40 w-40 rounded-full bg-sky-300/8 blur-3xl" />
      <div className="absolute bottom-[24%] right-[14%] h-44 w-44 rounded-full border border-white/6" />

      <section id="inicio" className="relative px-5 pb-6 pt-32 sm:px-10 sm:pt-36">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="font-general text-xs uppercase tracking-[0.28em] text-white/52">
              {intro.kicker}
            </p>
            <h1 className="special-font mt-6 max-w-5xl text-5xl font-zentry uppercase leading-[0.9] text-[#f2efff] md:text-7xl">
              {intro.title}
            </h1>
            <p className="mt-6 max-w-3xl font-circular-web text-base leading-7 text-white/64 md:text-lg">
              {intro.description}
            </p>

            <div className="mt-8">
              <a
                href="/"
                className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 font-general text-[11px] uppercase tracking-[0.18em] text-[#efedff] transition hover:border-violet-300/30 hover:bg-white/[0.08]"
              >
                {intro.backLabel}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,38,0.88),rgba(8,10,24,0.94))] p-5 text-[#efedff] shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/55">
              Umbra
            </p>
            <p className="special-font mt-5 text-[clamp(3.8rem,7vw,6rem)] font-zentry uppercase leading-[0.84]">
              05+
            </p>
            <p className="mt-4 max-w-[16rem] font-circular-web text-sm leading-6 text-white/66">
              {intro.note}
            </p>
          </div>
        </div>
      </section>

      <Features content={content} />
      <Footer 
        content={footerContent} 
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </main>
  );
};

export default FeaturesPage;
