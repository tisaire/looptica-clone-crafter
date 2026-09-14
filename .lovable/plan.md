# Añadir cuarto servicio de visión infantil: catarata congénita

## Objetivo
Crear una página hija más dentro del hub de visión infantil para la **catarata congénita**, centrada en la adaptación de lentillas pediátricas desde los 0 años tras cirugía del oftalmólogo.

## Estructura de la nueva URL

```text
/:lang/visio-infantil/catarata-congenita-barcelona
```

El slug se mantiene en los cuatro idiomas (es/ca/en/de) igual que el resto de páginas del hub.

## Contenido de la nueva página

- Qué es la catarata congénita y por qué la cirugía la decide el oftalmólogo.
- El papel de Looptica después de la cirugía: adaptar lentillas pediátricas para compensar ópticamente el ojo operado.
- Seguimiento estrecho con el oftalmólogo, porque los parámetros del ojo de un bebé cambian rápido.
- Formación de los padres en manipulación e higiene de las lentes.
- Preguntas frecuentes reales (FAQPage con JSON-LD).
- Enlaces relacionados a `ulleres-nens` y `lents-contacte`.
- Sello "Revisado por Elena" al final (ya incluido por `ServiceLayout`).

## Tareas técnicas

1. **Nueva página**: crear `src/pages/vision-infantil/CatarataCongenita.tsx` usando `ServiceLayout`, con traducciones completas `ca|es|en|de`, título/meta por idioma, `breadcrumbParents` apuntando al hub, y FAQ schema.
2. **Ruta**: añadir import con `lazyWithRetry` y la ruta en `src/App.tsx` dentro del bloque `/:lang/visio-infantil`.
3. **Hub**: añadir la cuarta tarjeta en `src/pages/vision-infantil/VisioInfantil.tsx` y cambiar la rejilla de 3 a 4 columnas en escritorio (`md:grid-cols-2 lg:grid-cols-4`).
4. **Home**: añadir la cuarta tarjeta en `src/components/home/ChildrenVision.tsx`, actualizando arrays de iconos e imágenes y la rejilla a 4 columnas en escritorio.
5. **Enlaces cruzados**: en `src/pages/vision-infantil/UlleresNens.tsx`, convertir la mención a catarata congénita en enlace a la nueva página y añadir una pregunta frecuente o enlace relacionado.
6. **Imágenes**: generar o seleccionar una imagen de hero para la nueva página (`src/assets/catarata-congenita-barcelona-hero.jpg`) y una imagen de tarjeta para la home. Si no hay foto propia, se generará una imagen acorde al estilo del resto del hub.
7. **Sitemap**: añadir 4 URLs (ca/es/en/de) con hreflang completo y `x-default` apuntando a `/ca/visio-infantil/catarata-congenita-barcelona`.
8. **llms.txt**: añadir línea descriptiva de la nueva página en inglés.
9. **Versión**: subir la versión mostrada en `src/pages/Index.tsx`.
10. **Verificación**: ejecutar `bun run build` y comprobar que `/ca/visio-infantil/catarata-congenita-barcelona` carga, muestra breadcrumb correcto y no hay errores de consola.

## Notas

- Se respeta el protocolo editorial vigente: Looptica no realiza el diagnóstico ni la cirugía, solo la adaptación óptica y el seguimiento coordinado con el oftalmólogo.
- Todos los objetos de contenido incluirán la clave `de` para evitar errores de TypeScript.
- Se mantienen los colores y estilos existentes del proyecto (`#55afa9`, `#ca6664`, clases `prose`, etc.).
