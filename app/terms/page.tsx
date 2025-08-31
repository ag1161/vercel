import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - CognisentAI",
  description: "CognisentAI terms of service and user agreement.",
}

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
          <div className="prose prose-blue max-w-none">
            <p>Last updated: January 31, 2025</p>
            <p>
              Welcome to CognisentAI. By using our website and services, you agree to comply with and be bound by the
              following terms and conditions.
            </p>
            <h2>Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You
              are responsible for maintaining the confidentiality of your account information.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our website and services are owned by CognisentAI and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              CognisentAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use our services.
            </p>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of our services
              after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@cognisentai.com.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
