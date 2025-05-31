'use client';

import React from 'react';

const SkinCareBanner: React.FC = () => {
  return (
    <section className="w-full">
      {/* Mobile Layout: Image above, text below */}
      <div className="block md:hidden">
        {/* Mobile Image */}
        <div 
          className="w-full h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/aesopSkinbg.avif')" }}
        />
        
        {/* Mobile Text Section */}
        <div className="w-full bg-white py-8 px-6 ">
          <div className="max-w-md mx-auto space-y-6">
            {/* Aēsop Title */}
            {/* <div className="text-center">
              <h1 className="text-3xl font-serif text-gray-800">Aēsop.</h1>
            </div>
             */}
            {/* Skin Care Content */}
            <div className="text-left space-y-4 "><br/>
              <h2 className="text-2xl font-serif text-gray-800">Skin Care</h2><br/>
              <p className="text-sm leading-relaxed text-gray-800">
                Skin is ever-changing—it responds to environment, lifestyle and diet. Our range is designed with this in mind, catering to different preferences and needs to guide you towards optimal skin health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original design */}
      <div 
        className="hidden md:flex w-full h-125 bg-cover bg-center items-center justify-between px-12"
        style={{ backgroundImage: "url('/aesopSkinbg.avif')" }}
      >
        {/* Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-[150px_3fr] gap-x-7 max-w-6xl w-full text-gray-800">
          {/* Left Column: Aēsop */}
          <div className="flex justify-end mt-[-35px] ml-2">
            <h1 className="text-4xl font-serif text-gray-800">Aēsop.</h1>
          </div>

          {/* Right Column: Skin Care Text */}
          <div>
            <h2 className="text-3xl font-serif mb-4">Skin Care</h2>
            <p className="text-md leading-loose max-w-prose">
              Skin is ever-changing—it responds to environment,<br/> lifestyle and diet. Our range is designed with this in mind,<br/> catering to different preferences and needs to guide you<br/> towards optimal skin health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinCareBanner;