"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { sendBudgetRequest, type BudgetFormState } from "@/app/actions/send-budget-request";
import { useI18n } from "@/i18n/I18nProvider";

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
  const { t } = useI18n();
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
          ? "budget-form budget-form--featured flex w-full flex-col gap-6 sm:gap-7"
          : "budget-form flex w-full flex-col gap-6 rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--background-elevated)] p-6 sm:gap-7 sm:p-8"
      }
      noValidate={false}
      aria-busy={isPending}
      aria-describedby={hintId}
    >
      <div>
        <p className="eyebrow">{t.form.label}</p>
        <h3 className="mt-4 font-display text-[length:var(--text-2xl)] font-semibold tracking-tight text-[var(--foreground)] sm:text-[length:var(--text-3xl)]">
          {t.form.title}
        </h3>
        <p id={hintId} className="mt-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]">
          {t.form.hint}
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
        {state.message || (isPending ? t.form.sending : "")}
      </p>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>{t.form.honeypot}</label>
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
          {t.form.name}{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">{t.form.required}</span>
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
          placeholder={t.form.namePlaceholder}
          maxLength={120}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          {t.form.email}{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">{t.form.required}</span>
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
          placeholder={t.form.emailPlaceholder}
          maxLength={254}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-phone`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          {t.form.phone} <span className="font-normal text-[var(--muted)]">{t.form.optional}</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder={t.form.phonePlaceholder}
          maxLength={30}
          className={fieldClass}
          disabled={isPending || hasSuccess}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-[length:var(--text-sm)] font-medium text-[var(--foreground)]">
          {t.form.message}{" "}
          <span className="text-[var(--danger)]" aria-hidden>
            *
          </span>
          <span className="sr-only">{t.form.required}</span>
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
          placeholder={t.form.messagePlaceholder}
          className={`${fieldClass} min-h-[100px] resize-y`}
          disabled={isPending || hasSuccess}
        />
      </div>

      <button
        type="submit"
        disabled={isPending || hasSuccess}
        className="btn-primary focus-ring mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {hasSuccess ? t.form.submitDone : isPending ? t.form.sending : t.form.submit}
      </button>
    </form>
  );
}
