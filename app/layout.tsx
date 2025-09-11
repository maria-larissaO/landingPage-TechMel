import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "TechMel - Monitoramento Inteligente de Colmeias",
  description:
    "Reduza em até 40% a mortalidade de abelhas com sensores IoT e monitoramento em tempo real. Aumente a produtividade e contribua para a preservação dos polinizadores.",
  keywords: "apicultura inteligente, monitoramento de colmeias, sensores IoT abelhas, TechMel",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
