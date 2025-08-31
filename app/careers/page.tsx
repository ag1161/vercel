import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Careers - CognisentAI",
  description: "Join the CognisentAI team and help shape the future of AI in business.",
}

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Careers at CognisentAI</h1>
            <p className="mt-6 text-xl max-w-3xl">
              Join our team of innovators and help shape the future of AI in business.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Open Positions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI Research Scientist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Lead cutting-edge research in machine learning and AI applications for business.
                  </p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Senior Software Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Develop and maintain our AI-powered platforms and applications.</p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product Manager</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Drive the vision and strategy for our AI products and solutions.</p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Why Join CognisentAI?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cutting-edge Technology</h3>
                <p>
                  Work with the latest AI and machine learning technologies to solve real-world business challenges.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
                <p>Continuous learning opportunities and career development paths for all employees.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Collaborative Environment</h3>
                <p>Join a team of passionate professionals working together to push the boundaries of AI.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
