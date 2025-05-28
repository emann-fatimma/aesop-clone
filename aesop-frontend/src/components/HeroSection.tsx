// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { getHero } from '@/lib/api';
// import { HeroCard } from '@/lib/types';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';  

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// export default function HeroSection() {
//   const [heroData, setHeroData] = useState<HeroCard[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHeroData = async () => {
//       try {
//         const data = await getHero();
//         console.log('Hero data received in component:', data);
//         console.log('Number of hero sections:', data.length);
//         setHeroData(data);
//       } catch (error) {
//         console.error('Error fetching hero data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-white animate-pulse flex items-center justify-center">
//         <p className="text-gray-500">Loading hero section...</p>
//       </div>
//     );
//   }

//   if (!heroData.length) {
//     return (
//       <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-500">No hero content available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white">
//       {heroData.map((hero, index) => (
//         <div key={hero.id || index}>
//           <section className="container mx-auto px-4 py-8">
//             <div
//               className={`flex items-center justify-start gap-5 ${
//                 index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
//               }`}
//             >
//               {/* Left Spacer (blank space) */}
//               <div style={{ width: '10%' }} />

//               {/* Left Content */}
//               <div style={{ width: '30%' }} className="space-y-6">
//                 {hero.Category && (
//                   <p className="text-sm font-medium text-gray-600">
//                     {hero.Category}
//                   </p>
//                 )}

//                 <h1 className="text-3xl lg:text-4xl font-arial  text-gray-800 leading-tight">
//                   {hero.Title}
//                 </h1>

//                 {hero.Subtitle && (
//                   <p className="ml-2.5 text-md text-gray-600 leading-relaxed max-w-md">
//                     {hero.Subtitle}
//                   </p>
//                 )}

//                 <div className="pt-4">
// <br/>


// <Button
//   variant="outline"
//   className="group border-gray-300 hover:bg-stone-700 hover:text-white transition-colors duration-200 px-20 py-12 text-base font-medium rounded-none flex items-around"
// >
//   <Link href="/skin">View the menu</Link>
//   <svg
//     className=" w-15 h-15 group-hover:translate-x-1 transition-transform duration-200"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeWidth={2}
//       d="M17 8l4 4m0 0l-4 4m4-4H3"
//     />
//   </svg>
// </Button>

//                 </div>
//               </div>

//               {/* Right Image */}
//               <div style={{ width: '60%' }} className="relative">
//                 {hero.Image ? (
//                   <div className="relative aspect-[4/3] w-full overflow-hidden h-110 bg-gray-100">
//                     <Image
//                       src={
//                         hero.Image.url.startsWith('http')
//                           ? hero.Image.url
//                           : `${STRAPI_URL}${hero.Image.url}`
//                       }
//                       alt={hero.Image.alternativeText || hero.Title || 'Hero image'}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
//                       priority={index === 0}
//                     />
//                   </div>
//                 ) : (
//                   <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                     <div className="text-center space-y-2">
//                       <svg
//                         className="w-16 h-16 text-gray-400 mx-auto"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1}
//                           d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
//                         />
//                       </svg>
//                       <p className="text-gray-500 text-sm">Image not available</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </section>

//           <div className="w-full h-36 bg-white"></div>
//         </div>
//       ))}
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getHero } from '@/lib/api';
import { HeroCard } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductSlider from '@/components/ProductSlider';

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
      <div className="bg-white animate-pulse flex items-center justify-center">
        <p className="text-gray-500">Loading hero section...</p>
      </div>
    );
  }

  if (!heroData.length) {
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No hero content available</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {heroData.map((hero, index) => (
        <div key={hero.id || index}>
          <section className="container mx-auto px-4 py-8">
            <div
              className={`flex items-center justify-start gap-5 ${
                index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Left Spacer */}
              <div style={{ width: '10%' }} />

              {/* Left Content */}
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
                  <Button
                    variant="outline"
                    className="group border-gray-300 hover:bg-stone-700 hover:text-white transition-colors duration-200 px-20 py-12 text-base font-medium rounded-none flex items-around"
                  >
                    <Link href="/skin">View the menu</Link>
                    <svg
                      className="w-15 h-15 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div style={{ width: '60%' }} className="relative">
                {hero.Image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden h-110 bg-gray-100">
                    <Image
                      src={
                        hero.Image.url.startsWith('http')
                          ? hero.Image.url
                          : `${STRAPI_URL}${hero.Image.url}`
                      }
                      alt={hero.Image.alternativeText || hero.Title || 'Hero image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
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
          </section>

          {/* Product Slider after the first hero */}
{index === 0 && (
  <>
    <div className="w-full h-35 bg-white" />
    <ProductSlider />
    <div className="w-full h-1 bg-white" />
  </>
)}


          {/* Spacer after each hero section */}
          <div className="w-full h-36 bg-white"></div>
        </div>
      ))}
    </div>
  );
}




// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { getHero } from '@/lib/api';
// import { HeroCard } from '@/lib/types';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import ProductSlider from '@/components/ProductSlider'; // <-- Add this import

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// export default function HeroSection() {
//   const [heroData, setHeroData] = useState<HeroCard[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHeroData = async () => {
//       try {
//         const data = await getHero();
//         console.log('Hero data received in component:', data);
//         console.log('Number of hero sections:', data.length);
//         setHeroData(data);
//       } catch (error) {
//         console.error('Error fetching hero data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-white animate-pulse flex items-center justify-center">
//         <p className="text-gray-500">Loading hero section...</p>
//       </div>
//     );
//   }

//   if (!heroData.length) {
//     return (
//       <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-500">No hero content available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white">
//       {heroData.map((hero, index) => (
//         <div key={hero.id || index}>
//           <section className="container mx-auto px-4 py-8">
//             <div
//               className={`flex items-center justify-start gap-5 ${
//                 index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
//               }`}
//             >
//               {/* Left Spacer */}
//               <div style={{ width: '10%' }} />

//               {/* Left Content */}
//               <div style={{ width: '30%' }} className="space-y-6">
//                 {hero.Category && (
//                   <p className="text-sm font-medium text-gray-600">{hero.Category}</p>
//                 )}

//                 <h1 className="text-3xl lg:text-4xl font-arial text-gray-800 leading-tight">
//                   {hero.Title}
//                 </h1>

//                 {hero.Subtitle && (
//                   <p className="ml-2.5 text-md text-gray-600 leading-relaxed max-w-md">
//                     {hero.Subtitle}
//                   </p>
//                 )}

//                 <div className="pt-4">
//                   <Button
//                     variant="outline"
//                     className="group border-gray-300 hover:bg-stone-700 hover:text-white transition-colors duration-200 px-20 py-12 text-base font-medium rounded-none flex items-around"
//                   >
//                     <Link href="/skin">View the menu</Link>
//                     <svg
//                       className="w-15 h-15 group-hover:translate-x-1 transition-transform duration-200"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </Button>
//                 </div>
//               </div>

//               {/* Right Image */}
//               <div style={{ width: '60%' }} className="relative">
//                 {hero.Image ? (
//                   <div className="relative aspect-[4/3] w-full overflow-hidden h-110 bg-gray-100">
//                     <Image
//                       src={
//                         hero.Image.url.startsWith('http')
//                           ? hero.Image.url
//                           : `${STRAPI_URL}${hero.Image.url}`
//                       }
//                       alt={hero.Image.alternativeText || hero.Title || 'Hero image'}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
//                       priority={index === 0}
//                     />
//                   </div>
//                 ) : (
//                   <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                     <div className="text-center space-y-2">
//                       <svg
//                         className="w-16 h-16 text-gray-400 mx-auto"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1}
//                           d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
//                         />
//                       </svg>
//                       <p className="text-gray-500 text-sm">Image not available</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Insert the ProductSlider AFTER the first hero section */}
//           {index === 0 && (
//             <div className="my-10">
//               <ProductSlider />

            
//             </div>

//           )}

//           <div className="w-full h-36 bg-white"></div>
//         </div>
//       ))}
//     </div>
//   );
// }

