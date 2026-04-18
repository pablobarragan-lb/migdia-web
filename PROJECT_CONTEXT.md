# Contexto del Proyecto — Migdia Web

## Estado Actual
- Fase: **Inicializacion / Setup infraestructura**
- Sprint: —
- Ultimo checkpoint: 2026-04-18

## Decisiones Tomadas
| Fecha | Decision | Razon | Impacto |
|-------|----------|-------|---------|
| 2026-04-18 | Proyecto creado con Project Forge | Estandarizacion | Base |
| 2026-04-18 | Azure Static Web Apps (Free tier) | Patron validado en Fundacion, coste cero | Despliegue |
| 2026-04-18 | GitHub Actions para CI/CD | Mismo patron que talentodivergente-web | Automatizacion |
| 2026-04-18 | Prototipo de Claude Design como referencia | Handoff completo con componentes y contenido bilingue | Diseno |

## Arquitectura
- **Frontend**: Web estatica (HTML/CSS/JS) con componentes React
- **Hosting**: Azure Static Web Apps (Free tier)
- **CI/CD**: GitHub Actions -> Azure SWA auto-deploy en push a main
- **Preview**: Entorno preview automatico en PRs
- **Contenido**: Bilingue ES/VA, definido en content.js
- **Diseno**: 4 paletas x 2 variantes x 3 niveles simbolismo = 24 temas

### Pendiente de decidir
- Build system: Babel standalone (prototipo) vs Vite (produccion)
- Dominio personalizado
- Backend para formulario de contacto (actualmente stub client-side)
- Analytics (GA4 o alternativa)

## Dependencias Externas
| Sistema | Estado | Notas |
|---------|--------|-------|
| Azure SWA | Pendiente crear recurso | Free tier, modo pruebas |
| GitHub repo | Pendiente crear | pablobarragan-lb/migdia-web (propuesto) |
| Google Fonts | OK | CDN externo, CSP configurado |
| Formulario contacto | Stub | Necesita backend (Google Apps Script o similar) |

## Recursos disponibles
- `Migdia2026-handoff/` — Prototipo completo de Claude Design (React/JSX/CSS)
- `recursos/` — 46 items: imagenes masonicas, PDFs historicos, iconografia
- Patron de referencia: `Fundacion/Talento Divergente Web/` (Azure SWA funcional)

## Punto de Retoma
> Proyecto recien inicializado. Estructura de directorios y configuracion base creadas.
> Siguiente paso: decidir si implementar como site estatico puro o con build system (Vite),
> copiar assets del prototipo a src/, adaptar el codigo para produccion, crear recurso
> Azure SWA y repositorio GitHub.

## Contexto para Sub-agentes
Si este proyecto se divide en tareas paralelas, cada agente debe leer
este archivo COMPLETO antes de empezar. Contiene las decisiones y el
estado que evitan conflictos y retrabajo.
