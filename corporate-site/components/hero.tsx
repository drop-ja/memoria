import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { MarblePattern } from "@/components/marble-pattern"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <MarblePattern density="medium" animate={true} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-balance leading-tight">
              思い出を、
              <br />
              <span className="text-primary">未来へつなぐ</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
              テクノロジーの力で、大切な思い出に新しい価値を。
              <br />
              Memoria Labは、記憶を未来へ届けるお手伝いをします。
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base px-8 group">
                サービスを見る
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-card">
                お問い合わせ
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/family-memories-photo-album-warm-nostalgic.jpg"
                alt="家族の思い出"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
