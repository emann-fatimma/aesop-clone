'use client';


import React from 'react';

const SkinCareBanner: React.FC = () => {
  return (
    <section
      className="w-full h-125 bg-cover bg-center flex items-center justify-between px-12"
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

    </section>
  );
};

export default SkinCareBanner;
