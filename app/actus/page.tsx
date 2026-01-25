"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

type Article = {
  title: string;
  subtitle: string;
  author: string;
  image: string;
  category: string;
  url: string;
  reverse: boolean;
};

const ActusPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/data/fr/articles.json");
        if (!res.ok) throw new Error("Erreur lors du chargement des articles");
        const data: Article[] = await res.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} data-aos="fade-up">
        amantique
      </h1>
      <div className="w-full mx-auto text-center text-black pb-4 bg-white">
        <h2 className="text-7xl text-black font-extrabold pt-4 sm:text-9xl drop-shadow-lg">ACTUS</h2>

        <div className="grid grid-cols-2 gap-6 mt-8 px-4">
          {articles.map((article, index) => (
            <Link href={article.url} key={index} target="_blank" rel="noopener noreferrer">
              <div className="flex w-full items-start bg-[#F20D01] text-white relative overflow-hidden cursor-pointer transition-transform transform hover:scale-105" data-aos="zoom-in-right">
                {!article.reverse && (
                  <div className="whitespace-nowrap text-right p-4">
                    <h3 className="text-6xl">{article.title}</h3>
                    <p className="text-4xl">{article.subtitle}</p>
                    <p>{article.author}</p>
                  </div>
                )}
                <div className="relative w-2/3 h-[300px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 right-2 text-white text-5xl px-3 py-1 rounded-lg">
                    {article.category}
                  </div>
                </div>
                {article.reverse && (
                  <div className="whitespace-nowrap text-right p-4">
                    <h3 className="text-6xl">{article.title}</h3>
                    <p className="text-4xl">{article.subtitle}</p>
                    <p className="text-2xl">{article.author}</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActusPage;
