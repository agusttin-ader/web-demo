import { IconComments } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Problem() {
  const t = await getDictionary();

  return (
    <section id="problema" className="section-shell">
      <div className="cq mx-auto max-w-3xl">
        <SectionHeader
          label={t.problem.label}
          title={t.problem.title}
          description={t.problem.description}
        />
        <Reveal variant="scale" delay={40}>
          <ul className="cq-grid-problem mb-12">
            {t.problem.points.map((point, i) => (
              <li
                key={point}
                className="glass-card rounded-[var(--radius-xl)] p-6 text-center text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
                  {i + 1}
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-xl text-center">
            <IconComments className="mx-auto h-6 w-6 text-[var(--accent)]" aria-hidden />
            <p className="mt-6 font-display text-[length:var(--text-xl)] font-semibold leading-snug text-[var(--foreground)] sm:text-[length:var(--text-2xl)]">
              {t.problem.closing}{" "}
              <span className="text-gradient">{t.problem.closingAccent}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
