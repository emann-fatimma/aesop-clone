'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  categorySlug: string; // Add categorySlug prop
}

export function ProductCard({ product, categorySlug }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  
  const imageUrl = product.Image?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${product.Image.url}`
    : '/placeholder-image.jpg';
 
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Updated URL to include category slug
  const productUrl = `/skin/${categorySlug}/${product.slug}`;
 
  return (
    <div className="group bg-black/5 border-none overflow-hidden transition-all duration-500  hover:shadow-black/5 flex flex-col h-full relative">
      {/* Heart Icon */}
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center transition-colors duration-200"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill={isLiked ? "#57534e" : "none"} 
          stroke={isLiked ? "#57534e" : "#a8a29e"} 
          strokeWidth="1.5"
          className="transition-colors duration-200"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Image Container - Minimalist with subtle hover effect */}
      <Link href={productUrl} className="relative aspect-square w-full  block overflow-hidden flex items-center justify-center p-12">
        <div className="relative w-3/4 h-3/4">
          <Image
            src={imageUrl}
            alt={product.Image?.alternativeText || product.Name}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Subtle overlay on hover */}
        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" /> */}
      </Link>
   
      {/* Content Container - Clean typography and spacing */}
      <div className="h-50 p-4 lg:p-6 flex flex-col flex-grow text-center bg-stone-200 hover:bg-black/1 transition-colors duration-300" >
        {/* Product Name - Aesop's clean typography */}
        <Link href={productUrl} className="block mb-2">
          <h3 className="text-sm lg:text-base font-light text-black leading-tight tracking-normal hover:text-neutral-600 transition-colors duration-300 line-clamp-2">
            <br/>{product.Name}
          </h3>
        </Link>
     
        {/* Short Description - Subtle and minimal */}
        <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed mb-4 flex-grow line-clamp-2 font-light">
          {product.short_description}
        </p>
     
        {/* Price and Button Container - Always at bottom */}
        <div className="mt-auto space-y-3">
          {/* Price - Clean and prominent */}
          <div className="flex items-center justify-center">
            <span className="text-sm lg:text-base font-light text-black tracking-normal">
              {formatPrice(product.Price)}<br/>
            </span>
          </div>
       
          {/* Add to Cart Button - Hidden by default, visible on card hover */}
          <button className="group/btn w-full bg-stone-200 text-white py-3 px-4 text-xs lg:text-sm font-light transition-all duration-300 group-hover:bg-stone-800 group-hover:text-white border border-transparent group-hover:border-black relative overflow-hidden h-14">
            <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to your cart</span>
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
}





