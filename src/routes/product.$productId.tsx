import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { ProductDetail } from '@/components/ProductDetail';
import { Footer } from '@/components/Footer';

export const Route = createFileRoute('/product/$productId')({
  component: ProductPage,
});

function ProductPage() {
  const { productId } = Route.useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductDetail productId={productId} />
      </main>
      <Footer />
    </div>
  );
}
