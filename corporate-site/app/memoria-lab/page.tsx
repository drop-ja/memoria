import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import Image from "next/image"
import { VisionParallax } from "@/components/vision-parallax"
import { SectionHeader } from "@/components/section-header"

export default function MemoriaLabPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero: ロゴ・社名・大きな画像 */}
        <section className="pt-24 md:pt-32 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border">
              <Image
                src="/welcoming-office-entrance-with-warm-lighting-and-p.jpg"
                alt="Memoria Lab"
                fill
                className="object-cover"
                priority
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              {/* overlay content */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <div className="flex items-center gap-3 md:gap-4 rounded-2xl bg-black/40 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 shadow-lg">
                  <Image src="/placeholder-logo.svg" alt="Memoria Lab ロゴ" width={40} height={40} />
                  <h1 className="text-2xl md:text-4xl font-serif font-bold text-white">メモリアラボ</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 md:py-20 bg-muted relative overflow-hidden">
          <VisionParallax className="absolute inset-0" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground relative z-10">
            <SectionHeader largeTitle="VISION" subtitle="我々のミッション" className="mb-8" />
            <div className="md:max-w-3xl">
              <div className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 p-6 shadow-sm backdrop-blur-sm space-y-4">
                <p className="text-xl md:text-2xl font-medium">
                  かざすだけのデジタル名刺で<br className="hidden md:block" />
                  新しい出会いの文化をつくる
                </p>
                <p className="leading-relaxed">
                  個人がいくつも肩書きを持ち、SNSや複数のコミュニティで自由に活動する現代。繋がりかたは多様化しています。
                </p>
                <p className="leading-relaxed">
                  「プレーリーカード」で、従来の名刺の役割をアップデートする。
                </p>
                <p className="leading-relaxed">
                  肩書にとらわれない個人のさまざまな側面を伝えることで、「はじめまして」のコミュニケーションを豊かにします。
                </p>
                <p className="leading-relaxed">
                  世界一の名刺消費国と言われる日本から、「出会いのイノベーション」を起こし、一人ひとりが輝く社会を目指します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">サービス</h2>
            <Services />
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader largeTitle="COMPANY" subtitle="会社概要" className="mb-8" />
            {/* Table-like Rows */}
            <div>
                <dl className="divide-y rounded-xl border">
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">会社名</dt>
                    <dd className="col-span-9 md:col-span-9">Memoria Lab（メモリアラボ）</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">設立</dt>
                    <dd className="col-span-9 md:col-span-9">2025年</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">代表者</dt>
                    <dd className="col-span-9 md:col-span-9">田中 哉汰</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">資本金</dt>
                    <dd className="col-span-9 md:col-span-9">1,500,000円</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">所在地</dt>
                    <dd className="col-span-9 md:col-span-9">東京都足立区千住旭町38-1-406</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">事業内容</dt>
                    <dd className="col-span-9 md:col-span-9 space-y-2">
                      <p>Ugoke!等の思い出サービス</p>
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">従業員数</dt>
                    <dd className="col-span-9 md:col-span-9">2人</dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-5 md:p-6">
                    <dt className="col-span-3 md:col-span-3 text-muted-foreground">連絡先</dt>
                    <dd className="col-span-9 md:col-span-9">contact@memorialab.co.jp</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
