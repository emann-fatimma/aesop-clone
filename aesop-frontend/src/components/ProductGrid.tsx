import { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface ProductGridProps {
  products: Product[];
  categorySlug: string; // Add categorySlug prop
}

export function ProductGrid({ products, categorySlug }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12" style={{ backgroundColor: '#FFFFF0' }}>
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* <div className="h-17 bg-stone-300"></div> */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 p-6 bg-stone-200">
        {products.map((product) => (
          <ProductCard
            key={product.documentId}
            product={product}
            categorySlug={categorySlug}
          />
        ))}
      </div>
      <div className="w-full h-20 bg-stone-200"></div>

      {/* Understanding Your Skin Section */}
      {/* Mobile Layout: Image on top, text below */}
      <div className="block md:hidden bg-stone-200">
        {/* Mobile Image */}
        <div className="w-full h-80 relative">
          <Image
            src="/ProductGridImage.webp"
            alt="Understanding your skin guide"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Mobile Text Content */}
        <div className="px-6 py-8 bg-stone-200">
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-light text-black leading-tight text-center">
              Understanding your skin
            </h2>
            
            <p className="text-neutral-600 text-sm leading-relaxed font-light text-center">
              To better understand the particularities and needs of your skin, and to determine which products are most appropriate to clarify, nourish and protect it, we invite you to discover our guide.
            </p>
            
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                className="group bg-stone-200 border-gray-300 hover:bg-stone-700 hover:text-white transition-colors duration-200 px-8 py-6 text-sm font-medium rounded-none flex items-center gap-2"
              >
                <Link href="/skin">Explore skin types</Link>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original design */}
      <div className="hidden md:block relative bg-stone-200 py-16 px-8 lg:px-16 max-w-7xl mx-auto h-96">
        {/* Image Content - 70% of right side */}
        <div className="absolute right-0 top-0 w-[60%] h-full">
          <Image
            src="/ProductGridImage.webp"
            alt="Understanding your skin guide"
            fill
            className="object-cover"
            sizes="70vw"
          />
        </div>

        {/* Text Content - Absolutely positioned on left */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10 max-w-md">
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
            Understanding your skin
          </h2>
          <br/>
          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-8 font-light">
            To better understand the particularities and<br/>needs of your skin, and to determine which<br/>
            products are most appropriate to clarify,<br/>nourish and protect it, we invite you<br/>to 
            discover our guide.
          </p>
          <br/>
          <Button
            variant="outline"
            className="group bg-stone-200 border-gray-300 hover:bg-stone-700 hover:text-white transition-colors duration-200 px-20 py-12 text-base font-medium rounded-none flex items-center gap-2"
          >
            <Link href="/skin">Explore skin types</Link>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
      
      <div className="w-full h-20 bg-stone-200"></div>
    </div>
  );
}





