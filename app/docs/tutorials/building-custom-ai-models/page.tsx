import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Building Custom AI Models - CognisentAI",
  description: "Learn how to build and deploy custom AI models using CognisentAI.",
}

export default function BuildingCustomAiModelsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Building Custom AI Models</h1>
      <div className="prose prose-blue">
        <p>
          This tutorial will guide you through the process of building and deploying custom AI models using
          CognisentAI's platform. Custom models allow you to tailor our AI capabilities to your specific business needs.
        </p>
        <h2>Prerequisites</h2>
        <ul>
          <li>A CognisentAI Enterprise account</li>
          <li>Basic understanding of machine learning concepts</li>
          <li>Familiarity with Python programming</li>
        </ul>
        <h2>Step 1: Prepare Your Data</h2>
        <p>The first step in building a custom AI model is preparing your data. Ensure your dataset is:</p>
        <ul>
          <li>Clean and free of errors</li>
          <li>Properly formatted</li>
          <li>Representative of the problem you're trying to solve</li>
        </ul>
        <h2>Step 2: Choose a Model Type</h2>
        <p>CognisentAI supports various types of models, including:</p>
        <ul>
          <li>Classification</li>
          <li>Regression</li>
          <li>Clustering</li>
          <li>Time series forecasting</li>
        </ul>
        <p>Select the model type that best fits your use case.</p>
        <h2>Step 3: Configure Your Model</h2>
        <p>Use our intuitive model configuration interface to set up your custom AI model:</p>
        <ol>
          <li>Log in to your CognisentAI account</li>
          <li>Navigate to the "Custom Models" section</li>
          <li>Click on "Create New Model"</li>
          <li>Select your model type and upload your prepared dataset</li>
          <li>Configure model parameters and hyperparameters</li>
        </ol>
        <h2>Step 4: Train Your Model</h2>
        <p>Once your model is configured, you can start the training process:</p>
        <ol>
          <li>Click on "Start Training"</li>
          <li>Monitor the training progress in real-time</li>
          <li>Review performance metrics as they become available</li>
        </ol>
        <h2>Step 5: Evaluate and Refine</h2>
        <p>After training, evaluate your model's performance:</p>
        <ol>
          <li>Review the evaluation metrics provided by our platform</li>
          <li>Test your model on a holdout dataset</li>
          <li>If necessary, adjust your model configuration and retrain</li>
        </ol>
        <h2>Step 6: Deploy Your Model</h2>
        <p>Once you're satisfied with your model's performance, you can deploy it:</p>
        <ol>
          <li>Go to the "Deployment" section</li>
          <li>Choose your deployment options (e.g., API endpoint, batch processing)</li>
          <li>Click "Deploy Model"</li>
        </ol>
        <h2>Step 7: Monitor and Maintain</h2>
        <p>After deployment, it's important to:</p>
        <ul>
          <li>Monitor your model's performance in production</li>
          <li>Retrain your model periodically with new data</li>
          <li>Stay alert for concept drift or data distribution changes</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Documentation</h2>
          <p className="text-gray-600 mb-4">
            For a more comprehensive guide on building custom AI models with CognisentAI, please refer to our detailed
            documentation:
          </p>
          <Link
            href="/docs/tutorials/building-custom-ai-models/detailed-documentation"
            className="text-blue-600 hover:underline"
          >
            View Detailed Documentation
          </Link>
        </div>
        <h2>Need Help?</h2>
        <p>
          If you need assistance with building custom AI models, please contact our support team at
          ai-support@cognisentai.com or refer to our <a href="/documentation">detailed documentation</a>.
        </p>
      </div>
    </div>
  )
}
