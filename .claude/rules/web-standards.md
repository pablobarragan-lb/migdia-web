---
paths:
  - "src/**"
  - "*.html"
  - "*.css"
  - "*.js"
  - "*.jsx"
---

## Estandares Web — Migdia

### HTML
- Semantico: usar section, article, nav, header, footer, main
- Accesibilidad: alt en imagenes, aria-labels en interactivos, roles donde aplique
- Meta tags: viewport, description, charset, lang
- Clean URLs: sin extensiones .html (gestionado por Azure SWA routing)

### CSS
- Variables CSS para colores, tipografia y spacing (ya definidas en styles.css)
- Mobile-first responsive design
- Breakpoints: 768px (mobile), 1024px (tablet)
- No usar !important salvo override de terceros

### JavaScript
- Vanilla JS o React segun componente
- No jQuery ni frameworks adicionales sin ADR
- Event listeners pasivos donde sea posible
- Lazy loading para imagenes below the fold

### Imagenes
- Preferir WebP/AVIF sobre JPG/PNG para produccion
- Incluir width/height para evitar CLS
- Alt text descriptivo en ambos idiomas

### SEO
- Canonical tags en todas las paginas
- sitemap.xml y robots.txt
- Structured data (Organization) en JSON-LD
- Open Graph y Twitter cards meta tags

### i18n
- Contenido bilingue ES/VA via content.js
- Atributo lang en <html> actualizado al cambiar idioma
- hreflang tags para SEO multiidioma
