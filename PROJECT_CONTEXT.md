# Contexto del Proyecto — Migdia Web

## Estado Actual
- Fase: **v1 desplegada — modo pruebas**
- Sprint: —
- Ultimo checkpoint: 2026-04-18

## URLs
- **Preview**: https://thankful-sky-04ec15203.7.azurestaticapps.net
- **Repo**: https://github.com/pablobarragan-lb/migdia-web
- **Azure**: Resource group `migdia-rg`, SWA `migdia-web` (Free tier, West Europe)

## Decisiones Tomadas
| Fecha | Decision | Razon | Impacto |
|-------|----------|-------|---------|
| 2026-04-18 | Proyecto creado con Project Forge | Estandarizacion | Base |
| 2026-04-18 | Azure Static Web Apps (Free tier) | Patron validado en Fundacion, coste cero | Despliegue |
| 2026-04-18 | GitHub Actions para CI/CD | Mismo patron que talentodivergente-web | Automatizacion |
| 2026-04-18 | Prototipo de Claude Design como referencia | Handoff completo con componentes y contenido bilingue | Diseno |
| 2026-04-18 | Vite 6 + React 18 como build system | Rendimiento, HMR, tree-shaking, ecosystem | Stack |
| 2026-04-18 | Bilingue ES/CA (no VA) | Catalan normativo IEC en lugar de valenciano | i18n |
| 2026-04-18 | Build en disco local (C:\TMP\migdia-build) | Google Drive corrompe node_modules | Workflow |

## Arquitectura
- **Frontend**: Vite 6.3.2 + React 18.3.1 SPA
- **Hosting**: Azure Static Web Apps (Free tier, westeurope)
- **CI/CD**: GitHub Actions -> Azure SWA auto-deploy en push a main
- **Preview**: Entorno preview automatico en PRs
- **Contenido**: Bilingue ES/CA, definido en content.js
- **Diseno**: 4 paletas x 2 variantes x 3 niveles simbolismo = 24 temas

### Pendiente de decidir
- Dominio personalizado (logiamigdia.com referenciado en robots.txt)
- Backend para formulario de contacto (actualmente stub client-side)
- Analytics (GA4 o alternativa)

## Dependencias Externas
| Sistema | Estado | Notas |
|---------|--------|-------|
| Azure SWA | Desplegado | migdia-web, Free tier, westeurope |
| GitHub repo | Activo | pablobarragan-lb/migdia-web, CI/CD configurado |
| GitHub Secret | Configurado | AZURE_STATIC_WEB_APPS_API_TOKEN |
| Google Fonts | OK | CDN externo, CSP configurado |
| Formulario contacto | Stub | Necesita backend (Google Apps Script o similar) |

## Recursos disponibles
- `Migdia2026-handoff/` — Prototipo original de Claude Design (referencia)
- `recursos/` — 46 items: imagenes masonicas, PDFs historicos, iconografia
- Patron de referencia: `Fundacion/Talento Divergente Web/` (Azure SWA funcional)

## Punto de Retoma
> Web v1 desplegada y funcional en Azure SWA (modo pruebas, sin dominio).
> 8 secciones implementadas, contenido bilingue ES/CA, sistema de temas completo.
> Pendiente: dominio personalizado, backend formulario contacto, analytics, optimizacion imagenes.

## Contexto para Sub-agentes
Si este proyecto se divide en tareas paralelas, cada agente debe leer
este archivo COMPLETO antes de empezar. Contiene las decisiones y el
estado que evitan conflictos y retrabajo.
