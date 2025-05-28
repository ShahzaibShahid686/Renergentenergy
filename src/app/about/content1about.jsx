'use client';
import Image from 'next/image';
import React from 'react';

const Content1About = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <Image
        src="/p1.webp" 
        alt="Renergent Building"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      
      <div className="absolute inset-0 bg-black/60 z-10" /> 

      {/* Green Circle Overlay (Optional) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-green-400/30 left-[-100px] top-[-100px] z-20 mix-blend-screen blur-3xl" />

      {/* Text Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
          Renewable Energy Generation - RENERGENT
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">Safe & Reliable</p>
      </div>
    </div>
  );
};

export default Content1About;
