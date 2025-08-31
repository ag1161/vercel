import type React from "react"

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="documentation-layout">{children}</div>
}
