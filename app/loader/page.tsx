"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface LoaderPageProps {
  text?: string;
  fadeOut?: boolean;
}

// Liste des images dans le répertoire /public/img/head
const images = [
  "/img/head/fly1.png",
  "/img/head/fly2.png",
  "/img/head/fly3.png",
  "/img/head/fly4.png",
  // Ajoute toutes les images ici
];

interface Fly {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  src: string;
}

const LoaderPage: React.FC<LoaderPageProps> = ({ text = "Chargement...", fadeOut = false }) => {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const initialFlies: Fly[] = images.map((src, index) => ({
      id: index,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 40 + 50,
      src,
    }));
    setFlies(initialFlies);

    const interval = setInterval(() => {
      setFlies((prev) =>
        prev.map((fly) => {
          const newX = fly.x + fly.dx;
          const newY = fly.y + fly.dy;
          if (newX < 0 || newX > 100) fly.dx = -fly.dx;
          if (newY < 0 || newY > 100) fly.dy = -fly.dy;
          return { ...fly, x: newX, y: newY };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#E33522" }}
    >
      {/* Flies */}
      {flies.map((fly) => (
        <div
          key={fly.id}
          style={{
            position: "absolute",
            top: `${fly.y}%`,
            left: `${fly.x}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            transform: `translate(-50%, -50%)`,
            pointerEvents: "none",
          }}
        >
          <Image src={fly.src} alt="Fly" width={fly.size} height={fly.size} />
        </div>
      ))}

      {/* Texte */}
      <p className="text-7xl font-bold tracking-wider mt-64 text-white flex items-center">
        {text}
        <span className="flex ml-4 space-x-1 mt-10">
            <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></span>
            <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
            <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></span>
        </span>
        </p>
    </div>
  );
};

export default LoaderPage;
