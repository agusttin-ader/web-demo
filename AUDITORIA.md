# Auditoría integral – Portfolio Agustín Ader

**Fecha:** Marzo 2025 (actualizado)  
**Alcance:** Diseño premium, seguridad, optimización, SEO, accesibilidad, responsive y buenas prácticas para promoción en redes y captación de clientes.

---

## 1. Diseño y UX (premium e innovador)

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Paleta coherente con logo | ✅ | Variables CSS slate/azul oscuro, contraste WCAG |
| Tipografía moderna (Plus Jakarta Sans) | ✅ | Una sola familia, jerarquía clara |
| Espaciado consistente | ✅ | Escala en secciones y componentes |
| Responsive | ✅ | Breakpoints sm/md/lg, touch targets ≥44px, safe-area |
| Enlaces con marca (subrayado hover) | ✅ | Clase `.link-brand` reutilizable |
| Skip link "Saltar al contenido" | ✅ | layout.tsx, enfocado para teclado |
| Footer con logo y redes | ✅ | Enlaces con `aria-label` |
| Hero con sensación premium | ✅ | Fondo sutil en gradiente, buen aire |
| Cards con microinteracción | ✅ | Hover suave (sombra + escala ligera) |
| Modo oscuro con contraste | ✅ | Variables y botón primario legible |

**Recomendaciones:** Mantener contraste de texto en futuras actualizaciones. Revisar en dispositivos reales el menú móvil. Para redes: usar imagen OG 1200×630 y copy corto que destaque “desarrollo web para negocios” y “turismo / hostels”.

---

## 2. Seguridad

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Cabeceras de seguridad (proxy) | ✅ | X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy (proxy.ts) |
| Formulario: validación servidor | ✅ | Campos requeridos, formato email, escape HTML |
| Formulario: límites de longitud | ✅ | maxLength en inputs; recorte en server action (nombre 120, email 254, tel 30, mensaje 2000) |
| Sin datos sensibles en cliente | ✅ | RESEND_API_KEY solo en servidor (Server Action) |
| Enlaces externos | ✅ | `rel="noopener noreferrer"` en target="_blank" |
| Escape HTML en email (XSS) | ✅ | `escapeHtml()` en send-budget-request.ts |

**Recomendaciones:**
- En producción con mucho tráfico, valorar rate limiting del formulario (ej. por IP con Vercel KV o Upstash).
- Remitente Resend: implementado vía `RESEND_FROM_EMAIL` en `.env.local`. Verificar dominio en Resend y definir esa variable con tu remitente (ej. `Portfolio <noreply@tudominio.com>`).
- **CSP:** Implementado en modo report-only en `proxy.ts` (Content-Security-Policy-Report-Only). Incluye `unsafe-inline` en script para el tema en `<head>`. Para activar CSP en modo bloqueo, revisar reportes y ajustar con nonce/hash si se quita unsafe-inline.

---

## 3. SEO

| Aspecto | Estado | Notas |
|--------|--------|--------|
| title y description | ✅ | layout.tsx, orientados a negocio y ubicación |
| keywords | ✅ | Incluidos en metadata |
| metadataBase | ✅ | URL canónica para OG/Twitter |
| Open Graph y Twitter Card | ✅ | Imagen, título, descripción, locale es_AR |
| Canonical | ✅ | alternates.canonical |
| robots (index, follow) | ✅ | robots: { index: true, follow: true } |
| Sitemap | ✅ | app/sitemap.ts, prioridad y changeFrequency |
| robots.txt | ✅ | app/robots.ts, allow /, disallow /api/, sitemap URL |
| Schema.org (JSON-LD) | ✅ | Person, WebSite, ProfessionalService en layout |
| Texto alternativo en imágenes | ✅ | alt en logo y proyectos |
| Contenido para crawlers (sr-only) | ✅ | Párrafo resumen en page.tsx |

**Implementado:** Metadata apunta a la imagen OG existente (`/og-image.svg`) y al logo como respaldo. Si más adelante querés un PNG/JPEG 1200×630 para redes que prefieren raster, podés añadir `public/images/og-image.png` y actualizar la URL en `layout.tsx`.

**Recomendaciones:** Añadir más páginas (ej. servicios, contacto) cuando existan y actualizar sitemap.

---

## 4. Accesibilidad (a11y)

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Saltar al contenido | ✅ | Enfocado con estilos visibles |
| lang en html | ✅ | lang="es-AR" |
| Encabezados jerárquicos | ✅ | h1 → h2 → h3 sin saltos |
| Labels en formulario | ✅ | Todos los inputs con label asociado (htmlFor/id) |
| Mensajes de error/éxito | ✅ | role="alert" en BudgetForm |
| Focus visible | ✅ | focus-visible:ring en botones y enlaces |
| Contraste de color | ✅ | Texto oscuro sobre fondo claro |
| Enlaces e iconos | ✅ | aria-label en Instagram, WhatsApp, correo, menú |
| Reducción de movimiento | ✅ | @media (prefers-reduced-motion) en globals.css |

**Recomendaciones:** Revisar con axe DevTools o Lighthouse. Los testimonios podrían llevar un cite o atribución si se incorporan nombres.

---

## 5. Rendimiento y optimización

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Next.js Image | ✅ | Logo y proyectos con sizes y priority en logo |
| Fuentes (next/font) | ✅ | Plus Jakarta Sans con variable, subset latin |
| React Compiler | ✅ | next.config reactCompiler: true |
| Sin JS innecesario en crítico | ✅ | Server Components donde aplica; client solo donde hace falta |
| Animaciones con IntersectionObserver | ✅ | Reveal suave, desconexión al hacer visible |
| Imágenes de ejemplos | ✅ | unoptimized donde hace falta; object-position para recorte |
| Safe-area y viewport | ✅ | pt-[env(safe-area-inset-top)], padding-bottom con safe-area |

**Recomendaciones:**
- Comprimir imágenes de proyectos (WebP/AVIF) y usar sizes adecuados (ya definidos).
- En producción, comprobar Core Web Vitals (LCP, FID, CLS) en Search Console y PageSpeed Insights.
- Lazy load de secciones ya cubierto con reveal; imágenes below-the-fold cargan con lazy por defecto en Next/Image.

---

## 6. Diseño responsive (premium en todos los dispositivos)

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Móvil primero | ✅ | Padding y tipografía escalan desde 320px |
| Touch targets ≥44px | ✅ | Botones y enlaces del header/nav |
| Safe-area (notch/islas) | ✅ | Header con pt-[env(safe-area-inset-top)]; main con safe-area bottom |
| Contenedor máximo y padding | ✅ | max-w-6xl / max-w-5xl; px-4 sm:px-6 en secciones |
| Grids adaptativos | ✅ | 1 col móvil → 2/3 cols en sm/lg para cards |
| Imágenes responsive | ✅ | sizes en Image; object-cover y object-position donde aplica |
| Menú móvil accesible | ✅ | Botón con aria-expanded y aria-label; overlay con animación |

**Recomendaciones:** Probar en viewport 320px, 375px, 768px y 1280px. En redes, enlazar a la web con UTM (utm_source=instagram, etc.) para medir origen.

---

## 7. Checklist pre-lanzamiento

- [ ] Variable de entorno `RESEND_API_KEY` en el entorno de producción.
- [ ] Opcional: `RESEND_FROM_EMAIL` en producción una vez verificado el dominio en Resend (ver `.env.example`).
- [ ] Probar envío real del formulario desde producción.
- [ ] Comprobar que `/sitemap.xml` y `/robots.txt` responden correctamente.
- [ ] Revisar que las cabeceras de seguridad se ven en las respuestas (pestaña Network).
- [ ] Ejecutar Lighthouse (Performance, Accessibility, Best Practices, SEO) y corregir ítems críticos.

---

## 8. Resumen de archivos tocados en esta auditoría

| Archivo | Cambio |
|---------|--------|
| `src/app/sitemap.ts` | Nuevo: sitemap para SEO |
| `src/app/robots.ts` | Nuevo: robots.txt dinámico |
| `src/app/actions/send-budget-request.ts` | Límites de longitud, recorte, remitente vía RESEND_FROM_EMAIL |
| `src/components/BudgetForm.tsx` | maxLength en todos los campos |
| `src/app/layout.tsx` | metadataBase; viewport; OG image (/og-image.svg) |
| `src/proxy.ts` | Cabeceras de seguridad; CSP report-only |
| `.env.example` | RESEND_API_KEY, RESEND_FROM_EMAIL |

---

*Documento generado como parte de la auditoría del portfolio. Revisar y actualizar con cada cambio relevante en diseño, seguridad o SEO.*
