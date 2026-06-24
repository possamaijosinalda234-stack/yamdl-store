import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { ProductList } from '@/components/ProductList';
import { Footer } from '@/components/Footer';

export const Route = createFileRoute('/products')({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
