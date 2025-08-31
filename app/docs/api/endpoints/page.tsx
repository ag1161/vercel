import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Endpoints - CognisentAI",
  description: "Explore the available API endpoints for CognisentAI.",
}

export default function ApiEndpointsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">API Endpoints</h1>
      <div className="prose prose-blue">
        <p>
          This page provides an overview of the available API endpoints for CognisentAI. Our API allows you to
          programmatically access and manipulate data within our platform.
        </p>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <pre>
          <code>https://api.cognisentai.com/v1</code>
        </pre>
        <h2>Available Endpoints</h2>
        <h3>Properties</h3>
        <ul>
          <li>
            <code>GET /properties</code> - List all properties
          </li>
          <li>
            <code>GET /properties/{"{id}"}</code> - Get a specific property
          </li>
          <li>
            <code>POST /properties</code> - Create a new property
          </li>
          <li>
            <code>PUT /properties/{"{id}"}</code> - Update a property
          </li>
          <li>
            <code>DELETE /properties/{"{id}"}</code> - Delete a property
          </li>
        </ul>
        <h3>Market Analysis</h3>
        <ul>
          <li>
            <code>GET /market-analysis</code> - Get market analysis data
          </li>
          <li>
            <code>POST /market-analysis/predict</code> - Generate market predictions
          </li>
        </ul>
        <h3>Users</h3>
        <ul>
          <li>
            <code>GET /users</code> - List all users
          </li>
          <li>
            <code>GET /users/{"{id}"}</code> - Get a specific user
          </li>
          <li>
            <code>POST /users</code> - Create a new user
          </li>
          <li>
            <code>PUT /users/{"{id}"}</code> - Update a user
          </li>
          <li>
            <code>DELETE /users/{"{id}"}</code> - Delete a user
          </li>
        </ul>
        <h2>Request Format</h2>
        <p>
          All requests should be made using JSON for the request body. Set the <code>Content-Type</code> header to{" "}
          <code>application/json</code>.
        </p>
        <h2>Response Format</h2>
        <p>
          All responses will be in JSON format. The response will include a <code>data</code> field containing the
          requested information, and a <code>meta</code> field with pagination information where applicable.
        </p>
        <h2>Pagination</h2>
        <p>
          For endpoints that return multiple items, pagination is supported using the <code>page</code> and{" "}
          <code>per_page</code> query parameters.
        </p>
        <h2>Rate Limiting</h2>
        <p>API requests are subject to rate limiting. The current limits are:</p>
        <ul>
          <li>100 requests per minute for standard accounts</li>
          <li>1000 requests per minute for enterprise accounts</li>
        </ul>
        <h2>Need More Information?</h2>
        <p>
          For detailed information on request and response schemas, authentication, and error handling, please refer to
          our <a href="/docs/api/authentication">API Authentication</a> and{" "}
          <a href="/docs/api/error-handling">Error Handling</a> documentation.
        </p>
      </div>
    </div>
  )
}
