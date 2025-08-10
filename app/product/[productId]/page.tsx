"use client"

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProductDetailView } from "@/components/product-details"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const _searchParams = useSearchParams()
  const [productData, setProductData] = useState(null)
  const [productName, setProductName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get product data from localStorage
    const savedProduct = localStorage.getItem(`product_${params.productId}`)
    const savedName = localStorage.getItem(`productName_${params.productId}`)
    
    if (savedProduct && savedName) {
      setProductData(JSON.parse(savedProduct))
      setProductName(savedName)
    } else {
      // If no saved data, redirect to results
      router.push('/results')
    }
    setLoading(false)
  }, [params.productId, router])

  const handleBack = () => {
    router.push('/results')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!productData) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <ProductDetailView
        productName={productName}
        productData={productData}
        onBack={handleBack}
        location="Hyderabad, TS"
      />
    </div>
  )
}
