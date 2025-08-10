"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { BUDGET_CONFIG } from "@/constants/budget"

interface BudgetSliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
}

export function BudgetSlider({ value, onValueChange }: BudgetSliderProps) {
  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">Budget: ₹{value[0].toLocaleString()}</Label>
      <Slider
        value={value}
        onValueChange={onValueChange}
        max={BUDGET_CONFIG.max}
        min={BUDGET_CONFIG.min}
        step={BUDGET_CONFIG.step}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-gray-500">
        <span>₹{BUDGET_CONFIG.min.toLocaleString()}</span>
        <span>₹{BUDGET_CONFIG.max.toLocaleString()}+</span>
      </div>
    </div>
  )
}
