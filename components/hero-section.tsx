import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight">
                Monitoramento inteligente para suas <span className="text-primary">colmeias</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reduza em até 40% a mortalidade de abelhas, aumente a produtividade e contribua para a preservação dos
                polinizadores com nossa tecnologia IoT.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Login
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Cadastrar-se
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Monitoramento 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Alertas em tempo real</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>IA integrada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <Image
                src="/images/app-screens.jpeg"
                alt="Telas do aplicativo TechMel"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
