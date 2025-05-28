'use client';

import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductDetailPageProps {
  productSlug: string;
  categorySlug: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productSlug, categorySlug }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find((p: Product) => p.slug === productSlug);
      setProduct(foundProduct || null);
      setLoading(false);
    };
    fetchProduct();
  }, [productSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Top Navigation Bar */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-black">New & Notable</Link>
            <Link href="/skin" className="hover:text-black">Skin Care</Link>
            <Link href="/hand-body" className="hover:text-black">Hand & Body</Link>
            <Link href="/home" className="hover:text-black">Home</Link>
            <Link href="/hair" className="hover:text-black">Hair</Link>
            <Link href="/fragrance" className="hover:text-black">Fragrance</Link>
            <Link href="/kits" className="hover:text-black">Kits & Travel</Link>
            <Link href="/gifts" className="hover:text-black">Gifts</Link>
            <Link href="/read" className="hover:text-black">Read</Link>
            <Link href="/stores" className="hover:text-black">Stores</Link>
            <Link href="/appointments" className="hover:text-black">Facial Appointments</Link>
          </div>
          <div className="flex items-center space-x-6">
            <button className="hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/login" className="hover:text-black">Log in</Link>
            <Link href="/cabinet" className="hover:text-black">Cabinet</Link>
            <Link href="/cart" className="hover:text-black">Cart</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Brand Logo */}
          <div className="flex justify-center items-start pt-8">
            <div className="text-6xl font-light text-gray-800 tracking-wider">
              Aesop.
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/skin" className="hover:underline">Skin</Link>
              <span>•</span>
              <Link href={`/skin/${categorySlug}`} className="hover:underline capitalize">
                {categorySlug.replace('-', ' & ')}
              </Link>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight">
              {product.Name}
            </h1>

            {/* Product Description */}
            <p className="text-gray-700 leading-relaxed text-base">
              {product.long_description || product.short_description}
            </p>

            {/* Size */}
            <div className="space-y-2">
              <h3 className="text-gray-800 font-medium">Size</h3>
              {/* <p className="text-gray-600">{product.Size || '60 mL'}</p> */}
            </div>

            {/* Price */}
            <div className="text-2xl font-light text-gray-800">
              ${product.Price?.toFixed(2) || '470.00'}
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-gray-800 text-white py-4 px-6 hover:bg-gray-900 transition-colors duration-200">
              Add to your cart
            </button>

            {/* Save to Cabinet */}
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Save to cabinet</span>
            </button>
          </div>
        </div>

        {/* Product Image - Centered below */}
        <div className="flex justify-center mt-16">
          {product.Image && (
            <div className="relative">
              <Image
                src={product.Image.url.startsWith('http') ? product.Image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${product.Image.url}`}
                alt={product.Image.alternativeText || product.Name}
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;