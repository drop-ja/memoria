import { Card, CardContent } from "@/components/ui/card"
import { Database, ImageIcon, BookOpen, Video } from "lucide-react"
import Image from "next/image"
import { MarblePattern } from "@/components/marble-pattern"
import { SectionHeader } from "@/components/section-header"

const services = [
  {
    icon: Database,
    title: "デジタルアーカイブ",
    description: "写真や動画、手紙などの大切な思い出を、安全にデジタル化して永久保存します。",
    image: "/digital-archive-cloud-storage-photos.jpg",
    color: "primary",
  },
  {
    icon: ImageIcon,
    title: "AI写真修復・カラー化",
    description: "古い写真を最新のAI技術で修復し、色鮮やかに蘇らせます。",
    image: "/old-photo-restoration-colorization-ai.jpg",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "ファミリーヒストリー作成",
    description: "家族の歴史を美しいデジタルブックにまとめ、次世代へ継承します。",
    image: "/family-history-book-digital-album.jpg",
    color: "accent",
  },
  {
    icon: Video,
    title: "メモリアルビデオ制作",
    description: "思い出の写真や動画から、心に残る記念ビデオを制作します。",
    image: "/memorial-video-slideshow-memories.jpg",
    color: "chart-4",
  },
]

const iconColorClasses = {
  primary: "bg-primary/15 text-primary",
  secondary: "bg-secondary/15 text-secondary",
  accent: "bg-accent/15 text-accent",
  "chart-4": "bg-chart-4/15 text-chart-4",
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <MarblePattern density="medium" animate={true} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          largeTitle="SERVICES"
          subtitle="サービス"
          description="思い出を守り、育て、共有するための様々なソリューションをご提供しています。AIとデザインの力で、写真や映像に新しい価値を吹き込みます。"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-border"
            >
              <div className="relative aspect-video">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-white shadow-md bg-white/15 border border-white/20 backdrop-blur">
                    <service.icon className="h-4 w-4" />
                    <span className="text-xs font-medium">{service.title}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card text-foreground border border-primary/30 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-4 relative">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-balance relative z-10">
                あなたの思い出を、私たちにお任せください
              </h3>
              <p className="text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto relative z-10">
                一つひとつの思い出に丁寧に向き合い、最高のサービスを提供いたします。 まずはお気軽にご相談ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
