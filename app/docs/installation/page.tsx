import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation and Setup - CognisentAI",
  description: "Learn how to install and set up CognisentAI for your business.",
}

export default function InstallationSetupPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Installation and Setup</h1>
      <div className="prose prose-blue">
        <p>
          This guide will walk you through the process of installing and setting up CognisentAI for your business.
          Follow these steps to ensure a smooth integration of our AI-powered solutions.
        </p>
        <h2>Prerequisites</h2>
        <ul>
          <li>
            A CognisentAI account (If you don't have one, <a href="/signup">sign up here</a>)
          </li>
          <li>Administrative access to your company's IT infrastructure</li>
          <li>Basic understanding of your business processes and data sources</li>
        </ul>
        <h2>Step 1: Access Your CognisentAI Dashboard</h2>
        <p>
          Log in to your CognisentAI account and navigate to the dashboard. Here, you'll find the installation options
          for your chosen AI solution.
        </p>
        <h2>Step 2: Choose Your Integration Method</h2>
        <p>CognisentAI offers two primary integration methods:</p>
        <ul>
          <li>Cloud-based SaaS solution (recommended for most users)</li>
          <li>On-premises installation (for businesses with specific security requirements)</li>
        </ul>
        <h2>Step 3: Configure Data Sources</h2>
        <p>
          Connect your existing data sources to CognisentAI. This may include databases, CRM systems, or other business
          software. Our platform supports a wide range of data integrations.
        </p>
        <h2>Step 4: Set Up User Accounts</h2>
        <p>
          Create user accounts for your team members and assign appropriate roles and permissions. This ensures that
          each user has access to the features they need.
        </p>
        <h2>Step 5: Customize Your AI Models</h2>
        <p>
          Depending on your chosen solution, you may need to customize the AI models to fit your specific business
          needs. Our team can assist you with this process if needed.
        </p>
        <h2>Step 6: Test the Integration</h2>
        <p>
          Run a series of tests to ensure that CognisentAI is properly integrated with your existing systems and
          producing accurate results.
        </p>
        <h2>Step 7: Train Your Team</h2>
        <p>
          Provide training to your team members on how to use CognisentAI effectively. We offer comprehensive
          documentation and training resources to help with this process.
        </p>
        <h2>Need Help?</h2>
        <p>
          If you encounter any issues during the installation and setup process, please don't hesitate to contact our
          support team at support@cognisentai.com or refer to our <a href="/documentation">detailed documentation</a>.
        </p>
      </div>
    </div>
  )
}
