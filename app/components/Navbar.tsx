"use client";

import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import contacts from "../../public/data/fr/contacts.json";

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
  onEventClick?: () => void;
  onVideoClick?: () => void;
  onMusiqueClick?: () => void;
  onBioClick?: () => void;
  onPhotoClick?: () => void;
  onParolesClick?: () => void;
  onActusClick?: () => void;
  onMerchClick?: () => void;
}

type NavItem = {
  label: string;
  onClick?: () => void;
};

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      onContactClick,
      onEventClick,
      onVideoClick,
      onMusiqueClick,
      onBioClick,
      onPhotoClick,
      onParolesClick,
      onActusClick,
      onMerchClick,
    },
    ref
  ) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: NavItem[] = [
      { label: "MUSIQUES", onClick: onMusiqueClick },
      { label: "DATES", onClick: onEventClick },
      { label: "MERCH", onClick: onMerchClick },
      { label: "VIDÉOS", onClick: onVideoClick },
      { label: "ACTUS", onClick: onActusClick },
      { label: "BIO", onClick: onBioClick },
      { label: "PAROLES", onClick: onParolesClick },
      { label: "PHOTOS", onClick: onPhotoClick },
      { label: "CONTACTS", onClick: onContactClick },
    ];

    return (
      <nav
        ref={ref}
        className={`fixed top-0 w-full flex items-center justify-between px-5 z-50 h-[60px] transition-all
        ${scrolled ? "bg-black/50 backdrop-blur-md shadow-2xl" : "bg-black/80"}
        ${className}`}
      >
        <h1 className="sr-only">amantique</h1>

        {/* SOCIAL ICONS DESKTOP */}
        <div className="hidden xl:flex items-center space-x-3">
          {contacts.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={s.src}
                alt={s.alt}
                width={20}
                height={20}
                className="hover:scale-150 transition-all duration-500 ease-out "
              />
            </a>
          ))}
        </div>

        {/* LOGO CENTER */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-4xl xl:text-6xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AMANTIQUE
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex text-xl space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                item.onClick?.();
              }}
              className="hover:text-[#F20D01] hover:scale-125 transition-all duration-500 ease-out "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="xl:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center space-y-4 py-6 xl:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick?.();
                  setMenuOpen(false);
                }}
                className="text-2xl hover:text-[#F20D01]"
              >
                {item.label}
              </a>
            ))}

            {/* SOCIAL ICONS MOBILE */}
            <div className="flex space-x-4 pt-4">
              {contacts.socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={22}
                    height={22}
                    className="hover:scale-125 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";
export default Navbar;
