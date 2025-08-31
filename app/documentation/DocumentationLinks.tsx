"use client"

import Link from "next/link"

type LinkProps = {
  href: string
  text: string
}

type DocumentationLinksProps = {
  links: LinkProps[]
  className?: string
}

export function DocumentationLinks({ links, className = "" }: DocumentationLinksProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="text-blue-600 hover:underline">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
