// components/QuoteSection.tsx
import React from 'react';

const QuoteSection = () => {
  return (

    <section className="bg-white min-h-[60vh] flex items-center justify-center">
    
      <div className="max-w-3xl text-center px-4">
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-gray-900 leading-relaxed mb-4">
          ‘Beauty is not in the face; beauty is a light in the heart.’
        </p>
        <p className="text-sm md:text-base font-semibold text-gray-800">
          Kahlil Gibran
        </p>
         <div className="bg-white h-20 w-full"></div>

      </div>
       
      
    </section>
  );
};

export default QuoteSection;
