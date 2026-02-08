"use client";

import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BioData } from './Bio.types';

const BioPage = () => {
  const [bio, setBio] = useState<BioData | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []); 

  useEffect(() => {
    fetch("/data/fr/bio.json")
      .then(res => res.json())
      .then(setBio)
      .catch(console.error);
  }, []);

  if (!bio) return null;

  return (
    <>
      <h1 className="sr-only">amantique</h1>

      <div className="relative w-full flex flex-col">
        {/* VIDEO */}
        <div className="relative w-full">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={bio.video} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-8 py-8 flex flex-col items-center lg:items-start justify-center bg-black bg-opacity-50">
            <div className="text-center text-white w-full">
              <h2
                className="text-9xl text-[#F20D01] font-extrabold drop-shadow-lg mb-8"
                data-aos="fade-left"
              >
                BIO
              </h2>

              <div
                className="sm:text-base flex flex-col justify-center text-justify font-robotomono w-full max-w-7xl"
                data-aos="fade-left"
              >
                {bio.paragraphs.map((p, i) => (
                  <p key={i} className="font-medium leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BioPage;