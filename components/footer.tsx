import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo-techmel.png"
                alt="TechMel Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-display font-bold text-lg">tech mel</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando a apicultura com tecnologia inteligente para um futuro mais sustentável.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#como-funciona" className="text-muted-foreground hover:text-foreground">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-muted-foreground hover:text-foreground">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#planos" className="text-muted-foreground hover:text-foreground">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#sobre" className="text-muted-foreground hover:text-foreground">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:techmelmt@gmail.com" className="text-muted-foreground hover:text-foreground">
                  techmelmt@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/tech_mel_" className="text-muted-foreground hover:text-foreground">
                  @tech_mel_
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/tech-mel-20mt24"
                  className="text-muted-foreground hover:text-foreground"
                >
                  tech-mel-20mt24
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="contato" className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TechMel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
