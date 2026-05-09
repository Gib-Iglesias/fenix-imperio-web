import en from '@/dictionaries/en.json';
import pt from '@/dictionaries/pt.json';
import es from '@/dictionaries/es.json';

const dictionaries = { en, pt, es };
export const getDictionary = (locale) => dictionaries[locale] || dictionaries.en;
export const locales = ['en', 'pt', 'es'];
export const localeNames = { en: 'English', pt: 'Português', es: 'Español' };
