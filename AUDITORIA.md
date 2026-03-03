# Auditoría integral – Portfolio Agustín Ader

**Fecha:** Marzo 2025  
**Alcance:** Diseño, seguridad, SEO, accesibilidad, rendimiento y buenas prácticas.

---

## 1. Diseño y UX

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Paleta coherente con logo | ✅ | Variables CSS slate/azul oscuro, contraste WCAG |
| Tipografía moderna (Plus Jakarta Sans) | ✅ | Una sola familia, jerarquía clara |
| Espaciado consistente | ✅ | Escala en secciones y componentes |
| Responsive | ✅ | Breakpoints sm/md/lg, touch targets ≥44px |
| Enlaces con marca (subrayado hover) | ✅ | Clase `.link-brand` reutilizable |
| Skip link "Saltar al contenido" | ✅ | layout.tsx, enfocado para teclado |
| Footer con logo y redes | ✅ | Enlaces con `aria-label` |

**Recomendaciones:** Mantener contraste de texto (--link-text, --foreground) en futuras actualizaciones. Revisar en dispositivos reales el menú móvil.

---

## 2. Seguridad

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Cabeceras de seguridad (middleware) | ✅ | X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Formulario: validación servidor | ✅ | Campos requeridos, formato email, escape HTML |
| Formulario: límites de longitud | ✅ | maxLength en inputs; recorte en server action (nombre 120, email 254, tel 30, mensaje 2000) |
| Sin datos sensibles en cliente | ✅ | RESEND_API_KEY solo en servidor (Server Action) |
| Enlaces externos | ✅ | `rel="noopener noreferrer"` en target="_blank" |
| Escape HTML en email (XSS) | ✅ | `escapeHtml()` en send-budget-request.ts |

**Recomendaciones:**
- En producción con mucho tráfico, valorar rate limiting del formulario (ej. por IP con Vercel KV o Upstash).
- Verificar dominio en Resend y usar remitente propio en lugar de `onboarding@resend.dev`.
- En Next.js 16 la convención "middleware" está deprecada en favor de "proxy"; revisar documentación oficial si se actualiza la versión.

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

**Recomendaciones:**
- Añadir más páginas (ej. servicios, contacto) cuando existan y actualizar sitemap.
- Para redes sociales, usar una imagen OG dedicada (1200×630) si se quiere mejor preview.

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

## 5. Rendimiento y técnico

| Aspecto | Estado | Notas |
|--------|--------|--------|
| Next.js Image | ✅ | Logo y proyectos con sizes y priority en logo |
| Fuentes (next/font) | ✅ | Plus Jakarta Sans con variable, subset latin |
| React Compiler | ✅ | next.config reactCompiler: true |
| Sin JS innecesario en crítico | ✅ | Server Components donde aplica; client solo donde hace falta |
| Animaciones con IntersectionObserver | ✅ | Reveal suave, desconexión al hacer visible |

**Recomendaciones:**
- Comprimir imágenes de proyectos (WebP/AVIF) y usar sizes adecuados (ya definidos).
- En producción, comprobar Core Web Vitals (LCP, FID, CLS) en Search Console.

---

## 6. Checklist pre-lanzamiento

- [ ] Variable de entorno `RESEND_API_KEY` en el entorno de producción.
- [ ] Dominio verificado en Resend y remitente actualizado en `send-budget-request.ts`.
- [ ] Probar envío real del formulario desde producción.
- [ ] Comprobar que `/sitemap.xml` y `/robots.txt` responden correctamente.
- [ ] Revisar que las cabeceras de seguridad se ven en las respuestas (pestaña Network).
- [ ] Ejecutar Lighthouse (Performance, Accessibility, Best Practices, SEO) y corregir ítems críticos.

---

## 7. Resumen de archivos tocados en esta auditoría

| Archivo | Cambio |
|---------|--------|
| `src/middleware.ts` | Nuevo: cabeceras de seguridad |
| `src/app/sitemap.ts` | Nuevo: sitemap para SEO |
| `src/app/robots.ts` | Nuevo: robots.txt dinámico |
| `src/app/actions/send-budget-request.ts` | Límites de longitud y recorte de datos |
| `src/components/BudgetForm.tsx` | maxLength en todos los campos |
| `src/app/layout.tsx` | metadataBase dentro de metadata; viewport con themeColor |

---

*Documento generado como parte de la auditoría del portfolio. Revisar y actualizar con cada cambio relevante en diseño, seguridad o SEO.*
