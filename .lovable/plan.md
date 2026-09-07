# Plan: limpiar el analytics de tráfico basura

## Situación actual

- El proyecto usa **Google Analytics 4** (gtag, ID `G-H170LQBT19`) cargado desde `index.html` y un `PageTracker` en `src/App.tsx` que envía `page_view` en cada cambio de ruta.
- El panel de analytics que estás viendo es el **analytics nativo de Lovable**, no GA4 directamente.
- Los datos históricos del panel nativo **no se pueden borrar desde el código de la app**; eso requiere intervención de la plataforma.

## Qué se puede hacer desde el frontend

1. **Dejar de enviar eventos a GA4** para sesiones que encajen con el patrón de basura (bots, proxies, datacenters, tráfico directo desde países no objetivo con comportamiento de bot).
2. **Añadir una capa de filtrado** antes de que `gtag('event', 'page_view')` se dispare.
3. **Documentar las señales detectadas** para que puedas pedir a soporte de Lovable que limpie los datos históricos del panel nativo.

## Implementación propuesta

### 1. Crear helper `src/lib/analyticsFilter.ts`

Detectará sesiones sospechosas y devolverá `false` si no deben trackearse:

- `navigator.webdriver === true` (bot automatizado).
- País no objetivo + referrer vacío + duración de sesión anómala (señales de proxy/bot).
- User-Agent con patrones conocidos de bots/crawlers.
- Opcional: lista de IPs/prefijos de datacenters conocidos (solo si se expone IP; en frontend es limitado).

### 2. Modificar `src/App.tsx` (`PageTracker`)

Antes de llamar a `gtag('event', 'page_view')`, consultar el helper. Si la sesión es sospechosa, no enviar el evento.

### 3. Actualizar carga de GA en `index.html`

Añadir `send_page_view: false` en la configuración inicial para evitar dobles pageviews, y dejar que `PageTracker` los envíe de forma controlada.

### 4. No tocar datos históricos

No se eliminarán datos del panel nativo. Se documentará en el plan cómo pedir esa limpieza a soporte.

## Resultado esperado

- Futuras visitas de bots/proxies no contaminarán GA4.
- El panel nativo de Lovable seguirá recibiendo todo el tráfico hasta que soporte lo limpie; al menos GA4 quedará filtrado.
- Se entregará un resumen de las señales detectadas para facilitar la petición de limpieza histórica.

## Nota importante

Si lo que quieres es **limpiar el panel de analytics de Lovable**, la única vía real es contactar con soporte de Lovable con fechas y evidencias (países, fuente Direct, IPs si las tienes). Este plan solo puede filtrar el tráfico futuro que llega a GA4.
