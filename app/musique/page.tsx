"use client";

import React from 'react';
import Link from 'next/link';

const MusiquePage = () => {
  return (
    <>      
      <div className="w-full text-center text-white">
        <h2 className="text-7xl font-extrabold sm:text-9xl mb-8">
          MUSIQUE
        </h2>

        <div className="w-full pb-1 text-center flex justify-center items-center">
          {/* Carte 1 */}
          <div className="flex items-center text-center text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
            <h3 className="text-left text-4xl mb-4">
              ANGES & MOUCHES
            </h3>
            <Link href="https://youtu.be/nXbfBoSJI7o?si=efTJasuoPwWTFJFE" className="text-2xl px-5 text-[#F20D01] hover:tracking-wider transition-colors-transform rounded-md transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
              Écouter
            </Link>
          </div>
        </div>

        <div className="w-full pb-1 text-center flex justify-center items-center">
          {/* Carte 2 */}
          <div className="flex items-center text-center text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
            <h3 className="text-left text-4xl mb-4">
              EAU SALÉ
            </h3>
            <Link href="https://youtu.be/JYfQXyXPdhs?si=P2oFYlEERXWBk4fu" className="text-2xl px-5 text-[#F20D01] hover:tracking-wider transition-colors-transform rounded-md transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
              Écouter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusiquePage;
