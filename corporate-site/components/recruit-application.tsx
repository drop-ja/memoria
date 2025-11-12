"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function RecruitApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("応募フォーム送信:", formData)
    alert("ご応募ありがとうございます。担当者より折り返しご連絡いたします。")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="application" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance">一緒に働きませんか</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Memoria
              Labでは、情熱を持って働ける仲間を募集しています。まずはお気軽にご応募ください。カジュアル面談も歓迎です。
            </p>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/welcoming-office-entrance-with-warm-lighting-and-p.jpg" alt="オフィスエントランス" fill className="object-cover" />
            </div>
          </div>

          <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">応募フォーム</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">お名前 *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">希望職種 *</Label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">選択してください</option>
                  <option value="frontend">フロントエンドエンジニア</option>
                  <option value="backend">バックエンドエンジニア</option>
                  <option value="designer">デザイナー</option>
                  <option value="support">カスタマーサポート</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">メッセージ</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="志望動機や自己PRなどをご記入ください"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full rounded-full" size="lg">
                応募する
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ご入力いただいた個人情報は、採用選考のみに使用いたします
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
