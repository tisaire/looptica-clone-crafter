# Landing de reactivación: revisión visual gratuita

Nueva página dentro de la web actual de Looptica, en los 4 idiomas, pensada para una campaña directa por WhatsApp. Menú, selector de idioma, botón de reserva, WhatsApp flotante y bloque de tienda: los actuales, sin cambios.

## Rutas

La web actual genera las rutas como `/:idioma/ruta`, con el mismo texto de ruta en los cuatro idiomas (así funcionan ya las páginas de visión infantil y de lentillas multifocales). El selector de idioma solo cambia el prefijo del idioma, así que si cada idioma tuviera un texto de ruta distinto, cambiar de idioma llevaría al usuario a una página inexistente.

Para respetar esa arquitectura y a la vez poder usar los enlaces que quieres en la campaña:

- Página real (canónica): `/ca/revisio-gratuita`, `/es/revisio-gratuita`, `/en/revisio-gratuita`, `/de/revisio-gratuita`.
- Enlaces de campaña que redirigen a la página en su idioma:
  - `/es/revision-gratuita` → `/es/revisio-gratuita`
  - `/en/free-eye-exam` → `/en/revisio-gratuita`
  - `/de/kostenloser-sehtest` → `/de/revisio-gratuita`

Así puedes compartir por WhatsApp el enlace en el idioma de cada cliente y el selector de idioma sigue funcionando correctamente sobre la misma landing.

## Contenido

Los textos son exactamente los que has facilitado, en ca / es / en / de:

1. Hero: antetítulo, H1, texto de invitación, "REVISIÓ VISUAL GRATUÏTA" destacado, botón de reserva y la línea "sense cost i sense compromís". El primer botón queda visible sin apenas hacer scroll en móvil.
2. Beneficios: tres tarjetas (revisión completa, sin coste, sin compromiso).
3. Contexto: "Han passat més de 2 anys?" con su texto.
4. Llamada final: texto + botón de reserva grande.
5. Cierre personal: "T'esperem a Looptica. Irene i Elena" con las fotos reales de Irene y Elena que ya están en el proyecto.
6. Datos del centro: se reutiliza el bloque existente de ubicación (dirección, teléfono, WhatsApp, horarios y mapa), sin duplicar nada.

Tono cercano y profesional, sin lenguaje promocional (nada de oferta, promoción, última oportunidad).

## Reserva y analítica

Todos los botones usan el botón de reserva existente de Looptica (mismo enlace de Google Calendar, mismo evento de analítica), con el texto del idioma activo y un asunto propio de esta campaña para poder distinguir estos clics. Las visitas ya se registran con la analítica actual, incluyendo el idioma; los parámetros UTM del enlace de WhatsApp se conservan en la URL y llegan a la analítica sin añadir nada nuevo.

## Buscadores

`noindex, follow`, canonical propia de cada idioma, hreflang recíproco entre las cuatro versiones con x-default en catalán, y **no** se añade al sitemap.

## Detalles técnicos

- Nuevo archivo `src/pages/campaigns/RevisioGratuita.tsx`: página propia (no `ServiceLayout`, que impone hero con foto, breadcrumbs y sello "Revisat per Elena"), pero reutilizando `Navbar`, `Footer` (ya viene del layout general), `StoreLocation`, `GoogleCalendarButton`, `ScrollReveal`, `FloatingWhatsApp` y `useLanguage`.
- Textos en un objeto `copy` con claves `ca | es | en | de` (las cuatro obligatorias), como en el resto de páginas nuevas.
- `Helmet`: title y description por idioma, `robots: noindex, follow`, canonical y los cuatro `hreflang` + `x-default` apuntando a `/{lang}/revisio-gratuita`.
- `src/App.tsx`: ruta `revisio-gratuita` con `lazyWithRetry`, más tres rutas alias (`revision-gratuita`, `free-eye-exam`, `kostenloser-sehtest`) con `Navigate replace` a la canónica del mismo idioma.
- Imágenes: `/images/irene.jpg` y `/images/_DSC4776.jpg` (Elena) para el bloque de cierre.
- Versión en `src/pages/Index.tsx` → `v2.9.0-revisio-gratuita`.
- No se toca ningún otro archivo ni el sitemap.

## Comprobaciones antes de terminar

Build limpio y revisión en navegador (móvil y escritorio) de las cuatro versiones: menú y menú móvil, selector de idioma manteniendo la landing, botones de reserva abriendo el sistema actual, ausencia de textos sin traducir y `noindex` presente.
