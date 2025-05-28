
'use client';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { ContactFormModal } from './ContactFormModal';

export const CtaBanner = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f9fbf8] py-20 px-4 text-center">
        <p className="text-sm text-gray-700 uppercase tracking-widest mb-2">
          Our team brings 3+ years of solar installation expertise
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-black max-w-8xl mx-auto leading-tight mb-10">
          Renergent Energy is a leading, national developer and operator of sustainable energy solutions
        </h2>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-400 text-white px-6 py-3 rounded-md font-medium hover:bg-green-500 transition flex items-center justify-center mx-auto"
        >
          Get in Touch <IoIosArrowForward className="ml-2 text-xl" />
        </button>
      </section>

      
      <ContactFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    
    </>
  );
};
