import { useEffect, useState } from "react";
import clsx from "clsx";

const isPageRouteHref = (href = "") => href.startsWith("/");
const navigatorUiByLocale = {
  es: { page: "PAGINA", open: "ABRIR", step: "Paso" },
  en: { page: "PAGE", open: "OPEN", step: "Step" },
  fr: { page: "PAGE", open: "OUVRIR", step: "Etape" },
};

const OverviewNavigator = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale =
    typeof document !== "undefined" ? document.documentElement.lang || "es" : "es";
  const uiLabels = navigatorUiByLocale[locale] ?? navigatorUiByLocale.es;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % content.items.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [content.items.length]);

  const activeItem = content.items[activeIndex];
  const activeItemIsPageRoute = isPageRouteHref(activeItem.href);

  return (
    <section
      id="recorrido"
      className="relative overflow-hidden bg-[#05050d] px-5 py-24 sm:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_26%),linear-gradient(180deg,rgba(8,8,18,0.96),rgba(7,7,18,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="relative mx-auto max-w-[1440px] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,36,0.72),rgba(9,9,19,0.82))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
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

          <div className="mt-10 rounded-[1.6rem] border border-violet-300/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 backdrop-blur-sm">
            <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-300">
              Umbra
            </p>
            <p className="mt-4 font-circular-web text-lg leading-7 text-white/75">
              {activeItem.description}
            </p>
            <a
              href={activeItem.href}
              className={clsx(
                "mt-6 inline-flex items-center gap-3 rounded-full px-4 py-2 font-general text-[11px] uppercase tracking-[0.18em] transition-all duration-200",
                activeItemIsPageRoute
                  ? "page-switch-link fractal-link-glow"
                  : "border border-violet-300/25 bg-violet-300/10 text-violet-200 hover:border-violet-200/35 hover:bg-violet-300/15"
              )}
            >
              {activeItemIsPageRoute && (
                <span className="page-link-chip">{uiLabels.page}</span>
              )}
              {content.ctaLabel ?? "Go to section"}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {content.items.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              className={clsx(
                "group relative overflow-hidden rounded-[1.8rem] border px-5 py-5 transition-all duration-300",
                isPageRouteHref(item.href)
                  ? index === activeIndex
                    ? "border-violet-300/30 bg-[linear-gradient(135deg,rgba(6,6,14,0.94),rgba(34,24,48,0.94),rgba(94,91,107,0.86))] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                    : "border-white/10 bg-[linear-gradient(135deg,rgba(10,10,18,0.76),rgba(24,20,34,0.88))] hover:border-violet-300/25 hover:bg-[linear-gradient(135deg,rgba(12,12,22,0.86),rgba(36,28,49,0.9))]"
                  : index === activeIndex
                    ? "border-violet-300/30 bg-violet-300/10"
                    : "border-white/8 bg-transparent hover:border-violet-300/20"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={clsx(
                      "font-general text-[10px] uppercase tracking-[0.24em]",
                      index === activeIndex ? "text-violet-200/82" : "text-white/35"
                    )}
                  >
                    {uiLabels.step} {String(index + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={clsx(
                      "mt-4 text-[clamp(2.1rem,6vw,4.4rem)] font-semibold uppercase leading-[0.92] tracking-[-0.05em] transition-colors duration-300",
                      index === activeIndex
                        ? "text-[#f4f0ff]"
                        : "text-[#6a5d97] group-hover:text-[#d7d0ff]"
                    )}
                  >
                    {item.label}
                  </div>
                </div>

                {isPageRouteHref(item.href) && (
                  <div className="page-link-chip shrink-0">{uiLabels.open}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default OverviewNavigator;
