
"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(bottomReached);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`relative bg-[#0B0C2A] text-white px-6 pt-10 transition-all duration-500 ${
        atBottom ? "pb-20" : "pb-6"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div className="text-gray-300 leading-relaxed">
          <p>
            Not only are we an experienced installer of solar across Pakistan  but we also offer an unrivalled service to our happy customers, supported with outstanding warranties and we offer the worlds leading energy products in the market today, so you’re in safe hands!
          </p>
        </div>

        <div className="space-y-2 text-gray-300">
          <h4 className="font-semibold">About</h4>
          <Link href="/projects" className="block hover:text-green-300">Projects</Link>
          <p className="hover:text-green-300">MILLAT TRACTOR</p>
          <p className="hover:text-green-300">SAPPHIRE TEXTILES</p>
        </div>

        <div className="space-y-2 text-gray-300">
          <h4 className="font-semibold">Projects</h4>
          <p className="hover:text-green-300">Residential Solar</p>
          <p className="hover:text-green-300">Commercial Solar</p>
        </div>

        <div className="space-y-1 text-gray-300">
          <h4 className="font-bold">FAQs</h4>
          <p>22-C, GECHS</p>
          <p>Phase III, Peco Road, Lahore</p>
          <p className="mt-2 font-semibold">+92 348 111 8090</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        Renergent Energy. All Rights Reserved.
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md text-lime-400 p-3 rounded-md hover:bg-white/20 transition"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;