# Burbuja de invitación en el botón de WhatsApp

## Qué se hará

Mejorar el botón flotante de WhatsApp (`src/components/ui/FloatingWhatsApp.tsx`) para llamar la atención de forma discreta y aumentar sus clics (hoy 1,81 % de usuarios):

1. **Pulso suave**: pasados ~4 segundos de entrar en la página, el botón hace una breve animación de pulso (escala/sombra) durante 1-2 segundos.
2. **Burbuja de mensaje**: junto al pulso aparece un globo de chat a la izquierda del botón con:
   - Nombre del centro y estado ("En línea" / equivalente, usando `accountName` y `statusMessage` ya existentes).
   - El texto de invitación ya definido (`chatMessage`), traducido a CA/ES/EN/DE.
   - Botón "×" para cerrarla.
3. **Sin insistir**:
   - La burbuja se muestra **una sola vez por sesión** (`sessionStorage`), no en cada página.
   - Si el usuario la cierra o hace clic en el botón, no vuelve a aparecer.
   - Respeta la posición dinámica ya existente (sube cuando el banner de cookies está visible).
   - Respeta `prefers-reduced-motion` (sin pulso para usuarios que lo piden).
4. **Accesibilidad**: la burbuja no roba el foco; el enlace de WhatsApp sigue funcionando igual; el cierre es alcanzable por teclado.
5. **Medición**: el evento GA4 `whatsapp_click` existente se mantiene; no se añaden eventos nuevos.

## Qué NO se hará

- No se abrirá la burbuja automáticamente como chat con campo de texto (el `placeholder` sigue sin usarse).
- No se mostrará en cada cambio de ruta ni con sonido.
- No se cambiarán textos ni traducciones existentes salvo reutilizar `chatMessage`.

## Detalles técnicos

- Archivo único: `src/components/ui/FloatingWhatsApp.tsx` (ya recibe `accountName`, `statusMessage`, `chatMessage` como props desde donde se renderiza).
- Estado nuevo: `showBubble` (bool) con `setTimeout` de ~4 s; guardado en `sessionStorage` clave `wa-bubble-shown`.
- Animación con Tailwind (`animate-[pulse]` custom o keyframes inline en la clase), sin nuevas dependencias.
- Limpieza del timer en `useEffect` para evitar fugas.
- Verificación: `bun run build` limpio y comprobación visual en preview (aparece a los ~4 s, se cierra, no reaparece al navegar).

## Actualización de versión

Subir la versión en `src/pages/Index.tsx` (p. ej. `v2.6.1-whatsapp-bubble`) según la convención del proyecto.
