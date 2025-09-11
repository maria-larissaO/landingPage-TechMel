import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 89",
    period: "/mês",
    description: "Ideal para pequenos apicultores",
    features: [
      "Até 5 colmeias",
      "Monitoramento básico",
      "Alertas por email",
      "Relatórios mensais",
      "Suporte por email",
    ],
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$ 189",
    period: "/mês",
    description: "Para grandes produtores",
    features: [
      "Até 25 colmeias",
      "Monitoramento avançado",
      "Alertas em tempo real",
      "Relatórios semanais",
      "IA para previsões",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Pesquisa",
    price: "Sob consulta",
    period: "",
    description: "Para instituições científicas",
    features: [
      "Colmeias ilimitadas",
      "API completa",
      "Dados históricos",
      "Análises customizadas",
      "Suporte dedicado",
      "Integração personalizada",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Escolha seu plano</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para atender desde pequenos apicultores até grandes operações
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Sob consulta" ? "Entrar em Contato" : "Assinar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
