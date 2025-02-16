"use client";

import React from 'react';
import Image from 'next/image';

const BentoPage = () => {
  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>
      <div className="w-full mx-auto text-center text-black pb-4 bg-white">
        <h2 className="text-7xl text-black font-extrabold pt-4 sm:text-9xl drop-shadow-lg">MUSIQUES</h2>

        <div className="max-w-md mx-auto mb-4">
          <div className="flex justify-center space-x-6">
            {[
              { href: "https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w", src: "/img/icon/spotify_red.png", alt: "Spotify" },
              { href: "https://music.apple.com/fr/artist/amantique/1771329106", src: "/img/icon/apple_red.png", alt: "Apple Music" },
              { href: "https://www.instagram.com/amantique._/", src: "/img/icon/instagram_red.png", alt: "Instagram" },
              { href: "https://www.facebook.com/profile.php?id=100091951621434", src: "/img/icon/facebook_red.png", alt: "Facebook" },
              { href: "https://www.tiktok.com/@amantique_?is_from_webapp=1&sender_device=pc", src: "/img/icon/tiktok_red.png", alt: "TikTok" },
              { href: "https://www.youtube.com/@Amantique", src: "/img/icon/youtube_red.png", alt: "YouTube" },
            ].map((icon, index) => (
              <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                <Image src={icon.src} alt={icon.alt} width={30} height={30} className="rounded-md" />
              </a>
            ))}
          </div>
        </div>

        {/* Liste de la playlist */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-20">
          <div className="relative group">
            <Image
              src="/img/cover/laurent.png"
              alt="Image de la carte"
              width={320}
              height={320}
              className="object-cover"
            />
            <div className="text-[#F20D01] absolute top-[160px] left-0 w-full text-center text-5xl font-bold animate-bounce">
              DISPO LE 17 • 01
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col">
              <a
                href="https://youtu.be/JYfQXyXPdhs?si=XYOu95WlmPqcEu9X"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  Eau Salée
                </p>
              </a>
              <a
                href="https://youtu.be/nXbfBoSJI7o?si=La8zugaD8prDyGBY"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  Anges & Mouches
                </p>
              </a>
            </div>

            {/* Texte supplémentaire */}
            <div className="relative">
              <p className="text-3xl font-semibold text-gray-400">
                Et beaucoup d&apos;autres à venir...
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default BentoPage;
