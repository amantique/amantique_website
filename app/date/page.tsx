"use client";

import React, { useState } from "react";
import Image from "next/image";

const upcomingEvents = [
  {
    date: "05 • 04 - Paris (75)",
    location: "SUPERSONIC RECORDS",
    image: "/img/poster/05_04_25.jpg",
    link: "https://www.instagram.com/p/DHrBoHaMOKc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: undefined,
  },
];

const pastEvents = [
  {
    date: "27 • 02 - Bagnolet (93)",
    location: "LE SAMPLE",
    image: "/img/poster/27_02_25.jpeg",
    link: "https://www.helloasso.com/associations/elephant-joli-mais-veneneux/evenements/release-party-amantique-le-sample-27-02-2025-2",
    label: "RELEASE",
  },
  {
    date: "05 • 02 - Paris (75)",
    location: "L'ALIMENTATION GÉNÉRALE",
    image: "/img/poster/05_02_25.jpeg",
    link: "https://www.instagram.com/p/DFiiCRBINEm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: undefined,
  },
  {
    date: "31 • 01 - Paris (75)",
    location: "GILBERT DISC",
    image: "/img/poster/31_01_25.jpg",
    link: "https://www.instagram.com/p/DE72DoCoOOZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: undefined,
  },
  {
    date: "15 • 01 - Paris (75)",
    location: "CIRQUE ÉLECTRIQUE",
    image: "/img/poster/15_01_25.jpg",
    link: "https://www.instagram.com/p/DEiFBTuIL3B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: undefined,
  },
  {
    date: "05 • 12 - Paris (75)",
    location: "TRUSKEL",
    image: "/img/poster/05_12_24.jpg",
    link: "https://www.instagram.com/p/DC91WpsI5GU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "RELEASE",
  },
  {
    date: "15 • 11 - Paris (75)",
    location: "LA MÉCANIQUE ONDULATOIRE",
    image: "/img/poster/15_11_24.jpg",
    link: "https://www.instagram.com/p/DCChdLLoNCU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: undefined,
  },
  {
    date: "11 • 10 - Paris (75)",
    location: "POPUP DU LABEL",
    image: "/img/poster/11_10_24.jpg",
    link: "https://www.instagram.com/p/DA6I3iPoDPH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "RELEASE",
  },
];

const ContactPage = () => {
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [visiblePast, setVisiblePast] = useState(4);

  return (
    <div className="relative w-full text-center text-[#0A0A0A] pb-4 overflow-hidden">
      {/* FOND FIXE EN ARRIÈRE-PLAN */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg/bg_bio.jpg')" }}
      />

      <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg">
        DATES
      </h2>

      {/* SECTION À VENIR */}
      <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">
        À VENIR
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {upcomingEvents.slice(0, visibleUpcoming).map((event, index) => (
          <a
            key={index}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs mx-auto group">
              <Image
                src={event.image}
                alt="Event Poster"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:text-white">
                <h3 className="text-2xl font-semibold">{event.date}</h3>
                <p className="text-sm font-black">{event.location}</p>
              </div>
              {event.label && (
                <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                  {event.label}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
      {visibleUpcoming < upcomingEvents.length && (
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
        {pastEvents.slice(0, visiblePast).map((event, index) => (
          <a
            key={index}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs mx-auto group">
              <Image
                src={event.image}
                alt="Event Poster"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full text-[#F20D01] bg-white bg-opacity-90 py-4 px-6 group-hover:bg-[#F20D01] group-hover:text-white">
                <h3 className="text-2xl font-semibold">{event.date}</h3>
                <p className="text-sm font-black">{event.location}</p>
              </div>
              {event.label && (
                <div className="text-[#F20D01] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                  {event.label}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
      {visiblePast < pastEvents.length && (
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
