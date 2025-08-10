import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductSuggestionForm } from "@/components/product-suggestion-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <ProductSuggestionForm />
      </div>
      <FeaturesSection />
    </div>
  )
}
