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
              { href: "https://amantique.bandcamp.com", src: "/img/icon/bandcamp_red.png", alt: "Bandcamp"},
              { href: "https://www.instagram.com/amantique._/", src: "/img/icon/instagram_red.png", alt: "Instagram" },
              { href: "https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w", src: "/img/icon/spotify_red.png", alt: "Spotify" },
              { href: "https://music.apple.com/fr/artist/amantique/1771329106", src: "/img/icon/apple_red.png", alt: "Apple Music" },
              { href: "https://dzr.page.link/18ZrTtkM344FGeA77", src: "/img/icon/deezer_red.png", alt: "Deezer" },
              { href: "https://www.facebook.com/profile.php?id=100091951621434", src: "/img/icon/facebook_red.png", alt: "Facebook" },
              { href: "https://www.youtube.com/@Amantique", src: "/img/icon/youtube_red.png", alt: "YouTube" },
            ].map((icon, index) => (
              <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center transition-transform transform hover:scale-150">
                <Image src={icon.src} alt={icon.alt} width={30} height={30} className="rounded-md" />
              </a>
            ))}
          </div>
        </div>

        {/* Liste de la playlist */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-20">
          <a className="relative group" href='https://open.spotify.com/intl-fr/album/7saazYMgviLznaQ3Oyii2l?si=RVMf56lmT7yOqMB6kB9VJQ'>
            <Image
              src="/img/cover/laurent.png"
              alt="Image de la carte"
              width={320}
              height={320}
              className="object-cover"
            />
            <div className="text-[#F20D01] absolute top-[160px] left-0 w-full text-center text-5xl font-bold animate-bounce">
              DISPO LE 17 • 02
            </div>
          </a>

          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col">
              <a
                href="https://open.spotify.com/intl-fr/track/4gjrLMzHI2l13ZsJt4V3C7?si=d5874015b8894066"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  1. Eau Salée
                </p>
              </a>
              <a
                href="https://open.spotify.com/intl-fr/track/20ZVH5eaaRqSc2Wp3tZ9zJ?si=399e643fc49245ee"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  2. Daphné
                </p>
              </a>
              <a
                href="https://open.spotify.com/intl-fr/track/1VG0RQfs5k9vqgNsdcKuCB?si=f7d91ed5312142d8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  3. La Mer
                </p>
              </a>
              <a
                href="https://open.spotify.com/intl-fr/track/5aXqNK2bVKFfQyWWkhYdgr?si=8329172d978d4fe9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  4. La Météo
                </p>
              </a>
              <a
                href="https://open.spotify.com/intl-fr/track/4WlYmInKMOBR2NNZBLRzJG?si=5e9e4fc501404529"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="text-3xl font-semibold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-[#F20D01]">
                  5. Anges & Mouches
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
