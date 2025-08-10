export interface Category {
  id: string
  name: string
  description?: string
}

export interface Product {
  id: string
  name: string
  categoryId: string
  description?: string
}

export interface Brand {
  id: string
  name: string
  productIds: string[]
  logo?: string
}

export interface FormData {
  category: string
  product: string
  budget: number[]
  primaryUseCase: string
  secondaryUseCase: string
  selectedBrands: string[]
  preferredFeatures: string
  location: string
  minRating: number[]
}

export interface ProductSuggestion {
  name: string
  price: string
  rating: number
  features: string[]
  pros: string[]
  cons: string[]
  buyLink?: string
}

export interface SuggestionResponse {
  suggestions: string
  products?: ProductSuggestion[]
  timestamp: string
}
