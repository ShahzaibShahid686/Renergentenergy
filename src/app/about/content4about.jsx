'use client';
import React from 'react';
import Image from 'next/image';

const team = [
  { name: 'Member 1', image: '/JamalBahi.png' },
  { name: 'Member 2', image: '/AmmarBahi.png' },
  { name: 'Member 3', image: '/AdalBahi.png' },
  { name: 'Member 4', image: '/ShahzaibBahi.png' },
];

const Content4about = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2a52] mb-4">
          Meet our awesome people
        </h2>
        <p className="text-[#1e2a52] text-sm sm:text-base">
          If you want the best solution for your energy crisis and want to get rid of <br />
          it, our certified professionals are here to help
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
        {team.map((member, index) => (
          <div key={index} className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content4about;
