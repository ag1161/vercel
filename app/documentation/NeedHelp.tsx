"use client"

import Link from "next/link"

export function NeedHelp() {
  return (
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
  )
}
