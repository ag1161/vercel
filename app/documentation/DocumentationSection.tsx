"use client"

import Link from "next/link"

type LinkProps = {
  href: string
  text: string
}

type DocumentationSectionProps = {
  title: string
  links: LinkProps[]
}

export function DocumentationSection({ title, links }: DocumentationSectionProps) {
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
