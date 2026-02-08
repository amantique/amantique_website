"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MerchPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center bg-[#ffe241] bg-cover bg-center bg-no-repeat min-h-[500px] relative pb-5"
      style={{ backgroundImage: "url('/img/merch/merch_bg.png')" }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenu */}
      <div className="relative z-10 px-4 flex flex-col items-center">
        {/* Visually hidden title for accessibility */}
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          data-aos="fade-up"
        >
          amantique
        </h1>

        {/* Section title */}
        <div className="w-full mx-auto text-center text-black pb-20">
          <h2
            className="text-7xl sm:text-9xl font-extrabold pt-4 drop-shadow-lg"
            data-aos="fade-down"
          >
            MERCH
          </h2>
        </div>

        {/* Texte style Amantique */}
        <div
          className="max-w-3xl mb-12 px-6 py-4 sm:px-8 sm:py-6 shadow-2xl font-bold  bg-white/30 backdrop-blur-md rounded-md text-black text-lg sm:text-base font-robotomono"
          data-aos="fade-up"
        >
          <p>
            Amantique a décidé de partager un peu de son univers tactile. Des
            t-shirts explosifs, doux mais rugueux, fabriqués à la main par nos
            soins, dans notre atelier affectueux et légèrement chaotique.
            Disponibles uniquement sur nos dates de concerts. Ils attendent que
            vos mains viennent les effleurer, que vos épaules les arborent et
            que vos cœurs battent avec nous...
          </p>
        </div>

        {/* Note subtile */}
        <p
          className="text-2xl shadow-2xl font-bold  bg-white/30 backdrop-blur-md rounded-md text-black mt-20 p-5"
          data-aos="fade-up"
        >
          Oui, c’est nous qui les faisons. Oui, ça sent un peu la peinture et la
          sueur. Et oui, on adore ça.
        </p>
      </div>
    </div>
  );
};

export default MerchPage;
