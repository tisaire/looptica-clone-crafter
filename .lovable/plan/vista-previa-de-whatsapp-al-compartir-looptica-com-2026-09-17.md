# Vista previa de WhatsApp al compartir looptica.com

## Diagnóstico (verificado)
- WhatsApp (y otros crawlers sociales) **no ejecutan JavaScript**: solo leen el HTML estático de `index.html`.
- En `index.html` hay `og:site_name`, `og:type` y `og:image`, pero **faltan `og:title` y `og:description`** estáticos (líneas 92-95).
- Los og:title/og:description por ruta los inyecta `react-helmet-async` (p. ej. `src/pages/Index.tsx` líneas 215-216), invisibles para WhatsApp.
- Además, el comentario HTML de la línea 11 ("per-route title/meta description are injected by react-helmet-async") es el texto que WhatsApp acaba mostrando como descripción.

## Cambios
1. Añadir en `index.html` un `og:title` y `og:description` estáticos de nivel de marca (fallback para crawlers), en catalán/castellano neutro de marca, p. ej.:
   - og:title: "Looptica · Òptica i Audiologia a Poblenou, Barcelona"
   - og:description: descripción breve del centro (óptica, audiología, lents de contacte, Orto-K, visió infantil a Poblenou).
2. Eliminar/reescribir el comentario HTML de la línea 11 para que no contenga texto que un crawler pueda usar como descripción.
3. Mantener intacto el sistema actual: las rutas siguen sobrescribiendo title/description con react-helmet-async para Google y navegadores; los valores estáticos solo actúan como fallback para crawlers sin JS.

## Verificación
- `bun run build` limpio.
- Tras publicar, validar con un depurador de Open Graph (p. ej. compartir de nuevo el enlace en WhatsApp; puede requerir esperar a que WhatsApp refresque su caché).

## Nota
La caché de vista previa de WhatsApp puede tardar en refrescarse; el cambio se verá tras la publicación y el refresco de caché de WhatsApp.
