import { z, defineCollection } from "astro:content";

const linkSchema = z.object({
  href: z.string().url(),
  label: z.string(),
});

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().transform((str) => new Date(str)),
  draft: z.boolean().optional().default(false),
});

const projectSchema = z.object({
  title: z.string(),
  year: z.number(),
  description: z.string(),
  website: linkSchema.optional(),
  github: linkSchema.optional(),
  tech: z.array(z.string()),
});

const blog = defineCollection({
  type: "content",
  schema: postSchema,
});

const project = defineCollection({
  type: "data",
  schema: projectSchema,
});

export const collections = {
  blog,
  project,
};

export type Blog = z.infer<typeof postSchema>;
export type Project = z.infer<typeof projectSchema>;
