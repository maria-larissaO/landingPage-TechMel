import { Card, CardContent } from "@/components/ui/card"
import { Gauge, Clock, Smartphone, Brain } from "lucide-react"

const differentials = [
  {
    icon: Gauge,
    title: "Sensores precisos",
    description: "Tecnologia de alta precisão para medições confiáveis de temperatura, umidade e atividade.",
  },
  {
    icon: Clock,
    title: "Monitoramento em tempo real",
    description: "Dados atualizados a cada minuto, permitindo resposta imediata a mudanças críticas.",
  },
  {
    icon: Smartphone,
    title: "Plataforma intuitiva",
    description: "Interface web e mobile simples e intuitiva, acessível de qualquer lugar.",
  },
  {
    icon: Brain,
    title: "Inteligência artificial",
    description: "IA avançada para prever doenças e otimizar as condições da colmeia automaticamente.",
  },
]

export function Differentials() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Nossos diferenciais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta desenvolvida especificamente para apicultura moderna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((differential, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <differential.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{differential.title}</h3>
                <p className="text-sm text-muted-foreground">{differential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
