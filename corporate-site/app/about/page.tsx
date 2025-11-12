import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  )
}


