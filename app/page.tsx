"use client";

import React, { useState, useEffect, useRef } from "react";
import LoaderPage from "./components/LoaderPage";
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

const MIN_LOADING_TIME = 2000; // 2 secondes minimum

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const datePageRef = useRef<HTMLDivElement>(null);
  const videoPageRef = useRef<HTMLDivElement>(null);
  const actusPageRef = useRef<HTMLDivElement>(null);
  const musiquePageRef = useRef<HTMLDivElement>(null);
  const bioPageRef = useRef<HTMLDivElement>(null);
  const parolesPageRef = useRef<HTMLDivElement>(null);
  const photoPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  const getNavbarHeight = () =>
    navbarRef.current ? navbarRef.current.offsetHeight : 0;

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      const elementPosition =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = getNavbarHeight();
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // --- Gestion de la taille de l'écran ---
  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  // --- Loader avec durée minimale et transition ---
  useEffect(() => {
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = MIN_LOADING_TIME - elapsed;

      const showContent = () => {
        setFadeOutLoader(true); // start fade-out
        setTimeout(() => setIsLoaded(true), 500); // duration du fade-out
      };

      if (remaining > 0) {
        setTimeout(showContent, remaining);
      } else {
        showContent();
      }
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  // --- Render ---
  if (!isLoaded)
    return <LoaderPage text="Bzzzzzzzz" fadeOut={fadeOutLoader} />;

  return (
    <main
      className="transition-opacity duration-500"
      style={{ opacity: isLoaded ? 1 : 0 }}
    >
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

      {/* Vidéo de fond */}
      <div className="w-full pt-20">
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
    </main>
  );
};

export default HomePage;
