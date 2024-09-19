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
    submenu: z.optional(
      z.array(
        z.object({
          href: z.string(),
          text: z.string(),
          target: z.optional(z.enum(["_self", "_blank", "_parent", "_top"])),
        }),
      ),
    ),
  }),
});

export const collections = {
  docs: docs,
};
