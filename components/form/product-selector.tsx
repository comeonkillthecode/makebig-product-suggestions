"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductService } from "@/utils/product-utils"

interface ProductSelectorProps {
  categoryId: string
  value: string
  onValueChange: (value: string) => void
}

export function ProductSelector({ categoryId, value, onValueChange }: ProductSelectorProps) {
  const products = categoryId ? ProductService.getProductsByCategory(categoryId) : []

  return (
    <div className="space-y-2">
      <Label htmlFor="product" className="text-base font-semibold">
        Product *
      </Label>
      <Select value={value} onValueChange={onValueChange} disabled={!categoryId}>
        <SelectTrigger>
          <SelectValue placeholder={categoryId ? "Select a product" : "Select a category first"} />
        </SelectTrigger>
        <SelectContent>
          {products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
