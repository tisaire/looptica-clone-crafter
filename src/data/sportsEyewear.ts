import { Language } from '@/config/languages';

import polPld7056 from '@/images/eyewear/sport-polaroid-pld7056.webp.asset.json';
import polPld2176 from '@/images/eyewear/sport-polaroid-pld2176.webp.asset.json';
import polPld2175 from '@/images/eyewear/sport-polaroid-pld2175.webp.asset.json';
import polPld2160 from '@/images/eyewear/sport-polaroid-pld2160.webp.asset.json';
import polPldD641 from '@/images/eyewear/sport-polaroid-pldd641.webp.asset.json';
import polPldD591 from '@/images/eyewear/sport-polaroid-pldd591.webp.asset.json';
import polPldD590 from '@/images/eyewear/sport-polaroid-pldd590.webp.asset.json';
import polPldD635 from '@/images/eyewear/sport-polaroid-pldd635.webp.asset.json';
import polPldD571 from '@/images/eyewear/sport-polaroid-pldd571.webp.asset.json';
import polPldD568 from '@/images/eyewear/sport-polaroid-pldd568.webp.asset.json';
import vsHerculesEvo from '@/images/eyewear/sport-versport-hercules-evo.webp.asset.json';
import vsTroy from '@/images/eyewear/sport-versport-troy.webp.asset.json';
import vsZeusDts from '@/images/eyewear/sport-versport-zeus-dts.webp.asset.json';
import vsAirlineI from '@/images/eyewear/sport-versport-airline-i.webp.asset.json';
import vsAirlineII from '@/images/eyewear/sport-versport-airline-ii.webp.asset.json';
import vsAirlineEvo from '@/images/eyewear/sport-versport-airline-evo.webp.asset.json';
import vsAirlineEvoII from '@/images/eyewear/sport-versport-airline-evo-ii.webp.asset.json';
import vsZephyr from '@/images/eyewear/sport-versport-zephyr.webp.asset.json';
import vsZonda from '@/images/eyewear/sport-versport-zonda.webp.asset.json';
import vsAlize from '@/images/eyewear/sport-versport-alize.webp.asset.json';
import csF0257 from '@/images/eyewear/sport-centrostyle-f0257.webp.asset.json';
import csF0345 from '@/images/eyewear/sport-centrostyle-f0345.webp.asset.json';
import csF0346 from '@/images/eyewear/sport-centrostyle-f0346.webp.asset.json';
import csF0347 from '@/images/eyewear/sport-centrostyle-f0347.webp.asset.json';
import csS0548 from '@/images/eyewear/sport-centrostyle-s0548.webp.asset.json';
import csF0504 from '@/images/eyewear/sport-centrostyle-f0504.webp.asset.json';
import csS0684 from '@/images/eyewear/sport-centrostyle-s0684.webp.asset.json';
import csS0583 from '@/images/eyewear/sport-centrostyle-s0583.webp.asset.json';
import csS0620 from '@/images/eyewear/sport-centrostyle-s0620.webp.asset.json';
import cs13585 from '@/images/eyewear/sport-centrostyle-13585.webp.asset.json';

/**
 * How a model takes a prescription, as stated on the manufacturer's product page.
 * Only models whose page confirms one of these options belong in this gallery.
 */
export type SportFit = 'frame' | 'sunRx' | 'aviatorRx' | 'flipUp' | 'sunClip' | 'protection' | 'clipIn' | 'insert';

export const SPORT_FIT_LABELS: Record<SportFit, Record<Language, string>> = {
  frame: { ca: 'Muntura graduable', es: 'Montura graduable', en: 'Prescription frame', de: 'Korrektionsfassung', it: 'Montatura graduabile' },
  sunRx: { ca: 'Ulleres de sol graduables', es: 'Gafas de sol graduables', en: 'Prescription-ready sunglasses', de: 'Sonnenbrille mit Sehstärke', it: 'Occhiali da sole graduabili' },
  aviatorRx: { ca: 'Aviador de sol graduable', es: 'Aviador de sol graduable', en: 'Prescription-ready aviator', de: 'Pilotenbrille mit Sehstärke', it: 'Aviatore da sole graduabile' },
  flipUp: { ca: 'Lents solars abatibles', es: 'Lentes solares abatibles', en: 'Flip-up sun lenses', de: 'Hochklappbare Sonnengläser', it: 'Lenti solari ribaltabili' },
  sunClip: { ca: 'Muntura amb clip solar', es: 'Montura con clip solar', en: 'Frame with sun clip', de: 'Fassung mit Sonnenclip', it: 'Montatura con clip solare' },
  protection: { ca: 'Protecció esportiva graduable', es: 'Protección deportiva graduable', en: 'Prescription sports protection', de: 'Sportschutzbrille mit Sehstärke', it: 'Protezione sportiva graduabile' },
  clipIn: { ca: 'Amb clip òptic interior', es: 'Con clip óptico interior', en: 'With optical clip-in', de: 'Mit Korrektionsclip', it: 'Con clip ottico interno' },
  insert: { ca: 'Amb inserció òptica', es: 'Con inserto óptico', en: 'With optical insert', de: 'Mit Korrektionseinsatz', it: 'Con inserto ottico' },
};

export interface SportModel {
  name: string;
  fit: SportFit;
  src: string;
  /** Official product page the photo and prescription compatibility come from. */
  source: string;
}

export type SportBrand = 'Polaroid Sport' | 'VerSport' | 'Centrostyle';

export const SPORT_MODELS: Record<SportBrand, SportModel[]> = {
  'Polaroid Sport': [
    { name: 'PLD 7056/CI/S', fit: 'flipUp', src: polPld7056.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/207377' },
    { name: 'PLD 2176/S/X', fit: 'sunRx', src: polPld2176.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/209473' },
    { name: 'PLD 2175/S/X', fit: 'sunRx', src: polPld2175.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/209472' },
    { name: 'PLD 2160/G/S/X', fit: 'aviatorRx', src: polPld2160.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/206715' },
    { name: 'PLD D641/C', fit: 'sunClip', src: polPldD641.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/112573' },
    { name: 'PLD D591/C', fit: 'sunClip', src: polPldD591.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/110064' },
    { name: 'PLD D590/C', fit: 'sunClip', src: polPldD590.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/110063' },
    { name: 'PLD D635', fit: 'frame', src: polPldD635.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/112567' },
    { name: 'PLD D571/G', fit: 'frame', src: polPldD571.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/109346' },
    { name: 'PLD D568', fit: 'frame', src: polPldD568.url, source: 'https://www.polaroideyewear.com/es/collections/active-sport/products/109349' },
  ],
  VerSport: [
    { name: 'Hercules EVO', fit: 'protection', src: vsHerculesEvo.url, source: 'https://versport.com/es/proteccion-deportiva/3446-hercules-evo.html' },
    { name: 'Troy', fit: 'protection', src: vsTroy.url, source: 'https://versport.com/es/proteccion-deportiva/3441-troy.html' },
    { name: 'Zeus DTS', fit: 'protection', src: vsZeusDts.url, source: 'https://versport.com/es/proteccion-deportiva/3486-zeus-dts-negro-mateverde.html' },
    { name: 'Airline I', fit: 'sunRx', src: vsAirlineI.url, source: 'https://versport.com/es/proteccion-solar/86-airline-i.html' },
    { name: 'Airline II', fit: 'sunRx', src: vsAirlineII.url, source: 'https://versport.com/es/proteccion-solar/87-airline-ii.html' },
    { name: 'Airline EVO', fit: 'sunRx', src: vsAirlineEvo.url, source: 'https://versport.com/es/proteccion-solar/106-airline-evo.html' },
    { name: 'Airline EVO II', fit: 'sunRx', src: vsAirlineEvoII.url, source: 'https://versport.com/es/proteccion-solar/3582-airline-evo-ii-azul-metalizado-matenegro.html' },
    { name: 'Zephyr', fit: 'sunRx', src: vsZephyr.url, source: 'https://versport.com/es/proteccion-solar/3586-zephyr-negro-satinadoverde.html' },
    { name: 'Zonda', fit: 'sunRx', src: vsZonda.url, source: 'https://versport.com/es/proteccion-solar/3589-zonda-negronegro.html' },
    { name: 'Alizé', fit: 'sunRx', src: vsAlize.url, source: 'https://versport.com/es/proteccion-solar/3590-alize-negro-satinadoazul.html' },
  ],
  Centrostyle: [
    { name: 'F0257', fit: 'protection', src: csF0257.url, source: 'https://www.centrostyle.com/en/sport-protection-frame--------mod-f0257/product.php?ccod=16336&cod=01709' },
    { name: 'F0345', fit: 'frame', src: csF0345.url, source: 'https://www.centrostyle.com/en/leisure-time-frame-mod-f0345/product.php?ccod=17018&cod=01687' },
    { name: 'F0346', fit: 'frame', src: csF0346.url, source: 'https://www.centrostyle.com/en/leisure-time-frame-mod-f0346/product.php?ccod=17018&cod=01688' },
    { name: 'F0347', fit: 'frame', src: csF0347.url, source: 'https://www.centrostyle.com/en/leisure-time-frame-mod-f0347/product.php?ccod=17018&cod=01689' },
    { name: 'S0548', fit: 'clipIn', src: csS0548.url, source: 'https://www.centrostyle.com/en/nylon-sun-mask-sport/product.php?ccod=17019&cod=02406' },
    { name: 'F0504', fit: 'clipIn', src: csF0504.url, source: 'https://www.centrostyle.com/en/product.php?ccod=17019&cod=02237' },
    { name: 'S0684', fit: 'clipIn', src: csS0684.url, source: 'https://www.centrostyle.com/en/sport-sunglasses-with-cotter-pin-model-s0684/product.php?ccod=17019&cod=02771' },
    { name: 'S0583', fit: 'insert', src: csS0583.url, source: 'https://www.centrostyle.com/en/product.php?ccod=17019&cod=02552' },
    { name: 'S0620', fit: 'clipIn', src: csS0620.url, source: 'https://www.centrostyle.com/en/product.php?ccod=17019&cod=02588' },
    { name: '13585', fit: 'clipIn', src: cs13585.url, source: 'https://www.centrostyle.com/en/sports-glasses-with-sun-lenses/product.php?ccod=17019&cod=00373' },
  ],
};
