import { defaultLocale, type Locale } from "./config.ts";
import dictionary from "./dictionary.ts";

export function useTranslations(locale: string = defaultLocale) {
  return function t(key: keyof typeof dictionary) {
    return dictionary[key][locale as Locale] || dictionary[key][defaultLocale];
  };
}
