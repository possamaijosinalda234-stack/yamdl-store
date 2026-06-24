import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Checkout } from '@/components/Checkout';
import { Footer } from '@/components/Footer';

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 min-h-[calc(100vh-300px)]">
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
