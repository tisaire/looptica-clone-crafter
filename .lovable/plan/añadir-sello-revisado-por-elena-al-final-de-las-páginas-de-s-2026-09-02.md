# Añadir sello "Revisado por Elena" al final de las páginas de servicios

## Contexto
El usuario quiere replicar, en la web de Looptica, el patrón "Contenido revisado por..." que ya existe en el proyecto de lentillas progresivas. El sello debe aparecer al final de todas las páginas de servicios y productos ópticos/auditivos.

## Alcance
Aplicar el cambio **solo a las páginas de servicios** (óptica y audilogía), que están envueltas por `ServiceLayout`. No afecta a Home, About, legales ni 404.

## Cambios propuestos

### 1. Nuevo componente `ReviewedByElena`
- Ubicación: `src/components/ReviewedByElena.tsx`
- Responsabilidad: mostrar el sello de revisión médica/técnica, multilingüe y con enlace a la página "Qui som".
- Textos por idioma:
  - **ES:** "Contenido revisado por Elena Sentís — Óptica Optometrista · Col. 18568 · Directora Técnica de Looptica"
  - **CA:** "Contingut revisat per Elena Sentís — Òptica Optometrista · Col. 18568 · Directora Tècnica de Looptica"
  - **EN:** "Content reviewed by Elena Sentís — Optician Optometrist · Col. 18568 · Technical Director of Looptica"
  - **DE:** "Inhalt geprüft von Elena Sentís — Optikerin Optometristin · Col. 18568 · Technische Leiterin von Looptica"
- Enlace: `/${language}/about` (ruta "Qui som / Sobre nosotros").
- Estilo: banda/card limpia al final del `main`, coherente con los tokens de Looptica (fondo gris claro, tipografía Poppins, acento teal/coral, icono de verificación o sello). Se propondrá un diseño sencillo y profesional similar al patrón de "revisado por experto".

### 2. Integrar en `ServiceLayout`
- Importar `ReviewedByElena` en `src/components/layout/ServiceLayout.tsx`.
- Renderizarlo dentro de `<main>`, justo después del bloque de contenido/CTA y antes del `FloatingWhatsApp`, de modo que aparezca al final de cada página de servicio, justo antes del footer.
- No se toca el CTA de cita ni el hero.

### 3. Verificación
- `bun run build` limpio.
- Revisar en preview una página de servicio (p. ej. `/ca/services/lents-contacte`) para confirmar que el sello se renderiza, el enlace funciona y el diseño es consistente.

## No incluido
- Home, About, legales y 404.
- Páginas de producto (actualmente no hay sección de productos activa tras la eliminación de Oticon).
- Cambios en `.htaccess`, sitemap ni meta tags.
