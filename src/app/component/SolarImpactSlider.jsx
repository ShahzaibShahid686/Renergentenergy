'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const solutions = [
  {
    title: 'Industrial Solar Solutions',
    description: 'Save costs and energy with Renergent’s solar solutions customized according to industrial needs.',
    image: '/industrial.PNG',
  },
  {
    title: 'Residential Solar Solutions',
    description: 'A–Z Solar Panel Installation & Energy Monitoring Services for residential customers.',
    image: '/Residential.PNG',
  },
  {
    title: 'Agricultural Solar Solutions',
    description: 'Cost-effective solar bifacial solutions with the best efficiency at competitive prices.',
    image: '/Agricultural.PNG',
  },
  {
    title: 'Commercial Solar Solutions',
    description: 'Commercial solutions for advanced needs by large business with energy monitoring.',
    image: '/CommercialSolarsolutions.PNG',
  }
];

export const SolarImpactSlider = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-white text-center">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e2a52] mb-3">
        We offer solutions for greening up energy use and<br className="hidden sm:block" />
        improving your environmental credentials
      </h2>

            <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {solutions.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition h-full flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-md"
                />
                <h3 className="text-md font-semibold text-[#1e2a52] mt-4">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{item.description}</p>
                <a
                  href="#"
                  className="text-green-500 font-semibold mt-4 block hover:underline"
                >
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
      <div className="mt-20 text-center px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e2a52] mb-2">
          We're committed to making the world cleaner
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
          From development to operation, we create and operate valuable solar and storage projects that benefit communities for decades.
        </p>

        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[8px] border-green-400 border-t-gray-100 mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-green-500">70%</span>
          </div>
        </div>

        <p className="text-sm text-[#1e2a52] mt-4 font-medium">
          Solar creating impact on the Environment
        </p>
      </div>
    </section>
  );
};
