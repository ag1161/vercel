"use client"

import { Suspense } from "react"
import { DocumentationContent } from "./DocumentationContent"

export function DocumentationWrapper() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Suspense fallback={<div className="p-4">Loading documentation...</div>}>
          <DocumentationContent />
        </Suspense>
      </main>
    </div>
  )
}
