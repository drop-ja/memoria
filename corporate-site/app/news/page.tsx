import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { getAllNews } from "@/lib/news"

export default function NewsPage() {
  const items = getAllNews()
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-10">
              <div className="md:col-span-5">
                <h1 className="text-3xl md:text-5xl font-serif font-bold">ニュース</h1>
              </div>
              <div className="md:col-span-7">
                <p className="text-muted-foreground">
                  最新のお知らせやアップデート情報を掲載しています。各記事はMarkdownで管理され、画像とともに表示されます。
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((n) => (
                <Link key={n.slug} href={`/news/${n.slug}`} className="group block overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {n.image && <Image src={n.image} alt={n.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-300" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2">
                      {n.category && <span className="rounded-full bg-white/85 text-foreground px-2.5 py-1 text-[11px] shadow-sm">{n.category}</span>}
                      <span className="rounded-full bg-white/85 text-foreground px-2.5 py-1 text-[11px] shadow-sm">{n.date}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="text-base font-semibold group-hover:text-primary line-clamp-2">{n.title}</div>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      {n.author && <span>by {n.author}</span>}
                      {n.readMins && <span>{n.readMins} min</span>}
                    </div>
                    {n.excerpt && <p className="text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

