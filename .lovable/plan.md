## Plan: Añadir imagen Remote Control 3.0

Imagen recibida correctamente (Oticon Remote Control 3.0 con audífonos). Pasos:

1. Subir `oticon-oticon-remote-control-30-remote-control.webp` al CDN con `lovable-assets create` desde `/mnt/user-uploads/`.
2. Guardar el pointer en `src/assets/oticon-remote-control-30.webp.asset.json`.
3. En `src/pages/services/TechnicalAids.tsx`, reemplazar la ruta actual `/images/brands/oticon/oticon-oticon-remote-control-30-remote-control.webp` por la URL del asset (importando el JSON).
4. Verificar visualmente en `/ca/services/technical-aids` que la imagen del Remote Control 3.0 se muestra junto a las otras 4 (EduMic, ConnectClip, TV Adapter, Smart Charger).

Sin cambios de copy ni de layout.
