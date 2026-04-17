import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";
import { languages } from "../content/siteContent";

const isPageRouteHref = (href = "") => href.startsWith("/");
const menuLabels = {
  es: {
    open: "Abrir navegacion",
    close: "Cerrar navegacion",
    menu: "Menu",
    page: "PAGINA",
  },
  en: {
    open: "Open navigation",
    close: "Close navigation",
    menu: "Menu",
    page: "PAGE",
  },
  fr: {
    open: "Ouvrir la navigation",
    close: "Fermer la navigation",
    menu: "Menu",
    page: "PAGE",
  },
};

const NavBar = ({ content, currentLanguage, onLanguageChange }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play().catch(() => {
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      });
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const isAtTop = currentScrollY <= 8;
    const isScrollingDown = currentScrollY > lastScrollYRef.current;

    setIsFloating(!isAtTop);

    if (isAtTop) {
      setIsNavVisible(true);
    } else if (isScrollingDown && currentScrollY > 120) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }

    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      pointerEvents: isNavVisible ? "auto" : "none",
      duration: 0.28,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    closeOnDesktop();
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const audioLabel = isAudioPlaying ? content.audioPause : content.audioPlay;
  const navSurface = isFloating
    ? "floating-nav"
    : "border-white/10 bg-black/20 shadow-none supports-[backdrop-filter]:backdrop-blur-sm";
  const logoHref = content.homeHref ?? "#inicio";
  const menuCopy = menuLabels[currentLanguage] ?? menuLabels.es;
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 px-3 sm:inset-x-6 sm:px-0"
    >
      <header className="mx-auto max-w-[1440px]">
        <nav
          className={clsx(
            "rounded-[1.35rem] border transition-all duration-300",
            navSurface
          )}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <div className="flex min-w-0 items-center gap-3 md:gap-5">
              <a
                href={logoHref}
                className={clsx(
                  "flex size-12 items-center justify-center rounded-full border transition-colors duration-300",
                  isFloating
                    ? "border-white/10 bg-white/5"
                    : "border-white/15 bg-black/20"
                )}
                aria-label="Umbra"
              >
                <img src="/img/Logo.png" alt="Umbra" className="w-9" />
              </a>

              <Button
                id="repo-button"
                title={content.repoButton}
                rightIcon={<TiLocationArrow />}
                href="https://github.com/IFROS-GAm/Umbra"
                target="_blank"
                rel="noreferrer"
                containerClass={clsx(
                  "hidden items-center justify-center gap-1 px-5 py-2.5 md:flex",
                  isFloating
                    ? "border border-white/10 bg-[#dfdff2] shadow-[0_10px_30px_rgba(223,223,242,0.18)]"
                    : "border border-white/15 bg-[#dfdff2]/95"
                )}
              />
            </div>

            <div className="hidden items-center lg:flex">
              <div
                className={clsx(
                  "flex items-center rounded-full border px-2 py-1.5",
                  isFloating
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-white/15 bg-black/20"
                )}
              >
                {content.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={clsx(
                      "nav-hover-btn",
                      isPageRouteHref(item.href) && "nav-page-link"
                    )}
                  >
                    {isPageRouteHref(item.href) && (
                      <span className="nav-page-pill">{menuCopy.page}</span>
                    )}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div
                className={clsx(
                  "hidden items-center gap-1 rounded-full border p-1 sm:flex",
                  isFloating
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-white/15 bg-black/20"
                )}
                aria-label={content.languageLabel}
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(language.code);
                      closeMobileMenu();
                    }}
                    className={clsx(
                      "rounded-full px-3 py-1 text-[11px] font-general uppercase tracking-[0.16em] transition-colors duration-200",
                      currentLanguage === language.code
                        ? "bg-[#dfdff2] text-black"
                        : "text-white/60 hover:text-white"
                    )}
                    aria-pressed={currentLanguage === language.code}
                  >
                    {language.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleAudioIndicator}
                className={clsx(
                  "hidden h-11 items-center space-x-0.5 rounded-full border px-4 transition-all duration-300 hover:bg-white/10 md:flex",
                  isFloating
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-white/15 bg-black/20"
                )}
                aria-label={audioLabel}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/Clair%20De%20Lune%20-%20Claude%20Debussy.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>

              <button
                type="button"
                onClick={toggleMenu}
                className={clsx(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:bg-white/10 lg:hidden",
                  isFloating
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-white/15 bg-black/20"
                )}
                aria-label={isMobileMenuOpen ? menuCopy.close : menuCopy.open}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className={clsx(
                      "block h-px w-4 bg-white transition-all duration-300",
                      isMobileMenuOpen && "translate-y-[7px] rotate-45"
                    )}
                  />
                  <span
                    className={clsx(
                      "block h-px w-4 bg-white transition-all duration-300",
                      isMobileMenuOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={clsx(
                      "block h-px w-4 bg-white transition-all duration-300",
                      isMobileMenuOpen && "-translate-y-[7px] -rotate-45"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>

          <div
            className={clsx(
              "overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out lg:hidden",
              isMobileMenuOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="space-y-4 px-3 pb-4 pt-3">
              <div className="flex items-center justify-between">
                <span className="font-general text-[10px] uppercase tracking-[0.22em] text-white/48">
                  {menuCopy.menu}
                </span>
                <span className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-200/72">
                  Umbra
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {content.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={clsx(
                      "flex items-center justify-between rounded-[1rem] border px-4 py-3 font-general text-[10px] uppercase tracking-[0.18em] transition-colors duration-200",
                      isPageRouteHref(item.href)
                        ? "border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_36%),linear-gradient(135deg,rgba(12,12,20,0.96),rgba(24,22,36,0.94))] text-[#f0edff]"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-violet-300/30 hover:text-white"
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      {isPageRouteHref(item.href) && (
                        <span className="nav-page-pill">{menuCopy.page}</span>
                      )}
                      {item.label}
                    </span>
                    <TiLocationArrow className="text-white/40" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:hidden">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(language.code);
                      closeMobileMenu();
                    }}
                    className={clsx(
                      "rounded-full border px-3 py-2 font-general text-[10px] uppercase tracking-[0.18em] transition-colors duration-200",
                      currentLanguage === language.code
                        ? "border-white/10 bg-[#dfdff2] text-black"
                        : "border-white/10 bg-white/[0.04] text-white/66 hover:text-white"
                    )}
                    aria-pressed={currentLanguage === language.code}
                  >
                    {language.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  id="repo-button-mobile"
                  title={content.repoButton}
                  rightIcon={<TiLocationArrow />}
                  href="https://github.com/IFROS-GAm/Umbra"
                  target="_blank"
                  rel="noreferrer"
                  containerClass="inline-flex items-center justify-center gap-2 border border-white/10 bg-[#dfdff2] px-5 py-3 shadow-[0_10px_30px_rgba(223,223,242,0.14)]"
                />

                <button
                  type="button"
                  onClick={toggleAudioIndicator}
                  className={clsx(
                    "flex h-11 items-center space-x-0.5 rounded-full border px-4 transition-all duration-300 hover:bg-white/10",
                    isFloating
                      ? "border-white/10 bg-white/[0.06]"
                      : "border-white/15 bg-black/20"
                  )}
                  aria-label={audioLabel}
                >
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={`mobile-${bar}`}
                      className={clsx("indicator-line", {
                        active: isIndicatorActive,
                      })}
                      style={{
                        animationDelay: `${bar * 0.1}s`,
                      }}
                    />
                  ))}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
