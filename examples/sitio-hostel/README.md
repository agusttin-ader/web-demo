# Sitio hostel – ejemplo con calculadora de estadía

Sitio de ejemplo tipo hostel/cabañas con **calculadora de estadía** (entrada, salida, precio por noche → total). Pensado para usar como deploy de demostración en el portfolio.

## Cómo correrlo

```bash
cd examples/sitio-hostel
npm install
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001).

## Qué incluye

- **Hero:** nombre del lugar y descripción.
- **Calculadora de estadía:** fechas de entrada/salida, precio por noche, cálculo de noches y total (formato AR).
- **CTA WhatsApp:** enlace con mensaje predefinido.

## Personalizar

- **Número de WhatsApp:** en `src/app/page.tsx` cambiá `WHATSAPP_NUMERO` y `WHATSAPP_MSG`.
- **Precio por defecto:** en `src/components/CalculadoraEstadia.tsx` modificá `PRECIO_POR_NOCHE_DEFAULT`.
- **Nombre / textos:** en `src/app/layout.tsx` (metadata) y `src/app/page.tsx` (títulos y copy).

## Deploy

Podés desplegar solo esta carpeta en Vercel (Root Directory: `examples/sitio-hostel`) o copiar el proyecto a un repo propio y desplegarlo. Luego agregá la URL en la sección Ejemplos del portfolio.
