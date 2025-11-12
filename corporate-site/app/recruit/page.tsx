import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RecruitHero } from "@/components/recruit-hero"
import { RecruitCulture } from "@/components/recruit-culture"
import { RecruitPositions } from "@/components/recruit-positions"
import { RecruitApplication } from "@/components/recruit-application"

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <RecruitHero />
        <RecruitCulture />
        <RecruitPositions />
        <RecruitApplication />
      </main>
      <Footer />
    </div>
  )
}
