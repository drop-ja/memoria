import Image from "next/image"

export function RecruitHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              思い出を未来へ
              <br />
              <span className="text-primary">つなぐ仲間</span>を募集
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Memoria
              Labでは、テクノロジーと温かい心で、大切な思い出を次世代へ届ける仕事をしています。私たちと一緒に、人々の記憶を守り、未来へつなぐ仕事をしませんか。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#positions"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                募集職種を見る
              </a>
              <a
                href="#culture"
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                働く環境を知る
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/happy-diverse-team-working-together-in-modern-offi.jpg" alt="Memoria Labのチーム" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
