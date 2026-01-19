import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-20 md:space-y-24 lg:space-y-28 px-4 sm:px-6">
      {/* HERO */}
      <section id="hero" className="pt-10 md:pt-12 lg:pt-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Demo de landing para alojamientos
            </p>
            <h1 className="text-3xl leading-tight md:text-4xl lg:text-5xl">
              Webs para hostels y hoteles que convierten visitas en reservas
            </h1>
            <p className="mx-auto max-w-md text-base sm:text-lg text-neutral-700">
              Diseño minimalista, rápido y pensado para tus huéspedes.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/5491168696491"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#f7f5ef] shadow-[0_12px_28px_rgba(0,0,0,0.16)] transform transition-transform duration-150 hover:scale-105 hover:bg-neutral-900 hover:border-neutral-900"
                target="_blank"
                rel="noreferrer"
              >
                Contactame por WhatsApp
              </a>
              <div className="flex flex-wrap justify-center gap-3 text-[0.75rem] text-neutral-600">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                  Diseño adaptado a móviles
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
                  Textos listos para personalizar
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
                <h2 className="text-lg">Escápate al lago</h2>
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

      {/* GALERÍA DE EJEMPLO */}
      <section aria-label="Imágenes de ejemplo" className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105">
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
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105">
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
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 transform transition-transform duration-150 hover:scale-105">
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
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Más reservas directas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Mejor imagen profesional</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Experiencia clara para el huésped</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Optimizada para móviles</h3>
          </article>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Servicios</h2>
          <p className="text-sm text-neutral-700">
            Un conjunto de servicios pensados para que tu presencia online sea coherente, profesional y orientada a resultados.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Diseño web moderno y minimalista</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Optimización para dispositivos móviles</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Formularios de contacto y reservas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Estructura clara y carga rápida</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 md:col-span-2">
            <h3 className="text-base">Mejora de la experiencia del usuario</h3>
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
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700 shadow-[0_10px_24px_rgba(0,0,0,0.03)] transform transition-transform duration-150 hover:scale-105">
            <p>“Agustín logró una web clara y moderna que mejoró nuestras consultas.”</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700 shadow-[0_10px_24px_rgba(0,0,0,0.03)] transform transition-transform duration-150 hover:scale-105">
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
            Soy <strong>Agustín Ader</strong>, Desarrollador Frontend con 9 años de experiencia en
            atención al cliente.
          </p>
          <p>
            Trabajo con proyectos de turismo, hostels y hoteles, creando sitios web claros, funcionales
            y orientados a resultados.
          </p>
          <p>
            Mi enfoque combina diseño moderno con una experiencia de usuario simple y efectiva.
            Actualmente estoy organizando mi radicación en Bariloche y busco colaborar con
            emprendimientos locales.
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
            Tener más de 9 años de experiencia en atención al cliente me permite entender las
            necesidades reales de los huéspedes.
          </p>
          <p>
            Diseño sitios web pensando en la claridad, la confianza y la facilidad de uso.
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
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Enfoque en resultados</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Comunicación clara</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Experiencia con clientes reales</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105">
            <h3 className="text-base">Diseño simple y efectivo</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] transform transition-transform duration-150 hover:scale-105 md:col-span-2">
            <h3 className="text-base">Trato profesional y cercano</h3>
          </article>
        </div>
      </section>

      {/* COLABORACIÓN Y VOLUNTARIADO */}
      <section id="colaboracion-voluntariado" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Colaboración y voluntariado</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-base text-neutral-700 space-y-3">
          <p>
            Estoy abierto a colaborar en proyectos locales, tanto de forma profesional como en modalidad
            de voluntariado, con el objetivo de integrarme a la comunidad y aportar valor con mi
            trabajo.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="space-y-6">
        <header className="mx-auto max-w-xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">¿Querés mejorar tu presencia online?</h2>
          <p className="text-sm text-neutral-700">
            Si tenés un proyecto turístico, me encantaría ayudarte a potenciarlo.
          </p>
        </header>
        <div className="mt-4 flex justify-center">
          <a
            href="https://wa.me/5491168696491"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#f7f5ef] shadow-[0_12px_28px_rgba(0,0,0,0.16)] transform transition-transform duration-150 hover:scale-105 hover:bg-neutral-900 hover:border-neutral-900"
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
