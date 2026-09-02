# Lista de recrawl para Google Search Console

Orden de solicitud en la Inspección de URLs ("Solicitar indexación"). Google limita a ~10 solicitudes al día por propiedad, así que va por bloques.

## Día 1 — páginas con cambios de contenido recientes (prioridad alta)

1. https://looptica.com/ca/visio-infantil
2. https://looptica.com/es/visio-infantil
3. https://looptica.com/ca/visio-infantil/control-miopia
4. https://looptica.com/es/visio-infantil/control-miopia
5. https://looptica.com/ca/visio-infantil/ull-gandul
6. https://looptica.com/es/visio-infantil/ull-gandul
7. https://looptica.com/ca/visio-infantil/ulleres-nens
8. https://looptica.com/es/visio-infantil/ulleres-nens
9. https://looptica.com/ca/about
10. https://looptica.com/es/about

## Día 2 — versiones EN/DE de visión infantil

1. https://looptica.com/en/visio-infantil
2. https://looptica.com/de/visio-infantil
3. https://looptica.com/en/visio-infantil/control-miopia
4. https://looptica.com/de/visio-infantil/control-miopia
5. https://looptica.com/en/visio-infantil/ull-gandul
6. https://looptica.com/de/visio-infantil/ull-gandul
7. https://looptica.com/en/visio-infantil/ulleres-nens
8. https://looptica.com/de/visio-infantil/ulleres-nens
9. https://looptica.com/en/about
10. https://looptica.com/de/about

## Día 3 — home y servicios tocados (meta, breadcrumbs, enlaces cruzados)

1. https://looptica.com/ca
2. https://looptica.com/es
3. https://looptica.com/ca/services/orto-k
4. https://looptica.com/es/services/orto-k
5. https://looptica.com/ca/services/contact-lenses
6. https://looptica.com/es/services/contact-lenses
7. https://looptica.com/ca/services/eyeglasses
8. https://looptica.com/es/services/eyeglasses
9. https://looptica.com/ca/services/audiologia-centro
10. https://looptica.com/es/services/audiologia-centro

## Notas de ejecución

- Antes de pedir recrawl, publicar los cambios: Google indexa la versión en producción, no la preview.
- Reenviar el sitemap una sola vez después de publicar (`https://looptica.com/sitemap.xml`) — cubre las 100 URLs y evita gastar cuota de inspección.
- Páginas legales (cookies, privacitat, termes, avís legal) llevan `noindex`: no pedir recrawl.
- Las URLs eliminadas de Oticon redirigen al home del idioma; no hace falta inspeccionarlas.
- Verificar en la inspección que el canonical declarado coincide con la URL non-www antes de solicitar indexación.

## Detalles técnicos

- Propiedad: URL-prefix `https://looptica.com/`.
- Ruta en GSC: Inspección de URLs → pegar URL → "Solicitar indexación".
- Opcional: si prefieres no hacerlo a mano, puedo comprobar el estado de indexación de estas URLs vía la API de Search Console (solo lectura; la API no permite solicitar recrawl).
