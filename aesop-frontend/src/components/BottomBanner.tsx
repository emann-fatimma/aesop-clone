import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BottomBanner() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[600px] sm:h-[500px] md:h-[450px] lg:h-[450px]">
        <Image
          src="/bottombanner.avif"
          alt="Understanding your skin"
          fill
          className="object-cover"
          priority
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:absolute lg:left-25">
            <div className="max-w-2xl text-center lg:text-left">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-arial text-white leading-tight mb-4 lg:mb-6">
                Understanding your skin
              </h1>
              <br />
              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-lg text-white leading-relaxed mb-6 lg:mb-8 max-w-md sm:max-w-lg mx-auto lg:mx-0">
                By identifying the characteristics of your skin, we can recommend products best suited to you.
              </p>
              <br />
              {/* Button */}
    
                <Button
                  variant="outline"
                  className="group border-gray-300 bg-transparent hover:bg-stone-700 hover:text-white text-white transition-colors duration-200 w-full sm:w-auto py-3 px-6 text-sm font-medium rounded-none flex items-center justify-center gap-2"
                >
                  Begin the process
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
