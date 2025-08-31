import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Building Custom AI Models - Detailed Documentation",
  description: "Comprehensive guide on building custom AI models with CognisentAI's platform.",
}

export default function BuildingCustomAIModelsDetailedDocs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Building Custom AI Models: Detailed Documentation
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              This guide provides in-depth information on building custom AI models using CognisentAI's platform.
              Whether you're looking to create industry-specific solutions or tailor AI to your unique business needs,
              this documentation will walk you through the process step-by-step.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>A CognisentAI Enterprise account</li>
              <li>Basic understanding of machine learning concepts</li>
              <li>Familiarity with Python programming</li>
              <li>Prepared dataset for your specific use case</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Data Preparation</h2>
            <p className="text-gray-600 mb-4">
              Proper data preparation is crucial for building effective AI models. Follow these steps to ensure your
              data is ready:
            </p>
            <ol className="list-decimal pl-6 text-gray-600">
              <li>Clean your data, removing any errors or inconsistencies</li>
              <li>Normalize or standardize numerical features</li>
              <li>Encode categorical variables appropriately</li>
              <li>Split your data into training, validation, and test sets</li>
              <li>Ensure your data is properly formatted for input into our platform</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Model Selection</h2>
            <p className="text-gray-600 mb-4">CognisentAI offers various types of models to choose from:</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model Type</TableHead>
                  <TableHead>Use Case</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Classification</TableCell>
                  <TableCell>Categorizing data into predefined classes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Regression</TableCell>
                  <TableCell>Predicting continuous numerical values</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Clustering</TableCell>
                  <TableCell>Grouping similar data points together</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Time Series Forecasting</TableCell>
                  <TableCell>Predicting future values based on historical data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Natural Language Processing</TableCell>
                  <TableCell>Processing and analyzing text data</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Model Configuration</h2>
            <p className="text-gray-600 mb-4">Once you've selected your model type, you'll need to configure it:</p>
            <ol className="list-decimal pl-6 text-gray-600">
              <li>Log in to your CognisentAI account</li>
              <li>Navigate to the "Custom Models" section</li>
              <li>Click on "Create New Model"</li>
              <li>Select your model type</li>
              <li>Upload your prepared dataset</li>
              <li>Configure model parameters and hyperparameters</li>
            </ol>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Advanced Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For advanced users, we offer the ability to fine-tune model architectures and customize loss
                  functions. Contact our support team for more information on advanced configuration options.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Model Training</h2>
            <p className="text-gray-600 mb-4">After configuration, you can start the training process:</p>
            <ol className="list-decimal pl-6 text-gray-600">
              <li>Click on "Start Training" in the model configuration interface</li>
              <li>Monitor the training progress in real-time through our dashboard</li>
              <li>View performance metrics as they become available</li>
              <li>Adjust hyperparameters if necessary using our AutoML feature</li>
            </ol>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Training Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Start with a small subset of your data to quickly iterate and identify issues</li>
                  <li>Use cross-validation to ensure your model generalizes well</li>
                  <li>Monitor for overfitting and use techniques like early stopping if necessary</li>
                  <li>Leverage our distributed training capabilities for large datasets</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Model Evaluation</h2>
            <p className="text-gray-600 mb-4">
              Once training is complete, it's crucial to thoroughly evaluate your model:
            </p>
            <ol className="list-decimal pl-6 text-gray-600">
              <li>Review the evaluation metrics provided by our platform</li>
              <li>Test your model on a holdout dataset</li>
              <li>Use our built-in visualization tools to understand model performance</li>
              <li>Conduct error analysis to identify areas for improvement</li>
            </ol>
            <p className="text-gray-600 mt-4">
              If the model's performance doesn't meet your expectations, consider revisiting steps 2-4 to refine your
              approach.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Model Deployment</h2>
            <p className="text-gray-600 mb-4">
              Once you're satisfied with your model's performance, you can deploy it:
            </p>
            <ol className="list-decimal pl-6 text-gray-600">
              <li>Go to the "Deployment" section in your model's dashboard</li>
              <li>Choose your deployment options (e.g., API endpoint, batch processing)</li>
              <li>Set up monitoring and logging preferences</li>
              <li>Click "Deploy Model"</li>
            </ol>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Deployment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>REST API: For real-time predictions</li>
                  <li>Batch Processing: For large-scale, offline predictions</li>
                  <li>Edge Deployment: For IoT and mobile applications</li>
                  <li>On-Premises: For high-security requirements</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Monitoring and Maintenance</h2>
            <p className="text-gray-600 mb-4">
              After deployment, it's important to continuously monitor and maintain your model:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Monitor your model's performance in production using our dashboard</li>
              <li>Set up alerts for performance degradation or data drift</li>
              <li>Regularly retrain your model with new data to maintain accuracy</li>
              <li>Use our A/B testing framework to safely roll out model updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you need assistance with building custom AI models or have any questions, our expert support team is
              here to help.
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
