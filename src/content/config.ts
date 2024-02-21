import { defineCollection, reference, z } from "astro:content";
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

const category = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      translation: reference("translation"),
      cover: image(),
    }),
});

const dish = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      translation: reference("translation"),
      category: reference("category"),
      spice: z.number().max(5).min(0),
      description: z.string(),
      covers: z.array(image()).nullable(),
      ingredients: z.array(z.string()).nullable(),
    }),
});

export const collections = {
  translation,
  category,
  dish,
};
