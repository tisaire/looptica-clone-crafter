# Simplificar la arquitectura del sitio para reforzar el mensaje principal

## Contexto
El sitio actual tiene una estructura amplia que, aunque funcional, puede diluir el mensaje principal de Looptica como centro de óptica y audiología en Poblenou. El usuario quiere mantener la estructura general pero reducir la sensación de "demasiadas secciones".

## Diagnóstico de la estructura actual

### Páginas existentes
- **Home**: 7 secciones visibles (Hero, Productos, Servicios Óptica, Servicios Audilogía, Testimonios, Marcas, Ubicación).
- **About**: equipo y filosofía.
- **Servicios de óptica**: 9 páginas (salut-visual, lents-contacte, orto-k, eyeglasses, sunglasses, image-consulting, lens-consulting, plan-veo).
- **Servicios de audiología**: 7 páginas (hearing-test, hearing-aids, tinnitus-treatment, ear-protection, technical-aids, subvenciones, audiologia-centro).
- **Legales**: 3 páginas.
- **Total**: ~22 rutas × 4 idiomas = ~88 URLs.

### Problemas detectados
1. **Homepage duplica intenciones**: la sección "Productos" muestra gafas, lentillas, gafas de sol y audífonos, que ya aparecen como servicios en las secciones de Óptica y Audilogía. Esto confunde al usuario sobre si debe "comprar" o "reservar cita".
2. **Navegación con 3 anclas distintas**: Inicio, Productos, Óptica, Audilogía, About, Contacto. Tres de ellas apuntan a anclas del home, lo que fragmenta el mensaje.
3. **Sección Newsletter construida pero no usada**: el componente existe pero no se importa en `Index.tsx`.
4. **Falta una página intermedia**: no hay landing de "Óptica" ni "Audilogía" que agrupe servicios; el home asume toda la carga explicativa.

## Propuesta recomendada (Opción B: arquitectura centrada en servicios)

### Objetivo
Reforzar el mensaje: "En Looptica cuidamos tu visión y tu audición". Eliminar duplicidades, simplificar la navegación y dar a cada servicio su propio espacio sin saturar el home.

### Cambios en la home
1. **Eliminar la sección "Productos"** del `Index.tsx`.
   - Rationale: duplica servicios y desvía la atención de la cita.
   - Las 4 tarjetas de productos (gafas, lentillas, gafas de sol, audífonos) ya tienen su página de servicio correspondiente.
2. **Reordenar las secciones restantes** para contar una historia clara:
   - Hero (CTA cita + CTA secundario a servicios)
   - Servicios de óptica (6 tarjetas)
   - Servicios de audiología (5 tarjetas + enlace al centro)
   - Testimonios (prueba social)
   - Marcas (confianza)
   - Ubicación / contacto
3. **Añadir el componente Newsletter** al final del `main`, antes del footer, para captar leads.
4. **Revisar los textos del Hero** para que el mensaje principal combine visión + audición, no solo una de ellas.

### Cambios en navegación
1. **Simplificar el menú** a 4 elementos principales:
   - Inicio
   - Servicios (dropdown o mega-menú con Óptica y Audilogía)
   - Sobre nosotros
   - Contacto
2. **Eliminar el enlace directo "Productos"** del Navbar.
3. **Mantener los anclajes internos** solo cuando el usuario está en home (Inicio, Servicios → #optical, Contacto → #contact).

### Cambios en servicios
1. **No eliminar páginas de servicio**: mantener las URLs por SEO y campañas.
2. **Agrupar visualmente** en la home con dos bloques bien diferenciados (Óptica / Audilogía), como ya está.
3. **Opcional**: crear dos páginas agrupadoras `/optica` y `/audiologia` que resuman los servicios de cada área y enlacen a las páginas específicas. Esto alivia la home y mejora la navegación desde el menú desplegable.

### Cambios en SEO y sitemap
1. Actualizar `public/sitemap.xml` si se crean o eliminan rutas.
2. Mantener hreflang en todas las rutas activas.
3. No tocar las páginas legales ni el 404.

## Alternativas descartadas (para registro)
- **Opción A (mínima)**: solo quitar Productos y añadir Newsletter. Menos impacto, pero no resuelve la navegación fragmentada.
- **Opción C (landing de conversión)**: reducir la home a Hero + 2 bloques de servicios + testimonios + contacto, y mover todo el detalle a páginas secundarias. Más agresivo; se descarta porque el usuario quiere mantener la estructura general.

## Plan de implementación

### Paso 1: Home
- Editar `src/pages/Index.tsx`:
  - Eliminar import y uso de `<Products />`.
  - Importar y renderizar `<Newsletter />` después de `StoreLocation`.
  - Ajustar `DeferredContent` para reflejar el nuevo orden.
  - Revisar textos del Hero si es necesario (consultar con el usuario).

### Paso 2: Navegación
- Editar `src/components/layout/Navbar.tsx`:
  - Reducir `navLinks` a Inicio, Servicios, Sobre nosotros, Contacto.
  - Implementar dropdown simple para "Servicios" con Óptica y Audilogía (o enlaces directos a anclas en home).
  - Eliminar enlace "Productos".

### Paso 3: Páginas agrupadoras (opcional, decidido en aprobación)
- Crear `src/pages/Optica.tsx` y `src/pages/Audiologia.tsx` como landings de categoría.
- Añadir rutas en `src/App.tsx`.
- Actualizar Navbar para enlazar a estas páginas en el dropdown.

### Paso 4: SEO
- Actualizar `public/sitemap.xml` si hay nuevas rutas.
- Revisar meta tags de la home para que el título refleje óptica + audiología.

### Paso 5: Verificación
- `bun run build` limpio.
- Revisar en preview `/ca` que la home no muestre Productos, que Newsletter aparezca y que la navegación sea clara.
- Verificar que las URLs de servicio siguen funcionando.

## No incluido
- Rediseño visual profundo (colores, tipografía).
- Eliminación de páginas de servicio individuales.
- Cambios en el contenido de cada página de servicio.
- Modificaciones en el footer, WhatsApp o cookies.
