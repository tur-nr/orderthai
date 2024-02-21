import { defaultLocale, type Locale } from "./config.ts";
import lang from "./lang.ts";

export function useTranslations(locale: string = defaultLocale) {
  return function t(key: keyof typeof lang) {
    return lang[key][locale as Locale] || lang[key][defaultLocale] || key;
  };
}
