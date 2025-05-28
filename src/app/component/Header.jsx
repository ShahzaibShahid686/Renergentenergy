"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showWhite = hasMounted && (scrollY > 50 || showDropdown);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showWhite ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex relative justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        <Link href="/">
          <Image
            src="/RenergentEnergylatest.png"
            alt="Dark Logo"
            width={250}
            height={150}
            className={`absolute top-5 transition-opacity duration-300 ${
              showWhite ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/renergentenergy.png"
            alt="Light Logo"
            width={250}
            height={150}
            className={`absolute top-5 transition-opacity duration-300 ${
              showWhite ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8 items-center font-bold relative">
            <li>
              <Link
                href="/"
                className={`transition hover:text-[#97BF7A] ${
                  pathname === "/" ? "text-[#97BF7A]" : showWhite ? "text-black" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition hover:text-[#97BF7A] ${
                  pathname === "/about" ? "text-[#97BF7A]" : showWhite ? "text-black" : "text-white"
                }`}
              >
                About
              </Link>
            </li>

            
            <li className="relative" ref={dropdownRef}>
              <span
                onClick={() => setShowDropdown((prev) => !prev)}
                className={`flex items-center gap-1 cursor-pointer transition hover:text-[#97BF7A] ${
                  pathname.startsWith("/solutions") || showDropdown
                    ? "text-[#97BF7A]"
                    : showWhite
                    ? "text-black"
                    : "text-white"
                }`}
              >
                Solutions
                <IoIosArrowDown
                  className={`mt-[2px] transform transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>

              {showDropdown && (
                <div className="fixed left-0 top-[10%] w-full bg-white z-40 border-t border-b border-gray-200 shadow-lg py-6">
                  <div className="max-w-screen-xl mx-auto px-10 flex justify-between text-[#0B0C2A]">
                    {[
                      "Industrial Solar Solutions",
                      "Commercial Solar Solutions",
                      "Agricultural Solar Solutions",
                      "Residential Solar Solutions",
                    ].map((solution, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="font-semibold hover:text-[#97BF7A] whitespace-nowrap hover:underline"
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/projects"
                className={`transition hover:text-[#97BF7A] ${
                  pathname === "/projects" ? "text-[#97BF7A]" : showWhite ? "text-black" : "text-white"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`transition hover:text-[#97BF7A] ${
                  pathname === "/blogs" ? "text-[#97BF7A]" : showWhite ? "text-black" : "text-white"
                }`}
              >
                Renergent’s Blogs
              </Link>
            </li>
          </ul>

          <Link href="/contact">
            <button className="ml-8 px-5 py-2 bg-lime-400 text-black font-bold rounded-lg hover:bg-white hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </nav>

        <button
          className={`md:hidden text-3xl ${showWhite ? "text-black" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <RxDropdownMenu />
        </button>
      </div>

      
      {mobileMenuOpen && (
        <div className="block md:hidden px-6 pb-6 text-black bg-white">
          <ul className="space-y-4 font-bold">
            {["Home", "About", "Projects", "Renergent’s Blogs"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/’|\s/g, "")}`}
                  className="hover:text-[#97BF7A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center">
                  Solutions <IoIosArrowDown />
                </summary>
                <div className="bg-white mt-2 px-4 py-4 rounded-lg">
                  {[
                    "Industrial Solar Solutions",
                    "Commercial Solar Solutions",
                    "Agricultural Solar Solutions",
                    "Residential Solar Solutions",
                  ].map((type, idx) => (
                    <a key={idx} href="#" className="block hover:text-[#97BF7A]">
                      {type}
                    </a>
                  ))}
                </div>
              </details>
            </li>
            <li>
              <Link href="/contact">
                <button className="w-full bg-lime-400 text-black py-2 rounded-lg font-bold mt-2 hover:bg-white transition">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
