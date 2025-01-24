"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Importer Link pour la navigation

// Exemple d'images pour tes albums
const directories = {
  "15_10_meca": [
    "/img/live/15_10_meca/PB150056-Edit.jpg",
    "/img/live/15_10_meca/PB150061-Edit.jpg",
  ],
  "11_10_popup": [
    "/img/live/11_10_popup/PA110006-Enhanced-NR.jpg",
    "/img/live/11_10_popup/PA110010-Enhanced-NR.jpg",
  ],
};

const PhotoPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  // Mélange les images de manière aléatoire
  const shuffleImages = (imagesArray: string[]): string[] => {
    const shuffled = [...imagesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Échange les éléments
    }
    return shuffled;
  };

  // Récupérer toutes les images et les mélanger
  useEffect(() => {
    const allImages = [
      ...directories["15_10_meca"],
      ...directories["11_10_popup"],
    ];

    setImages(shuffleImages(allImages));
  }, []);

  // Logique pour changer de slide automatiquement toutes les 0,5 secondes
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Passe à la suivante
    }, 1500); // Défile toutes les 1 seconde

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant se démonte
  }, [images.length]);

  return (
    <div className="pb-4 relative w-full text-center text-white bg-gray-950">
      <h2 className="text-7xl font-extrabold sm:text-9xl py-4">PHOTOS</h2>

      {/* Carrousel */}
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
              data-carousel-item
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)} // Permet de naviguer à un slide spécifique
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)} // Naviguer vers le slide précédent
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => setCurrentSlide((currentSlide + 1) % images.length)} // Naviguer vers le slide suivant
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Button to view all photos */}
      <div className="mt-4">
        <Link href="/all-photos">
          <button className="px-6 py-3 text-lg font-bold text-gray-950 bg-white rounded-lg hover:bg-[#F20D01] transition duration-300">
            Voir toutes les photos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoPage;
