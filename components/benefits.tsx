import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, BarChart3, Leaf } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumentar produtividade",
    description: "Otimize as condições da colmeia para maximizar a produção de mel e própolis.",
  },
  {
    icon: Shield,
    title: "Reduzir perdas",
    description: "Alertas precoces permitem intervenções rápidas antes que problemas se agravem.",
  },
  {
    icon: BarChart3,
    title: "Decisões baseadas em dados",
    description: "Relatórios detalhados e análises para tomada de decisões estratégicas.",
  },
  {
    icon: Leaf,
    title: "Contribuir para pesquisa",
    description: "Seus dados ajudam na pesquisa científica para preservação dos polinizadores.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Benefícios para sua apicultura</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme sua operação apícola com tecnologia de ponta e dados precisos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
