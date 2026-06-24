// 产品类型定义
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categoryId: string;
  description: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  inStock: boolean;
  badge?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  highlights: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export type SortOption = 
  | 'featured' 
  | 'relevance' 
  | 'bestselling' 
  | 'alpha-asc' 
  | 'alpha-desc' 
  | 'price-asc' 
  | 'price-desc' 
  | 'date-asc' 
  | 'date-desc';

export interface FilterState {
  availability: ('in-stock' | 'out-of-stock')[];
  priceRange: { min: number; max: number };
  category: string | null;
}
