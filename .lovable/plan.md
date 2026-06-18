# Auditoría de dominio canónico y hreflangs (v2)

## Estado actual confirmado

- **Cero referencias a `https://www.looptica.com`** en Helmet, JSON-LD, sitemap, og:url o twitter meta. Todo apunta ya a `https://looptica.com`.
- Únicas apariciones de `www.looptica.com` (texto plano, sin esquema): 8 ocurrencias en el copy legal de `TermsConditions.tsx` (en/es/ca/de). Se normalizarán a `looptica.com`.
- `sitemap.xml`: ya solo `https://looptica.com`. ✅
- `PlanVeo.tsx`: duplica canonical + bloque hreflang (también los emite `ServiceLayout`).
- `About.tsx`: tiene canonical absoluto self-referencial ✅ pero **no** emite hreflang.
- Páginas legales (`PrivacyPolicy`, `TermsConditions`, `CookiesPolicy`): tienen canonical absoluto self-referencial ✅ pero **no** emiten hreflang ni og:url.

Versión: `v2.3.0-canonical-nonwww-cleanup`.

## Cambios a aplicar

### 1. `src/pages/services/PlanVeo.tsx`
`ServiceLayout` ya emite, para esta ruta:
- `<link rel="canonical" href="https://looptica.com/{lang}/services/plan-veo">` (self-referencial)
- 4 `<link rel="alternate" hrefLang>` absolutos + `x-default` → `/ca/services/plan-veo`
- `<meta property="og:url">` self-referencial

Por tanto, eliminar del `<Helmet>` local: `<link rel="canonical">`, el `.map(languages)` de hreflang y el `x-default`. **Conservar**: `<title>`, `<meta name="description">` y `<script type="application/ld+json">` del FAQ.

Resultado: exactamente un canonical y un único bloque hreflang completo, todos absolutos, sin www.

### 2. `src/pages/About.tsx`
- Confirmar canonical existente: `https://looptica.com/${language}/about` ✅ (ya presente).
- Añadir bucle `SUPPORTED_LANGUAGES.map` con `<link rel="alternate" hrefLang>` absolutos + `x-default → https://looptica.com/ca/about`.
- Importar `SUPPORTED_LANGUAGES` de `@/config/languages`.

### 3. `src/pages/legal/PrivacyPolicy.tsx`
- Confirmar canonical: `https://looptica.com/${language}/legal/privacy-policy` ✅.
- Añadir: `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:url" content="https://looptica.com/${language}/legal/privacy-policy">`, `<meta property="og:type" content="website">`.
- Añadir bucle hreflang + `x-default → /ca/legal/privacy-policy`.

### 4. `src/pages/legal/TermsConditions.tsx`
- Mismas adiciones que (3) con path `/legal/terms-conditions`.
- Reemplazar las 8 ocurrencias de `www.looptica.com` por `looptica.com` en el copy legal (en/es/ca/de).

### 5. `src/pages/legal/CookiesPolicy.tsx`
- Mismas adiciones que (3) con path `/legal/cookies-policy`.

### 6. `src/pages/Index.tsx`
- Bump de versión a `v2.3.0-canonical-nonwww-cleanup`.
- Helmet ya correcto (canonical, 4 hreflang, x-default, og:url) — sin cambios.

## No se cambia

- `index.html`, `sitemap.xml`, `ServiceLayout.tsx`, `Index.tsx` (Helmet), JSON-LD de `OrtoK.tsx` y `HearingTest.tsx`: ya correctos.
- Slugs, rutas, contenido visual, traducciones (excepto la normalización `www.looptica.com` → `looptica.com` en el copy legal, solicitada explícitamente en el punto 4 del primer brief).
- `x-default` se mantiene apuntando a `ca` en todas las páginas.

## Verificación post-implementación

Para cada página, comprobaré en el código fuente generado por React Helmet y mostraré el `<head>` efectivo de:

1. `https://looptica.com/ca/` — emitido por `Index.tsx`
2. `https://looptica.com/es/services/orto-k` — emitido por `ServiceLayout` + JSON-LD de `OrtoK.tsx`
3. `https://looptica.com/es/services/plan-veo` — emitido únicamente por `ServiceLayout` + FAQ JSON-LD que queda en `PlanVeo.tsx`
4. `https://looptica.com/es/about` — emitido por `About.tsx` (con el nuevo bloque hreflang)
5. `https://looptica.com/es/legal/privacy-policy` — emitido por `PrivacyPolicy.tsx` (con og:* y hreflang añadidos)

Para cada una verificaré:

```text
[ ] Canonical absoluto, self-referencial, sin www
[ ] Exactamente UN <link rel="canonical">
[ ] 4 hreflang absolutos (ca, es, en, de) + 1 x-default → /ca
[ ] Ningún hreflang relativo
[ ] Ningún hreflang duplicado
[ ] og:url absoluto, self-referencial, sin www
[ ] Ninguna mención de https://www.looptica.com
```

## Archivos modificados (resumen)

1. `src/pages/services/PlanVeo.tsx` — eliminar bloque duplicado canonical+hreflang
2. `src/pages/About.tsx` — añadir bucle hreflang + x-default
3. `src/pages/legal/PrivacyPolicy.tsx` — añadir og:* + hreflang
4. `src/pages/legal/TermsConditions.tsx` — añadir og:* + hreflang + normalizar `www.looptica.com` en copy
5. `src/pages/legal/CookiesPolicy.tsx` — añadir og:* + hreflang
6. `src/pages/Index.tsx` — solo bump de versión
