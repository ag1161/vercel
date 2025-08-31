import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation - CognisentAI",
  description: "Documentation for CognisentAI's products and services.",
}

type LinkProps = {
  href: string
  text: string
}

type DocumentationSectionProps = {
  title: string
  links: LinkProps[]
}

function DocumentationSection({ title, links }: DocumentationSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-blue-600 hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Documentation() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Documentation</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DocumentationSection
              title="Getting Started"
              links={[
                { href: "/docs/introduction", text: "Introduction to CognisentAI" },
                { href: "/docs/quickstart", text: "Quick Start Guide" },
                { href: "/docs/installation", text: "Installation and Setup" },
              ]}
            />
            <DocumentationSection
              title="API Reference"
              links={[
                { href: "/docs/api/authentication", text: "Authentication" },
                { href: "/docs/api", text: "Detailed API Documentation" },
                { href: "/docs/api/error-handling", text: "Error Handling" },
              ]}
            />
            <DocumentationSection
              title="Tutorials"
              links={[
                { href: "/docs/tutorials/using-propertypilot", text: "Using PropertyPilot" },
                { href: "/docs/tutorials/building-custom-ai-models", text: "Building Custom AI Models" },
                { href: "/docs/tutorials/integrating-cognisentai", text: "Integrating CognisentAI with Your Systems" },
              ]}
            />
          </div>
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p>
              If you can't find what you're looking for in our documentation, please don't hesitate to{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact our support team
              </Link>
              . We're here to help!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
