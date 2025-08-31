"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">CognisentAI</span>
              <div className="bg-white p-3 rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cognisent_Logo-FRG7ZmlQJEV8MciDH6fadeHR9DKvg5.png"
                  alt="CognisentAI Logo"
                  width={300}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-base">Empowering businesses with vertical AI solutions.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/propertypilot" className="text-base text-gray-300 hover:text-white">
                      PropertyPilot
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      AI Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Custom AI Development
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Documentation</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/docs/tutorials/using-propertypilot"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Using PropertyPilot
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/tutorials/building-custom-ai-models"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Building Custom AI Models
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/tutorials/integrating-cognisentai"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Integrating CognisentAI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2025 CognisentAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
