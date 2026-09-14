# Nova landing: lents de contacte multifocals

Nova pàgina de servei dedicada a lents de contacte multifocals / lentillas progresivas, integrada dins la secció de lents de contacte, seguint exactament el patró d'Orto-K.

## Rutes

`/:lang/services/lents-contacte-multifocals` (mateix slug en ca, es, en, de, com ja passa amb `lents-contacte` i `orto-k`).

## Estructura de la pàgina

Es fa servir `ServiceLayout` (Navbar, breadcrumbs, hero, CTA de cita, segell "Revisat per Elena", WhatsApp flotant, canonical + hreflang + x-default automàtics), amb `breadcrumbParents` apuntant a la pàgina de lents de contacte.

Seccions, en aquest ordre:

1. **Hero** — H1 "Lents de contacte multifocals a Barcelona", subtítol "Veure de lluny i de prop sense dependre de les ulleres", paràgraf breu sobre adaptació personalitzada per a presbícia. CTA "Demana cita" (el botó de Google Calendar ja existent) + CTA secundari "Com funciona l'adaptació?" que fa scroll a la secció de procés.
2. **No totes les lents multifocals funcionen igual** — llista de factors a valorar (lluny, intermèdia, prop, ull dominant, graduació, astigmatisme, necessitats diàries, comoditat, resposta als dissenys) i el missatge de trobar la combinació adequada.
3. **Per a qui?** — quatre targetes de perfil (usuaris d'ulleres progressives, ja porten lents de contacte, ja han provat multifocals sense èxit, necessiten lluny + ordinador + prop).
4. **Com adaptem les lents multifocals a Looptica** — quatre passos numerats amb icones i el color teal, igual que el bloc de procés d'Orto-K: estudi visual, selecció de la lent, prova i ajustos, seguiment.
5. **Ulleres progressives vs lents de contacte multifocals** — taula comparativa responsive de set files, sense declarar una opció superior, amb nota que moltes persones combinen les dues.
6. **Diferents lents per a diferents ulls** — diàries, mensuals, multifocals, multifocals tòriques, diferents addicions, geometries i materials. Sense marques.
7. **La teva adaptació, en mans d'un especialista en contactologia** — reutilitza les dades reals d'Elena Sentís (Òptica Optometrista, Col. 18568, directora tècnica) i la seva foto ja existent, amb enllaç a "Qui som". Sense inventar credencials.
8. **FAQ** — les 7 preguntes indicades, respostes prudents, sense promeses de resultat.
9. **Conversió local** — "Adaptació de lents multifocals a Poblenou, Barcelona" amb el bloc existent d'adreça, telèfons, horaris i mapa (`StoreLocation`) i CTA gran "Demana cita".

Tot el contingut en ca, es, en i de, redactat original i localitzat (no traducció literal dels titles).

## Integració a la pàgina de lents de contacte

A `/:lang/services/lents-contacte`, la targeta "Lents de contacte multifocals" es manté però es converteix en porta d'entrada: títol enllaçat en teal + CTA "Descobreix les lents multifocals →", exactament el mateix patró que ja fa servir la targeta d'Orto-K. Un sol enllaç, sense repeticions artificials.

## SEO

- Title/description únics per idioma, p. ex. es: "Lentillas Progresivas en Barcelona | Adaptación · Looptica" amb la descripció indicada; ca/en/de localitzats amb els seus conceptes propis.
- Canonical autoreferent, hreflang recíproc ca/es/en/de + `x-default` → ca: ho genera `ServiceLayout`.
- OpenGraph i twitter: mateix mecanisme que la resta de pàgines.
- 4 URLs noves a `public/sitemap.xml` amb bloc hreflang complet, i entrada a `public/llms.txt`.
- Structured data: `Service`/`MedicalProcedure` coherent amb Orto-K + `FAQPage` només amb les preguntes visibles a la pàgina.
- Breadcrumbs: Inici → Lents de contacte → Lents multifocals, amb JSON-LD.

## Imatge

Es genera una imatge de hero pròpia (persona de 40–60 anys, llum natural, to coherent amb la resta del web) perquè el projecte no té cap recurs adequat per a aquest perfil d'edat. Es puja al CDN com la resta d'assets recents.

## Detalls tècnics

- Nou fitxer `src/pages/services/LentsContacteMultifocals.tsx`.
- Ruta `lazyWithRetry` a `src/App.tsx`.
- Edició de `src/pages/services/LentsContacte.tsx` (targeta → porta d'entrada).
- `public/sitemap.xml`, `public/llms.txt`, versió a `src/pages/Index.tsx` → `v2.8.0-lents-multifocals`.
- Sense canvis de disseny global: tokens, `prose`, `ScrollReveal`, `#55afa9` / `#ca6664`, cards i radis actuals.
- Cap canonical cap a lentillasprogresivasbarcelona.com.
- `bun run build` + verificació de la ruta amb navegador al final.

## No determinat pel codi

- No hi ha cap indicació al projecte de quines marques o dissenys multifocals s'adapten realment, així que la secció de tipus es queda genèrica (diàries, mensuals, tòriques, addicions) sense noms comercials.
- Cap professional del projecte té una credencial específica de contactologia documentada; la secció d'especialista només utilitza la informació ja publicada d'Elena.
