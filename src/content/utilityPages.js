const umbraWebAppUrl = "https://umbra-suaj.onrender.com/";
const windowsInstallerUrl = "/Umbra-instalador/Instalador-Umbra-v0.2.0.exe";

export const utilityPages = {
  es: {
    nav: {
      items: [
        { label: "INICIO", href: "/" },
        { label: "DESCARGAS", href: "/descargas" },
        { label: "TERMINOS", href: "/terminos-de-uso" },
        { label: "PRIVACY", href: "/privacy-policy" },
        { label: "SAFETY", href: "/safety-center" },
        { label: "CONTACTO", href: "/contactanos" },
      ],
    },
    downloads: {
      kicker: "Descargas",
      title: "Descarga Umbra o continua en la web",
      description:
        "Empieza con el cliente de Windows o entra ya mismo desde el navegador. Mobile llegara despues como la siguiente superficie del producto.",
      cards: [
        {
          eyebrow: "Sitio web",
          title: "Continuar en la web",
          status: "Disponible ahora",
          description:
            "Entra a la app web real de Umbra desde el navegador para registrarte, iniciar sesion y usar la red social sin instalar nada.",
          points: ["App web en vivo", "Acceso inmediato", "Sin instalacion"],
          ctaLabel: "Continuar en la web",
          href: umbraWebAppUrl,
        },
        {
          eyebrow: "Desktop app",
          title: "Descargar para Windows",
          status: "Disponible ahora",
          description:
            "Descarga la version de escritorio directamente aqui para entrar con una base mas solida, shell dedicado y auth real.",
          points: ["Electron shell", "Auth real", "Base privada"],
          ctaLabel: "Descargar para Windows",
          href: windowsInstallerUrl,
        },
        {
          eyebrow: "APK mobile",
          title: "Umbra Mobile",
          status: "Proximamente",
          description:
            "La variante Android llegara despues de consolidar web y desktop para mantener la experiencia consistente entre superficies.",
          points: ["Sin release aun", "Pensada para Android", "Misma base de producto"],
        },
      ],
      aside: {
        label: "Canal oficial",
        statsValue: "02+",
        title: "Distribucion centralizada",
        description:
          "Por ahora, el punto oficial para revisar codigo, desktop y cambios del proyecto sigue siendo el repositorio de Umbra.",
        items: ["Website", "Desktop", "Proximo APK mobile"],
      },
      backLabel: "Volver al inicio",
    },
    terms: {
      kicker: "Legal",
      title: "Terminos de uso de Umbra",
      description:
        "Estas condiciones regulan el uso de la web de Umbra, la app de escritorio, clientes oficiales y cualquier otra superficie conectada al producto.",
      effectiveLabel: "En vigor",
      effectiveValue: "17 abril 2026",
      updatedLabel: "Ultima actualizacion",
      updatedValue: "17 abril 2026",
      tocLabel: "Contenido",
      noticeLabel: "Nota importante",
      notice:
        "Lee este documento completo antes de crear una cuenta, descargar el cliente o administrar una comunidad en Umbra. Estas condiciones afectan tu acceso, tu contenido, el uso del software oficial y la continuidad del servicio.",
      introParagraphs: [
        "Cuando en este documento decimos Umbra, nosotros o nuestro, nos referimos al sitio web, la app de escritorio, futuros clientes oficiales, integraciones publicadas y la infraestructura asociada operada bajo la marca Umbra.",
        "Cuando decimos tu, usuario o cuenta, hablamos de la persona o entidad que accede al producto, crea una cuenta, administra un espacio o utiliza cualquier superficie oficial de Umbra.",
        "El uso de Umbra tambien se relaciona con la Privacy Policy, el Safety Center y cualquier regla adicional publicada para comunidades, integraciones, funciones beta o futuras funciones de pago. Al usar Umbra, aceptas estas condiciones y las politicas relacionadas.",
        "Estas condiciones toman como base el documento de terminos que compartiste, pero aqui quedan adaptadas a la realidad actual de Umbra como producto centrado en comunicacion privada, clientes oficiales y espacios propios.",
      ],
      sections: [
        {
          id: "quienes-somos",
          title: "1. Quienes somos",
          paragraphs: [
            "Umbra existe para ofrecer una base de comunicacion mas privada, mas ordenada y mas legible entre web, escritorio y futuras superficies. Eso incluye espacios, canales, presencia, clientes oficiales, materiales de interfaz y cualquier herramienta que publiquemos con la marca Umbra.",
            "El producto puede operar en diferentes entornos, incluyendo navegador, cliente de escritorio y clientes oficiales futuros. Algunas funciones podran mantenerse en beta, estar limitadas por region o cambiar de disponibilidad mientras el producto evoluciona.",
          ],
        },
        {
          id: "edad-minima",
          title: "2. Edad minima y responsabilidad de padres o tutores",
          paragraphs: [
            "Al acceder a Umbra, confirmas que cumples la edad minima exigida por la ley de tu pais y que no usas el servicio si eres menor de la edad permitida para crear una cuenta o participar en determinados espacios.",
            "Si no tienes claro si puedes aceptar estas condiciones por tu cuenta, debes revisarlas junto a tu padre, madre o tutor legal antes de usar el producto. Si un menor utiliza Umbra con autorizacion, la persona responsable tambien asume la supervision razonable de ese uso.",
          ],
          bullets: [
            "No crear cuentas si no cumples la edad legal minima",
            "No ocultar tu condicion de menor para acceder a zonas restringidas",
            "Los tutores deben revisar el uso cuando corresponda",
          ],
        },
        {
          id: "que-puedes-esperar",
          title: "3. Que puedes esperar de Umbra",
          paragraphs: [
            "Umbra esta pensado para que puedas comunicarte en espacios privados o compartidos mediante texto, presencia, roles, paneles y otras capas que el producto vaya incorporando con el tiempo. Algunas comunidades podran habilitar canales de voz, archivos, bots, integraciones o flujos adicionales cuando existan.",
            "El orden de los mensajes, la presencia y la navegacion entre espacios intentan ser claros y directos, pero algunas funciones podran variar segun la superficie desde la que entres, la configuracion del espacio, tu rol o el estado tecnico del producto.",
            "Tambien podemos anadir, ajustar o retirar funciones si ya no tienen sentido, si generan riesgo, si afectan la seguridad o si necesitamos simplificar la experiencia. Haremos cambios con criterio de producto, pero no garantizamos que todas las funciones existan siempre ni que la experiencia permanezca identica en cada version.",
          ],
          bullets: [
            "Web, desktop y futuros clientes oficiales",
            "Espacios, canales, presencia y permisos",
            "Cambios graduales conforme el producto madure",
          ],
        },
        {
          id: "tu-cuenta",
          title: "4. Tu cuenta Umbra",
          paragraphs: [
            "Para acceder de forma continua a Umbra, normalmente necesitaras crear una cuenta y proporcionar datos basicos como correo, nombre de usuario, credenciales o mecanismos de verificacion. Debes mantener esa informacion razonablemente exacta y actualizada.",
            "Eres responsable de la seguridad de tu cuenta, de tus sesiones, de tus codigos de acceso y de cualquier dispositivo en el que dejes la sesion abierta. Si sospechas compromiso, acceso no autorizado o perdida de control, debes actuar de inmediato y usar las rutas oficiales de recuperacion o contacto.",
            "No puedes vender, prestar, licenciar, transferir o ceder tu cuenta, tu identificador, tu URL personalizada ni cualquier otro identificador unico asociado a Umbra sin autorizacion expresa. Tambien nos reservamos el derecho de ajustar, recuperar o retirar identificadores cuando exista conflicto, fraude, suplantacion o necesidad operativa.",
          ],
          bullets: [
            "Protege credenciales, OTP y sesiones",
            "Usa informacion real y mantenla actualizada",
            "No transfieras cuentas ni identificadores",
          ],
        },
        {
          id: "contenido",
          title: "5. Contenido dentro de Umbra",
          paragraphs: [
            "Cuando hablamos de tu contenido, nos referimos a todo lo que subes, escribes, compartes, transmites o publicas dentro de Umbra: mensajes, enlaces, imagenes, archivos, nombres, perfiles, avatares, estados, medios y cualquier otro material que agregues al producto.",
            "Tu contenido sigue siendo tuyo, pero al usar Umbra nos concedes el permiso limitado necesario para alojarlo, procesarlo, mostrarlo, distribuirlo dentro del producto y hacer las copias tecnicas que hagan falta para operar, mejorar y asegurar el servicio conforme a la ley aplicable.",
            "Debes asegurarte de tener derecho a publicar lo que compartes. Tambien debes comprender el contexto del espacio en el que publicas: algunos entornos podran ser privados, otros mas abiertos y otros podran crecer o cambiar de permisos con el tiempo segun lo decidan sus responsables.",
            "Podemos bloquear, revisar o retirar contenido si infringe estas condiciones, otras politicas publicadas, la ley aplicable o si genera riesgo para Umbra, para otros usuarios o para la integridad del producto.",
          ],
          bullets: [
            "Tu contenido sigue siendo tuyo",
            "Nos das un permiso tecnico limitado para operar el servicio",
            "Los responsables del espacio pueden definir permisos y visibilidad",
            "El contenido puede moderarse o retirarse por riesgo o incumplimiento",
          ],
        },
        {
          id: "software",
          title: "6. Software y clientes oficiales",
          paragraphs: [
            "Algunas superficies de Umbra requieren descargar software cliente. Mientras cumplas estas condiciones, te concedemos una licencia personal, limitada, no exclusiva, no sublicenciable y no transferible para instalar y usar ese software con el unico fin de acceder a Umbra.",
            "No puedes copiar, revender, modificar, distribuir, descompilar, extraer, hacer ingenieria inversa ni intentar romper los clientes oficiales o los servicios de Umbra salvo cuando una ley aplicable lo permita de forma expresa.",
            "Algunas partes del producto podran apoyarse en software de codigo abierto o servicios de terceros. Cuando eso ocurra, podran existir terminos adicionales para esas piezas, y el uso de dichas integraciones seguira dependiendo de tus decisiones y de las reglas del tercero correspondiente.",
          ],
          bullets: [
            "Licencia personal para usar clientes oficiales",
            "No ingenieria inversa ni redistribucion no autorizada",
            "Algunas integraciones pueden depender de terceros u open source",
          ],
        },
        {
          id: "restricciones",
          title: "7. Restricciones de uso",
          paragraphs: [
            "Debes usar Umbra de forma legal, autorizada y razonable. Eso significa no danar a otras personas, no comprometer la infraestructura ni utilizar el producto para abuso, fraude o actividades prohibidas.",
          ],
          bullets: [
            "No acceder ni intentar acceder a cuentas o zonas no publicas sin autorizacion",
            "No hacer spam, automatizaciones abusivas ni mensajeria maliciosa",
            "No distribuir malware, codigo hostil ni herramientas para romper el servicio",
            "No suplantar identidades, roles o marcas dentro de Umbra",
            "No raspar datos, revender informacion ni explotar comercialmente el contenido del servicio sin permiso",
            "No usar Umbra para planear, promover o causar dano real a personas o comunidades",
          ],
        },
        {
          id: "suspension-cambios",
          title: "8. Disponibilidad, cambios y suspension",
          paragraphs: [
            "Umbra sigue en evolucion activa. Por eso podemos cambiar interfaces, permisos, requisitos tecnicos, limites, distribucion o funciones en cualquier momento cuando sea necesario para mejorar estabilidad, claridad, seguridad o direccion de producto.",
            "Tambien puede haber caidas, interrupciones, perdida temporal de acceso, reinicios de funciones o cambios que afecten contenido, historiales o disponibilidad. Intentaremos reducir disrupciones, pero no podemos garantizar servicio continuo ni recuperacion absoluta de todo dato ante fallos o migraciones.",
            "Podemos limitar, congelar o suspender cuentas, espacios, integraciones o accesos si detectamos abuso, incumplimiento, riesgo tecnico, fraude, suplantacion o uso contrario a estas condiciones.",
          ],
        },
        {
          id: "pagos",
          title: "9. Servicios de pago y compras futuras",
          paragraphs: [
            "La funcionalidad base de Umbra puede mantenerse gratuita, pero en el futuro podriamos ofrecer funciones premium, mejoras, capacidad adicional, herramientas para comunidades o servicios pagados vinculados a web, desktop o clientes futuros.",
            "Si Umbra incorpora compras, suscripciones o monetizacion, podran aplicarse terminos adicionales antes de activar esas funciones. No deberias asumir que cualquier funcion futura estara incluida en el acceso base.",
          ],
        },
        {
          id: "garantias-responsabilidad",
          title: "10. Garantias y responsabilidad",
          paragraphs: [
            "Umbra se ofrece en el estado en que exista en cada momento. Hacemos esfuerzos razonables para que funcione bien, pero no prometemos que el producto sea perfecto, continuo, libre de errores o adecuado para todos los casos de uso.",
            "En la medida permitida por la ley aplicable, Umbra no asume responsabilidad por interrupciones, indisponibilidad, perdida de datos, decisiones de moderacion, conductas de terceros, integraciones externas o consecuencias derivadas de un uso indebido del producto por parte de usuarios o administradores.",
          ],
        },
        {
          id: "disputas",
          title: "11. Disputas y ley aplicable",
          paragraphs: [
            "Si surge un conflicto relacionado con Umbra, primero intentaremos abordarlo por canales informales y con contexto suficiente para revisar lo ocurrido. Eso incluye reportes, contacto oficial y una oportunidad razonable para entender el problema antes de escalarlo.",
            "Si una disputa no puede resolverse de manera informal, se tratara conforme a la ley aplicable y al foro competente que corresponda segun la relacion juridica, la jurisdiccion y la naturaleza del conflicto. Nada de esta seccion pretende eliminar derechos que no puedan limitarse legalmente.",
          ],
        },
        {
          id: "cambios-contacto",
          title: "12. Cambios a estos terminos y contacto",
          paragraphs: [
            "Podemos actualizar estas condiciones para reflejar cambios del producto, nuevas superficies, razones legales, medidas de seguridad, mejoras operativas o ajustes en la direccion de Umbra. Cuando sigas usando el servicio despues de una actualizacion relevante, entenderemos que aceptas la version vigente, salvo que una ley exija otro mecanismo.",
            "Si tienes preguntas sobre estas condiciones, sobre el uso de Umbra o sobre una incidencia relacionada con el servicio, debes usar los canales oficiales publicados por el proyecto.",
          ],
        },
      ],
      aside: {
        label: "Resumen rapido",
        title: "Puntos clave",
        description:
          "Estas condiciones funcionan como base operativa para la web, la app de escritorio y futuros clientes oficiales de Umbra.",
        items: [
          "Protege tu cuenta y tus credenciales",
          "Publica solo contenido que puedas compartir",
          "No abuses del servicio ni de otros usuarios",
          "Umbra puede cambiar, suspender funciones o moderar contenido",
        ],
      },
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Safety Center", href: "/safety-center" },
        { label: "Contacto", href: "/contactanos" },
      ],
    },
    privacy: {
      kicker: "Legal",
      title: "Politica de privacidad de Umbra",
      description:
        "Esta politica explica como Umbra recopila, usa, almacena, protege y comparte informacion personal a traves de la web, la app de escritorio y futuras superficies oficiales del producto.",
      effectiveLabel: "En vigor",
      effectiveValue: "17 abril 2026",
      updatedLabel: "Ultima actualizacion",
      updatedValue: "17 abril 2026",
      tocLabel: "Contenido",
      noticeLabel: "Nota importante",
      notice:
        "Aunque Umbra prioriza privacidad y control, el contexto del espacio importa. Si publicas contenido en servidores, canales o invitaciones con permisos amplios, otras personas podran acceder a esa informacion segun la configuracion definida por quienes administran ese espacio.",
      introParagraphs: [
        "El texto base de esta politica parte del Privacy Policy incluido en el archivo que compartiste, pero aqui queda adaptado a la realidad actual de Umbra: una plataforma orientada a comunidades privadas, clientes oficiales y una experiencia menos dependiente de publicidad o ruido comercial.",
        "Cuando en esta politica decimos Umbra, nosotros o nuestro, nos referimos al sitio web, la app de escritorio, futuros clientes oficiales, integraciones publicadas y la infraestructura asociada operada bajo la marca Umbra.",
        "Cuando decimos tu, usuario, cuenta o contenido, hablamos de la persona o entidad que usa Umbra, crea una cuenta, administra un espacio o interactua con cualquier superficie oficial del producto.",
        "Tambien debes leer los Terminos de uso, el Safety Center y cualquier regla adicional publicada para comunidades, integraciones o funciones futuras. Esta politica se interpreta junto con esos documentos.",
      ],
      sections: [
        {
          id: "bienvenida-alcance",
          title: "1. Bienvenida y alcance",
          paragraphs: [
            "Esta politica describe como Umbra recopila, usa, conserva, protege y comparte informacion personal cuando utilizas la web, la app de escritorio, futuros clientes oficiales, formularios de soporte, canales sociales y cualquier otra superficie relacionada con el producto.",
            "No vendemos tu informacion personal. La direccion del producto sigue centrada en suscripciones, despliegues propios, software oficial y herramientas para comunidades, no en convertir tus datos en una mercancia publicitaria.",
          ],
        },
        {
          id: "sobre-umbra",
          title: "2. Un poco sobre Umbra",
          paragraphs: [
            "Umbra permite construir comunidades, canales, mensajes, presencia y otras capas de comunicacion a traves de web, desktop y futuras superficies. Algunas funciones pueden variar segun la version, el tipo de espacio, el rol del usuario o el estado tecnico del producto.",
            "Al igual que ocurria en el texto base que compartiste, el tipo de espacio importa: un entorno cerrado, un enlace de invitacion compartido o una comunidad con permisos amplios no ofrecen el mismo nivel de exposicion. Debes tener en cuenta esa diferencia cuando publiques contenido o configures visibilidad.",
          ],
        },
        {
          id: "informacion-recopilada",
          title: "3. La informacion que recopilamos",
          paragraphs: [
            "Podemos recopilar informacion que nos entregas directamente al crear una cuenta, configurar un perfil, verificar acceso, contactar soporte, responder formularios o usar funciones opcionales. Esto puede incluir correo, nombre de usuario, credenciales, fecha de nacimiento cuando aplique, datos de perfil y otra informacion necesaria para operar la cuenta.",
            "Tambien recopilamos el contenido y las acciones que generas dentro del producto: mensajes, archivos, nombres de espacios, perfiles, configuraciones, relaciones, comunidades en las que participas, actividad relacionada con permisos, moderacion, compras futuras o integraciones que habilites.",
            "Como en el texto fuente, tambien existe informacion que se obtiene automaticamente: IP, navegador, sistema operativo, identificadores de dispositivo, paginas o superficies visitadas, eventos de uso, logs tecnicos y configuraciones del equipo. Si habilitas funciones opcionales o integraciones de terceros, podremos recibir datos adicionales necesarios para que esas funciones operen.",
          ],
          bullets: [
            "Informacion de cuenta, acceso y verificacion",
            "Contenido que creas o compartes dentro de Umbra",
            "Acciones de uso, comunidades, roles y actividad tecnica",
            "Datos de dispositivo, navegador, IP y eventos de producto",
            "Informacion opcional proveniente de integraciones o soporte",
          ],
        },
        {
          id: "uso-de-la-informacion",
          title: "4. Como usamos tu informacion",
          paragraphs: [
            "Usamos la informacion recopilada para prestar el servicio, crear y mantener cuentas, autenticar sesiones, mostrar mensajes, sincronizar estado, permitir permisos, facilitar clientes oficiales y sostener la infraestructura tecnica de Umbra.",
            "Tambien la usamos para proteger el producto y a la comunidad: investigar reportes, detectar abuso, prevenir fraude, limitar actividad maliciosa, responder a incidentes y aplicar terminos, reglas comunitarias o medidas de seguridad cuando sea necesario.",
            "Ademas, podemos usar informacion para soporte, mejoras de producto, diagnostico tecnico, medicion interna, comunicaciones importantes sobre cambios del servicio y, cuando corresponda, personalizacion razonable de la experiencia o de futuras funciones patrocinadas. Si una ley exige consentimiento para ciertos tratamientos, seguiremos ese requisito.",
          ],
        },
        {
          id: "divulgacion",
          title: "5. Como divulgamos o compartimos tu informacion",
          paragraphs: [
            "Cuando publicas contenido en Umbra, nos indicas que lo pongamos a disposicion de las personas, servidores, canales o espacios a los que das acceso. La visibilidad concreta depende de los permisos del espacio, del enlace de invitacion y de las reglas definidas por sus administradores.",
            "Tambien podemos compartir informacion con proveedores que necesitamos para operar el servicio, como infraestructura, autenticacion, pagos futuros, analitica, almacenamiento, seguridad o soporte. Compartimos solo lo necesario para que esos proveedores cumplan su funcion.",
            "Podemos divulgar informacion para cumplir la ley, responder solicitudes validas de autoridades, prevenir dano grave, proteger derechos, investigar fraude, aplicar nuestras politicas o participar en reorganizaciones societarias. Si una parte del producto cambia de operador o estructura, cierta informacion podria transferirse como parte de esa transicion.",
          ],
        },
        {
          id: "retencion",
          title: "6. Conservacion de datos",
          paragraphs: [
            "Conservamos informacion personal mientras sea necesaria para las finalidades con las que fue recopilada, para mantener el servicio, resolver incidencias, aplicar nuestras politicas o cumplir obligaciones legales y regulatorias.",
            "La eliminacion de una cuenta o de cierto contenido no siempre implica borrado inmediato de todas las copias tecnicas, logs, respaldos o registros necesarios para seguridad, cumplimiento o continuidad operativa. Aun asi, la retencion debe mantenerse dentro de limites razonables y revisables.",
          ],
        },
        {
          id: "proteccion",
          title: "7. Como protegemos tu informacion",
          paragraphs: [
            "Aplicamos medidas tecnicas y organizativas para reducir accesos no autorizados, perdida, alteracion o divulgacion indebida. Eso puede incluir cifrado en transito, controles de acceso, segmentacion de entornos, monitoreo, revisiones internas y endurecimiento de clientes oficiales e infraestructura.",
            "Ningun sistema es perfecto. Por eso tambien necesitas proteger tu cuenta: usa credenciales seguras, no compartas OTP ni codigos de acceso, y revisa dispositivos o sesiones abiertas cuando detectes actividad sospechosa.",
          ],
        },
        {
          id: "control-privacidad",
          title: "8. Como controlar tu privacidad",
          paragraphs: [
            "Umbra busca darte control practico sobre tu informacion. Puedes decidir en que espacios participar, que contenido compartir, que parte de tu perfil mostrar, que integraciones habilitar y cuando editar o eliminar informacion que aun controles dentro del producto.",
            "Tambien puedes desactivar o eliminar tu cuenta cuando exista esa funcion, limitar ciertas opciones de personalizacion, revisar permisos y solicitar acceso a la informacion disponible sobre ti usando los canales oficiales publicados por el proyecto.",
            "Algunas opciones dependeran de la madurez del producto, de tu edad, de tu ubicacion y de la superficie desde la que entres. Si una funcion de privacidad todavia no existe de manera automatizada, podras apoyarte en soporte o en los canales oficiales para ejercer tus derechos cuando corresponda.",
          ],
          bullets: [
            "Elegir que contenido, perfil o integraciones compartes",
            "Editar o borrar mensajes, espacios o configuraciones bajo tu control",
            "Solicitar acceso, correccion o eliminacion cuando aplique",
            "Desactivar o cerrar la cuenta cuando esa opcion este disponible",
          ],
        },
        {
          id: "transferencias",
          title: "9. Transferencias internacionales",
          paragraphs: [
            "Umbra puede operar con infraestructura, almacenamiento o proveedores ubicados en distintas jurisdicciones. Eso significa que parte de tu informacion puede procesarse o almacenarse fuera de tu pais de residencia.",
            "Cuando existan transferencias internacionales, procuraremos apoyarnos en mecanismos legales adecuados para ese traslado de datos y en medidas tecnicas razonables para proteger la informacion durante el proceso.",
          ],
        },
        {
          id: "terceros",
          title: "10. Servicios ofrecidos por terceros",
          paragraphs: [
            "Ciertas funciones de Umbra pueden depender de servicios externos, integraciones, bots, despliegues de terceros, proveedores de almacenamiento, autenticacion o futuras pasarelas de pago. Cada tercero puede tener sus propios terminos y politicas de privacidad.",
            "Aunque intentaremos elegir proveedores y extensiones alineados con la direccion del producto, no controlamos completamente lo que hagan esos terceros fuera de la capa oficial de Umbra. Debes revisar sus politicas antes de habilitar una integracion o participar en un espacio que las use.",
          ],
        },
        {
          id: "responsable-datos",
          title: "11. Responsable o contacto de datos",
          paragraphs: [
            "El texto base que compartiste incluye referencias a responsables formales de datos y a un delegado de proteccion de datos. En Umbra, cualquier canal oficial especifico para privacidad, proteccion de datos o ejercicio de derechos se publicara expresamente cuando exista de forma operativa.",
            "Mientras tanto, las consultas relacionadas con privacidad, acceso, rectificacion, eliminacion o inquietudes sobre tratamiento de datos deben dirigirse a los canales oficiales del proyecto publicados en el sitio y en la pagina de contacto.",
          ],
        },
        {
          id: "leyes-locales",
          title: "12. Informacion sobre leyes locales de privacidad",
          paragraphs: [
            "Dependiendo de donde te encuentres, puedes tener derechos adicionales bajo normas locales de privacidad y proteccion de datos. Eso puede incluir derecho de acceso, rectificacion, supresion, oposicion, limitacion del tratamiento, portabilidad o retiro del consentimiento cuando corresponda.",
            "Umbra intentara respetar los derechos que resulten aplicables segun la ley, pero el modo de ejercicio puede variar en funcion de la infraestructura disponible, de la verificacion de identidad necesaria y del estado real del producto en cada momento.",
          ],
        },
        {
          id: "cambios-politica",
          title: "13. Cambios a esta politica",
          paragraphs: [
            "Podemos actualizar esta politica para reflejar cambios en la web, la app, clientes futuros, integraciones, razones legales, nuevas practicas operativas o ajustes en la direccion del producto. Siempre mostraremos la fecha de la ultima actualizacion.",
            "Si los cambios son relevantes, intentaremos destacarlos de manera mas visible dentro del sitio o por los canales disponibles. El uso continuado de Umbra despues de una actualizacion puede significar que aceptas la version vigente, salvo cuando una ley exija un mecanismo distinto.",
          ],
        },
        {
          id: "contacto-privacidad",
          title: "14. Contacto",
          paragraphs: [
            "Si tienes preguntas sobre esta politica o sobre como Umbra trata tu informacion, utiliza los canales oficiales publicados por el proyecto. Hoy el punto principal para seguimiento y contexto sigue siendo el repositorio oficial y la pagina de contacto del sitio.",
            "Si en el futuro Umbra publica un correo especifico de privacidad o un responsable formal de proteccion de datos, esa informacion aparecera aqui y en los canales oficiales correspondientes.",
          ],
        },
      ],
      aside: {
        label: "Privacidad",
        title: "Principios base",
        description:
          "Umbra toma como base una politica extensa, pero la adapta a un producto que quiere pedir lo necesario, proteger mejor el acceso y darte mas control real sobre tus espacios.",
        items: [
          "No vendemos informacion personal",
          "Solo pedimos datos necesarios para operar",
          "La privacidad depende tambien del tipo de espacio y sus permisos",
          "Puedes gestionar cuenta, contenido y configuraciones cuando la funcion exista",
        ],
      },
      links: [
        { label: "Terminos de uso", href: "/terminos-de-uso" },
        { label: "Safety Center", href: "/safety-center" },
        { label: "Contacto", href: "/contactanos" },
      ],
    },
    safety: {
      kicker: "Trust",
      title: "Safety Center",
      description:
        "Este centro resume practicas basicas para proteger cuentas, reportar abuso y mantener comunidades mas ordenadas dentro de Umbra.",
      updatedLabel: "Revision actual",
      updatedValue: "16 abril 2026",
      sections: [
        {
          title: "Protege tu acceso",
          paragraphs: [
            "Usa credenciales seguras, evita compartir codigos de ingreso y revisa con cuidado cualquier enlace o solicitud de acceso que llegue por fuera de canales oficiales.",
          ],
          bullets: [
            "No compartas OTP o codigos",
            "Revisa dispositivos y sesiones",
            "Usa rutas oficiales del proyecto",
          ],
        },
        {
          title: "Reporta abuso",
          paragraphs: [
            "Si detectas suplantacion, spam, contenido malicioso o abuso dentro del ecosistema, usa el canal oficial de contacto para reportarlo con contexto suficiente.",
          ],
        },
        {
          title: "Moderacion y comunidad",
          paragraphs: [
            "La seguridad no depende solo de tecnologia. Tambien requiere roles claros, permisos sanos y comunidades que entiendan como responder ante comportamientos daninos.",
          ],
        },
        {
          title: "Respuesta",
          paragraphs: [
            "Las medidas pueden incluir revisiones, restricciones o suspension de accesos cuando exista riesgo para usuarios, infraestructura o integridad del producto.",
          ],
        },
      ],
      aside: {
        label: "Respuesta",
        title: "Canales oficiales",
        description:
          "Hoy el canal principal para reportes y seguimiento sigue siendo GitHub y los puntos oficiales enlazados desde el sitio.",
        items: [
          "GitHub repo",
          "Issues",
          "Revision operativa",
        ],
      },
    },
    contact: {
      kicker: "Soporte",
      title: "Contactanos",
      description:
        "Umbra todavia se mueve como producto en desarrollo, asi que el canal principal de contacto y seguimiento se concentra en el repositorio del proyecto.",
      updatedLabel: "Canal activo",
      updatedValue: "GitHub",
      sections: [
        {
          title: "Canal principal",
          paragraphs: [
            "Para feedback, dudas sobre el proyecto, seguimiento tecnico o revisiones del producto, el punto mas claro hoy es el repositorio oficial de Umbra.",
          ],
          bullets: [
            "Repositorio oficial",
            "Issues para seguimiento",
            "Codigo y contexto en un solo lugar",
          ],
        },
        {
          title: "Que incluir en un mensaje",
          paragraphs: [
            "Cuando nos contactes, incluye contexto, capturas si aplica, pasos para reproducir y la pagina o flujo exacto donde aparecio el problema.",
          ],
        },
        {
          title: "Soporte futuro",
          paragraphs: [
            "Conforme el producto avance, se podran publicar nuevos canales para soporte directo, reportes de seguridad o contacto comercial.",
          ],
        },
      ],
      aside: {
        label: "Acciones",
        title: "Enlaces directos",
        description:
          "Estos son los puntos mas utiles para hablar del proyecto ahora mismo.",
        items: [
          "GitHub repo",
          "GitHub issues",
          "Pagina principal",
        ],
      },
      links: [
        {
          label: "Abrir GitHub",
          href: "https://github.com/IFROS-GAm/Umbra",
          external: true,
        },
        {
          label: "Abrir issues",
          href: "https://github.com/IFROS-GAm/Umbra/issues",
          external: true,
        },
      ],
    },
  },
  en: {
    nav: {
      items: [
        { label: "HOME", href: "/" },
        { label: "DOWNLOADS", href: "/descargas" },
        { label: "TERMS", href: "/terminos-de-uso" },
        { label: "PRIVACY", href: "/privacy-policy" },
        { label: "SAFETY", href: "/safety-center" },
        { label: "CONTACT", href: "/contactanos" },
      ],
    },
    downloads: {
      kicker: "Downloads",
      title: "Download Umbra or continue on web",
      description:
        "Start with the Windows client or jump in right away from the browser. Mobile will follow as the next surface for the product.",
      cards: [
        {
          eyebrow: "Website",
          title: "Continue on web",
          status: "Available now",
          description:
            "Jump into the real Umbra web app from the browser to sign in and use the social platform with no install required.",
          points: ["Live web app", "Instant access", "No install required"],
          ctaLabel: "Continue on web",
          href: umbraWebAppUrl,
        },
        {
          eyebrow: "Desktop app",
          title: "Download for Windows",
          status: "Available now",
          description:
            "Download the current Windows build directly from this page for a stronger entry point with a dedicated shell and real auth.",
          points: ["Electron shell", "Real auth", "Private-ready base"],
          ctaLabel: "Download for Windows",
          href: windowsInstallerUrl,
        },
        {
          eyebrow: "APK mobile",
          title: "Umbra Mobile",
          status: "Coming soon",
          description:
            "The Android release will follow after web and desktop are more stable so the product can stay consistent across surfaces.",
          points: ["No release yet", "Built for Android", "Same product base"],
        },
      ],
      aside: {
        label: "Official channel",
        statsValue: "02+",
        title: "Centralized delivery",
        description:
          "For now, the official place to review code, desktop distribution and updates is still the Umbra repository.",
        items: ["Website", "Desktop", "Upcoming APK mobile"],
      },
      backLabel: "Back to home",
    },
    terms: {
      kicker: "Legal",
      title: "Terms of Use",
      description:
        "A base summary of how Umbra should be used, what is not allowed and how the service may change while the product keeps evolving.",
      updatedLabel: "Last updated",
      updatedValue: "April 16, 2026",
      sections: [
        {
          title: "Access and accounts",
          paragraphs: [
            "Access to Umbra requires each user to keep valid information and protect credentials, access codes and active sessions.",
            "Each account is responsible for activity performed through its own access, especially inside private or shared spaces.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "Umbra may not be used for abuse, spam, malware, impersonation, illegal distribution or any activity that puts users or infrastructure at risk.",
          ],
          bullets: [
            "No automated spam",
            "No security abuse",
            "No impersonation",
            "No illegal content or activity",
          ],
        },
        {
          title: "Service and changes",
          paragraphs: [
            "Umbra may change interfaces, flows, technical requirements or availability while the platform remains in active refinement and rollout.",
            "By using the product, you accept that some parts may be updated, adjusted or removed to improve stability, security and clarity.",
          ],
        },
        {
          title: "Suspension",
          paragraphs: [
            "Access may be limited or suspended where abuse, operational risk or misuse of these baseline rules is detected.",
          ],
        },
      ],
      aside: {
        label: "Responsible use",
        title: "Minimum principles",
        description:
          "Umbra is built for private, structured communication. The goal is to protect the community and keep the product usable.",
        items: [
          "Respect other users",
          "Do not break security",
          "Do not distribute abuse or fraud",
        ],
      },
    },
    privacy: {
      kicker: "Legal",
      title: "Privacy Policy",
      description:
        "Umbra aims to operate with as little noise as possible. This policy summarizes which data the platform uses and why it is used inside the current experience.",
      updatedLabel: "Last updated",
      updatedValue: "April 16, 2026",
      sections: [
        {
          title: "Basic data",
          paragraphs: [
            "Umbra may use account, authentication and configuration data required to allow access, maintain sessions and show the correct interface for each user.",
          ],
          bullets: [
            "Account identifiers",
            "Auth and session data",
            "Basic interface preferences",
          ],
        },
        {
          title: "How information is used",
          paragraphs: [
            "Information is used to operate the product, protect access, maintain technical stability and enable functions such as presence, members, channels and permissions.",
            "The platform is not positioned as an ads-first system or an aggressive data exploitation model.",
          ],
        },
        {
          title: "Security and retention",
          paragraphs: [
            "Data should be kept only for the time needed to operate the service, respond to incidents and preserve platform integrity.",
            "Retention and security practices may evolve as the product matures.",
          ],
        },
        {
          title: "Third parties and deployment",
          paragraphs: [
            "Umbra may rely on external technical pieces such as auth, storage or deployment, while still aiming for control and autonomy.",
          ],
        },
      ],
      aside: {
        label: "Privacy",
        title: "Less noise, more control",
        description:
          "The product direction stays clear: less unnecessary surface area and more autonomy to operate your own space.",
        items: [
          "Auth and session",
          "Operational security",
          "Privacy-oriented base",
        ],
      },
    },
    safety: {
      kicker: "Trust",
      title: "Safety Center",
      description:
        "This center summarizes the baseline practices for protecting accounts, reporting abuse and keeping communities more structured inside Umbra.",
      updatedLabel: "Current review",
      updatedValue: "April 16, 2026",
      sections: [
        {
          title: "Protect your access",
          paragraphs: [
            "Use strong credentials, never share one-time codes and verify any link or access request that reaches you outside official channels.",
          ],
          bullets: [
            "Do not share OTP codes",
            "Review devices and sessions",
            "Use official project routes",
          ],
        },
        {
          title: "Report abuse",
          paragraphs: [
            "If you detect impersonation, spam, malicious content or abuse, use the official contact channel and include enough context to review the issue properly.",
          ],
        },
        {
          title: "Moderation and community",
          paragraphs: [
            "Safety is not only a technical task. It also depends on clear roles, sane permissions and communities that know how to react to harmful behavior.",
          ],
        },
        {
          title: "Response",
          paragraphs: [
            "Measures may include review, restrictions or account suspension whenever users, infrastructure or product integrity are at risk.",
          ],
        },
      ],
      aside: {
        label: "Response",
        title: "Official channels",
        description:
          "Today the main channel for reporting and follow-up is still GitHub and the official links published by the project.",
        items: ["GitHub repo", "Issues", "Operational review"],
      },
    },
    contact: {
      kicker: "Support",
      title: "Contact Us",
      description:
        "Umbra is still moving as an in-progress product, so the clearest contact and follow-up channel is concentrated in the project repository.",
      updatedLabel: "Active channel",
      updatedValue: "GitHub",
      sections: [
        {
          title: "Main channel",
          paragraphs: [
            "For feedback, product questions, technical follow-up or general project discussion, the clearest point today is the official Umbra repository.",
          ],
          bullets: [
            "Official repository",
            "Issues for follow-up",
            "Code and context in one place",
          ],
        },
        {
          title: "What to include",
          paragraphs: [
            "When contacting us, include context, screenshots if useful, steps to reproduce and the exact page or flow where the issue appeared.",
          ],
        },
        {
          title: "Future support",
          paragraphs: [
            "As the product grows, additional channels may be published for direct support, security reports or commercial contact.",
          ],
        },
      ],
      aside: {
        label: "Actions",
        title: "Direct links",
        description:
          "These are the most useful places to talk about the project right now.",
        items: ["GitHub repo", "GitHub issues", "Main website"],
      },
      links: [
        {
          label: "Open GitHub",
          href: "https://github.com/IFROS-GAm/Umbra",
          external: true,
        },
        {
          label: "Open issues",
          href: "https://github.com/IFROS-GAm/Umbra/issues",
          external: true,
        },
      ],
    },
  },
  fr: {
    nav: {
      items: [
        { label: "ACCUEIL", href: "/" },
        { label: "DOWNLOADS", href: "/descargas" },
        { label: "TERMES", href: "/terminos-de-uso" },
        { label: "PRIVACY", href: "/privacy-policy" },
        { label: "SAFETY", href: "/safety-center" },
        { label: "CONTACT", href: "/contactanos" },
      ],
    },
    downloads: {
      kicker: "Telechargements",
      title: "Telecharge Umbra ou continue sur le web",
      description:
        "Commence avec le client Windows ou entre tout de suite depuis le navigateur. Le mobile arrivera ensuite comme prochaine surface du produit.",
      cards: [
        {
          eyebrow: "Site web",
          title: "Continuer sur le web",
          status: "Disponible maintenant",
          description:
            "Entre dans la vraie app web Umbra depuis le navigateur pour te connecter et utiliser la plateforme sans rien installer.",
          points: ["App web en direct", "Acces immediat", "Sans installation"],
          ctaLabel: "Continuer sur le web",
          href: umbraWebAppUrl,
        },
        {
          eyebrow: "Desktop app",
          title: "Telecharger pour Windows",
          status: "Disponible maintenant",
          description:
            "Telecharge la version Windows actuelle directement ici pour une entree plus solide avec shell dedie et auth reelle.",
          points: ["Electron shell", "Auth reelle", "Base privee"],
          ctaLabel: "Telecharger pour Windows",
          href: windowsInstallerUrl,
        },
        {
          eyebrow: "APK mobile",
          title: "Umbra Mobile",
          status: "Bientot",
          description:
            "La sortie Android arrivera apres stabilisation du web et du desktop afin de garder une experience coherente entre surfaces.",
          points: ["Pas de release encore", "Pensee pour Android", "Meme base produit"],
        },
      ],
      aside: {
        label: "Canal officiel",
        statsValue: "02+",
        title: "Distribution centralisee",
        description:
          "Pour le moment, le point officiel pour revoir le code, la distribution desktop et les mises a jour reste le depot Umbra.",
        items: ["Site web", "Desktop", "Prochain APK mobile"],
      },
      backLabel: "Retour a l'accueil",
    },
    terms: {
      kicker: "Legal",
      title: "Termes d'utilisation",
      description:
        "Resume de base sur la facon d'utiliser Umbra, ce qui n'est pas autorise et la maniere dont le service peut evoluer pendant la maturation du produit.",
      updatedLabel: "Derniere mise a jour",
      updatedValue: "16 avril 2026",
      sections: [
        {
          title: "Acces et comptes",
          paragraphs: [
            "L'acces a Umbra exige de garder des informations valides et de proteger identifiants, codes d'acces et sessions actives.",
            "Chaque compte reste responsable de l'activite effectuee depuis son propre acces, surtout dans des espaces prives ou partages.",
          ],
        },
        {
          title: "Usage acceptable",
          paragraphs: [
            "Umbra ne peut pas etre utilise pour abus, spam, malware, usurpation, diffusion illegale ou toute activite mettant utilisateurs ou infrastructure en danger.",
          ],
          bullets: [
            "Pas de spam automatise",
            "Pas d'abus de securite",
            "Pas d'usurpation",
            "Pas de contenu ou activite illegale",
          ],
        },
        {
          title: "Service et changements",
          paragraphs: [
            "Umbra peut faire evoluer interfaces, flux, exigences techniques ou disponibilite tant que la plateforme reste en phase active d'ajustement.",
            "En utilisant le produit, tu acceptes que certaines parties puissent etre mises a jour, ajustees ou retirees pour ameliorer stabilite, securite et clarte.",
          ],
        },
        {
          title: "Suspension",
          paragraphs: [
            "L'acces peut etre limite ou suspendu lorsqu'un abus, un risque operationnel ou un non-respect de ces regles de base est detecte.",
          ],
        },
      ],
      aside: {
        label: "Usage responsable",
        title: "Principes minimums",
        description:
          "Umbra est pense pour une communication privee et ordonnee. Le but est de proteger la communaute et garder le produit utilisable.",
        items: [
          "Respecte les autres utilisateurs",
          "Ne casse pas la securite",
          "Ne diffuse pas d'abus ou de fraude",
        ],
      },
    },
    privacy: {
      kicker: "Legal",
      title: "Privacy Policy",
      description:
        "Umbra cherche a fonctionner avec le moins de bruit possible. Cette politique resume quelles donnees sont utilisees et pourquoi dans l'experience actuelle.",
      updatedLabel: "Derniere mise a jour",
      updatedValue: "16 avril 2026",
      sections: [
        {
          title: "Donnees de base",
          paragraphs: [
            "Umbra peut utiliser les donnees de compte, d'authentification et de configuration necessaires pour permettre l'acces, garder les sessions et afficher la bonne interface.",
          ],
          bullets: [
            "Identifiants de compte",
            "Donnees d'auth et de session",
            "Preferences d'interface de base",
          ],
        },
        {
          title: "Usage de l'information",
          paragraphs: [
            "Les informations servent a faire fonctionner le produit, proteger l'acces, maintenir la stabilite technique et permettre presence, membres, canaux et permissions.",
            "La plateforme n'est pas pensee comme un systeme centre sur la publicite ni sur l'exploitation agressive des donnees.",
          ],
        },
        {
          title: "Securite et retention",
          paragraphs: [
            "Les donnees doivent etre gardees seulement le temps necessaire pour operer le service, repondre aux incidents et proteger l'integrite de la plateforme.",
            "Les pratiques de retention et de securite peuvent evoluer avec la maturation du produit.",
          ],
        },
        {
          title: "Tiers et deploiement",
          paragraphs: [
            "Umbra peut s'appuyer sur des briques externes comme auth, stockage ou deploiement, tout en visant controle et autonomie.",
          ],
        },
      ],
      aside: {
        label: "Confidentialite",
        title: "Moins de bruit, plus de controle",
        description:
          "La direction du produit reste claire : moins de surface inutile et plus d'autonomie pour operer ton espace.",
        items: [
          "Auth et session",
          "Securite operationnelle",
          "Base orientee vie privee",
        ],
      },
    },
    safety: {
      kicker: "Trust",
      title: "Safety Center",
      description:
        "Ce centre resume les pratiques de base pour proteger les comptes, signaler les abus et garder des communautes plus saines dans Umbra.",
      updatedLabel: "Revision actuelle",
      updatedValue: "16 avril 2026",
      sections: [
        {
          title: "Protege ton acces",
          paragraphs: [
            "Utilise des identifiants solides, ne partage jamais les codes temporaires et verifie tout lien ou demande d'acces venu hors des canaux officiels.",
          ],
          bullets: [
            "Ne partage pas les codes OTP",
            "Verifie appareils et sessions",
            "Utilise les routes officielles",
          ],
        },
        {
          title: "Signale les abus",
          paragraphs: [
            "Si tu detectes usurpation, spam, contenu malveillant ou abus, utilise le canal officiel de contact avec assez de contexte pour permettre une revue serieuse.",
          ],
        },
        {
          title: "Moderation et communaute",
          paragraphs: [
            "La securite n'est pas uniquement technique. Elle depend aussi de roles clairs, de permissions saines et de communautes capables de reagir aux comportements nuisibles.",
          ],
        },
        {
          title: "Reponse",
          paragraphs: [
            "Les mesures peuvent inclure revue, restrictions ou suspension de compte lorsqu'utilisateurs, infrastructure ou integrite du produit sont a risque.",
          ],
        },
      ],
      aside: {
        label: "Reponse",
        title: "Canaux officiels",
        description:
          "Aujourd'hui le canal principal pour les signalements et le suivi reste GitHub et les liens officiels publies par le projet.",
        items: ["GitHub repo", "Issues", "Revision operationnelle"],
      },
    },
    contact: {
      kicker: "Support",
      title: "Contact",
      description:
        "Umbra avance encore comme produit en developpement, donc le canal de contact et de suivi le plus clair reste concentre dans le depot du projet.",
      updatedLabel: "Canal actif",
      updatedValue: "GitHub",
      sections: [
        {
          title: "Canal principal",
          paragraphs: [
            "Pour feedback, questions produit, suivi technique ou discussion generale, le point le plus clair aujourd'hui est le depot officiel Umbra.",
          ],
          bullets: [
            "Depot officiel",
            "Issues pour le suivi",
            "Code et contexte au meme endroit",
          ],
        },
        {
          title: "Que faut-il inclure",
          paragraphs: [
            "Quand tu nous contactes, ajoute du contexte, des captures si utile, les etapes de reproduction et la page ou le flux exact ou le probleme apparait.",
          ],
        },
        {
          title: "Support futur",
          paragraphs: [
            "A mesure que le produit grandit, d'autres canaux pourront etre publies pour support direct, rapports de securite ou contact commercial.",
          ],
        },
      ],
      aside: {
        label: "Actions",
        title: "Liens directs",
        description:
          "Voici les points les plus utiles pour parler du projet aujourd'hui.",
        items: ["GitHub repo", "GitHub issues", "Site principal"],
      },
      links: [
        {
          label: "Ouvrir GitHub",
          href: "https://github.com/IFROS-GAm/Umbra",
          external: true,
        },
        {
          label: "Ouvrir issues",
          href: "https://github.com/IFROS-GAm/Umbra/issues",
          external: true,
        },
      ],
    },
  },
};
