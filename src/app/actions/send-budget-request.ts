"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "agusttin.dev@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

export type BudgetFormState = {
  success: boolean;
  message: string;
};

export async function sendBudgetRequest(
  _prev: BudgetFormState,
  formData: FormData
): Promise<BudgetFormState> {
  const rawName = (formData.get("name") as string)?.trim() ?? "";
  const rawEmail = (formData.get("email") as string)?.trim() ?? "";
  const rawPhone = (formData.get("phone") as string)?.trim() ?? "";
  const rawMessage = (formData.get("message") as string)?.trim() ?? "";

  const MAX_NAME = 120;
  const MAX_EMAIL = 254;
  const MAX_PHONE = 30;
  const MAX_MESSAGE = 2000;

  const name = rawName.slice(0, MAX_NAME);
  const email = rawEmail.slice(0, MAX_EMAIL);
  const phone = rawPhone.slice(0, MAX_PHONE);
  const message = rawMessage.slice(0, MAX_MESSAGE);

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Por favor completá nombre, email y mensaje.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor ingresá un email válido.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada.");
    return {
      success: false,
      message: "Error de configuración. Por favor contactame por WhatsApp o email.",
    };
  }

  const html = `
    <h2>Nueva solicitud de presupuesto – Portfolio</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ""}
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p style="color:#78716c;font-size:12px;">Enviado desde el formulario de presupuesto de tu portfolio.</p>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `[Presupuesto] ${escapeHtml(name)} – Consulta desde portfolio`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      message: "No pude enviar el mensaje. Por favor probá por WhatsApp o email directo.",
    };
  }

  return {
    success: true,
    message: "Mensaje enviado. Te responderé a la brevedad.",
  };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m] ?? m);
}
