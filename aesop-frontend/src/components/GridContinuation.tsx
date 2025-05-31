'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getHero } from '@/lib/api';
import { HeroCard } from '@/lib/types';


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export default function GridContinuation() {
  const [heroData, setHeroData] = useState<HeroCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getHero();
        console.log('Hero data received in component:', data);
        // Only take first 2 hero sections
        setHeroData(data.slice(0, 2));
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  const getFirstImage = (hero: HeroCard) => {
    if (hero.Image && Array.isArray(hero.Image) && hero.Image.length > 0) {
      return hero.Image[0]; // Always use first image only
    }
    return null;
  };

  if (loading) {
    return (
      <div className="bg-white animate-pulse flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading</p>
      </div>
    );
  }

  if (!heroData.length) {
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {heroData.map((hero, index) => {
        const currentImage = getFirstImage(hero);

        return (
          <div key={hero.id || index}>
            <section className="container mx-auto px-4 py-8">
              {/* Mobile Layout: Image on top, text below */}
              <div className="block md:hidden">
                {/* Mobile Image */}
                <div className="w-full mb-6 relative">
                  {currentImage ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={
                          currentImage?.url?.startsWith('http')
                            ? currentImage.url
                            : `${STRAPI_URL}${currentImage?.url}`
                        }
                        alt={currentImage?.alternativeText || hero.Title || 'Hero image'}
                        fill
                        className="object-cover transition-opacity duration-500"
                        sizes="100vw"
                        priority={index === 0}
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
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

                {/* Mobile Content - Static */}
                <div className="space-y-4 px-2">
                  {hero.Category && (
                    <p className="text-sm font-medium text-gray-600">{hero.Category}<br/></p>
                  )}
                    
                  <h1 className="text-2xl font-arial text-gray-800 leading-tight">
                    {hero.Title}
                  </h1>

                  {hero.Subtitle && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {hero.Subtitle}
                    </p>
                  )}

                  <div className="pt-4">
                  </div>
                </div>
              </div>

              {/* Desktop Layout: Text on left, Image on right */}
              <div className="hidden md:flex items-center justify-start gap-5">
                <div className="flex items-center justify-start gap-5 w-full flex-row">
                  {/* Left Spacer */}
                  <div style={{ width: '10%' }} />

                  {/* Left Content - Static */}
                  <div style={{ width: '30%' }} className="space-y-6">
                    {hero.Category && (
                      <p className="text-sm font-medium text-gray-600">{hero.Category}</p>
                    )}

                    <h1 className="text-3xl lg:text-4xl font-arial text-gray-800 leading-tight">
                      {hero.Title}
                    </h1>

                    {hero.Subtitle && (
                      <p className="ml-2.5 text-md text-gray-600 leading-relaxed max-w-md">
                        {hero.Subtitle}
                      </p>
                    )}
                    <br/>
                    <div className="pt-4">

                    </div>
                  </div>

                  {/* Right Image - Static */}
                  <div style={{ width: '60%' }} className="relative">
                    {currentImage ? (
                      <div className="relative aspect-[4/3] w-full overflow-hidden h-110 bg-gray-100">
                        <Image
                          src={
                            currentImage?.url?.startsWith('http')
                              ? currentImage.url
                              : `${STRAPI_URL}${currentImage?.url}`
                          }
                          alt={currentImage?.alternativeText || hero.Title || 'Hero image'}
                          fill
                          className="object-cover transition-opacity duration-500"
                          sizes="100vw"
                          priority={index === 0}
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
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
              </div>
            </section>

            {/* Spacer after each hero section */}
            <div className="w-full h-36 bg-white"></div>
          </div>
        );
      })}
    </div>
  );
}