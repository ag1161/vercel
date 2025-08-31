"use client"

import { DocumentationSection } from "./DocumentationSection"
import { NeedHelp } from "./NeedHelp"

export function DocumentationContent() {
  return (
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
      <NeedHelp />
    </div>
  )
}
