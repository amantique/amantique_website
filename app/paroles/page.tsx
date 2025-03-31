"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  textFile: string;
  title: string;
}

const images: ImageData[] = [
  { src: "/img/live/153A1196.jpg", alt: "Image 1", textFile: "/txt/paroles/eau_salee.txt", title: "EAU SALÉE" },
  { src: "/img/live/153A1185.jpg", alt: "Image 2", textFile: "/txt/paroles/daphne.txt", title: "DAPHNÉ" },
  { src: "/img/live/153A1113.jpg", alt: "Image 3", textFile: "/txt/paroles/la_mer.txt", title: "LA MER" },
  { src: "/img/live/153A1130.jpg", alt: "Image 4", textFile: "/txt/paroles/la_meteo.txt", title: "LA MÉTÉO" },
  { src: "/img/live/153A1222.jpg", alt: "Image 5", textFile: "/txt/paroles/anges_et_mouches.txt", title: "ANGES & MOUCHES" }
];

const ParolesPage = () => {
  const router = useRouter();

  const handleImageClick = (image: ImageData) => {
    router.push(
      `/parole?src=${encodeURIComponent(image.src)}&textFile=${encodeURIComponent(image.textFile)}&title=${encodeURIComponent(image.title)}`
    );
  };

  return (
    <div className="flex flex-col w-full h-screen bg-black">
      <div className="relative w-full ">
        {/* Fond de l'image derrière le titre */}
        <div className="absolute inset-0">
          <Image
            src="/img/live/PB150201-Edit_modified.jpg"
            alt="Background Image"
            fill
            className="z-0 object-cover"
          />
        </div>
        <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg text-center z-20 relative">
          PAROLES
        </h2>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex-1 cursor-pointer transition-all duration-500 hover:opacity-100 opacity-60"
          onClick={() => handleImageClick(image)}
        >
          {/* Fond de l'image */}
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
          
          {/* Superposition d'un fond transparent sur l'image */}
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-500 hover:bg-opacity-0"></div>

          {/* Titre par-dessus l'élément transparent */}
          <div className="absolute inset-0 flex justify-center items-center text-white z-10">
            <h2 className="text-4xl font-extrabold">{image.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParolesPage;
