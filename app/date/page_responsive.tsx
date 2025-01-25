"use client";

import React, { useState } from "react";
import Image from "next/image";

const DatePageResponsive = () => {
  // État pour gérer l'affichage des cartes supplémentaires
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div
        className="w-full text-center bg-cover bg-center bg-no-repeat text-[#0A0A0A] pb-4"
        style={{
          backgroundImage: "url('/img/bg/bg_bio_responsive.jpg')", // Image de fond par défaut
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Titre principal */}
        <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg">DATES</h2>

        {/* Section À VENIR */}
        <div className="flex items-center text-left text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
          <h3 className="text-left text-white text-5xl mb-4 hover:tracking-wider hover:opacity-90 transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
            À VENIR
          </h3>
        </div>

        <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 justify-center items-center">
          {/* gilbert deisc 31/01/25 */}
          <a
            href="https://www.instagram.com/p/DE72DoCoOOZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs mx-auto group">
              <Image
                src="/img/poster/31_01_25.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">31 • 01 - Paris (95)</h3>
                <p className="text-sm font-black font-robotomono">GILBERT DISC</p>
              </div>
            </div>
          </a>
        </div>

        {/* Section PASSÉES */}
        <div className="flex items-center text-left text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
          <h3 className="text-left text-white text-5xl mb-4 hover:tracking-wider hover:opacity-90 transition-all duration-500 ease-in-out transform hover:scale-110 transform-origin-center">
            TROP TARD...
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 gap-8 px-4 justify-center items-center">
          {/* Cirque électrique 15/01/25 */}
          <a
            href="https://www.instagram.com/p/DEiFBTuIL3B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs mx-auto group">
              <Image
                src="/img/poster/15_01_25.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">15 • 01 - Paris (95)</h3>
                <p className="text-sm font-black font-robotomono">CIRQUE ÉLECTRIQUE</p>
              </div>
            </div>
          </a>

          {/* Truskel 5/12/24 */}
          <a
            href="https://www.instagram.com/p/DC91WpsI5GU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs mx-auto group">
              <Image
                src="/img/poster/05_12_24.jpg"
                alt="Image de la carte"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold">5 • 12 - Paris (95)</h3>
                <p className="text-sm font-black font-robotomono">TRUSKEL</p>
              </div>
              <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                RELEASE
              </div>
            </div>
          </a>
          {/* Les autres cartes */}
          {showMore && (
            <>
              {/* La mécanique ondulatoire 15/11/24 */}
              <a
                href="https://www.instagram.com/p/DCChdLLoNCU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full max-w-xs mx-auto group">
                  <Image
                    src="/img/poster/15_11_24.jpg"
                    alt="Image de la carte"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                    <h3 className="text-2xl font-semibold">15 • 11 - Paris (95)</h3>
                    <p className="text-sm font-black font-robotomono">LA MÉCANIQUE ONDULATOIRE</p>
                  </div>
                </div>
              </a>

              {/* Pop up 11/10/24 */}
              <a
                href="https://www.instagram.com/p/DA6I3iPoDPH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full max-w-xs mx-auto group">
                  <Image
                    src="/img/poster/11_10_24.jpg"
                    alt="Image de la carte"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:bg-opacity-70 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ease-in-out">
                    <h3 className="text-2xl font-semibold">11 • 10 - Paris (95)</h3>
                    <p className="text-sm font-black font-robotomono">POP UP DU LABEL</p>
                  </div>
                  <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                    RELEASE
                  </div>
                </div>
              </a>
            </>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={toggleShowMore}
            className="text-[#F20D01] font-bold py-2 px-6 border border-[#F20D01] rounded hover:bg-[#F20D01] hover:text-white transition duration-300"
          >
            {showMore ? "Afficher moins" : "Afficher plus"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DatePageResponsive;
