"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProductResults } from "@/components/product-results"

export default function ResultsPage() {
  // const searchParams = useSearchParams()
  const router = useRouter()
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get results from localStorage or make API call with search params
    const savedResults = localStorage.getItem('productResults')
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    } else {
      // If no saved results, redirect back to home
      router.push('/')
    }
    setLoading(false)
  }, [router])

  const handleBack = () => {
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!results) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <ProductResults results={results} onBack={handleBack} />
    </div>
  )
}
