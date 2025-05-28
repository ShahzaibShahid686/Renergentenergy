'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Millat Tractor LTD Solar Project',
    image: '/Millat.webp',
  },
  {
    title: 'Sapphire Textiles Solar Project',
    image: '/SaphireTextile.webp',
  },
  {
    title: 'Sapphire Dairy Solar Project',
    image: '/SaphireDairy.webp',
  },
  {
    title:'Saqib Poultry QB Solar Project',
    image:'/Sabir.webp'
  }
];

const Content1project = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Badges */}
      <div className="mb-4 flex justify-center flex-wrap gap-3">
        <span className="bg-green-200 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
          Projects that made a difference
        </span>
        <span className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
          Your partner for everything solar
        </span>
      </div>

      {/* Headings */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2a52] mb-3">
        Powerful products. Powerful Delivery.
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We guide game-changing companies and residential customers, across places,
        through state of the art technology.
      </p>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="rounded-md overflow-hidden shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#1e2a52]">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content1project;
