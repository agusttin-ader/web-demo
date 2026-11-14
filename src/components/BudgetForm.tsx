"use client";

import { FormEvent, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";
import { DS_CLASS } from "@/lib/design-system";

/** Stable ids — single form on page; avoids useId SSR/client tree mismatch. */
const FORM_ID = "budget-request-form";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_MESSAGE = 2000;

type BudgetFormProps = {
  featured?: boolean;
  showHeader?: boolean;
};

type FormStatus = {
  tone: "error" | "success";
  message: string;
} | null;

function buildWhatsAppMessage(fields: {
  intro: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  labels: { name: string; email: string; phone: string; message: string };
}) {
  const lines = [
    fields.intro,
    "",
    `${fields.labels.name}: ${fields.name}`,
    `${fields.labels.email}: ${fields.email}`,
  ];

  if (fields.phone) {
    lines.push(`${fields.labels.phone}: ${fields.phone}`);
  }

  lines.push("", `${fields.labels.message}:`, fields.message);
  return lines.join("\n");
}

export function BudgetForm({ featured = false, showHeader = true }: BudgetFormProps) {
  const { t } = useI18n();
  const [status, setStatus] = useState<FormStatus>(null);
  const [isOpening, setIsOpening] = useState(false);
  const statusId = `${FORM_ID}-status`;
  const statusRef = useRef<HTMLParagraphElement>(null);
  const hasError = status?.tone === "error";
  const hasSuccess = status?.tone === "success";
  const hasStatus = Boolean(status?.message);

  const showStatus = (next: FormStatus) => {
    setStatus(next);
    queueMicrotask(() => {
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots that fill hidden fields get a silent success.
    if (String(data.get("company") ?? "").trim()) {
      showStatus({ tone: "success", message: t.form.success });
      return;
    }

    const name = String(data.get("name") ?? "").trim().slice(0, MAX_NAME);
    const email = String(data.get("email") ?? "").trim().slice(0, MAX_EMAIL);
    const phone = String(data.get("phone") ?? "").trim().slice(0, MAX_PHONE);
    const message = String(data.get("message") ?? "").trim().slice(0, MAX_MESSAGE);

    if (!name || !email || !message) {
      showStatus({ tone: "error", message: t.form.errors.required });
      return;
    }

    if (!EMAIL_RE.test(email)) {
      showStatus({ tone: "error", message: t.form.errors.email });
      return;
    }

    const href = whatsappUrl(
      buildWhatsAppMessage({
        intro: t.form.whatsappIntro,
        name,
        email,
        phone,
        message,
        labels: {
          name: t.form.name,
          email: t.form.email,
          phone: t.form.phone,
          message: t.form.message,
        },
      })
    );

    setIsOpening(true);
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(href);
      return;
    }

    showStatus({ tone: "success", message: t.form.success });
    form.reset();
    setIsOpening(false);
  };

  return (
    <form
      className="budget-form"
      onSubmit={onSubmit}
      noValidate={false}
      aria-busy={isOpening}
      aria-describedby={statusId}
      data-featured={featured ? "true" : undefined}
    >
      {showHeader ? (
        <div className="budget-form__header">
          <p className={DS_CLASS.eyebrow}>
            <span className={DS_CLASS.eyebrowDot} aria-hidden />
            {t.form.label}
          </p>
          <h3>{t.form.title}</h3>
        </div>
      ) : null}

      <p
        ref={statusRef}
        id={statusId}
        role={hasError ? "alert" : "status"}
        aria-live="polite"
        aria-atomic="true"
        className={`budget-form__status ${hasStatus ? "" : "sr-only"}`.trim()}
        data-tone={status?.tone}
      >
        {status?.message || (isOpening ? t.form.sending : "")}
      </p>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${FORM_ID}-company`}>{t.form.honeypot}</label>
        <input
          id={`${FORM_ID}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
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
            maxLength={MAX_NAME}
            disabled={isOpening}
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
            maxLength={MAX_EMAIL}
            disabled={isOpening}
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
            maxLength={MAX_PHONE}
            disabled={isOpening}
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
            maxLength={MAX_MESSAGE}
            aria-required="true"
            aria-invalid={hasError || undefined}
            aria-describedby={hasStatus ? statusId : undefined}
            placeholder={t.form.messagePlaceholder}
            disabled={isOpening}
          />
        </div>

        <button type="submit" className={DS_CLASS.btnPrimary} disabled={isOpening}>
          {isOpening ? t.form.sending : t.form.submit}
        </button>
      </div>
    </form>
  );
}
