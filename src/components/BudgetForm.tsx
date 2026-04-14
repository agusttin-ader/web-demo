"use client";

import { useActionState } from "react";
import { sendBudgetRequest, type BudgetFormState } from "@/app/actions/send-budget-request";

const initialState: BudgetFormState = {
  success: false,
  message: "",
};

export function BudgetForm() {
  const [state, formAction, isPending] = useActionState(sendBudgetRequest, initialState);

  return (
    <form
      action={formAction}
      className="w-full max-w-2xl space-y-5 rounded-2xl border border-[var(--card-border)] bg-[var(--background-elevated)] p-6 shadow-[var(--shadow-md)] sm:p-8"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          Nombre y apellido *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Ej: Agustín Ader"
          maxLength={120}
          className="w-full rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all focus:border-[var(--accent)]/60 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          maxLength={254}
          className="w-full rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all focus:border-[var(--accent)]/60 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          Teléfono de contacto (opcional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+54 9 11 1234-5678"
          maxLength={30}
          className="w-full rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all focus:border-[var(--accent)]/60 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          Objetivo del proyecto *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="Describe alcance esperado, plazos estimados y cualquier referencia relevante..."
          className="w-full resize-y min-h-[100px] rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all focus:border-[var(--accent)]/60 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"
          disabled={isPending}
        />
      </div>

      {state.message && (
        <p
          role="alert"
          className={`text-sm rounded-lg px-3 py-2 ${
            state.success
              ? "bg-[var(--accent-soft)] text-[var(--accent-hover)]"
              : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-medium text-[var(--btn-primary-text)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? "Enviando solicitud..." : "Solicitar propuesta"}
      </button>
    </form>
  );
}
