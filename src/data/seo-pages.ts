export type SeoCase = {
  name: string;
  href: string;
  kind: string;
  summary: string;
};

export type SeoLandingPage = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  label: string;
  h1: string;
  lead: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  cases?: readonly SeoCase[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

const CASE_CHINSKI: SeoCase = {
  name: "Dr. Chinski Rinoplastia",
  href: "https://rinoplastia.com.ar/",
  kind: "Sitio completo · ES / EN / PT",
  summary:
    "Hub de rinoplastia estética, funcional y reparadora: casos, equipo, técnica, testimonios, FAQ y turno por WhatsApp y formulario.",
};

const CASE_ALO: SeoCase = {
  name: "Alo Patagonia",
  href: "https://www.alopatagonia.com/",
  kind: "Sitio de turismo",
  summary:
    "Viajes por la Patagonia con destinos ordenados e itinerarios claros. La consulta se cierra por WhatsApp, pensado para el celu.",
};

const CASE_RHINOSCOPY: SeoCase = {
  name: "Rhinoscopy",
  href: "https://www.rhinoscopy.com.ar/",
  kind: "Sitio educativo · ES / EN / PT",
  summary:
    "Formación en rinología: congreso Rhinoscopy Meet, speakers, webinars y certificados. Dejó de depender solo de Instagram.",
};

const CASE_LOPEZ: SeoCase = {
  name: "Dr. Carlos López Moris",
  href: "https://drlopezmoris.com/",
  kind: "Sitio completo",
  summary:
    "Rinología y cirugía nasal en Buenos Aires: servicios, formación, casos, reseñas, FAQ y turno por WhatsApp.",
};

const CASE_ARMIJOS: SeoCase = {
  name: "Dra. Karla Armijos",
  href: "https://www.drakarmijos.com/",
  kind: "Landing en producción",
  summary:
    "Landing de otorrinolaringología (rinología y sueño) publicada mientras se arma el sitio completo.",
};

const CASE_GUARIDA: SeoCase = {
  name: "La Guarida Instrumentos",
  href: "https://www.laguaridainstrumentos.com/",
  kind: "Landing comercial",
  summary:
    "Catálogo visual de instrumentos y contacto directo. Canal propio para no depender solo de Instagram.",
};

export const SEO_LANDING_PAGES: readonly SeoLandingPage[] = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web en Argentina | Freelance para negocios",
    description:
      "Desarrollo web freelance en Argentina: landings y páginas web rápidas, mobile-first y con WhatsApp. Essential desde USD 225. Presupuesto en 24 hs.",
    keyword: "desarrollo web",
    label: "Desarrollo web",
    h1: "Desarrollo web en Argentina para conseguir más consultas",
    lead:
      "Hago desarrollo web freelance en Argentina: diseño y programo landings y páginas web pensadas para el celu, con mensaje claro, SEO técnico y WhatsApp a un toque. El objetivo no es “tener sitio”: es que te escriban.",
    sections: [
      {
        title: "Qué es el desarrollo web que realmente sirve a un negocio",
        paragraphs: [
          "Cuando alguien busca desarrollo web en Google, a veces encuentra tutoriales y otras veces una agencia. Si tenés un negocio en Argentina y necesitás una web que consiga consultas, el trabajo es otro: entender a quién le hablás, ordenar la oferta y construir una página rápida que empuje al contacto.",
          "Eso es lo que hago. Desarrollo web de punta a punta —estructura, diseño, código y publicación— para profesionales, clínicas, turismo y comercios que ya tienen demanda y necesitan una web que acompañe.",
        ],
      },
      {
        title: "Qué incluye contratar desarrollo web conmigo",
        paragraphs: [
          "No entrego un mockup para que lo armes después. La web queda online, en tu dominio, lista para recibir WhatsApp y para que Google la pueda leer.",
        ],
        bullets: [
          "Diseño mobile-first: se ve y se entiende primero en el celular",
          "Programación con Next.js, React y TypeScript",
          "SEO técnico: título, descripción, Open Graph, sitemap y datos estructurados",
          "Botón de WhatsApp con mensaje listo",
          "Publicación y conexión de dominio",
          "Rondas de cambios incluidas según el plan",
        ],
      },
      {
        title: "No es lo mismo una landing que un sitio como Chinski o Alo Patagonia",
        paragraphs: [
          "Essential y Premium cubren una landing de conversión. Los proyectos grandes son otro alcance: Dr. Chinski Rinoplastia es un sitio clínico en tres idiomas, con casos, equipo y dos caminos de turno. Alo Patagonia ordena destinos e itinerarios de viaje y deja el WhatsApp a mano. Rhinoscopy arma congreso, webinars y certificados. Eso se cotiza aparte, con plazos de sitio completo.",
          "Si todavía no sabés si te alcanza una landing, te lo digo en la primera charla. La demo a medida es gratis.",
        ],
      },
      {
        title: "Desarrollo web en Buenos Aires y en todo el país",
        paragraphs: [
          "Estoy en Buenos Aires y trabajo 100% remoto con clientes de Córdoba, Rosario, Mendoza, la Patagonia y el interior. La reunión es por WhatsApp o videollamada; el seguimiento, igual de directo.",
          "Los plazos típicos: una landing entre 7 y 15 días hábiles; un proyecto más completo, 2 a 3 semanas o más, cuando hay logo, textos y referencias claras.",
        ],
      },
      {
        title: "Cuánto cuesta el desarrollo web",
        paragraphs: [
          "Essential parte de USD 300 (USD 225 con la promo vigente hasta el 1 de enero de 2027) y Premium de USD 500 (USD 375 en promo). La demo a medida es gratuita. El pago es 50% al iniciar y 50% al terminar.",
          "Si el alcance crece —más páginas, blog, otro idioma, SEO avanzado— lo cotizo aparte, sin letra chica. Pedime un presupuesto y te respondo en menos de 24 horas.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_ALO, CASE_RHINOSCOPY, CASE_LOPEZ],
    faqs: [
      {
        question: "¿El desarrollo web incluye aparecer en Google?",
        answer:
          "Incluyo SEO técnico base para que Google pueda indexar la página: títulos, meta descripción, Open Graph, sitemap y datos estructurados. El posicionamiento también depende de la competencia de cada rubro y de los enlaces, pero la base técnica queda hecha.",
      },
      {
        question: "¿Hacés desarrollo web para pymes y profesionales?",
        answer:
          "Sí. Trabajo sobre todo con profesionales de salud, turismo y comercios que necesitan una web clara para conseguir turnos o consultas. En el portfolio están Dr. Chinski, Alo Patagonia, Rhinoscopy, Dr. López Moris, Dra. Karla Armijos y La Guarida Instrumentos.",
      },
    ],
    related: [
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/sitio-web-turismo", label: "Sitio web de turismo" },
      { href: "/desarrollo-web-buenos-aires", label: "Desarrollo web en Buenos Aires" },
      { href: "/desarrollador-web-freelance", label: "Desarrollador web freelance" },
    ],
  },
  {
    slug: "pagina-web",
    title: "Página Web para tu negocio en Argentina | Diseño y desarrollo",
    description:
      "Página web para negocios en Argentina: diseño mobile-first, SEO técnico y WhatsApp integrado. Publicada y lista para recibir consultas. Presupuesto en 24 hs.",
    keyword: "página web",
    label: "Página web",
    h1: "Página web para tu negocio, hecha para que te escriban",
    lead:
      "Una página web no tiene que ser un catálogo infinito. Para la mayoría de los negocios en Argentina alcanza una web bien pensada: quién sos, qué ofrecés, prueba social y un camino obvio al WhatsApp.",
    sections: [
      {
        title: "Por qué tu página web no trae consultas",
        paragraphs: [
          "Pasa seguido: hay tráfico, hay Instagram, y la página web no explica el servicio ni dice cómo contactarte. El visitante duda y se va. Una página web profesional ordena eso: mensaje, prueba y contacto en el primer pantallazo, sobre todo en el celular.",
        ],
      },
      {
        title: "Qué página web te armo",
        paragraphs: [
          "Diseño y programo la página, la publico y dejo el dominio conectado. Según el plan sumamos formulario, FAQ, galería o testimonios. Si el negocio pide más —varias rutas, idiomas, un hub de contenidos— se arma como sitio completo, como en rinoplastia.com.ar o alopatagonia.com.",
        ],
        bullets: [
          "Estructura pensada para el celu",
          "Textos ordenados para que se entienda qué hacés",
          "SEO base para búsquedas como página web y tu rubro",
          "WhatsApp con mensaje preparado",
          "Carga rápida (Next.js) para no perder visitas",
        ],
      },
      {
        title: "Página web en Argentina: plazos y forma de trabajo",
        paragraphs: [
          "Trabajo remoto desde Buenos Aires con clientes de todo el país. Una landing suele estar en 7 a 15 días hábiles. El pago es 50% al iniciar el proyecto y 50% al terminar.",
          "Si todavía no estás seguro, la demo a medida es gratis: ves cómo quedaría tu página con tu logo y colores, sin compromiso.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_ALO, CASE_GUARIDA, CASE_ARMIJOS],
    faqs: [
      {
        question: "¿Cuánto sale una página web en Argentina?",
        answer:
          "Una landing Essential parte de USD 300 y Premium de USD 500. Hay 25% off hasta el 1 de enero de 2027 (USD 225 y USD 375). Un sitio completo como el de un consultorio o una operadora de turismo se cotiza aparte, según páginas, idiomas y contenido.",
      },
      {
        question: "¿Me conviene una página web o solo Instagram?",
        answer:
          "Instagram no reemplaza una página web. Google no indexa tu feed como a un sitio, y el visitante no tiene un lugar estable para entender el servicio y escribirte. La Guarida Instrumentos y Rhinoscopy pasaron de depender de redes a tener canal propio.",
      },
    ],
    related: [
      { href: "/pagina-web-whatsapp", label: "Página web con WhatsApp" },
      { href: "/pagina-web-comercio", label: "Página web para comercios" },
      { href: "/landing-page", label: "Landing page" },
      { href: "/desarrollo-web", label: "Desarrollo web en Argentina" },
    ],
  },
  {
    slug: "landing-page",
    title: "Landing Page que convierte visitas en consultas | Argentina",
    description:
      "Landing page en Argentina para conseguir consultas: mobile-first, mensaje claro y WhatsApp a un toque. Essential desde USD 225. Presupuesto en 24 hs.",
    keyword: "landing page",
    label: "Landing page",
    h1: "Landing page para convertir visitas en consultas",
    lead:
      "Una landing page es una sola página con un objetivo: que te escriban. Sin menús eternos ni distracciones. Ideal si vendés un servicio, turnos o un producto y necesitás que el visitante entienda y contacte en menos de un minuto.",
    sections: [
      {
        title: "Qué hace que una landing page convierta",
        paragraphs: [
          "Título que dice el beneficio, prueba de que sabés hacer el trabajo, objeciones resueltas y un botón de WhatsApp con el mensaje ya armado. Si eso no está, la landing es solo un diseño.",
          "Programo landings en Next.js para que carguen rápido en 4G. En Argentina la mayoría entra del celular: si la web pesa o el botón queda abajo de todo, se pierden consultas.",
        ],
      },
      {
        title: "Landings que ya están online",
        paragraphs: [
          "La Dra. Karla Armijos tiene una landing de otorrinolaringología publicada en drakarmijos.com: mensaje directo e identidad médica, con base lista para crecer al sitio completo. La Guarida Instrumentos usa una landing de catálogo visual para que el que llega de Instagram entienda la oferta y consulte.",
          "Cuando el negocio necesita más profundidad —casos clínicos, destinos, congreso, tres idiomas— paso a sitio completo, como Dr. Chinski o Alo Patagonia. La landing no es un techo: es el primer canal, bien hecho.",
        ],
      },
      {
        title: "Landing page Essential o Premium",
        paragraphs: [
          "Essential: una landing de hasta 5 secciones, WhatsApp, SEO base y publicación. Premium suma formulario, animaciones, una sección extra y 30 días de soporte.",
          "Hasta el 1 de enero de 2027 hay 25% off: Essential USD 225 y Premium USD 375. La demo previa es gratuita.",
        ],
      },
      {
        title: "Landing page vs sitio de varias páginas",
        paragraphs: [
          "Si tu oferta es un servicio principal, una landing bien hecha suele convertir mejor que un sitio de diez páginas a medio terminar. Si más adelante hace falta un blog, más rutas o un segundo idioma, lo vemos: el código queda preparado.",
        ],
      },
    ],
    cases: [CASE_ARMIJOS, CASE_GUARIDA, CASE_ALO],
    faqs: [
      {
        question: "¿Cuánto tarda una landing page?",
        answer:
          "Entre 7 y 15 días hábiles cuando hay logo, textos y referencias. Premium, 2 a 3 semanas. Un sitio completo lleva más: se arma por etapas.",
      },
      {
        question: "¿La landing page sirve para anuncios de Instagram o Google?",
        answer:
          "Sí. De hecho es el mejor destino para un anuncio: una sola oferta, un solo pedido (escribime). Dejo el SEO base y la velocidad listos para que la campaña no aterrice en una web lenta.",
      },
    ],
    related: [
      { href: "/pagina-web-whatsapp", label: "Página web con WhatsApp" },
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/desarrollo-web", label: "Desarrollo web" },
      { href: "/pagina-web", label: "Página web para negocios" },
    ],
  },
  {
    slug: "desarrollador-web-freelance",
    title: "Desarrollador Web Freelance en Argentina | Buenos Aires",
    description:
      "Desarrollador web freelance en Buenos Aires. Diseño y programo landings y páginas web para negocios de todo el país. Presupuesto en 24 hs por WhatsApp.",
    keyword: "desarrollador web freelance",
    label: "Freelance",
    h1: "Desarrollador web freelance en Argentina",
    lead:
      "Soy Agustín Ader, desarrollador web freelance en Buenos Aires. Diseño y programo la web: no te dejo un Figma para que lo implemente otro. Trabajo remoto con clientes de todo el país.",
    sections: [
      {
        title: "Qué hace un desarrollador web freelance (cuando está bien elegido)",
        paragraphs: [
          "Un freelance de desarrollo web puede ser más directo que una agencia: hablás con quien diseña y programa, los plazos son cortos y el precio es claro. El riesgo es caer en alguien que solo arma plantillas. Yo construyo cada sitio a medida, con Next.js y React, y lo dejo publicado.",
        ],
      },
      {
        title: "Con quién trabajo",
        paragraphs: [
          "Profesionales de salud, turismo y comercios que necesitan una web que consiga turnos o consultas. En el portfolio: Dr. Chinski Rinoplastia (sitio clínico en tres idiomas), Alo Patagonia (viajes por la Patagonia), Rhinoscopy (formación y congreso), Dr. López Moris, Dra. Karla Armijos y La Guarida Instrumentos.",
        ],
      },
      {
        title: "Cómo arrancamos",
        paragraphs: [
          "Me escribís por WhatsApp con el rubro y lo que necesitás. En menos de 24 horas te digo si encaja, el plan (Essential, Premium, demo o sitio completo) y el plazo. Si hay promo vigente, te la aplico. El pago es 50% al iniciar y 50% al entregar.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_ALO, CASE_RHINOSCOPY, CASE_LOPEZ],
    faqs: [
      {
        question: "¿Un desarrollador web freelance o una agencia?",
        answer:
          "Si necesitás una landing o una página de servicios, un freelance senior suele ser más rápido y con menos overhead. Si buscás un equipo de 10 personas y una campaña 360, una agencia. Para la mayoría de los negocios locales, freelance alcanza y sobra. Los sitios grandes (Chinski, Alo Patagonia) también los hago yo, de punta a punta.",
      },
      {
        question: "¿Trabajás solo en Buenos Aires?",
        answer:
          "Vivo en Buenos Aires y tomo proyectos de toda Argentina. Todo es remoto: WhatsApp y videollamada. Alo Patagonia es un ejemplo: turismo en el sur, coordinación 100% a distancia.",
      },
    ],
    related: [
      { href: "/desarrollo-web-buenos-aires", label: "Desarrollo web en Buenos Aires" },
      { href: "/desarrollo-web", label: "Desarrollo web" },
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/sitio-web-turismo", label: "Sitio web de turismo" },
    ],
  },
  {
    slug: "sitio-web-para-medicos",
    title: "Sitio Web para Médicos y Clínicas en Argentina | Turnos y casos",
    description:
      "Sitio web para médicos en Argentina: casos, equipo, FAQ y turno por WhatsApp. Trabajo en rinoplastia, rinología y formación. Presupuesto en 24 hs.",
    keyword: "sitio web para médicos",
    label: "Médicos y clínicas",
    h1: "Sitio web para médicos que quieren más turnos",
    lead:
      "Un consultorio no necesita un portal de hospital. Necesita una web que explique el procedimiento, muestre prueba (casos, equipo, reseñas) y deje un camino obvio al turno. Eso es lo que programo para profesionales de salud en Argentina.",
    sections: [
      {
        title: "Qué pedís cuando buscás un sitio web para médicos",
        paragraphs: [
          "El paciente llega desde el celu, a menudo después de Instagram o de un familiar. Si la web no dice qué hacés, en qué casos sí y en cuáles no, y cómo sacar turno, se va. En salud la confianza se arma con claridad: lenguaje preciso, fotos con contexto, FAQ honestas y un botón de WhatsApp que no se esconde.",
          "No uso plantillas “clínica genérica”. Cada especialidad tiene objeciones distintas. En rinoplastia importan los casos y la técnica. En rinología, los servicios y la formación. En un congreso médico, speakers, agenda y certificados.",
        ],
      },
      {
        title: "Dr. Chinski Rinoplastia: un sitio clínico, no una landing",
        paragraphs: [
          "rinoplastia.com.ar es el proyecto más grande que tengo online en salud. Sitio completo para los Dres. Luis y Hernán Chinski: rinoplastia estética, funcional y reparadora. Casos, equipo, técnica (incluida la ultrasónica), testimonios, FAQ y dos caminos de contacto —WhatsApp y formulario—. Contenido en español, inglés y portugués, porque parte de la demanda es internacional.",
          "Ese alcance no entra en un plan Essential. Se arma como sitio: arquitectura, i18n, páginas de prueba social y un tono premium que no grita descuento.",
        ],
      },
      {
        title: "Otros consultorios: landing o sitio, según el momento",
        paragraphs: [
          "El Dr. Carlos López Moris tiene sitio en drlopezmoris.com: rinología y cirugía nasal, con servicios, formación, casos, reseñas, galería y turno. La Dra. Karla Armijos arrancó con una landing en drakarmijos.com —rinología y trastornos del sueño— publicada mientras se desarrolla el sitio completo. Rhinoscopy (rhinoscopy.com.ar) es otra pieza del mismo mundo: no es un consultorio, es formación. Congreso, webinars y certificados, también en tres idiomas.",
          "La decisión landing vs sitio no es de moda: es de contenido. Si todavía no hay casos ni textos, una landing bien hecha ya trae consultas. Si hay material clínico, conviene el sitio.",
        ],
      },
      {
        title: "Qué incluye un sitio web para un médico",
        paragraphs: [
          "Diseño y código a medida, publicados en tu dominio. No te dejo un WordPress para que lo cargues vos.",
        ],
        bullets: [
          "Estructura mobile-first: el paciente entra del celular",
          "Casos, equipo o servicios, según lo que tengas",
          "FAQ pensada para las dudas reales del consultorio",
          "WhatsApp con mensaje de turno y, si hace falta, formulario",
          "SEO técnico: títulos, Open Graph, sitemap, datos estructurados",
          "Idioma extra (EN / PT) cuando hay pacientes de afuera",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_LOPEZ, CASE_ARMIJOS, CASE_RHINOSCOPY],
    faqs: [
      {
        question: "¿Hacés sitios web para cualquier especialidad?",
        answer:
          "Mi trabajo más profundo está en otorrinolaringología, rinología y rinoplastia. El mismo enfoque sirve para otras especialidades que venden consulta y procedimiento: mensaje claro, prueba y turno. Si el rubro es muy distinto, te lo digo en la primera respuesta.",
      },
      {
        question: "¿Un médico necesita un sitio completo o alcanza una landing?",
        answer:
          "Si estás empezando o todavía no hay casos para mostrar, una landing alcanza —como la de la Dra. Armijos—. Si hay equipo, técnica y pacientes de otros países, conviene un sitio como el de Chinski. Te oriento según el material que tengas, no según el plan más caro.",
      },
      {
        question: "¿El sitio cumple algo de salud o solo se ve lindo?",
        answer:
          "No reemplazo el criterio médico ni armo recetas. Ordeno lo que el consultorio ya comunica, con un tono profesional, fotos con contexto y un camino de turno. Los textos clínicos los validás vos.",
      },
    ],
    related: [
      { href: "/sitio-web-multiidioma", label: "Sitio web en varios idiomas" },
      { href: "/pagina-web-whatsapp", label: "Página web con WhatsApp" },
      { href: "/desarrollo-web-buenos-aires", label: "Desarrollo web en Buenos Aires" },
      { href: "/landing-page", label: "Landing page" },
    ],
  },
  {
    slug: "sitio-web-turismo",
    title: "Sitio Web de Turismo en Argentina | Viajes y consultas",
    description:
      "Sitio web de turismo en Argentina: destinos, itinerarios y WhatsApp para cerrar la consulta. Caso Alo Patagonia. Presupuesto en 24 hs.",
    keyword: "sitio web de turismo",
    label: "Turismo",
    h1: "Sitio web de turismo para que el viajero te escriba",
    lead:
      "En turismo la web no es un folleto. Tiene que ordenar destinos, bajar la ansiedad del itinerario y dejar un WhatsApp a mano. Eso armé para Alo Patagonia, y es el mismo enfoque si coordinás viajes, hospedaje o experiencias en Argentina.",
    sections: [
      {
        title: "El problema de una operadora sin web clara",
        paragraphs: [
          "Los viajeros llegan del celular, a menudo en otro huso o en medio de una conversación de grupo. Si no encuentran qué incluye el viaje, cuántos días, a dónde van y cómo consultar, se van a otra agencia o a un Instagram eterno. Alo Patagonia tenía esa fricción: itinerarios poco claros y un contacto que no cerraba.",
        ],
      },
      {
        title: "Alo Patagonia: destinos, itinerario y WhatsApp",
        paragraphs: [
          "alopatagonia.com es un sitio de turismo, no una landing de una sola oferta. Ordené destinos e itinerarios para que se lean en el celu, con un mensaje que explica el tipo de viaje y un WhatsApp listo para coordinar. No hay un carrito de e-commerce: el cierre es humano, que es como se venden este tipo de viajes.",
          "El stack es Next.js, React y TypeScript, publicado para que cargue rápido aunque la foto del sur pese. La consulta no depende de un formulario de cinco pasos.",
        ],
      },
      {
        title: "Qué lleva un sitio web de turismo que convierte",
        paragraphs: [
          "No hace falta un motor de reservas el primer día. Hace falta claridad y un canal.",
        ],
        bullets: [
          "Destinos o experiencias con itinerario entendible",
          "Fotos reales, no un banco genérico de montañas",
          "WhatsApp con el viaje o el destino ya mencionado",
          "Estructura mobile-first: se arma el viaje desde el teléfono",
          "SEO técnico para búsquedas del destino y de la marca",
        ],
      },
      {
        title: "Turismo en Argentina, desarrollo desde Buenos Aires",
        paragraphs: [
          "Vivo en Buenos Aires y trabajo remoto. Alo Patagonia es un cliente del sur: reuniones por WhatsApp o videollamada, el mismo seguimiento que con un consultorio en CABA. Si tu operación está en la Patagonia, el norte, Mendoza o un pueblo, el sitio se puede armar igual.",
          "Una landing de un hospedaje o de un solo circuito entra en Essential o Premium. Un sitio con varios destinos, como Alo, se cotiza como proyecto de sitio.",
        ],
      },
    ],
    cases: [CASE_ALO],
    faqs: [
      {
        question: "¿El sitio de turismo incluye reservas online?",
        answer:
          "En Alo Patagonia el cierre es por WhatsApp, porque el viaje se arma. Si más adelante hace falta un motor de fechas o pagos, se evalúa aparte. Arrancar con consulta directa suele convertir mejor que un checkout a medio configurar.",
      },
      {
        question: "¿Sirve para un hostel, un lodge o solo para agencias?",
        answer:
          "El mismo criterio sirve para un hospedaje con una oferta clara (ahí a menudo alcanza una landing) y para una operadora con varios destinos (sitio). Contame qué vendés y te digo cuál encaja.",
      },
    ],
    related: [
      { href: "/pagina-web-whatsapp", label: "Página web con WhatsApp" },
      { href: "/landing-page", label: "Landing page" },
      { href: "/desarrollo-web", label: "Desarrollo web" },
      { href: "/pagina-web-comercio", label: "Página web para comercios" },
    ],
  },
  {
    slug: "desarrollo-web-buenos-aires",
    title: "Desarrollo Web en Buenos Aires | Freelance remoto",
    description:
      "Desarrollador web en Buenos Aires: landings y sitios para consultorios, turismo y comercios. Trabajo remoto en todo el país. Presupuesto en 24 hs.",
    keyword: "desarrollo web Buenos Aires",
    label: "Buenos Aires",
    h1: "Desarrollo web en Buenos Aires, remoto a todo el país",
    lead:
      "Soy Agustín Ader, desarrollador web freelance en Buenos Aires. Diseño y programo la web con Next.js y la dejo online. La reunión es por WhatsApp o videollamada: no hace falta que estés en CABA.",
    sections: [
      {
        title: "Por qué “desarrollo web Buenos Aires” no es solo una oficina",
        paragraphs: [
          "Gran parte de la demanda de sitios en Argentina se busca con esa frase, aunque el cliente esté en Córdoba o en el sur. Yo estoy en Buenos Aires y tomo proyectos remotos. Dr. Chinski y el Dr. López Moris son consultorios de acá; Alo Patagonia opera viajes en el sur. El proceso es el mismo.",
        ],
      },
      {
        title: "Qué entrego si me contratás desde Buenos Aires (o desde afuera)",
        paragraphs: [
          "Una landing Essential o Premium, o un sitio completo si el contenido lo pide. Siempre: diseño mobile-first, código propio, SEO técnico, WhatsApp y publicación en tu dominio. No subcontrato el front a un tercero anónimo.",
        ],
        bullets: [
          "Respuesta en menos de 24 horas",
          "Demo a medida gratuita si todavía no estás seguro",
          "Pago 50% al iniciar y 50% al entregar",
          "Seguimiento por WhatsApp, sin account manager de por medio",
        ],
      },
      {
        title: "Proyectos que ya están online",
        paragraphs: [
          "En salud: rinoplastia.com.ar (sitio en tres idiomas), drlopezmoris.com y la landing de la Dra. Armijos. En turismo: alopatagonia.com. En formación: rhinoscopy.com.ar. En comercio: laguaridainstrumentos.com. Son sitios reales, no mockups de Behance.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_ALO, CASE_LOPEZ, CASE_GUARIDA],
    faqs: [
      {
        question: "¿Hacés desarrollo web solo en Capital y Gran Buenos Aires?",
        answer:
          "Estoy en Buenos Aires, pero el trabajo es remoto. Si tu negocio está en CABA, en Zona Norte o en la Patagonia, coordinamos igual. Alo Patagonia es el ejemplo más claro de cliente lejos de la oficina.",
      },
      {
        question: "¿Cuánto sale el desarrollo web en Buenos Aires?",
        answer:
          "Una landing Essential parte de USD 300 (USD 225 con promo hasta el 1 de enero de 2027) y Premium de USD 500 (USD 375 en promo). Un sitio completo —varias páginas, idiomas, casos clínicos o destinos— se cotiza aparte.",
      },
    ],
    related: [
      { href: "/desarrollador-web-freelance", label: "Desarrollador web freelance" },
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/sitio-web-turismo", label: "Sitio web de turismo" },
      { href: "/desarrollo-web", label: "Desarrollo web" },
    ],
  },
  {
    slug: "pagina-web-whatsapp",
    title: "Página Web con WhatsApp | Consultas en un toque",
    description:
      "Página web con WhatsApp integrado: el visitante te escribe con el mensaje ya armado. Así cierran Chinski, Alo Patagonia y La Guarida. Presupuesto en 24 hs.",
    keyword: "página web con WhatsApp",
    label: "WhatsApp",
    h1: "Página web con WhatsApp para que te escriban al toque",
    lead:
      "En Argentina el cierre es WhatsApp. Si la web esconde el botón o manda a un formulario de siete campos, se pierden consultas. Dejo el chat a un toque, con un mensaje listo según el servicio.",
    sections: [
      {
        title: "Por qué el WhatsApp tiene que estar pensado, no pegado",
        paragraphs: [
          "Un ícono verde flotando no alcanza. El mensaje prearmado cambia la conversación: “Hola, quiero consultar por rinoplastia” no es lo mismo que un “hola” vacío. En los sitios que programo, el CTA lleva contexto —el procedimiento, el viaje, el instrumento— para que vos contestes a alguien que ya se presentó.",
        ],
      },
      {
        title: "Cómo lo uso en proyectos reales",
        paragraphs: [
          "En Dr. Chinski hay WhatsApp y formulario: el paciente elige. En Alo Patagonia el WhatsApp es el cierre del itinerario, porque el viaje se arma. En La Guarida Instrumentos el catálogo visual termina en consulta directa, para no volver a depender de un DM de Instagram. En el Dr. López Moris, el turno sale por el mismo canal.",
          "Si el plan es Essential, el WhatsApp va incluido. Premium suma formulario para quien prefiere no abrir el chat.",
        ],
      },
      {
        title: "WhatsApp no reemplaza al SEO (ni al revés)",
        paragraphs: [
          "Google tiene que poder leer la página: título, descripción, sitemap. WhatsApp convierte a quien ya llegó. Las dos cosas van juntas. Una web lenta, aunque tenga botón verde, pierde al que entra de un anuncio o de una búsqueda de turno.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_ALO, CASE_GUARIDA, CASE_LOPEZ],
    faqs: [
      {
        question: "¿El WhatsApp queda con mi número?",
        answer:
          "Sí. Configuro el wa.me con tu número y un texto que podemos ajustar por sección (un mensaje para rinoplastia, otro para un destino, otro para un producto).",
      },
      {
        question: "¿Puedo tener WhatsApp y formulario?",
        answer:
          "Sí. En los sitios de consultorio suele convivir: hay quien escribe al toque y hay quien prefiere dejar mail. Premium y los sitios completos lo contemplan.",
      },
    ],
    related: [
      { href: "/landing-page", label: "Landing page" },
      { href: "/sitio-web-turismo", label: "Sitio web de turismo" },
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/pagina-web", label: "Página web" },
    ],
  },
  {
    slug: "sitio-web-multiidioma",
    title: "Sitio Web en Español, Inglés y Portugués | Argentina",
    description:
      "Sitio web multiidioma en Argentina: español, inglés y portugués. Así está Dr. Chinski Rinoplastia y Rhinoscopy. Presupuesto en 24 hs.",
    keyword: "sitio web multiidioma",
    label: "Multiidioma",
    h1: "Sitio web en español, inglés y portugués",
    lead:
      "Si te escriben de Brasil, de España o de Estados Unidos, una web solo en castellano corta la conversación. Programo sitios con español, inglés y portugués —el mismo stack que uso en el resto del portfolio, con i18n de verdad, no un traductor pegado arriba.",
    sections: [
      {
        title: "Cuándo vale la pena un segundo (o tercer) idioma",
        paragraphs: [
          "No todo negocio lo necesita. Un comercio de barrio, no. Un cirujano con pacientes de afuera o un congreso regional, sí. El idioma extra no es un plugin: hay que traducir bien, cuidar el tono clínico o turístico, y que el SEO de cada lengua tenga su título y su descripción.",
        ],
      },
      {
        title: "Dr. Chinski y Rhinoscopy: ES, EN y PT",
        paragraphs: [
          "rinoplastia.com.ar está en tres idiomas porque parte de la demanda de rinoplastia es internacional. El sitio mantiene identidad premium en cada lengua: casos, equipo, técnica y turno. Rhinoscopy, la plataforma de formación, también está en ES / EN / PT: el congreso y los webinars no son solo para un país.",
          "En mi propio portfolio el idioma se elige con cookie (español, inglés o portugués) para no duplicar URLs. En un sitio de paciente o de congreso, la estrategia de URL se define con vos: a veces conviene /en y /pt, a veces un selector. Lo que no hago es dejar textos a medias.",
        ],
      },
      {
        title: "Qué implica sumar idiomas al desarrollo",
        paragraphs: [
          "Se cotiza aparte del plan Essential. Hay que traducir (vos, un traductor, o lo coordinamos), armar la navegación y revisar que el WhatsApp y los formularios hablen el idioma de la página. El código queda preparado en Next.js para no rehacer el sitio el día que sumás portugués.",
        ],
      },
    ],
    cases: [CASE_CHINSKI, CASE_RHINOSCOPY],
    faqs: [
      {
        question: "¿Traducís vos los textos médicos?",
        answer:
          "Los textos clínicos los valida el profesional. Puedo armar la estructura en los tres idiomas y cargar lo que me pases. Una traducción automática sin revisión, en rinoplastia, es un riesgo: no la dejo ir a producción así.",
      },
      {
        question: "¿Cuánto suma al presupuesto un sitio multiidioma?",
        answer:
          "Depende de si son dos lenguas o tres, y de cuántas páginas hay que clonar. En la cotización va separado, sin letra chica. En la demo se ve primero en un idioma.",
      },
    ],
    related: [
      { href: "/sitio-web-para-medicos", label: "Sitio web para médicos" },
      { href: "/desarrollo-web", label: "Desarrollo web" },
      { href: "/pagina-web", label: "Página web" },
      { href: "/desarrollador-web-freelance", label: "Freelance" },
    ],
  },
  {
    slug: "pagina-web-comercio",
    title: "Página Web para Comercios en Argentina | De Instagram a la web",
    description:
      "Página web para comercios en Argentina: catálogo claro y WhatsApp, sin depender solo de Instagram. Caso La Guarida Instrumentos. Presupuesto en 24 hs.",
    keyword: "página web para comercios",
    label: "Comercios",
    h1: "Página web para tu comercio, sin vivir solo de Instagram",
    lead:
      "Si el negocio vive en el feed, cada vez que el algoritmo esconde una publicación se cortan las consultas. Una web propia muestra el catálogo, explica qué hacés y deja el WhatsApp a mano. Así quedó La Guarida Instrumentos.",
    sections: [
      {
        title: "El problema de vender solo por redes",
        paragraphs: [
          "Instagram no es un catálogo estable: no se busca igual que en Google, no se comparte un link limpio y el visitante nuevo no entiende la oferta en tres stories. La Guarida Instrumentos dependía de mensajes sueltos. La landing ordena el catálogo visual, se lee en el celu y manda a consulta directa.",
        ],
      },
      {
        title: "Qué página web le sirve a un local o a un taller",
        paragraphs: [
          "Casi nunca hace falta un e-commerce el primer día. Hace falta que se vea la mercadería o el servicio, un tono que no parezca plantilla, y un WhatsApp. Si más adelante querés carrito y medios de pago, se evalúa; arrancar por la consulta suele ser más honesto y más rápido.",
        ],
        bullets: [
          "Catálogo o selección de productos, sin 200 SKU el día uno",
          "Fotos reales del local o de lo que vendés",
          "WhatsApp con el producto o el rubro ya escrito",
          "SEO base para el nombre del comercio y la ciudad",
        ],
      },
      {
        title: "Landing de comercio vs sitio más grande",
        paragraphs: [
          "La Guarida es una landing de conversión. Alo Patagonia, aunque también “vende”, es un sitio de destinos: más páginas, otro ritmo. Si tu comercio tiene una línea clara, Essential o Premium alcanzan. Si tenés sucursales, talleres y una marca para armar, lo vemos como sitio.",
        ],
      },
    ],
    cases: [CASE_GUARIDA, CASE_ALO],
    faqs: [
      {
        question: "¿Incluye tienda para cobrar online?",
        answer:
          "En el trabajo de La Guarida el objetivo era consulta, no checkout. Si necesitás Mercado Pago o un carrito, lo cotizo aparte. Muchos comercios convierten mejor pidiendo WhatsApp que forzando un pago en una web nueva.",
      },
      {
        question: "¿Puedo seguir usando Instagram?",
        answer:
          "Sí. La web no reemplaza el feed: le da un lugar fijo al que llega del link de la bio, de Google o de un reenvío. Rhinoscopy y La Guarida salieron de depender solo de la red, no de abandonarla.",
      },
    ],
    related: [
      { href: "/landing-page", label: "Landing page" },
      { href: "/pagina-web-whatsapp", label: "Página web con WhatsApp" },
      { href: "/pagina-web", label: "Página web" },
      { href: "/sitio-web-turismo", label: "Sitio web de turismo" },
    ],
  },
] as const;

export function getSeoLanding(slug: string): SeoLandingPage | undefined {
  return SEO_LANDING_PAGES.find((page) => page.slug === slug);
}
