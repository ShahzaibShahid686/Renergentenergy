'use client';
import React from 'react';
import Image from 'next/image';

const logos = [
  '/Inverex.png',
  '/Froniuslogo.png',
  '/Longilogo.png',
  '/Jinko logo.png',
  '/SchneiderElectric.png',
  '/Citel1.png',
  '/p25.png'
];

const Content3About = () => {
  return (
    <section className="bg-[#f9fbf9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2a52] mb-8">
            We have completed projects <br /> in different domains
          </h2>

          <div className="space-y-6 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold text-green-600">90+</p>
              <p className="text-[#1e2a52]">Residential Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">25+</p>
              <p className="text-[#1e2a52]">Commercial Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">5+</p>
              <p className="text-[#1e2a52]">Industrial Projects</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 text-center md:text-left">
            <button className="bg-green-200 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              Brands We Deal In
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-xl w-[300px] h-[200px]">
            <Image
              src="/contentabout3image1.webp"
              alt="Solar Plant"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="absolute top-[-50px] left-[80px] rounded-lg overflow-hidden shadow-2xl w-[300px] h-[200px] z-10">
            <Image
              src="/contentabout3image2.webp"
              alt="Solar House"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* LOGO SLIDER */}
      <div className="mt-16 overflow-hidden relative">
        <div className="w-full whitespace-nowrap animate-scroll flex gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Brand ${index}`}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content3About;
