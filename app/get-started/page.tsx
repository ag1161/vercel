import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap, BarChart, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Get Started with CognisentAI",
  description: "Start your journey with CognisentAI and explore our AI-powered solutions for your business.",
}

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-[#1a0b2e] text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Get%20Started-I6GovH2u3D35b7LMMcSpXackbS8CRU.png"
              alt="AI-powered business transformation visualization"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              Get Started with CognisentAI
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] bg-black/20 inline-block p-4 rounded-lg backdrop-blur-sm">
              Embark on your AI journey and transform your business with our cutting-edge solutions.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Getting Started</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Your Path to AI-Powered Success
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <Card>
                  <CardHeader>
                    <Zap className="h-6 w-6 text-blue-600" />
                    <CardTitle>1. Explore Our Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Discover our range of AI-powered solutions tailored for various industries and use cases.
                    </p>
                    <Link href="/services" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                      View Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BarChart className="h-6 w-6 text-blue-600" />
                    <CardTitle>2. Schedule a Demo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      See our AI solutions in action with a personalized demo tailored to your business needs.
                    </p>
                    <Link href="/contact" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                      Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle>3. Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Our experts will work with you to identify the best AI solutions for your specific challenges.
                    </p>
                    <Link href="/contact" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                How We Deliver AI Excellence
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our 4-Step Process
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Discovery</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We analyze your business needs and identify AI opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Strategy</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We develop a tailored AI strategy aligned with your goals.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Development</h3>
                  <p className="mt-1 text-sm text-gray-500">Our experts build and test your custom AI solution.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Implementation</h3>
                  <p className="mt-1 text-sm text-gray-500">We deploy the solution and provide ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Ready to Get Started?</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Take the First Step Towards AI-Powered Success
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Contact Us Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
