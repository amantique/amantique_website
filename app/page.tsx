"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";
import DatePage from "./date/page";
import DatePageResponsive from "./date/page_responsive";
import MusiquePage from "./musique/page";
import BioPage from "./bio/page";
import PhotoPage from "./photo/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Références des sections
  const datePageRef = useRef<HTMLDivElement>(null);
  const musiquePageRef = useRef<HTMLDivElement>(null);
  const bioPageRef = useRef<HTMLDivElement>(null);
  const photoPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  // Calculer la hauteur de la navbar
  const getNavbarHeight = () => navbarRef.current ? navbarRef.current.offsetHeight : 0;

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = getNavbarHeight();
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 830);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>
      {isSmallScreen ? (
        <Navbar_Responsive 
          ref={navbarRef} 
          className="sticky top-0 z-50"
          onContactClick={() => scrollToSection(contactPageRef)}
          onDateClick={() => scrollToSection(datePageRef)}
          onMusiqueClick={() => scrollToSection(musiquePageRef)}
          onBioClick={() => scrollToSection(bioPageRef)}
          onPhotoClick={() => scrollToSection(photoPageRef)}
        />
      ) : (
        <Navbar
          ref={navbarRef} 
          className="sticky top-0 z-50"
          onContactClick={() => scrollToSection(contactPageRef)}
          onDateClick={() => scrollToSection(datePageRef)}
          onMusiqueClick={() => scrollToSection(musiquePageRef)}
          onBioClick={() => scrollToSection(bioPageRef)}
          onPhotoClick={() => scrollToSection(photoPageRef)}
        />
      )}
      <div className="w-full pt-20">
        {/* Section de la vidéo */}
        <div className="w-full">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src="/video/teaser_flute_reduce.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Sections */}
      <div ref={musiquePageRef} style={{ width: "100%", marginTop: "86vh" }}>
        <MusiquePage />
      </div>
      <div ref={datePageRef}>
        {isSmallScreen ? (<DatePageResponsive />) : (<DatePage />)}
      </div>
      <div ref={bioPageRef}>
        <BioPage />
      </div>
      <div ref={photoPageRef}>
        <PhotoPage />
      </div>
      <div ref={contactPageRef} className="w-full">
        <ContactPage />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
