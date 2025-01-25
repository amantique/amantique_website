"use client";

import React from 'react';
import Image from 'next/image'; // si tu utilises Next.js

const ContactPage = () => {
  return (
    <>
      <div className="w-full mx-auto text-black bg-[#F20D01] px-20 pb-4">

        {/* Div avec deux colonnes */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">

          {/* Première colonne*/}
          <div className="flex-1">
          <h2 className="mt-4 text-7xl font-extrabold sm:text-9xl">CONTACTS</h2>
            <div className="pl-4">
              <p className="text-base text-white font-robotomono">Besoin d&apos;infos, envie de programmer un concert ou une question qui trotte dans ta tête ? N’hésite pas à nous contacter par ici.</p>
            </div>            
          </div>

          {/* Deuxième colonne*/}
          <div className="flex-1 space-y-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md mt-7">
              <p className="text-3xl text-gray-600">
                <a href="mailto:amantic.sm@gmail.com" className="text-[#F20D01] hover:underline">
                  amantic.sm@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex space-x-6">
                {/* Spotify */}
                <a href="https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/spotify_red.png" alt="Spotify Icon" width={30} height={30} className="rounded-md" />
                </a>

                {/* Apple Music */}
                <a href="https://music.apple.com/fr/artist/amantique/1771329106" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/apple_red.png" alt="Apple Music Icon" width={30} height={30} className="rounded-md" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/amantique._/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/instagram_red.png" alt="Instagram Icon" width={30} height={30} className="rounded-md" />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=100091951621434" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/facebook_red.png" alt="Facebook Icon" width={30} height={30} className="rounded-md" />
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@amantique_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/tiktok_red.png" alt="TikTok Icon" width={30} height={30} className="rounded-md" />
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@Amantique" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
                  <Image src="/img/icon/youtube_red.png" alt="YouTube Icon" width={30} height={30} className="rounded-md" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
