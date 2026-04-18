# Plan de Trabajo — Migdia Web

## Objetivo
Lanzar la web institucional de la Respetable Logia Migdia n.o 102 en Azure Static Web Apps.
Fase inicial: modo pruebas (Free tier), validar contenido y diseno con la logia.

## Fases

### Fase 1: Setup e infraestructura (actual)
- [x] Estructura de proyecto con Project Forge
- [x] Configuracion Azure SWA (staticwebapp.config.json)
- [x] GitHub Actions workflow CI/CD
- [x] Reglas y skills de Claude Code
- [ ] Crear repositorio GitHub (pablobarragan-lb/migdia-web)
- [ ] Crear recurso Azure SWA (Free tier)
- [ ] Vincular GitHub repo con Azure SWA

### Fase 2: Implementacion del sitio
- [ ] Decidir build system (estatico puro vs Vite+React)
- [ ] Copiar/adaptar componentes del prototipo a src/
- [ ] Optimizar imagenes (WebP/AVIF, lazy loading)
- [ ] Implementar formulario de contacto (backend)
- [ ] SEO: meta tags, sitemap.xml, robots.txt, structured data
- [ ] Accesibilidad: ARIA labels, contraste, navegacion teclado
- [ ] Testing cross-browser y responsive

### Fase 3: Contenido y revision
- [ ] Revision de contenido bilingue (ES/VA) con la logia
- [ ] Verificar datos historicos y eventos
- [ ] Revision legal (aviso legal, cookies si aplica)
- [ ] Validar paleta/variante preferida por la logia

### Fase 4: Lanzamiento
- [ ] Configurar dominio personalizado (si se decide)
- [ ] Activar analytics (evaluar GA4 o alternativa)
- [ ] Deploy final a produccion
- [ ] Comunicar lanzamiento

## Timeline estimado
- Fase 1: 2026-04-18 (hoy)
- Fase 2: 1-2 semanas
- Fase 3: 1 semana (depende de feedback)
- Fase 4: cuando este aprobado
