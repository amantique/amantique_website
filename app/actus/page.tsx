"use client"

import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { Article } from "./Actus.types"
import { ArticleCard } from "./ArticleCard"

const ActusPage = () => {
  const [articles, setArticles] = useState<Article[]>([])

  // Init animations
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  // Load data
  useEffect(() => {
    fetch("/data/fr/articles.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load articles")
        return res.json()
      })
      .then(setArticles)
      .catch(console.error)
  }, [])
  const designConfig = {
    bgColor: "#F20D01",
    textColor: "#FFFFF"
  }

  return (
    <>
      {/* SEO hidden title */}
      <h1 className="sr-only">amantique</h1>

      <div className="w-full mx-auto text-center text-black bg-white pb-8">
        <h2 className="text-7xl font-extrabold pt-4 sm:text-9xl drop-shadow-lg">
          ACTUS
        </h2>

        {/* Responsive grid */}
        <div className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              design={designConfig}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ActusPage