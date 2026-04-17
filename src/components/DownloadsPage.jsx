import clsx from "clsx";

import Button from "./Button";
import Footer from "./Footer";

const downloadsPageShell = {
  es: {
    heroTitle: ["UMBRA", "WINDOWS Y WEB"],
    heroDescription:
      "Descarga el cliente para Windows o continua ahora mismo desde el navegador. Mobile llega despues, con la misma identidad y el mismo pulso visual del producto.",
    heroBadges: ["Windows listo", "Web al instante"],
    heroNote: "La distribucion actual se centra en desktop y web.",
    routesLabel: "Rutas activas",
    windowsLabel: "Lanzamiento desktop",
    windowsTitle: "Descargar para Windows",
    windowsDescription:
      "La ruta mas solida para usar Umbra desde un equipo propio, con shell dedicado y una base lista para crecer.",
    windowsHighlights: ["Instalador directo", "Cliente dedicado", "Base privada"],
    webLabel: "Web en vivo",
    webTitle: "Continuar en la web",
    webDescription:
      "Si quieres entrar ya, la experiencia web sigue disponible para recorrer el producto, su interfaz y su estructura sin instalar nada.",
    webHighlights: ["Acceso inmediato", "Recorrido completo", "Sin instalacion"],
    mobileLabel: "Proximamente en movil",
    mobileTitle: ["UMBRA", "MOBILE", "PROXIMAMENTE"],
    mobileDescription:
      "Movil llegara despues de consolidar Windows y Web. La meta es conservar la misma atmosfera, continuidad y presencia entre superficies.",
    mobileHighlights: [
      "Android como primera salida prevista",
      "La misma cuenta y continuidad entre dispositivos",
      "Una interfaz adaptada al formato movil sin perder identidad",
    ],
    mobileBadges: ["ANDROID FIRST", "PROXIMAMENTE"],
    mobileNote: "Todavia no hay APK publico",
    backLabelFallback: "Volver al inicio",
    statusLiveNow: "en linea",
    signalDefaultLabel: "pulso de voz",
    ambientBubbleLabel: "burbujas ambientales",
    desktopTagPrimary: "malla privada",
    desktopTagSecondary: "desktop activo",
    desktopSpaceTitle: "lounge privado",
    desktopSearchPlaceholder: "Buscar canal",
    desktopChannels: ["# general", "# anuncios", "# media", "# soporte"],
    desktopVoiceLabel: "Voz",
    desktopRealtimeTitle: "shell en tiempo real",
    desktopMembersLabel: "miembros",
    desktopLiveTag: "activo",
    desktopModTag: "mod",
    webPanelTitle: "Umbra web",
    webSidebarItems: ["inicio", "mensajes", "servidores", "ajustes"],
    webQuickInviteLabel: "invitacion rapida",
    webQuickInviteTags: ["email", "link"],
    webAccessLabel: "acceso web",
    webWalkthroughTitle: "recorrido instantaneo",
    webOnlineStatus: "en linea",
    webInfoCards: [
      ["Acceso", "Registro, login y OTP"],
      ["Espacios", "Canales, miembros y presencia"],
    ],
    webTag: "web",
    webStackLabel: "stack",
    webStackItems: ["cliente web", "espacios privados", "presencia"],
    phoneMessagesLabel: "mensajes",
    phoneQuickActionsLabel: "acciones rapidas",
    phoneQuickActionTags: ["gif", "voz", "media"],
    phoneSyncLabel: "sync",
    voiceSyncLabel: "sync de voz",
    desktopPulseLabel: "pulso desktop",
    previewDesktopEyebrow: "preview flat desktop",
    previewDesktopNote: "lienzo ui",
    previewWebEyebrow: "preview flat web",
    previewWebNote: "lienzo browser",
    previewMobileEyebrow: "preview flat mobile",
    previewMobileNote: "lienzo mobile",
  },
  en: {
    heroTitle: ["UMBRA", "WINDOWS AND WEB"],
    heroDescription:
      "Download the Windows client or continue instantly in the browser. Mobile comes next with the same identity and the same visual pulse.",
    heroBadges: ["Windows ready", "Instant web"],
    heroNote: "Current distribution is focused on desktop and web.",
    routesLabel: "Active routes",
    windowsLabel: "Desktop release",
    windowsTitle: "Download for Windows",
    windowsDescription:
      "The strongest entry point for using Umbra on your own machine, with a dedicated shell and a private-ready base.",
    windowsHighlights: ["Direct installer", "Dedicated client", "Private-ready base"],
    webLabel: "Live website",
    webTitle: "Continue on web",
    webDescription:
      "If you want to jump in right away, the web experience remains available to explore the product, interface and structure with no install required.",
    webHighlights: ["Instant access", "Full walkthrough", "No install required"],
    mobileLabel: "Coming soon on mobile",
    mobileTitle: ["UMBRA", "MOBILE", "COMING SOON"],
    mobileDescription:
      "Mobile arrives after Windows and Web are more stable. The goal is to keep the same atmosphere, continuity and presence across surfaces.",
    mobileHighlights: [
      "Android as the first planned release",
      "The same account and continuity across devices",
      "A mobile-ready interface without losing product identity",
    ],
    mobileBadges: ["ANDROID FIRST", "COMING SOON"],
    mobileNote: "There is no public APK yet",
    backLabelFallback: "Back to home",
    statusLiveNow: "live now",
    signalDefaultLabel: "voice pulse",
    ambientBubbleLabel: "ambient bubbles",
    desktopTagPrimary: "private mesh",
    desktopTagSecondary: "live desktop",
    desktopSpaceTitle: "private lounge",
    desktopSearchPlaceholder: "Search channel",
    desktopChannels: ["# general", "# updates", "# media", "# support"],
    desktopVoiceLabel: "Voice",
    desktopRealtimeTitle: "realtime shell",
    desktopMembersLabel: "members",
    desktopLiveTag: "live",
    desktopModTag: "mod",
    webPanelTitle: "Umbra web",
    webSidebarItems: ["home", "messages", "servers", "settings"],
    webQuickInviteLabel: "quick invite",
    webQuickInviteTags: ["email", "link"],
    webAccessLabel: "browser access",
    webWalkthroughTitle: "instant walkthrough",
    webOnlineStatus: "online",
    webInfoCards: [
      ["Access", "Login, OTP and base structure"],
      ["Spaces", "Text, voice and panels"],
    ],
    webTag: "web",
    webStackLabel: "stack",
    webStackItems: ["web client", "private spaces", "presence"],
    phoneMessagesLabel: "messages",
    phoneQuickActionsLabel: "quick actions",
    phoneQuickActionTags: ["gif", "voice", "media"],
    phoneSyncLabel: "sync",
    voiceSyncLabel: "voice sync",
    desktopPulseLabel: "desktop pulse",
    previewDesktopEyebrow: "flat desktop preview",
    previewDesktopNote: "ui canvas",
    previewWebEyebrow: "flat web preview",
    previewWebNote: "browser canvas",
    previewMobileEyebrow: "flat mobile preview",
    previewMobileNote: "mobile canvas",
  },
  fr: {
    heroTitle: ["UMBRA", "WINDOWS ET WEB"],
    heroDescription:
      "Telecharge le client Windows ou continue tout de suite dans le navigateur. Le mobile arrive ensuite avec la meme identite et le meme rythme visuel.",
    heroBadges: ["Windows pret", "Web instant"],
    heroNote: "La distribution actuelle se concentre sur desktop et web.",
    routesLabel: "Routes actives",
    windowsLabel: "Sortie desktop",
    windowsTitle: "Telecharger pour Windows",
    windowsDescription:
      "La route la plus solide pour utiliser Umbra sur ta machine, avec shell dedie et base prete pour les espaces prives.",
    windowsHighlights: ["Installeur direct", "Client dedie", "Base privee"],
    webLabel: "Web en direct",
    webTitle: "Continuer sur le web",
    webDescription:
      "Si tu veux entrer tout de suite, l'experience web reste disponible pour parcourir le produit, l'interface et la structure sans installation.",
    webHighlights: ["Acces immediat", "Parcours complet", "Sans installation"],
    mobileLabel: "Bientot sur mobile",
    mobileTitle: ["UMBRA", "MOBILE", "BIENTOT"],
    mobileDescription:
      "Le mobile arrive apres la consolidation de Windows et du Web. L'objectif est de garder la meme atmosphere, continuite et presence entre surfaces.",
    mobileHighlights: [
      "Android comme premiere sortie prevue",
      "Le meme compte et la continuite entre appareils",
      "Une interface adaptee au mobile sans perdre l'identite du produit",
    ],
    mobileBadges: ["ANDROID FIRST", "BIENTOT"],
    mobileNote: "Il n'y a pas encore d'APK public",
    backLabelFallback: "Retour a l'accueil",
    statusLiveNow: "en ligne",
    signalDefaultLabel: "pulse voix",
    ambientBubbleLabel: "bulles d'ambiance",
    desktopTagPrimary: "maille privee",
    desktopTagSecondary: "desktop actif",
    desktopSpaceTitle: "salon prive",
    desktopSearchPlaceholder: "Rechercher un canal",
    desktopChannels: ["# general", "# annonces", "# media", "# support"],
    desktopVoiceLabel: "Voix",
    desktopRealtimeTitle: "shell temps reel",
    desktopMembersLabel: "membres",
    desktopLiveTag: "live",
    desktopModTag: "mod",
    webPanelTitle: "Umbra web",
    webSidebarItems: ["accueil", "messages", "serveurs", "reglages"],
    webQuickInviteLabel: "invitation rapide",
    webQuickInviteTags: ["email", "lien"],
    webAccessLabel: "acces navigateur",
    webWalkthroughTitle: "parcours instantane",
    webOnlineStatus: "en ligne",
    webInfoCards: [
      ["Acces", "Login, OTP et structure de base"],
      ["Espaces", "Canaux, membres et panneaux"],
    ],
    webTag: "web",
    webStackLabel: "stack",
    webStackItems: ["client web", "espaces prives", "presence"],
    phoneMessagesLabel: "messages",
    phoneQuickActionsLabel: "actions rapides",
    phoneQuickActionTags: ["gif", "voix", "media"],
    phoneSyncLabel: "sync",
    voiceSyncLabel: "sync voix",
    desktopPulseLabel: "pulse desktop",
    previewDesktopEyebrow: "preview flat desktop",
    previewDesktopNote: "canvas ui",
    previewWebEyebrow: "preview flat web",
    previewWebNote: "canvas browser",
    previewMobileEyebrow: "preview flat mobile",
    previewMobileNote: "canvas mobile",
  },
};

const isExternalHref = (href = "") => /^https?:\/\//.test(href);
const isDownloadHref = (href = "") => /\.[a-z0-9]+$/i.test(href);
const resolveWidth = (value) =>
  typeof value === "number" ? `${value}%` : value;

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
    <path d="M3 4.75 10.75 3.7v7.06H3V4.75Zm8.95-1.22L21 2.3v8.46h-9.05V3.53ZM3 12.2h7.75v7.05L3 18.19V12.2Zm8.95 0H21v8.46l-9.05-1.23V12.2Z" />
  </svg>
);

const BrowserIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
    <path
      d="M4 7.2A2.2 2.2 0 0 1 6.2 5h11.6A2.2 2.2 0 0 1 20 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 16.8V7.2Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M4 9h16" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7" cy="7" r=".8" fill="currentColor" />
    <circle cx="10" cy="7" r=".8" fill="currentColor" />
    <circle cx="13" cy="7" r=".8" fill="currentColor" />
  </svg>
);

const MiniBar = ({ width = 100, className }) => (
  <div
    className={clsx("h-2 rounded-full bg-white/10", className)}
    style={{ width: resolveWidth(width) }}
  />
);

const MiniAvatar = ({ tone = "violet", className }) => {
  const tones = {
    violet: "from-[#faf7ff] via-[#a78bfa] to-[#4c1d95]",
    sky: "from-[#eef6ff] via-[#7dd3fc] to-[#1d4ed8]",
    slate: "from-[#f8fafc] via-[#94a3b8] to-[#334155]",
    rose: "from-[#fff1f2] via-[#f472b6] to-[#7e22ce]",
  };

  return (
    <span
      className={clsx(
        "inline-flex shrink-0 rounded-full bg-gradient-to-br shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
        tones[tone] ?? tones.violet,
        className
      )}
    />
  );
};

const MiniTag = ({ children, className }) => (
  <span
    className={clsx(
      "rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-general text-[9px] uppercase tracking-[0.2em] text-white/58",
      className
    )}
  >
    {children}
  </span>
);

const MiniMessage = ({ name, tone = "violet", tag, lines = [84, 58] }) => (
  <div className="flex gap-3">
    <MiniAvatar tone={tone} className="size-9" />
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-circular-web text-sm text-[#f4efff]">{name}</p>
        {tag ? <MiniTag className="px-2.5 py-1">{tag}</MiniTag> : null}
      </div>
      <div className="mt-2 space-y-2">
        {lines.map((line) => (
          <MiniBar key={`${name}-${line}`} width={line} />
        ))}
      </div>
    </div>
  </div>
);

const MiniMember = ({ name, toneClass = "bg-emerald-300", statusLabel }) => (
  <div className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-3 py-3">
    <div className="relative">
      <MiniAvatar tone="slate" className="size-9" />
      <span className={clsx("absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#0d0f1b]", toneClass)} />
    </div>
    <div className="min-w-0">
      <p className="truncate font-circular-web text-sm text-white/78">{name}</p>
      <p className="mt-1 font-circular-web text-xs text-white/42">{statusLabel}</p>
    </div>
  </div>
);

const MiniSignalStrip = ({ label }) => (
  <div className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,19,34,0.94),rgba(9,10,20,0.98))] px-4 py-3 shadow-[0_16px_44px_rgba(0,0,0,0.18)]">
    <div className="flex items-center gap-3">
      <MiniTag className="border-violet-200/18 bg-violet-200/[0.08] text-violet-100/84">
        {label}
      </MiniTag>
      <div className="flex-1">
        <div className="h-2 w-full rounded-full bg-white/8">
          <div className="h-full w-[64%] rounded-full bg-[linear-gradient(90deg,rgba(167,139,250,0.96),rgba(255,255,255,0.82))]" />
        </div>
      </div>
      <div className="flex items-end gap-1">
        {[12, 18, 10, 22, 14].map((height) => (
          <span
            key={height}
            className="w-1.5 rounded-full bg-violet-200/75"
            style={{ height }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ActionLink = ({ href, external, className, children }) => {
  const resolvedHref = href ?? "#";
  const resolvedExternal = external ?? isExternalHref(resolvedHref);
  const download = isDownloadHref(resolvedHref);

  return (
    <a
      href={resolvedHref}
      target={resolvedExternal ? "_blank" : undefined}
      rel={resolvedExternal ? "noreferrer" : undefined}
      download={download ? "" : undefined}
      className={className}
    >
      {children}
    </a>
  );
};

const SurfaceWindow = ({ children, className }) => (
  <div
    className={clsx(
      "overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,19,34,0.96),rgba(8,9,18,1))] shadow-[0_30px_100px_rgba(0,0,0,0.38)]",
      className
    )}
  >
    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
      <span className="size-2.5 rounded-full bg-white/30" />
      <span className="size-2.5 rounded-full bg-violet-200/65" />
      <span className="size-2.5 rounded-full bg-violet-400/65" />
      <div className="ml-4 h-8 flex-1 rounded-full border border-white/10 bg-white/[0.04]" />
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const PhoneShell = ({ children, badges, note, className }) => (
  <div className={clsx("relative mx-auto w-full max-w-[19rem]", className)}>
    <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,30,0.98),rgba(8,9,18,1))] p-3 shadow-[0_35px_110px_rgba(0,0,0,0.45)]">
      <div className="mx-auto mb-3 h-6 w-28 rounded-full bg-black/40" />
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <MiniTag className="border-violet-200/18 bg-violet-200/[0.08] px-3 py-1.5 text-[8px] tracking-[0.18em] text-violet-100/84">
          {badges[0]}
        </MiniTag>
        <MiniTag className="px-3 py-1.5 text-[8px] tracking-[0.18em] text-white/62">
          {badges[1]}
        </MiniTag>
      </div>
      <div className="overflow-hidden rounded-[2.45rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.16),transparent_30%),linear-gradient(180deg,rgba(12,12,24,0.96),rgba(6,7,16,1))]">
        {children}
      </div>
      <p className="mt-4 text-center font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
        {note}
      </p>
    </div>
  </div>
);

const RouteBadge = ({ icon, label, title, status }) => (
  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
    <div className="flex items-center justify-between gap-3">
      <span className="flex size-11 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.05] text-white/80">
        {icon}
      </span>
      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-general text-[10px] uppercase tracking-[0.22em] text-white/54">
        {status}
      </span>
    </div>
    <p className="mt-4 font-general text-[10px] uppercase tracking-[0.22em] text-white/44">
      {label}
    </p>
    <p className="mt-2 font-circular-web text-base text-[#f4efff]">{title}</p>
  </div>
);

const PreviewStage = ({ eyebrow, note, className, children }) => (
  <div
    className={clsx(
      "relative overflow-hidden rounded-[2.4rem] border border-violet-200/12 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.14),transparent_34%),linear-gradient(180deg,rgba(11,12,24,0.98),rgba(7,8,17,1))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
      className
    )}
  >
    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />
    <div className="relative z-10 mb-4 flex items-center justify-between gap-3">
      <MiniTag className="border-violet-200/18 bg-violet-200/[0.08] text-violet-100/84">
        {eyebrow}
      </MiniTag>
      {note ? (
        <span className="font-general text-[10px] uppercase tracking-[0.2em] text-white/40">
          {note}
        </span>
      ) : null}
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

const AmbientWindowsDecor = ({ label }) => (
  <div className="relative mt-12 hidden min-h-[13rem] overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.12),transparent_26%),linear-gradient(180deg,rgba(14,15,27,0.72),rgba(8,9,18,0.96))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:block">
    <div className="absolute inset-0 opacity-16 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
    <div className="absolute left-8 top-9 h-24 w-24 rounded-full border border-white/14 bg-white/[0.03]" />
    <div className="absolute left-[3.8rem] top-[3.9rem] size-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.94),rgba(167,139,250,0.82)_38%,rgba(76,29,149,0.32)_74%,transparent_78%)] shadow-[0_0_42px_rgba(167,139,250,0.22)]" />
    <div className="absolute left-[28%] top-[42%] h-16 w-16 rounded-full border border-white/10 bg-white/[0.03]" />
    <div className="absolute left-[31%] top-[45%] size-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.92),rgba(125,211,252,0.78)_42%,rgba(29,78,216,0.24)_78%,transparent_82%)]" />
    <div className="absolute right-[19%] top-10 h-20 w-20 rounded-full border border-violet-200/12 bg-violet-200/[0.04]" />
    <div className="absolute right-[16.5%] top-[3.35rem] size-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.92),rgba(244,114,182,0.72)_44%,rgba(126,34,206,0.24)_80%,transparent_84%)]" />
    <div className="absolute right-12 bottom-8 h-28 w-28 rounded-full border border-white/10 bg-white/[0.03]" />
    <div className="absolute right-[4.25rem] bottom-[3.65rem] size-14 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.94),rgba(167,139,250,0.86)_40%,rgba(76,29,149,0.28)_74%,transparent_78%)] shadow-[0_0_44px_rgba(167,139,250,0.18)]" />
    <div className="absolute left-[20%] top-[60%] h-px w-[30%] bg-gradient-to-r from-transparent via-white/14 to-transparent" />
    <div className="absolute right-[26%] top-[30%] h-px w-[20%] bg-gradient-to-r from-transparent via-violet-200/20 to-transparent" />
    <div className="absolute left-[46%] top-[36%] h-24 w-24 rounded-full border border-white/8" />
    <div className="absolute left-6 bottom-6">
      <MiniTag className="text-white/50">{label}</MiniTag>
    </div>
  </div>
);

const MiniDesktopScene = ({ copy }) => (
  <div className="relative">
    <div className="mb-3 flex items-center justify-between gap-3">
      <MiniTag className="border-violet-200/18 bg-violet-200/[0.08] text-violet-100/84">
        {copy.desktopTagPrimary}
      </MiniTag>
      <MiniTag>{copy.desktopTagSecondary}</MiniTag>
    </div>

    <div className="grid min-h-[18rem] gap-3 grid-cols-[44px_132px_minmax(0,1fr)] md:grid-cols-[48px_152px_minmax(0,1fr)_124px]">
      <div className="flex flex-col items-center rounded-[1.3rem] border border-white/10 bg-[#0a0c16] px-2 py-3">
        {[true, false, false, false, false].map((active, index) => (
          <span
            key={index}
            className={clsx(
              "mb-3 size-8 rounded-[1rem] border transition",
              active
                ? "border-violet-200/30 bg-violet-200/[0.12]"
                : "border-white/8 bg-white/[0.05]"
            )}
          />
        ))}
        <span className="mt-auto flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/60">
          +
        </span>
      </div>

      <div className="flex min-h-full flex-col rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,15,27,0.98),rgba(10,11,21,1))] p-3">
        <div className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-3">
          <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-100/74">
            Umbra mesh
          </p>
          <p className="mt-2 font-circular-web text-sm text-white/76">{copy.desktopSpaceTitle}</p>
        </div>

        <div className="mt-3 rounded-full border border-white/10 bg-black/20 px-3 py-2.5 font-circular-web text-xs text-white/38">
          {copy.desktopSearchPlaceholder}
        </div>

        <div className="mt-4 space-y-2">
          {copy.desktopChannels.map((channel, index) => (
            <div
              key={channel}
              className={clsx(
                "rounded-[0.95rem] border px-3 py-2.5 font-circular-web text-sm",
                index === 0
                  ? "border-violet-200/20 bg-violet-200/[0.08] text-violet-50"
                  : "border-white/8 bg-white/[0.03] text-white/52"
              )}
            >
              {channel}
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-[1rem] border border-white/10 bg-black/20 p-3">
          <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
            {copy.desktopVoiceLabel}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <MiniAvatar tone="violet" className="size-8" />
            <div className="flex-1">
              <MiniBar width={74} className="h-2.5" />
              <MiniBar width={40} className="mt-2 h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,25,0.98),rgba(8,9,18,1))] p-3">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
          <div>
            <p className="font-general text-[10px] uppercase tracking-[0.22em] text-sky-200/74">
              #general
            </p>
            <p className="mt-2 font-circular-web text-base text-[#f4efff]">{copy.desktopRealtimeTitle}</p>
          </div>
          <div className="flex gap-2">
            <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
            <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <MiniMessage name="Nyx" tone="violet" tag={copy.desktopLiveTag} />
          <MiniMessage name="Cinder" tone="sky" lines={[72, 48]} />
          <MiniMessage name="Vanta" tone="rose" tag={copy.desktopModTag} lines={[88, 62]} />
        </div>

        <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3">
          <div className="flex items-center gap-3">
            <MiniBar width={72} className="h-2.5" />
            <div className="ml-auto flex gap-2">
              <span className="size-7 rounded-full border border-white/10 bg-white/[0.04]" />
              <span className="size-7 rounded-full border border-white/10 bg-white/[0.04]" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,15,27,0.98),rgba(10,11,21,1))] p-3 md:block">
        <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
          {copy.desktopMembersLabel}
        </p>
        <div className="mt-4 space-y-3">
          <MiniMember name="Eris" toneClass="bg-emerald-300" statusLabel={copy.statusLiveNow} />
          <MiniMember name="Moro" toneClass="bg-sky-300" statusLabel={copy.statusLiveNow} />
          <MiniMember name="Ash" toneClass="bg-violet-300" statusLabel={copy.statusLiveNow} />
        </div>
      </div>
    </div>

  </div>
);

const MiniWebScene = ({ copy }) => (
  <div className="grid min-h-[17rem] gap-3 md:grid-cols-[150px_minmax(0,1fr)]">
    <div className="flex flex-col rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,28,0.98),rgba(10,11,20,1))] p-3">
      <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-100/74">
        {copy.webPanelTitle}
      </p>
      <div className="mt-4 space-y-2">
        {copy.webSidebarItems.map((item, index) => (
          <div
            key={item}
            className={clsx(
              "rounded-[0.95rem] border px-3 py-2.5 font-circular-web text-sm",
              index === 1
                ? "border-violet-200/20 bg-violet-200/[0.08] text-violet-50"
                : "border-white/8 bg-white/[0.03] text-white/52"
            )}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-[1rem] border border-white/10 bg-black/20 p-3">
        <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
          {copy.webQuickInviteLabel}
        </p>
        <MiniBar width={86} className="mt-3" />
        <MiniBar width={54} className="mt-2" />
        <div className="mt-3 flex gap-2">
          <MiniTag className="border-white/10 text-white/60">{copy.webQuickInviteTags[0]}</MiniTag>
          <MiniTag className="border-violet-200/18 bg-violet-200/[0.08] text-violet-100/84">
            {copy.webQuickInviteTags[1]}
          </MiniTag>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,25,0.98),rgba(8,9,18,1))] p-3">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
          <div>
            <p className="font-general text-[10px] uppercase tracking-[0.22em] text-sky-200/74">
              {copy.webAccessLabel}
            </p>
            <p className="mt-2 font-circular-web text-base text-[#f4efff]">{copy.webWalkthroughTitle}</p>
          </div>
          <MiniTag>{copy.webOnlineStatus}</MiniTag>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {copy.webInfoCards.map(([title, note]) => (
            <div
              key={title}
              className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/40">
                {title}
              </p>
              <p className="mt-3 font-circular-web text-sm leading-6 text-white/72">
                {note}
              </p>
              <div className="mt-4 space-y-2">
                <MiniBar width={88} />
                <MiniBar width={62} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px]">
        <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,25,0.98),rgba(8,9,18,1))] p-3">
          <MiniMessage name="Riven" tone="sky" tag={copy.webTag} lines={[90, 52]} />
          <div className="mt-4">
            <MiniMessage name="Sel" tone="violet" lines={[68, 44]} />
          </div>
          <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3">
            <div className="flex items-center gap-3">
              <MiniBar width={76} className="h-2.5" />
              <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
            </div>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,28,0.98),rgba(10,11,20,1))] p-3">
          <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
            {copy.webStackLabel}
          </p>
          <div className="mt-4 space-y-3">
            {copy.webStackItems.map((item) => (
              <div
                key={item}
                className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] px-3 py-3 font-circular-web text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MiniPhoneBubble = ({
  side = "left",
  tone = "violet",
  widths = [76, 52],
  syncLabel,
}) => {
  const shellTone =
    side === "right"
      ? "border-violet-200/22 bg-violet-200/[0.1]"
      : "border-white/10 bg-white/[0.05]";

  return (
    <div className={clsx("flex", side === "right" ? "justify-end" : "justify-start")}>
      <div className={clsx("max-w-[82%] rounded-[1.35rem] border px-4 py-3", shellTone)}>
        <div className="space-y-2">
          {widths.map((width) => (
            <MiniBar
              key={`${side}-${width}`}
              width={width}
              className={clsx(
                "h-2.5",
                side === "right" ? "bg-violet-50/28" : "bg-white/10"
              )}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <MiniAvatar tone={tone} className="size-6" />
          <span className="font-general text-[9px] uppercase tracking-[0.18em] text-white/42">
            {syncLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

const MiniPhoneScene = ({ copy }) => (
  <div className="flex h-[31rem] flex-col">
    <div className="border-b border-white/10 px-4 py-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-100/76">
            {copy.phoneMessagesLabel}
          </p>
          <p className="mt-2 font-circular-web text-base text-[#f4efff]">Umbra Mobile</p>
        </div>
        <div className="flex gap-2">
          <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
          <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </div>

    <div className="flex-1 space-y-3 px-4 py-4">
      <MiniPhoneBubble side="left" tone="sky" widths={[72, 44]} syncLabel={copy.phoneSyncLabel} />
      <MiniPhoneBubble side="right" tone="violet" widths={[82, 64]} syncLabel={copy.phoneSyncLabel} />
      <MiniPhoneBubble side="left" tone="rose" widths={[66, 52]} syncLabel={copy.phoneSyncLabel} />
      <div className="rounded-[1.3rem] border border-white/10 bg-black/20 px-4 py-3">
        <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
          {copy.phoneQuickActionsLabel}
        </p>
        <div className="mt-3 flex gap-2">
          {copy.phoneQuickActionTags.map((item) => (
            <MiniTag key={item}>{item}</MiniTag>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 px-4 py-4">
      <div className="mb-3 flex gap-2">
        <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
        <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
        <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
      </div>
      <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
        <MiniBar width={72} className="h-2.5" />
      </div>
    </div>
  </div>
);

const DownloadsPage = ({
  content,
  footerContent,
  currentLanguage,
  onLanguageChange,
}) => {
  const locale = currentLanguage || content.locale || "es";
  const shell = downloadsPageShell[locale] ?? downloadsPageShell.es;

  const cards = content.cards ?? [];
  const webCard = cards[0];
  const windowsCard = cards[1];
  const mobileCard = cards[2];
  const webCardIsExternal = isExternalHref(webCard?.href ?? "");

  const routes = [
    {
      label: windowsCard?.eyebrow ?? shell.windowsLabel,
      title: windowsCard?.title ?? shell.windowsTitle,
      status: windowsCard?.status ?? shell.heroBadges[0],
      icon: <WindowsIcon />,
    },
    {
      label: webCard?.eyebrow ?? shell.webLabel,
      title: webCard?.title ?? shell.webTitle,
      status: webCard?.status ?? shell.heroBadges[1],
      icon: <BrowserIcon />,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04050a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,29,149,0.24),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(148,163,184,0.08),transparent_18%),radial-gradient(circle_at_50%_52%,rgba(99,102,241,0.08),transparent_22%),linear-gradient(180deg,#04050a_0%,#080914_54%,#05060d_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-[6%] top-32 h-60 w-60 rounded-full bg-violet-500/[0.11] blur-[120px]" />
      <div className="absolute right-[12%] top-[22%] h-72 w-72 rounded-full bg-slate-400/[0.08] blur-[140px]" />
      <div className="absolute bottom-[16%] left-[20%] h-72 w-72 rounded-full bg-violet-300/[0.07] blur-[150px]" />

      <section className="relative px-5 pb-12 pt-28 sm:px-10 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(440px,1fr)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-200/18 bg-violet-200/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-violet-100/90">
                  {content.kicker}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/62">
                  {shell.heroNote}
                </span>
              </div>

              <h1 className="special-font mt-8 max-w-4xl text-[clamp(4.2rem,12vw,8rem)] font-zentry uppercase leading-[0.84] text-[#f6f1ff]">
                <span className="block">{shell.heroTitle[0]}</span>
                <span className="block text-white">{shell.heroTitle[1]}</span>
              </h1>

              <p className="mt-7 max-w-2xl font-circular-web text-base leading-7 text-white/66 md:text-lg">
                {content.description ?? shell.heroDescription}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                {windowsCard && (
                  <ActionLink
                    href={windowsCard.href}
                    external={windowsCard.external}
                    className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-[#f5f1ff] px-6 py-4 font-general text-[11px] uppercase tracking-[0.2em] text-[#07080f] shadow-[0_18px_45px_rgba(245,241,255,0.16)] transition duration-200 hover:-translate-y-0.5"
                  >
                    <WindowsIcon />
                    <span>{windowsCard.ctaLabel}</span>
                    <ArrowIcon />
                  </ActionLink>
                )}

                {webCard && (
                  <Button
                    title={webCard.ctaLabel}
                    href={webCard.href}
                    target={webCardIsExternal ? "_blank" : undefined}
                    rel={webCardIsExternal ? "noreferrer" : undefined}
                    leftIcon={<BrowserIcon />}
                    rightIcon={<ArrowIcon />}
                    containerClass="hero-route-button inline-flex items-center justify-center gap-3 !px-5 !py-4"
                  />
                )}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {routes.map((route) => (
                  <RouteBadge
                    key={route.title}
                    icon={route.icon}
                    label={route.label}
                    title={route.title}
                    status={route.status}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[34rem] lg:min-h-[42rem]">
              <div className="absolute inset-x-[4%] top-10 h-[74%] rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.22),transparent_38%),linear-gradient(180deg,rgba(16,17,31,0.92),rgba(8,9,18,0.98))]" />
              <div className="absolute left-[10%] top-[13%] hidden w-52 rounded-[1.4rem] border border-white/10 bg-black/28 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:block">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-100/78">
                  {shell.routesLabel}
                </p>
                <div className="mt-4 space-y-3">
                  {routes.map((route, index) => (
                    <div
                      key={route.title}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 font-circular-web text-sm text-white/78">
                        {route.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <SurfaceWindow className="absolute right-[6%] top-[4%] w-[84%] rotate-[7deg]">
                <MiniDesktopScene copy={shell} />
              </SurfaceWindow>

              <div className="absolute bottom-8 left-[12%] hidden w-60 md:block">
                <MiniSignalStrip label={shell.voiceSyncLabel} />
              </div>

              <PhoneShell
                badges={shell.mobileBadges}
                note={shell.mobileNote}
                className="absolute bottom-0 right-0 w-[38%] rotate-[8deg]"
              >
                <MiniPhoneScene copy={shell} />
              </PhoneShell>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-10 sm:px-10 lg:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(360px,1fr)]">
          <div className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,28,0.96),rgba(7,8,17,1))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-violet-200/18 bg-violet-200/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-violet-100/88">
                {shell.windowsLabel}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/62">
                {windowsCard?.status}
              </span>
            </div>

            <div className="mt-8 grid items-start gap-12 xl:grid-cols-[minmax(360px,0.92fr)_minmax(420px,1fr)]">
              <div className="max-w-[36rem] xl:pr-4">
                <h2 className="special-font max-w-[12ch] text-[clamp(2.7rem,6vw,4.4rem)] font-zentry uppercase leading-[0.9] text-[#f6f1ff] [text-wrap:balance]">
                  {shell.windowsTitle}
                </h2>
                <p className="mt-6 max-w-xl font-circular-web text-base leading-7 text-white/66 md:text-lg">
                  {windowsCard?.description ?? shell.windowsDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {(windowsCard?.points ?? shell.windowsHighlights).map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-general text-[10px] uppercase tracking-[0.2em] text-white/70"
                    >
                      {point}
                    </span>
                  ))}
                </div>

                {windowsCard && (
                  <ActionLink
                    href={windowsCard.href}
                    external={windowsCard.external}
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-[#f5f1ff] px-6 py-4 font-general text-[11px] uppercase tracking-[0.2em] text-[#07080f] shadow-[0_18px_45px_rgba(245,241,255,0.16)] transition duration-200 hover:-translate-y-0.5"
                  >
                    <WindowsIcon />
                    <span>{windowsCard.ctaLabel}</span>
                    <ArrowIcon />
                  </ActionLink>
                )}

                <AmbientWindowsDecor label={shell.ambientBubbleLabel} />
              </div>

              <PreviewStage eyebrow={shell.previewDesktopEyebrow} note={shell.previewDesktopNote} className="xl:mt-8">
                <div className="relative min-h-[25rem] overflow-hidden rounded-[2.1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,9,18,0.92),rgba(13,14,26,0.98))] p-4 md:p-5">
                  <div className="absolute right-[2%] top-[6%] h-[88%] w-[76%] rounded-[3rem] bg-[linear-gradient(180deg,rgba(76,29,149,0.78),rgba(31,41,55,0.24))]" />
                  <SurfaceWindow className="relative z-10 ml-auto mt-6 w-[88%] max-w-[36rem]">
                    <MiniDesktopScene copy={shell} />
                  </SurfaceWindow>
                  <div className="relative z-10 mt-4 max-w-[13rem]">
                    <MiniSignalStrip label={shell.desktopPulseLabel} />
                  </div>
                </div>
              </PreviewStage>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.16),transparent_28%),linear-gradient(180deg,rgba(14,15,28,0.96),rgba(7,8,17,1))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:p-8">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/62">
              {shell.webLabel}
            </span>

            <h2 className="special-font mt-7 text-[clamp(3rem,8vw,5rem)] font-zentry uppercase leading-[0.86] text-[#f6f1ff]">
              {shell.webTitle}
            </h2>
            <p className="mt-6 font-circular-web text-base leading-7 text-white/66 md:text-lg">
              {webCard?.description ?? shell.webDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {(webCard?.points ?? shell.webHighlights).map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-general text-[10px] uppercase tracking-[0.2em] text-white/70"
                >
                  {point}
                </span>
              ))}
            </div>

            <PreviewStage eyebrow={shell.previewWebEyebrow} note={shell.previewWebNote} className="mt-8">
              <SurfaceWindow>
                <MiniWebScene copy={shell} />
              </SurfaceWindow>
            </PreviewStage>

            <div className="mt-5 rounded-[1.55rem] border border-white/10 bg-white/[0.04] p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {shell.webInfoCards.map(([title, note]) => (
                  <div
                    key={title}
                    className="rounded-[1rem] border border-white/10 bg-black/20 p-4"
                  >
                    <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {title}
                    </p>
                    <p className="mt-3 font-circular-web text-sm leading-6 text-white/74">
                      {note}
                    </p>
                    <div className="mt-4 space-y-2">
                      <MiniBar width={84} />
                      <MiniBar width={58} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {webCard && (
              <div className="mt-8">
                <Button
                  title={webCard.ctaLabel}
                  href={webCard.href}
                  target={webCardIsExternal ? "_blank" : undefined}
                  rel={webCardIsExternal ? "noreferrer" : undefined}
                  leftIcon={<BrowserIcon />}
                  rightIcon={<ArrowIcon />}
                  containerClass="hero-route-button inline-flex items-center justify-center gap-3 !px-5 !py-4"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-24 pt-10 sm:px-10 lg:pt-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,26,0.98),rgba(6,7,15,1))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.34)] md:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,0.86fr)_minmax(0,1fr)]">
            <div className="rounded-[2.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.22),transparent_34%),linear-gradient(180deg,rgba(24,24,40,0.96),rgba(12,13,24,1))] p-6">
              <PreviewStage eyebrow={shell.previewMobileEyebrow} note={shell.previewMobileNote}>
                <div className="flex justify-center pt-1">
                  <PhoneShell
                    badges={shell.mobileBadges}
                    note={mobileCard?.status ?? shell.mobileNote}
                  >
                    <MiniPhoneScene copy={shell} />
                  </PhoneShell>
                </div>
              </PreviewStage>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-200/18 bg-violet-200/[0.08] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-violet-100/88">
                  {shell.mobileLabel}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-general text-[10px] uppercase tracking-[0.24em] text-white/62">
                  {mobileCard?.status ?? shell.mobileNote}
                </span>
              </div>

              <h2 className="special-font mt-8 text-[clamp(3.4rem,9vw,6.2rem)] font-zentry uppercase leading-[0.84] text-[#f6f1ff]">
                {shell.mobileTitle.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-6 max-w-2xl font-circular-web text-base leading-7 text-white/66 md:text-lg">
                {mobileCard?.description ?? shell.mobileDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {shell.mobileHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 font-circular-web leading-7 text-white/78">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {shell.mobileBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 font-general text-[10px] uppercase tracking-[0.24em] text-white/68"
                  >
                    {badge}
                  </span>
                ))}
                <Button
                  title={content.backLabel ?? shell.backLabelFallback}
                  href="/"
                  rightIcon={<ArrowIcon />}
                  containerClass="hero-route-button inline-flex items-center justify-center gap-3 !px-5 !py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        content={footerContent}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </main>
  );
};

export default DownloadsPage;
