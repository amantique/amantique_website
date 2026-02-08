"use client";

import React, { useState, useEffect, useRef } from "react";
import LoaderPage from "./components/LoaderPage";
import Navbar from "./components/Navbar";
import EventPage from "./event/page";
import VideoPage from "./video/page";
import ParolesPage from "./paroles/page";
import MusiquePage from "./musique/page";
import BioPage from "./bio/page";
import PhotoPage from "./photo/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";
import ActusPage from "./actus/page";
import MerchPage from "./merch/page";

const MIN_LOADING_TIME = 2000;

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const eventPageRef = useRef<HTMLDivElement>(null);
  const videoPageRef = useRef<HTMLDivElement>(null);
  const actusPageRef = useRef<HTMLDivElement>(null);
  const musiquePageRef = useRef<HTMLDivElement>(null);
  const bioPageRef = useRef<HTMLDivElement>(null);
  const parolesPageRef = useRef<HTMLDivElement>(null);
  const photoPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);
  const merchPageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const startTime = Date.now();

    const preloadImages = () =>
      Promise.all(
        Array.from(document.images).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve();
              else img.onload = img.onerror = () => resolve();
            })
        )
      );

    const preloadVideos = () =>
      Promise.all(
        Array.from(document.querySelectorAll<HTMLVideoElement>("video")).map(
          (video) =>
            new Promise<void>((resolve) => {
              if (video.readyState >= 3) resolve();
              else video.onloadeddata = video.onerror = () => resolve();
            })
        )
      );

    const loadAllMedia = async () => {
      await Promise.all([preloadImages(), preloadVideos()]);

      const elapsed = Date.now() - startTime;
      const remaining = MIN_LOADING_TIME - elapsed;
      setTimeout(() => setFadeOutLoader(true), remaining > 0 ? remaining : 0);
      setTimeout(() => setIsLoaded(true), remaining > 0 ? remaining + 500 : 500);
    };

    loadAllMedia();
  }, []);

  if (!isLoaded)
    return <LoaderPage text="Bzzzzzzzz" fadeOut={fadeOutLoader} />;

  return (
    <main className="transition-opacity duration-500" style={{ opacity: isLoaded ? 1 : 0 }}>
      <Navbar
        ref={navbarRef}
        className="sticky top-0 z-50"
        onContactClick={() => scrollToSection(contactPageRef)}
        onEventClick={() => scrollToSection(eventPageRef)}
        onVideoClick={() => scrollToSection(videoPageRef)}
        onMusiqueClick={() => scrollToSection(musiquePageRef)}
        onBioClick={() => scrollToSection(bioPageRef)}
        onPhotoClick={() => scrollToSection(photoPageRef)}
        onParolesClick={() => scrollToSection(parolesPageRef)}
        onActusClick={() => scrollToSection(actusPageRef)}
        onMerchClick={() => scrollToSection(merchPageRef)}
      />

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
      <div ref={eventPageRef}><EventPage /></div>
      <div ref={merchPageRef}><MerchPage /></div>
      <div ref={videoPageRef}><VideoPage /></div>
      <div ref={actusPageRef}><ActusPage /></div>
      <div ref={bioPageRef}><BioPage /></div>
      <div ref={parolesPageRef}><ParolesPage /></div>
      <div ref={photoPageRef}><PhotoPage /></div>
      <div ref={contactPageRef} className="w-full"><ContactPage /></div>

      <Footer />
    </main>
  );
};

export default HomePage;
