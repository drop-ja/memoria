"use client"

import { useState } from "react"
import VideoIntro from "@/components/video-intro"
import CarouselGallery from "@/components/carousel-gallery"

export default function HomePage() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {!showContent ? <VideoIntro onComplete={() => setShowContent(true)} /> : <CarouselGallery />}
    </main>
  )
}
