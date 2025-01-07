"use client";

import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>      
      <div className="w-full text-center bg-white text-[#0A0A0A]">
        <h2 className="text-7xl font-extrabold sm:text-9xl mb-8">
          DATE
        </h2>

        {/* Section À VENIR */}
        <div className="flex items-center text-left text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
            {/* <div className="relative w-16 h-16 mr-4">
                <Image
                  src="/img/fly/red_little_fly.png" 
                  alt="Image de la carte"
                  width={64}
                  height={64} 
                />
            </div> */}
            <h3 className="text-left text-5xl mb-4 hover:tracking-wider hover:opacity-90 transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
                À VENIR
            </h3>
        </div>

        <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 justify-center items-center">
          {/* cirque electrique 15/01/25 */}
          <a href="https://www.instagram.com/p/DEiFBTuIL3B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-xs h-80 mx-auto group">
              <Image
                src="/img/poster/15_01_25.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">15 • 01  -  Paris (95)</h3>
                <p className="text-1xl">CIRQUE ÉLECTRIQUE</p>
              </div>
            </div>
          </a>
        </div>

        {/* Section PASSÉES */}
        <div className="flex items-center text-left text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
            {/* <div className="relative w-16 h-16 mr-4">
                <Image
                src="/img/fly/red_little_fly.png" 
                alt="Image de la carte"
                width={64}
                height={64} 
                />
            </div> */}
            <h3 className="text-left text-5xl mb-4 hover:tracking-wider hover:opacity-90 transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
                TROP TARD...
            </h3>
        </div>

        <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 justify-center items-center">
          {/* truskel 5/12/24 */}
          <a href="https://www.instagram.com/p/DC91WpsI5GU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-xs h-80 mx-auto group">
              <Image
                src="/img/poster/05_12_24.jpg" 
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">5 • 12  -  Paris (95)</h3>
                <p className="text-1xl">TRUSKEL</p>
              </div>
              <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                RELEASE
              </div>
            </div>
          </a>

          {/* la mecanique ondulatoire 15/11/24 */}
          <a href="https://www.instagram.com/p/DCChdLLoNCU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-xs h-80 mx-auto group">
              <Image
                src="/img/poster/15_11_24.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">15 • 11  -  PARIS (95)</h3>
                <p className="text-1xl">LA MÉCANIQUE ONDULATOIRE</p>
              </div>
            </div>
          </a>

          {/* pop up 11/10/24 */}
          <a href="https://www.instagram.com/p/DA6I3iPoDPH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-xs h-80 mx-auto group">
              <Image
                src="/img/poster/11_10_24.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                  <h3 className="text-2xl font-semibold">11 • 10  -  Paris (95)</h3>
                  <p className="text-1xl">POP UP DU LABEL</p>
              </div>
              <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                  RELEASE
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
