import astroConfig from "../../astro.config.mjs";

export type Locale = "en";

export const defaultLocale = astroConfig.i18n!.defaultLocale as Locale;

// @dev custom locale paths not supported
export const locales = astroConfig.i18n!.locales as [string, ...string[]];
