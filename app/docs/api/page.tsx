import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "API Documentation - CognisentAI",
  description: "Detailed API documentation for integrating with CognisentAI's services.",
}

export default function ApiDocumentation() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">CognisentAI API Documentation</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to the CognisentAI API documentation. Our API allows you to integrate our powerful AI solutions
              into your own applications and workflows. This guide will help you get started with using our API
              effectively.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API requests must be authenticated using an API key. Include your API key in the header of each
              request:
            </p>
            <Card>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
              </CardContent>
            </Card>
            <p className="text-gray-600 mt-4">
              To obtain an API key, please contact our support team or visit your account dashboard.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Base URL</h2>
            <p className="text-gray-600 mb-4">All API requests should be made to the following base URL:</p>
            <Card>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>https://api.cognisentai.com/v1</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Endpoints</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>/properties</TableCell>
                  <TableCell>GET</TableCell>
                  <TableCell>List all properties</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/properties/{"{id}"}</TableCell>
                  <TableCell>GET</TableCell>
                  <TableCell>Get a specific property</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/properties</TableCell>
                  <TableCell>POST</TableCell>
                  <TableCell>Create a new property</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/market-analysis</TableCell>
                  <TableCell>GET</TableCell>
                  <TableCell>Get market analysis data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/valuations</TableCell>
                  <TableCell>POST</TableCell>
                  <TableCell>Request a property valuation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Usage</h2>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Get All Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`curl -X GET "https://api.cognisentai.com/v1/properties" \\
-H "Authorization: Bearer YOUR_API_KEY"`}</code>
                </pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Request Property Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`curl -X POST "https://api.cognisentai.com/v1/valuations" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "address": "123 Main St, Anytown, USA",
  "propertyType": "residential",
  "squareFeet": 2000,
  "bedrooms": 3,
  "bathrooms": 2
}'`}</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Response Format</h2>
            <p className="text-gray-600 mb-4">
              All responses are returned in JSON format. A typical response will look like this:
            </p>
            <Card>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`{
  "status": "success",
  "data": {
    // Response data here
  },
  "meta": {
    "page": 1,
    "perPage": 20,
    "total": 100
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Handling</h2>
            <p className="text-gray-600 mb-4">
              In case of an error, the API will return a JSON response with an error message and appropriate HTTP status
              code:
            </p>
            <Card>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`{
  "status": "error",
  "message": "Invalid API key",
  "code": "UNAUTHORIZED"
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you need further assistance or have any questions about our API, please don't hesitate to contact our
              support team.
            </p>
            <Link href="/contact">
              <Button>Contact Support</Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
