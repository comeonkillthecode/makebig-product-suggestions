"use client"

import { useState } from "react"
import type { FormData, SuggestionResponse } from "@/types/product"

export function useProductDetails() {
  const [isLoading, setIsLoading] = useState(false)
  const [productDetails, setProductDetails] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchProductDetails = async (prodctData: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/product-deatils", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prodctData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data);
      setProductDetails(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch suggestions"
      setError(errorMessage)
      console.error("Error fetching suggestions:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const clearResults = () => {
    setProductDetails(null)
    setError(null)
  }

  return {
    isLoading,
    productDetails,
    error,
    fetchProductDetails,
    clearResults,
  }
}
