import { z, defineCollection } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    group: z.string(),
    order: z.optional(z.number()),
    text: z.string(),
    title: z.string(),
    meta: z.optional(z.record(z.string())),
    badge: z.optional(z.string()),
  }),
});

export const collections = {
  docs: docs,
};
