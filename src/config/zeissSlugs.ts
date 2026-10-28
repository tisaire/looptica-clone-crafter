import type { Language } from './languages';

/** Localized, Poblenou-targeted slugs for the ZEISS progressive lenses landing. */
export const ZEISS_SLUGS: Record<Language, string> = {
  ca: 'progressius-zeiss-poblenou',
  es: 'progresivos-zeiss-poblenou',
  en: 'zeiss-progressive-lenses-poblenou',
  de: 'zeiss-gleitsichtglaeser-poblenou',
};

export const zeissPath = (lang: Language) => `/${lang}/${ZEISS_SLUGS[lang]}`;
