---
name: status
description: >
  Muestra estado completo del proyecto: fase, tareas recientes, git y punto de retoma.
allowed-tools: Read, Bash(git *), Grep
---

Estado completo de Migdia Web.

Recopilar de todas las fuentes:
1. PROJECT_CONTEXT.md -> fase, ultimo checkpoint, punto de retoma
2. TASK_LOG.md -> ultimas 5 tareas, tiempo total registrado
3. Git (si hay repo) -> branch, cambios sin commit, ultimo commit
4. Filesystem -> archivos modificados en ultimas 24h

Formato:

STATUS — Migdia Web — {fecha}
Fase: {fase}
Ultimo checkpoint: {fecha}

Ultimas tareas:
  - {tarea 1} ({tiempo})
  ...

Tiempo total registrado: {suma}

Git:
  Branch: {branch}
  Ultimo commit: {mensaje}
  Cambios sin commit: {N archivos}

Alertas:
  - {bloqueados, sin commit, pendientes}

Punto de retoma:
  {texto de PROJECT_CONTEXT.md}
