import { useState, useRef, useEffect } from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

const normalizeFooterHref = (href) => {
  if (!href || !href.startsWith("#")) return href;
  if (typeof window === "undefined") return href;

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  return pathname === "/" ? href : `/${href}`;
};

const FooterGroupItem = ({ item }) => {
  if (item.href) {
    return (
      <a
        href={normalizeFooterHref(item.href)}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noreferrer" : undefined}
        className="font-circular-web text-sm leading-6 text-white/70 transition hover:text-white hover:underline"
      >
        {item.label}
      </a>
    );
  }

  return (
    <span className="font-circular-web text-sm leading-6 text-white/70">
      {item.label}
    </span>
  );
};

const Footer = ({ content, currentLanguage = "es", onLanguageChange }) => {
  const groups = content.groups ?? [];
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangLabel = LANGUAGES.find(l => l.code === currentLanguage)?.label || "Español";

  return (
    <footer className="relative overflow-hidden bg-[#0a0a14] pt-20 pb-10 px-5 sm:px-10">
      <div className="relative mx-auto max-w-7xl">
        {/* Top Section: Logo/Socials on left, Links on right */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Left: Logo, Language, Socials */}
          <div className="flex flex-col gap-8 lg:w-1/4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-violet-500 shadow-[0_0_14px_rgba(139,92,246,0.6)] flex items-center justify-center">
                <span className="size-3 rounded-full bg-white" />
              </span>
              <span className="font-zentry text-3xl font-bold text-white tracking-wider">UMBRA</span>
            </div>

            {/* Language Selector */}
            <div className="flex flex-col gap-2 relative" ref={langRef}>
              <span className="font-circular-web text-sm text-white/70">Language</span>
              <div 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-between rounded-md bg-white/5 px-4 py-2 border border-white/10 cursor-pointer hover:bg-white/10 transition"
              >
                <span className="font-circular-web text-sm text-white">{currentLangLabel}</span>
                <svg 
                  className={`w-4 h-4 text-white/70 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute top-full left-0 mt-2 w-full rounded-md border border-white/10 bg-[#13131f] shadow-xl z-50 overflow-hidden">
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => {
                        if (onLanguageChange) onLanguageChange(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`px-4 py-2 cursor-pointer font-circular-web text-sm transition-colors ${
                        currentLanguage === lang.code 
                          ? 'bg-violet-500/20 text-violet-300' 
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-2">
              <span className="font-circular-web text-sm text-white/70">Social</span>
              <div className="flex items-center gap-4 text-white/80">
                <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-white transition"><FaYoutube size={20} /></a>
                <a href="#" className="hover:text-white transition"><FaTiktok size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-3/4 lg:justify-items-end">
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="font-circular-web text-base font-semibold text-violet-400">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <FooterGroupItem key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-violet-500/30" />

        {/* Bottom Section: Massive Logo */}
        <div className="flex flex-col items-center justify-center w-full overflow-hidden">
          <h1 className="font-zentry font-black text-[clamp(6rem,20vw,24rem)] leading-[0.75] tracking-tighter text-[#f0edff] select-none">
            UMBRA
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
