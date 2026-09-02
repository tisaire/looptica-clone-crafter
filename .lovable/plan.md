# Propuesta: nicho de visión infantil

## Por qué este nicho

Looptica no tiene hoy ninguna página dedicada a niños, y es el hueco más claro que muestra Semrush (base España): demanda constante y competencia baja en casi todos los términos.

| Keyword | Volumen | Dificultad |
|---|---|---|
| ambliopía (ojo vago) | 2.900/mo | 33 (media) |
| gafas para niños | 720/mo | 15 (fácil) |
| lentillas para niños | 480/mo | 12 (muy fácil) |
| miopía en niños | 260/mo | 15 (fácil) |
| gafas graduadas niños | 170/mo | 20 (fácil) |
| audífonos para niños | 170/mo | 9 (muy fácil) |
| control de miopía | 140/mo | 18 (fácil) |
| óptica infantil | 50/mo | 10 (muy fácil) |
| terapia visual infantil | 20/mo | 0 (muy fácil) |
| ojo vago tratamiento | 40/mo | 0 (muy fácil) |

Fuente: Semrush, base de datos España.

Suma real: unas 5.000 búsquedas/mes en un conjunto de temas donde la dificultad media está por debajo de 20. Es territorio alcanzable para un dominio pequeño, y encaja con lo que Looptica ya hace (Orto-K es precisamente control de miopía).

## Estructura propuesta

Un hub y tres páginas hijas, en vez de una sola página genérica. Así cada tema puede rankear por su cuenta y el hub concentra los enlaces internos.

```text
/:lang/visio-infantil                      (hub: Visión infantil)
  ├── /:lang/visio-infantil/control-miopia (control de miopía + Orto-K)
  ├── /:lang/visio-infantil/ull-gandul     (ojo vago / ambliopía y terapia visual)
  └── /:lang/visio-infantil/ulleres-nens   (gafas y lentillas para niños)
```

### 1. Hub — Visión infantil
Objetivo: "óptica infantil", "revisión visual infantil".
Contenido: por qué revisar la vista antes de empezar el colegio, señales de alarma por edad, en qué consiste la revisión en Looptica, tabla de edades recomendadas, enlaces a las tres páginas hijas y CTA a Demana cita.

### 2. Control de miopía
Objetivo: "control de miopía", "miopía en niños" (400/mo combinado).
Contenido: por qué avanza la miopía infantil, qué opciones existen (Orto-K, lentes de control, gafas de desenfoque periférico, hábitos y luz natural), cuándo empezar, tabla comparativa de opciones. Enlace bidireccional con la página Orto-K actual, que hoy está en posición 69 y ganaría enlaces internos.

### 3. Ojo vago y terapia visual
Objetivo: "ambliopía", "ojo vago tratamiento", "terapia visual infantil" (2.960/mo combinado).
Contenido: qué es la ambliopía, cómo se detecta en casa, por qué importa la edad, en qué consiste la terapia visual, relación entre visión y aprendizaje escolar.
Nota: solo publicamos esta página si Looptica realmente hace terapia visual o deriva a un especialista concreto. Si no, la reenfocamos a detección y derivación, sin prometer tratamiento.

### 4. Gafas y lentillas para niños
Objetivo: "gafas para niños", "gafas graduadas niños", "lentillas para niños" (1.370/mo combinado).
Contenido: cómo elegir montura por edad, materiales flexibles y seguridad, cristales resistentes y filtros, a partir de qué edad se pueden usar lentillas, mantenimiento y garantía de rotura. Enlaces a Ulleres graduades y Lents de contacte.

## Enfoque de contenido

- Contenido útil y verificable, sin cifras clínicas inventadas: precios, garantías de rotura, marcas de montura infantil y si se ofrece terapia visual me los tienes que confirmar tú.
- Cuando citemos datos clínicos (progresión de miopía, edades de detección de ambliopía), enlazamos a la fuente.
- Los cuatro idiomas (es, ca, en, de), con `de` obligatorio.
- Sello "Revisado por Elena" en las cuatro páginas: refuerza E-E-A-T, que es lo que más pesa en contenido de salud.

## Detalles técnicos

- Cuatro páginas nuevas en `src/pages/services/`, usando `ServiceLayout` (ya aporta hreflang, canonical, breadcrumbs y `ReviewedByElena`).
- Rutas en `src/App.tsx` con `lazyWithRetry`, dentro del bloque `/:lang`.
- `Breadcrumbs.tsx` ya soporta migas intermedias: el hub será una miga real y las hijas colgarán de él.
- Textos en el objeto de contenido local de cada página con claves `es|ca|en|de`.
- Enlaces internos nuevos: Orto-K ↔ Control de miopía; Salut visual → hub; Ulleres graduades y Lents de contacte → Gafas y lentillas para niños; Navbar (submenú Òptica) → hub.
- Alta de las 16 URLs (4 páginas × 4 idiomas) en `public/sitemap.xml` con hreflang, y en `public/llms.txt`.
- JSON-LD `FAQPage` en el hub y en Control de miopía con las preguntas reales que devuelve Semrush.
- Subir la versión en `src/pages/Index.tsx`.

## Qué necesito de ti antes de escribir

1. ¿Looptica ofrece terapia visual, o solo detecta y deriva?
2. ¿Qué opciones de control de miopía trabajáis además de Orto-K (lentes de desenfoque, atropina en colaboración con oftalmólogo)?
3. ¿Hay marcas de montura infantil o garantía de rotura que se puedan mencionar?
4. ¿A partir de qué edad adaptáis lentillas?
