import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact CognisentAI",
  description: "Get in touch with CognisentAI for inquiries about our AI solutions and services.",
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20Us.jpg-WldC3p64eDdnNrP3ulJlDpCNNSoOfQ.jpeg"
              alt="CognisentAI global customer support"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-white font-semibold drop-shadow-lg">
              Get in touch with our team to learn more about our AI solutions and how we can help your business.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input type="text" id="subject" name="subject" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>CognisentAI Headquarters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <div className="space-y-2">
                        <div>4725 Sheppard Ave. East,</div>
                        <div>Toronto, ON M1S 5B2</div>
                        <div>Canada</div>
                        <div>Email: info@cognisentai.com</div>
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <div className="space-y-2">
                        <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 10:00 AM - 2:00 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
