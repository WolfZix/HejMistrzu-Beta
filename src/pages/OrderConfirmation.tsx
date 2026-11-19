import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock, XCircle, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";
type PaymentStatus = "pending" | "success" | "failed";

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>("pending");
  const orderId = searchParams.get("orderId");
  const paymentStatus = searchParams.get("status");

  useEffect(() => {
    if (paymentStatus === "success") {
      setStatus("success");
    } else if (paymentStatus === "failed") {
      setStatus("failed");
    } else {
      setStatus("pending");
    }
  }, [paymentStatus]);

  const statusConfig = {
    pending: {
      icon: Clock,
      title: "Oczekujemy na potwierdzenie płatności",
      description: "Twoje zamówienie zostało przyjęte. Czekamy na potwierdzenie płatności od operatora.",
      color: "text-amber-500",
      background: "bg-amber-500/10",
      label: "Płatność oczekuje na potwierdzenie",
    },
    success: {
      icon: CheckCircle2,
      title: "Dziękujemy za zamówienie!",
      description: "Twoja płatność została potwierdzona. Zaczynamy przygotowywać Twoje zamówienie.",
      color: "text-green-500",
      background: "bg-green-500/10",
      label: "Płatność zakończona pomyślnie",
    },
    failed: {
      icon: XCircle,
      title: "Płatność nie została zrealizowana",
      description: "Nie udało się potwierdzić płatności. Możesz spróbować ponownie lub skontaktować się z nami.",
      color: "text-red-500",
      background: "bg-red-500/10",
      label: "Płatność nieudana",
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-8 md:p-10 text-center">
          <div className="flex justify-center mb-6">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${currentStatus.background}`}
            >
              {status === "pending" ? (
                <StatusIcon
                  size={42}
                  className={currentStatus.color}
                />
              ) : (
                <StatusIcon
                  size={42}
                  className={currentStatus.color}
                />
              )}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
            {currentStatus.title}
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {currentStatus.description}
          </p>

          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-5 mb-8 text-left">
            {orderId && (
              <div className="flex justify-between items-center gap-4 mb-4">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Numer zamówienia
                </span>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  #{orderId}
                </span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <StatusIcon
                size={20}
                className={currentStatus.color}
              />

              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                {currentStatus.label}
              </span>
            </div>
          </div>

          {status === "pending" && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              Nie zamykaj strony, jeśli właśnie wróciłeś z płatności.
              Status zamówienia zostanie potwierdzony przez nasz system.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              <ShoppingBag size={18} />
              Wróć do sklepu
            </Link>

            {status === "success" && (
              <Link
                to="/account/orders"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-6 py-3 font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              >
                Moje zamówienia
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};