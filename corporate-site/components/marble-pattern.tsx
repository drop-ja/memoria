// @ts-nocheck
"use client"

import React, { useEffect, useState } from "react"

interface PebbleBlob {
  id: number
  size: number
  x: number
  y: number
  color: string
  opacity: number
  delay: number
  url: string
  rotation: number
}

interface MarblePatternProps {
  density?: "low" | "medium" | "high"
  animate?: boolean
}

export function MarblePattern({ density = "medium", animate = true }: MarblePatternProps) {
  const [pebbles, setPebbles] = useState<PebbleBlob[]>([])
  // 直接SVGファイル（外部アセット）を使う

  // テーマカラーを使用
  const colors = [
    "var(--primary)",   // #E76241
    "var(--secondary)", // #2FA5FF
    "var(--accent)",    // #DE9C9C
  ]

  // public/blobs に配置したSVGファイルのURL一覧（12個）
  const blobUrls: string[] = Array.from({ length: 12 }, (_, i) => `/blobs/blob-${String(i + 1).padStart(2, "0")}.svg`)

  // 外部SVGをそのまま使うための前処理は不要

  useEffect(() => {
    const marbleCount = density === "low" ? 5 : density === "medium" ? 8 : 11
    const newPebbles: PebbleBlob[] = []

    for (let i = 0; i < marbleCount; i++) {
      // 三角形向けにやや小さめにし、配置は画面全体に分散
      const size = Math.random() * 140 + 80 // 80px ~ 220px
      const x = Math.random() * 100
      const y = Math.random() * 100
      const color = colors[Math.floor(Math.random() * colors.length)]
      const opacity = Math.random() * 0.2 + 0.15 // 0.15 ~ 0.35
      const delay = Math.random() * 2
      const url = blobUrls[Math.floor(Math.random() * blobUrls.length)]
      const rotation = Math.floor(Math.random() * 360)

      newPebbles.push({ id: i, size, x, y, color, opacity, delay, url, rotation })
    }

    setPebbles(newPebbles)
  }, [density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pebbles.map((pebble: PebbleBlob) => (
        <div
          key={pebble.id}
          className={`${animate ? "animate-float" : ""} absolute`}
          style={{
            left: `${pebble.x}%`,
            top: `${pebble.y}%`,
            position: "absolute",
            transform: `translate(-50%, -50%)`,
            animationDelay: `${pebble.delay}s`,
            filter: "blur(0px)",
            opacity: pebble.opacity,
          }}
          >
          <div
            aria-hidden="true"
            style={{
              width: `${pebble.size}px`,
              height: `${pebble.size}px`,
              transform: `rotate(${pebble.rotation}deg)`,
              display: "block",
              backgroundColor: pebble.color,
              WebkitMaskImage: `url(${pebble.url})`,
              maskImage: `url(${pebble.url})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      ))}
    </div>
  )
}
