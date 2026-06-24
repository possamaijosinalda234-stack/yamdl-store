import { useState, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Filter, ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, categories } from '@/data/products';
import { ProductCard } from './ProductCard';
import type { SortOption, FilterState } from '@/types';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'bestselling', label: 'Best Selling' },
  { value: 'alpha-asc', label: 'Alphabetically, A-Z' },
  { value: 'alpha-desc', label: 'Alphabetically, Z-A' },
  { value: 'price-asc', label: 'Price, low to high' },
  { value: 'price-desc', label: 'Price, high to low' },
  { value: 'date-asc', label: 'Date, old to new' },
  { value: 'date-desc', label: 'Date, new to old' },
];

export function ProductList() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<FilterState>({
    availability: [],
    priceRange: { min: 0, max: 800 },
    category: null,
  });
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply availability filter
    if (filters.availability.length > 0) {
      result = result.filter(p => {
        if (filters.availability.includes('in-stock') && p.inStock) return true;
        if (filters.availability.includes('out-of-stock') && !p.inStock) return true;
        return false;
      });
    }

    // Apply price filter
    result = result.filter(p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);

    // Apply category filter
    if (filters.category) {
      result = result.filter(p => p.categoryId === filters.category);
    }

    // Apply sorting
    switch (sortBy) {
      case 'alpha-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [filters, sortBy]);

  const activeFiltersCount = filters.availability.length + (filters.category ? 1 : 0);

  const clearFilters = () => {
    setFilters({
      availability: [],
      priceRange: { min: 0, max: 800 },
      category: null,
    });
  };

  const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`space-y-6 ${isMobile ? '' : 'sticky top-24'}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Filter</h3>
        {activeFiltersCount > 0 && (
          <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-foreground">
            Clear all
          </button>
        )}
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-medium mb-3">Availability</h4>
        <div className="space-y-2">
          {['in-stock', 'out-of-stock'].map((status) => (
            <label key={status} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.availability.includes(status as 'in-stock' | 'out-of-stock')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(f => ({ ...f, availability: [...f.availability, status as 'in-stock' | 'out-of-stock'] }));
                  } else {
                    setFilters(f => ({ ...f, availability: f.availability.filter(a => a !== status) }));
                  }
                }}
                className="rounded border-border"
              />
              <span className="text-sm">{status === 'in-stock' ? 'In stock' : 'Out of stock'}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-3">Price</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm">$</span>
          <Input
            type="number"
            value={filters.priceRange.min}
            onChange={(e) => setFilters(f => ({ ...f, priceRange: { ...f.priceRange, min: Number(e.target.value) } }))}
            className="w-20"
          />
          <span className="text-sm">to</span>
          <span className="text-sm">$</span>
          <Input
            type="number"
            value={filters.priceRange.max}
            onChange={(e) => setFilters(f => ({ ...f, priceRange: { ...f.priceRange, max: Number(e.target.value) } }))}
            className="w-20"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">The highest price is $758.00</p>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={filters.category === cat.id}
                onChange={() => setFilters(f => ({ ...f, category: cat.id }))}
                className="rounded-full"
              />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={filters.category === null}
              onChange={() => setFilters(f => ({ ...f, category: null }))}
              className="rounded-full"
            />
            <span className="text-sm">All categories</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-semibold mb-8">Products</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                    {activeFiltersCount > 0 && (
                      <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar isMobile />
                  </div>
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors"
              >
                <span className="text-sm">Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-card border rounded-md shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        sortBy === option.value ? 'bg-muted font-medium' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {filters.availability.map((status) => (
                <span key={status} className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs">
                  {status === 'in-stock' ? 'In stock' : 'Out of stock'}
                  <button onClick={() => setFilters(f => ({ ...f, availability: f.availability.filter(a => a !== status) }))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {filters.category && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs">
                  {categories.find(c => c.id === filters.category)?.name}
                  <button onClick={() => setFilters(f => ({ ...f, category: null }))}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SlidersHorizontal className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
