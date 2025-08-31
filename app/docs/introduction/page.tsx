import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction to CognisentAI",
  description: "Learn about CognisentAI and its AI-powered business solutions.",
}

export default function IntroductionPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Introduction to CognisentAI</h1>
      <div className="prose prose-blue">
        <p>
          Welcome to CognisentAI, your partner in AI-powered business solutions. Our platform is designed to empower
          businesses across various industries with cutting-edge artificial intelligence technologies.
        </p>
        <h2>What is CognisentAI?</h2>
        <p>
          CognisentAI is a comprehensive AI platform that offers industry-specific solutions to automate workflows,
          enhance decision-making processes, and drive innovation. Our flagship product, PropertyPilot, showcases the
          power of AI in revolutionizing the real estate industry.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Industry-specific AI solutions</li>
          <li>Autonomous AI agents</li>
          <li>Workflow automation</li>
          <li>Predictive analytics</li>
          <li>Custom AI development</li>
        </ul>
        <h2>Getting Started</h2>
        <p>
          To begin your journey with CognisentAI, we recommend exploring our{" "}
          <a href="/docs/quickstart">Quick Start Guide</a> and <a href="/docs/installation">Installation and Setup</a>{" "}
          documentation. These resources will help you get up and running with our platform quickly and efficiently.
        </p>
        <p>
          If you have any questions or need assistance, don't hesitate to reach out to our support team at
          support@cognisentai.com.
        </p>
      </div>
    </div>
  )
}
