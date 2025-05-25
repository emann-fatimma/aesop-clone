import { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12" style={{ backgroundColor: '#FFFFF0' }}>
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div >
      <div className="h-17 bg-stone-300"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-6 bg-stone-200" >
      {products.map((product) => (
        <ProductCard
          key={product.documentId}
          product={product}
        />
      ))}
      
    </div>
    <div className="w-full h-1 bg-gray-700"></div>
    </div>
  );
}