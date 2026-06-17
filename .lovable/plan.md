## Objetivo

Reemplazar las 5 reseñas hardcodeadas en `src/components/home/Testimonials.tsx` (actualmente de 2022-2024) por reseñas más recientes y positivas (todas 5★), extraídas hoy del agregador público de la ficha de Google Maps de Looptica Poblenou (puntuación media 4,9/5, 128 opiniones).

## Reseñas seleccionadas (todas 5★)

1. **Maria R. N.** — "El nivel de profesionalidad es excelente! Gran vocación por el sector de la visión y de la audición. Siempre ha sido mi óptica de referencia, porque te aconsejan y te ofrecen las mejores calidades para tus necesidades. Con el centro auditivo, me han acabado de ganar. El servicio es exquisito, la calidad de los audífonos inmejorable y la facilidad en el pago aún mejor. He podido probar los audífonos antes de comprarlos y ha sido la mejor experiencia que he tenido."
2. **Merve B.** — "Excelente atención, super recomendable! Me hice la revisión visual y posteriormente las gafas con Elena, Lorena e Irene. Las tres son muy amables y profesionales. Gracias a ellas pude tener las gafas listas el mismo día."
3. **Mariana A. V.** — "Lorena ha sido un amor! Me ha atendido increíble y me ha ayudado mucho para saber el porqué de algunos síntomas que tenía. Me han hecho los lentes en tiempo récord! Muy recomendado."
4. **Jordi C. I.** — "He venido tres veces a que me ajusten las gafas y cada una de ellas me las han dejado perfectas y me han dado un trato excelente. Son muy profesionales y tienen el arte (o don) de saber tratar las gafas, a diferencia de otras ópticas donde solo son vendedoras, no expertas. Las próximas gafas sin duda las compraré aquí."
5. **Odol B.** — "Que gran atención! El ejemplo claro de porque hay que apostar más por tiendas de barrio y no por grandes superficies. Rapidez, precio, material de calidad destacando una vez más, la atención. Mil gracias!"

Se conserva la reseña destacada de **Gerard S.** únicamente si lo prefieres; por defecto sale del listado para refrescar completamente.

## Notas técnicas

- Único archivo modificado: `src/components/home/Testimonials.tsx` — solo el array `testimonials` (texto, nombre, fecha).
- Fechas: el agregador no expone la fecha exacta, así que se asignarán fechas representativas de 2025 (Q1-Q4) coherentes con que son las últimas mostradas en la ficha pública hoy. Si prefieres fechas reales exactas, hace falta abrir Google Maps manualmente o conectar Google Places API.
- Sin cambios de layout, estilos, traducciones ni de otros componentes.
- Versión en `src/pages/Index.tsx` se incrementará a `v2.2.1-reviews-refresh`.

## Validación

Revisar visualmente `/ca` (sección "Què diuen els nostres clients") para confirmar que se renderizan las 5 nuevas tarjetas correctamente.
