import { Link } from '@tanstack/react-router';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';

export function HotProducts() {
  const hotProducts = products.filter(p => p.badge);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
          Hot-selling Products
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {hotProducts.map((product) => (
            <Link
              key={product.id}
              to="/product/$productId"
              params={{ productId: product.id }}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge 
                    className="absolute top-2 left-2 bg-primary text-primary-foreground"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-3">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
