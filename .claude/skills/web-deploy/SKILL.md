---
name: web-deploy
description: >
  Despliega la web a Azure SWA via git push a GitHub. Verifica estado antes de push.
allowed-tools: Read, Bash(git *), Grep
---

Desplegar Migdia Web a Azure Static Web Apps.

### Pre-vuelo
1. Verificar que estamos en branch main (o crear PR si estamos en otra branch)
2. git status — no debe haber cambios sin commit
3. Verificar staticwebapp.config.json existe y es JSON valido
4. Verificar que src/ contiene al menos index.html
5. Verificar .gitignore excluye recursos/ y secrets

### Deploy
1. git push origin main
2. Informar que GitHub Actions desplegara automaticamente
3. Proporcionar URL para verificar el estado del workflow

### Post-deploy
1. Recordar verificar el sitio en el navegador
2. Comprobar que headers de seguridad estan presentes (CSP, HSTS, etc.)
