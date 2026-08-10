"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { sendBudgetRequest, type BudgetFormState } from "@/app/actions/send-budget-request";

const initialState: BudgetFormState = {
  success: false,
  message: "",
};

const fieldClass = "field-input";

type BudgetFormProps = {
  /** Larger padding / stronger presence for the contact stage */
  featured?: boolean;
};

export function BudgetForm({ featured = false }: BudgetFormProps) {
  const [state, formAction, isPending] = useActionState(sendBudgetRequest, initialState);
  const formId = useId();
  const statusId = `${formId}-status`;
  const hintId = `${formId}-hint`;
  const statusRef = useRef<HTMLParagraphElement>(null);
  const hasError = Boolean(state.message && !state.success);
  const hasSuccess = Boolean(state.message && state.success);
  const hasStatus = Boolean(state.message);

  useEffect(() => {
    if (!state.message) return;
    statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [state.message]);

  return (
    <form
      action={formAction}
      className={
        featured
          ? "budget-form budget-form--featured flex w-full flex-col gap-[var(--space-3)]"
          : "budget-form flex w-full flex-col gap-[var(--space-3)] rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--background-elevated)] p-[var(--space-3)] shadow-[var(--shadow-md)] sm:p-[var(--space-4)]"
      }
      noValidate={false}
      aria-busy={isPending}
      aria-describedby={hintId}
    >
      <div>
        <p className="eyebrow tracking-[0.14em]">Propuesta</p>
        <h3 className="mt-2 font-display text-[length:var(--text-2xl)] font-bold tracking-tight text-[var(--foreground)] sm:text-[length:var(--text-3xl)]">
          Pedí tu propuesta
        </h3>
        <p id={hintId} className="mt-2 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]">
          Nombre, email y objetivo del proyecto. En menos de un minuto queda listo.
        </p>
      </div>

      <p
        ref={statusRef}
        id={statusId}
        role={hasError ? "alert" : "status"}
        aria-live="polite"
        aria-atomic="true"
        className={
          hasStatus
            ? `rounded-[var(--radius-md)] border px-3.5 py-3 text-[length:var(--text-sm)] leading-snug ${
                hasSuccess
                  ? "border-[color-mix(in_srgb,var(--accent)_35%,var(--card-border))] bg-[var(--accent-soft)] text-[var(--accent-bright)]"
                  : "border-[var(--danger)]/40 bg-[var(--danger-soft)] text-[var(--danger)]"
              }`
            : "sr-only"
        }
      >
        {state.message || (isPending ? "Enviando solicitud…" : "")}
      </p>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Empresa</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div>
        <label htmlFor={`${formId}-name`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          Nombre y apellido{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">(obligatorio)</span>
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={hasError || undefined}
          aria-describedby={hasStatus ? statusId : undefined}
          placeholder="Ej: Agustín Ader"
          maxLength={120}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          Email{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">(obligatorio)</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          aria-required="true"
          aria-invalid={hasError || undefined}
          aria-describedby={hasStatus ? statusId : undefined}
          placeholder="tu@email.com"
          maxLength={254}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-phone`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          Teléfono de contacto <span className="font-normal text-[var(--muted)]">(opcional)</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+54 9 11 1234-5678"
          maxLength={30}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          Objetivo del proyecto{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">(obligatorio)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          maxLength={2000}
          aria-required="true"
          aria-invalid={hasError || undefined}
          aria-describedby={hasStatus ? statusId : undefined}
          placeholder="Alcance, plazos y cualquier referencia relevante"
          className={`${fieldClass} min-h-[100px] resize-y`}
          disabled={isPending || hasSuccess}
        />
      </div>

      <button
        type="submit"
        disabled={isPending || hasSuccess}
        className="btn-primary focus-ring mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {hasSuccess ? "Mensaje enviado" : isPending ? "Enviando solicitud…" : "Solicitar propuesta"}
      </button>
    </form>
  );
}
