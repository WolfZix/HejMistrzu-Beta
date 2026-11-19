import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock, XCircle, ShoppingBag, ArrowRight } from "lucide-react";
type PaymentStatus = "pending" | "success" | "failed";

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>("pending");
  const orderId = searchParams.get("orderId");
  const paymentStatus = searchParams.get("status");

  useEffect(() => {
    if (paymentStatus === "success") { setStatus("success") } 
    else if (paymentStatus === "failed") { setStatus("failed") }
    else { setStatus("pending") }
  }, [paymentStatus]);

  const statusConfig = {
    pending: {
      icon: Clock,
      title: "Oczekujemy na potwierdzenie płatności",
      description: "Twoje zamówienie zostało przyjęte. Czekamy na potwierdzenie płatności od operatora.",
      color: "text-secondary",
      background: "bg-secondary/10",
      label: "Płatność oczekuje na potwierdzenie",
    },
    success: {
      icon: CheckCircle2,
      title: "Dziękujemy za zamówienie!",
      description: "Twoja płatność została potwierdzona. Zaczynamy przygotowywać Twoje zamówienie.",
      color: "text-green-400",
      background: "bg-green-400/10",
      label: "Płatność zakończona pomyślnie",
    },
    failed: {
      icon: XCircle,
      title: "Płatność nie została zrealizowana",
      description: "Nie udało się potwierdzić płatności. Możesz spróbować ponownie lub skontaktować się z nami.",
      color: "text-red-400",
      background: "bg-red-400/10",
      label: "Płatność nieudana",
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <main className="min-h-[65vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl text-center">

        <div className="flex justify-center mb-8">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center ${currentStatus.background}`}
          >
            <StatusIcon
              size={48}
              strokeWidth={1.5}
              className={currentStatus.color}
            />
          </div>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-5">
          {currentStatus.title}
        </h1>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          {currentStatus.description}
        </p>

        <div className="mt-12 max-w-md mx-auto">
          {orderId && (
            <div className="flex justify-between items-center py-4 border-b border-border">
              <span className="text-muted-foreground">
                Numer zamówienia
              </span>

              <span className="font-semibold text-primary">
                #{orderId}
              </span>
            </div>
          )}

          <div className="flex items-center justify-center gap-3 py-5">
            <StatusIcon
              size={20}
              className={currentStatus.color}
            />
            <span className="text-foreground font-medium">
              {currentStatus.label}
            </span>
          </div>
        </div>

        {status === "pending" && (
          <p className="text-sm text-muted-foreground max-w-md mx-auto mt-5 leading-relaxed">
            Nie musisz odświeżać strony. Nasz system automatycznie
            zweryfikuje status płatności.
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition"
          >
            <ShoppingBag size={18} />
            Wróć do sklepu
          </Link>

          {status === "success" && (
            <Link
              to="/account/orders"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition"
            >
              Moje zamówienia
              <ArrowRight size={18} />
            </Link>
          )}
        </div>

        <div className="mt-16">
          <p className="font-heading text-sm tracking-widest text-primary">
            HEJ MISTRZU
          </p>
        </div>
      </div>
    </main>
  );
};