import Image from "next/image"
import { Heart, Users, Lightbulb, Sparkles } from "lucide-react"

export function RecruitCulture() {
  const values = [
    {
      icon: Heart,
      title: "温かい心",
      description: "お客様の大切な思い出に寄り添い、心を込めてサービスを提供します",
      color: "bg-primary",
    },
    {
      icon: Lightbulb,
      title: "革新的な技術",
      description: "最新のテクノロジーを活用し、より良いサービスを追求します",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "チームワーク",
      description: "多様なバックグラウンドを持つメンバーが協力し合う環境です",
      color: "bg-accent",
    },
    {
      icon: Sparkles,
      title: "成長の機会",
      description: "新しいスキルを学び、キャリアを発展させる機会が豊富です",
      color: "bg-secondary/70",
    },
  ]

  return (
    <section id="culture" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Memoria Labで働く魅力
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            私たちは、温かい雰囲気の中で最先端の技術に触れながら成長できる環境を提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${value.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/modern-office-interior-with-warm-lighting-and-coll.jpg" alt="オフィス環境" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">働きやすい環境</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">フレックスタイム制</h4>
                  <p className="text-muted-foreground">ライフスタイルに合わせた柔軟な働き方が可能です</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">リモートワーク対応</h4>
                  <p className="text-muted-foreground">週2〜3日のリモートワークが可能です</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">充実した福利厚生</h4>
                  <p className="text-muted-foreground">健康保険、交通費全額支給、書籍購入補助など</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">スキルアップ支援</h4>
                  <p className="text-muted-foreground">研修制度、資格取得支援、カンファレンス参加費補助</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
