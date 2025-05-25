'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '@/lib/api';
import { Category } from '@/lib/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export default function CategoriesGrid() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log('Categories data received:', data);
        console.log('Number of categories:', data.length);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-16">
      
        <div className="container mx-auto px-4">
        <div className="h-17 bg-white"></div>
        <h2 className="text-3xl  font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Browse our product offering
        </h2>
        <div className="h-13 bg-white"></div>
      
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!categories.length) {
    return (
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
        <div className="h-17 bg-white"></div>
        <h2 className="text-3xl  font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Browse our product offering
        </h2>
        <div className="h-13 bg-white"></div>
          <div className="text-center py-12">
            <p className="text-gray-500">No categories available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="h-17 bg-white"></div>
        <h2 className="text-3xl  font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Browse our product offering
        </h2>
        <div className="h-13 bg-white"></div>
        <br/>
        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.25">
          {categories.map((category, index) => (
            <Link
              key={category.id || index}
              href={category.slug ? `/skin/${category.slug}` : '#'}
              className="group relative aspect-square overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Background Image */}
              {category.Image ? (
                <Image
                  src={category.Image.url.startsWith('http') 
                    ? category.Image.url 
                    : `${STRAPI_URL}${category.Image.url}`
                  }
                  alt={category.Image.alternativeText || category.Name || 'Category image'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              ) : (
                // Fallback gradient background
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
              )}
              
              {/* Dark Overlay */}
              {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" /> */}
              
              {/* Category Name */}
              
              <div className="absolute inset-0 flex items-start justify-start p-8">
                <h3 className="text-white text-lg lg:text-2xl font-medium text-center leading-tight">
                  <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{category.Name}
                </h3>
              </div>
              
            </Link>
          ))}
        </div>
        
        {/* Show message if fewer than 8 categories */}
        {categories.length < 8 && (
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Showing {categories.length} categor{categories.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}