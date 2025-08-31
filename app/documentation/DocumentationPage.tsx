"use client"

import { DocumentationContent } from "./DocumentationContent"

export function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <DocumentationContent />
      </main>
    </div>
  )
}
