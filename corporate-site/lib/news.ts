import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export type NewsMeta = {
  slug: string
  title: string
  date: string
  image?: string
  excerpt?: string
  category?: string
  author?: string
  ogImage?: string
  draft?: boolean
  readMins?: number
}

const contentDir = path.join(process.cwd(), "content", "news")

export function getNewsSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getAllNews(): NewsMeta[] {
  const slugs = getNewsSlugs()
  const items = slugs
    .map((slug) => {
      const fullPath = path.join(contentDir, `${slug}.md`)
      const file = fs.readFileSync(fullPath, "utf-8")
      const { data, content } = matter(file)
      const words = content.trim().split(/\s+/).length
      const readMins = Math.max(1, Math.round(words / 400))
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        image: data.image ? String(data.image) : undefined,
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
        category: data.category ? String(data.category) : undefined,
        author: data.author ? String(data.author) : undefined,
        ogImage: data.ogImage ? String(data.ogImage) : undefined,
        draft: data.draft === true,
        readMins,
      } as NewsMeta
    })
    .filter((n) => !n.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  return items
}

export async function getNewsBySlug(slug: string): Promise<{ meta: NewsMeta; html: string }> {
  if (!slug) {
    throw new Error("invalid slug")
  }
  let targetSlug = slug
  let fullPath = path.join(contentDir, `${targetSlug}.md`)
  if (!fs.existsSync(fullPath)) {
    // fallback: allow linking without date prefix (e.g. "site-open" → "2025-11-01-site-open")
    const candidates = getNewsSlugs()
    const found = candidates.find((s) => s === slug || s.endsWith(`-${slug}`))
    if (found) {
      targetSlug = found
      fullPath = path.join(contentDir, `${targetSlug}.md`)
    } else {
      throw new Error(`news not found: ${slug}`)
    }
  }
  const file = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(file)
  const processed = await remark().use(html).process(content)
  const meta: NewsMeta = {
    slug: targetSlug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    image: data.image ? String(data.image) : undefined,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    category: data.category ? String(data.category) : undefined,
    author: data.author ? String(data.author) : undefined,
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    draft: data.draft === true,
    readMins: Math.max(1, Math.round(content.trim().split(/\s+/).length / 400)),
  }
  return { meta, html: String(processed) }
}

