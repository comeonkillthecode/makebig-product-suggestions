"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductService } from "@/utils/product-utils"

interface CategorySelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function CategorySelector({ value, onValueChange }: CategorySelectorProps) {
  const categories = ProductService.getCategories()

  return (
    <div className="space-y-2">
      <Label htmlFor="category" className="text-base font-semibold">
        Category *
      </Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
