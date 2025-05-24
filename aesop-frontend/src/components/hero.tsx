import React from 'react';
import Image from 'next/image';
import { HeroCard } from '@/lib/types';
import {  STRAPI_URL } from '@/lib/api';

interface HeroSectionProps {
  heroData: HeroCard;
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-r from-stone-100 to-blue-400 flex">
      {/* Left Side - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        {/* Brand Name */}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-wide">
          Aesop.
        </h1>
        
        {/* Category */}
        {heroData.Category && (
          <p className="text-sm lg:text-base text-gray-600 mb-4 font-medium tracking-wide uppercase">
            {heroData.Category}
          </p>
        )}
        
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 leading-tight font-light max-w-lg">
          {heroData.Title}
        </h2>
        
        {/* Subtitle/Description */}
        <div className="mb-12 max-w-lg">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
            {heroData.Subtitle}
          </p>
          <p className="text-gray-600 text-sm italic">
            Excludes Gift Kits.
          </p>
        </div>
        
        {/* CTA Button */}
        <button className="inline-flex items-center justify-between border border-gray-900 px-8 py-4 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 max-w-xs group">
          <span className="font-medium">Explore gifts</span>
          <svg 
            className="w-5 h-5 ml-4 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      {/* Right Side - Image */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        {heroData.Image && (
          <div className="relative w-full max-w-md h-96 lg:h-[500px] xl:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-lg transform rotate-3"></div>
            <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src={`${STRAPI_URL}${heroData.Image.url}`}
                alt={heroData.Image.alternativeText || heroData.Title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with brand name */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">
                <span className="text-sm font-medium text-gray-900">Aesop</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}