import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';

export const Route = createFileRoute('/cart')({
  component: CartPage,
});

function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 min-h-[calc(100vh-300px)]">
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
