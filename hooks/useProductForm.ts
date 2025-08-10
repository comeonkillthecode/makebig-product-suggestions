"use client"

import { useState, useCallback } from "react"
import type { FormData } from "@/types/product"
import { BUDGET_CONFIG, RATING_CONFIG } from "@/constants/budget"

const initialFormData: FormData = {
  category: "electronics",
  product: "smartphone",
  budget: [40000],
  primaryUseCase: "photography",
  secondaryUseCase: "content watching",
  selectedBrands: ["apple", "google", "samsung", "motorola"],
  preferredFeatures: "AMOLED display",
  location: "Hyderabad, TS",
  minRating: [4],
}

export function useProductForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setFormData((prev) => ({
      ...prev,
      category,
      product: "",
      selectedBrands: [],
    }))
  }, [])

  const handleProductChange = useCallback((product: string) => {
    setFormData((prev) => ({
      ...prev,
      product,
      selectedBrands: [],
    }))
  }, [])

  const handleBrandToggle = useCallback((brandId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedBrands: prev.selectedBrands.includes(brandId)
        ? prev.selectedBrands.filter((id) => id !== brandId)
        : [...prev.selectedBrands, brandId],
    }))
  }, [])

  const removeBrand = useCallback((brandId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedBrands: prev.selectedBrands.filter((id) => id !== brandId),
    }))
  }, [])

  const isFormValid = formData.category && formData.product && formData.primaryUseCase

  return {
    formData,
    updateFormData,
    resetForm,
    handleCategoryChange,
    handleProductChange,
    handleBrandToggle,
    removeBrand,
    isFormValid,
  }
}
