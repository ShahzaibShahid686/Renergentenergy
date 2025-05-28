'use client';
import Image from 'next/image';
import React from 'react';

const Content5about = () => {
  return (
    <section className="bg-[#f9fbf9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Images */}
        <div className="relative flex flex-col gap-6 items-start justify-start">
          <div className="rounded-xl overflow-hidden shadow-lg w-[300px] h-[200px] z-20">
            <Image
              src="/Tab.webp"
              alt="Analytics"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl w-[300px] h-[200px] ml-12 z-10">
            <Image
              src="/Laptop.webp"
              alt="Data Charts"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2a52] mb-4">
            We help customers to select <br />
            the best suitable solution for them
          </h2>
          <p className="text-[#1e2a52] text-sm sm:text-base mb-6">
            We’re obsessive about the quality solar solutions, so we equip you with our Free Energy Audit and Feasibility
            Analysis to develop a unique solution for you. We’ll bring everything in-house for you to control.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium text-sm px-6 py-3 rounded-md transition">
            Our Services &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content5about;
