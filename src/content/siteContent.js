import { mediaAsset } from "../utils/media";

const interfaceCapture = (fileName) =>
  mediaAsset(`/Seccion-interfaz/${fileName}`);

const interfaceInviteMedia = interfaceCapture(
  "Captura de pantalla 2026-04-16 010707.png"
);
const timelineCapture = (fileName) => mediaAsset(`/TimeLine/${fileName}`);
const umbraLogoMedia = mediaAsset("/img/Logo.png");

const heroSlides = [
  mediaAsset("/videos/Hero-default.png"),
  mediaAsset("/videos/hero (4).png"),
];

const heroShowcaseSlides = [
  mediaAsset("/videos/hero (1).png"),
  mediaAsset("/videos/hero (2).png"),
  mediaAsset("/videos/hero (5).png"),
  mediaAsset("/videos/hero (6).png"),
];

const featureMedia = {
  primary: mediaAsset("/img/feature-0.png"),
  servers: mediaAsset("/img/XD.png"),
  channels: mediaAsset("/img/about.png"),
  dms: mediaAsset("/videos/feature-3.mp4"),
  desktop: mediaAsset("/videos/feature-4.png"),
};

const capabilityMedia = {
  servers: mediaAsset("/img/XD.png"),
  channels: mediaAsset("/videos/feature-3.mp4"),
  invites: interfaceInviteMedia,
};
const capabilityFragmentMedia = mediaAsset("/videos/ENCIMA.png");

const experienceGallery = [
  mediaAsset("/videos/hero (1).png"),
  mediaAsset("/videos/hero (2).png"),
];

const timelineMedia = [
  timelineCapture("1.png"),
  timelineCapture("2.png"),
  timelineCapture("3.png"),
  timelineCapture("4.png"),
  timelineCapture("5.png"),
];

const storyImage = mediaAsset("/videos/hero (2).png");
const footerImage = mediaAsset("/videos/hero (1).png");

export const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export const siteContent = {
  es: {
    meta: {
      title: "Umbra - Comunica en la sombra",
    },
    nav: {
      repoButton: "GitHub",
      items: [
        { label: "Inicio", href: "#inicio" },
        { label: "Recorrido", href: "#recorrido" },
        { label: "Funciones", href: "#funciones" },
        { label: "Stack", href: "#stack" },
        { label: "Timeline", href: "#timeline" },
        { label: "Descargas", href: "#descargas" },
        { label: "Repo", href: "#repo" },
      ],
      audioPlay: "Reproducir audio ambiental",
      audioPause: "Pausar audio ambiental",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Comunica en la sombra",
      subtitle: "Arriba como abajo.",
      tagline: "Chat with shadows.",
      microLabel: "Red de comunicacion v1.0",
      headlinePrimary: "COMUNICA",
      headlineSecondary: "EN LA SOMBRA",
      description:
        "Levanta tus servidores, organiza tus canales y conecta con tu grupo. Interfaz oscura, electrica y privada para comunidades que quieren mas control.",
      primaryButton: { title: "Descargar Umbra", href: "#descargas" },
      secondaryButton: { title: "Ver funciones", href: "#funciones" },
      tertiaryButton: { title: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      slides: heroSlides.map((src, index) => ({
        src,
        alt: `Vista ${index + 1} de Umbra`,
      })),
      spotlight: {
        tag: "Umbra HQ",
        title: "Servidores, canales y actividad en una interfaz privada",
      },
      panelTags: ["#general", "#sombras", "null_void"],
    },
    overview: {
      kicker: "Recorrido rapido",
      title: "Una landing mas facil de seguir",
      description:
        "Primero entiendes la propuesta, luego ves funciones, despues exploras el flujo y al final revisas stack, timeline y repo sin perderte.",
      ctaLabel: "Abrir pagina",
      items: [
        {
          label: "Organiza servidores.",
          description:
            "Define espacios, permisos y estructura base sin pelear con menus innecesarios.",
          href: "#funciones",
        },
        {
          label: "Crea canales claros.",
          description:
            "Texto, anuncios y zonas privadas con una lectura mucho mas limpia para tu comunidad.",
          href: "#funciones",
        },
        {
          label: "Invita a tu grupo.",
          description:
            "Suma gente rapido con un acceso simple y auth por email u OTP cuando lo necesites.",
          href: "#funciones",
        },
        {
          label: "Habla en tiempo real.",
          description:
            "Presencia, typing y replies para que la conversacion se sienta viva desde el primer minuto.",
          href: "#uiux",
        },
      ],
    },
    about: {
      kicker: "Stack",
      title: "Un mini Discord para gente que quiere control real",
      description:
        "Umbra combina React, Vite, Socket.IO, Supabase y Electron para ofrecer un chat rapido, instalable y listo para correr bajo tu propia infraestructura.",
      highlights: [
        "React 18 + Vite en frontend",
        "Express + Socket.IO en tiempo real",
        "Supabase para auth y datos",
        "Electron para desktop",
      ],
      image: mediaAsset("/img/about.png"),
      imageAlt: "Captura principal de la interfaz de Umbra",
    },
    metrics: {
      kicker: "Metricas clave",
      title: "Menos peso. Menos capas. Entrada mas directa.",
      description:
        "Dos lecturas rapidas para presentar la direccion de Umbra en la landing: una huella mas ligera en escritorio y menos pasos antes de quedar dentro de la conversacion.",
      summaryLabel: "Lectura clave",
      highlights: [
        { label: "Enfoque", value: "Desktop y web privados" },
        { label: "Meta", value: "Menos friccion operativa" },
        { label: "Lectura", value: "Comparativa visual de producto" },
      ],
      cards: [
        {
          eyebrow: "Uso base",
          unit: "MB RAM",
          title: "Toma de recursos en apps de mensajes frente a Umbra",
          note:
            "Comparativa visual de escenario base con sesion activa, interfaz abierta y comunidad cargada.",
          summary:
            "Umbra busca mantener una base mas ligera para dejar mas margen libre al sistema y a otras tareas.",
          bars: [
            {
              label: "Otras apps de mensajes",
              display: "620 MB",
              value: 78,
              tone: "warm",
              axisLabel: "Carga alta",
            },
            {
              label: "Umbra",
              display: "290 MB",
              value: 36,
              tone: "cool",
              axisLabel: "Carga baja",
            },
          ],
        },
        {
          eyebrow: "Flujo operativo",
          unit: "Pasos",
          title: "Capas antes de empezar a hablar",
          note:
            "Lectura del recorrido inicial: entrar, quedar listo y aterrizar en un espacio con menos friccion visual.",
          summary:
            "La idea es reducir decisiones previas para que abrir, entrar y empezar a conversar se sienta mas inmediato.",
          bars: [
            {
              label: "Flujo tradicional",
              display: "7 pasos",
              value: 74,
              tone: "neutral",
              axisLabel: "Mas capas",
            },
            {
              label: "Umbra",
              display: "3 pasos",
              value: 32,
              tone: "cool",
              axisLabel: "Mas directo",
            },
          ],
        },
      ],
    },
    showcase: {
      kicker: "Visiones de Umbra",
      title: "Un escenario vivo para el universo Umbra",
      description:
        "Las demas piezas del hero ahora viven en una escena interactiva: una composicion central con profundidad, movimiento y cambios de foco para presentar mejor la identidad visual.",
      cards: [
        {
          title: "Conexion rapida",
          description:
            "Umbra se mueve con inmediatez: mensajes, presencia y respuesta en un lenguaje visual mas luminoso.",
          image: heroShowcaseSlides[0],
          alt: "Arte de Umbra sobre conexion rapida",
        },
        {
          title: "Privacidad bajo el velo",
          description:
            "La promesa central sigue intacta: una experiencia mas privada, controlada y oscura.",
          image: heroShowcaseSlides[1],
          alt: "Arte de Umbra sobre privacidad",
        },
        {
          title: "Empodera tu noche",
          description:
            "Comunidad, flujo y energia visual para reforzar la sensacion de movimiento dentro del producto.",
          image: heroShowcaseSlides[2],
          alt: "Arte de Umbra sobre empoderar la noche",
        },
        {
          title: "Creatividad nocturna",
          description:
            "Una capa mas experimental para presentar branding, producto y tecnologia dentro del mismo universo.",
          image: heroShowcaseSlides[3],
          alt: "Arte de Umbra sobre creatividad nocturna",
        },
      ],
    },
    features: {
      kicker: "Funciones principales",
      title: "Todo lo que necesitas para hablar sin friccion",
      description:
        "Servidores, canales, DMs, respuestas, presencia, typing indicator y un modo escritorio que no depende de una pestaña abierta.",
      primary: {
        title: "La oscuridad nos une",
        description:
          "Una identidad visual nueva para Umbra: personaje propio, interfaz consistente y una direccion mas clara para presentar el producto.",
        media: featureMedia.primary,
        mediaType: "image",
        alt: "Arte principal de Umbra con la mascota y mensajes flotantes",
      },
      cards: [
        {
          title: "Tus servidores",
          description:
            "Crea tus espacios, define roles y organiza la conversacion como quieras, sin depender de moderacion ajena.",
          media: featureMedia.servers,
          mediaType: "image",
        },
        {
          title: "Canales claros",
          description:
            "Texto, anuncios o zonas privadas. Cada canal mantiene su orden y su propio contexto.",
          media: featureMedia.channels,
          mediaType: "image",
        },
        {
          title: "DMs y actividad",
          description:
            "Mensajes directos, replies, lectura por canal y typing indicator para que la presencia se sienta viva.",
          media: featureMedia.dms,
          mediaType: "video",
        },
        {
          title: "Desktop listo",
          description:
            "Una direccion visual y tecnica mas madura para la app de escritorio, con interfaz consistente y enfoque en privacidad.",
          media: featureMedia.desktop,
          mediaType: "image",
          alt: "Arte de privacidad y proteccion para Umbra",
        },
      ],
      downloadCard: {
        title: "Descargas y builds",
        description: "GitHub, desktop y acceso web desde una misma base.",
      },
    },
    capabilities: {
      kicker: "Mas funciones",
      title: "Servidores, canales e invitaciones con mejor ritmo",
      description:
        "Umbra separa mejor cada parte de la conversacion: espacios para comunidades, canales con contexto y entradas rapidas para tu gente.",
      items: [
        {
          kicker: "Servidores",
          title: "Organiza tu base sin pelear con la interfaz",
          description:
            "Agrupa temas, roles y permisos con una estructura clara para que cada servidor se entienda rapido desde el primer vistazo.",
          points: [
            "Roles y categorias claras",
            "Espacios privados por comunidad",
            "Orden desde el primer canal",
          ],
          media: capabilityMedia.servers,
          mediaType: "image",
          hideFragments: true,
          alt: "Vista de servidores en Umbra",
        },
        {
          kicker: "Canales",
          title: "Canales que mantienen cada tema en su sitio",
          description:
            "Texto, anuncios o rincones privados: cada canal tiene identidad propia para que el ruido no tape lo importante.",
          points: [
            "Texto y anuncios separados",
            "Lectura por canal y contexto",
            "Menos ruido para grupos pequenos",
          ],
          media: capabilityMedia.channels,
          mediaType: "video",
          fragmentMedia: capabilityFragmentMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.94] p-2",
          alt: "Vista de canales en Umbra",
        },
        {
          kicker: "Invitaciones",
          title: "Invita amigos y entra a conversar en segundos",
          description:
            "Desde un acceso mas simple hasta el registro por email u OTP, Umbra busca que sumar gente no corte el flujo de la comunidad.",
          points: [
            "Entrada simple para nuevos miembros",
            "Auth por email u OTP",
            "Paso rapido hacia la conversacion",
          ],
          media: capabilityMedia.invites,
          mediaType: "image",
          fragmentMedia: umbraLogoMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.78] p-3",
          fragmentAlt: "Logo de Umbra",
          alt: "Interfaz de acceso e invitaciones de Umbra",
        },
      ],
    },
    experience: {
      kicker: "UI / UX",
      title: "Tres pasos. Sin friccion.",
      description:
        "La nueva presentacion se centra en velocidad, claridad y confianza. Entras, creas, invitas y conversas sin ruido visual.",
      steps: [
        {
          title: "Crea tu servidor",
          description:
            "Un nombre, una imagen y una estructura inicial. Umbra te deja arrancar en segundos.",
        },
        {
          title: "Invita a tu grupo",
          description:
            "Registro por email u OTP y una interfaz pensada para que cualquiera entienda donde esta.",
        },
        {
          title: "Habla en tiempo real",
          description:
            "Presencia, typing, replies y lectura por canal para mantener el pulso de la conversacion.",
        },
      ],
      gallery: experienceGallery.map((src, index) => ({
        src,
        alt: `Vista de experiencia ${index + 1} de Umbra`,
      })),
    },
    timeline: {
      kicker: "Timeline",
      title: "Del acceso a la charla",
      description:
        "Ahora la seccion muestra el flujo real dentro de Umbra: entras, te personalizas, creas tu espacio, invitas a tu gente y empiezas a hablar sin rodeos.",
      steps: [
        {
          marker: "01",
          milestone: "Crea una cuenta",
          sublabel: "Empieza aqui",
          label:
            "Entra con email u OTP y deja lista la puerta de entrada para empezar a usar Umbra en segundos.",
          image: timelineMedia[0],
        },
        {
          marker: "02",
          milestone: "Personalizate",
          sublabel: "Hazlo tuyo",
          label:
            "Ajusta tu perfil, tu avatar y tu presencia para que la experiencia se sienta propia desde el primer minuto.",
          image: timelineMedia[1],
        },
        {
          marker: "03",
          milestone: "Crea un servidor",
          sublabel: "Levanta tu base",
          label:
            "Define nombre, estructura y canales iniciales para ordenar la conversacion sin pelear con menus raros.",
          image: timelineMedia[2],
        },
        {
          marker: "04",
          milestone: "Invita a tus amigos",
          sublabel: "Trae a tu gente",
          label:
            "Comparte el acceso rapido y suma personas a tu comunidad sin cortar el ritmo del recorrido.",
          image: timelineMedia[3],
        },
        {
          marker: "05",
          milestone: "A charlar!!!",
          sublabel: "Todo listo",
          label:
            "Mensajes, presencia y replies entran en juego para que la conversacion arranque de inmediato.",
          image: timelineMedia[4],
        },
      ],
    },
    story: {
      kicker: "Privacidad y repo",
      title: "Sin vigilancia. Sin anuncios. Sin excusas.",
      description:
        "Umbra busca que la privacidad no sea una experiencia fea. La app esta planteada como una base abierta para comunidades que quieren moverse con mas autonomia.",
      points: [
        "Auth con email y OTP",
        "Base pensada para correr en infraestructura propia",
        "Interfaz coherente entre web y desktop",
      ],
      image: storyImage,
      imageAlt: "Arte de privacidad de Umbra",
      ctaTitle: "Abrir GitHub",
    },
    footer: {
      kicker: "Descargas",
      title: "Entra en la sombra",
      description:
        "Tu espacio de comunicacion. Tus reglas. Tu eclipse. Revisa el codigo, abre la demo visual y sigue construyendo Umbra.",
      statusLabel: "Estado actual",
      statusValue: "Private beta",
      statusDescription:
        "Shell desktop, auth real y base privada listas para seguir refinando el producto.",
      metrics: [
        { label: "Auth", value: "Email + OTP" },
        { label: "Shell", value: "Desktop + Web" },
        { label: "Deploy", value: "Self-host ready" },
      ],
      groups: [
        {
          title: "Producto",
          items: [
            { label: "Inicio", href: "#inicio" },
            { label: "Funciones", href: "#funciones" },
            { label: "Interfaz", href: "/interfaz" },
          ],
        },
        {
          title: "Recursos",
          items: [
            { label: "Descargas", href: "/descargas" },
            { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "Descargar desktop", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "Ver codigo", href: "https://github.com/IFROS-GAm/Umbra", external: true },
          ],
        },
        {
          title: "Legal y soporte",
          items: [
            { label: "Terminos de uso", href: "/terminos-de-uso" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Safety Center", href: "/safety-center" },
            { label: "Contactanos", href: "/contactanos" },
          ],
        },
      ],
      primaryButton: { title: "Descargar desktop", href: "/descargas" },
      secondaryButton: { title: "Ver codigo", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      image: footerImage,
      imageAlt: "Vista promocional de Umbra",
      links: [
        { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
        { label: "Inicio", href: "#inicio" },
        { label: "Funciones", href: "#funciones" },
        { label: "Stack", href: "#stack" },
      ],
      copyright: "Umbra",
    },
  },
  en: {
    meta: {
      title: "Umbra - Communicate in the shadows",
    },
    nav: {
      repoButton: "GitHub",
      items: [
        { label: "Home", href: "#inicio" },
        { label: "Flow", href: "#recorrido" },
        { label: "Features", href: "#funciones" },
        { label: "Stack", href: "#stack" },
        { label: "Timeline", href: "#timeline" },
        { label: "Downloads", href: "#descargas" },
        { label: "Repo", href: "#repo" },
      ],
      audioPlay: "Play ambient audio",
      audioPause: "Pause ambient audio",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Communicate in the shadows",
      subtitle: "As above, so below.",
      tagline: "Chat with shadows.",
      microLabel: "Communication network v1.0",
      headlinePrimary: "COMMUNICATE",
      headlineSecondary: "IN THE SHADOW",
      description:
        "Launch your servers, organize your channels and connect with your group inside a darker, faster and more private interface.",
      primaryButton: { title: "Download Umbra", href: "#descargas" },
      secondaryButton: { title: "See features", href: "#funciones" },
      tertiaryButton: { title: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      slides: heroSlides.map((src, index) => ({
        src,
        alt: `Umbra visual ${index + 1}`,
      })),
      spotlight: {
        tag: "Umbra HQ",
        title: "Servers, channels and activity inside a private interface",
      },
      panelTags: ["#general", "#shadows", "null_void"],
    },
    overview: {
      kicker: "Quick flow",
      title: "A landing that is easier to navigate",
      description:
        "First you understand the pitch, then you see the features, then the flow, and finally the stack, timeline and repo without friction.",
      ctaLabel: "Open page",
      items: [
        {
          label: "Organize servers.",
          description:
            "Define spaces, permissions and base structure without fighting through unnecessary menus.",
          href: "#funciones",
        },
        {
          label: "Create clearer channels.",
          description:
            "Text rooms, announcements and private zones stay easier to read for the whole community.",
          href: "#funciones",
        },
        {
          label: "Invite your people.",
          description:
            "Bring people in quickly with simpler entry points plus email or OTP auth when needed.",
          href: "#funciones",
        },
        {
          label: "Talk in real time.",
          description:
            "Presence, typing and replies make the conversation feel alive from the very first minute.",
          href: "#uiux",
        },
      ],
    },
    about: {
      kicker: "Stack",
      title: "A mini Discord for people who want real control",
      description:
        "Umbra blends React, Vite, Socket.IO, Supabase and Electron to deliver a fast, installable chat experience ready to run on your own infrastructure.",
      highlights: [
        "React 18 + Vite frontend",
        "Express + Socket.IO in real time",
        "Supabase for auth and data",
        "Electron for desktop",
      ],
      image: mediaAsset("/img/about.png"),
      imageAlt: "Main Umbra interface screenshot",
    },
    metrics: {
      kicker: "Key metrics",
      title: "Lighter load. Fewer layers. Faster entry.",
      description:
        "Two quick reads that frame Umbra on the landing page: a lighter desktop footprint and fewer steps before you are inside the conversation.",
      summaryLabel: "Key read",
      highlights: [
        { label: "Focus", value: "Private desktop and web" },
        { label: "Goal", value: "Less operational friction" },
        { label: "Format", value: "Visual product comparison" },
      ],
      cards: [
        {
          eyebrow: "Base usage",
          unit: "MB RAM",
          title: "Resource load in other messaging apps versus Umbra",
          note:
            "Visual comparison for a base scenario with an active session, open interface and a loaded community.",
          summary:
            "Umbra is positioned as a lighter base so your system keeps more headroom for the rest of the workflow.",
          bars: [
            {
              label: "Other messaging apps",
              display: "620 MB",
              value: 78,
              tone: "warm",
              axisLabel: "Higher load",
            },
            {
              label: "Umbra",
              display: "290 MB",
              value: 36,
              tone: "cool",
              axisLabel: "Lower load",
            },
          ],
        },
        {
          eyebrow: "Operational flow",
          unit: "Steps",
          title: "Layers before you can start talking",
          note:
            "A quick read of the opening flow: enter, get ready and land in a space with less visual friction.",
          summary:
            "The goal is to reduce pre-conversation decisions so opening, entering and talking feels more immediate.",
          bars: [
            {
              label: "Traditional flow",
              display: "7 steps",
              value: 74,
              tone: "neutral",
              axisLabel: "More layers",
            },
            {
              label: "Umbra",
              display: "3 steps",
              value: 32,
              tone: "cool",
              axisLabel: "More direct",
            },
          ],
        },
      ],
    },
    showcase: {
      kicker: "Umbra visions",
      title: "A living stage for the Umbra universe",
      description:
        "The remaining hero artworks now live inside an interactive scene: a central composition with depth, motion and shifting focus to present the new visual identity.",
      cards: [
        {
          title: "Fast connection",
          description:
            "Umbra moves with immediacy: messages, presence and response wrapped in a brighter visual language.",
          image: heroShowcaseSlides[0],
          alt: "Umbra artwork about fast connection",
        },
        {
          title: "Privacy under the veil",
          description:
            "The core promise stays intact: a darker, more private and more controlled experience.",
          image: heroShowcaseSlides[1],
          alt: "Umbra artwork about privacy",
        },
        {
          title: "Empower your night",
          description:
            "Community, flow and visual energy reinforce the feeling of movement inside the product.",
          image: heroShowcaseSlides[2],
          alt: "Umbra artwork about empowering the night",
        },
        {
          title: "Night creativity",
          description:
            "A more experimental layer to present branding, product and technology inside the same universe.",
          image: heroShowcaseSlides[3],
          alt: "Umbra artwork about creativity",
        },
      ],
    },
    features: {
      kicker: "Core features",
      title: "Everything you need to talk without friction",
      description:
        "Servers, channels, DMs, replies, presence, typing states and a desktop mode that does not depend on a browser tab.",
      primary: {
        title: "Darkness brings us together",
        description:
          "A refreshed visual identity for Umbra: a dedicated mascot, cleaner UI language and a stronger way to present the product.",
        media: featureMedia.primary,
        mediaType: "image",
        alt: "Umbra key art with the mascot and floating messages",
      },
      cards: [
        {
          title: "Your servers",
          description:
            "Build your own spaces, define roles and shape the conversation without outside moderation deciding for you.",
          media: featureMedia.servers,
          mediaType: "image",
        },
        {
          title: "Clear channels",
          description:
            "Text rooms, announcements or private areas. Every channel keeps its purpose and context intact.",
          media: featureMedia.channels,
          mediaType: "image",
        },
        {
          title: "DMs and presence",
          description:
            "Direct messages, replies, read states and typing indicators that make the space feel alive.",
          media: featureMedia.dms,
          mediaType: "video",
        },
        {
          title: "Desktop ready",
          description:
            "A more mature visual and technical direction for the desktop app, with consistent UI and privacy in focus.",
          media: featureMedia.desktop,
          mediaType: "image",
          alt: "Umbra privacy artwork",
        },
      ],
      downloadCard: {
        title: "Downloads and builds",
        description: "GitHub, desktop and web access from a single source.",
      },
    },
    capabilities: {
      kicker: "More functionality",
      title: "Servers, channels and invites with a smoother flow",
      description:
        "Umbra gives each layer of the conversation its own space: servers for communities, channels with context and faster ways to bring people in.",
      items: [
        {
          kicker: "Servers",
          title: "Shape your server without fighting the interface",
          description:
            "Group topics, roles and permissions inside a layout that reads fast, so every community feels organized from the first glance.",
          points: [
            "Clear roles and categories",
            "Private spaces per community",
            "Order from the first channel",
          ],
          media: capabilityMedia.servers,
          mediaType: "image",
          hideFragments: true,
          alt: "Umbra server view",
        },
        {
          kicker: "Channels",
          title: "Channels that keep each topic in its lane",
          description:
            "Text rooms, announcements and private areas each stay readable, so context does not get buried under noise.",
          points: [
            "Separate text and announcements",
            "Per-channel read context",
            "Less noise for smaller groups",
          ],
          media: capabilityMedia.channels,
          mediaType: "video",
          fragmentMedia: capabilityFragmentMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.94] p-2",
          alt: "Umbra channel view",
        },
        {
          kicker: "Invites",
          title: "Invite friends and get them talking fast",
          description:
            "From simpler entry points to email or OTP signup, Umbra is designed to help new people join without breaking the momentum.",
          points: [
            "Simple entry for new members",
            "Email or OTP auth",
            "Fast path into the conversation",
          ],
          media: capabilityMedia.invites,
          mediaType: "image",
          fragmentMedia: umbraLogoMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.78] p-3",
          fragmentAlt: "Umbra logo",
          alt: "Umbra invite and onboarding view",
        },
      ],
    },
    experience: {
      kicker: "UI / UX",
      title: "Three steps. No friction.",
      description:
        "The updated presentation focuses on speed, clarity and trust. You enter, create, invite and talk without visual noise getting in the way.",
      steps: [
        {
          title: "Create your server",
          description:
            "A name, an image and an initial structure. Umbra gets you started in seconds.",
        },
        {
          title: "Invite your people",
          description:
            "Email or OTP registration plus an interface that makes it clear where you are at all times.",
        },
        {
          title: "Talk in real time",
          description:
            "Presence, typing, replies and read states keep the rhythm of the conversation alive.",
        },
      ],
      gallery: experienceGallery.map((src, index) => ({
        src,
        alt: `Umbra experience view ${index + 1}`,
      })),
    },
    timeline: {
      kicker: "Timeline",
      title: "From signup to conversation",
      description:
        "The timeline now follows the real Umbra flow: sign up, personalize, create your space, invite your people and start talking right away.",
      steps: [
        {
          marker: "01",
          milestone: "Create an account",
          sublabel: "Start here",
          label:
            "Sign in with email or OTP and get your access ready in just a few moments.",
          image: timelineMedia[0],
        },
        {
          marker: "02",
          milestone: "Personalize yourself",
          sublabel: "Make it yours",
          label:
            "Tune your profile, avatar and presence so Umbra already feels like your own space.",
          image: timelineMedia[1],
        },
        {
          marker: "03",
          milestone: "Create a server",
          sublabel: "Build your base",
          label:
            "Set the name, initial structure and channels so the conversation stays organized from day one.",
          image: timelineMedia[2],
        },
        {
          marker: "04",
          milestone: "Invite your friends",
          sublabel: "Bring your people",
          label:
            "Share access fast and bring people into the community without breaking the flow.",
          image: timelineMedia[3],
        },
        {
          marker: "05",
          milestone: "Start chatting!!!",
          sublabel: "Everything is ready",
          label:
            "Messages, presence and replies take over so the conversation starts immediately.",
          image: timelineMedia[4],
        },
      ],
    },
    story: {
      kicker: "Privacy and repo",
      title: "No surveillance. No ads. No excuses.",
      description:
        "Umbra aims to prove that privacy does not have to look ugly. The app is designed as an open foundation for communities that want more autonomy.",
      points: [
        "Email and OTP auth",
        "Built to run on your own infrastructure",
        "Consistent experience across web and desktop",
      ],
      image: storyImage,
      imageAlt: "Umbra privacy artwork",
      ctaTitle: "Open GitHub",
    },
    footer: {
      kicker: "Downloads",
      title: "Step into the shadow",
      description:
        "Your communication space. Your rules. Your eclipse. Browse the code, review the visuals and keep building Umbra.",
      statusLabel: "Current build",
      statusValue: "Private beta",
      statusDescription:
        "Desktop shell, real auth and a private-ready base shaped to keep the product moving.",
      metrics: [
        { label: "Auth", value: "Email + OTP" },
        { label: "Shell", value: "Desktop + Web" },
        { label: "Deploy", value: "Self-host ready" },
      ],
      groups: [
        {
          title: "Product",
          items: [
            { label: "Home", href: "#inicio" },
            { label: "Features", href: "#funciones" },
            { label: "Interface", href: "/interfaz" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Downloads", href: "/descargas" },
            { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "Download desktop", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "View code", href: "https://github.com/IFROS-GAm/Umbra", external: true },
          ],
        },
        {
          title: "Legal and support",
          items: [
            { label: "Terms of Use", href: "/terminos-de-uso" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Safety Center", href: "/safety-center" },
            { label: "Contact Us", href: "/contactanos" },
          ],
        },
      ],
      primaryButton: { title: "Download desktop", href: "/descargas" },
      secondaryButton: { title: "View code", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      image: footerImage,
      imageAlt: "Umbra promotional artwork",
      links: [
        { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
        { label: "Home", href: "#inicio" },
        { label: "Features", href: "#funciones" },
        { label: "Stack", href: "#stack" },
      ],
      copyright: "Umbra",
    },
  },
  fr: {
    meta: {
      title: "Umbra - Communique dans l'ombre",
    },
    nav: {
      repoButton: "GitHub",
      items: [
        { label: "Accueil", href: "#inicio" },
        { label: "Parcours", href: "#recorrido" },
        { label: "Fonctions", href: "#funciones" },
        { label: "Stack", href: "#stack" },
        { label: "Timeline", href: "#timeline" },
        { label: "Téléchargements", href: "#descargas" },
        { label: "Repo", href: "#repo" },
      ],
      audioPlay: "Lancer l'audio d'ambiance",
      audioPause: "Mettre l'audio d'ambiance en pause",
      languageLabel: "Langue",
    },
    hero: {
      eyebrow: "Communique dans l'ombre",
      subtitle: "Comme en haut, comme en bas.",
      tagline: "Discute avec les ombres.",
      microLabel: "Reseau de communication v1.0",
      headlinePrimary: "COMMUNIQUE",
      headlineSecondary: "DANS L'OMBRE",
      description:
        "Ton serveur, tes messages et tes règles. Umbra reprend l'énergie de Discord dans une expérience plus sombre, plus rapide et plus privée.",
      primaryButton: { title: "Voir le repo", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      secondaryButton: { title: "Voir les fonctions", href: "#funciones" },
      tertiaryButton: { title: "Télécharger desktop", href: "#descargas" },
      slides: heroSlides.map((src, index) => ({
        src,
        alt: `Visuel Umbra ${index + 1}`,
      })),
      spotlight: {
        tag: "Noctis Lab",
        title: "Communauté, DMs et présence en temps réel",
      },
    },
    about: {
      kicker: "Stack",
      title: "Un mini Discord pour ceux qui veulent un vrai contrôle",
      description:
        "Umbra rassemble React, Vite, Socket.IO, Supabase et Electron pour offrir un chat rapide, installable et prêt à tourner sur ta propre infrastructure.",
      highlights: [
        "Frontend React 18 + Vite",
        "Express + Socket.IO en temps réel",
        "Supabase pour l'auth et les données",
        "Electron pour desktop",
      ],
      image: mediaAsset("/img/about.png"),
      imageAlt: "Capture principale de l'interface Umbra",
    },
    metrics: {
      kicker: "Metriques cle",
      title: "Moins de charge. Moins de couches. Entree plus directe.",
      description:
        "Deux lectures rapides pour presenter Umbra dans la landing : une empreinte desktop plus legere et moins d'etapes avant d'entrer dans la conversation.",
      summaryLabel: "Lecture cle",
      highlights: [
        { label: "Focus", value: "Desktop et web prives" },
        { label: "But", value: "Moins de friction operationnelle" },
        { label: "Format", value: "Comparatif visuel produit" },
      ],
      cards: [
        {
          eyebrow: "Usage de base",
          unit: "MB RAM",
          title: "Charge de ressources des autres apps de messages face a Umbra",
          note:
            "Comparatif visuel d'un scenario de base avec session active, interface ouverte et communaute chargee.",
          summary:
            "Umbra cherche une base plus legere pour laisser plus de marge au systeme et au reste du flux.",
          bars: [
            {
              label: "Autres apps de messages",
              display: "620 MB",
              value: 78,
              tone: "warm",
              axisLabel: "Charge haute",
            },
            {
              label: "Umbra",
              display: "290 MB",
              value: 36,
              tone: "cool",
              axisLabel: "Charge basse",
            },
          ],
        },
        {
          eyebrow: "Flux operatif",
          unit: "Etapes",
          title: "Couches avant de commencer a parler",
          note:
            "Lecture rapide du parcours initial : entrer, etre pret et arriver dans un espace avec moins de friction visuelle.",
          summary:
            "L'objectif est de reduire les decisions avant la conversation pour que l'ouverture et l'entree soient plus immediates.",
          bars: [
            {
              label: "Flux traditionnel",
              display: "7 etapes",
              value: 74,
              tone: "neutral",
              axisLabel: "Plus de couches",
            },
            {
              label: "Umbra",
              display: "3 etapes",
              value: 32,
              tone: "cool",
              axisLabel: "Plus direct",
            },
          ],
        },
      ],
    },
    showcase: {
      kicker: "Visions Umbra",
      title: "Une scene vivante pour l'univers Umbra",
      description:
        "Les autres visuels du hero vivent maintenant dans une scene interactive : composition centrale, profondeur, mouvement et changements de focus pour mieux montrer la nouvelle identite.",
      cards: [
        {
          title: "Connexion rapide",
          description:
            "Umbra avance avec immediatete : messages, presence et reponse dans un langage visuel plus lumineux.",
          image: heroShowcaseSlides[0],
          alt: "Illustration Umbra sur la connexion rapide",
        },
        {
          title: "Vie privee sous le voile",
          description:
            "La promesse centrale reste la meme : une experience plus sombre, plus privee et plus controlee.",
          image: heroShowcaseSlides[1],
          alt: "Illustration Umbra sur la vie privee",
        },
        {
          title: "Renforce ta nuit",
          description:
            "Communaute, flux et energie visuelle pour renforcer la sensation de mouvement dans le produit.",
          image: heroShowcaseSlides[2],
          alt: "Illustration Umbra sur la nuit",
        },
        {
          title: "Creativite nocturne",
          description:
            "Une couche plus experimentale pour presenter branding, produit et technologie dans le meme univers.",
          image: heroShowcaseSlides[3],
          alt: "Illustration Umbra sur la creativite",
        },
      ],
    },
    features: {
      kicker: "Fonctions principales",
      title: "Tout ce qu'il faut pour discuter sans friction",
      description:
        "Serveurs, canaux, DMs, réponses, présence, indicateur de frappe et un mode desktop qui ne dépend pas d'un onglet ouvert.",
      primary: {
        title: "L'obscurité nous unit",
        description:
          "Une nouvelle identité visuelle pour Umbra : mascotte dédiée, langage d'interface plus clair et une présentation plus forte du produit.",
        media: featureMedia.primary,
        mediaType: "image",
        alt: "Illustration principale d'Umbra avec la mascotte et des messages flottants",
      },
      cards: [
        {
          title: "Tes serveurs",
          description:
            "Crée tes espaces, définis les rôles et organise les échanges sans dépendre d'une modération extérieure.",
          media: featureMedia.servers,
          mediaType: "image",
        },
        {
          title: "Canaux lisibles",
          description:
            "Texte, annonces ou zones privées. Chaque canal garde son but et son contexte.",
          media: featureMedia.channels,
          mediaType: "image",
        },
        {
          title: "DMs et présence",
          description:
            "Messages directs, réponses, états de lecture et indicateurs de frappe pour une présence vraiment vivante.",
          media: featureMedia.dms,
          mediaType: "video",
        },
        {
          title: "Desktop prêt",
          description:
            "Une direction visuelle et technique plus mûre pour l'app desktop, avec une interface cohérente et la confidentialité au centre.",
          media: featureMedia.desktop,
          mediaType: "image",
          alt: "Illustration Umbra sur la confidentialité",
        },
      ],
      downloadCard: {
        title: "Téléchargements et builds",
        description: "GitHub, desktop et accès web depuis une seule base.",
      },
    },
    capabilities: {
      kicker: "Plus de fonctions",
      title: "Serveurs, canaux et invitations avec un meilleur rythme",
      description:
        "Umbra separe mieux chaque partie de la conversation : des serveurs pour les communautes, des canaux avec contexte et une entree plus simple pour ton groupe.",
      items: [
        {
          kicker: "Serveurs",
          title: "Organise ta base sans lutter contre l'interface",
          description:
            "Regroupe sujets, roles et permissions dans une structure lisible pour que chaque serveur paraisse clair des le premier coup d'oeil.",
          points: [
            "Roles et categories lisibles",
            "Espaces prives par communaute",
            "Ordre des le premier canal",
          ],
          media: capabilityMedia.servers,
          mediaType: "image",
          hideFragments: true,
          alt: "Vue des serveurs Umbra",
        },
        {
          kicker: "Canaux",
          title: "Des canaux qui gardent chaque sujet a sa place",
          description:
            "Texte, annonces ou zones privees : chaque canal garde son contexte pour que le bruit ne mange pas l'essentiel.",
          points: [
            "Texte et annonces separes",
            "Contexte de lecture par canal",
            "Moins de bruit pour les petits groupes",
          ],
          media: capabilityMedia.channels,
          mediaType: "video",
          fragmentMedia: capabilityFragmentMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.94] p-2",
          alt: "Vue des canaux Umbra",
        },
        {
          kicker: "Invitations",
          title: "Invite tes amis et lance la conversation plus vite",
          description:
            "Avec une entree plus simple et un auth par email ou OTP, Umbra aide les nouveaux membres a rejoindre le groupe sans casser le rythme.",
          points: [
            "Entree simple pour les nouveaux",
            "Auth par email ou OTP",
            "Acces rapide a la conversation",
          ],
          media: capabilityMedia.invites,
          mediaType: "image",
          fragmentMedia: umbraLogoMedia,
          fragmentMediaType: "image",
          fragmentFit: "contain",
          fragmentClassName: "scale-[0.78] p-3",
          fragmentAlt: "Logo Umbra",
          alt: "Vue des invitations Umbra",
        },
      ],
    },
    experience: {
      kicker: "UI / UX",
      title: "Trois étapes. Sans friction.",
      description:
        "La nouvelle présentation met l'accent sur la vitesse, la clarté et la confiance. Tu entres, tu crées, tu invites et tu échanges sans bruit visuel.",
      steps: [
        {
          title: "Crée ton serveur",
          description:
            "Un nom, une image et une structure initiale. Umbra te met en route en quelques secondes.",
        },
        {
          title: "Invite ton groupe",
          description:
            "Inscription par email ou OTP et une interface qui montre clairement où tu te trouves.",
        },
        {
          title: "Parle en temps réel",
          description:
            "Présence, frappe, réponses et lecture gardent le rythme de la conversation vivant.",
        },
      ],
      gallery: experienceGallery.map((src, index) => ({
        src,
        alt: `Vue d'expérience Umbra ${index + 1}`,
      })),
    },
    timeline: {
      kicker: "Timeline",
      title: "De l'entree a la conversation",
      description:
        "La timeline suit maintenant le vrai parcours dans Umbra : entrer, personnaliser, creer, inviter et commencer a parler sans detour.",
      steps: [
        {
          marker: "01",
          milestone: "Cree un compte",
          sublabel: "Commence ici",
          label:
            "Entre avec email ou OTP et prepare ton acces en quelques instants.",
          image: timelineMedia[0],
        },
        {
          marker: "02",
          milestone: "Personnalise-toi",
          sublabel: "Fais-le tien",
          label:
            "Regle ton profil, ton avatar et ta presence pour que Umbra ressemble deja a ton espace.",
          image: timelineMedia[1],
        },
        {
          marker: "03",
          milestone: "Cree un serveur",
          sublabel: "Monte ta base",
          label:
            "Definis le nom, la structure et les premiers canaux pour organiser les echanges des le debut.",
          image: timelineMedia[2],
        },
        {
          marker: "04",
          milestone: "Invite tes amis",
          sublabel: "Ramene ton groupe",
          label:
            "Partage l'acces rapidement et fais entrer les gens sans casser le rythme.",
          image: timelineMedia[3],
        },
        {
          marker: "05",
          milestone: "A discuter!!!",
          sublabel: "Tout est pret",
          label:
            "Messages, presence et reponses prennent le relais pour lancer la conversation tout de suite.",
          image: timelineMedia[4],
        },
      ],
    },
    story: {
      kicker: "Confidentialité et repo",
      title: "Pas de surveillance. Pas de pub. Pas d'excuses.",
      description:
        "Umbra veut montrer que la confidentialité peut aussi être belle. L'application est pensée comme une base ouverte pour des communautés plus autonomes.",
      points: [
        "Auth par email et OTP",
        "Pensé pour tourner sur ta propre infrastructure",
        "Expérience cohérente entre web et desktop",
      ],
      image: storyImage,
      imageAlt: "Illustration Umbra sur la confidentialité",
      ctaTitle: "Ouvrir GitHub",
    },
    footer: {
      kicker: "Téléchargements",
      title: "Entre dans l'ombre",
      description:
        "Ton espace de communication. Tes règles. Ton éclipse. Explore le code, regarde les visuels et continue à faire évoluer Umbra.",
      statusLabel: "Etat actuel",
      statusValue: "Beta privee",
      statusDescription:
        "Shell desktop, auth reelle et base privee prêtes pour faire avancer le produit.",
      metrics: [
        { label: "Auth", value: "Email + OTP" },
        { label: "Shell", value: "Desktop + Web" },
        { label: "Deploy", value: "Self-host ready" },
      ],
      groups: [
        {
          title: "Produit",
          items: [
            { label: "Accueil", href: "#inicio" },
            { label: "Fonctions", href: "#funciones" },
            { label: "Interface", href: "/interfaz" },
          ],
        },
        {
          title: "Ressources",
          items: [
            { label: "Downloads", href: "/descargas" },
            { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "Telecharger desktop", href: "https://github.com/IFROS-GAm/Umbra", external: true },
            { label: "Voir le code", href: "https://github.com/IFROS-GAm/Umbra", external: true },
          ],
        },
        {
          title: "Legal et support",
          items: [
            { label: "Termes d'utilisation", href: "/terminos-de-uso" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Safety Center", href: "/safety-center" },
            { label: "Contact", href: "/contactanos" },
          ],
        },
      ],
      primaryButton: { title: "Télécharger desktop", href: "/descargas" },
      secondaryButton: { title: "Voir le code", href: "https://github.com/IFROS-GAm/Umbra", external: true },
      image: footerImage,
      imageAlt: "Visuel promotionnel Umbra",
      links: [
        { label: "GitHub", href: "https://github.com/IFROS-GAm/Umbra", external: true },
        { label: "Accueil", href: "#inicio" },
        { label: "Fonctions", href: "#funciones" },
        { label: "Stack", href: "#stack" },
      ],
      copyright: "Umbra",
    },
  },
};
