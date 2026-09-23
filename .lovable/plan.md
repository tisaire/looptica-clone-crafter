# Corregir "gafa" en la página de control de miopía

En catalán, "gafa" es un castellanismo; la palabra correcta es **"ulleres"**. La versión en castellano arrastra el mismo error ("lentes de gafa" tampoco es español correcto). Todos los casos están en `src/pages/vision-infantil/ControlMiopia.tsx`; el resto de la web ya usa "lents de desenfocament perifèric" sin "gafa", así que no hay que tocar nada más.

## Cambios (4 textos)

**Catalán**
- Tabla comparativa (línea ~64): "Lents de gafa de desenfocament perifèric" → **"Lents d'ulleres de desenfocament perifèric"**
- FAQ "A quina edat es pot començar?" (línea ~157): "Les lents de gafa de desenfocament perifèric" → **"Les lents d'ulleres de desenfocament perifèric"**

**Castellano**
- Tabla comparativa (línea ~69): "Lentes de gafa de desenfoque periférico" → **"Lentes de gafas de desenfoque periférico"**
- FAQ "¿A qué edad se puede empezar?" (línea ~164): "Las lentes de gafa de desenfoque periférico" → **"Las lentes de gafas de desenfoque periférico"**

## Verificación

- Build limpio.
- Revisión visual en preview de `/ca/visio-infantil/control-miopia` (tabla y FAQ) y su versión en castellano.
