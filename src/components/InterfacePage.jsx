import { useState } from "react";

import Footer from "./Footer";
import { mediaAsset } from "../utils/media";

const interfacePageCopyByLocale = {
  es: {
    kicker: "Conoce nuestra interfaz",
    titleTop: "Conoce",
    titleBottom: "nuestra interfaz",
    description:
      "Una pagina aparte para mostrar pantallas, capas y ritmo visual. No solo como captura: como experiencia.",
    backLabel: "Volver al inicio",
    homeChipLabel: "INICIO",
    pageChipLabel: "PAGINA",
    featuresLabel: "Ver funciones",
    heroBadge: "Sala de control",
    heroLogoLabel: "Logo Umbra",
    heroPanelLabel: "Umbra Core",
    heroSearchPlaceholder: "Buscar canal o persona",
    heroMembersLabel: "miembros",
    heroLiveLabel: "en linea",
    heroComposerLabel: "Escribe en #general",
    heroInviteCardLabel: "Acceso y permisos",
    heroInviteCardNote:
      "Email, OTP y enlace corto para sumar gente sin romper el flujo.",
    heroVoiceCardLabel: "Pulso de voz",
    heroVoiceCardNote:
      "Controles rapidos, nivel y presencia conectada dentro del mismo bloque.",
    heroNote:
      "Umbra mezcla paneles, foco y movimiento para que ubicarse dentro del producto sea inmediato.",
    stepsKicker: "Recorrido guiado",
    stepsTitle: "Tres gestos para entrar en Umbra",
    stepsDescription:
      "Crear, invitar y hablar se leen como una secuencia clara. Cada pantalla tiene una funcion y un pulso propio.",
    anatomyKicker: "Mapa completo",
    anatomyTitle: "Dos vistas grandes para entender cada zona",
    anatomyDescription:
      "La interfaz completa tambien se puede leer por capas. Aqui se ven sus partes principales ya marcadas dentro de la pantalla.",
    anatomyLegendTitle: "Partes marcadas",
    anatomyLegendNote:
      "Cada bloque senala una zona clave para entender la interfaz de un vistazo.",
    basicsKicker: "Lo basico",
    basicsTitle: "Acciones comunes explicadas con capturas reales",
    basicsDescription:
      "Despues del mapa general, estas pantallas aterrizan lo esencial: entrar, crear, invitar, ajustar el perfil y controlar la voz.",
    basicsCardLabel: "Accion base",
    scenesKicker: "Escenas",
    scenesTitle: "Capas, enfoque y profundidad",
    scenesDescription:
      "Una interfaz no vive solo en una captura. Tambien vive en como presentas sus niveles, sus paneles y su energia.",
    noteLabel: "Interfaz viva",
    sideWord: "SIGNAL",
  },
  en: {
    kicker: "Explore the interface",
    titleTop: "Explore",
    titleBottom: "the interface",
    description:
      "A separate page to show screens, layers and visual rhythm. Not just as screenshots, but as an experience.",
    backLabel: "Back to home",
    homeChipLabel: "HOME",
    pageChipLabel: "PAGE",
    featuresLabel: "View features",
    heroBadge: "Control room",
    heroLogoLabel: "Umbra logo",
    heroPanelLabel: "Umbra Core",
    heroSearchPlaceholder: "Search channel or person",
    heroMembersLabel: "members",
    heroLiveLabel: "online",
    heroComposerLabel: "Write in #general",
    heroInviteCardLabel: "Access and permissions",
    heroInviteCardNote:
      "Email, OTP and a short link bring people in without breaking the flow.",
    heroVoiceCardLabel: "Voice pulse",
    heroVoiceCardNote:
      "Quick controls, input level and presence grouped in the same block.",
    heroNote:
      "Umbra mixes panels, focus and motion so finding your place inside the product feels immediate.",
    stepsKicker: "Guided flow",
    stepsTitle: "Three gestures to enter Umbra",
    stepsDescription:
      "Create, invite and talk as a clear sequence. Every screen has its own role and pulse.",
    anatomyKicker: "Full map",
    anatomyTitle: "Two large views to understand every zone",
    anatomyDescription:
      "The full interface can also be read in layers. Here the main parts are already marked inside the screen.",
    anatomyLegendTitle: "Marked parts",
    anatomyLegendNote:
      "Each block points to a key zone so the interface reads at a glance.",
    basicsKicker: "Basics",
    basicsTitle: "Common actions explained with real captures",
    basicsDescription:
      "After the full map, these screens ground the essentials: sign in, create, invite, tune your profile and control voice.",
    basicsCardLabel: "Core action",
    scenesKicker: "Scenes",
    scenesTitle: "Layers, focus and depth",
    scenesDescription:
      "An interface does not live in one screenshot. It also lives in how you present its layers, its panels and its energy.",
    noteLabel: "Live interface",
    sideWord: "SIGNAL",
  },
  fr: {
    kicker: "Decouvre notre interface",
    titleTop: "Decouvre",
    titleBottom: "notre interface",
    description:
      "Une page a part pour montrer les ecrans, les couches et le rythme visuel. Pas seulement comme capture, mais comme experience.",
    backLabel: "Retour a l'accueil",
    homeChipLabel: "ACCUEIL",
    pageChipLabel: "PAGE",
    featuresLabel: "Voir les fonctions",
    heroBadge: "Salle de controle",
    heroLogoLabel: "Logo Umbra",
    heroPanelLabel: "Umbra Core",
    heroSearchPlaceholder: "Rechercher un canal ou une personne",
    heroMembersLabel: "membres",
    heroLiveLabel: "en ligne",
    heroComposerLabel: "Ecrire dans #general",
    heroInviteCardLabel: "Acces et permissions",
    heroInviteCardNote:
      "Email, OTP et lien court pour inviter sans casser le rythme.",
    heroVoiceCardLabel: "Pulse voix",
    heroVoiceCardNote:
      "Controles rapides, niveau d'entree et presence dans le meme bloc.",
    heroNote:
      "Umbra melange panneaux, focus et mouvement pour que se situer dans le produit soit immediat.",
    stepsKicker: "Parcours guide",
    stepsTitle: "Trois gestes pour entrer dans Umbra",
    stepsDescription:
      "Creer, inviter et parler se lisent comme une sequence claire. Chaque ecran a son role et son propre rythme.",
    anatomyKicker: "Carte complete",
    anatomyTitle: "Deux grandes vues pour comprendre chaque zone",
    anatomyDescription:
      "L'interface complete peut aussi se lire par couches. Ici les parties principales sont deja marquees dans l'ecran.",
    anatomyLegendTitle: "Parties marquees",
    anatomyLegendNote:
      "Chaque bloc signale une zone cle pour comprendre l'interface d'un coup d'oeil.",
    basicsKicker: "Les bases",
    basicsTitle: "Les actions courantes expliquees avec de vraies captures",
    basicsDescription:
      "Apres la vue d'ensemble, ces ecrans montrent l'essentiel: entrer, creer, inviter, regler le profil et controler la voix.",
    basicsCardLabel: "Action cle",
    scenesKicker: "Scenes",
    scenesTitle: "Couches, focus et profondeur",
    scenesDescription:
      "Une interface ne vit pas seulement dans une capture. Elle vit aussi dans la maniere de presenter ses couches, ses panneaux et son energie.",
    noteLabel: "Interface vivante",
    sideWord: "SIGNAL",
  },
};

const interfaceCapture = (fileName) =>
  mediaAsset(`/Seccion-interfaz/${fileName}`);

const interfaceAssets = {
  friends: interfaceCapture("Captura de pantalla 2026-04-16 005705.png"),
  account: interfaceCapture("Captura de pantalla 2026-04-16 005803.png"),
  general: interfaceCapture("Captura de pantalla 2026-04-16 005851.png"),
  reactions: interfaceCapture("Captura de pantalla 2026-04-16 005902.png"),
  voice: interfaceCapture("Captura de pantalla 2026-04-16 005917.png"),
  sidebar: interfaceCapture("Captura de pantalla 2026-04-16 005922.png"),
  umbraLogo: mediaAsset("/img/Logo.png"),
  createModal: interfaceCapture("Captura de pantalla 2026-04-16 010044.png"),
  serverCard: interfaceCapture("Captura de pantalla 2026-04-16 010056.png"),
  createHeader: interfaceCapture("Captura de pantalla 2026-04-16 010642.png"),
  inviteModal: interfaceCapture("Captura de pantalla 2026-04-16 010707.png"),
  typingStrip: interfaceCapture("Captura de pantalla 2026-04-16 010746.png"),
  landingSummary: interfaceCapture("Captura de pantalla 2026-04-16 011900.png"),
  authPanel: interfaceCapture("Captura de pantalla 2026-04-16 011903.png"),
  profilePanel: interfaceCapture("Captura de pantalla 2026-04-16 012534.png"),
  voicePanel: interfaceCapture("Captura de pantalla 2026-04-16 012603.png"),
};

const annotationToneMap = {
  violet: {
    box: "border-violet-300/30",
    badge: "border-violet-300/20 bg-violet-300/[0.12]",
    dot: "bg-violet-200",
    glow: "bg-violet-300/[0.16]",
  },
  sky: {
    box: "border-sky-300/30",
    badge: "border-sky-300/20 bg-sky-300/[0.12]",
    dot: "bg-sky-200",
    glow: "bg-sky-300/[0.16]",
  },
  fuchsia: {
    box: "border-fuchsia-300/30",
    badge: "border-fuchsia-300/20 bg-fuchsia-300/[0.12]",
    dot: "bg-fuchsia-200",
    glow: "bg-fuchsia-300/[0.16]",
  },
  amber: {
    box: "border-amber-300/30",
    badge: "border-amber-300/20 bg-amber-300/[0.12]",
    dot: "bg-amber-200",
    glow: "bg-amber-300/[0.16]",
  },
};

const interfaceAnatomyByLocale = {
  es: [
    {
      eyebrow: "Vista de conversacion",
      title: "Chat principal",
      description:
        "Una sola captura para ubicar navegacion, lista de canales, acciones del chat y panel de miembros.",
      image: interfaceAssets.general,
      parts: [
        {
          label: "Rail de servidores",
          detail: "Acceso rapido a todas las comunidades sin perder el contexto actual.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[4.8%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Canales y busqueda",
          detail: "Lista fija para entrar a texto, voz o anuncios con una sola mirada.",
          boxClass: "left-[5.8%] top-[2%] h-[96%] w-[17%]",
          labelClass: "left-[18%] top-[10%]",
          tone: "sky",
        },
        {
          label: "Barra superior",
          detail: "Muestra el contexto del canal y deja a mano las acciones rapidas.",
          boxClass: "left-[24%] top-[2%] h-[10%] w-[56%]",
          labelClass: "left-[42%] top-4",
          tone: "amber",
        },
        {
          label: "Area de mensajes",
          detail: "El centro de la conversacion, pensado para lectura clara y respuestas fluidas.",
          boxClass: "left-[24%] top-[12%] h-[78%] w-[56%]",
          labelClass: "left-[46%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Panel de miembros",
          detail: "Resume quien esta dentro, conectado o disponible para colaborar.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[16%]",
          tone: "violet",
        },
        {
          label: "Composer",
          detail: "Desde aqui escribes, adjuntas y activas el ritmo de la conversacion.",
          boxClass: "left-[24%] top-[90%] h-[8%] w-[56%]",
          labelClass: "left-[44%] bottom-4",
          tone: "sky",
        },
      ],
    },
    {
      eyebrow: "Vista social",
      title: "Amigos y actividad",
      description:
        "Esta pantalla separa mensajes directos, buscador, listado de personas y actividad lateral dentro del mismo espacio.",
      image: interfaceAssets.friends,
      parts: [
        {
          label: "Mensajes directos",
          detail: "Entrada lateral para conversaciones privadas y accesos frecuentes.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[23%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Barra de busqueda",
          detail: "Filtra rapido personas o conversaciones sin cambiar de seccion.",
          boxClass: "left-[24%] top-[11%] h-[6.5%] w-[55%]",
          labelClass: "left-[38%] top-[4%]",
          tone: "amber",
        },
        {
          label: "Lista de amigos",
          detail: "Ordena presencia, estados y acciones para leer la actividad al instante.",
          boxClass: "left-[24%] top-[18%] h-[78%] w-[55%]",
          labelClass: "left-[42%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Actividad",
          detail: "Un lateral dedicado a lo que ocurre ahora para descubrir y volver a entrar.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[15%]",
          tone: "sky",
        },
        {
          label: "Accion principal",
          detail: "Boton dominante para invitar, abrir o resolver la accion del momento.",
          boxClass: "left-[70%] top-[25%] h-[8%] w-[18%]",
          labelClass: "right-[12%] top-[34%]",
          tone: "violet",
        },
      ],
    },
  ],
  en: [
    {
      eyebrow: "Conversation view",
      title: "Main chat",
      description:
        "A single capture to locate navigation, channel list, chat actions and the member panel.",
      image: interfaceAssets.general,
      parts: [
        {
          label: "Server rail",
          detail: "Quick access to every community without losing your current context.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[4.8%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Channels and search",
          detail: "A fixed list to jump into text, voice or announcements at a glance.",
          boxClass: "left-[5.8%] top-[2%] h-[96%] w-[17%]",
          labelClass: "left-[18%] top-[10%]",
          tone: "sky",
        },
        {
          label: "Top bar",
          detail: "Shows channel context and keeps quick actions close.",
          boxClass: "left-[24%] top-[2%] h-[10%] w-[56%]",
          labelClass: "left-[42%] top-4",
          tone: "amber",
        },
        {
          label: "Message area",
          detail: "The core of the conversation, tuned for reading and fast replies.",
          boxClass: "left-[24%] top-[12%] h-[78%] w-[56%]",
          labelClass: "left-[46%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Member panel",
          detail: "Summarizes who is inside, online and available to collaborate.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[16%]",
          tone: "violet",
        },
        {
          label: "Composer",
          detail: "This is where writing, attachments and conversation flow begin.",
          boxClass: "left-[24%] top-[90%] h-[8%] w-[56%]",
          labelClass: "left-[44%] bottom-4",
          tone: "sky",
        },
      ],
    },
    {
      eyebrow: "Social view",
      title: "Friends and activity",
      description:
        "This screen separates direct messages, search, the people list and side activity in the same space.",
      image: interfaceAssets.friends,
      parts: [
        {
          label: "Direct messages",
          detail: "A lateral entry point for private conversations and frequent people.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[23%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Search bar",
          detail: "Filters people or threads quickly without changing sections.",
          boxClass: "left-[24%] top-[11%] h-[6.5%] w-[55%]",
          labelClass: "left-[38%] top-[4%]",
          tone: "amber",
        },
        {
          label: "Friends list",
          detail: "Orders presence, states and actions so activity reads immediately.",
          boxClass: "left-[24%] top-[18%] h-[78%] w-[55%]",
          labelClass: "left-[42%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Activity",
          detail: "A dedicated side area for what is happening now and what to join next.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[15%]",
          tone: "sky",
        },
        {
          label: "Primary action",
          detail: "A dominant button to invite, open or resolve the moment's main action.",
          boxClass: "left-[70%] top-[25%] h-[8%] w-[18%]",
          labelClass: "right-[12%] top-[34%]",
          tone: "violet",
        },
      ],
    },
  ],
  fr: [
    {
      eyebrow: "Vue conversation",
      title: "Chat principal",
      description:
        "Une seule capture pour situer navigation, liste des canaux, actions du chat et panneau des membres.",
      image: interfaceAssets.general,
      parts: [
        {
          label: "Rail des serveurs",
          detail: "Acces rapide a chaque communaute sans perdre le contexte actuel.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[4.8%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Canaux et recherche",
          detail: "Une liste fixe pour entrer en texte, voix ou annonces d'un seul regard.",
          boxClass: "left-[5.8%] top-[2%] h-[96%] w-[17%]",
          labelClass: "left-[18%] top-[10%]",
          tone: "sky",
        },
        {
          label: "Barre haute",
          detail: "Montre le contexte du canal et garde les actions rapides a portee.",
          boxClass: "left-[24%] top-[2%] h-[10%] w-[56%]",
          labelClass: "left-[42%] top-4",
          tone: "amber",
        },
        {
          label: "Zone de messages",
          detail: "Le centre de la conversation, pense pour lire et repondre vite.",
          boxClass: "left-[24%] top-[12%] h-[78%] w-[56%]",
          labelClass: "left-[46%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Panneau membres",
          detail: "Resume qui est la, connecte ou disponible pour collaborer.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[16%]",
          tone: "violet",
        },
        {
          label: "Composer",
          detail: "C'est ici que commencent message, piece jointe et rythme de la discussion.",
          boxClass: "left-[24%] top-[90%] h-[8%] w-[56%]",
          labelClass: "left-[44%] bottom-4",
          tone: "sky",
        },
      ],
    },
    {
      eyebrow: "Vue sociale",
      title: "Amis et activite",
      description:
        "Cet ecran separe messages directs, recherche, liste des personnes et activite laterale dans le meme espace.",
      image: interfaceAssets.friends,
      parts: [
        {
          label: "Messages directs",
          detail: "Un acces lateral pour les conversations privees et les personnes frequentes.",
          boxClass: "left-[0.8%] top-[2%] h-[96%] w-[23%]",
          labelClass: "left-4 top-4",
          tone: "violet",
        },
        {
          label: "Barre de recherche",
          detail: "Filtre personnes ou fils sans changer de section.",
          boxClass: "left-[24%] top-[11%] h-[6.5%] w-[55%]",
          labelClass: "left-[38%] top-[4%]",
          tone: "amber",
        },
        {
          label: "Liste d'amis",
          detail: "Organise presence, statuts et actions pour lire l'activite tout de suite.",
          boxClass: "left-[24%] top-[18%] h-[78%] w-[55%]",
          labelClass: "left-[42%] top-[24%]",
          tone: "fuchsia",
        },
        {
          label: "Activite",
          detail: "Une zone laterale dediee a ce qui se passe maintenant et a ce qu'il faut rejoindre.",
          boxClass: "left-[81%] top-[2%] h-[96%] w-[18%]",
          labelClass: "right-4 top-[15%]",
          tone: "sky",
        },
        {
          label: "Action principale",
          detail: "Le bouton dominant pour inviter, ouvrir ou resoudre l'action centrale.",
          boxClass: "left-[70%] top-[25%] h-[8%] w-[18%]",
          labelClass: "right-[12%] top-[34%]",
          tone: "violet",
        },
      ],
    },
  ],
};

const interfaceBasicsByLocale = {
  es: [
    {
      title: "Crear cuenta o entrar",
      description:
        "El acceso vive en un panel simple con registro, login y Google sin cambiar de pantalla.",
      image: interfaceAssets.authPanel,
      tone: "violet",
      layout: "lg:col-span-5 lg:row-span-2",
      imageClass: "h-full min-h-[23rem] w-full object-cover object-top md:min-h-[28rem]",
    },
    {
      title: "Crear servidor",
      description:
        "El modal arranca una comunidad nueva sin cortar el flujo principal.",
      image: interfaceAssets.createModal,
      tone: "sky",
      layout: "lg:col-span-3",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Invitar amigos",
      description:
        "El enlace y los accesos listos para compartir aparecen en un paso corto.",
      image: interfaceAssets.inviteModal,
      tone: "amber",
      layout: "lg:col-span-4",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Perfil y estado",
      description:
        "Cambias presencia, cuenta y acciones rapidas desde un panel compacto.",
      image: interfaceAssets.profilePanel,
      tone: "fuchsia",
      layout: "lg:col-span-3",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Voz limpia",
      description:
        "La supresion de ruido, el volumen y la prueba de micro estan a mano.",
      image: interfaceAssets.voicePanel,
      tone: "sky",
      layout: "lg:col-span-4",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Microinteracciones",
      description:
        "Reacciones y typing indicators mantienen vivo el feedback mientras hablas.",
      image: interfaceAssets.reactions,
      detailImage: interfaceAssets.typingStrip,
      tone: "violet",
      layout: "lg:col-span-5",
      imageClass: "h-52 w-full object-cover object-top",
      detailImageClass: "h-20 w-full object-cover object-left",
    },
  ],
  en: [
    {
      title: "Create or sign in",
      description:
        "Access lives in one simple panel with register, login and Google without changing screens.",
      image: interfaceAssets.authPanel,
      tone: "violet",
      layout: "lg:col-span-5 lg:row-span-2",
      imageClass: "h-full min-h-[23rem] w-full object-cover object-top md:min-h-[28rem]",
    },
    {
      title: "Create a server",
      description:
        "The modal starts a new community without breaking the main flow.",
      image: interfaceAssets.createModal,
      tone: "sky",
      layout: "lg:col-span-3",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Invite friends",
      description:
        "Links and ready-to-share access appear in one short step.",
      image: interfaceAssets.inviteModal,
      tone: "amber",
      layout: "lg:col-span-4",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Profile and status",
      description:
        "Presence, account switching and quick actions live in one compact panel.",
      image: interfaceAssets.profilePanel,
      tone: "fuchsia",
      layout: "lg:col-span-3",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Clean voice",
      description:
        "Noise suppression, volume and mic testing stay within reach.",
      image: interfaceAssets.voicePanel,
      tone: "sky",
      layout: "lg:col-span-4",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Micro interactions",
      description:
        "Reactions and typing indicators keep feedback alive while you talk.",
      image: interfaceAssets.reactions,
      detailImage: interfaceAssets.typingStrip,
      tone: "violet",
      layout: "lg:col-span-5",
      imageClass: "h-52 w-full object-cover object-top",
      detailImageClass: "h-20 w-full object-cover object-left",
    },
  ],
  fr: [
    {
      title: "Creer ou entrer",
      description:
        "L'acces tient dans un seul panneau avec inscription, connexion et Google sans changer d'ecran.",
      image: interfaceAssets.authPanel,
      tone: "violet",
      layout: "lg:col-span-5 lg:row-span-2",
      imageClass: "h-full min-h-[23rem] w-full object-cover object-top md:min-h-[28rem]",
    },
    {
      title: "Creer un serveur",
      description:
        "Le modal lance une nouvelle communaute sans casser le flux principal.",
      image: interfaceAssets.createModal,
      tone: "sky",
      layout: "lg:col-span-3",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Inviter des amis",
      description:
        "Le lien et les acces a partager apparaissent dans une etape courte.",
      image: interfaceAssets.inviteModal,
      tone: "amber",
      layout: "lg:col-span-4",
      imageClass: "h-64 w-full object-cover object-top",
    },
    {
      title: "Profil et statut",
      description:
        "Presence, changement de compte et actions rapides vivent dans un panneau compact.",
      image: interfaceAssets.profilePanel,
      tone: "fuchsia",
      layout: "lg:col-span-3",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Voix propre",
      description:
        "Suppression du bruit, volume et test micro restent a portee.",
      image: interfaceAssets.voicePanel,
      tone: "sky",
      layout: "lg:col-span-4",
      imageClass: "h-[22rem] w-full object-cover object-top",
    },
    {
      title: "Micro interactions",
      description:
        "Reactions et indicateurs d'ecriture gardent le feedback vivant pendant l'echange.",
      image: interfaceAssets.reactions,
      detailImage: interfaceAssets.typingStrip,
      tone: "violet",
      layout: "lg:col-span-5",
      imageClass: "h-52 w-full object-cover object-top",
      detailImageClass: "h-20 w-full object-cover object-left",
    },
  ],
};

const stepThemes = [
  {
    shell:
      "bg-[linear-gradient(180deg,rgba(18,20,42,0.94),rgba(10,12,24,0.98))]",
    accent: "text-violet-200",
    glow: "bg-violet-300/10",
    border: "border-violet-300/15",
  },
  {
    shell:
      "bg-[linear-gradient(180deg,rgba(8,16,34,0.94),rgba(8,10,22,0.98))]",
    accent: "text-sky-200",
    glow: "bg-sky-300/10",
    border: "border-sky-300/15",
  },
  {
    shell:
      "bg-[linear-gradient(180deg,rgba(20,16,38,0.94),rgba(10,10,22,0.98))]",
    accent: "text-fuchsia-200",
    glow: "bg-fuchsia-300/10",
    border: "border-fuchsia-300/15",
  },
];

const renderVisual = (src, alt, className = "") => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const InterfaceAnnotation = ({ part, isActive, onActivate }) => {
  const tone = annotationToneMap[part.tone] ?? annotationToneMap.violet;

  return (
    <>
      <div
        className={`pointer-events-none absolute rounded-[1.35rem] border border-dashed bg-white/[0.02] transition-all duration-300 ${tone.box} ${part.boxClass} ${
          isActive
            ? "border-2 border-solid bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_45px_rgba(255,255,255,0.12)]"
            : "opacity-45"
        }`}
      />
      <div className={`absolute z-20 ${part.labelClass}`}>
        <button
          type="button"
          onMouseEnter={onActivate}
          onFocus={onActivate}
          onClick={onActivate}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-sm transition-all duration-300 ${tone.badge} ${
            isActive
              ? "scale-[1.03] border-white/35 shadow-[0_10px_35px_rgba(0,0,0,0.28)]"
              : "opacity-80 hover:scale-[1.02] hover:opacity-100"
          }`}
        >
          <span className={`size-2 rounded-full ${tone.dot}`} />
          <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#f4f2ff]">
            {part.label}
          </span>
        </button>
      </div>
    </>
  );
};

const InterfaceAnatomyCard = ({ item, copy }) => {
  const [activePart, setActivePart] = useState(item.parts[0]?.label ?? null);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,36,0.92),rgba(9,10,24,0.98))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] md:p-6">
      <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/75">
            {item.eyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#f0edff] md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-3 font-circular-web text-base leading-7 text-white/62">
            {item.description}
          </p>
        </div>

        <div className="max-w-sm rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-5 py-4">
          <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/50">
            {copy.anatomyLegendTitle}
          </p>
          <p className="mt-3 font-circular-web text-sm leading-6 text-white/60">
            {copy.anatomyLegendNote}
          </p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 p-3">
          <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10">
            {renderVisual(
              item.image,
              item.title,
              "h-auto w-full transition-transform duration-500"
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,24,0.03),rgba(8,10,24,0.08))]" />
            <div className="pointer-events-none absolute inset-0 bg-[#050712]/30 transition-opacity duration-300" />
            {item.parts.map((part) => (
              <InterfaceAnnotation
                key={part.label}
                part={part}
                isActive={activePart === part.label}
                onActivate={() => setActivePart(part.label)}
              />
            ))}
          </div>
        </div>

        <div className="grid content-start gap-3">
          {item.parts.map((part, index) => {
            const tone = annotationToneMap[part.tone] ?? annotationToneMap.violet;
            const isActive = activePart === part.label;

            return (
              <button
                key={part.label}
                type="button"
                onMouseEnter={() => setActivePart(part.label)}
                onFocus={() => setActivePart(part.label)}
                onClick={() => setActivePart(part.label)}
                className={`rounded-[1.25rem] border bg-white/[0.04] px-4 py-4 text-left transition-all duration-300 ${tone.box} ${
                  isActive
                    ? "translate-x-1 bg-white/[0.08] shadow-[0_16px_45px_rgba(0,0,0,0.22)]"
                    : "hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[10px] font-general uppercase tracking-[0.2em] text-[#f4f2ff] ${tone.badge}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f0edff]">
                      {part.label}
                    </p>
                    <p className="mt-2 font-circular-web text-sm leading-6 text-white/60">
                      {part.detail}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
};

const InterfaceBasicCard = ({ item, copy }) => {
  const tone = annotationToneMap[item.tone] ?? annotationToneMap.violet;

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.8rem] border bg-[linear-gradient(180deg,rgba(14,16,36,0.9),rgba(9,10,24,0.98))] p-4 shadow-[0_22px_80px_rgba(0,0,0,0.18)] ${tone.box} ${item.layout}`}
    >
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${tone.glow}`} />
      <div className="relative flex h-full flex-col">
        <div className="mb-4">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 ${tone.badge}`}
          >
            <span className={`size-2 rounded-full ${tone.dot}`} />
            <span className="font-general text-[9px] uppercase tracking-[0.22em] text-[#f4f2ff]">
              {copy.basicsCardLabel}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f0edff]">
            {item.title}
          </h3>
          <p className="mt-3 font-circular-web text-sm leading-6 text-white/62">
            {item.description}
          </p>
        </div>

        <div className="mt-5 flex-1 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20 p-2">
          <div className="h-full overflow-hidden rounded-[1rem] border border-white/10">
            {renderVisual(item.image, item.title, item.imageClass)}
          </div>
        </div>

        {item.detailImage && (
          <div className="mt-3 overflow-hidden rounded-[1.05rem] border border-white/10 bg-white/[0.04] p-2">
            <div className="overflow-hidden rounded-[0.9rem] border border-white/10">
              {renderVisual(
                item.detailImage,
                `${item.title} detail`,
                item.detailImageClass ?? "h-20 w-full object-cover"
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

const InterfaceStepCard = ({ step, index, visual, detailVisual, detailAlt }) => {
  const theme = stepThemes[index % stepThemes.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border ${theme.border} ${theme.shell} p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] md:p-6`}
    >
      <div className={`absolute right-6 top-6 h-20 w-20 rounded-full ${theme.glow} blur-2xl`} />
      <div className="relative grid gap-5 md:grid-cols-[110px_minmax(0,1fr)]">
        <div>
          <p className={`text-6xl font-black tracking-[-0.08em] ${theme.accent}`}>
            {number}
          </p>
        </div>

        <div>
          <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/48">
            Umbra step
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f0edff] md:text-3xl">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xl font-circular-web text-base leading-7 text-white/64">
            {step.description}
          </p>

          <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/25 p-3">
            <div className="overflow-hidden rounded-[1rem] border border-white/10">
              {renderVisual(visual, step.title, "h-56 w-full object-cover")}
            </div>
          </div>

          {detailVisual && (
            <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
              <div className="overflow-hidden rounded-[0.95rem] border border-white/10">
                {renderVisual(
                  detailVisual,
                  detailAlt ?? step.title,
                  "h-24 w-full object-cover"
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const InterfacePage = ({ content, footerContent, currentLanguage, onLanguageChange }) => {
  const copy =
    interfacePageCopyByLocale[content.locale] ?? interfacePageCopyByLocale.es;
  const sceneTitles = (content.capabilityItems ?? []).map((item) => item.title);
  const anatomyItems =
    interfaceAnatomyByLocale[content.locale] ?? interfaceAnatomyByLocale.es;
  const basicItems =
    interfaceBasicsByLocale[content.locale] ?? interfaceBasicsByLocale.es;
  const sceneCards = [
    {
      title: sceneTitles[0] ?? content.steps[0]?.title,
      image: interfaceAssets.friends,
    },
    {
      title: sceneTitles[1] ?? content.steps[1]?.title,
      image: interfaceAssets.account,
    },
    {
      title: sceneTitles[2] ?? content.steps[2]?.title,
      image: interfaceAssets.reactions,
    },
    {
      title: content.steps[0]?.title,
      image: interfaceAssets.sidebar,
    },
  ];
  const heroChannels = ["#general", "#ops", "#support"];
  const heroMembers = [
    { name: "Ana / Owner", tone: "bg-emerald-300" },
    { name: "IFROS_GAME", tone: "bg-sky-300" },
    { name: "umbra_final", tone: "bg-violet-300" },
  ];
  const heroMessageRows = [
    { author: "Ana", tag: "owner", tone: "from-violet-400 to-fuchsia-400" },
    { author: "Bruno", tag: "ops", tone: "from-amber-400 to-orange-400" },
    { author: "Carla", tag: "voice", tone: "from-emerald-400 to-cyan-400" },
  ];
  const sceneRainScreens = [
    {
      key: "create-modal",
      image: interfaceAssets.createModal,
      alt: "Umbra create modal",
      shellClass: "left-[6%] top-[54%] w-[16%] rotate-[5deg]",
      toneClass: "border-sky-300/15",
      driftClass: "scene-drift",
      imageClass: "h-44 w-full object-cover object-top",
    },
    {
      key: "auth-panel",
      image: interfaceAssets.authPanel,
      alt: "Umbra auth panel",
      shellClass: "left-[25%] top-[59%] w-[18%] rotate-[-7deg]",
      toneClass: "border-violet-300/15",
      driftClass: "scene-drift-slow",
      imageClass: "h-56 w-full object-cover object-top",
    },
    {
      key: "landing-summary",
      image: interfaceAssets.landingSummary,
      alt: "Umbra summary card",
      shellClass: "left-[44%] top-[62%] w-[23%] rotate-[8deg]",
      toneClass: "border-fuchsia-300/15",
      driftClass: "scene-drift-alt",
      imageClass: "h-36 w-full object-cover",
    },
    {
      key: "server-card",
      image: interfaceAssets.serverCard,
      alt: "Umbra server card",
      shellClass: "right-[8%] top-[42%] w-[16%] rotate-[-10deg]",
      toneClass: "border-amber-300/15",
      driftClass: "scene-drift",
      imageClass: "h-24 w-full object-cover",
    },
    {
      key: "profile-panel",
      image: interfaceAssets.profilePanel,
      alt: "Umbra profile panel",
      shellClass: "right-[18%] top-[68%] w-[13%] rotate-[9deg]",
      toneClass: "border-violet-300/15",
      driftClass: "scene-drift-alt",
      imageClass: "h-48 w-full object-cover object-top",
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050712]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.14),transparent_18%),radial-gradient(circle_at_82%_14%,rgba(56,189,248,0.1),transparent_18%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.03),transparent_24%),linear-gradient(180deg,rgba(5,7,18,1),rgba(8,10,24,1))]" />
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute left-[7%] top-40 size-32 rounded-full border border-violet-300/15" />
      <div className="pointer-events-none absolute right-[8%] top-28 h-56 w-56 rounded-full bg-violet-300/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[12%] top-[46%] h-40 w-40 rounded-full bg-sky-300/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[18%] right-[14%] h-48 w-48 rounded-full border border-white/6" />

      <section
        id="inicio"
        className="relative z-10 px-5 pb-20 pt-32 sm:px-10 sm:pt-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center">
          <div>
            <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-200/70">
              {copy.kicker}
            </p>
            <h1 className="special-font mt-6 max-w-5xl text-5xl font-zentry uppercase leading-[0.88] text-[#f2efff] md:text-7xl">
              {copy.titleTop}
              <br />
              {copy.titleBottom}
            </h1>
            <p className="mt-6 max-w-3xl font-circular-web text-base leading-7 text-white/64 md:text-lg">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="page-switch-link"
              >
                <span className="page-link-chip">{copy.homeChipLabel}</span>
                {copy.backLabel}
              </a>
              <a
                href="/funciones"
                className="page-switch-link"
              >
                <span className="page-link-chip">{copy.pageChipLabel}</span>
                {copy.featuresLabel}
              </a>
            </div>

            <div className="mt-10 max-w-xl rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,36,0.84),rgba(9,10,24,0.92))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/75">
                {copy.heroBadge}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[#f0edff]">
                {content.spotlight?.title}
              </p>
              <p className="mt-3 font-circular-web leading-7 text-white/62">
                {copy.heroNote}
              </p>
            </div>
          </div>

          <div className="relative min-h-[42rem]">
            <div className="absolute left-8 top-10 h-56 w-56 rounded-full border border-white/8" />
            <div className="absolute right-10 top-0 text-[clamp(5rem,10vw,8rem)] font-black leading-none tracking-[-0.08em] text-white/[0.06]">
              {copy.sideWord}
            </div>

            <div className="absolute left-[6%] top-[18%] w-[30%] rotate-[-8deg] overflow-hidden rounded-[1.6rem] border border-violet-300/15 bg-[linear-gradient(180deg,rgba(16,18,36,0.92),rgba(8,10,22,0.98))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-200/75">
                  {content.steps[0]?.title}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 font-general text-[9px] uppercase tracking-[0.2em] text-white/44">
                  Core
                </span>
              </div>
              <div className="mt-4 space-y-3 rounded-[1.2rem] border border-white/10 bg-black/25 p-3">
                {["General", "Private", "Realtime"].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`size-2 rounded-full ${
                          index === 0
                            ? "bg-violet-300"
                            : index === 1
                              ? "bg-sky-300"
                              : "bg-emerald-300"
                        }`}
                      />
                      <span className="font-circular-web text-sm text-[#f0edff]">
                        {item}
                      </span>
                    </div>
                    <span className="h-2 w-14 rounded-full bg-white/8" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1rem] border border-violet-300/18 bg-violet-300/[0.08] px-4 py-3">
                <p className="font-circular-web text-sm leading-6 text-white/72">
                  {copy.heroNote}
                </p>
              </div>
            </div>

            <div className="absolute right-[5%] top-[12%] w-[70%] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,38,0.94),rgba(8,10,24,0.98))] p-4 shadow-[0_32px_110px_rgba(0,0,0,0.28)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/50">
                    {copy.noteLabel}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#f0edff]">
                    {copy.heroPanelLabel}
                  </p>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 font-general text-[10px] uppercase tracking-[0.18em] text-white/45">
                  live shell
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,13,28,0.96),rgba(8,10,22,1))] p-4 xl:grid-cols-[72px_200px_minmax(0,1fr)_160px]">
                <div className="hidden xl:flex xl:flex-col xl:items-center xl:gap-3">
                  {["bg-violet-300", "bg-sky-300", "bg-fuchsia-300", "bg-emerald-300"].map(
                    (tone, index) => (
                      <div
                        key={tone}
                        className={`flex size-11 items-center justify-center rounded-[1rem] border border-white/10 ${
                          index === 0 ? "bg-white/[0.08]" : "bg-white/[0.03]"
                        }`}
                      >
                        <div className={`size-5 rounded-full ${tone}`} />
                      </div>
                    )
                  )}
                  <div className="mt-auto flex size-11 items-center justify-center rounded-[1rem] border border-white/10 bg-emerald-300/[0.12]">
                    <div className="h-5 w-5 rounded-[0.45rem] border border-emerald-200/45" />
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-3">
                  <div className="rounded-[0.95rem] border border-white/8 bg-black/25 px-3 py-2">
                    <p className="font-circular-web text-sm text-white/45">
                      {copy.heroSearchPlaceholder}
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {heroChannels.map((channel, index) => (
                      <div
                        key={channel}
                        className={`flex items-center justify-between rounded-[0.95rem] border px-3 py-3 ${
                          index === 0
                            ? "border-violet-300/18 bg-violet-300/[0.08]"
                            : "border-white/8 bg-white/[0.02]"
                        }`}
                      >
                        <span className="font-circular-web text-sm text-[#f0edff]">
                          {channel}
                        </span>
                        <span className="h-2 w-12 rounded-full bg-white/8" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-[0.95rem] border border-white/8 bg-white/[0.03] px-3 py-3">
                    <p className="font-general text-[9px] uppercase tracking-[0.2em] text-white/42">
                      voice
                    </p>
                    <p className="mt-2 font-circular-web text-sm text-white/72">
                      Lounge 01/15
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3">
                    <div>
                      <p className="font-general text-[10px] uppercase tracking-[0.22em] text-sky-200/70">
                        #general
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#f0edff]">
                        realtime shell
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
                      <span className="size-8 rounded-full border border-white/10 bg-white/[0.04]" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    {heroMessageRows.map((row) => (
                      <div key={row.author} className="flex gap-3">
                        <div
                          className={`mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${row.tone} font-general text-[11px] uppercase tracking-[0.18em] text-[#050712]`}
                        >
                          {row.author.slice(0, 2)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <p className="font-circular-web text-sm text-[#f0edff]">
                              {row.author}
                            </p>
                            <span className="rounded-full border border-white/10 px-2 py-1 font-general text-[8px] uppercase tracking-[0.18em] text-white/42">
                              {row.tag}
                            </span>
                          </div>
                          <div className="mt-2 space-y-2">
                            <div className="h-3 w-[88%] rounded-full bg-white/8" />
                            <div className="h-3 w-[68%] rounded-full bg-white/8" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[1rem] border border-white/8 bg-black/25 px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-circular-web text-sm text-white/45">
                        {copy.heroComposerLabel}
                      </p>
                      <div className="flex gap-2">
                        <span className="size-7 rounded-full border border-white/10 bg-white/[0.04]" />
                        <span className="size-7 rounded-full border border-white/10 bg-white/[0.04]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3">
                    <p className="font-general text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {copy.heroMembersLabel}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-general text-[9px] uppercase tracking-[0.18em] text-white/42">
                      09
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {heroMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center gap-3 rounded-[0.95rem] border border-white/8 bg-black/20 px-3 py-3"
                      >
                        <div className="relative">
                          <div className="size-10 rounded-full bg-white/[0.08]" />
                          <span
                            className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#0c1020] ${member.tone}`}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-circular-web text-sm text-[#f0edff]">
                            {member.name}
                          </p>
                          <p className="mt-1 font-circular-web text-xs text-white/45">
                            {copy.heroLiveLabel}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[9%] left-[20%] w-[38%] rotate-[7deg] overflow-hidden rounded-[1.55rem] border border-sky-300/15 bg-[linear-gradient(180deg,rgba(10,18,34,0.92),rgba(8,10,22,0.98))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-sky-200/75">
                  {copy.heroInviteCardLabel}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 font-general text-[9px] uppercase tracking-[0.2em] text-white/42">
                  OTP
                </span>
              </div>
              <p className="mt-4 font-circular-web text-sm leading-6 text-white/62">
                {copy.heroInviteCardNote}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["email", "otp", "link"].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-2 font-general text-[9px] uppercase tracking-[0.2em] ${
                      index === 0
                        ? "border-sky-300/22 bg-sky-300/[0.12] text-sky-100"
                        : "border-white/10 bg-white/[0.04] text-white/55"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="h-3 w-[62%] rounded-full bg-white/8" />
                  <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.12] px-3 py-2 font-general text-[9px] uppercase tracking-[0.18em] text-violet-100">
                    invite
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[8%] right-[9%] w-[27%] rotate-[5deg] overflow-hidden rounded-[1.5rem] border border-violet-300/15 bg-[linear-gradient(180deg,rgba(16,18,36,0.92),rgba(8,10,22,0.98))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between">
                <p className="font-general text-[10px] uppercase tracking-[0.22em] text-violet-200/75">
                  {copy.heroVoiceCardLabel}
                </p>
                <span className="size-3 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)]" />
              </div>
              <p className="mt-4 font-circular-web text-sm leading-6 text-white/62">
                {copy.heroVoiceCardNote}
              </p>
              <div className="mt-5 space-y-4">
                {[72, 48, 84].map((width) => (
                  <div key={width}>
                    <div className="mb-2 h-2 w-full rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(96,165,250,0.9),rgba(139,92,246,0.9))]"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                    <div className="flex justify-between font-general text-[9px] uppercase tracking-[0.18em] text-white/36">
                      <span>input</span>
                      <span>{width}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partes" className="relative z-10 px-5 pb-8 pt-2 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-200/70">
              {copy.anatomyKicker}
            </p>
            <h2 className="special-font mt-5 text-4xl font-zentry uppercase leading-[0.9] text-[#f2efff] md:text-6xl">
              {copy.anatomyTitle}
            </h2>
            <p className="mt-5 font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {copy.anatomyDescription}
            </p>
          </div>

          <div className="grid gap-6">
            {anatomyItems.map((item) => (
              <InterfaceAnatomyCard key={item.title} item={item} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-general text-xs uppercase tracking-[0.28em] text-sky-200/70">
              {copy.basicsKicker}
            </p>
            <h2 className="special-font mt-5 text-4xl font-zentry uppercase leading-[0.9] text-[#f2efff] md:text-6xl">
              {copy.basicsTitle}
            </h2>
            <p className="mt-5 font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {copy.basicsDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {basicItems.map((item) => (
              <InterfaceBasicCard key={item.title} item={item} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section id="pasos" className="relative z-10 px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-general text-xs uppercase tracking-[0.28em] text-sky-200/70">
              {copy.stepsKicker}
            </p>
            <h2 className="special-font mt-5 text-4xl font-zentry uppercase leading-[0.9] text-[#f2efff] md:text-6xl">
              {copy.stepsTitle}
            </h2>
            <p className="mt-5 font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {copy.stepsDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(320px,0.42fr)_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,36,0.84),rgba(9,10,24,0.94))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/75">
                  Umbra flow
                </p>
                <p className="mt-4 text-5xl font-black tracking-[-0.08em] text-[#f0edff]">
                  03
                </p>
                <p className="mt-4 font-circular-web leading-7 text-white/62">
                  {content.description}
                </p>

                <div className="mt-6 space-y-3">
                  {content.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-[#f0edff]"
                    >
                      {step.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <InterfaceStepCard
                step={content.steps[0]}
                index={0}
                visual={interfaceAssets.createModal}
                detailVisual={interfaceAssets.createHeader}
                detailAlt={content.steps[0]?.title}
              />
              <InterfaceStepCard
                step={content.steps[1]}
                index={1}
                visual={interfaceAssets.inviteModal}
                detailVisual={interfaceAssets.serverCard}
                detailAlt={content.steps[1]?.title}
              />
              <InterfaceStepCard
                step={content.steps[2]}
                index={2}
                visual={interfaceAssets.voice}
                detailVisual={interfaceAssets.reactions}
                detailAlt={content.steps[2]?.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="escenas" className="relative z-10 px-5 pb-24 pt-10 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-200/70">
              {copy.scenesKicker}
            </p>
            <h2 className="special-font mt-5 text-4xl font-zentry uppercase leading-[0.9] text-[#f2efff] md:text-6xl">
              {copy.scenesTitle}
            </h2>
            <p className="mt-5 font-circular-web text-base leading-7 text-white/62 md:text-lg">
              {copy.scenesDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_340px]">
            <div className="relative min-h-[40rem] rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,16,38,0.86),rgba(8,10,24,0.96))] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.2)] xl:min-h-[54rem]">
              <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-violet-300/10 blur-3xl" />
              <div className="absolute left-[28%] top-[57%] h-28 w-28 rounded-full bg-sky-300/10 blur-3xl" />
              <div className="absolute right-[22%] top-[70%] h-24 w-24 rounded-full bg-violet-300/10 blur-3xl" />
              <div className="absolute left-10 top-10 w-[62%] rotate-[-4deg] overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/25 p-3">
                <div className="overflow-hidden rounded-[1.2rem] border border-white/10">
                  {renderVisual(
                    interfaceAssets.friends,
                    "Umbra scene large",
                    "h-[22rem] w-full object-cover"
                  )}
                </div>
              </div>

              <div className="absolute right-6 top-20 w-[34%] rotate-[7deg] overflow-hidden rounded-[1.5rem] border border-sky-300/15 bg-[linear-gradient(180deg,rgba(8,18,34,0.88),rgba(8,10,22,0.96))] p-3">
                <div className="overflow-hidden rounded-[1rem] border border-white/10">
                  {renderVisual(
                    interfaceAssets.account,
                    "Umbra scene top",
                    "h-44 w-full object-cover"
                  )}
                </div>
              </div>

              <div className="absolute left-14 bottom-10 w-[28%] rotate-[-2deg] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,36,0.88),rgba(8,10,22,0.96))] p-2">
                <div className="overflow-hidden rounded-[1rem] border border-white/10">
                  {renderVisual(
                    interfaceAssets.typingStrip,
                    "Umbra typing strip",
                    "h-20 w-full object-cover object-left"
                  )}
                </div>
              </div>

              <div className="absolute right-[30%] top-[48%] w-[26%] rotate-[5deg] overflow-hidden rounded-[1.3rem] border border-fuchsia-300/15 bg-[linear-gradient(180deg,rgba(16,18,36,0.88),rgba(8,10,22,0.96))] p-2">
                <div className="overflow-hidden rounded-[1rem] border border-white/10">
                  {renderVisual(
                    interfaceAssets.reactions,
                    "Umbra reaction menu",
                    "h-36 w-full object-cover"
                  )}
                </div>
              </div>

              <div className="absolute bottom-8 right-12 w-[38%] rotate-[-6deg] overflow-hidden rounded-[1.5rem] border border-violet-300/15 bg-[linear-gradient(180deg,rgba(16,18,36,0.88),rgba(8,10,22,0.96))] p-3">
                <div className="overflow-hidden rounded-[1rem] border border-white/10">
                  {renderVisual(
                    interfaceAssets.voice,
                    "Umbra scene bottom",
                    "h-44 w-full object-cover"
                  )}
                </div>
              </div>

              {sceneRainScreens.map((item) => (
                <div
                  key={item.key}
                  className={`absolute hidden xl:block ${item.shellClass}`}
                >
                  <div className={item.driftClass}>
                    <div
                      className={`overflow-hidden rounded-[1.35rem] border bg-[linear-gradient(180deg,rgba(16,18,36,0.88),rgba(8,10,22,0.96))] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.24)] ${item.toneClass}`}
                    >
                      <div className="overflow-hidden rounded-[1rem] border border-white/10">
                        {renderVisual(item.image, item.alt, item.imageClass)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <p className="font-general text-[10px] uppercase tracking-[0.24em] text-white/48">
                  Umbra layers
                </p>
                <p className="special-font mt-4 text-[clamp(3.2rem,7vw,5.5rem)] font-zentry uppercase leading-[0.84] text-[#f2efff]">
                  UI+
                </p>
                <p className="mt-4 font-circular-web leading-7 text-white/62">
                  {copy.scenesDescription}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,36,0.88),rgba(8,10,24,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <p className="font-general text-[10px] uppercase tracking-[0.24em] text-violet-200/75">
                  Scene map
                </p>
                <div className="mt-5 grid gap-3">
                  {sceneCards.map((item) => (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-2"
                    >
                      <div className="overflow-hidden rounded-[0.95rem] border border-white/10">
                        {renderVisual(
                          item.image,
                          item.title,
                          "h-24 w-full object-cover"
                        )}
                      </div>
                      <p className="px-3 pb-2 pt-3 text-[#f0edff]">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default InterfacePage;
