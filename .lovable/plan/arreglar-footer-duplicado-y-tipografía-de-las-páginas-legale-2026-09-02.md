# Arreglar footer duplicado y tipografía de las páginas legales

## Problema 1: footer duplicado

`App.tsx` ya renderiza `<Footer />` para todas las rutas (dentro de `MainLayout`), pero además lo renderizan por su cuenta:

- `src/pages/legal/CookiesPolicy.tsx`
- `src/pages/legal/PrivacyPolicy.tsx`
- `src/pages/legal/TermsConditions.tsx`
- `src/pages/About.tsx`

Resultado: dos footers apilados en esas cuatro páginas.

**Solución:** eliminar el `<Footer />` local y su import en esas cuatro páginas. El `Navbar` sí se mantiene (no está en el layout global, cada página lo pone).

## Problema 2: ratios tipográficos desproporcionados

El contenido legal se renderiza como HTML sanitizado dentro de un `div` con clases `prose prose-gray prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 ...`.

El paquete `@tailwindcss/typography` está instalado en `package.json`, pero **no está registrado** en `plugins` de `tailwind.config.ts` (solo está `tailwindcss-animate`). Por eso todas las clases `prose*` se ignoran y los `h2`, `h3`, `p`, `ul` del HTML inyectado salen con los tamaños por defecto del navegador (h2 enorme, listas sin margen, saltos de escala incoherentes con el resto del sitio).

**Solución:** registrar el plugin en `tailwind.config.ts`:

```ts
plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
```

Con eso las clases `prose-h2:text-2xl`, `prose-h3:text-xl`, `prose-p:text-gray-600` ya existentes toman efecto y la escala queda alineada con la del resto de la web (Poppins, grises del sistema, enlaces teal).

## Verificación

- Revisar `/ca/legal/cookies-policy`, `/ca/legal/privacy-policy`, `/ca/legal/terms-conditions` y `/ca/about`: un solo footer y jerarquía de títulos coherente.
- `bun run build` limpio.
