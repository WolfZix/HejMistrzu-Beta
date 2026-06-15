import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Phone, X } from "lucide-react";

interface PhoneDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PhoneDialog({
  isOpen,
  onOpenChange,
}: PhoneDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-md bg-card border-border rounded-2xl p-8">
                  <DialogClose className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors">
                    <X className="w-4 h-4" />
                  </DialogClose>
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold">
                        Zadzwoń do nas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Masz pytania lub chcesz zarezerwować stolik? Zadzwoń:
                      </p>
                    </div>
                    <a
                      href="tel:+48508302733"
                      className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
                    >
                      +48 508 302 733
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
  );
}