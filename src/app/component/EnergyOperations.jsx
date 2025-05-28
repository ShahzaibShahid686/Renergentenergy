'use client';
import React from 'react';
import { LuPlugZap, LuBadgeCheck, LuHeartHandshake } from 'react-icons/lu';

const operations = [
  {
    icon: <LuPlugZap size={28} className="text-green-400" />,
    title: 'Custom Energy Solutions',
    description:
      'Renergent provides customized solar solutions that enable people and organizations to save money and energy.',
  },
  {
    icon: <LuBadgeCheck size={28} className="text-green-400" />,
    title: 'Quality Solar Solutions',
    description:
      'Renergent offers best quality solar solutions by following international standards. We are the distributors of leading brands in Pakistan.',
  },
  {
    icon: <LuHeartHandshake size={28} className="text-green-400" />,
    title: 'Operations & Maintenance',
    description:
      'Our maintenance team take care of our customers and provide on-demand services, such as monthly maintenance services, cleaning services, inspection services, and more.',
  },
];

export const EnergyOperations = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      
      <div className="bg-[#1e2a52] text-white px-8 py-16 flex flex-col justify-center">
        <p className="text-green-400 text-sm font-semibold mb-2">
          WE'RE CREATING A BETTER ENERGY FUTURE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
          We believe in acting responsibly & sustainably in our operations
        </h2>

        <div className="space-y-8">
          {operations.map((op, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div>{op.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{op.title}</h3>
                <p className="text-gray-300 text-sm">{op.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

 
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('personpannel.webp')" }} 
      />
    </section>
  );
};
