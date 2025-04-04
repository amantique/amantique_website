"use client";

import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";
import DatePage from "./date/page";
import VideoPage from "./video/page";
import ParolesPage from "./paroles/page";
import MusiquePage from "./musique/page";
import BioPage from "./bio/page";
import PhotoPage from "./photo/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";
import ActusPage from "./actus/page";
import ActusPageResponsive from "./actus/actuse_responsive";

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Références des sections
  const datePageRef = useRef<HTMLDivElement>(null);
  const videoPageRef = useRef<HTMLDivElement>(null);
  const actusPageRef = useRef<HTMLDivElement>(null);
  const musiquePageRef = useRef<HTMLDivElement>(null);
  const bioPageRef = useRef<HTMLDivElement>(null);
  const parolesPageRef = useRef<HTMLDivElement>(null);
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
      setIsSmallScreen(window.innerWidth < 1250);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <>
      <Head>
        <title>Amantique</title>
        <meta name="description" content="amantique" />
        <meta property="og:title" content="amantique" />
        <meta property="og:description" content="amantique" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.amantique.fr" />
        <meta name="robots" content="index, follow" />
      </Head>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>
      {isSmallScreen ? (
        <Navbar_Responsive 
          ref={navbarRef} 
          className="sticky top-0 z-50"
          onContactClick={() => scrollToSection(contactPageRef)}
          onDateClick={() => scrollToSection(datePageRef)}
          onVideoClick={() => scrollToSection(videoPageRef)}
          onMusiqueClick={() => scrollToSection(musiquePageRef)}
          onBioClick={() => scrollToSection(bioPageRef)}
          onParoleClick={() => scrollToSection(parolesPageRef)}
          onPhotoClick={() => scrollToSection(photoPageRef)}
          onActusClick={() => scrollToSection(actusPageRef)}
        />
      ) : (
        <Navbar
          ref={navbarRef} 
          className="sticky top-0 z-50"
          onContactClick={() => scrollToSection(contactPageRef)}
          onDateClick={() => scrollToSection(datePageRef)}
          onVideoClick={() => scrollToSection(videoPageRef)}
          onMusiqueClick={() => scrollToSection(musiquePageRef)}
          onBioClick={() => scrollToSection(bioPageRef)}
          onPhotoClick={() => scrollToSection(photoPageRef)}
          onParolesClick={() => scrollToSection(parolesPageRef)}
          onActusClick={() => scrollToSection(actusPageRef)}
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
        <DatePage />
      </div>
      <div ref={videoPageRef}>
        <VideoPage />
      </div>
      <div ref={actusPageRef}>
        {isSmallScreen ? <ActusPageResponsive /> : <ActusPage />}
      </div>
      <div ref={bioPageRef}>
        <BioPage />
      </div>
      <div ref={parolesPageRef}>
        <ParolesPage />
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
