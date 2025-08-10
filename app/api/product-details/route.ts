import { type NextRequest, NextResponse } from "next/server"
import { ProductDetailService } from "@/services/product-details"

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json()
    const { productData, location } = requestData

    if (!productData || !productData.modelName) {
      return NextResponse.json(
        { error: "Missing required field: productData with modelName" },
        { status: 400 },
      )
    }

    const productDetails = await ProductDetailService.getProductDetails(productData, location)

    return NextResponse.json({
      productDetails,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating product details:", error)

    const errorMessage = error instanceof Error ? error.message : "Failed to generate product details"

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
