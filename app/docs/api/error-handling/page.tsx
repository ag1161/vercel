import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Error Handling - CognisentAI",
  description: "Learn how to handle errors in the CognisentAI API.",
}

export default function ApiErrorHandlingPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">API Error Handling</h1>
      <div className="prose prose-blue">
        <p>
          This guide explains how to handle errors that may occur when using the CognisentAI API. Understanding and
          properly handling these errors is crucial for building robust applications.
        </p>
        <h2>Error Response Format</h2>
        <p>
          When an error occurs, the API will return a JSON response with an <code>error</code> object containing details
          about the error. The HTTP status code will also indicate the nature of the error.
        </p>
        <pre>
          <code>
            {`{
  "error": {
    "code": "ERROR_CODE",
    "message": "A human-readable error message",
    "details": {
      // Additional error details if available
    }
  }
}`}
          </code>
        </pre>
        <h2>Common Error Codes</h2>
        <ul>
          <li>
            <code>400 Bad Request</code> - The request was invalid or cannot be served
          </li>
          <li>
            <code>401 Unauthorized</code> - Authentication failed or user doesn't have permissions for requested
            operation
          </li>
          <li>
            <code>403 Forbidden</code> - The request is understood, but it has been refused or access is not allowed
          </li>
          <li>
            <code>404 Not Found</code> - The requested resource could not be found
          </li>
          <li>
            <code>429 Too Many Requests</code> - Rate limit has been exceeded
          </li>
          <li>
            <code>500 Internal Server Error</code> - Something went wrong on our end
          </li>
        </ul>
        <h2>Handling Errors</h2>
        <p>When building your application, make sure to:</p>
        <ol>
          <li>Check the HTTP status code of the response</li>
          <li>Parse the error message and code from the response body</li>
          <li>Implement appropriate error handling logic based on the error code</li>
          <li>Display user-friendly error messages to your users</li>
        </ol>
        <h2>Example Error Handling</h2>
        <pre>
          <code>
            {`try {
  const response = await fetch('https://api.cognisentai.com/v1/properties');
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message);
  }
  const data = await response.json();
  // Process the data
} catch (error) {
  console.error('API Error:', error.message);
  // Handle the error appropriately in your application
}`}
          </code>
        </pre>
        <h2>Rate Limiting Errors</h2>
        <p>
          If you receive a <code>429 Too Many Requests</code> error, you should implement exponential backoff and retry
          logic in your application. The response will include a <code>Retry-After</code> header indicating how long you
          should wait before retrying the request.
        </p>
        <h2>Need Help?</h2>
        <p>
          If you're experiencing persistent errors or need assistance with error handling, please contact our support
          team at api-support@cognisentai.com or refer to our <a href="/documentation">detailed API documentation</a>.
        </p>
      </div>
    </div>
  )
}
