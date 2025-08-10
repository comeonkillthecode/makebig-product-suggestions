import { categories } from "@/data/categories"
import { products } from "@/data/products"
import { brands } from "@/data/brands"
import type { Category, Product, Brand } from "@/types/product"

export class ProductService {
  static getCategories(): Category[] {
    return categories
  }

  static getProductsByCategory(categoryId: string): Product[] {
    return products.filter((product) => product.categoryId === categoryId)
  }

  static getBrandsByProduct(productId: string): Brand[] {
    return brands.filter((brand) => brand.productIds.includes(productId))
  }

  static getCategoryById(categoryId: string): Category | undefined {
    return categories.find((category) => category.id === categoryId)
  }

  static getProductById(productId: string): Product | undefined {
    return products.find((product) => product.id === productId)
  }

  static getBrandById(brandId: string): Brand | undefined {
    return brands.find((brand) => brand.id === brandId)
  }

  static getBrandsByIds(brandIds: string[]): Brand[] {
    return brands.filter((brand) => brandIds.includes(brand.id))
  }

  static searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(lowercaseQuery))
  }

  static searchBrands(query: string): Brand[] {
    const lowercaseQuery = query.toLowerCase()
    return brands.filter((brand) => brand.name.toLowerCase().includes(lowercaseQuery))
  }
}
