'use client';
import React from 'react';

export const EnergyIntro = () => {
  return (
    <section className="w-full py-16 bg-white">
      
      <div className="text-center text-sm text-green-600 font-medium mb-4  top-2">
        Decreasing your reliance on power grids helps to reduce the likelihood of loadshedding.
          <h2 className="text-4xl font-bold text-[#1e2a52] mb-4 ">
            Your Ultimate Partner in Empowering Energy independence
          </h2>
      </div>

  
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
        <div>
         
          <h3 className="text-2xl text-[#1e2a52] font-semibold mb-2">Truly green energy</h3>
          <p className="text-gray-600 mb-6">
            Renergent is committed to making the world cleaner and healthier.
            From development to operation, we create and operate valuable solar and storage
            projects that have benefited our customers for decades.
          </p>
          <button className="bg-green-300 text-white px-6 py-2 rounded-md font-medium hover:bg-green-400 transition">
            Commercial Services &nbsp; →
          </button>
        </div>

       
        <div className="relative w-full h-full">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/plates.jpg" 
              alt="Solar panel"
              className="w-full h-auto rounded-lg"
            />
            
            <div className="absolute bottom-[-20px] right-[-20px] w-[80px] h-[80px] bg-[radial-gradient(#f97316_2px,transparent_1px)] bg-[length:10px_10px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
