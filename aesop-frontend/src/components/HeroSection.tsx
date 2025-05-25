'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getHero } from '@/lib/api';
import { HeroCard } from '@/lib/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export default function HeroSection() {
  const [heroData, setHeroData] = useState<HeroCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getHero();
        console.log('Hero data received in component:', data);
        console.log('Number of hero sections:', data.length);
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading hero section...</p>
      </div>
    );
  }

  if (!heroData.length) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No hero content available</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="space-y-16 md:space-y-24">
        {heroData.map((hero, index) => (
          <section key={hero.id || index} className="container mx-auto px-4 py-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Left Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Category */}
                {hero.Category && (
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {hero.Category}
                  </p>
                )}
                
                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  {hero.Title}
                </h1>
                
                {/* Subtitle/Description */}
                {hero.Subtitle && (
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {hero.Subtitle}
                  </p>
                )}
                
                {/* Read More Button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="group border-gray-300 hover:border-gray-900 transition-colors duration-200"
                  >
                    Read more
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {hero.Image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={hero.Image.url.startsWith('http') ? hero.Image.url : `${STRAPI_URL}${hero.Image.url}`}
                      alt={hero.Image.alternativeText || hero.Title || 'Hero image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      priority={index === 0} // Only prioritize first image
                    />
                  </div>
                ) : (
                  // Fallback when no image is available
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <svg 
                        className="w-16 h-16 text-gray-400 mx-auto" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" 
                        />
                      </svg>
                      <p className="text-gray-500 text-sm">Image not available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}