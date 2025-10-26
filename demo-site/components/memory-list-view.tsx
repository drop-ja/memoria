"use client"

import { useCallback, useEffect, useRef, type TouchEvent, type WheelEvent } from "react"
import { type MediaItem } from "@/lib/media-items"
import { ChevronDown } from "lucide-react"

interface MemoryListViewProps {
  items: MediaItem[]
  onBack?: () => void
}

export default function MemoryListView({ items, onBack }: MemoryListViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const touchStartYRef = useRef<number | null>(null)
  const alreadyTriggeredRef = useRef(false)
  const wheelDeltaRef = useRef(0)
  const touchStartAtTopRef = useRef(false)
  const wheelStartAtTopRef = useRef(false)

  useEffect(() => {
    alreadyTriggeredRef.current = false
    wheelDeltaRef.current = 0
    touchStartAtTopRef.current = false
    wheelStartAtTopRef.current = false
  }, [])

  const isAtTop = useCallback(() => {
    const container = containerRef.current
    const atContainerTop = (container?.scrollTop ?? 0) <= 0
    const atPageTop = typeof window !== "undefined" ? window.scrollY <= 0 : true
    return atContainerTop && atPageTop
  }, [])

  const triggerReturn = useCallback(() => {
    if (!onBack || alreadyTriggeredRef.current) return

    alreadyTriggeredRef.current = true
    wheelDeltaRef.current = 0
    touchStartYRef.current = null
    onBack()
  }, [onBack])

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      if (!onBack) return
      const container = containerRef.current
      if (!container) return

      if (!isAtTop()) {
        wheelDeltaRef.current = 0
        alreadyTriggeredRef.current = false
        wheelStartAtTopRef.current = false
        return
      }

      // 判定開始時点でトップにいた場合のみ、上方向スクロールで戻るを許可
      if (event.deltaY < 0) {
        if (wheelDeltaRef.current === 0) {
          wheelStartAtTopRef.current = isAtTop()
        }
        if (!wheelStartAtTopRef.current) return

        wheelDeltaRef.current += event.deltaY
        if (wheelDeltaRef.current <= -180) {
          triggerReturn()
        }
      } else if (event.deltaY > 0) {
        wheelDeltaRef.current = 0
        alreadyTriggeredRef.current = false
        wheelStartAtTopRef.current = false
      }
    },
    [onBack, triggerReturn, isAtTop],
  )

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    if (!onBack) return
    touchStartYRef.current = event.touches[0]?.clientY ?? null
    touchStartAtTopRef.current = isAtTop()
  }, [onBack, isAtTop])

  const handleTouchMove = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (!onBack) return
      if (touchStartYRef.current == null) return
      const container = containerRef.current
      if (!container) return

      if (!isAtTop()) {
        // スクロール中（トップでない）なら戻る判定はしない
        touchStartYRef.current = event.touches[0]?.clientY ?? null
        alreadyTriggeredRef.current = false
        return
      }

      // タッチ開始時にトップでなければ戻るを許可しない
      if (!touchStartAtTopRef.current) return

      const currentY = event.touches[0]?.clientY
      if (currentY == null) return

      const diff = touchStartYRef.current - currentY

      if (diff <= -80) {
        triggerReturn()
        touchStartYRef.current = null
      } else if (diff > 0) {
        alreadyTriggeredRef.current = false
      }
    },
    [onBack, triggerReturn, isAtTop],
  )

  const handleTouchEnd = useCallback(() => {
    touchStartYRef.current = null
    wheelDeltaRef.current = 0
    touchStartAtTopRef.current = false
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-y-auto overscroll-y-contain bg-background"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
            {/* リストビューへの誘導（上方向） */}
      <div className="pointer-events-none absolute inset-x-0 top-12 z-40 flex justify-center text-muted-foreground/80">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-4 pb-24 pt-12">
        {items.map((item, index) => (
          <section key={item.id} className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/60 font-semibold text-secondary-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">Memory</p>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/40 bg-card shadow-xl shadow-primary/5">
              {item.type === "image" ? (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
              )}
            </div>
          </section>
        ))}
      </div>


    </div>
  )
}
