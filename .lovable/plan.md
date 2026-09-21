# Evento de reserva que se pierde (revisio-gratuita y toda la web)

## Diagnóstico (verificado en el código)

- El botón de reserva (`GoogleCalendarButton.tsx`) registra el clic con `window.gtag?.('event', 'demana_cita_click', ...)`.
- En `index.html`, `window.gtag` solo se crea **después** de que el script externo de Google (`gtag.js`) termine de cargar (`script.onload`).
- Si el visitante hace clic en "Reserva" antes de que ese script cargue —o si un bloqueador de anuncios lo impide— el evento se descarta silenciosamente (el `?.` no da error).
- En una landing que llega desde WhatsApp (móvil, conexión variable), este caso es bastante probable. Además afecta a todos los botones de reserva de la web, no solo a esta página.

## Solución

En `index.html`, crear `window.dataLayer` y la función `gtag` **inmediatamente** (patrón estándar de Google), antes de cargar el script externo:

```text
ahora:   cargar script → onload → crear dataLayer y gtag → los clics previos se pierden
después: crear dataLayer y gtag ya → cargar script → gtag.js procesa la cola acumulada
```

Con esto, los clics se guardan en cola aunque el script aún no haya cargado y se envían en cuanto está disponible. Si un bloqueador impide cargar Google Analytics por completo, no hay forma de registrar ese usuario (limitación de cualquier web con GA).

## Cambios

- `index.html`: mover la creación de `window.dataLayer` / `window.gtag` / `gtag('js')` fuera del `onload`; el `onload` solo mantiene `gtag('config', 'G-H170LQBT19')`. El resto de la carga diferida se mantiene igual.
- `src/pages/Index.tsx`: versión → `v2.9.1-fix-gtag-queue`.

No se toca `GoogleCalendarButton.tsx` ni ninguna página.

## Comprobaciones

Build limpio y verificación en navegador de `/ca/revisio-gratuita`: al hacer clic en "Reserva la teva cita", `window.dataLayer` contiene el evento `demana_cita_click` con el asunto de la campaña, incluso bloqueando el dominio googletagmanager.com (el evento queda en cola en lugar de perderse).
