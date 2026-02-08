"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TiltImageMotion from "../ui/TiltImageMotion/TiltImageMotion";
import MarqueeBanner from "../ui/MarqueeBanner/MarqueeBanner";

interface Social {
  href: string;
  src: string;
  alt: string;
}

interface ContactsData {
  socials: Social[];
}

interface Track {
  title: string;
  link: string;
}

interface Playlist {
  cover: string;
  link: string;
  overlayText: string;
  tracks: Track[];
}

interface Singles {
  cover: string;
  link: string;
  overlayText: string;
  title: string;
}

interface MusicsData {
  playlist: Playlist;
  singles: Singles;
}

const BentoPage = () => {
  const [socials, setSocials] = useState<Social[]>([]);
  const [musics, setMusics] = useState<MusicsData | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/data/fr/contacts.json");
        if (!res.ok) throw new Error("Erreur lors du chargement des contacts");
        const data: ContactsData = await res.json();
        setSocials(data.socials);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMusics = async () => {
      try {
        const res = await fetch("/data/fr/musics.json");
        if (!res.ok) throw new Error("Erreur lors du chargement des musiques");
        const data: MusicsData = await res.json();
        setMusics(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
    fetchMusics();
  }, []);

  if (!musics) return null;

  // CONFIG DES BANNERS
  const bannerCount = 20;
  const bannerSizes = [
    "text-[18vw] md:text-[20vw]",
    "text-[22vw] md:text-[25vw]",
    "text-[28vw] md:text-[32vw]",
  ];
  const bannerSpacing = 8; // espace en vh entre chaque banner

  // Calculer la position verticale pour chaque banner
  let currentTop = 5; // départ à 5vh
  const banners = Array.from({ length: bannerCount }).map((_, i) => {
    const fontSize = bannerSizes[i % bannerSizes.length];
    const banner = {
      direction: (i % 2 === 0 ? "right" : "left") as "right" | "left",
      fontSize,
      top: `${currentTop}vh`,
      speed: 20,
    };
    currentTop += bannerSpacing + 10; // espace + approx hauteur du texte
    return banner;
  });

  return (
    <div className="relative w-full overflow-hidden">
      <h1 className="sr-only">amantique</h1>

      <div className="relative bg-white z-10 w-full">
        {/* BACKGROUND MARQUEES */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {banners.map((b, i) => (
            <MarqueeBanner
              key={i}
              text="AMANTIQUE"
              direction={b.direction}
              fontSize={b.fontSize}
              top={b.top}
              speed={b.speed}
            />
          ))}
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="relative z-10 text-center w-full pb-4">
          {/* TITRE */}
          <h2
            className="text-7xl text-black font-extrabold pt-4 sm:text-9xl drop-shadow-lg"
            data-aos="fade-down"
          >
            MUSIQUES
          </h2>

          {/* ICONES */}
          <div className="max-w-md mx-auto mb-4">
            <div className="flex flex-wrap justify-center gap-6">
              {socials.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-150"
                >
                  <Image src={icon.src} alt={icon.alt} width={30} height={30} />
                </a>
              ))}
            </div>
          </div>

          {/* PLAYLIST */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-20">
            <a
              className="relative group"
              href={musics.playlist.link}
              data-aos="fade-right"
            >
              <div className="perspective-[1000px]">
                <TiltImageMotion
                  src={musics.playlist.cover}
                  alt="EP cover"
                  width={350}
                  height={350}
                  overlayText={musics.playlist.overlayText}
                />
              </div>
            </a>

            <div
              className="space-y-4 text-center md:text-left"
              data-aos="fade-left"
            >
              {musics.playlist.tracks.map((track, i) => (
                <a
                  key={i}
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-3xl font-semibold text-gray-900 hover:text-[#F20D01] transition">
                    {track.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* SINGLES */}
          <a
            href={musics.singles.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-20 mt-6 cursor-pointer">
              <h2
                className="text-[8rem] md:text-[10rem] font-extrabold text-black relative"
                data-aos="fade-up"
              >
                <span className="absolute inset-0 blur-2xl text-[#F20D01] opacity-30">
                  {musics.singles.title}
                </span>
                {musics.singles.title}
              </h2>

              <div className="perspective-[1000px]" data-aos="fade-right">
                <TiltImageMotion
                  src={musics.singles.cover}
                  alt="Single cover"
                  width={280}
                  height={280}
                  overlayText={musics.singles.overlayText}
                />
              </div>
            </div>
          </a>

          <p
            className="text-3xl font-semibold text-gray-400 mt-6"
            data-aos="fade-up"
          >
            Et beaucoup d&apos;autres à venir...
          </p>
        </div>
      </div>

      {/* CSS MARQUEE */}
      <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 180s linear infinite;
        }

        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 180s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BentoPage;
