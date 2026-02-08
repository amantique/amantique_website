"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardData } from "./InfoCard.types";

interface InfoCardProps {
  data: CardData;
  "data-aos"?: string;
  aspectRatio?: string;  
  className?: string;    
}

const InfoCard: React.FC<InfoCardProps> = ({
  data,
  "data-aos": dataAos,
  aspectRatio = "3/3",
  className,
}) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Wrapper: any = data.link ? "a" : "div";

  return (
    <Wrapper
      href={data.link ?? ""}
      target={data.link ? "_blank" : undefined}
      rel={data.link ? "noopener noreferrer" : undefined}
      className={`relative w-full max-w-xs mx-auto group overflow-hidden rounded-3xl shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos={dataAos}
    >
      {/* IMAGE */}
      <div
        className={`relative w-full aspect-[${aspectRatio}] transition-all duration-500 ease-out 
                    group-hover:-translate-y-8 group-hover:scale-105 z-10`}
      >
        <Image
          src={data.image}
          alt={data.title ?? "Card image"}
          fill
          className="object-cover"
        />
      </div>

      {/* BANDEAU INFO */}
      {(data.title || data.subtitle || data.meta) && (
        <div
          className={`absolute bottom-0 w-full bg-white bg-opacity-90 py-4 px-6 
                      text-[#F20D01] transition-all duration-500 ease-out 
                      group-hover:bg-[#F20D01] group-hover:text-white z-20`}
        >
          {data.title && <h3 className="text-2xl font-semibold">{data.title}</h3>}
          {data.subtitle && <p className="text-sm font-black">{data.subtitle}</p>}
          {data.meta && <p className="text-xs opacity-70">{data.meta}</p>}
        </div>
      )}

      {/* LABEL CENTRÉ QUI SUIT LA SOURIS */}
      {data.hoverLabel && (
        <div
          className="absolute font-bold text-4xl px-6 py-3 rounded-lg text-[#F20D01] bg-white bg-opacity-90
                     shadow-lg z-30 pointer-events-none animate-pulse transition-transform duration-200 ease-out"
          style={{
            left: hovered ? mousePos.x : "50%",
            top: hovered ? mousePos.y : "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {data.hoverLabel}
        </div>
      )}
    </Wrapper>
  );
};

export default InfoCard;
