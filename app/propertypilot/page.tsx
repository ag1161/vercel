import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp, BarChart, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "PropertyPilot - CognisentAI",
  description: "Discover PropertyPilot, our advanced AI platform revolutionizing the real estate industry.",
}

export default function PropertyPilot() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-[#1a0b2e] text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PropertyPilot.jpg-yPPYY9KIcWgXbgSjWCCoiUhfYRrugr.jpeg"
              alt="PropertyPilot AI-powered real estate management visualization"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/50 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 drop-shadow-lg">
                PropertyPilot
              </h1>
              <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] bg-black/20 inline-block p-4 rounded-lg backdrop-blur-sm">
                Our advanced AI platform is revolutionizing the real estate industry through intelligent automation and
                predictive analytics.
              </p>
              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-3">Flagship Product</h2>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Transforming Real Estate with AI
              </h3>
              <p className="text-xl text-gray-500">
                Our advanced AI platform is revolutionizing the real estate industry through intelligent automation and
                predictive analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {/* Replace with your icon here */}
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Automated Valuation</h4>
                <p className="text-gray-500">
                  Advanced AI algorithms provide accurate property valuations based on comprehensive market data and
                  trends.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {/* Replace with your icon here */}
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h4>
                <p className="text-gray-500">
                  Real-time market insights and trend analysis to help you make informed investment decisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {/* Replace with your icon here */}
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Recommendations</h4>
                <p className="text-gray-500">
                  AI-powered property recommendations tailored to your investment criteria and goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {/* Replace with your icon here */}
                  <Calendar className="h-6 w-6 text-blue-600" />
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
                  {/* Replace with your icon here */}
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose PropertyPilot?
              </p>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Increased Efficiency</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automate time-consuming tasks and focus on high-value activities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Better Decision Making</h3>
                <p className="mt-2 text-base text-gray-500">
                  Make data-driven decisions with AI-powered insights and recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Improved ROI</h3>
                <p className="mt-2 text-base text-gray-500">
                  Optimize your real estate investments with accurate valuations and market analysis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Reduced Risk</h3>
                <p className="mt-2 text-base text-gray-500">
                  Minimize investment risks with AI-driven market predictions and trend analysis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Scalability</h3>
                <p className="mt-2 text-base text-gray-500">
                  Easily manage and analyze large property portfolios with our powerful AI platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Competitive Advantage</h3>
                <p className="mt-2 text-base text-gray-500">
                  Stay ahead of the competition with cutting-edge AI technology in real estate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Get Started</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Transform Your Real Estate Business?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Contact us today to schedule a demo and see how PropertyPilot can revolutionize your real estate
                operations.
              </p>
              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Request a Demo
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
