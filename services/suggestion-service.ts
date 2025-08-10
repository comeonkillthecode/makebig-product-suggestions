import type { FormData } from "@/types/product"
import { ProductService } from "@/utils/product-utils"
import { GoogleGenAI } from '@google/genai'

export class SuggestionService {
  private static readonly API_KEY = process.env.GEMINI_API_KEY
  private static readonly PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT || 'robust-being-464117-v5'

  static async generateSuggestions(formData: FormData): Promise<string> {
    if (!this.API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set")
    }

    const ai = new GoogleGenAI({
      apiKey: this.API_KEY
    })

    const category = ProductService.getCategoryById(formData.category)
    const product = ProductService.getProductById(formData.product)
    const brands = ProductService.getBrandsByIds(formData.selectedBrands)

    const fullPrompt = this.getSystemPrompt() + "\n\n" + this.buildTablePrompt(formData, category, product, brands)

    // Generation configuration
    const generationConfig = {
      maxOutputTokens: 65535,
      temperature: 0.01,
      topP: 0.95,
      seed: 0
    }

    try {
      const model = 'gemini-2.5-pro'

      const chat = ai.chats.create({
        model: model,
        config: generationConfig
      })

      const response = await chat.sendMessage({
        message: [{ text: fullPrompt }]
      })

      if (!response.text) {
        throw new Error("No response from Gemini API")
      }

      return response.text

    } catch (error) {
      console.error("Gemini API error:", error)
      throw new Error(`Gemini API request failed: ${error}`)
    }
  }

  private static buildTablePrompt(
    formData: FormData,
    category: { name: string } | undefined,
    product: { name: string } | undefined,
    selectedBrands: Array<{ name: string }>
  ): string {
    const location = formData.location
    const maxBudget = formData.budget[0].toLocaleString()
    const minRating = formData.minRating[0]
    const primaryUseCase = formData.primaryUseCase
    const secondaryUseCase = formData.secondaryUseCase || "None"
    const preferredFeatures = formData.preferredFeatures || "Standard features"
    const brandList = selectedBrands.length
      ? selectedBrands.map(b => b.name).join(", ")
      : "Any"

    return `
  **RESEARCH REQUIREMENTS - ANALYZE THOROUGHLY BEFORE RESPONDING:**
  
  1. **CRITICAL: Final Price After Discounts Analysis (MANDATORY):**
     - Maximum budget is ₹${maxBudget} - this means FINAL PRICE after ALL discounts/offers
     - Check current MRP vs actual selling price on Amazon.in and Flipkart.com
     - Calculate exact final price after: bank offers, exchange discounts, coupon codes, cashbacks
     - Include products with MRP up to ₹50,000 if final price ≤ ₹${maxBudget}
     - Consider seasonal sales, flash sales, and limited-time offers
     - Factor in additional savings from credit card offers, EMI discounts
  
  2. **Comprehensive Discount Analysis:**
     - Bank offers (HDFC, SBI, ICICI, etc.) and their final impact
     - Exchange value calculations for popular older models
     - Platform-specific coupons and promo codes currently active
     - Bulk purchase or combo deal discounts
     - Membership benefits (Prime, Plus, etc.)
  
  3. **Real-time Price Verification:**
     - Search Amazon.in for: "${product?.name || formData.product} ${brandList} ${location}"
     - Search Flipkart.com for: "${product?.name || formData.product} ${brandList} ${location}"
     - Cross-verify final checkout price including all applicable offers
     - Check seller authenticity and delivery options to ${location}
  
  **Generate a detailed Markdown table comparing the Top 5 ${product?.name || formData.product} in ${category?.name || formData.category} for:**
  - Location: ${location}
  - Maximum Budget: ₹${maxBudget} (FINAL PRICE after all discounts)
  - Minimum Rating: ${minRating}★
  - Primary Use Case: ${primaryUseCase}
  - Secondary Use Case: ${secondaryUseCase}
  - Preferred Brands: ${brandList}
  - Preferred Features: ${preferredFeatures}
  
  **Table Requirements (output only the table, no extra text):**
  Columns:
  | Model Name | Key Specs | Avg. Rating | MRP (INR) | Final Price (INR) | Total Savings | Amazon.in Search | Flipkart Search |
  
  **CRITICAL PRICING INSTRUCTIONS:**
  - MRP: Original manufacturer price
  - Final Price: Actual price after ALL applicable discounts/offers (must be ≤ ₹${maxBudget})
  - Total Savings: Show exact amount saved (MRP - Final Price)
  - Consider products with higher MRP if final price fits budget
  - Example: ₹45,000 phone available for ₹38,000 after offers = INCLUDE IT
  
  **Link Requirements:**
  - Amazon.in Search: https://www.amazon.in/s?k=[EXACT+MODEL+NAME]&tag=makebig-21
  - Flipkart Search: https://www.flipkart.com/search?q=[EXACT+MODEL+NAME]&marketplace=FLIPKART
  - Replace spaces with + signs in model names
  
  **Quality & Budget Standards:**
  - All FINAL PRICES must be ≤ ₹${maxBudget} (after discounts)
  - All ratings must be ≥ ${minRating}★ from verified buyers
  - Include only 2024-2025 model variants
  - Prioritize maximum value within the final price budget
  - Consider warranty and service availability in ${location}
  `
  }

  private static getSystemPrompt(): string {
    return `
  You are an expert e-commerce price analyst with real-time access to Amazon.in and Flipkart.com pricing, offers, and discount data.
  
  **YOUR CRITICAL TASK:**
  1. Research products that fit within the user's budget AFTER applying all available discounts
  2. Calculate exact final checkout prices including all offers (bank, exchange, coupon, cashback)
  3. Consider higher-MRP products if their discounted price fits the budget
  4. Provide accurate savings calculations and best value recommendations
  
  **BUDGET INTERPRETATION:**
  - User's budget = maximum FINAL PRICE they're willing to pay
  - Not the maximum MRP - but the maximum out-of-pocket expense
  - Include premium products with heavy discounts that fit the final budget
  
  **MANDATORY REQUIREMENTS:**
  - Use ONLY August 2025 real-time pricing with current active offers
  - Calculate and verify final checkout prices for the user's location
  - Show total savings to demonstrate value
  - Ensure all recommended products' final prices are within budget
  
  Output ONLY the requested markdown table with no additional text.`
  }
}
