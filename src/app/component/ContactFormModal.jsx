
'use client';
import React from 'react';
import { IoClose, IoCallOutline, IoMailOutline } from 'react-icons/io5';

export const ContactFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="w-full sm:w-[420px] bg-white h-full p-6 overflow-auto">
        
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-lg font-bold text-[#1e2a52]">Contact Us</h2>
          <button onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        
        <p className="text-sm text-gray-600 mb-4">
          Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days.
        </p>

      
        <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
          <IoCallOutline /> <span>(+92) 42 35970111</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700 mb-6">
          <IoMailOutline /> <span>info@renergent.com</span>
        </div>

        
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Enter your name" className="border p-3 rounded bg-[#f9fbf8]" />
          <input type="email" placeholder="Enter your email" className="border p-3 rounded bg-[#f9fbf8]" />
          <input type="tel" placeholder="Enter your phone" className="border p-3 rounded bg-[#f9fbf8]" />
          <textarea rows="4" placeholder="Your message" className="border p-3 rounded bg-[#f9fbf8]"></textarea>

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-white py-3 rounded font-medium"
          >
            Submit
          </button>
        </form>

        
        <div className="mt-6 text-xs text-gray-400">[social_profiles]</div>
      </div>
    </div>
  );
};
