'use client';
import React from 'react';
import { FaSun, FaChartBar, FaGlobeAsia, FaUser } from 'react-icons/fa';

const features = [
  {
    icon: <FaSun className="text-green-500 text-4xl mb-4" />,
    title: 'Solar Solutions',
    description:
      'Our free energy audits and feasibility analyses provide customers with customised solar solutions.',
  },
  {
    icon: <FaChartBar className="text-green-500 text-4xl mb-4" />,
    title: 'Energy Monitoring',
    description:
      'We offer energy monitoring services to keep you informed about energy production.',
  },
  {
    icon: <FaGlobeAsia className="text-green-500 text-4xl mb-4" />,
    title: 'Serving Across Pakistan',
    description:
      'We as an energy leader serving in Pakistan following international standards.',
  },
  {
    icon: <FaUser className="text-green-500 text-4xl mb-4" />,
    title: 'User Experience',
    description:
      'We provide top-notch quality products and an excellent user experience at an affordable price.',
  },
];

const Content2About = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a52] mb-4">
        We provide safe and reliable solar solutions<br className="hidden md:block" /> across Pakistan
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Renergent is committed to making the world cleaner and healthier. From development to operation,
        we create and operate valuable solar and storage projects that have benefited our customers for decades.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto hover:border-green-600">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-2xl hover:border-green-600"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-[#1e2a52] mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
            <a href="#" className="text-green-600 font-semibold hover:underline hover:border-green-600">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content2About;
