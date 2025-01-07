"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scale = Math.max(1 - scrollY / 1000, 0.5);

  return (
    <nav className="text-white p-4 relative flex items-center justify-between flex-wrap">

    <div className="mt-5 absolute left-1/2 transform -translate-x-1/2" style={{ marginTop: '70px' }}>
        <Link href="/" className="text-xl font-bold p-2">
          <Image
            src="/img/logo/logo.png"
            alt="Logo"
            width={211}
            height={200}
            className="transition-all duration-300"
            style={{
              transform: `scale(${scale}) translateY(${scrollY * 0.1}px)`,
            }}
          />
        </Link>
      </div>
      
      <div className="flex space-x-4">
        <button
          className="px-4 hover:bg-gray-700 transition-colors duration-300 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Menu
        </button>

        {/* Affichage conditionnel des liens en fonction du survol */}
        {isHovered && (
          <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-md shadow-lg">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
              Dates
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
              Musique
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
              Vidéo
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;