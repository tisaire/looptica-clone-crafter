# Imagen de control de miopía

Usar la imagen adjunta (lentilla con anillos de desenfocamiento) para la tarjeta **Control de la miopia** de la home y para el **hero** de la página `/visio-infantil/control-miopia`, que hoy usan otras fotos.

## Cambios

1. **Preparar la imagen**
   - Convertir `user-uploads://control_miopia.png` a JPEG ligero (calidad ~85) en `/tmp` para no servir un PNG pesado.
   - Subirla con `lovable-assets` → `src/assets/control-miopia-hero.jpg.asset.json`.

2. **Tarjeta en la home** (`src/components/home/ChildrenVision.tsx`)
   - La primera imagen del array `images` (tarjeta "Control de la miopia") pasa de `vision-infantil-hero.jpg` a la nueva imagen.
   - Eliminar el import de `vision-infantil-hero.jpg` si queda sin uso (solo se usa en esa tarjeta).

3. **Hero de la página** (`src/pages/vision-infantil/ControlMiopia.tsx`)
   - `ServiceLayout image="/images/ortok_resize.jpg"` → URL de la nueva imagen (todas las versiones de idioma comparten el mismo hero).

## Verificación

- Build limpio.
- Visual en preview: home (tarjeta Control de la miopia) y `/ca/visio-infantil/control-miopia` (hero).
