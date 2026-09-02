# Nichos que Looptica no está cubriendo (datos Semrush, base ES)

## Situación actual

Semrush ve 151 keywords y ~88 visitas orgánicas/mes. Lo que funciona hoy:

| Keyword | Posición | Volumen |
|---|---|---|
| òptica poblenou | 5 | 210/mo |
| subvenciones audífonos cataluña | 8 | 110/mo |
| opticas poblenou | 3 | 50/mo |

Casi todo el tráfico viene de dos cosas: marca/geo ("óptica poblenou") y una única página temática que sí funciona (Subvenciones). El resto de páginas de servicio no captan casi nada: Orto-K está en posición 69-73, Lents de contacte en 37, Audiologia en 27.

Conclusión: el sitio está posicionado como "óptica de barrio", no como especialista en temas concretos. Los nichos que se está dejando son los temas donde la gente busca **información**, no una tienda.

## Nichos con demanda que hoy no se cubren

Ordenados por oportunidad real (volumen alto + dificultad baja):

| Nicho | Keyword principal | Volumen | Dificultad | Estado en la web |
|---|---|---|---|---|
| Lentillas progresivas | lentillas progresivas | 3.600/mo | 21 (fácil) | No existe página |
| Acúfenos / tinnitus | acufenos | 6.600/mo | 46 (media) | Página existe, sin contenido informativo |
| Precio de audífonos | precio audifonos | 1.300/mo | 29 (fácil) | No existe |
| Terapia visual | terapia visual | 1.000/mo | 16 (fácil) | No se ofrece en la web |
| Ojo seco | ojo seco tratamiento | 590/mo | 39 (media) | No existe |
| Lentillas para astigmatismo | lentillas para astigmatismo | 590/mo | 13 (muy fácil) | No existe |
| Ortoqueratología (genérico) | ortoqueratologia | 390/mo | 29 (fácil) | Página Orto-K existe pero pos. 69 |
| Centro auditivo Barcelona | centro auditivo barcelona | 320/mo | 24 (fácil) | Página existe, pos. 27 |
| Audífonos recargables | audifonos recargables | 320/mo | 14 (muy fácil) | No existe |
| Audífonos Barcelona | audifonos barcelona | 260/mo | 28 (fácil) | Pos. baja |
| Control de miopía infantil | control de miopia | 140/mo | 18 (fácil) | No existe |
| Tapones a medida para dormir | tapones para dormir a medida | 90/mo | 6 (muy fácil) | Página Ear Protection sin enfoque |

Fuente: Semrush, base de datos España.

## Los tres huecos de fondo

1. **Contenido informativo cero.** Todas las páginas son "servicio + demana cita". Las búsquedas de 1.000-6.000/mo son preguntas ("¿cuánto cuesta un audífono?", "¿qué son los acúfenos?"). Sin páginas que respondan, no hay entrada de tráfico nuevo.
2. **El nicho infantil no existe.** Control de miopía, terapia visual y óptica infantil son el segmento de mayor crecimiento en el sector y la web no lo menciona.
3. **Audiología está infra-explotada.** Es donde hay más volumen y más valor comercial (CPC 3-4,7 $), y la única página de audiología que rankea lo hace en posición 27.

## Plan propuesto (fase 1)

Cuatro páginas nuevas, elegidas por relación volumen/dificultad y por encaje real con lo que Looptica ya hace:

1. `/:lang/services/lentilles-progressives` — Lentillas progresivas (3.600/mo, dif. 21)
2. `/:lang/services/preu-audiofons` — Guía de precios de audífonos, con tabla de gamas y enlace a Subvenciones (1.300/mo, dif. 29)
3. `/:lang/services/control-miopia` — Control de miopía infantil, enlazada con Orto-K (140/mo, dif. 18, nicho estratégico)
4. Reescritura de `TinnitusTreatment.tsx` con contenido informativo real sobre acúfenos (6.600/mo)

Cada página: contenido útil y verificable (sin inventar precios, resultados ni testimonios), en los 4 idiomas, con Helmet + canonical + hreflang, breadcrumbs, sello "Revisado por Elena" y enlace desde la página de servicio relacionada.

## Detalles técnicos

- Páginas nuevas bajo `src/pages/services/`, usando `ServiceLayout` (ya aporta hreflang, breadcrumbs y ReviewedByElena).
- Rutas en `src/App.tsx` con `lazyWithRetry`, dentro del bloque `/:lang`.
- Textos en el objeto de contenido local de cada página con claves `es|ca|en|de` (la clave `de` es obligatoria).
- Alta en `public/sitemap.xml` (4 idiomas por página) y en `public/llms.txt`.
- Enlaces internos: Orto-K → Control de miopía; Lents de contacte → Lentillas progresivas; Audiologia i Subvenciones → Preu audiòfons.
- Subir la versión en `src/pages/Index.tsx`.

Los precios, tarifas y datos clínicos concretos los necesito de tu parte antes de escribir: no inventaré cifras.
