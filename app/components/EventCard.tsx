"use client";

import React, { useState } from "react";
import Image from "next/image";

export type Event = {
  date: string;
  displayDate: string;
  location: string;
  image: string;
  link: string;
  label?: string;
};

interface EventCardProps {
  event: Event;
  "data-aos"?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, "data-aos": dataAos }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a href={event.link} target="_blank" rel="noopener noreferrer">
      <div
        className="relative w-full max-w-xs mx-auto group overflow-hidden rounded-3xl shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-aos={dataAos}
      >
        {/* IMAGE */}
        <div className="relative w-full aspect-[3/3] transition-all duration-500 ease-out 
                        group-hover:-translate-y-8 group-hover:scale-105 z-10">
          <Image
            src={event.image}
            alt={`Affiche ${event.displayDate}`}
            fill
            className="object-cover"
          />
        </div>

        {/* BANDEAU INFO */}
        <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 
                        transition-all duration-500 ease-out 
                        group-hover:bg-[#F20D01] group-hover:text-white z-20">
          <h3 className="text-2xl font-semibold">{event.displayDate}</h3>
          <p className="text-sm font-black">{event.location}</p>
        </div>

        {/* LABEL CENTRÉ ET SUIVANT LA SOURIS */}
        {event.label && (
          <div
            className="absolute  font-bold text-4xl px-6 py-3 rounded-lg text-[#F20D01] bg-white bg-opacity-90
                       shadow-lg z-30 pointer-events-none animate-pulse
                       transition-transform duration-200 ease-out text-nowrap"
            style={{
              left: hovered ? mousePos.x : "50%",
              top: hovered ? mousePos.y : "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {event.label}
          </div>
        )}
      </div>
    </a>
  );
};

export default EventCard;
