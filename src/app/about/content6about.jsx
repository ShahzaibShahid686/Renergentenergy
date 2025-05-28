'use client';
import React from 'react';

const Content6about = () => {
  return (
    <section className="bg-[#f5f6fc] rounded-xl py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#1e2a52] text-center md:text-left">
          Schedule an appointment with us to <br className="hidden sm:block" />
          discuss your goals and needs.
        </h2>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-md transition">
          Let’s get in touch &rarr;
        </button>
      </div>
    </section>
  );
};

export default Content6about;
