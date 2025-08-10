import { type NextRequest, NextResponse } from "next/server"
import { SuggestionService } from "@/services/suggestion-service"
import type { FormData } from "@/types/product"

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json()

    if (!formData.category || !formData.product || !formData.primaryUseCase) {
      return NextResponse.json(
        { error: "Missing required fields: category, product, or primaryUseCase" },
        { status: 400 },
      )
    }

    const suggestions = await SuggestionService.generateSuggestions(formData)

    return NextResponse.json({
      suggestions,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating suggestions:", error)

    const errorMessage = error instanceof Error ? error.message : "Failed to generate suggestions"

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
