import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Filter, Zap, Shield, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced AI analyzes your preferences to provide highly personalized product recommendations.",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Multiple filter options including budget, brand, features, and ratings for precise results.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get comprehensive product suggestions in seconds, not hours of manual research.",
  },
  {
    icon: Shield,
    title: "Trusted Sources",
    description: "Recommendations based on verified reviews, ratings, and trusted retailer information.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interface designed for users of all technical backgrounds and experience levels.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Stay updated with latest market trends, pricing, and product availability in your region.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of product discovery with our AI-powered recommendation engine
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
