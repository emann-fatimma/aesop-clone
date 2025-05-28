'use client';

import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const ProductSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const visibleItems = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <div className="bg-white py-16">
        <div className="text-center text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 w-full h-full relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side Text */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-sm text-black font-medium">{'\u00A0'.repeat(8)}Skin Care+</div>
            <h2 className="text-4xl font-arial text-gray-800 leading-tight">
              <br />{'\u00A0'.repeat(3)}An intensely <br />{'\u00A0'.repeat(3)}nourishing range
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-md">
              <br />{'\u00A0'.repeat(4)} Our Skin Care+ Range offers replenishment<br />{'\u00A0'.repeat(4)} of the highest order,
              delivering vitamin-rich <br />{'\u00A0'.repeat(4)} hydration to skin in need.
            </p>
          </div>

          {/* Right Side Slider */}
          <div className="lg:col-span-8 relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-1"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {products.map((product, index) => {
                const imageUrl = product.Image?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${product.Image.url}`
                  : '/placeholder-image.jpg';

                return (
                  <div
                    key={product.id}
                    className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 "
                  >
                    <div className="group bg-black/5 overflow-hidden transition-all duration-500 hover:shadow-black/5 flex flex-col h-full relative">
                      {index < 2 && (
                        <div className="absolute top-2 left-2 z-10">
                          <span className="text-amber-700 px-3 py-1 text-xs font-medium rounded">
                            New addition
                          </span>
                        </div>
                      )}
<br/>
                      <Link
                        href={`/products/${product.slug}`}
                        className="relative aspect-[5/5] w-full flex items-center justify-center p-2 overflow-hidden"
                      >
                        <div className="relative w-[80%] h-[80%]">
                          <Image
                            src={imageUrl}
                            alt={product.Image?.alternativeText || product.Name}
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                          />
                        </div>
                      </Link>

                      <div className="p-2 flex flex-col text-center bg-white hover:bg-black/1 transition-colors duration-300 h-25">
                        <Link href={`/products/${product.slug}`}>
                        <br/>
                          <h3 className="text-xs lg:text-base text-black tracking-normal hover:text-neutral-600 transition-colors line-clamp-2">
                            {product.Name}
                          </h3>
                        </Link>
                        <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed mt-2 h-20 font-light">
                          {product.short_description || 'Premium skincare formulation'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            {products.length > visibleItems && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-stone-700 flex items-center justify-center transition-opacity text-white ${
                    currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= products.length - 3}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-stone-700 flex items-center justify-center transition-opacity text-white ${
                    currentIndex >= products.length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
       
    </div>
   
  );
};

export default ProductSlider;



