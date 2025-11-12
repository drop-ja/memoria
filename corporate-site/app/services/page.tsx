import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  )
}


