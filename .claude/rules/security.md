---
---

## Security Protocol — Web

### Secrets Management
- NUNCA hardcodear tokens, API keys, passwords o connection strings en codigo
- Usar variables de entorno o config externos
- Verificar .gitignore antes del primer commit
- Si se detecta un secret en codigo, eliminarlo Y rotarlo inmediatamente

### Content Security Policy
- CSP definida en staticwebapp.config.json
- Cualquier nuevo origen externo (CDN, API, analytics) requiere actualizar CSP
- No usar 'unsafe-eval' — si React lo necesita, evaluar build system

### Checklist Pre-Deploy
- [ ] No hay secrets en el codigo fuente
- [ ] .gitignore cubre todos los archivos sensibles
- [ ] CSP esta actualizada con todos los origenes necesarios
- [ ] Headers de seguridad verificados (X-Frame-Options, HSTS, etc.)
- [ ] No hay console.log con datos sensibles
