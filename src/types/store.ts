import type { MouseEvent } from "react";

export type BadgeKind = "Promocja" | "Bestseller" | "Preorder";

export interface StoreProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: BadgeKind;
  inStock: boolean;
  rating?: number | null;
  description: string;
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
