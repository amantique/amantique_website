"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "SYNPRODUCTION",
    subtitle: "À LA RENCONTRE DE… AMANTIQUE",
    author: "",
    image: "/img/live/153A1371.jpg",
    category: "Vidéo",
    url: "https://www.instagram.com/reel/DGOL2I0ojtL/?utm_source=ig_web_copy_link",
    reverse: false,
  },
  {
    title: "LA VAGUE PARALLELE",
    subtitle: "Amantique le bruit et la fureur",
    author: "Paul Mougeot",
    image: "/img/live/153A1354.jpg",
    category: "Article",
    url: "https://lavagueparallele.com/amantique-le-bruit-et-la-fureur/",
    reverse: true,
  },
  {
    title: "RADIO CAMPUS",
    subtitle: "LA TRANCHE - Amantique",
    author: "Faustine Moulin",
    image: "/img/live/153A1185.jpg",
    category: "Podcast",
    url: "https://open.spotify.com/episode/3lzq7sMzpsIuqzZ4w7Jp5m?si=r7x-IJpmQpWXw8xh8OzYSg",
    reverse: false,
  },
  {
    title: "HEXALIVE",
    subtitle: "Amantique, EP à sortir le 17 février",
    author: "Gafish",
    image: "/img/live/153A1316.jpg",
    category: "Article",
    url: "https://hexalive.rocks/actualites/amantique-ep-a-sortir-le-17-fevrier/",
    reverse: true,
  },
  {
    title: "TOTALEMENT ROCK",
    subtitle: "#2.11 Liquid Bear en interview",
    author: "",
    image: "/img/live/153A1422.jpg",
    category: "Podcast",
    url: "https://soundcloud.com/user-393781883/totalement-rock-2-11-02-05-25?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    reverse: false,
  },
];

const ActusPageResponsive = () => {
  return (
    <>
      <h1 className="sr-only">amantique</h1>
      <div className="w-full mx-auto text-center text-black bg-white">
        <h2 className="text-7xl text-black font-extrabold pt-4 sm:text-9xl drop-shadow-lg">ACTUS</h2>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <Link href={article.url} key={index} target="_blank" rel="noopener noreferrer">
              <div className={`flex flex-col md:flex-row w-full items-center bg-[#F20D01] text-white relative overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${article.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className={`p-4 md:w-1/3 ${article.reverse ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-4xl md:text-6xl">{article.title}</h3>
                  <p className="text-2xl md:text-4xl">{article.subtitle}</p>
                  <p className="text-xl">{article.author}</p>
                </div>
                <div className="relative w-full md:w-2/3 h-[300px]">
                  <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
                  <div className="absolute bottom-2 right-2 text-white text-2xl md:text-5xl px-3 py-1 rounded-lg">
                    {article.category}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActusPageResponsive;
