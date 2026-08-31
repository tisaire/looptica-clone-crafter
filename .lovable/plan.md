# Eliminar el perfil de Lorena

## Objetivo
Quitar a Lorena de la página "Qui som" / "Quien somos" (`/:lang/about`), dejando el equipo con Elena e Irene.

## Cambios
- `src/pages/About.tsx`: eliminar el objeto de Lorena del array `teamMembers` (nombre, rol e biografía en ES/CA/EN/DE).
- La cuadrícula pasa de 3 a 2 tarjetas; se ajusta el layout para que las dos fichas queden centradas y bien proporcionadas en escritorio.
- Se mantienen las animaciones `ScrollReveal` (izquierda / derecha) coherentes con dos elementos.

## No se toca
- Las reseñas de Google en la home mencionan a Lorena por nombre: son testimonios reales de clientes y se mantienen tal cual, salvo que indiques lo contrario.
- La imagen `public/images/lorena2.png` queda en el repositorio (sin uso); se puede borrar más adelante si lo prefieres.

## Detalles técnicos
Cambio únicamente de contenido y clases Tailwind en `About.tsx`; sin impacto en rutas, SEO, hreflang ni breadcrumbs.
