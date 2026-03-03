Portfolio de **Agustín Ader** — desarrollo web profesional. Next.js, diseño responsive y formulario de presupuesto con envío por email.

## Formulario de presupuesto

El formulario de contacto envía los mensajes a **agusttin.dev@gmail.com** usando [Resend](https://resend.com).

1. Creá una API key en [resend.com/api-keys](https://resend.com/api-keys).
2. Copiá `.env.example` a `.env.local` y agregá tu clave: `RESEND_API_KEY=re_xxx`.
3. Para producción, verificá tu dominio en [resend.com/domains](https://resend.com/domains) y actualizá el remitente en `src/app/actions/send-budget-request.ts` (por defecto usa `onboarding@resend.dev` para pruebas).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
