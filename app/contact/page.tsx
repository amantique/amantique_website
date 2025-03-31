"use client";

import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden", backgroundColor: "#F20D01", }}>amantique</h1>
      <div className="w-full mx-auto text-black bg-[#F20D01] px-20 pb-4">

        {/* Conteneur principal */}
        <div className="text-center">

          {/* Première colonne */}
          <div className="flex-1">
            <h2 className="text-7xl font-extrabold sm:text-9xl pt-7">CONTACTS</h2>
            <div className="pl-4">
              <p className="text-base text-white font-robotomono">
                Besoin d&apos;infos, envie de programmer un concert ou une question qui trotte dans ta tête ? N’hésite pas à nous contacter par ici.
              </p>
            </div>            
          </div>

          {/* Deuxième colonne */}
          <div className="flex-1 space-y-4 mt-4">
            
            {/* Email */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-7 max-w-md mx-auto">
              <p className="text-3xl text-gray-600">
                <a href="mailto:amantic.sm@gmail.com" className="text-[#F20D01] hover:underline">
                  amantic.sm@gmail.com
                </a>
              </p>
            </div>

            {/* Téléphone */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-7 max-w-md mx-auto">
              <p className="text-3xl text-gray-600">
                <a href="tel:+33782140660" className="text-[#F20D01] hover:underline">
                  +33 7 82 14 06 60
                </a>
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
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

          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
