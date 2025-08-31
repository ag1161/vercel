import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Using PropertyPilot - CognisentAI",
  description: "Learn how to use PropertyPilot, our AI-powered real estate management solution.",
}

export default function UsingPropertyPilotPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Using PropertyPilot</h1>
      <div className="prose prose-blue">
        <p>
          This tutorial will guide you through the process of using PropertyPilot, our AI-powered real estate management
          solution. PropertyPilot helps you make data-driven decisions and optimize your property portfolio.
        </p>
        <h2>Getting Started</h2>
        <ol>
          <li>Log in to your CognisentAI account</li>
          <li>Navigate to the PropertyPilot dashboard</li>
          <li>Add your properties to the system</li>
        </ol>
        <h2>Key Features</h2>
        <h3>1. Automated Property Valuation</h3>
        <p>
          PropertyPilot uses advanced AI algorithms to provide accurate property valuations based on various factors
          such as location, size, amenities, and market trends.
        </p>
        <h4>How to use:</h4>
        <ol>
          <li>Select a property from your portfolio</li>
          <li>Click on "Generate Valuation"</li>
          <li>Review the detailed valuation report</li>
        </ol>
        <h3>2. Market Analysis</h3>
        <p>Get real-time insights into market trends, helping you make informed investment decisions.</p>
        <h4>How to use:</h4>
        <ol>
          <li>Go to the "Market Analysis" section</li>
          <li>Select a geographic area and property type</li>
          <li>View trends in prices, demand, and other key metrics</li>
        </ol>
        <h3>3. AI-Powered Recommendations</h3>
        <p>
          Receive personalized recommendations for property acquisitions, sales, or improvements based on your
          investment goals.
        </p>
        <h4>How to use:</h4>
        <ol>
          <li>Set up your investment criteria in the "Preferences" section</li>
          <li>Navigate to the "Recommendations" dashboard</li>
          <li>Review and act on the AI-generated suggestions</li>
        </ol>
        <h3>4. Predictive Maintenance</h3>
        <p>Anticipate maintenance needs and optimize property management with AI-driven predictions.</p>
        <h4>How to use:</h4>
        <ol>
          <li>Ensure your property details are up-to-date</li>
          <li>Go to the "Maintenance Forecast" section</li>
          <li>View predicted maintenance tasks and estimated costs</li>
        </ol>
        <h2>Best Practices</h2>
        <ul>
          <li>Regularly update your property information for more accurate predictions</li>
          <li>Use the "What-If" analysis tool to explore different scenarios</li>
          <li>Set up alerts for significant market changes or maintenance issues</li>
          <li>Integrate PropertyPilot with your existing property management software for seamless operations</li>
        </ul>
        <h2>Need Help?</h2>
        <p>
          If you need assistance with PropertyPilot, please contact our support team at support@cognisentai.com or refer
          to our <a href="/documentation">detailed documentation</a>.
        </p>
      </div>
    </div>
  )
}
