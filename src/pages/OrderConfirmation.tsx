import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  XCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import type { PaymentStatus } from "@/types/order";

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>("PENDING");

  const orderId = searchParams.get("orderId");
  const paymentStatus = searchParams.get("status");
  const sessionId = searchParams.get("sessionId");

  useEffect(() => {
    if (!sessionId) return;
    const fetchOrderStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/order/${sessionId}/status`);
        if (!response.ok) return;
        const data = await response.json();
        const paymentStatus: PaymentStatus = data.order.payment_status;
        setStatus(paymentStatus);
        if (paymentStatus !== "PENDING") clearInterval(interval);
      } catch (error) { console.error("Błąd pobierania statusu zamówienia:", error) }
    };
    fetchOrderStatus();
    const interval = setInterval(fetchOrderStatus, 5000);
    return () => clearInterval(interval);
  }, [sessionId]);

  const statusConfig = {
    PENDING: {
      icon: Clock,
      title: "Oczekujemy na potwierdzenie płatności",
      description:
        "Twoje zamówienie zostało przyjęte. Czekamy na potwierdzenie płatności od operatora.",
      color: "text-secondary",
      background: "bg-secondary/10 border-secondary/20",
      label: "Płatność oczekuje na potwierdzenie",
    },
    PAID: {
      icon: CheckCircle2,
      title: "Dziękujemy za zamówienie!",
      description:
        "Twoja płatność została potwierdzona. Zaczynamy przygotowywać Twoje zamówienie.",
      color: "text-green-400",
      background: "bg-green-400/10 border-green-400/20",
      label: "Płatność zakończona pomyślnie",
    },
    FAILED: {
      icon: XCircle,
      title: "Płatność nie została zrealizowana",
      description:
        "Nie udało się potwierdzić płatności. Możesz spróbować ponownie lub skontaktować się z nami.",
      color: "text-red-400",
      background: "bg-red-400/10 border-red-400/20",
      label: "Płatność nieudana",
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <main className="min-h-[65vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="w-full max-w-2xl">

        {/* Główna karta */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

          {/* Dekoracyjny złoty akcent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="px-6 py-8 md:px-12 md:py-10 text-center">

            {/* Ikona statusu */}
            <div className="flex justify-center mb-8">
              <div
                className={`w-20 h-20 rounded-full border flex items-center justify-center ${currentStatus.background}`}
              >
                <StatusIcon
                  size={46}
                  strokeWidth={1.5}
                  className={currentStatus.color}
                />
              </div>
            </div>

            {/* Nagłówek */}
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-2 leading-tight">
              {currentStatus.title}
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              {currentStatus.description}
            </p>

            {/* Informacje o zamówieniu */}
            <div className="mt-5 max-w-md mx-auto">

              {orderId && (
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-muted-foreground text-sm">
                    Numer zamówienia
                  </span>

                  <span className="font-semibold text-primary">
                    #{orderId}
                  </span>
                </div>
              )}

              <div
                className={`flex items-center justify-center gap-3 rounded-xl border px-4 py-4 mt-5 ${currentStatus.background}`}
              >
                <StatusIcon
                  size={20}
                  className={currentStatus.color}
                />

                <span className="text-foreground text-sm font-medium">
                  {currentStatus.label}
                </span>
              </div>
            </div>

            {/* Informacja dodatkowa */}
            {status === "PENDING" && (
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-6 leading-relaxed">
                Nie musisz odświeżać strony. Nasz system automatycznie
                zweryfikuje status płatności.
              </p>
            )}

            {/* Przyciski */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">

              <Link
                to="/sklep"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all duration-200"
              >
                <ShoppingBag size={18} />
                Wróć do sklepu
              </Link>

              {status === "PAID" && (
                <Link
                  to="/account/orders"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border text-foreground hover:bg-muted transition-all duration-200"
                >
                  Moje zamówienia
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>

            {/* Podpis */}
            <div className="mt-8 pt-8 border-t border-border/60">
              <p className="font-heading text-sm tracking-[0.2em] text-gold-gradient">
                HEJ MISTRZU
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}