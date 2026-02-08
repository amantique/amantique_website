"use client";

import React, { useState } from "react";
import Card, { CardData } from "../ui/InfoCard";

interface CardGridProps<T extends CardData> {
  data: T[];
  sortByDate?: boolean;
  futureTitle?: string;
  pastTitle?: string;
}

export const CardGrid = <T extends CardData>({
  data,
  sortByDate = false,
  futureTitle = "À VENIR",
  pastTitle = "TROP TARD...",
}: CardGridProps<T>) => {
  const today = new Date();
  const [visibleFuture, setVisibleFuture] = useState(4);
  const [visiblePast, setVisiblePast] = useState(4);

  let future: T[] = [];
  let past: T[] = [];

  if (sortByDate) {
    future = data
      .filter((d: any) => new Date(d.meta) >= today)
      .sort((a: any, b: any) => new Date(a.meta).getTime() - new Date(b.meta).getTime());
  
    past = data
      .filter((d: any) => new Date(d.meta) < today)
      .sort((a: any, b: any) => new Date(b.meta).getTime() - new Date(a.meta).getTime());
  }   else {
    future = data;
  }

  return (
    <div className="w-full text-center">
      {sortByDate && (
        <>
          {/* À venir */}
          <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 mb-4">{futureTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {future.slice(0, visibleFuture).map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </div>
          {visibleFuture < future.length && (
            <button
              onClick={() => setVisibleFuture(visibleFuture + 4)}
              className="mt-4 px-6 py-2 text-2xl bg-[#F20D01] text-white hover:text-[#F20D01] hover:bg-white font-bold rounded-3xl transition-all duration-500 ease-out"
            >
              Afficher plus
            </button>
          )}

          {/* Passés */}
          <h3 className="text-left text-white text-5xl pl-4 sm:pl-8 md:pl-16 my-4">{pastTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {past.slice(0, visiblePast).map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </div>
          {visiblePast < past.length && (
            <button
              onClick={() => setVisiblePast(visiblePast + 4)}
              className="mt-4 px-6 py-2 text-2xl bg-[#F20D01] text-white hover:text-[#F20D01] hover:bg-white font-bold rounded-3xl transition-all duration-500 ease-out"
            >
              Afficher plus
            </button>
          )}
        </>
      )}

      {!sortByDate && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {data.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
