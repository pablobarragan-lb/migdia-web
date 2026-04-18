# Registro de Decisiones — Migdia Web

## DEC-001: Plataforma de hosting
- **Fecha**: 2026-04-18
- **Decision**: Azure Static Web Apps (Free tier)
- **Alternativas**: Netlify, Vercel, GitHub Pages, Cloudflare Pages
- **Razon**: Patron ya validado en proyecto Fundacion (talentodivergente-web). Ecosistema Azure existente. Free tier suficiente para modo pruebas. CI/CD con GitHub Actions ya configurado.
- **Consecuencias**: Limitado a contenido estatico + funciones Azure opcionales. Sin SSR.

## DEC-002: Idiomas
- **Fecha**: 2026-04-18
- **Decision**: Bilingue ES/VA con switching client-side
- **Alternativas**: Solo espanol, trilingue (+ EN)
- **Razon**: El prototipo ya incluye contenido completo en ambos idiomas. La logia esta en la Comunitat Valenciana y el valenciano es relevante para la identidad.
- **Consecuencias**: content.js mantiene ambos idiomas. SEO necesita hreflang.

## DEC-003: Origen del diseno
- **Fecha**: 2026-04-18
- **Decision**: Usar prototipo de Claude Design como referencia pixel-perfect
- **Alternativas**: Disenar desde cero, usar template generico
- **Razon**: El handoff incluye componentes React completos, CSS con sistema de diseno (4 paletas, 2 variantes, 3 niveles simbolismo), contenido bilingue, y 20 assets curados.
- **Consecuencias**: Implementar fiel al prototipo. Decisiones de diseno ya tomadas.
