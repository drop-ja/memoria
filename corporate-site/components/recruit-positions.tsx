import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function RecruitPositions() {
  const positions = [
    {
      title: "フロントエンドエンジニア",
      department: "開発部",
      type: "正社員",
      location: "東京 / リモート可",
      description:
        "React、Next.jsを使用したWebアプリケーションの開発を担当していただきます。ユーザー体験を重視した、温かみのあるUIの実装をお願いします。",
      requirements: ["React、Next.jsの実務経験2年以上", "TypeScriptの知識", "レスポンシブデザインの実装経験"],
      preferred: ["デザインシステムの構築経験", "アクセシビリティへの理解", "UIライブラリの開発経験"],
    },
    {
      title: "バックエンドエンジニア",
      department: "開発部",
      type: "正社員",
      location: "東京 / リモート可",
      description:
        "Node.js、PostgreSQLを使用したAPIの設計・開発を担当していただきます。大量の画像・動画データを扱うシステムの構築経験があると尚可です。",
      requirements: ["Node.jsの実務経験2年以上", "データベース設計の経験", "RESTful APIの設計・開発経験"],
      preferred: ["クラウドサービス（AWS、GCP）の利用経験", "画像・動画処理の知識", "マイクロサービスの開発経験"],
    },
    {
      title: "デザイナー",
      department: "デザイン部",
      type: "正社員",
      location: "東京 / リモート可",
      description:
        "Webサイトやアプリケーションのデザインを担当していただきます。温かみとスタイリッシュさを両立させたデザインを一緒に作りましょう。",
      requirements: ["UI/UXデザインの実務経験2年以上", "Figmaの使用経験", "デザインシステムの理解"],
      preferred: ["モーションデザインのスキル", "フロントエンド開発の知識", "ブランディングの経験"],
    },
    {
      title: "カスタマーサポート",
      department: "カスタマーサクセス部",
      type: "正社員 / 契約社員",
      location: "東京",
      description:
        "お客様からのお問い合わせ対応や、サービスの使い方のサポートを担当していただきます。お客様の大切な思い出に寄り添う仕事です。",
      requirements: ["接客・カスタマーサポートの経験", "丁寧なコミュニケーション能力", "PCの基本操作"],
      preferred: ["IT業界での経験", "写真・動画編集の知識", "高齢者対応の経験"],
    },
  ]

  return (
    <section id="positions" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">募集職種</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            現在募集中のポジションです。あなたのスキルを活かして、私たちと一緒に働きませんか
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      {position.type}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {position.location}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{position.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">必須要件</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">歓迎要件</h4>
                  <ul className="space-y-1">
                    {position.preferred.map((pref, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {pref}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="#application"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  この職種に応募する
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
