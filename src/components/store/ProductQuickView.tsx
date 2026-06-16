import { useState } from "react";
import { Check, Minus, Package, Plus, ShieldCheck, ShoppingCart, Tag, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { badgeStyles } from "@/data/store";
import type { ProductQuickViewProps } from "@/types/store";

export function ProductQuickView({ product, open, onClose }: ProductQuickViewProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let index = 0; index < qty; index += 1) {
      addItem(product);
    }
    setQty(1);
    onClose(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 gap-0 bg-card border-border rounded-2xl overflow-hidden">
        <DialogClose className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors">
          <X className="w-4 h-4" />
        </DialogClose>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square bg-muted/30 relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <div className={`absolute top-4 left-4 px-2 py-0.5 rounded-full flex items-center ${badgeStyles[product.badge]} border text-xs`}>
                {product.badge === "Promocja" && <Tag className="w-3 h-3 mr-1" />}
                {product.badge}
              </div>
            )}
          </div>
          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
            <DialogTitle className="font-heading text-xl font-bold tracking-wide mb-3">{product.name}</DialogTitle>
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-sm ${star <= Math.round(product.rating ?? 0) ? "text-primary" : "text-muted"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.rating})</span>
              </div>
            )}
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</DialogDescription>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-heading text-2xl font-bold text-gold-gradient">{product.price} zł</span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through">{product.originalPrice} zł</span>
              )}
            </div>
            {product.inStock ? (
              <>
                <div className="flex items-center gap-1 mb-2">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs text-green-400">Dostępny</span>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex items-center border border-border rounded-lg">
                    <button onClick={() => setQty((current) => Math.max(1, current - 1))} className="p-2.5 hover:bg-muted/30 transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{qty}</span>
                    <button onClick={() => setQty((current) => current + 1)} className="p-2.5 hover:bg-muted/30 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider text-xs" onClick={handleAddToCart}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Dodaj do koszyka
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 text-muted-foreground text-sm py-3">
                <Package className="w-4 h-4" />
                <span>Niedostępny — data premiery wkrótce</span>
              </div>
            )}
            <div className="flex items-center gap-4 pt-4 border-t border-border mt-4 text-muted-foreground text-xs">
              <div className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Darmowa dostawa od 299zł</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Gwarancja jakości</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
