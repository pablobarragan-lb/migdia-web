---
name: checkpoint
description: >
  Genera snapshot completo del proyecto: actualiza contexto, revisa pendientes y crea commit.
allowed-tools: Read, Edit, Bash(git *)
argument-hint: "[descripcion breve del checkpoint]"
---

Generar snapshot completo de Migdia Web.

Ejecutar en orden:

### 1. Actualizar PROJECT_CONTEXT.md
- Leer PROJECT_CONTEXT.md actual
- Analizar cambios desde ultimo update (git diff, TASK_LOG.md, archivos recientes)
- Actualizar: Estado Actual, Decisiones, Arquitectura, Dependencias, Punto de Retoma
- Guardar con timestamp en "Ultimo checkpoint"

### 2. Revisar TASK_LOG.md
- Listar tareas pendientes
- Contar tareas completadas desde ultimo checkpoint

### 3. Git (si hay repo)
- git add -A
- git commit -m "checkpoint: {descripcion breve}"

### 4. Mostrar reporte

CHECKPOINT — {fecha HH:MM}
Proyecto: Migdia Web
Fase: {fase}
Tareas desde ultimo checkpoint: {N}
Archivos modificados: {lista breve}

Punto de retoma:
{texto claro para continuar}

Checkpoint guardado
