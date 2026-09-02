# Revisión del sitemap

## Qué está bien

- 100 URLs, 25 páginas x 4 idiomas (ca, es, en, de), todas con bloque `hreflang` completo incluido `x-default` → `/ca/`.
- Coinciden con las rutas reales de la aplicación: home, `about`, 16 servicios, los 4 de visió infantil y las 3 legales.
- No quedan restos de las páginas de Oticon eliminadas.
- Los `loc` coinciden con los `canonical` que emite la app: home con barra final (`/ca/`), el resto sin barra final. Dominio non-www y https, correcto.
- Las landings de redirección (`/orto-k-poblenou-barcelona`, `/lentillas-poblenou-barcelona`, etc.) están fuera del sitemap, que es lo correcto.

## Problema real: páginas legales con noindex dentro del sitemap

`CookiesPolicy`, `PrivacyPolicy` y `TermsConditions` emiten `noindex, follow`, pero sus 12 URLs siguen en el sitemap. Es una señal contradictoria para Google y genera avisos de "Página excluida por etiqueta noindex" sobre URLs enviadas.

Cambio propuesto: eliminar de `public/sitemap.xml` los 12 bloques `<url>` de `/legal/cookies-policy`, `/legal/privacy-policy` y `/legal/terms-conditions` (quedarían 88 URLs).

## Punto menor: lastmod

Fechas actuales: 72 URLs en `2026-05-14`, 12 en `2026-06-12`, 16 en `2026-09-02` (visió infantil). Las páginas de visió infantil se editaron hoy, así que su fecha es correcta. Las demás no se tocan; no invento fechas nuevas.

## Después del cambio

Reenviar el sitemap una vez desde Search Console tras publicar. No hace falta pedir recrawl de las legales.
