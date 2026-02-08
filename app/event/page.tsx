"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardGrid } from "./CardGrid";
import { EventData } from "./Event.types";

const EventsPage = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchEvents = async () => {
      try {
        const res = await fetch("/data/fr/events.json");
        if (!res.ok)
          throw new Error("Erreur lors du chargement des événements");
        const data: EventData[] = await res.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  if (!events.length) return null;

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

      {/* Card Grid */}
      <CardGrid
        data={events.map((ev) => ({
          image: ev.image,
          title: ev.displayDate,
          subtitle: ev.location,
          link: ev.link,
          meta: ev.date,
          hoverLabel: ev.label
        }))}
        sortByDate
      />
    </div>
  );
};

export default EventsPage;
