import { z, defineCollection, reference } from "astro:content";

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

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

const categories = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    authors: z.array(reference("authors")),
    title: z.string(),
    meta: z.optional(z.record(z.string())),
    categories: z.array(reference("categories")),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    createdAt: z.date().transform((v) => new Date(v)),
    updatedAt: z.date().transform((v) => new Date(v)),
  }),
});

export const collections = {
  docs: docs,
  authors: authors,
  categories: categories,
  blogs: blogs,
};
