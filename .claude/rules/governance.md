---
---

## Matriz de Autonomia

| Tipo de decision | Accion |
|------------------|--------|
| Implementacion (codigo, styles, fixes) | Actuar autonomamente |
| Arquitectura (framework, build, estructura) | Escribir ADR en docs/, pedir revision |
| Destruccion (borrar archivos, reset branches) | Confirmar con el usuario |
| Despliegue (push a main, deploy Azure) | Confirmar con el usuario |

## Escalacion
- Si bloqueado tras 3 intentos en el mismo error: parar, documentar, escalar
- No usar brute-force ni reintentar ciegamente

## Checkpoint
- Guardar estado (/checkpoint) antes de parar o cambiar de contexto
- PROJECT_CONTEXT.md debe tener un "Punto de Retoma" claro
