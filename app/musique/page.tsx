"use client";

import React from 'react';

const BentoPage = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto text-center text-black mb-4">
        <h2 className="text-7xl text-black font-extrabold pt-4 sm:text-9xl drop-shadow-lg">MUSIQUE</h2>

        {/* Liste de la playlist */}
        <div className="space-y-8">
          {/* Premier morceau */}
          <div className="flex flex-col items-center justify-center space-y-4"> {/* Ajout de space-y pour espacer les titres */}
            <a
              href="https://youtu.be/JYfQXyXPdhs?si=XYOu95WlmPqcEu9X"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                Eau Salée
              </p>
            </a>
            <a
              href="https://youtu.be/nXbfBoSJI7o?si=La8zugaD8prDyGBY"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                Ange & Mouche
              </p>
            </a>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold text-gray-400">
              Et beaucoup d&apos;autres à venir...
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default BentoPage;
