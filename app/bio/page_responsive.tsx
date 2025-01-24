"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NavbarResponsive = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fonction pour gérer le scroll et changer la couleur du fond
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`text-white flex flex-col sm:flex-row items-center justify-between fixed top-0 left-0 w-full p-5 z-50
        ${scrolled ? 'bg-black bg-opacity-50 backdrop-blur-md shadow-2xl' : 'bg-black bg-opacity-30 shadow-none'} 
        h-[150px] mb-8`}  // Hauteur et marge en bas
      style={{
        backgroundImage: "url('/img/bg/bg_bio_responsive.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="flex justify-between w-full items-center">
        <h1
          className="text-4xl cursor-pointer sm:text-6xl"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          AMANTIQUE
        </h1>

        {/* Menu Hamburger Button */}
        <button 
          className="sm:hidden flex flex-col items-center justify-center space-y-1"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu items (visible en desktop ou quand le menu est ouvert sur mobile) */}
      <div className={`w-full ${menuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-8 flex-col sm:flex-row space-y-4 sm:space-y-0 mt-6 sm:mt-0`}>
        <div className="relative group">
          <a href="#date" className="hover:text-[#F20D01] transition-all duration-300">
            DATE
          </a>
          <div className="absolute left-0 hidden group-hover:block bg-[#F20D01] text-white py-1 px-2 mt-2 rounded-md">
            Date des prochains concerts
          </div>
        </div>
        <div className="relative group">
          <a href="#musique" className="hover:text-[#F20D01] transition-all duration-300">
            MUSIQUE
          </a>
          <div className="absolute left-0 hidden group-hover:block bg-[#F20D01] text-white py-1 px-2 mt-2 rounded-md">
            Écouter nos albums
          </div>
        </div>
        <div className="relative group">
          <a href="#bio" className="hover:text-[#F20D01] transition-all duration-300">
            BIO
          </a>
          <div className="absolute left-0 hidden group-hover:block bg-[#F20D01] text-white py-1 px-2 mt-2 rounded-md">
            Découvrez notre histoire
          </div>
        </div>
        <div className="relative group">
          <a href="#photos" className="hover:text-[#F20D01] transition-all duration-300">
            PHOTOS
          </a>
          <div className="absolute left-0 hidden group-hover:block bg-[#F20D01] text-white py-1 px-2 mt-2 rounded-md">
            Nos albums photos
          </div>
        </div>
        <div className="relative group">
          <a href="#contact" className="hover:text-[#F20D01] transition-all duration-300">
            CONTACT
          </a>
          <div className="absolute left-0 hidden group-hover:block bg-[#F20D01] text-white py-1 px-2 mt-2 rounded-md">
            Comment nous contacter
          </div>
        </div>

        {/* Social Icons (on mobile or desktop) */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/spotify.png" alt="Spotify" width={24} height={24} />
          </a>
          <a href="https://music.apple.com/fr/artist/amantique/1771329106" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/apple.png" alt="Apple Music" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/amantique._/" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/instagram.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091951621434" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@amantique_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/tiktok.png" alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://www.youtube.com/@Amantique" target="_blank" rel="noopener noreferrer">
            <Image src="/img/icon/youtube.png" alt="YouTube" width={24} height={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarResponsive;
