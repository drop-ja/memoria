import { Heart, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import { MarblePattern } from "@/components/marble-pattern"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <MarblePattern density="low" animate={true} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-balance">私たちについて</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Memoria Labは、「思い出」という人生で最も大切な宝物を、
            最新のテクノロジーで守り、育て、次世代へと繋いでいく会社です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/digital-technology-meets-warm-memories-vintage-pho.jpg"
              alt="デジタル技術と思い出"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold">テクノロジーと温かみの融合</h3>
            <p className="text-muted-foreground leading-relaxed">
              私たちは、最新のAI技術やクラウドサービスを活用しながらも、
              決して機械的にならない、人の心に寄り添うサービスを提供しています。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              一つひとつの思い出には、かけがえのない物語があります。
              その物語を大切にしながら、未来へと繋いでいくことが私たちの使命です。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 space-y-4 border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">温かみのある技術</h3>
            <p className="text-muted-foreground leading-relaxed">
              冷たいテクノロジーではなく、人の心に寄り添う温かみのあるサービスを提供します。
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 space-y-4 border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">革新的なアプローチ</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI・クラウド・デジタルアーカイブなど、最新技術で思い出に新しい価値を創造します。
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 space-y-4 border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">世代を超えて</h3>
            <p className="text-muted-foreground leading-relaxed">
              家族の絆を深め、世代を超えて思い出を共有できるプラットフォームを目指します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
