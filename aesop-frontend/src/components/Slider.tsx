




'use client';

import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const Slider = () => {
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
    <div className="bg-white py-16 w-full relative">
      {/* White Spacer */}
      <div className="h-30 bg-white w-full"></div>
<div className="bg-white py-24 h-35 px-8">
  <h2 className="text-3xl md:text-3xl font-serif text-gray-800 max-w-xl leading-snug">
    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Recent additions and<br />{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}revered formulations
  </h2>
</div>

      <div className="relative overflow-hidden">
       <div
  className="flex transition-transform duration-500 ease-in-out gap-3"
  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
>
          {products.map((product, index) => {
            const imageUrl = product.Image?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${product.Image.url}`
              : '/placeholder-image.jpg';

            return (
              <div
                key={product.id}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4"

              >
                <div className="group bg-black/5 overflow-hidden transition-all duration-500 hover:shadow-black/5 flex flex-col h-full relative">
                  {index < 2 && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="text-amber-700 px-3 py-1 text-xs font-medium rounded">
                        New addition
                      </span>
                    </div>
                  )}

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

                  <div className="p-2 flex flex-col text-center bg-white hover:bg-black/1 transition-colors duration-300 h-30">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-sm lg:text-base font-light text-black tracking-normal hover:text-neutral-600 transition-colors line-clamp-2">
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
  );
};

export default Slider;





