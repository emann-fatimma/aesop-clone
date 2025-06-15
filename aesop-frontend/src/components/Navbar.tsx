'use client';

import React, { useEffect, useState } from 'react';
import { getCategories } from '@/lib/api';
import Link from 'next/link';
import { Category } from '@/lib/types';

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="h-17 bg-stone-300 px-6 flex items-center justify-between text-sm text-gray-600 border-b border-gray-300">
      {/* Left side navigation */}
      <div className="flex items-center space-x-6 overflow-x-auto">
        <Link href="/skin">
          <span className="font-large text-black hover:text-black hover:underline underline-offset-4 whitespace-nowrap transition-colors duration-200">
            {'\u00A0'.repeat(2)}All Skin Care
          </span>
        </Link>
        
        <span className="text-gray-400">{'\u00A0'.repeat(6)}</span>
        
        {categories.map((category, index) => (
          <React.Fragment key={category.id}>
            <Link href={`/skin/${category.slug}`}>
              <span className="hover:text-black hover:underline underline-offset-4 whitespace-nowrap transition-colors duration-200">
                {category.Name}
              </span>
            </Link>
            {index !== categories.length - 1 && (
              <span className="text-gray-400">{'\u00A0'.repeat(10)}</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4 ml-6">
        <span className="hover:text-gray-800 hover:underline underline-offset-4 cursor-pointer transition-colors duration-200">
          Filter
        </span>
        <span className="text-gray-400">+</span>
        <span className="hover:text-gray-800 cursor-pointer transition-colors duration-200 flex items-center">
          Featured
          <svg 
            className="ml-1 w-3 h-3" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Navbar;