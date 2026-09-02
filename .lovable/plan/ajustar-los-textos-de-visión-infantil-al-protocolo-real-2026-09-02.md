# Ajustar los textos de visión infantil al protocolo real

Objetivo: que ninguna página dé a entender que Looptica hace primeras revisiones a niños pequeños, diagnostica patologías, ofrece terapia visual o aplica tratamientos médicos. Se conserva todo el volumen de contenido y las palabras clave; solo cambia el enfoque: el oftalmólogo evalúa, diagnostica y trata; Looptica aporta la solución óptica (gafas y lentes de control de miopía, lentillas, Orto-K) y el seguimiento coordinado.

Sin cambios de diseño, navegación, URLs, rutas ni funcionalidad. Los cuatro idiomas (ca, es, en, de) se mantienen con significado idéntico.

## Mensaje base (se repite de forma coherente)

- La primera revisión visual de un niño pequeño que nunca ha sido examinado la hace el oftalmólogo, para descartar patologías.
- Looptica recomienda y deriva a oftalmología en esos casos.
- Después trabajamos de forma coordinada con el oftalmólogo y según sus indicaciones.
- Looptica no realiza terapia visual.
- Nuestra intervención es la solución óptica: gafas o lentes de corrección y control de miopía, lentillas y lentes nocturnas Orto-K.

## Cambios por página

### /visio-infantil (hub)
- Intro reescrita: en lugar de "hacemos revisiones visuales infantiles adaptadas a cada edad", explica que la primera valoración de un niño pequeño corresponde al oftalmólogo y que Looptica se ocupa de la solución óptica y del seguimiento coordinado.
- Sección "Qué incluye la revisión visual infantil" → se convierte en "Cómo trabajamos con el oftalmólogo": derivación previa, adaptación de la corrección óptica según prescripción, control de la evolución de la graduación, ajuste de montura/lentillas, informe para el oftalmólogo. Se retiran los puntos que implican diagnóstico (salud ocular, motilidad, descartar patología).
- Tabla de señales de alerta por edad: se mantiene íntegra (es información útil para padres) con una frase introductoria que indica que ante cualquiera de estas señales hay que acudir al oftalmólogo.
- Tarjeta de "Ull gandul i teràpia visual" → "Ull gandul (ambliopia)", con texto centrado en la corrección óptica y el seguimiento; se elimina "terapia visual".
- FAQs: se reformulan las cuatro. "¿A qué edad la primera revisión?" pasa a explicar que la primera exploración es del oftalmólogo. Se sustituye la de "¿tiene que saber leer?" por una sobre cómo se coordina Looptica con el oftalmólogo. Se mantienen duración de la visita (referida a la adaptación óptica) e idiomas.

### /visio-infantil/ull-gandul
- Se mantiene la URL y el bloque informativo sobre ambliopía (qué es, señales en casa, importancia de la edad).
- Se elimina la sección "En qué consiste la terapia visual" y se reemplaza por "Qué podemos hacer en Looptica": adaptación de la corrección óptica prescrita, gafas cómodas y bien centradas para el tratamiento, lentillas cuando el oftalmólogo lo indica, seguimiento de la graduación y comunicación con el especialista.
- Sección "Visión y aprendizaje": se conserva el contenido informativo, quitando "se puede evaluar y entrenar" y la insinuación de programa propio; se remite al oftalmólogo para la valoración.
- FAQs: se elimina "¿cuántas sesiones hacen falta?" y se sustituye por "¿Hacéis terapia visual?" con respuesta clara: no, y explicación del reparto de papeles. Se ajustan las otras tres (parche, edad, papel del oftalmólogo).
- Metadatos y H1: título "Ull gandul (ambliopia) a Barcelona Poblenou" y descripción sin "terapia visual", conservando "ull gandul", "ambliopia", "Poblenou".

### /visio-infantil/control-miopia
- Ya está bien alineada (enfoque óptico, sin atropina). Ajustes menores: la sección "Cómo hacemos el seguimiento" pasa de "evaluación inicial completa (graduación, topografía corneal y salud ocular)" a mediciones para la adaptación óptica, partiendo del diagnóstico del oftalmólogo. Se añade una frase de derivación previa para primeras visitas de niños pequeños.

### /visio-infantil/ulleres-nens
- La adaptación de lentillas desde los 0 años y las lentes pediátricas para catarata congénita se mantienen, matizando que se hacen siempre por prescripción del oftalmólogo y en coordinación con él.
- Se revisa cualquier frase que sugiera examen o diagnóstico propio.

### Otras páginas y ficheros
- `src/pages/services/OrtoK.tsx`: se mantiene el contenido de miopía infantil; se retira lo que suene a valoración clínica propia en niños y se añade la nota de derivación/coordinación con oftalmología para menores.
- `src/pages/services/SalutVisual.tsx` y `LentsContacte.tsx`: revisión de menciones a niños; se añade el matiz de derivación donde haga falta.
- `src/components/home/*` y `LanguageContext.tsx`: revisión de textos de miopía infantil (la descripción de Orto-K se conserva, es correcta).
- `public/llms.txt`: se actualiza la línea de "Lazy Eye & Vision Therapy" a ambliopía + solución óptica, y la de visión infantil.

## Detalles técnicos

- Los textos viven en objetos por idioma dentro de cada página (`intro`, `exam`, `faqs`, etc.); se editan esas claves manteniendo la estructura y los componentes.
- El JSON-LD `FAQPage` se genera desde los objetos `faqs`, por lo que se actualiza automáticamente.
- URLs, rutas de `App.tsx`, `sitemap.xml`, breadcrumbs, imágenes y el sello "Revisado por Elena" no se tocan.
- Se sube la versión mostrada en `src/pages/Index.tsx` y se comprueba build limpio más revisión en preview de las cuatro páginas en catalán y castellano.
