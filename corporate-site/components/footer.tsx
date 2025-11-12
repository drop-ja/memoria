export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-chart-5 to-chart-5/90 text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-[60% 40% 30% 70%/50% 60% 40% 50%] bg-primary/20 blur-2xl" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[250px] h-[250px] rounded-[40% 60% 60% 40%/60% 40% 60% 40%] bg-secondary/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-serif font-semibold">Memoria Lab</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              思い出をテクノロジーで未来へ。
              <br />
              大切な記憶を守り、育て、次世代へ繋ぐお手伝いをします。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">サイトマップ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="/memoria-lab" className="hover:text-primary-foreground transition-colors">
                  メモリアラボ
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-primary-foreground transition-colors">
                  ニュース
                </a>
              </li>
              <li>
                <a href="/recruit" className="hover:text-primary-foreground transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-foreground transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Memoria Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
