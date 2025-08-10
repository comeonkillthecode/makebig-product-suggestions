"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Search } from "lucide-react"
import { CategorySelector } from "@/components/form/category-selector"
import { ProductSelector } from "@/components/form/product-selector"
import { BrandSelector } from "@/components/form/brand-selector"
import { BudgetSlider } from "@/components/form/budget-slider"
import { RatingSlider } from "@/components/form/rating-slider"
import { useProductForm } from "@/hooks/useProductForm"
import { useSuggestions } from "@/hooks/useSuggestions"
import { productPlaceholders } from "@/data/placeholders"
import { Slab } from "react-loading-indicators"
import { useRouter } from 'next/navigation'

export function ProductSuggestionForm() {
  const router = useRouter()
  const {
    formData,
    updateFormData,
    handleCategoryChange,
    handleProductChange,
    handleBrandToggle,
    removeBrand,
    isFormValid,
  } = useProductForm()

  const { isLoading, error, fetchSuggestions } = useSuggestions()

  const currentProductPlaceholders = formData.product
    ? productPlaceholders[formData.product as keyof typeof productPlaceholders]
    : undefined

  const primaryUseCasePlaceholder =
    currentProductPlaceholders?.primaryUseCase || "e.g., Gaming, Office Work, Daily Commute"
  const secondaryUseCasePlaceholder = currentProductPlaceholders?.secondaryUseCase || "e.g., Travel, Entertainment"
  const preferredFeaturesPlaceholder =
    currentProductPlaceholders?.preferredFeatures ||
    "e.g., Long battery life, Lightweight, Water resistant, Fast charging"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    
    try {
      const results = await fetchSuggestions(formData)
      if (results) {
        // Save results to localStorage
        localStorage.setItem('productResults', JSON.stringify(results))
        // Navigate to results page
        router.push('/results')
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      // Error is handled by the hook, so the form stays visible
    }
  }

  return (
    <>
      {/* ✅ Always show the form card */}
      <Card id="suggestion-form" className="mx-auto max-w-4xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">Get Personalized Product Suggestions</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Fill in your preferences and let AI find the perfect products for you
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category and Product */}
            <div className="grid gap-6 md:grid-cols-2">
              <CategorySelector 
                value={formData.category} 
                onValueChange={handleCategoryChange}
              />
              <ProductSelector
                categoryId={formData.category}
                value={formData.product}
                onValueChange={handleProductChange}
              />
            </div>

            {/* Budget */}
            <BudgetSlider 
              value={formData.budget} 
              onValueChange={(value) => updateFormData({ budget: value })}
            />

            {/* Use Cases */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="primaryUseCase" className="text-base font-semibold">
                  Primary Use Case *
                </Label>
                <Input
                  id="primaryUseCase"
                  placeholder={primaryUseCasePlaceholder}
                  value={formData.primaryUseCase}
                  onChange={(e) => updateFormData({ primaryUseCase: e.target.value })}
                  disabled={isLoading} // ✅ Disable during loading
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryUseCase" className="text-base font-semibold">
                  Secondary Use Case
                </Label>
                <Input
                  id="secondaryUseCase"
                  placeholder={secondaryUseCasePlaceholder}
                  value={formData.secondaryUseCase}
                  onChange={(e) => updateFormData({ secondaryUseCase: e.target.value })}
                  disabled={isLoading} // ✅ Disable during loading
                />
              </div>
            </div>

            {/* Brand Selection */}
            <BrandSelector
              productId={formData.product}
              selectedBrandIds={formData.selectedBrands}
              onBrandToggle={handleBrandToggle}
              onBrandRemove={removeBrand}
            />

            {/* Additional Filters */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="preferredFeatures" className="text-base font-semibold">
                  Preferred Features
                </Label>
                <Textarea
                  id="preferredFeatures"
                  placeholder={preferredFeaturesPlaceholder}
                  value={formData.preferredFeatures}
                  onChange={(e) => updateFormData({ preferredFeatures: e.target.value })}
                  disabled={isLoading} // ✅ Disable during loading
                  rows={3}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-semibold">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateFormData({ location: e.target.value })}
                    disabled={isLoading} // ✅ Disable during loading
                  />
                </div>

                <RatingSlider
                  value={formData.minRating}
                  onValueChange={(value) => updateFormData({ minRating: value })}
                />
              </div>
            </div>

            {error && (
              <div className="p-4 text-red-600 bg-red-50 border border-red-200 rounded-md">
                Error: {error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Suggestions...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Get AI Suggestions
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ✅ Loading overlay - shows over the form */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex flex-col items-center space-y-4">
              <Slab
                color={["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]}
                size="large"
                text="Getting AI suggestions..."
                textColor="#374151"
                speedPlus={1}
              />
              <p className="text-gray-600 text-center">
                Please wait while we analyze your preferences and find the best products for you.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
