import { Eye, Heart, ShoppingCart, Check, Tag, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { badgeStyles } from "@/data/store";
import type { ProductCardProps } from "@/types/store";

export function ProductCard({ product, isWishlisted, isNotified, onQuickView, onToggleWishlist, onAddToCart }: ProductCardProps) {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 border border-transparent flex flex-col relative h-full"
    >
      <div className="aspect-square overflow-hidden relative shrink-0 cursor-pointer" onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <Button size="sm" className="bg-primary text-primary-foreground text-xs font-heading tracking-wider shadow-lg shadow-primary/20" onClick={(event) => { event.stopPropagation(); onQuickView(product); }}>
            <Eye className="w-3.5 h-3.5 mr-1.5" /> Szybki podgląd
          </Button>
        </div>
        {product.badge && (
          <Badge className={`absolute top-3 left-3 ${badgeStyles[product.badge]} border text-xs font-medium`}>
            {product.badge === "Promocja" && <Tag className="w-3 h-3 mr-1" />}
            {product.badge}
          </Badge>
        )}
        <button
          onClick={(event) => { event.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur border transition-all duration-300 ${
            isWishlisted ? "bg-red-500/20 border-red-500/30 text-red-400" : "bg-background/60 border-border/50 text-muted-foreground opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-400" : ""}`} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1.5">{product.category}</p>
        <h3 className="font-medium text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="min-h-[20px] flex items-center gap-1.5 mb-3">
          {product.rating ? (
            <>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-3 h-3 ${star <= Math.round(product.rating ?? 0) ? "text-primary fill-primary" : "text-muted/30"}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </>
          ) : (
            <span className="text-[11px] text-muted-foreground/50">Nowość</span>
          )}
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold text-gold-gradient">{product.price} zł</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">{product.originalPrice} zł</span>
            )}
          </div>
          {product.inStock ? (
            <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 h-9 w-9 p-0 rounded-lg transition-all duration-300" onClick={(event) => onAddToCart(product, event)}>
              <AnimatePresence mode="wait">
                {isNotified ? (
                  <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div key="cart" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <ShoppingCart className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          ) : (
            <Button size="sm" disabled variant="outline" className="h-9 text-xs border-border text-muted-foreground">
              Wkrótce
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
