import { GoogleGenAI } from '@google/genai'

interface ProductDetail {
  name: string
  fullSpecs: string
  detailedReviews: string
  pros: string[]
  cons: string[]
  priceHistory: string
  availability: string
  warranty: string
  alternatives: string
}

export class ProductDetailService {
  private static readonly API_KEY = process.env.GEMINI_API_KEY

  static async getProductDetails(productData: any, location?: string): Promise<ProductDetail> {
    if (!this.API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set")
    }

    const ai = new GoogleGenAI({
      apiKey: this.API_KEY
    })

    const prompt = this.buildDetailPrompt(productData, location || "Hyderabad, TS")

    const generationConfig = {
      maxOutputTokens: 65535,
      temperature: 0.1,
      topP: 0.95,
      seed: 0,
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'OFF',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'OFF',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'OFF',
        },
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'OFF',
        }
      ],
    }

    try {
      const model = 'gemini-2.5-flash'
      const chat = ai.chats.create({
        model: model,
        config: generationConfig
      })

      const response = await chat.sendMessage({
        message: [{ text: prompt }]
      })

      if (!response.text) {
        throw new Error("No response from Gemini API")
      }

      return this.parseDetailResponse(response.text)

    } catch (error) {
      console.error("Product Detail API error:", error)
      throw new Error(`Product Detail API request failed: ${error}`)
    }
  }

  private static buildDetailPrompt(productData: any, location: string): string {
    const productName = productData.modelName || productData.name || "Unknown Product"
    
    return `
**RESEARCH REQUIREMENTS - COMPREHENSIVE PRODUCT ANALYSIS:**

Analyze the "${productName}" in detail for location: ${location}

**Product Context:**
- Model: ${productName}
- Current Price: ${productData.price || productData.finalPrice || "N/A"}
- Rating: ${productData.rating || "N/A"}
- Key Specs: ${productData.keySpecs || "N/A"}

**Required Analysis Sections:**

1. **DETAILED SPECIFICATIONS:**
   - Complete technical specifications
   - Build quality and materials
   - Performance benchmarks
   - Camera/display/battery specifics (if applicable)

2. **COMPREHENSIVE REVIEWS:**
   - Latest customer reviews from Amazon.in and Flipkart
   - Expert reviews from tech websites
   - Long-term usage experiences
   - Common issues and solutions

3. **PROS & CONS:**
   - Top 5 advantages based on user feedback
   - Top 3-5 disadvantages or limitations
   - Comparison with competitors

4. **PRICE ANALYSIS:**
   - Current pricing trends
   - Best time to buy
   - Price drops and offers history
   - Value for money assessment

5. **AVAILABILITY & WARRANTY:**
   - Stock status in ${location}
   - Delivery timeline
   - Warranty terms and service centers
   - Return/exchange policies

6. **SIMILAR ALTERNATIVES:**
   - 3 similar products in same price range
   - Why users might prefer alternatives

**Output Format (Markdown):**
# ${productName} - Detailed Analysis

## 🔧 Detailed Specifications
[Detailed specs content]

## ⭐ User Reviews & Ratings
[Reviews content with specific examples]

## ✅ Pros
- [Specific advantages]

## ❌ Cons  
- [Specific disadvantages]

## 💰 Price Analysis
[Price trends and recommendations]

## 📦 Availability & Warranty
[Availability and warranty details]

## 🔄 Similar Alternatives
[Alternative products with brief comparison]
`
  }

  private static parseDetailResponse(text: string): ProductDetail {
    const sections: ProductDetail = {
      name: '',
      fullSpecs: '',
      detailedReviews: '',
      pros: [],
      cons: [],
      priceHistory: '',
      availability: '',
      warranty: '',
      alternatives: ''
    }

    // Extract sections based on markdown headers
    const lines = text.split('\n')
    let currentSection = ''
    let content: string[] = []

    const saveCurrentSection = () => {
      if (currentSection && content.length > 0) {
        const sectionContent = content.join('\n').trim()
        
        switch (currentSection) {
          case 'fullSpecs':
            sections.fullSpecs = sectionContent
            break
          case 'detailedReviews':
            sections.detailedReviews = sectionContent
            break
          case 'pros':
            sections.pros = sectionContent.split('\n')
              .filter(l => l.trim().startsWith('-'))
              .map(l => l.trim().substring(1).trim())
            break
          case 'cons':
            sections.cons = sectionContent.split('\n')
              .filter(l => l.trim().startsWith('-'))
              .map(l => l.trim().substring(1).trim())
            break
          case 'priceHistory':
            sections.priceHistory = sectionContent
            break
          case 'availability':
            sections.availability = sectionContent
            break
          case 'alternatives':
            sections.alternatives = sectionContent
            break
        }
        content = []
      }
    }

    for (const line of lines) {
      if (line.startsWith('## 🔧')) {
        saveCurrentSection()
        currentSection = 'fullSpecs'
      } else if (line.startsWith('## ⭐')) {
        saveCurrentSection()
        currentSection = 'detailedReviews'  
      } else if (line.startsWith('## ✅')) {
        saveCurrentSection()
        currentSection = 'pros'
      } else if (line.startsWith('## ❌')) {
        saveCurrentSection()
        currentSection = 'cons'
      } else if (line.startsWith('## 💰')) {
        saveCurrentSection()
        currentSection = 'priceHistory'
      } else if (line.startsWith('## 📦')) {
        saveCurrentSection()
        currentSection = 'availability'
      } else if (line.startsWith('## 🔄')) {
        saveCurrentSection()
        currentSection = 'alternatives'
      } else if (currentSection && !line.startsWith('#')) {
        content.push(line)
      }
    }
    
    // Save the last section
    saveCurrentSection()

    return sections
  }
}
