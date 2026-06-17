
# Diagnóstico confirmado (con matices)

| Punto | Tu diagnóstico | Realidad en el código | Acción |
|---|---|---|---|
| 1. www vs non-www | Google mezcla hosts | `.htaccess` ya fuerza `https://looptica.com` (sin www), **pero Lovable hosting es estático y NO ejecuta `.htaccess`** → redirects nunca corren en producción | Resolver en **Settings → Domains de Lovable** (no en código), marcando `looptica.com` como Primary |
| 2. Duplicado lentillas | 2 slugs indexados | Confirmado: existen rutas y componentes `services/lents-contacte` (en sitemap, todos los idiomas) y `services/contact-lenses` (huérfana pero indexada) | Unificar a `lents-contacte` (opción A elegida) |
| 3. `/orto-k-poblenou-barcelona/` | URL legacy indexada como 404 | Redirect existe en `.htaccess` pero **no se aplica** en Lovable | Añadir redirect client-side en React Router |
| 4. Legal sin idioma | `/legal/cookies-policy` indexada en CA sin prefijo | Confirmado: no hay ruta para `/legal/*` sin prefijo; cae al 404 catch-all | Añadir redirect client-side `/legal/*` → `/ca/legal/*` |
| 5. Canonical tags | "No encontré canonical" | Falso negativo del scraper: existen en Index, About, ServiceLayout, legales. **Faltan en**: OticonModels, OticonModelPage, NotFound. Tampoco están en `index.html` como fallback estático para crawlers sin JS | Añadir Helmet con canonical absoluto en las páginas que faltan |
| 6. Sitemap solo canónicas | — | Sitemap usa `lents-contacte` (OK) pero no incluye self-canonical para `contact-lenses` (correcto). Mantener limpio tras el merge | Verificar tras cambios |

**Punto crítico que no estaba en tu diagnóstico**: el `.htaccess` existente **no se ejecuta** en Lovable hosting (que es estático tipo SPA). Toda la lógica de 301 que hay ahí es código muerto en producción. Los redirects reales deben ser client-side (React Router) o configurarse en Lovable (dominios).

---

# Plan de cambios

## 1. Dominio canónico looptica.com (sin www) — acción manual del usuario
- En **Settings → Project → Domains**: añadir `looptica.com` y `www.looptica.com`, marcar `looptica.com` como **Primary**. Lovable hace el 301 automático.
- No requiere cambios de código (canonicals, sitemap, og:url ya usan `https://looptica.com`).

## 2. Unificar lentillas en `lents-contacte`
- Borrar `src/pages/services/ContactLenses.tsx`.
- Quitar el `<Route path="services/contact-lenses" …>` y su `lazy(import)` en `src/App.tsx`.
- Añadir redirect en `App.tsx`:
  ```tsx
  <Route path="services/contact-lenses" element={<Navigate to="../lents-contacte" replace />} />
  ```
  (relativo al `:lang`, así sirve para los 4 idiomas).
- Verificar sitemap: ya solo lista `lents-contacte` ✓.

## 3. Redirect legacy `/orto-k-poblenou-barcelona/`
- En `src/App.tsx`, antes del catch-all `*`, añadir rutas top-level:
  ```tsx
  <Route path="/orto-k-poblenou-barcelona" element={<Navigate to="/ca/services/orto-k" replace />} />
  <Route path="/lentillas-poblenou-barcelona" element={<Navigate to="/es/services/lents-contacte" replace />} />
  <Route path="/lentilles-poblenou-barcelona" element={<Navigate to="/ca/services/lents-contacte" replace />} />
  <Route path="/kontaktlinsen-poblenou-barcelona" element={<Navigate to="/de/services/lents-contacte" replace />} />
  <Route path="/salud-visual-poblenou-barcelona" element={<Navigate to="/es/services/salut-visual" replace />} />
  ```
  (replica los legacy que ya estaban en `.htaccess` pero ahora sí se aplicarán).
- Limitación honesta: React Router devuelve 200 + JS redirect (no 301 HTTP). Para Google es suficiente como señal de canonicalización pero no es tan fuerte como un 301 real. La única forma de tener 301 real en Lovable sería migrar a hosting con Apache/Nginx.

## 4. Legal sin prefijo de idioma
- Añadir rutas top-level que redirigen al idioma por defecto (CA):
  ```tsx
  <Route path="/legal/cookies-policy" element={<Navigate to="/ca/legal/cookies-policy" replace />} />
  <Route path="/legal/privacy-policy" element={<Navigate to="/ca/legal/privacy-policy" replace />} />
  <Route path="/legal/terms-conditions" element={<Navigate to="/ca/legal/terms-conditions" replace />} />
  ```
- **NO** se renombran los slugs por idioma (mantenemos `cookies-policy` igual en los 4 idiomas) para no romper más URLs ya indexadas. Si quieres slugs traducidos en futuro, es trabajo aparte.

## 5. Self-canonical absoluto donde falta
- Añadir `<Helmet>` con `<link rel="canonical" href="https://looptica.com/${language}/products/oticon-models">` en `OticonModels.tsx`.
- Añadir `<Helmet>` con canonical dinámico + `<meta name="robots" content="noindex">` (no queremos indexar cada modelo) en `OticonModelPage.tsx` — o canonical hacia el listado si quieres consolidar señales. **Pregunta abierta**: ¿indexar modelos individuales o noindex? Por defecto propongo **noindex** (los modelos individuales suelen ser thin content).
- Añadir `<meta name="robots" content="noindex">` en `NotFound.tsx`.

## 6. Verificación final
- Releer `public/sitemap.xml`: solo URLs canónicas (lents-contacte, no contact-lenses; sin orto-k-poblenou-barcelona legacy; sin /legal/ sin prefijo). Ya está OK pero re-verifico tras los cambios.
- Pedirte que tras desplegar uses Google Search Console → URL Inspection para forzar re-rastreo de las URLs problemáticas.

---

# Detalles técnicos

**Archivos a editar**:
- `src/App.tsx` (remover route contact-lenses, añadir 6 redirects)
- `src/pages/services/ContactLenses.tsx` (eliminar)
- `src/pages/products/OticonModels.tsx` (añadir Helmet con canonical)
- `src/pages/products/OticonModelPage.tsx` (añadir Helmet con canonical+robots)
- `src/pages/NotFound.tsx` (añadir noindex)

**No se tocan**: `.htaccess` (sigue siendo dead code en Lovable hosting pero no estorba; lo puedo borrar si lo prefieres), `public/sitemap.xml` (ya está correcto), `index.html` (canonicals los gestiona Helmet por ruta), traducciones, otras páginas.

**Limitaciones documentadas**:
- Los redirects son client-side (200+JS), no 301 HTTP.
- www→non-www solo se resuelve en Settings de Lovable, no en código.
- Si quieres 301 HTTP reales y full control de canonical sin JS, hay que migrar a otro hosting.

---

# Pregunta abierta antes de implementar

¿Quieres modelos Oticon individuales **noindex** (recomendado, evita thin content) o **indexar con canonical propio**?
