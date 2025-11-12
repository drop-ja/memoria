// @ts-nocheck
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Shape = {
  id: number
  size: number
  x: number
  y: number
  url: string
  color: string
  amplitudeX: number
  amplitudeY: number
  phase: number
  opacity: number
  rotation: number
}

export function VisionParallax({ className = '', count = 6 }: { className?: string; count?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [motionScale, setMotionScale] = useState(1)
  const [localCount, setLocalCount] = useState(count)
  const [reduced, setReduced] = useState(false)

  const shapes: Shape[] = useMemo(() => {
    const urls = Array.from({ length: 12 }, (_, i) => `/blobs/blob-${String(i + 1).padStart(2, '0')}.svg`)
    const palette = ['var(--primary)', 'var(--secondary)', 'var(--accent)']
    return Array.from({ length: localCount }).map((_, i) => ({
      id: i,
      size: 60 + Math.random() * 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      url: urls[Math.floor(Math.random() * urls.length)],
      color: palette[Math.floor(Math.random() * palette.length)],
      amplitudeX: (Math.random() * 14 + 8) * (Math.random() > 0.5 ? 1 : -1),
      amplitudeY: (Math.random() * 8 + 4) * (Math.random() > 0.5 ? 1 : -1),
      phase: Math.random() * Math.PI * 2,
      opacity: 0.08 + Math.random() * 0.12,
      rotation: Math.floor(Math.random() * 360),
    }))
  }, [localCount])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // 0 when section bottom is at top, 1 when section top is at bottom
      const total = rect.height + vh
      const p = Math.min(1, Math.max(0, 1 - (rect.top + rect.height) / total))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setLocalCount(w < 768 ? Math.max(3, Math.floor(count * 0.6)) : count)
      setMotionScale(w < 768 ? 0.55 : 1)
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    update()
    window.addEventListener('resize', update)
    return () => {
      media.removeEventListener('change', onChange)
      window.removeEventListener('resize', update)
    }
  }, [count])

  const ease = (t: number) => t * (2 - t)

  return (
    <div ref={ref} className={className}>
      <div className="absolute inset-0 pointer-events-none">
        {shapes.map((s) => {
          const e = reduced ? 0 : ease(progress)
          const tx = s.x + s.amplitudeX * e * motionScale
          const ty = s.y + s.amplitudeY * e * motionScale
          return (
            <div
              key={s.id}
              className="absolute"
              style={{
                left: `${tx}%`,
                top: `${ty}%`,
                transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
                width: s.size,
                height: s.size,
                opacity: s.opacity,
                backgroundColor: s.color,
                mixBlendMode: 'multiply',
                WebkitMaskImage: `url(${s.url})`,
                maskImage: `url(${s.url})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                filter: 'blur(0px)',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

