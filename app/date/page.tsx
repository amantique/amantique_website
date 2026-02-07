"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EventCard, { Event } from "../components/EventCard";

const ContactPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchEvents = async () => {
      try {
        const res = await fetch("/data/fr/events.json");
        if (!res.ok)
          throw new Error("Erreur lors du chargement des événements");
        const data: Event[] = await res.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const today = new Date();
  const upcoming = events
    .filter((ev) => new Date(ev.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = events
    .filter((ev) => new Date(ev.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [visiblePast, setVisiblePast] = useState(4);

  return (
    <div className="relative w-full text-center text-[#0A0A0A] pb-4 overflow-hidden">
      {/* Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg/bg_bio.png')" }}
      />

      {/* Page title */}
      <h2
        className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg"
        data-aos="zoom-in"
      >
        DATES
      </h2>

      {/* Upcoming events */}
      <h3
        className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 mb-4"
        data-aos="zoom-in"
      >
        À VENIR
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {upcoming.slice(0, visibleUpcoming).map((event, index) => (
          <EventCard key={index} event={event} data-aos="zoom-in" />
        ))}
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

      {/* Past events */}
      <h3
        className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 my-4"
        data-aos="zoom-in"
      >
        TROP TARD...
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {past.slice(0, visiblePast).map((event, index) => (
          <EventCard key={index} event={event} data-aos="zoom-in" />
        ))}
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
