import { z, defineCollection } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    group: z.string(),
    order: z.optional(z.number()),
    text: z.string(),
    title: z.string(),
    lead: z.optional(z.string()),
    wip: z.optional(z.boolean()),
    meta: z.optional(z.record(z.string())),
    ping: z.optional(z.boolean()),
    keywords: z.optional(z.string()),
    request: z.optional(z.literal(false)),
  }),
});

export const collections = {
  docs: docs,
};
