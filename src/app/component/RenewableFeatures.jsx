'use client';
import React from 'react';
import {
  LuLeaf 
} from 'react-icons/lu';
import {
  FiBriefcase,
  FiCheckCircle,
  FiZap
} from 'react-icons/fi';

const features = [
  {
    icon: LuLeaf, 
    title: 'Environmental Friendly',
    description:
      'We are one of the nation’s leading providers of wholesale power generation services.',
  },
  {
    icon: FiBriefcase,
    title: 'Easily Manageable',
    description:
      'Renergent provides simple innovative management solutions for all your needs.',
  },
  {
    icon: FiCheckCircle,
    title: 'Guaranteed Services',
    description:
      'Get extended warranties on hardware for peace of mind with Renergent.',
  },
  {
    icon: FiZap,
    title: 'Net Metering',
    description:
      'Give back to society. Renergent net-metering solutions provide easy net-metering solutions.',
  },
];

export const RenewableFeatures = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Side Image */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>

      {/* Right Side Content */}
      <div className="bg-[#1e2a52] text-white px-6 py-16 flex flex-col justify-center">
        <p className="text-green-400 text-sm font-semibold mb-2">
          EFFECTIVE SOLUTIONS FOR CORPORATE AND RESIDENTIAL CUSTOMERS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          The best renewable energy features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col gap-2">
                <Icon size={28} className="text-green-400" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
