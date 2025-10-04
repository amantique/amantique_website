"use client";

import React, { useState } from "react";
import Image from "next/image";

type Event = {
  date: string; 
  displayDate: string;
  location: string;
  image: string;
  link: string;
  label?: string;
};

const events: Event[] = [
  {
    date: "2025-11-21",
    displayDate: "21 • 11 - NANTES (44)",
    location: "LE FERRAILLEUR",
    image: "/img/poster/21_11_25.jpg",
    link: "https://www.leferrailleur.fr/evenement/deportivo/4999",
  },
  {
    date: "2025-09-17",
    displayDate: "17 • 09 - Paris (75)",
    location: "PETIT BAIN",
    image: "/img/poster/17_09_25.jpg",
    link: "https://dice.fm/event/bb63mv-preoccupations-17th-sep-petit-bain-paris-tickets?lng=fr",
  },
  {
    date: "2025-09-20",
    displayDate: "20 • 09 - Paris (75)",
    location: "VELVET ECHO LIVE",
    image: "/img/poster/20_09_25.png",
    link: "https://www.helloasso.com/associations/velvet-echo/evenements/dealing-for-dimes-amantique-fraps-mecanique-ondulatoire-paris-20-09-2025",
  },
  {
    date: "2025-07-12",
    displayDate: "12 • 07 - Paris (75)",
    location: "FEST. RESTONS SÉRIEUX",
    image: "/img/poster/12_07_25.jpeg",
    link: "https://www.instagram.com/p/DLIPFduIjiT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-06-28",
    displayDate: "28 • 06 - Yutz (57)",
    location: "RAWDOGS SKATEPARK",
    image: "/img/poster/28_06_25.png",
    link: "https://www.instagram.com/p/DLP-D9JIkOn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-06-07",
    displayDate: "07 • 06 - Paris (75)",
    location: "LA MÉCANIQUE ONDULATOIRE",
    image: "/img/poster/07_06_25.jpg",
    link: "https://www.instagram.com/p/DKPljJ4M_2s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-05-17",
    displayDate: "17 • 05 - Paris (75)",
    location: "TRUSKEL",
    image: "/img/poster/17_05_25.jpg",
    link: "https://www.instagram.com/p/DJZlvE8MnNU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "RELEASE - CLIP",
  },
  {
    date: "2025-04-16",
    displayDate: "16 • 04 - Paris (75)",
    location: "L'ALIMENTATION GÉNÉRALE",
    image: "/img/poster/16_04_25.jpg",
    link: "",
  },
  {
    date: "2025-04-25",
    displayDate: "25 • 04 - Nantes (44)",
    location: "POUM POUM T'CHACK",
    image: "/img/poster/25_04_25.jpg",
    link: "",
  },
  {
    date: "2025-04-05",
    displayDate: "05 • 04 - Paris (75)",
    location: "SUPERSONIC RECORDS",
    image: "/img/poster/05_04_25.jpg",
    link: "https://www.instagram.com/p/DHrBoHaMOKc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-02-27",
    displayDate: "27 • 02 - Bagnolet (93)",
    location: "LE SAMPLE",
    image: "/img/poster/27_02_25.jpeg",
    link: "https://www.helloasso.com/associations/elephant-joli-mais-veneneux/evenements/release-party-amantique-le-sample-27-02-2025-2",
    label: "RELEASE",
  },
  {
    date: "2025-02-05",
    displayDate: "05 • 02 - Paris (75)",
    location: "L'ALIMENTATION GÉNÉRALE",
    image: "/img/poster/05_02_25.jpeg",
    link: "https://www.instagram.com/p/DFiiCRBINEm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-01-31",
    displayDate: "31 • 01 - Paris (75)",
    location: "GILBERT DISC",
    image: "/img/poster/31_01_25.jpg",
    link: "https://www.instagram.com/p/DE72DoCoOOZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2025-01-15",
    displayDate: "15 • 01 - Paris (75)",
    location: "CIRQUE ÉLECTRIQUE",
    image: "/img/poster/15_01_25.jpg",
    link: "https://www.instagram.com/p/DEiFBTuIL3B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2024-12-05",
    displayDate: "05 • 12 - Paris (75)",
    location: "TRUSKEL",
    image: "/img/poster/05_12_24.jpg",
    link: "https://www.instagram.com/p/DC91WpsI5GU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "RELEASE",
  },
  {
    date: "2024-11-15",
    displayDate: "15 • 11 - Paris (75)",
    location: "LA MÉCANIQUE ONDULATOIRE",
    image: "/img/poster/15_11_24.jpg",
    link: "https://www.instagram.com/p/DCChdLLoNCU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    date: "2024-10-11",
    displayDate: "11 • 10 - Paris (75)",
    location: "POPUP DU LABEL",
    image: "/img/poster/11_10_24.jpg",
    link: "https://www.instagram.com/p/DA6I3iPoDPH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "RELEASE",
  },
];


// Fonction de séparation événements (futurs / passés)
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

const ContactPage = () => {
  const { upcoming, past } = getSortedEvents();
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [visiblePast, setVisiblePast] = useState(4);

  const renderEventCard = (event: Event, index: number) => (
    <a
      key={index}
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-full max-w-xs mx-auto group">
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
      {/* FOND FIXE EN ARRIÈRE-PLAN */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg/bg_bio.png')" }}
      />

      <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg">
        DATES
      </h2>

      {/* SECTION À VENIR */}
      <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
        À VENIR
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {upcoming.slice(0, visibleUpcoming).map(renderEventCard)}
      </div>
      {visibleUpcoming < upcoming.length && (
        <button
          onClick={() => setVisibleUpcoming(visibleUpcoming + 4)}
          className="mt-4 px-6 py-2 bg-[#F20D01] text-white font-bold rounded"
        >
          Afficher plus
        </button>
      )}

      {/* SECTION TROP TARD */}
      <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 my-4">
        TROP TARD...
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {past.slice(0, visiblePast).map(renderEventCard)}
      </div>
      {visiblePast < past.length && (
        <button
          onClick={() => setVisiblePast(visiblePast + 4)}
          className="mt-4 px-6 py-2 bg-[#F20D01] text-white font-bold rounded"
        >
          Afficher plus
        </button>
      )}
    </div>
  );
};

export default ContactPage;
