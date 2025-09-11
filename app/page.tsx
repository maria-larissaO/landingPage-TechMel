import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolution } from "@/components/problem-solution"
import { Benefits } from "@/components/benefits"
import { Differentials } from "@/components/differentials"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <Benefits />
      <Differentials />
      <Pricing />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
