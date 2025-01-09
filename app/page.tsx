"use client";

import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";
import DatePage from "./date/page";
import MusiquePage from "./musique/page";
import BioPage from "./bio/page";
import PhotoPage from "./photo/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [flies, setFlies] = useState([
  //   { id: 1, position: { top: 100, left: 100 }, size: 50, speed: { x: 10, y: 10 } },
  //   { id: 2, position: { top: 200, left: 300 }, size: 100, speed: { x: 15, y: 5 } },
  //   { id: 3, position: { top: 400, left: 500 }, size: 75, speed: { x: 20, y: 20 } },
  // ]);

  const datePageRef = useRef<HTMLDivElement>(null);
  const musiquePageRef = useRef<HTMLDivElement>(null);
  const bioPageRef = useRef<HTMLDivElement>(null);
  const photoPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  const scrollToDatePage = () => {
    if (datePageRef.current) {
      const elementPosition = datePageRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 870;
  
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToMusiquePage = () => {
    if (musiquePageRef.current) {
      const elementPosition = musiquePageRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 0;
  
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToBioPage = () => {
    if (bioPageRef.current) {
      const elementPosition = bioPageRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight;

      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToPhotoPage = () => {
    if (photoPageRef.current) {
      const elementPosition = photoPageRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight;

      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToContactPage = () => {
    if (contactPageRef.current) {
      const elementPosition = contactPageRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight;

      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 750);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  // useEffect(() => {
    // const moveFlies = () => {
    //   setFlies((prevFlies) => {
    //     return prevFlies.map((fly) => {
    //       let newTop = fly.position.top + fly.speed.y;
    //       let newLeft = fly.position.left + fly.speed.x;

    //       const imageWidth = fly.size;
    //       const imageHeight = fly.size;

    //       if (newTop < 0) {
    //         newTop = 0;
    //         fly.speed.y = Math.abs(Math.random() * 15);
    //         fly.speed.x = Math.random() > 0.5 ? Math.random() * 30 : -Math.random() * 30;
    //       }
    //       if (newLeft < 0) {
    //         newLeft = 0;
    //         fly.speed.x = Math.abs(Math.random() * 30);
    //         fly.speed.y = Math.random() > 0.5 ? Math.random() * 15 : -Math.random() * 15;
    //       }
    //       if (newTop + imageHeight > window.innerHeight) {
    //         newTop = window.innerHeight - imageHeight;
    //         fly.speed.y = -Math.abs(Math.random() * 15);
    //         fly.speed.x = Math.random() > 0.5 ? Math.random() * 30 : -Math.random() * 30;
    //       }
    //       if (newLeft + imageWidth > window.innerWidth) {
    //         newLeft = window.innerWidth - imageWidth;
    //         fly.speed.x = -Math.abs(Math.random() * 30);
    //         fly.speed.y = Math.random() > 0.5 ? Math.random() * 15 : -Math.random() * 15;
    //       }

    //       return { ...fly, position: { top: newTop, left: newLeft } };
    //     });
    //   });
    // };

    // const interval = setInterval(moveFlies, 30); 

  //   return () => clearInterval(interval);
  // }, []);

  // const handleFlyClick = (size: number) => {
  //   const newFly = {
  //     id: flies.length + 1,
  //     position: {
  //       top: Math.random() * (window.innerHeight - size),
  //       left: Math.random() * (window.innerWidth - size),
  //     },
  //     size: size,
  //     speed: { x: Math.random() * 15, y: Math.random() * 15 },
  //   };

  //   setFlies((prevFlies) => [...prevFlies, newFly]);
  // };

  return (
    <>
      {isSmallScreen ? (
        <Navbar_Responsive />
      ) : (
        <Navbar
          className="sticky top-0 z-50"
          onContactClick={scrollToContactPage} 
          onDateClick={scrollToDatePage} 
          onPhotoClick={scrollToPhotoPage}
          onMusiqueClick={scrollToMusiquePage}
          onBioClick={scrollToBioPage}
        />
      )}
      <div className="container w-full pt-20">
        {/* Section de la vidéo */}
        <div className="w-full">
        <iframe
          width="100%"    // Utilise 100% de la largeur disponible
          height="100vh"  // Utilise 100% de la hauteur de la fenêtre
          src="https://www.youtube.com/embed/nXbfBoSJI7o?autoplay=1&loop=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "absolute",  // Positionné absolument pour occuper tout l'écran
            top: 0,
            left: 0,
            width: "100%",   // Prend toute la largeur
            height: "100vh", // Prend toute la hauteur de la fenêtre
            objectFit: "cover",  // Couvre tout l'écran sans déformation
            zIndex: -1,    // Si tu veux mettre la vidéo en arrière-plan
          }}
        ></iframe>
        </div>

        {/* Mouches qui se déplacent sur toute la page */}
        {/* {flies.map((fly) => (
          <div
            key={fly.id}
            style={{
              position: "absolute",
              top: `${fly.position.top}px`,
              left: `${fly.position.left}px`,
              zIndex: 100,
              cursor: "pointer",
              width: `${fly.size}px`,
              height: "auto",
            }}
          >
            <Image
              src="/img/fly/red_little_fly.png"
              alt="Mouche"
              onClick={() => handleFlyClick(fly.size)}
              width={fly.size}
              height={fly.size}
              className="object-contain"
            />
          </div>
        ))}*/}
      </div> 

      {/* Appel du composant DatePage */}
      <div ref={datePageRef} style={{ width: "100%", paddingTop: "86vh", margin: 0 }}>
        <DatePage />
      </div>

      {/* Appel du composant MusiquePage */}
      <div ref={musiquePageRef}>
        <MusiquePage />
      </div>
      
      {/* Appel du composant BioPage */}
      <div ref={bioPageRef}>
        <BioPage />
      </div>
      
      {/* Appel du composant PhotoPage */}
      <div ref={photoPageRef}>
        <PhotoPage />
      </div>

      {/* Appel du composant ContactPage */}
      <div ref={contactPageRef}>
          <ContactPage />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
