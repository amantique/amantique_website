"use client";

import React, { useState } from "react";
import Image from "next/image";

type Directories = {
  "15_10_meca": string[];
  "11_10_popup": string[];
};

const directories: Directories = {
  "15_10_meca": [
    "/img/live/15_10_meca/PB150056-Edit.jpg",
    "/img/live/15_10_meca/PB150061-Edit.jpg",
    // "/img/live/15_10_meca/PB150063-Edit.jpg",
    // "/img/live/15_10_meca/PB150083-Edit.jpg",
    // "/img/live/15_10_meca/PB150091-Edit.jpg",
    // "/img/live/15_10_meca/PB150114-Edit.jpg",
    // "/img/live/15_10_meca/PB150116-Edit.jpg",
    // "/img/live/15_10_meca/PB150121-Edit.jpg",
    // "/img/live/15_10_meca/PB150128-Edit.jpg",
    // "/img/live/15_10_meca/PB150138-Edit.jpg",
    // "/img/live/15_10_meca/PB150139-Edit.jpg",
    // "/img/live/15_10_meca/PB150144-Edit.jpg",
    // "/img/live/15_10_meca/PB150150-Edit.jpg",
    // "/img/live/15_10_meca/PB150163-Edit.jpg",
    // "/img/live/15_10_meca/PB150166-Edit.jpg",
    // "/img/live/15_10_meca/PB150191-Edit.jpg",
    // "/img/live/15_10_meca/PB150201-Edit.jpg",
    // "/img/live/15_10_meca/PB150222-Edit.jpg",
    // "/img/live/15_10_meca/PB150228-Edit.jpg",
    // "/img/live/15_10_meca/PB150238-Edit.jpg",
    // "/img/live/15_10_meca/PB150245-Edit.jpg",
    // "/img/live/15_10_meca/PB150254-Edit.jpg",
    // "/img/live/15_10_meca/PB150257-Edit.jpg",
    // "/img/live/15_10_meca/PB150260-Edit.jpg",
    // "/img/live/15_10_meca/PB150264-Edit.jpg",
    // "/img/live/15_10_meca/PB150265-Edit.jpg",
    // "/img/live/15_10_meca/PB150268-Edit.jpg",
    // "/img/live/15_10_meca/PB150269-Edit.jpg",
    // "/img/live/15_10_meca/PB150275-Edit.jpg",
    // "/img/live/15_10_meca/PB150279.jpg",
    // "/img/live/15_10_meca/PB150282.jpg",    
  ],
  "11_10_popup": [
    "/img/live/11_10_popup/PA110006-Enhanced-NR.jpg",
    "/img/live/11_10_popup/PA110010-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110011-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110012-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110014-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110017-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110041-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110043-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110046-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110051-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110052-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110059-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110063-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110065-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110067-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110069-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110074-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110075-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110078-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110081-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110084-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110087-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110212-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110239-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110266-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110272-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110285-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110289-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110295-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110297-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110300-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110304-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110306-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110334-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110339-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110343-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110351-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110354-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110362-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110364-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110372-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110374-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110382-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110387-Enhanced-NR.jpg",
    // "/img/live/11_10_popup/PA110395-Enhanced-NR.jpg",
  ],
};

const PhotoPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<keyof Directories | null>(
    null
  );
  const [images, setImages] = useState<string[]>([]);

  const handleCardClick = async (album: keyof Directories) => {
    setSelectedAlbum(album);
    const fetchedImages = await fetchImagesFromDirectory(album);
    setImages(fetchedImages);
  };

  const fetchImagesFromDirectory = async (album: keyof Directories): Promise<string[]> => {
    return directories[album] || [];
  };

  return (
    <div className="w-full text-center text-white">
      <h2 className="text-7xl font-extrabold sm:text-9xl mb-8">PHOTO</h2>

      {/* Cartes des albums */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pb-10">
        <div
          className="relative w-full max-w-xs h-80 mx-auto group overflow-hidden cursor-pointer"
          onClick={() => handleCardClick("15_10_meca")}
        >
          <Image
            src="/img/live/15_10_meca/PB150056-Edit.jpg"
            alt="Album 15 • 10 La MÉCANIQUE"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-0 w-full text-white bg-[#F20D01] bg-opacity-90 py-4 px-6 group-hover:bg-white group-hover:bg-opacity-70 group-hover:text-[#F20D01] group-hover:tracking-wider transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold">15 • 10 - Paris (95)</h3>
            <p className="text-1xl">La MÉCANIQUE</p>
          </div>
        </div>

        <div
          className="relative w-full max-w-xs h-80 mx-auto group overflow-hidden cursor-pointer"
          onClick={() => handleCardClick("11_10_popup")}
        >
          <Image
            src="/img/live/11_10_popup/PA110010-Enhanced-NR.jpg"
            alt="Album 11 • 10 POPUP"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-0 w-full text-white bg-[#F20D01] bg-opacity-90 py-4 px-6 group-hover:bg-white group-hover:bg-opacity-70 group-hover:text-[#F20D01] group-hover:tracking-wider transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold">11 • 10 - Paris (95)</h3>
            <p className="text-1xl">POPUP</p>
          </div>
        </div>
      </div>

      {/* Section pour afficher les images de l'album sélectionné */}
      {selectedAlbum && (
        <div className="mt-8 p-10">
          <h3 className="text-4xl font-bold mb-4">Album: {selectedAlbum}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedAlbum(null)}
            className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;
