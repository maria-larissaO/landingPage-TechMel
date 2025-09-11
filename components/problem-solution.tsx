import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Zap } from "lucide-react"

export function ProblemSolution() {
  return (
    <section id="sobre" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-destructive/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h3 className="font-display font-bold text-2xl">O desafio dos apicultores</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A mortalidade de abelhas tem aumentado drasticamente devido às mudanças climáticas, doenças e falta de
                monitoramento adequado. Apicultores perdem até 40% de suas colônias anualmente, impactando a produção de
                mel e a polinização.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="font-display font-bold text-2xl">A solução da TechMel</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sensores IoT instalados nas colmeias coletam dados de temperatura, umidade e atividade em tempo real.
                Nossa plataforma SaaS analisa os dados e envia alertas precoces, permitindo intervenções rápidas e
                eficazes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
