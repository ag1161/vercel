import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - CognisentAI",
  description: "Frequently asked questions about CognisentAI and our AI-powered business solutions.",
}

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is CognisentAI?</AccordionTrigger>
              <AccordionContent>
                CognisentAI is a leading provider of AI-powered business solutions. We specialize in developing and
                implementing artificial intelligence technologies to help businesses automate processes, gain insights,
                and improve decision-making.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can AI benefit my business?</AccordionTrigger>
              <AccordionContent>
                AI can benefit your business in numerous ways, including process automation, predictive analytics,
                personalized customer experiences, and improved decision-making. Our solutions are tailored to address
                specific industry challenges and drive efficiency and innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What industries do you serve?</AccordionTrigger>
              <AccordionContent>
                We serve a wide range of industries, including but not limited to real estate, finance, healthcare,
                retail, and manufacturing. Our AI solutions are adaptable and can be customized to meet the unique needs
                of various sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I get started with CognisentAI?</AccordionTrigger>
              <AccordionContent>
                Getting started is easy. Simply contact us through our website or give us a call. We'll schedule a
                consultation to discuss your business needs and how our AI solutions can help. From there, we'll develop
                a tailored plan to implement AI in your organization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is my data safe with CognisentAI?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We take data security very seriously. We employ state-of-the-art security measures and
                comply with all relevant data protection regulations to ensure your data is safe and secure. Our systems
                are regularly audited and updated to maintain the highest standards of data protection.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  )
}
