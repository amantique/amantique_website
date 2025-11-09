"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";

const PolaroidGalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [visible, setVisible] = useState<number>(0);

  const shuffleImages = (imagesArray: string[]): string[] => {
    const shuffled = [...imagesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // --- CALCUL AUTO DU NOMBRE D’IMAGES NÉCESSAIRES ---
  const computeNeededImages = () => {
    const cardWidth = 200;   // 48 + margins approximées
    const cardHeight = 270;  // 60 + titre + marges
    const gap = 24;          // gap-6

    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;

    const cols = Math.floor(totalWidth / (cardWidth + gap));
    const rows = Math.floor(totalHeight / (cardHeight + gap));

    const needed = Math.max(cols * rows, 4); // toujours au moins 4 images
    return needed;
  };

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/live-images");
      const data = await res.json();
      const shuffled = shuffleImages(data);

      setImages(shuffled);

      // Détermine combien afficher au début
      const needed = computeNeededImages();
      setVisible(needed);
    }

    fetchImages();

    // Recalcule si la fenêtre change de taille
    const onResize = () => {
      setVisible((prev) => Math.max(prev, computeNeededImages()));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800});
  }, []); 

  const handleShowMore = () => {
    setVisible((prev) => prev + 6); // ajoute 6 images à chaque clic
  };

  return (
    <div className="min-h-screen w-full text-white bg-gray-950 py-12 flex flex-col items-center">
      <h2 className="text-7xl font-extrabold sm:text-9xl text-center mb-10" data-aos="zoom-in-up">
        PHOTOS
      </h2>

      {/* Mur de polaroids */}
      <div className="relative w-full mx-auto flex flex-wrap justify-center gap-6 px-4">
        {images.slice(0, visible).map((image, index) => {
          const rotation = (Math.random() - 0.5) * 20;
          const xOffset = (Math.random() - 0.5) * 40;
          const yOffset = (Math.random() - 0.5) * 40;

          return (
            <div
              key={index}
              style={{
                transform: `rotate(${rotation}deg) translate(${xOffset}px, ${yOffset}px)`,
              }}
              className={clsx(
                "bg-white p-2 shadow-xl rounded-sm cursor-pointer transition-transform hover:scale-105 hover:z-10 border border-gray-300",
                "relative w-48 h-60 flex flex-col items-center"
              )}
              data-aos="zoom-in-up"
            >
              <div className="relative w-full h-48" data-aos="zoom-in-up">
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bouton Voir plus */}
      {visible < images.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 text-lg font-bold text-gray-950 bg-white rounded-lg hover:bg-[#F20D01] transition duration-300"
            data-aos="zoom-in-up"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};

export default PolaroidGalleryPage;
