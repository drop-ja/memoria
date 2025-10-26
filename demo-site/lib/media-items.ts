export type MediaItemType = "image" | "video"

export interface MediaItem {
  id: number
  type: MediaItemType
  src: string
  title: string
}

export const mediaItems: MediaItem[] = [
  { id: 1, type: "image", src: "/ai-media/item1.webp", title: "アイテム 1" },
  { id: 2, type: "video", src: "/ai-media/item2.webm", title: "アイテム 2" },
  { id: 3, type: "image", src: "/ai-media/item3.webp", title: "アイテム 3" },
  { id: 4, type: "image", src: "/ai-media/item4.webp", title: "アイテム 4" },
  { id: 5, type: "video", src: "/ai-media/item5.webm", title: "アイテム 5" },
  { id: 6, type: "image", src: "/ai-media/item6.webp", title: "アイテム 6" },
]
