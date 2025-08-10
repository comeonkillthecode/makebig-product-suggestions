"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Target, Zap } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("suggestion-form")
    formElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Recommendations</span>
            </div>
          </div>

          {/* Add the MakeBig brand title here */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">MakeBig</h2>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Find Your Perfect
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Product
            </span>
          </h1>

          <p className="mb-8 text-xl text-blue-100 md:text-2xl">
            Get personalized product recommendations tailored to your needs, budget, and preferences using advanced AI
            technology.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-400" />
              <span>Personalized Suggestions</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span>AI-Powered</span>
            </div>
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            Get Started
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
