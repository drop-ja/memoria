"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { MarblePattern } from "@/components/marble-pattern"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <MarblePattern density="low" animate={true} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-balance">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            サービスに関するご質問やご相談は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/-----------------------.jpg" alt="Memoria Lab オフィス" fill className="object-cover" />
            </div>

            <div className="space-y-6 bg-card p-6 rounded-3xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">メールアドレス</h3>
                  <p className="text-muted-foreground">info@memoria-lab.jp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">電話番号</h3>
                  <p className="text-muted-foreground">03-1234-5678</p>
                  <p className="text-sm text-muted-foreground mt-1">平日 10:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">所在地</h3>
                  <p className="text-muted-foreground">
                    〒150-0001
                    <br />
                    東京都渋谷区神宮前1-2-3
                    <br />
                    メモリアビル 5F
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-3xl border border-border shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name">お名前</Label>
              <Input
                id="name"
                placeholder="山田 太郎"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">お問い合わせ内容</Label>
              <Textarea
                id="message"
                placeholder="お問い合わせ内容をご記入ください"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="rounded-2xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">
              送信する
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
