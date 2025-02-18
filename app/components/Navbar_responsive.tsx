"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
  onDateClick?: () => void;
  onMusiqueClick?: () => void;
  onBioClick?: () => void;
  onPhotoClick?: () => void;
  onParoleClick?: () => void;
}

// Définition du composant Navbar avec forwardRef
const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick, onDateClick, onMusiqueClick, onBioClick, onPhotoClick, onParoleClick }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Gestion de l'état du menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      ref={ref} // Référence pour le composant
      className={`text-white flex items-center justify-between fixed top-0 px-4 py-2 z-50
        ${scrolled ? 'bg-black bg-opacity-50 backdrop-blur-md shadow-2xl' : 'bg-black bg-opacity-30 shadow-none'}
        ${className} w-full`}
    >
      {/* Conteneur pour le logo */}
      <div className="flex justify-between items-center w-full">
        {/* Logo centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1
            className="text-3xl cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AMANTIQUE
          </h1>
        </div>

        {/* Menu mobile */}
        <div className="block lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
            {menuOpen ? '×' : '☰'} {/* Icône menu hamburger */}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-black bg-opacity-70 text-white p-4 flex flex-col space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onMusiqueClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            MUSIQUES
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onDateClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            DATES
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBioClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            BIO
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onParoleClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            PAROLES
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPhotoClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            PHOTOS
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onContactClick?.();
              closeMenu(); // Ferme le menu après le clic
            }}
            className="hover:text-[#F20D01] transition-colors duration-300"
          >
            CONTACTS
          </a>
        </div>
      )}

      {/* Conteneur des icônes sociaux visible sur mobile et desktop */}
      <div className="hidden lg:flex space-x-4">
        <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/spotify.png" alt="Spotify Icon" width={20} height={20} />
        </a>
        <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/apple.png" alt="Apple Music Icon" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/instagram.png" alt="Instagram Icon" width={20} height={20} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/facebook.png" alt="Facebook Icon" width={20} height={20} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/tiktok.png" alt="TikTok Icon" width={20} height={20} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/youtube.png" alt="YouTube Icon" width={20} height={20} />
        </a>
      </div>
    </nav>
  );
});

// Définir le displayName pour faciliter le débogage
Navbar.displayName = 'Navbar';

export default Navbar;
