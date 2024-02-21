import { defineCollection, z } from "astro:content";
import { locales } from "../i18n/config.ts";

const translation = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    text: z.string(),
    thai: z.string(),
    transliteration: z.string(),
    transcription: z.string(),
    i18n: z
      .record(
        z.enum(locales),
        z.object({
          title: z.string(),
          text: z.string(),
          transcription: z.string(),
        }),
      )
      .nullable(),
  }),
});

export const collections = {
  translation,
};
