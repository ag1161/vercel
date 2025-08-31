"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">CognisentAI</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cognisent_Logo-FRG7ZmlQJEV8MciDH6fadeHR9DKvg5.png"
                alt="CognisentAI Logo"
                width={300}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={handleMenuToggle} className={`text-gray-900 hover:bg-transparent`}>
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200`}
              >
                {item}
              </Link>
            ))}
            <div className="relative group">
              <button
                className={`text-base font-medium inline-flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200`}
              >
                Verticals
                <svg
                  className={`ml-2 h-5 w-5 text-gray-600`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link
                      href="/propertypilot"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      role="menuitem"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">PropertyPilot</p>
                        <p className="mt-1 text-sm text-gray-500">AI-powered real estate management and analysis</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/get-started">
              <Button
                variant="default"
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cognisent_Logo-FRG7ZmlQJEV8MciDH6fadeHR9DKvg5.png"
                    alt="CognisentAI Logo"
                    width={160}
                    height={32}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="-mr-2">
                  <Button variant="ghost" onClick={handleMenuToggle}>
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-base font-medium text-gray-900 hover:text-blue-600"
                      onClick={handleLinkClick}
                    >
                      {item}
                    </Link>
                  ))}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Verticals</h3>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link
                          href="/propertypilot"
                          className="text-base font-medium text-gray-900 hover:text-blue-600"
                          onClick={handleLinkClick}
                        >
                          PropertyPilot
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link href="/get-started" className="w-full" onClick={handleLinkClick}>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
