import { rssSchema } from "@astrojs/rss"
import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: rssSchema,

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional()
  })
})

export const collections = { blog }
