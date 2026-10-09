import type { MouseEvent } from "react";

export type BadgeKind = "Promocja" | "Bestseller" | "Preorder";

export interface StoreProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  regularPrice: number | null;
  salePrice: number | null;
  onSale: boolean;
  categories: {
    id: number;
    name: string;
  }[];
  image: string;
  badge?: BadgeKind;
  inStock: boolean;
  stock: number;
  hasVariations: boolean;
  variations: ProductVariationFormData[];
  rating?: number | null;
  description: string;
}

export interface StoreProductVariation {
  id: number;
  name: string;
  price: number;
  stock: number;
  inStock: boolean;
  image: string | null;
}

export interface ProductQuickViewProps {
  product: StoreProduct | null;
  open: boolean;
  onClose: (open: boolean) => void;
}

export interface ProductCardProps {
  product: StoreProduct;
  isWishlisted: boolean;
  isNotified: boolean;
  onQuickView: (product: StoreProduct) => void;
  onToggleWishlist: (productId: number) => void;
  onAddToCart: (product: StoreProduct, event: MouseEvent<HTMLButtonElement>) => void;
}

export interface StoreSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export type Category = {
  id: number;
  name: string;
  parent: number;
  count: number;
};

export type ProductFormData = {
  name: string;
  categoryIds: number[];
  stock: string;
  description: string;
  price: string;
  salePrice: string;
  images: File[];
  preorder: boolean;
  onSale: boolean;
  visible: boolean;
  variations: ProductVariationFormData[];
  sku: string;
  gtin: string;
  manageStock: boolean;
  soldIndividually: boolean;
  lowStockThreshold: string;
  backorders: "Nie zezwalaj" | "Zezwalaj" | "Zezwalaj + poinformuj";
  inpostMethods: string[];
  weight: string;
  length: string;
  width: string;
  height: string;
  posAvailable: boolean;
  purchaseNote: string;
  menuOrder: string;
};

export type ProductVariationFormData = {
  name: string;
  price: string;
  salePrice: string;
  stock: string;
  image: File | null;
};