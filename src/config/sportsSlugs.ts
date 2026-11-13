import type { Language } from './languages';

/** Localized, Poblenou-targeted slugs for the prescription sports glasses landing. */
export const SPORTS_SLUGS: Record<Language, string> = {
  ca: 'ulleres-esportives-graduades-poblenou',
  es: 'gafas-deportivas-graduadas-poblenou',
  en: 'prescription-sports-glasses-poblenou',
  de: 'sportbrillen-mit-sehstaerke-poblenou',
  it: 'occhiali-sportivi-graduati-poblenou',
};

export const sportsPath = (lang: Language) => `/${lang}/${SPORTS_SLUGS[lang]}`;
