"use client";

import React from 'react';

const BentoPage = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto text-center text-black mb-12">
        <h2 className="text-7xl font-extrabold sm:text-9xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
          MUSIQUE
        </h2>

        <div className="mt-16 grid gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
        <div className="relative lg:row-span-2 flex items-center justify-center h-full group">
  <div className="absolute inset-px bg-gradient-to-r from-[#F20D01] to-black rounded-lg shadow-lg group-hover:bg-[#F20D01] group-hover:to-[#F20D01] transition-colors duration-1000"></div>
  <div className="relative flex h-full flex-col overflow-hidden items-center justify-center p-6 group-hover:bg-opacity-90 transition duration-300 ease-in-out">
    <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center transform group-hover:scale-125 transition duration-500 ease-in-out">
      Ange & Mouche
    </p>
  </div>
</div>


          <div className="relative max-lg:row-start-1 flex items-center justify-center h-full group">
            <div className="absolute inset-px bg-black rounded-lg shadow-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden items-center justify-center p-6 group-hover:bg-opacity-90 transition duration-300 ease-in-out">
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center transform group-hover:scale-105 transition duration-300 ease-in-out">
                EAU SALEE
              </p>
            </div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-1 lg:row-start-3 lg:col-span-3 flex items-center justify-center h-full group">
            <div className="absolute inset-px bg-gradient-to-r from-[#F20D01] to-black rounded-lg shadow-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden items-center justify-center p-6 group-hover:bg-opacity-90 transition duration-300 ease-in-out">
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center transform group-hover:scale-105 transition duration-300 ease-in-out">
                ???
              </p>
            </div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 flex items-center justify-center h-full group">
            <div className="absolute inset-px bg-black rounded-lg shadow-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden items-center justify-center p-6 group-hover:bg-opacity-90 transition duration-300 ease-in-out">
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center transform group-hover:scale-105 transition duration-300 ease-in-out">
                ???
              </p>
            </div>
          </div>

          <div className="relative lg:row-span-2 flex items-center justify-center h-full group">
            <div className="absolute inset-px bg-gradient-to-r from-black via-black to-[#F20D01] rounded-lg shadow-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden items-center justify-center p-6 group-hover:bg-opacity-90 transition duration-300 ease-in-out">
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center transform group-hover:scale-105 transition duration-300 ease-in-out">
                ???
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoPage;
