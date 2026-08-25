import 'server-only';

const dictionaries = {
  en: () => import('../locales/en.json').then((m) => m.default),
  nl: () => import('../locales/nl.json').then((m) => m.default),
};

export const getDictionary = async (locale: string) => {
  const lang = locale.split('-')[0].toLowerCase();

  if (lang in dictionaries) {
    return dictionaries[lang as keyof typeof dictionaries]();
  }

  return dictionaries.en(); // Fallback to English
};