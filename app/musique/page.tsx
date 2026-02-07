"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TiltImageMotion from "../components/TiltImageMotion";

const BentoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* TITRE ACCESSIBLE */}
      <h1 className="sr-only">amantique</h1>

      {/* CONTENEUR BLANC */}
      <div className="relative bg-white z-10 w-full">
        {/* BACKGROUND MARQUEES */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* BANDEAU 1 */}
          <div className="absolute top-[7%] left-0 w-full h-[60vh] overflow-hidden">
            <div className="flex animate-marquee-right whitespace-nowrap">
              {/* DUPLICATION POUR CONTINU */}
              {[...Array(2)].map((_, block) =>
                Array(20)
                  .fill("AMANTIQUE")
                  .map((text, i) => (
                    <span
                      key={`${block}-${i}`}
                      className="text-[22vw] md:text-[25vw] font-extrabold text-[#F20D01] opacity-10 mx-10 select-none"
                    >
                      {text}
                    </span>
                  ))
              )}
            </div>
          </div>

          {/* BANDEAU 2 */}
          <div className="absolute top-[55%] left-0 w-full h-[40vh] overflow-hidden">
            <div className="flex animate-marquee-left whitespace-nowrap">
              {[...Array(2)].map((_, block) =>
                Array(20)
                  .fill("AMANTIQUE")
                  .map((text, i) => (
                    <span
                      key={`b-${block}-${i}`}
                      className="text-[22vw] md:text-[12vw] font-extrabold text-[#F20D01] opacity-10 mx-10 select-none"
                    >
                      {text}
                    </span>
                  ))
              )}
            </div>
          </div>
        </div>

        {/* CONTENU */}
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
            <div className="flex justify-center space-x-6">
              {[
                {
                  href: "https://amantique.bandcamp.com",
                  src: "/img/icon/bandcamp_red.png",
                  alt: "Bandcamp",
                },
                {
                  href: "https://www.instagram.com/amantique._/",
                  src: "/img/icon/instagram_red.png",
                  alt: "Instagram",
                },
                {
                  href: "https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N",
                  src: "/img/icon/spotify_red.png",
                  alt: "Spotify",
                },
                {
                  href: "https://music.apple.com/fr/artist/amantique/1771329106",
                  src: "/img/icon/apple_red.png",
                  alt: "Apple Music",
                },
                {
                  href: "https://dzr.page.link/18ZrTtkM344FGeA77",
                  src: "/img/icon/deezer_red.png",
                  alt: "Deezer",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=100091951621434",
                  src: "/img/icon/facebook_red.png",
                  alt: "Facebook",
                },
                {
                  href: "https://www.youtube.com/@Amantique",
                  src: "/img/icon/youtube_red.png",
                  alt: "YouTube",
                },
              ].map((icon, index) => (
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
            {/* COVER */}
            <a
              className="relative group"
              href="https://open.spotify.com/intl-fr/album/7saazYMgviLznaQ3Oyii2l"
              data-aos="fade-right"
            >
              <div className="perspective-[1000px]">
                <TiltImageMotion
                  src="/img/cover/laurent.png"
                  alt="EP cover"
                  width={350}
                  height={350}
                  overlayText="1er EP DISPO"
                />
              </div>
            </a>

            {/* TRACKLIST */}
            <div
              className="space-y-4 text-center md:text-left"
              data-aos="fade-left"
            >
              {[
                [
                  "1. Eau Salée",
                  "https://open.spotify.com/track/4gjrLMzHI2l13ZsJt4V3C7",
                ],
                [
                  "2. Daphné",
                  "https://open.spotify.com/track/20ZVH5eaaRqSc2Wp3tZ9zJ",
                ],
                [
                  "3. La Mer",
                  "https://open.spotify.com/track/1VG0RQfs5k9vqgNsdcKuCB",
                ],
                [
                  "4. La Météo",
                  "https://open.spotify.com/track/5aXqNK2bVKFfQyWWkhYdgr",
                ],
                [
                  "5. Anges & Mouches",
                  "https://open.spotify.com/track/4WlYmInKMOBR2NNZBLRzJG",
                ],
              ].map(([title, link], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-3xl font-semibold text-gray-900 hover:text-[#F20D01] transition">
                    {title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* SINGLES */}
          <a
            href="https://open.spotify.com/intl-fr/track/2XTRcViRcnXy9vlDA6JpiU?si=fe873934bf4f46e0"
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
                  Singles
                </span>
                Singles
              </h2>

              <div className="perspective-[1000px]" data-aos="fade-right">
                <TiltImageMotion
                  src="/img/cover/ligne.png"
                  alt="Single cover"
                  width={280}
                  height={280}
                  overlayText="NOUVEAU"
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

      {/* CSS MARQUEE CONTINU */}
      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
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
