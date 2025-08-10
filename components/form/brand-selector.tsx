"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { ProductService } from "@/utils/product-utils"

interface BrandSelectorProps {
  productId: string
  selectedBrandIds: string[]
  onBrandToggle: (brandId: string) => void
  onBrandRemove: (brandId: string) => void
}

export function BrandSelector({ productId, selectedBrandIds, onBrandToggle, onBrandRemove }: BrandSelectorProps) {
  const availableBrands = productId ? ProductService.getBrandsByProduct(productId) : []
  const selectedBrands = ProductService.getBrandsByIds(selectedBrandIds)
  const product = ProductService.getProductById(productId)

  if (!productId || availableBrands.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">
        Preferred Brands for {product?.name}
        <span className="text-sm font-normal text-gray-500 ml-2">({availableBrands.length} brands available)</span>
      </Label>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
        {availableBrands.map((brand) => (
          <div key={brand.id} className="flex items-center space-x-2">
            <Checkbox
              id={brand.id}
              checked={selectedBrandIds.includes(brand.id)}
              onCheckedChange={() => onBrandToggle(brand.id)}
            />
            <Label htmlFor={brand.id} className="text-sm font-medium cursor-pointer">
              {brand.name}
            </Label>
          </div>
        ))}
      </div>

      {selectedBrands.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Selected Brands:</Label>
          <div className="flex flex-wrap gap-2">
            {selectedBrands.map((brand) => (
              <Badge key={brand.id} variant="secondary" className="flex items-center gap-1">
                {brand.name}
                <X className="h-3 w-3 cursor-pointer" onClick={() => onBrandRemove(brand.id)} />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
