import type React from "react"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Chatbot } from "./components/Chatbot"
import "./globals.css"

export const metadata = {
  title: {
    default: "CognisentAI - Vertical AI Solutions for Business",
    template: "%s | CognisentAI",
  },
  description:
    "CognisentAI empowers businesses with industry-specific AI solutions, automating workflows and driving innovation.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-[88px]">
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
