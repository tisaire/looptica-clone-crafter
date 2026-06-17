
# Eliminar apartado Oticon dedicado

Solo se borra el apartado **/products/oticon-models**. Las menciones a Oticon en TechnicalAids (EduMic, ConnectClip…) y las fotos de stock con prefijo `oticon_*` en otras páginas se mantienen.

## Cambios

### 1. Borrar archivos
- `src/pages/products/OticonModels.tsx`
- `src/pages/products/OticonModelPage.tsx`
- `src/components/products/OticonModelDetail.tsx`
- Carpeta entera `public/images/brands/oticon/` (7 imágenes solo usadas por las páginas borradas)

Y si la carpeta `src/pages/products/` queda vacía, borrarla también.

### 2. `src/App.tsx`
- Quitar los 2 `lazy(() => import('./pages/products/OticonModels'))` y `OticonModelPage`.
- Quitar las 2 rutas:
  ```tsx
  <Route path="products/oticon-models" … />
  <Route path="products/oticon-models/:id" … />
  ```
- Añadir redirect 301-equivalente a la home del idioma para no perder la URL ya indexada:
  ```tsx
  <Route path="products/oticon-models" element={<Navigate to=".." replace />} />
  <Route path="products/oticon-models/:id" element={<Navigate to="../.." replace />} />
  ```

### 3. `public/sitemap.xml`
- Eliminar el bloque `<url>` de `oticon-models` (4 entradas, una por idioma).

### 4. `public/llms.txt`
- Quitar la línea `- [Oticon Hearing Aids](/products/oticon-models): …`.

## No se toca
- `src/pages/services/TechnicalAids.tsx` (mantiene productos Oticon EduMic/ConnectClip/etc.)
- `src/contexts/LanguageContext.tsx` (traducciones "Oticon EduMic/TwinLink")
- Imágenes `public/images/oticon_*.jpg` (usadas como stock en Audiology, HearingAids, HearingTest, Subvenciones, Products)
- Ningún otro componente

## Verificación
- `rg "oticon-models|OticonModel"` debe devolver 0 resultados tras los cambios.
- Build pasa (lo verifica el harness).

## Archivos modificados (resumen)
- Eliminados: 3 .tsx + carpeta `public/images/brands/oticon/`
- Editados: `src/App.tsx`, `public/sitemap.xml`, `public/llms.txt`
