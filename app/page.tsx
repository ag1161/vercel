import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Brain, BotIcon as Robot, Calculator, LineChart, Target, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "CognisentAI - Home",
  description:
    "CognisentAI empowers businesses with industry-specific AI solutions, automating workflows and driving innovation.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1a0b2e] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical3-lsRLVzVzD19sivnStPDLhYXFt3fcTX.png"
              alt="Futuristic cityscape with digital transformation visualization showing a person standing on a glowing platform amidst circuit patterns and modern buildings"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/50 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 drop-shadow-lg">
              Precision-Powered Intelligence <br />
              for Industry Transformation
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] bg-black/20 inline-block p-4 rounded-lg backdrop-blur-sm">
              Business process optimization through industry specific innovative solutions using AI automation and
              driving transformation
            </p>
            <div className="mt-10">
              <Link href="/get-started">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Intelligent Solutions for Every Industry
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <Card>
                  <CardHeader>
                    <Brain className="h-6 w-6 text-blue-600" />
                    <CardTitle>Industry-Specific AI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Tailored AI solutions designed for your specific industry needs.</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Robot className="h-6 w-6 text-blue-600" />
                    <CardTitle>Autonomous Agents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI agents that work autonomously to streamline your business processes.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Building className="h-6 w-6 text-blue-600" />
                    <CardTitle>Workflow Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automate complex workflows to increase efficiency and reduce errors.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* PropertyPilot Section */}
        <section id="propertypilot" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-3">Flagship Product</h2>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Introducing PropertyPilot
              </h3>
              <p className="text-xl text-gray-500">
                Our advanced AI platform is revolutionizing the real estate industry through intelligent automation and
                predictive analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="size-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Automated Valuation</h4>
                <p className="text-gray-500">
                  Advanced AI algorithms provide accurate property valuations based on comprehensive market data and
                  trends.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <LineChart className="size-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h4>
                <p className="text-gray-500">
                  Real-time market insights and trend analysis to help you make informed investment decisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Target className="size-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Recommendations</h4>
                <p className="text-gray-500">
                  AI-powered property recommendations tailored to your investment criteria and goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="size-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Predictive Maintenance</h4>
                <p className="text-gray-500">
                  Anticipate maintenance needs and optimize property management with AI-driven predictions.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/propertypilot">
                <Button size="lg" variant="outline" className="group">
                  Learn More About PropertyPilot
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-200">Contact us today for a demo.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Get Started
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
