'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product?: Product;
  categorySlug?: string;
  isLoading?: boolean;
}

// Skeleton component
export function ProductCardSkeleton() {
  return (
    <div className="group bg-black/5 border-none overflow-hidden flex flex-col h-full relative">
      {/* Heart Icon Skeleton */}
      <div className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      {/* Image Container Skeleton */}
      <div className="relative aspect-square w-full block overflow-hidden flex items-center justify-center p-12">
        <div className="relative w-3/4 h-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
   
      {/* Content Container Skeleton */}
      <div className="h-50 p-4 lg:p-6 flex flex-col flex-grow text-center bg-stone-200">
        {/* Product Name Skeleton */}
        <div className="mb-2">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>
     
        {/* Short Description Skeleton */}
        <div className="mb-4 flex-grow">
          <div className="h-3 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded w-4/5 mx-auto animate-pulse"></div>
        </div>
     
        {/* Price and Button Container Skeleton */}
        <div className="mt-auto space-y-3">
          {/* Price Skeleton */}
          <div className="flex items-center justify-center">
            <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
          </div>
       
          {/* Button Skeleton */}
          <div className="w-full h-14 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Grid of skeleton cards for loading state
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Main ProductCard component
export function ProductCard({ product, categorySlug, isLoading = false }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Show skeleton while loading or if no product data
  if (isLoading || !product || !categorySlug) {
    return <ProductCardSkeleton />;
  }

  const imageUrl = product.Image?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${product.Image.url}`
    : '/placeholder-image.jpg';
 
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const productUrl = `/skin/${categorySlug}/${product.slug}`;
 
  return (
    <div className="group bg-black/5 border-none overflow-hidden transition-all duration-500 hover:shadow-black/5 flex flex-col h-full relative">
      {/* Heart Icon */}
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center transition-colors duration-200"
        aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
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

      {/* Image Container with loading state */}
      <Link href={productUrl} className="relative aspect-square w-full block overflow-hidden flex items-center justify-center p-12">
        <div className="relative w-3/4 h-3/4">
          {/* Image loading skeleton */}
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg z-10"></div>
          )}
          <Image
            src={imageUrl}
            alt={product.Image?.alternativeText || product.Name}
            fill
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </div>
      </Link>
   
      {/* Content Container */}
      <div className="h-50 p-4 lg:p-6 flex flex-col flex-grow text-center bg-stone-200 hover:bg-black/1 transition-colors duration-300">
        {/* Product Name */}
        <Link href={productUrl} className="block mb-2">
          <h3 className="text-sm lg:text-base font-light text-black leading-tight tracking-normal hover:text-neutral-600 transition-colors duration-300 line-clamp-2">
            <br/>{product.Name}
          </h3>
        </Link>
     
        {/* Short Description */}
        <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed mb-4 flex-grow line-clamp-2 font-light">
          {product.short_description}
        </p>
     
        {/* Price and Button Container */}
        <div className="mt-auto space-y-3">
          {/* Price */}
          <div className="flex items-center justify-center">
            <span className="text-sm lg:text-base font-light text-black tracking-normal">
              {formatPrice(product.Price)}<br/>
            </span>
          </div>
       
          {/* Add to Cart Button */}
          <AddToCartButton/>
           {/* <AddToCartButton product={product} /> */}
        </div>
      </div>
    </div>
  );
}