import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Authentication - CognisentAI",
  description: "Learn how to authenticate with the CognisentAI API.",
}

export default function ApiAuthenticationPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">API Authentication</h1>
      <div className="prose prose-blue">
        <p>
          This guide explains how to authenticate your requests to the CognisentAI API. Proper authentication ensures
          that only authorized users can access our API endpoints.
        </p>
        <h2>Authentication Methods</h2>
        <p>
          CognisentAI uses API keys for authentication. Each request to the API must include a valid API key in the
          header.
        </p>
        <h2>Obtaining an API Key</h2>
        <ol>
          <li>Log in to your CognisentAI account</li>
          <li>Navigate to the API section in your dashboard</li>
          <li>Click on "Generate New API Key"</li>
          <li>Copy and securely store your API key</li>
        </ol>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4">
          <p className="font-bold">Important:</p>
          <p>Never share your API key publicly or commit it to version control systems.</p>
        </div>
        <h2>Using Your API Key</h2>
        <p>
          Include your API key in the <code>Authorization</code> header of each request:
        </p>
        <pre>
          <code>Authorization: Bearer YOUR_API_KEY</code>
        </pre>
        <h2>Example Request</h2>
        <pre>
          <code>
            {`curl -X GET "https://api.cognisentai.com/v1/properties" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          </code>
        </pre>
        <h2>API Key Security</h2>
        <ul>
          <li>Rotate your API keys regularly</li>
          <li>Use different API keys for different environments (development, staging, production)</li>
          <li>Implement IP whitelisting for additional security</li>
        </ul>
        <h2>Need Help?</h2>
        <p>
          If you're having trouble with API authentication, please contact our support team at
          api-support@cognisentai.com or refer to our <a href="/documentation">detailed API documentation</a>.
        </p>
      </div>
    </div>
  )
}
