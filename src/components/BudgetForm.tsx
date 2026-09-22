"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendBudgetRequest, type BudgetFormState } from "@/app/actions/send-budget-request";
import { useI18n } from "@/i18n/I18nProvider";
import { DS_CLASS } from "@/lib/design-system";

const initialState: BudgetFormState = {
  success: false,
  message: "",
};

/** Stable ids — single form on page; avoids useId SSR/client tree mismatch. */
const FORM_ID = "budget-request-form";

type BudgetFormProps = {
  featured?: boolean;
  showHeader?: boolean;
};

export function BudgetForm({ featured = false, showHeader = true }: BudgetFormProps) {
  const { t } = useI18n();
  const [state, formAction, isPending] = useActionState(sendBudgetRequest, initialState);
  const statusId = `${FORM_ID}-status`;
  const hintId = `${FORM_ID}-hint`;
  const statusRef = useRef<HTMLParagraphElement>(null);
  const hasError = Boolean(state.message && !state.success);
  const hasSuccess = Boolean(state.message && state.success);
  const hasStatus = Boolean(state.message);

  useEffect(() => {
    if (!state.message) return;
    statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [state.message]);

  const statusTone = hasError ? "error" : hasSuccess ? "success" : undefined;

  return (
    <form
      className="budget-form"
      action={formAction}
      noValidate={false}
      aria-busy={isPending}
      aria-describedby={hintId}
      data-featured={featured ? "true" : undefined}
    >
      {showHeader ? (
        <div className="budget-form__header">
          <p className={DS_CLASS.eyebrow}>
            <span className={DS_CLASS.eyebrowDot} aria-hidden />
            {t.form.label}
          </p>
          <h3>{t.form.title}</h3>
          <p id={hintId} className="project-card__meta">{t.form.hint}</p>
        </div>
      ) : (
        <p id={hintId} className="budget-form__lead">{t.form.hint}</p>
      )}

      <p
        ref={statusRef}
        id={statusId}
        role={hasError ? "alert" : "status"}
        aria-live="polite"
        aria-atomic="true"
        className={`budget-form__status ${hasStatus ? "" : "sr-only"}`.trim()}
        data-tone={statusTone}
      >
        {state.message || (isPending ? t.form.sending : "")}
      </p>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${FORM_ID}-company`}>{t.form.honeypot}</label>
        <input id={`${FORM_ID}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="budget-form__fields">
        <div>
          <label htmlFor={`${FORM_ID}-name`}>
            {t.form.name} <span aria-hidden>*</span>
            <span className="sr-only">{t.form.required}</span>
          </label>
          <input
            className={DS_CLASS.field}
            id={`${FORM_ID}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-required="true"
            aria-invalid={hasError || undefined}
            aria-describedby={hasStatus ? statusId : undefined}
            placeholder={t.form.namePlaceholder}
            maxLength={120}
            disabled={isPending || hasSuccess}
          />
        </div>

        <div>
          <label htmlFor={`${FORM_ID}-email`}>
            {t.form.email} <span aria-hidden>*</span>
            <span className="sr-only">{t.form.required}</span>
          </label>
          <input
            className={DS_CLASS.field}
            id={`${FORM_ID}-email`}
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
            disabled={isPending || hasSuccess}
          />
        </div>

        <div>
          <label htmlFor={`${FORM_ID}-phone`}>
            {t.form.phone} {t.form.optional}
          </label>
          <input
            className={DS_CLASS.field}
            id={`${FORM_ID}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t.form.phonePlaceholder}
            maxLength={30}
            disabled={isPending || hasSuccess}
          />
        </div>

        <div>
          <label htmlFor={`${FORM_ID}-message`}>
            {t.form.message} <span aria-hidden>*</span>
            <span className="sr-only">{t.form.required}</span>
          </label>
          <textarea
            className={DS_CLASS.field}
            id={`${FORM_ID}-message`}
            name="message"
            required
            rows={4}
            maxLength={2000}
            aria-required="true"
            aria-invalid={hasError || undefined}
            aria-describedby={hasStatus ? statusId : undefined}
            placeholder={t.form.messagePlaceholder}
            disabled={isPending || hasSuccess}
          />
        </div>

        <button type="submit" className={DS_CLASS.btnPrimary} disabled={isPending || hasSuccess}>
          {hasSuccess ? t.form.submitDone : isPending ? t.form.sending : t.form.submit}
        </button>
      </div>
    </form>
  );
}
