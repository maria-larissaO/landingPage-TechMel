import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo-techmel.png"
            alt="TechMel Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-display font-bold text-xl text-foreground">tech mel</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
            Benefícios
          </Link>
          <Link href="#planos" className="text-sm font-medium hover:text-primary transition-colors">
            Planos
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Cadastrar-se</Button>
        </div>
      </div>
    </header>
  )
}
