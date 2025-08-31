import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quick Start Guide - CognisentAI",
  description: "Get started quickly with CognisentAI's AI-powered business solutions.",
}

export default function QuickStartGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Quick Start Guide</h1>
      <div className="prose prose-blue">
        <p>
          This guide will help you get started with CognisentAI quickly. Follow these steps to begin using our
          AI-powered solutions for your business.
        </p>
        <h2>Step 1: Sign Up for an Account</h2>
        <p>
          Visit our <a href="/signup">sign-up page</a> to create your CognisentAI account. You'll need to provide some
          basic information about your business.
        </p>
        <h2>Step 2: Choose Your Solution</h2>
        <p>
          After signing up, you'll have access to our dashboard. From here, you can choose the AI solution that best
          fits your business needs, such as PropertyPilot for real estate management.
        </p>
        <h2>Step 3: Configure Your Settings</h2>
        <p>
          Once you've selected a solution, you'll need to configure it for your specific use case. This may involve
          connecting data sources, setting up user permissions, or defining custom parameters.
        </p>
        <h2>Step 4: Explore the Features</h2>
        <p>
          Take some time to explore the features of your chosen solution. Our intuitive interface makes it easy to
          navigate and understand the capabilities of the AI.
        </p>
        <h2>Step 5: Run Your First Analysis</h2>
        <p>
          Depending on your chosen solution, you can now run your first AI-powered analysis. This could be a property
          valuation, market trend analysis, or workflow optimization.
        </p>
        <h2>Next Steps</h2>
        <p>
          For more detailed information on setting up and using CognisentAI, please refer to our{" "}
          <a href="/docs/installation">Installation and Setup</a> guide and explore our{" "}
          <a href="/documentation">full documentation</a>.
        </p>
      </div>
    </div>
  )
}
