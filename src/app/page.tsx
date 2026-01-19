export default function Home() {
  return (
    <main className="space-y-16 md:space-y-24 lg:space-y-28 px-4 sm:px-6">
      {/* HERO */}
      <section id="hero" className="pt-8 md:pt-10 lg:pt-14">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Demo de landing para alojamientos
            </p>
            <h1 className="text-3xl leading-tight md:text-4xl lg:text-5xl">
              Webs modernas para turismo
            </h1>
            <p className="mx-auto max-w-md text-sm sm:text-base text-neutral-700">
              Diseño minimalista, rápido y optimizado para reservas. Una sola página clara para
              presentar tu alojamiento y guiar al usuario a la acción.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f7f5ef] transition hover:bg-neutral-900 hover:border-neutral-900"
              >
                Ver ejemplo
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
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-[0_22px_45px_rgba(0,0,0,0.08)]">
              <div
                className="h-44 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.35)), url('https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
              />
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

      {/* BENEFICIOS */}
      <section id="beneficios" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Por qué una buena web importa</h2>
          <p className="text-sm text-neutral-700">
            Una presencia online cuidada puede marcar la diferencia entre una visita curiosa y una reserva concreta.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Más reservas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Mejor imagen profesional</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Experiencia clara para los huéspedes</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Fácil de usar</h3>
          </article>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Qué puedo hacer por tu proyecto</h2>
          <p className="text-sm text-neutral-700">
            Servicios pensados para que tu web de turismo se vea profesional, cargue rápido y sea fácil de usar.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Diseño web moderno y minimalista</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Optimización para celulares</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Formularios de contacto y reservas</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Mejora de la experiencia del usuario</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:col-span-2">
            <h3 className="text-base">Carga rápida y estructura clara</h3>
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
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-5 text-sm">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
              Demo
            </span>
            <h3 className="text-base">Habitación Doble</h3>
            <p className="text-neutral-700">
              Breve descripción de una habitación cómoda para dos personas, con todos los servicios
              esenciales.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-5 text-sm">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600">
              Demo
            </span>
            <h3 className="text-base">Vista al Lago</h3>
            <p className="text-neutral-700">
              Texto de muestra para destacar vistas panorámicas y un ambiente tranquilo para
              desconectar.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-black/10 bg-white/80 p-5 text-sm">
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

      {/* ABOUT */}
      <section id="about" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Sobre mí</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-sm text-neutral-700 space-y-3">
          <p>
            Mi nombre es <strong>Agustín Ader</strong>, tengo 29 años y soy Desarrollador Frontend.
          </p>
          <p>
            Cuento con 9 años de experiencia en atención al cliente, lo que me permite entender qué
            buscan los huéspedes y cómo convertir eso en una web clara, funcional y atractiva.
          </p>
          <p>
            Trabajo con proyectos de turismo, hostels y hoteles. Actualmente estoy organizando mi
            radicación en Bariloche y mi objetivo es ayudar a emprendimientos locales a mejorar su
            presencia online.
          </p>
        </div>
      </section>

      {/* EXPERIENCIA ATENCIÓN AL CLIENTE */}
      <section id="experiencia-cliente" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Experiencia en atención al cliente</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-sm text-neutral-700 space-y-3">
          <p>
            Tengo más de 9 años de experiencia en atención al cliente, lo que me permite entender las
            necesidades reales de los huéspedes, anticipar problemas y crear sitios web claros,
            funcionales y fáciles de usar.
          </p>
          <p>
            Mi enfoque no es solo estético, sino también práctico: que la experiencia del usuario sea
            simple, intuitiva y efectiva.
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
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Entiendo al cliente final</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Comunicación clara</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Diseño simple y efectivo</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-base">Enfoque en resultados</h3>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:col-span-2">
            <h3 className="text-base">Trato cercano y profesional</h3>
          </article>
        </div>
      </section>

      {/* COLABORACIÓN Y VOLUNTARIADO */}
      <section id="colaboracion-voluntariado" className="space-y-8">
        <header className="mx-auto max-w-2xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">Colaboración y voluntariado</h2>
        </header>
        <div className="mx-auto max-w-2xl text-center text-sm text-neutral-700 space-y-3">
          <p>
            Estoy abierto a colaborar en proyectos locales, ya sea de forma profesional o en modalidad
            de voluntariado, con el objetivo de integrarme a la comunidad, generar vínculos y aportar
            valor con mi trabajo.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="space-y-6">
        <header className="mx-auto max-w-xl text-center space-y-2">
          <h2 className="text-xl md:text-2xl">¿Querés una web así para tu proyecto?</h2>
          <p className="text-sm text-neutral-700">
            Si tenés un proyecto turístico y querés mejorar tu presencia online, me encantaría ayudarte.
          </p>
        </header>
        <div className="flex justify-center">
          <a
            href="https://wa.me/5491168696491"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f7f5ef] transition hover:bg-neutral-900 hover:border-neutral-900"
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
