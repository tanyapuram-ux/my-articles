import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Entrepreneurship & Business', 'Founder Interviews', 'Tech & AI']),
    url: z.string().url(),
    coverImage: z.string().refine((value) => value.startsWith('/') || /^https?:\/\//.test(value), {
      message: 'Expected a root-relative path or absolute URL',
    }).optional(),
    featured: z.boolean().optional(),
    reads: z.number().int().nonnegative().optional(),
    claps: z.number().int().nonnegative().optional(),
  }),
});

export const collections = { articles };
