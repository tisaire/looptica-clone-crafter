# Añadir colegiatura de Elena en la página Qui som

## Objetivo
Incluir en la ficha de Elena que es óptica optometrista colegiada, con el número de colegiada Col. 18568, en todos los idiomas soportados.

## Cambios
- `src/pages/About.tsx`: añadir una tercera línea en el campo `role` de Elena, después de "Propietaria / Owner / Propietària / Inhaberin" y "Óptica Optometrista / Optician Optometrist / Òptica Optometrista / Optikerin Optometristin".
- Textos propuestos por idioma:
  - **ES:** `Colegiada Col. 18568`
  - **CA:** `Col·legiada Col. 18568`
  - **EN:** `Licensed Optician Optometrist Col. 18568`
  - **DE:** `Mitglied der Berufskammer Col. 18568`

## No se toca
- Imagen de Elena, biografía, filosofía ni el resto del equipo (Irene).
- SEO, hreflang, breadcrumbs, rutas o estructura de la página.

## Detalles técnicos
Cambio únicamente de contenido en el objeto `teamMembers[0].role` de `About.tsx`. El campo ya usa `whitespace-pre-line`, por lo que el salto de línea se respetará visualmente.
