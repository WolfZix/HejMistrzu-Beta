export default function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="font-heading text-primary tracking-wider">
        Ładowanie...
      </p>
    </div>
  );
}