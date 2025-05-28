'use client';
import React from 'react';

const services = [
  {
    title: 'Analysis',
    description: "Analyse your location's full solar potential",
    image: '/searchicon.webp',
  },
  {
    title: 'Engineering',
    description: 'Get the latest technology & suite of renewable products',
    image: '/saveimageicon.webp',
  },
  {
    title: 'Operation',
    description: 'A–Z professional installation services',
    image: '/operationimageicon.webp',
  },
  {
    title: 'Maintenance',
    description: 'Get premium maintenance for your solar projects',
    image: '/new.webp',
  },
];

export const SolarServices = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/PIC.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl border border-transparent text-center p-8 shadow-lg transition duration-300 hover:shadow-3xl hover:-translate-y-1 hover:border-green-500"
          >
            <img
              src={service.image}
              alt={`${service.title} icon`}
              className="w-16 h-16 mx-auto mb-4 transition duration-300 group-hover:scale-110"
            />
            <h3 className="text-xl font-bold text-[#1e2a52]">{service.title}</h3>
            <p className="text-gray-500 mt-2 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-green-500 font-semibold hover:underline transition"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
