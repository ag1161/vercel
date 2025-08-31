import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - CognisentAI",
  description: "CognisentAI privacy policy and data protection information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none">
            <p>Last updated: January 31, 2025</p>
            <p>
              At CognisentAI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, request a
              demo, or contact our support team. This may include your name, email address, phone number, and company
              information.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to comply with legal obligations.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@cognisentai.com.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
