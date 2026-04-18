# Migdia — Web de la Respetable Logia Migdia n.o 102

> Hereda de CLAUDE.md global (~/.claude/CLAUDE.md). No repetir lo que ya esta ahi.

## Descripcion

Web institucional bilingue (ES/VA) para la Respetable Logia Migdia n.o 102, Castellon de la Plana.
Despliegue en Azure Static Web Apps (modo pruebas, tier Free).

## Stack

- HTML5 / CSS3 / JavaScript (vanilla)
- React 18 (componentes JSX, Babel standalone en prototipo — evaluar build con Vite para produccion)
- Azure Static Web Apps (Free tier)
- GitHub Actions (CI/CD)
- Google Fonts (Cormorant Garamond, Inter, Fraunces)

## Origen del diseno

El prototipo viene de Claude Design (handoff en `Migdia2026-handoff/migdia2026/project/`).
Los recursos en bruto (imagenes, PDFs historicos) estan en `recursos/`.
El entry point del prototipo es `Logia Migdia.html` — leerlo completo antes de implementar.

## Estructura del proyecto

```
Migdia/
+-- CLAUDE.md               <- Este archivo
+-- PROJECT_CONTEXT.md       <- Estado vivo del proyecto
+-- TASK_LOG.md              <- Registro de tareas
+-- src/                     <- Codigo fuente de produccion
+-- docs/                    <- Documentacion (plan, decisions, handover)
+-- config/                  <- Configuracion (NO secrets)
+-- logs/                    <- Logs de sesion
+-- recursos/                <- Recursos en bruto (imagenes, PDFs)
+-- Migdia2026-handoff/      <- Prototipo original de Claude Design
+-- staticwebapp.config.json <- Config Azure SWA
+-- .github/workflows/       <- CI/CD
+-- .claude/                 <- Rules, skills, settings
```

## Datos de la organizacion

- **Nombre**: Respetable Logia Migdia n.o 102
- **Ubicacion**: Castellon de la Plana (39d59' N, 0d02' O)
- **Fundacion**: 2015 (evolucion del Triangulo Castalia, 2007)
- **Columnas levantadas**: 5 de marzo de 2022
- **Contacto**: logiamigdia@gmail.com
- **Obediencia**: Masoneria Regular (Espana)

## Secciones de la web

1. Hero (inicio, mision, CTAs)
2. Que es la Masoneria (3 pilares: Libertad, Igualdad, Fraternidad)
3. Historia (timeline 2007-2022-hoy)
4. Principios
5. Actualidad (eventos proximos)
6. Biblioteca (6 lecturas curadas)
7. Preguntas frecuentes (FAQ accordion)
8. Contacto (formulario + email)
9. Footer (legal, branding)

## Idiomas

- Espanol (es) — principal
- Valenciano (va) — secundario
- Contenido bilingue definido en `content.js` (window.SITE_CONTENT)

## Sistema de diseno

- 4 paletas de color: ivory (default), dark, sage, ink
- 2 variantes tipograficas: classic (Cormorant Garamond), modern (Fraunces)
- 3 niveles de simbolismo: minimal, discrete (default), present
- Total: 24 combinaciones visuales sin cambiar codigo

## Despliegue

- **Plataforma**: Azure Static Web Apps (Free tier)
- **Repositorio**: GitHub (pendiente de crear)
- **CI/CD**: GitHub Actions -> Azure SWA (push a main = deploy)
- **Preview**: PRs generan entorno preview automatico
- **Dominio**: pendiente de configurar

## Protocolo de Trabajo

- Registrar tareas completadas en TASK_LOG.md
- Guardar estado antes de parar: /checkpoint
- Ver estado del proyecto: /status
- Commits en espanol, formato: [AREA] Descripcion breve
- Areas de commit: WEB, INFRA, DOCS, ASSETS, DESIGN, CONFIG

## Gobernanza

- Decisiones de implementacion (codigo, styles, fixes): actuar autonomamente
- Decisiones de arquitectura (framework, build system, estructura nueva): escribir ADR en docs/, pedir revision
- Si bloqueado tras 3 intentos: parar, documentar el bloqueo, escalar
- Agrupar micro-tareas (<15 min cada una) en un solo entry de TASK_LOG
