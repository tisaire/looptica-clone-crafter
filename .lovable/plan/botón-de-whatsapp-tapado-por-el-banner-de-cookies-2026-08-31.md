# Botón de WhatsApp tapado por el banner de cookies

## Diagnóstico (verificado)
- `src/components/ui/FloatingWhatsApp.tsx` usa `fixed bottom-6 right-6 z-50`.
- `src/components/CookieConsent.tsx` usa `fixed bottom-0 left-0 right-0 z-50`.
Al tener el mismo `z-50`, gana el que se pinta después en el DOM (el banner), y además el banner ocupa toda la franja inferior donde está el botón.

## Solución
1. El banner de cookies pasa a `z-[60]` (siempre por encima del resto de la página).
2. El botón de WhatsApp pasa a `z-[70]` para no quedar nunca oculto.
3. Mientras el banner esté visible, el botón sube automáticamente (`bottom-40` en móvil / `bottom-28` en escritorio) y vuelve a `bottom-6` con una transición suave al aceptar o rechazar cookies.

## Detalle técnico
Para que el botón sepa si el banner está visible, `CookieConsent` publicará su estado mediante un pequeño evento global (`cookie-consent-change`) además de leer el valor inicial de `localStorage`; `FloatingWhatsApp` se suscribe a ese evento y ajusta su clase `bottom-*`. Sin librerías nuevas ni cambios de lógica de consentimiento.
