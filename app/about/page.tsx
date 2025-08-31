import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About CognisentAI",
  description: "Learn about CognisentAI, our mission, and our team.",
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-8eo102zJIsTe7eJ6IbdWQzhTKbSuyJ.png"
              alt="CognisentAI team collaboration"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              About CognisentAI
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-lg">
              Empowering businesses with cutting-edge AI solutions tailored to specific industries.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Mission Section - Left Aligned */}
              <div>
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Mission</h2>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                  Revolutionizing Industries with AI
                </h3>
                <div className="prose prose-lg prose-blue max-w-none space-y-6">
                  <p>
                    At CognisentAI, we believe in the transformative power of artificial intelligence. Our mission is to
                    empower businesses across various industries with tailored AI solutions that drive innovation,
                    increase efficiency, and unlock new possibilities.
                  </p>
                  <p>
                    Founded by a team of AI experts and industry veterans, CognisentAI combines deep technical expertise
                    with practical business acumen. We understand the unique challenges faced by different sectors and
                    develop AI-powered tools that address these specific needs.
                  </p>
                  <p>
                    Our flagship product, PropertyPilot, exemplifies our approach to vertical AI solutions. By focusing
                    on the real estate industry, we've created a powerful platform that revolutionizes property
                    management, valuation, and market analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet the Minds Behind CognisentAI
              </p>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Anjan Ghosh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">CEO & Founder</p>
                  <p className="mt-2">
                    Experienced technology leader with 35+ years in IT, cybersecurity, real estate, & mortgage,
                    specializing in B2B marketplaces, strategic growth, and product innovation. Proven track record in
                    scaling startups, driving digital transformation, and fostering innovation through AI and technology
                    solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Arunabh Basak</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">CTO & Co-founder</p>
                  <p className="mt-2">
                    Expert in driving product innovation, risk mitigation, and cost reduction. Proven leader in global
                    cross-functional teams, IP monetization, technology development and market expansion with over 15+
                    years of experience in fortune 500 companies. Passionate about efficient, affordable innovation to
                    help businesses grow sustainably in today's fast-paced market.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Saibal Majumder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">COO & Co-founder</p>
                  <p className="mt-2">
                    Seasoned Technology Leader with over 30 years of experience in operational excellence. Domain
                    experts in Automotive, Inventory, Logistics, Distribution, Insurance, Customer relations and
                    Laboratory businesses. Excellent track record of driving business value proposition. Process
                    optimization, Cost benefit analysis, leading over distance and technical leadership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
