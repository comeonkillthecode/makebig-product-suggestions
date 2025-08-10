"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Star, ThumbsUp, ThumbsDown, TrendingDown, Package, Shield, RotateCcw } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Slab } from 'react-loading-indicators'

interface ProductDetailViewProps {
  productName: string
  productData: any
  onBack: () => void
  location: string
}

export function ProductDetailView({ productName, productData, onBack, location }: ProductDetailViewProps) {
  const [productDetail, setProductDetail] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/product-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productData: productData,
            location: location
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }

        setProductDetail(data.productDetails)
      } catch (err) {
        setError('Failed to load product details. Please try again.')
        console.error('Error fetching product details:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProductDetails()
  }, [productData, location])

  // Rest of the component remains the same...
  if (loading) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Results
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Please wait while our AI works to get Best Results for you...</h2>
          </div>
        </div>
        <div className="mx-auto max-w-6xl space-y-6">
        
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <Slab
            color={["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]} 
            size="large" 
            text="Our AI is working to get best results" 
            textColor="#374151"
            speedPlus={1}

          />
        </div>
      </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Results
          </Button>
        </div>
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Results
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{productName}</h1>
          <p className="text-gray-600">Detailed Analysis & Reviews</p>
        </div>
      </div>

      {/* Quick Info Card */}
      <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{productName}</CardTitle>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-500" />
                {productData.numericRating}
              </Badge>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">{productData.price}</div>
                {productData.totalSavings && (
                  <div className="text-sm text-green-600">{productData.totalSavings}</div>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {productData.amazonLink && (
              <Button 
                variant="outline" 
                onClick={() => window.open(productData.amazonLink, '_blank')}
                className="flex-1"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Amazon
              </Button>
            )}
            {productData.flipkartLink && (
              <Button 
                variant="outline" 
                onClick={() => window.open(productData.flipkartLink, '_blank')}
                className="flex-1"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Flipkart
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Rest of the sections remain the same... */}
      {/* Detailed Specifications */}
      {productDetail?.fullSpecs && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              Detailed Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              // className="prose max-w-none"
            >
              {productDetail.fullSpecs}
            </ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {/* Reviews */}
      {productDetail?.detailedReviews && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              User Reviews & Expert Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              // className="prose max-w-none"
            >
              {productDetail.detailedReviews}
            </ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        {productDetail?.pros && productDetail.pros.length > 0 && (
          <Card className="shadow-lg border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <ThumbsUp className="h-5 w-5" />
                Pros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {productDetail.pros.map((pro: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Cons */}
        {productDetail?.cons && productDetail.cons.length > 0 && (
          <Card className="shadow-lg border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <ThumbsDown className="h-5 w-5" />
                Cons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {productDetail.cons.map((con: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Price Analysis */}
      {productDetail?.priceHistory && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              Price Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              // className="prose max-w-none"
            >
              {productDetail.priceHistory}
            </ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {/* Availability & Warranty */}
      {productDetail?.availability && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              Availability & Warranty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              // className="prose max-w-none"
            >
              {productDetail.availability}
            </ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {/* Alternatives */}
      {productDetail?.alternatives && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-indigo-600" />
              Similar Alternatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              // className="prose max-w-none"
            >
              {productDetail.alternatives}
            </ReactMarkdown>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
