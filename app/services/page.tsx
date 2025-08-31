import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, BarChart } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "CognisentAI Services",
  description:
    "Explore our range of AI services including consulting, custom development, and industry-specific solutions.",
}

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20Services%20Image.jpg-9rabETTuTIlikcj8cDk5yxhzmXYiz5.jpeg"
              alt="CognisentAI services and solutions workflow"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              Our Services
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-lg">
              Comprehensive AI solutions tailored to your industry and business needs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Offerings</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Empowering Your Business with AI
              </p>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle>AI Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert guidance on integrating AI into your business processes. We help you identify opportunities,
                    develop strategies, and implement AI solutions that drive growth and efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle>Custom AI Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tailored AI solutions designed to address your specific business challenges. Our team of expert
                    developers creates cutting-edge AI applications that give you a competitive edge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle>Industry-Specific AI Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vertical AI solutions optimized for your industry. From real estate to healthcare, we develop
                    specialized AI tools that revolutionize your sector.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Process</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How We Deliver AI Excellence
              </p>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  1
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Discovery</h3>
                <p className="mt-2 text-base text-gray-500">
                  We analyze your business needs and identify AI opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  2
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Strategy</h3>
                <p className="mt-2 text-base text-gray-500">
                  We develop a tailored AI strategy aligned with your goals.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  3
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Development</h3>
                <p className="mt-2 text-base text-gray-500">Our experts build and test your custom AI solution.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  4
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Implementation</h3>
                <p className="mt-2 text-base text-gray-500">We deploy the solution and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
