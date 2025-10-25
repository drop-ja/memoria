"use client"

import { useEffect, useRef } from "react"

interface VideoIntroProps {
  onComplete: () => void
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      onComplete()
    }

    video.addEventListener("ended", handleEnded)
    return () => video.removeEventListener("ended", handleEnded)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        onClick={() => onComplete()}
      >
        <source src="/media/intro.webm" type="video/webm" />
      </video>

      {/* スキップボタン */}
      {/* <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        スキップ
      </button> */}
    </div>
  )
}
