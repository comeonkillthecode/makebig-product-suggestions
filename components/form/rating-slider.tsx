"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RATING_CONFIG } from "@/constants/budget"

interface RatingSliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
}

export function RatingSlider({ value, onValueChange }: RatingSliderProps) {
  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">Minimum Rating: {value[0]} stars</Label>
      <Slider
        value={value}
        onValueChange={onValueChange}
        max={RATING_CONFIG.max}
        min={RATING_CONFIG.min}
        step={RATING_CONFIG.step}
        className="w-full"
      />
    </div>
  )
}
