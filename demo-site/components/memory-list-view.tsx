"use client"

import { type MediaItem } from "@/lib/media-items"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface MemoryListViewProps {
  items: MediaItem[]
  onBack?: () => void
}

export default function MemoryListView({ items, onBack }: MemoryListViewProps) {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-background">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/40 bg-background/90 px-4 py-4 backdrop-blur">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Memoria</p>
          <h2 className="text-xl font-semibold text-foreground">Memories Flow</h2>
        </div>
        {onBack ? (
          <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
            <ChevronDown className="h-5 w-5" />
          </Button>
        ) : null}
      </header>

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
