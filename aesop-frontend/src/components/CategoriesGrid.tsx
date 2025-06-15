'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '@/lib/api';
import { Category, ImageData } from '@/lib/types';

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://willing-frogs-a150e1bcb1.strapiapp.com/admin';

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

  // Helper function to safely get image URL
  const getImageUrl = (image: ImageData | null | undefined): string | null => {
    if (!image?.url) return null;

    try {
      return image.url.startsWith('http') 
        ? image.url 
        : `${STRAPI_URL}${image.url}`;
    } catch (error) {
      console.error('Error processing image URL:', error);
      return null;
    }
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="relative left-15 h-17 bg-white"></div>
          <h2 className="text-3xl font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
            Browse our product offering
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
          <div className="relative left-15 h-17 bg-white"></div>
          <h2 className="text-3xl font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
            Browse our product offering
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
        <div className="h-17 bg-white"></div>
        <h2 className="relative left-15 text-3xl font-serif text-gray-800 mb-12 text-start mt-16 pt-24 pl-9 bg-white">
          Browse our product offering
        </h2>
        <div className="h-13 bg-white"></div>
        <br />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.25">
          {categories.map((category, index) => {
            if (!category) {
              console.warn(`Category at index ${index} is null or undefined`);
              return null;
            }

            const imageUrl = getImageUrl(category.Image);

            return (
              <Link
                key={category.id || `category-${index}`}
                href={category.slug ? `/skin/${category.slug}` : '#'}
                className="group relative aspect-square overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {category.Image && imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={category.Image.alternativeText || category.Name || 'Category image'}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 black/5"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                )}

                <div className="absolute inset-0 flex items-start justify-start p-8">
                  <h3 className="relative left-5 text-white text-lg lg:text-2xl font-medium text-center leading-tight">
                    <br />{category.Name || 'Untitled Category'}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

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
