"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type Event = {
  date: string; 
  displayDate: string;
  location: string;
  image: string;
  link: string;
  label?: string;
};

const ContactPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchEvents = async () => {
      try {
        const res = await fetch("/data/fr/events.json");
        if (!res.ok) throw new Error("Erreur lors du chargement des événements");
        const data: Event[] = await res.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const getSortedEvents = () => {
    const today = new Date();

    const upcoming = events
      .filter((ev) => new Date(ev.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const past = events
      .filter((ev) => new Date(ev.date) < today)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { upcoming, past };
  };

  const { upcoming, past } = getSortedEvents();
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [visiblePast, setVisiblePast] = useState(4);

  const renderEventCard = (event: Event, index: number) => (
    <a key={index} href={event.link} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full max-w-xs mx-auto group" data-aos="zoom-in">
        <div className="relative w-full aspect-[3/3]">
          <Image
            src={event.image}
            alt={`Affiche ${event.displayDate}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:text-white">
          <h3 className="text-2xl font-semibold">{event.displayDate}</h3>
          <p className="text-sm font-black">{event.location}</p>
        </div>
        {event.label && (
          <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
            {event.label}
          </div>
        )}
      </div>
    </a>
  );

  return (
    <div className="relative w-full text-center text-[#0A0A0A] pb-4 overflow-hidden">
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg/bg_bio.png')" }}
      />

      <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg" data-aos="zoom-in">
        DATES
      </h2>

      <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 mb-4" data-aos="zoom-in">
        À VENIR
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {upcoming.slice(0, visibleUpcoming).map(renderEventCard)}
      </div>
      {visibleUpcoming < upcoming.length && (
        <button
          onClick={() => setVisibleUpcoming(visibleUpcoming + 4)}
          className="mt-4 px-6 py-2 bg-[#F20D01] text-white font-bold rounded"
          data-aos="zoom-in"
        >
          Afficher plus
        </button>
      )}

      <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 my-4" data-aos="zoom-in">
        TROP TARD...
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {past.slice(0, visiblePast).map(renderEventCard)}
      </div>
      {visiblePast < past.length && (
        <button
          onClick={() => setVisiblePast(visiblePast + 4)}
          className="mt-4 px-6 py-2 bg-[#F20D01] text-white font-bold rounded"
          data-aos="zoom-in"
        >
          Afficher plus
        </button>
      )}
    </div>
  );
};

export default ContactPage;
