"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Star, TrendingUp, Award, DollarSign, ShoppingCart, Zap } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Slab } from 'react-loading-indicators'

interface ProductResultsProps {
  results: {
    suggestions: string
    products?: Array<{
      name: string
      price: string
      rating: number
      features: string[]
      pros: string[]
      cons: string[]
      buyLink?: string
    }>
  }
  onBack: () => void
}

interface ParsedProduct {
  modelName: string
  keySpecs: string
  rating: string
  price: string
  bestDeal?: string
  totalSavings?: string
  mrp?: string
  finalPrice?: string
  amazonLink: string
  flipkartLink: string
  features: string[]
  numericRating: number
  numericPrice: number
}

export function ProductResults({ results, onBack }: ProductResultsProps) {
  const router = useRouter()

  const [isMobile, setIsMobile] = useState(false) // ✅ Start with false
  const [isClient, setIsClient] = useState(false) // ✅ Add client-side flag

  // ✅ Handle client-side mounting
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mobile detection hook
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Parse markdown table into structured data (same as before)
  const parseMarkdownTable = (markdown: string): ParsedProduct[] => {
    try {
      const lines = markdown.trim().split('\n')

      // Find table start
      let tableStart = -1
      let headerSeparator = -1

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith('|') && line.endsWith('|') && tableStart === -1) {
          tableStart = i
        }
        if (tableStart !== -1 && line.match(/^\|[-:\s|]+\|$/)) {
          headerSeparator = i
          break
        }
      }

      if (tableStart === -1 || headerSeparator === -1) return []

      // Extract headers
      const headerLine = lines[tableStart].trim()
      const headers = headerLine
        .slice(1, -1)
        .split('|')
        .map(h => h.trim())

      // Extract data rows
      const dataRows = []
      for (let i = headerSeparator + 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (!line.startsWith('|') || !line.endsWith('|')) break

        const cells = line
          .slice(1, -1)
          .split('|')
          .map(c => c.trim())

        if (cells.length === headers.length) {
          dataRows.push(cells)
        }
      }

      // Convert to structured objects (same logic as before)
      return dataRows.map(row => {
        const product: any = {}
        headers.forEach((header, index) => {
          product[header] = row[index]
        })

        const extractLink = (text: string) => {
          const match = text.match(/\[([^\]]*)\]\(([^)]*)\)/)
          return match ? match[2] : text
        }

        const extractRating = (rating: string) => {
          const match = rating.match(/(\d+\.?\d*)/)
          return match ? parseFloat(match[1]) : 0
        }

        const extractPrice = (price: string) => {
          const match = price.match(/₹([\d,]+)/)
          return match ? parseInt(match[1].replace(/,/g, '')) : 0
        }

        const extractFeatures = (specs: string) => {
          return specs.split(',').map(f => f.trim()).filter(f => f.length > 0)
        }

        return {
          modelName: product['Model Name'] || '',
          keySpecs: product['Key Specs'] || '',
          rating: product['Avg. Rating'] || product['Rating'] || '',
          price: product['Current Price (INR)'] || product['Final Price (INR)'] || product['Price (INR)'] || '',
          bestDeal: product['Best Deal'] || '',
          totalSavings: product['Total Savings'] || '',
          mrp: product['MRP (INR)'] || '',
          finalPrice: product['Final Price (INR)'] || '',
          amazonLink: extractLink(product['Amazon.in Search'] || product['Amazon.in Link'] || ''),
          flipkartLink: extractLink(product['Flipkart Search'] || product['Flipkart Link'] || ''),
          features: extractFeatures(product['Key Specs'] || ''),
          numericRating: extractRating(product['Avg. Rating'] || product['Rating'] || ''),
          numericPrice: extractPrice(product['Current Price (INR)'] || product['Final Price (INR)'] || product['Price (INR)'] || '')
        } as ParsedProduct
      })
    } catch (error) {
      console.error('Error parsing markdown table:', error)
      return []
    }
  }

  const handleCardClick = (product: ParsedProduct, index: number) => {
    // Save product data to localStorage
    localStorage.setItem(`product_${index}`, JSON.stringify(product))
    localStorage.setItem(`productName_${index}`, product.modelName)

    // Navigate to product detail page
    router.push(`/product/${index}`)
  }

  const parsedProducts = useMemo(() => {
    return parseMarkdownTable(results.suggestions)
  }, [results.suggestions])

  // ✅ Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Back to Form
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Product Suggestions</h2>
            <p className="text-gray-600">Loading recommendations...</p>
          </div>
        </div>
        
        {/* ✅ Slab Loading Indicator */}
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <Slab
            color={["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]} 
            size="large" 
            text="Getting AI suggestions..." 
            textColor="#374151"
            speedPlus={1}
          />
        </div>
      </div>
    )
  }

  const hasProducts = parsedProducts.length > 0

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
          <ArrowLeft className="h-4 w-4" />
          Back to Form
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Product Suggestions</h2>
          <p className="text-gray-600">Personalized recommendations based on your preferences</p>
        </div>
      </div>
      {!isMobile && <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-600" />
            AI Analysis & Recommendations
          </CardTitle>
          <CardDescription>Here are the personalized product suggestions based on your requirements</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ children }) => (
                  <table className="min-w-full border-collapse border border-gray-300">
                    {children}
                  </table>
                ),
                th: ({ children }) => (
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-medium text-left">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-300 px-4 py-2">
                    {children}
                  </td>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {children}
                  </a>
                )
              }}
            >
              {results.suggestions}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>}

      {/* Product Cards */}
      {hasProducts && (
        <>
          <div className="flex items-center gap-2 pt-4">
            <Zap className="h-5 w-5 text-yellow-500" />
            <h3 className="text-xl font-bold text-gray-900">Quick View Cards</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parsedProducts.map((product, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCardClick(product, index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg leading-tight font-bold">{product.modelName.replaceAll("*","")}</CardTitle>
                      <CardDescription className="mt-1">AI Recommended</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      {product.numericRating}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price Information */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-lg font-semibold text-green-600">
                      {product.finalPrice || product.price}
                    </div>
                    {product.mrp && product.finalPrice && product.mrp !== product.finalPrice && (
                      <div className="text-sm text-gray-500">
                        <span className="line-through">{product.mrp}</span>
                        {product.totalSavings && (
                          <span className="ml-2 text-green-600 font-medium">
                            Save {product.totalSavings}
                          </span>
                        )}
                      </div>
                    )}
                    {product.bestDeal && (
                      <Badge variant="outline" className="text-xs">
                        {product.bestDeal}
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature.length > 20 ? `${feature.substring(0, 20)}...` : feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {product.amazonLink && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(product.amazonLink, '_blank')
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Amazon
                      </Button>
                    )}
                    {product.flipkartLink && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(product.flipkartLink, '_blank')
                        }}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        View on Flipkart
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center pt-6">
        <Button variant="outline" onClick={onBack}>
          Refine Search
        </Button>
        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
          <TrendingUp className="mr-2 h-4 w-4" />
          Get More Suggestions
        </Button>
      </div>
    </div>
  )
}
