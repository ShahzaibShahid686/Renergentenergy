'use client';
import React from 'react';
const steps = [
  {
    number: '1',
    title: 'Get in Touch',
    description:
      'To find the best possible solution for yourself, get in touch with the Renergent team via the website, phone, or email and request your Free Energy Audit and Feasibility Analysis.',
  },
  {
    number: '2',
    title: 'Proposal',
    description:
      'The Renergent team plans and executes an on-ground assessment visit and provide you cost estimation and proposal of your project.',
  },
  {
    number: '3',
    title: 'Install & Monitor',
    description:
      'Our expert installation team visits the venue to execute a pre-planned installation and equip you with energy monitoring to show the actual energy.',
  },
  {
    number: '4',
    title: 'Enjoy Energy',
    description: 'Enjoy Renergent',
  },
];

export const FourStepProcess = () => {
  return (
    <section className="w-full py-16 px-4 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a52] mb-4">
        Get your solar system in Pakistan is an easy 4-step process
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Renergent masters the art of capturing solar energy by using state-of-the-art solar panels
        and best-quality equipment to give you power and safety at the same time.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
           
            <div className="w-14 h-14 bg-green-400 text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
              {step.number}
            </div>

        
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute w-px h-6 bg-gray-200 translate-y-[3.5rem]" />
            )}

        
            <h3 className="text-lg font-bold text-[#1e2a52] mb-2">{step.title}</h3>

        
            <p className="text-sm text-gray-600 max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
