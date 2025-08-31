import { NextResponse } from "next/server"
import { generateText } from "ai"
import { createDeepSeek } from "@ai-sdk/deepseek"

const WEBSITE_INFO = `
CognisentAI is a company that provides AI-powered business solutions.
Key information:
- CEO & Founder: Anjan Ghosh
- CTO & Co-founder: Arunabh Basak
- COO & Co-founder: Saibal Majumder
- Flagship product: PropertyPilot, an AI platform for the real estate industry
- Services: AI Consulting, Custom AI Development, Industry-Specific AI Solutions
- Mission: Empower businesses with industry-specific AI solutions, automating workflows and driving innovation
`

// Create a custom instance with explicit API key configuration
const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
})

export async function POST(req: Request) {
  try {
    if (!process.env.DEEPSEEK_API_KEY) {
      console.error("DEEPSEEK_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "API configuration error",
          message: "The chatbot is temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      )
    }

    const { messages } = await req.json()

    const response = await generateText({
      model: deepseek("deepseek-chat"),
      prompt: messages.map((msg: any) => `${msg.role}: ${msg.content}`).join("\n"),
      system: `You are a helpful AI assistant for CognisentAI, a company that provides AI-powered business solutions. Use the following information about CognisentAI to answer questions accurately:\n\n${WEBSITE_INFO}\n\nAnswer questions about CognisentAI's products, services, and team based on this information. Be professional, concise, and accurate.`,
    })

    return NextResponse.json({ response: response.text })
  } catch (error) {
    console.error("Error in chat API:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json(
      {
        error: "Failed to process chat request",
        message: "An error occurred while processing your request. Please try again.",
        details: errorMessage,
      },
      { status: 500 },
    )
  }
}
