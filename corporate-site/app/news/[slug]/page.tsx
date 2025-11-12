import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { getAllNews, getNewsBySlug } from "@/lib/news"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slug) {
    notFound()
  }
  let meta: Awaited<ReturnType<typeof getNewsBySlug>>["meta"]
  let html: Awaited<ReturnType<typeof getNewsBySlug>>["html"]
  try {
    const data = await getNewsBySlug(slug)
    meta = data.meta
    html = data.html
  } catch {
    notFound()
  }
  const all = getAllNews().filter((n) => n.slug !== meta.slug).slice(0, 3)
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article>
          {/* Hero */}
          <section className="relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative aspect-[16/7] md:aspect-[16/6] rounded-3xl overflow-hidden border">
                {meta.image ? (
                  <Image src={meta.image} alt={meta.title} fill className="object-cover" priority />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs text-white mb-3">
                    {meta.date}
                  </div>
                  <h1 className="text-2xl md:text-4xl font-serif font-bold text-white drop-shadow-sm">{meta.title}</h1>
                </div>
              </div>
            </div>
          </section>
          {/* Body */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <Link href="/news" className="text-sm text-muted-foreground hover:text-primary">
                    ← ニュース一覧へ
                  </Link>
                </div>
                <div className="rounded-2xl bg-card border p-6 md:p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
                    {meta.category && <span className="rounded-full bg-muted px-2 py-0.5">{meta.category}</span>}
                    <time>{meta.date}</time>
                    {meta.author && <span>by {meta.author}</span>}
                    {meta.readMins && <span>{meta.readMins} min</span>}
                  </div>
                  <div
                    className="prose prose-neutral dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Related */}
          {all.length > 0 && (
            <section className="pb-16 md:pb-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-semibold mb-6">関連記事</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {all.map((n) => (
                    <Link key={n.slug} href={`/news/${n.slug}`} className="group overflow-hidden rounded-2xl border bg-card hover:shadow-md transition-all">
                      <div className="relative aspect-[16/10]">
                        {n.image && <Image src={n.image} alt={n.title} fill className="object-cover group-hover:scale-[1.02] transition-transform" />}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="p-4 space-y-1">
                        <time className="text-[11px] text-muted-foreground">{n.date}</time>
                        <div className="text-sm font-medium group-hover:text-primary line-clamp-2">{n.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  const slugs = getAllNews().map((n) => ({ slug: n.slug }))
  return slugs
}

