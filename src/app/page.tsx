"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <main className="space-y-20 md:space-y-24 lg:space-y-28 px-4 sm:px-6">
      {/* HERO */}
      <section id="hero" className="pt-10 md:pt-12 lg:pt-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Desarrollo web para empresas y emprendimientos
            </p>
            <h1 className="mx-auto max-w-2xl text-3xl leading-tight md:text-4xl lg:text-5xl">
              Desarrollo web profesional para negocios y emprendimientos
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base sm:text-lg text-neutral-700">
              Diseño claro y funcional, pensado para convertir visitantes en clientes. Ideal para
              turismo y servicios.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contacto"
                onClick={(event) => {
                  event.preventDefault();
                  const section = document.getElementById("contacto");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                aria-label="Ir al contacto"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#f7f5ef] shadow-[0_12px_28px_rgba(0,0,0,0.16)] transform transition-transform duration-150 hover:scale-105 hover:bg-neutral-900 hover:border-neutral-900"
              >
                Ver contacto
              </a>
              <div className="flex flex-wrap justify-center gap-3 text-[0.75rem] text-neutral-600 ml-2">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                  Optimizado para móviles
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                  Contenidos orientados a resultados
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-[0_22px_45px_rgba(0,0,0,0.08)] transform transition-transform duration-150 hover:scale-105">
              <div className="relative h-52 sm:h-56 md:h-64">
                <Image
                  src="/images/escapate-al-lago.jpg"
                  alt="Vista al lago desde un alojamiento turístico"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 60vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-2 px-5 py-5 text-sm">
                <h3 className="text-lg">Escápate al lago</h3>
                <p className="text-neutral-700">
                  Noches tranquilas, desayuno incluido y atención personalizada para cada huésped.
                </p>
                <ul className="list-disc pl-4 text-neutral-700">
                  <li>Habitaciones luminosas con vista</li>
                  <li>Wi‑Fi rápido para trabajar y descansar</li>
                  <li>Ubicación cercana a naturaleza y ciudad</li>
                </ul>
                <p className="text-[0.75rem] text-neutral-500">
                  *Contenido de ejemplo para mostrar el estilo de la web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO support paragraph (hidden visually) */}
      <p className="sr-only">
        Soy desarrollador especializado en desarrollo web profesional para pymes y emprendimientos: creo
        páginas web para negocios pensadas para convertir visitantes en clientes. Entrego sitios rápidos
        y responsivos, con arquitectura clara, formularios eficientes e integración de canales como
        WhatsApp para facilitar consultas. Trabajo con emprendimientos y el sector turismo, adaptando
        contenidos y funcionalidades según la operativa del negocio. Mi enfoque prioriza usabilidad,
        rendimiento y SEO práctico para aumentar consultas y reservas sin sacrificar simplicidad.
      </p>

      {/* GALERÍA DE EJEMPLO */}
      <section aria-label="Imágenes de ejemplo" className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105 text-center">
            <div className="relative h-40">
              <Image
                src="/images/hostel-room.jpg"
                alt="Habitación de hostel con cama cómoda y luz natural"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105 text-center">
            <div className="relative h-40">
              <Image
                src="/images/bariloche-landscape.jpg"
                alt="Paisaje de Bariloche con lago y montañas"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105 text-center">
            <div className="relative h-40">
              <Image
                src="/images/clean-interior.jpg"
                alt="Interior limpio y minimalista de alojamiento turístico"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Beneficios para tu negocio</h2>
          <p className="text-sm text-neutral-700">
            Una web clara y bien pensada puede traducirse en más reservas y una mejor percepción de tu alojamiento.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Más reservas directas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Mejor imagen profesional</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Experiencia clara para el huésped</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Optimizada para móviles</h3>
          </article>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Servicios</h2>
          <p className="text-sm text-neutral-700">
            Servicios de desarrollo web pensados para empresas y emprendimientos: entrego sitios
            profesionales, rápidos y orientados a convertir visitantes en clientes. Complementos
            opcionales disponibles para mantener coherencia de marca.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Desarrollo de sitios profesionales</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Diseño mobile‑first y responsive</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Estructura preparada para SEO</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Formularios y optimización de consultas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Integración con WhatsApp y canales de contacto</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 md:col-span-2 text-center">
            <h3 className="text-base">Gestión básica de redes sociales (opcional)</h3>
            <p className="text-sm text-neutral-700 mt-2">Servicio complementario: gestión simple y coherente con la web, orientada a mantener la imagen de marca. Opcional, no es parte del servicio principal.</p>
          </article>
        </div>
      </section>

      {/* FUNCIONALIDADES PARA HOSTELS Y HOSTERÍAS */}
      <section id="funcionalidades" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Funcionalidades para hostels y hosterías</h2>
          <p className="text-sm text-neutral-700">
            Estas son algunas de las funciones que se pueden integrar en un sitio web turístico:
          </p>
        </header>
        <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Calendario de reservas y disponibilidad
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Formularios de reserva
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Integración con WhatsApp
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Enlaces a Booking y Airbnb
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Información turística y actividades
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Mapas y ubicación
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Galería de habitaciones
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-800 transform transition-transform duration-150 hover:scale-105 text-center">
            Pagos online
          </article>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Bloques de ejemplo</h2>
          <p className="text-sm text-neutral-700">
            Tres tarjetas simples para mostrar información clave de tu alojamiento.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-6 text-sm transform transition-transform duration-150 hover:scale-105">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
              Demo
            </span>
            <h3 className="text-base">Habitación Doble</h3>
            <p className="text-neutral-700">
              Breve descripción de una habitación cómoda para dos personas, con todos los servicios
              esenciales.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-6 text-sm transform transition-transform duration-150 hover:scale-105">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
              Demo
            </span>
            <h3 className="text-base">Vista al Lago</h3>
            <p className="text-neutral-700">
              Texto de muestra para destacar vistas panorámicas y un ambiente tranquilo para
              desconectar.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-6 text-sm transform transition-transform duration-150 hover:scale-105">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
              Demo
            </span>
            <h3 className="text-base">Reserva Online</h3>
            <p className="text-neutral-700">
              Espacio para un llamado a la acción claro, animando al visitante a reservar en pocos
              pasos.
            </p>
          </article>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="opiniones" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Opiniones</h2>
        </header>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700 shadow-[0_10px_24px_rgba(0,0,0,0.03)] transform transition-transform duration-150 hover:scale-105 text-center">
            <p>“Agustín logró una web clara y moderna que mejoró nuestras consultas.”</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700 shadow-[0_10px_24px_rgba(0,0,0,0.03)] transform transition-transform duration-150 hover:scale-105 text-center">
            <p>“Excelente comunicación y enfoque profesional.”</p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Sobre mí</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-base text-neutral-700 space-y-3">
          <p>
            Soy Agustín Ader, desarrollador frontend con más de 9 años de experiencia en atención al
            cliente y administración. Combino know‑how técnico con comprensión de procesos de negocio
            para entregar soluciones web confiables y orientadas a resultados.
          </p>
          <p>
            Trabajo con empresas y emprendimientos —incluyendo turismo y servicios— para convertir
            necesidades operativas en sitios claros, fáciles de usar y pensados para generar consultas
            y ventas. Me involucro como socio técnico: comunicación directa, entregas puntuales y
            soluciones prácticas para tu negocio.
          </p>
        </div>
      </section>

      {/* EXPERIENCIA ATENCIÓN AL CLIENTE */}
      <section id="experiencia-cliente" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Experiencia en atención al cliente</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-base text-neutral-700 space-y-3">
          <p>
            Tengo más de 9 años de experiencia en atención al cliente,
            lo que me permite comprender cómo piensan y sienten los usuarios.
          </p>
          <p>
            Mi enfoque combina diseño visual con funcionalidad real,
            para que la experiencia sea clara, simple y efectiva.
          </p>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why-me" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">¿Por qué trabajar conmigo?</h2>
          <p className="text-sm text-neutral-700">
            Algunos motivos por los que puedo sumar a tu proyecto.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Enfoque en resultados</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Comunicación clara</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Experiencia con clientes reales</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 text-center">
            <h3 className="text-base">Diseño simple y efectivo</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 md:col-span-2 text-center">
            <h3 className="text-base">Trato profesional y cercano</h3>
          </article>
        </div>
      </section>

      {/* COLABORACIÓN */}
      <section id="colaboracion" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Colaboración</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-base text-neutral-700 space-y-3">
          <p>
            Estoy abierto a colaborar en proyectos locales,
            ya sea de forma profesional o en modalidad de voluntariado,
            con el objetivo de integrarme a la comunidad
            y aportar valor con mi trabajo.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="space-y-6">
        <header className="mx-auto max-w-xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">¿Charlamos?</h2>
          <p className="text-sm text-neutral-700">
            Si buscás una web profesional que mejore consultas y ventas para tu negocio, contactame
            sin compromiso. Primero entendemos el proyecto y luego ofrezco servicios complementarios
            si son necesarios.
          </p>
        </header>
        <div className="mt-4 flex justify-center">
          <a
            href="https://wa.me/5491168696491?text=Hola%21%20Me%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#f7f5ef] shadow-[0_12px_28px_rgba(0,0,0,0.16)] transform transition-transform duration-150 hover:scale-105 hover:bg-neutral-900 hover:border-neutral-900"
          >
            Contactame por WhatsApp
          </a>
        </div>
      </section>
    </main>

      <footer className="mt-8 border-t border-black/10 pt-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 -translate-y-2 transform">
            <a
              href="https://www.instagram.com/agusttin.ader/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-9 h-9 text-black hover:opacity-80 hover:scale-105 transition-transform duration-150"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="6" r="0.75" fill="currentColor" />
              </svg>
            </a>

            <a
              href="mailto:agusttin.dev@gmail.com"
              aria-label="Correo electrónico"
              className="inline-flex items-center justify-center w-9 h-9 text-black hover:opacity-80 hover:scale-105 transition-transform duration-150"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M3 6.5C3 5.6716 3.6716 5 4.5 5h15c.8284 0 1.5.6716 1.5 1.5v11c0 .8284-.6716 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 7.5l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://wa.me/5491168696491?text=Hola%21%20Me%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center justify-center w-9 h-9 text-black hover:opacity-80 hover:scale-105 transition-transform duration-150"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.115.55 4.155 1.6 5.95L0 24l6.3-1.65A11.9 11.9 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.98-.48-3.84-1.48-5.52z" stroke="currentColor" strokeWidth="0.6" />
                <path d="M17.2 14.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.52.07-.8.37-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.95 1.25 3.15.15.2 2.15 3.35 5.2 4.69 3.05 1.34 3.05.89 3.6.83.55-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
