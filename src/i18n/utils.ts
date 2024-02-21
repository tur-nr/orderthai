import { defaultLocale, type Locale } from "./config.ts";
import lang from "./lang.ts";
import type { CollectionEntry } from "astro:content";

export function useLang(locale: string = defaultLocale) {
  return function t(key: keyof typeof lang) {
    return lang[key][locale as Locale] || lang[key][defaultLocale] || key;
  };
}

export function useTranslation(
  t: CollectionEntry<"translation">,
  locale: string = defaultLocale,
): {
  thai: string;
  transliteration: string;
  title: string;
  text: string;
  transcription: string;
} {
  const lang = t.data.i18n?.[locale];

  return {
    thai: t.data.thai,
    transliteration: t.data.transliteration,
    title: lang?.title ?? t.data.title,
    text: lang?.text ?? t.data.text,
    transcription: lang?.transcription ?? t.data.transcription,
  };
}
