import { useEffect, useMemo, useState } from "react";

import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import OverviewNavigator from "./components/OverviewNavigator";
import About from "./components/About";
import MetricsSection from "./components/MetricsSection";
import HeroShowcase from "./components/HeroShowcase";
import FunctionalitySections from "./components/FunctionalitySections";
import UiUx from "./components/UiUx";
import Timeline from "./components/Timeline";
import Story from "./components/Story";
import Footer from "./components/Footer";
import SectionTransition from "./components/SectionTransition";
import FeaturesPage from "./components/FeaturesPage";
import InterfacePage from "./components/InterfacePage";
import InfoPage from "./components/InfoPage";
import DownloadsPage from "./components/DownloadsPage";
import TermsPage from "./components/TermsPage";
import { siteContent } from "./content/siteContent";
import { utilityPages } from "./content/utilityPages";
import { handleInternalNavigation } from "./utils/navigation";

const overviewFallbacks = {
  fr: {
    kicker: "Parcours rapide",
    title: "Une landing plus simple a parcourir",
    description:
      "Tu comprends d'abord la promesse, puis les fonctions, ensuite le flux, et enfin le stack, la timeline et le repo sans te perdre.",
    ctaLabel: "Aller a la section",
    items: [
      {
        label: "Organise tes serveurs.",
        description:
          "Definis les espaces, permissions et la structure de base sans lutter contre des menus inutiles.",
        href: "#funciones",
      },
      {
        label: "Cree des canaux clairs.",
        description:
          "Texte, annonces et zones privees restent plus lisibles pour toute la communaute.",
        href: "#funciones",
      },
      {
        label: "Invite ton groupe.",
        description:
          "Fais entrer les gens plus vite avec une entree simple et un auth par email ou OTP si besoin.",
        href: "#funciones",
      },
      {
        label: "Parle en temps reel.",
        description:
          "Presence, frappe et reponses rendent la conversation vivante des le premier instant.",
        href: "#uiux",
      },
    ],
  },
};

const pageNavByLocale = {
  es: {
    items: [
      { label: "INICIO", href: "/" },
      { label: "FUNCIONES", href: "/funciones" },
      { label: "INTERFAZ", href: "/interfaz" },
      { label: "DESCARGAS", href: "/descargas" },
      { label: "TERMINOS", href: "/terminos-de-uso" },
      { label: "PRIVACY", href: "/privacy-policy" },
    ],
  },
  en: {
    items: [
      { label: "HOME", href: "/" },
      { label: "FEATURES", href: "/funciones" },
      { label: "INTERFACE", href: "/interfaz" },
      { label: "DOWNLOADS", href: "/descargas" },
      { label: "TERMS", href: "/terminos-de-uso" },
      { label: "PRIVACY", href: "/privacy-policy" },
    ],
  },
  fr: {
    items: [
      { label: "ACCUEIL", href: "/" },
      { label: "FONCTIONS", href: "/funciones" },
      { label: "INTERFACE", href: "/interfaz" },
      { label: "DOWNLOADS", href: "/descargas" },
      { label: "TERMES", href: "/terminos-de-uso" },
      { label: "PRIVACY", href: "/privacy-policy" },
    ],
  },
};

const interfacePageTitleByLocale = {
  es: "Conoce nuestra interfaz",
  en: "Explore the interface",
  fr: "Decouvre notre interface",
};

const utilityPageRouteMap = {
  "/descargas": "downloads",
  "/terminos-de-uso": "terms",
  "/privacy-policy": "privacy",
  "/safety-center": "safety",
  "/contactanos": "contact",
};

const getCurrentPath = () => {
  if (typeof window === "undefined") return "/";

  const normalizedPath = window.location.pathname.replace(/\/+$/, "");
  return normalizedPath === "" ? "/" : normalizedPath;
};

const replaceSpecialHref = (value) => {
  if (value === "#inicio") return "/";
  if (value === "#funciones") return "/funciones";
  if (value === "#uiux") return "/interfaz";
  if (value === "#descargas") return "/descargas";
  return value;
};

const App = () => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "es";

    return window.localStorage.getItem("umbra-language") ?? "es";
  });
  const [pathname, setPathname] = useState(getCurrentPath);

  const content = siteContent[language];
  const utilityContent = utilityPages[language] ?? utilityPages.es;
  const overviewContent =
    content.overview ?? overviewFallbacks[language] ?? siteContent.en.overview;
  const isFeaturesPage = pathname === "/funciones";
  const isInterfacePage = pathname === "/interfaz";
  const utilityPageKey = utilityPageRouteMap[pathname] ?? null;
  const isUtilityPage = utilityPageKey !== null;

  const pageNavContent = useMemo(
    () => ({
      ...content.nav,
      homeHref: "/",
      items: pageNavByLocale[language]?.items ?? pageNavByLocale.es.items,
    }),
    [content.nav, language]
  );

  const landingHeroContent = useMemo(
    () => ({
      ...content.hero,
      primaryButton: {
        ...content.hero.primaryButton,
        href: replaceSpecialHref(content.hero.primaryButton.href),
      },
      secondaryButton: {
        ...content.hero.secondaryButton,
        href: replaceSpecialHref(content.hero.secondaryButton.href),
      },
    }),
    [content.hero]
  );

  const landingOverviewContent = useMemo(
    () => ({
      ...overviewContent,
      items: overviewContent.items.map((item) => ({
        ...item,
        href: replaceSpecialHref(item.href),
      })),
    }),
    [overviewContent]
  );

  const featuresPageContent = useMemo(
    () => ({
      ...content.features,
      locale: language,
    }),
    [content.features, language]
  );

  const interfacePageContent = useMemo(
    () => ({
      ...content.experience,
      locale: language,
      spotlight: content.hero.spotlight,
      capabilityItems: content.capabilities.items,
    }),
    [content.capabilities.items, content.experience, content.hero.spotlight, language]
  );

  const activeUtilityPageContent = utilityPageKey
    ? {
        ...utilityContent[utilityPageKey],
        locale: language,
      }
    : null;

  useEffect(() => {
    document.documentElement.lang = language;
    if (isFeaturesPage) {
      document.title = `${content.features.title} | Umbra`;
      return;
    }

    if (isInterfacePage) {
      document.title = `${
        interfacePageTitleByLocale[language] ?? interfacePageTitleByLocale.es
      } | Umbra`;
      return;
    }

    if (activeUtilityPageContent) {
      document.title = `${activeUtilityPageContent.title} | Umbra`;
      return;
    }

    document.title = content.meta.title;
  }, [
    activeUtilityPageContent,
    content.features.title,
    content.meta.title,
    isFeaturesPage,
    isInterfacePage,
    language,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("umbra-language", language);
  }, [language]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const handleDocumentClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      handleInternalNavigation(event, anchor.getAttribute("href") ?? "");
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  if (isFeaturesPage) {
    return (
      <>
        <NavBar
          content={pageNavContent}
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        <FeaturesPage
          content={featuresPageContent}
          footerContent={content.footer}
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </>
    );
  }

  if (isInterfacePage) {
    return (
      <>
        <NavBar
          content={pageNavContent}
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        <InterfacePage
          content={interfacePageContent}
          footerContent={content.footer}
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </>
    );
  }

  if (isUtilityPage && activeUtilityPageContent) {
    return (
      <>
        <NavBar
          content={pageNavContent}
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        {utilityPageKey === "downloads" ? (
          <DownloadsPage
            content={activeUtilityPageContent}
            footerContent={content.footer}
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        ) : utilityPageKey === "terms" || utilityPageKey === "privacy" ? (
          <TermsPage
            content={activeUtilityPageContent}
            footerContent={content.footer}
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        ) : (
          <InfoPage
            content={activeUtilityPageContent}
            footerContent={content.footer}
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        )}
      </>
    );
  }

  return (
    <main className="relative min-h-screen w-full">
      <NavBar
        content={pageNavContent}
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
      <Hero content={landingHeroContent} />
      <About content={content.about} />
      <MetricsSection content={content.metrics} />
      <SectionTransition tone="sky" align="left" />
      <OverviewNavigator content={landingOverviewContent} />
      <SectionTransition tone="violet" align="right" />
      <FunctionalitySections content={content.capabilities} />
      <SectionTransition tone="sky" align="center" />
      <UiUx content={content.experience} />
      <Timeline content={content.timeline} />
      <SectionTransition tone="mix" align="left" />
      <HeroShowcase content={content.showcase} />
      <Story content={content.story} />
      <Footer 
        content={content.footer} 
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </main>
  );
};

export default App;
