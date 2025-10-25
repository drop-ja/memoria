"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MediaItem {
  id: number
  type: "image" | "video"
  src: string
  title: string
}

const mediaItems: MediaItem[] = [
  { id: 1, type: "image", src: "/media/item1.jpg", title: "アイテム 1" },
  { id: 2, type: "video", src: "/media/item2.mp4", title: "アイテム 2" },
  { id: 3, type: "image", src: "/media/item3.jpg", title: "アイテム 3" },
  { id: 4, type: "image", src: "/media/item4.jpg", title: "アイテム 4" },
  { id: 5, type: "video", src: "/media/item5.mp4", title: "アイテム 5" },
  { id: 6, type: "image", src: "/media/item6.jpg", title: "アイテム 6" },
]

export default function CarouselGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!emblaApi || !isAutoPlaying || mediaItems.length <= 1) return

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoPlay)
  }, [emblaApi, isAutoPlaying])

  useEffect(() => {
    if (!emblaApi) return

    const handleSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    const handlePointerDown = () => setIsAutoPlaying(false)

    handleSelect()

    emblaApi.on("select", handleSelect)
    emblaApi.on("reInit", handleSelect)
    emblaApi.on("pointerDown", handlePointerDown)

    return () => {
      emblaApi.off("select", handleSelect)
      emblaApi.off("reInit", handleSelect)
      emblaApi.off("pointerDown", handlePointerDown)
    }
  }, [emblaApi])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    if (emblaApi) {
      emblaApi.scrollPrev()
    } else {
      setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
    }
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    if (emblaApi) {
      emblaApi.scrollNext()
    } else {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }
  }

  const getItemStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff = (diff + mediaItems.length) % mediaItems.length

    if (normalizedDiff === 0) {
      // 中央のアイテム
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
      }
    } else if (normalizedDiff === 1 || normalizedDiff === -mediaItems.length + 1) {
      // 右のアイテム
      return {
        transform: "translateX(70%) scale(0.85) rotateY(-25deg)",
        zIndex: 20,
        opacity: 0.7,
      }
    } else if (normalizedDiff === mediaItems.length - 1 || normalizedDiff === -1) {
      // 左のアイテム
      return {
        transform: "translateX(-70%) scale(0.85) rotateY(25deg)",
        zIndex: 20,
        opacity: 0.7,
      }
    } else if (normalizedDiff === 2 || normalizedDiff === -mediaItems.length + 2) {
      // 右の2番目
      return {
        transform: "translateX(140%) scale(0.7) rotateY(-35deg)",
        zIndex: 10,
        opacity: 0.4,
      }
    } else if (normalizedDiff === mediaItems.length - 2 || normalizedDiff === -2) {
      // 左の2番目
      return {
        transform: "translateX(-140%) scale(0.7) rotateY(35deg)",
        zIndex: 10,
        opacity: 0.4,
      }
    } else {
      // その他
      return {
        transform: "translateX(0) scale(0.5)",
        zIndex: 0,
        opacity: 0,
      }
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* ヘッダー */}
      <header className="relative z-40 flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">DEMO</h1>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <div className="h-2 w-2 rounded-full bg-accent/50" />
          <div className="h-2 w-2 rounded-full bg-accent/30" />
        </div>
      </header>

      {/* カルーセルコンテナ */}
      <div className="relative flex h-[calc(100vh-120px)] items-center justify-center px-4">
        <div className="relative h-[70vh] w-full max-w-md" style={{ perspective: "1500px" }}>
          <div
            ref={emblaRef}
            className="absolute inset-0 z-50 cursor-grab touch-pan-y opacity-0 active:cursor-grabbing"
          >
            <div className="flex h-full w-full">
              {mediaItems.map((item) => (
                <div key={item.id} className="h-full w-full flex-[0_0_100%]" />
              ))}
            </div>
          </div>
          {mediaItems.map((item, index) => {
            const style = getItemStyle(index)
            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 h-[500px] w-[320px] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                style={style}
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-card shadow-2xl">
                  {item.type === "image" ? (
                    <img src={item.src || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
                  ) : (
                    <video src={item.src} className="h-full w-full object-cover" autoPlay loop muted playsInline />
                  )}

                  {/* グラデーションオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* タイトル */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-balance text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ナビゲーションボタン */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-60 h-12 w-12 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-60 h-12 w-12 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* インジケーター */}
      <div className="relative z-40 flex justify-center gap-2 pb-8">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              emblaApi?.scrollTo(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
