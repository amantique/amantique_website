"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";

interface ImageData {
  src: string;
  alt: string;
  textFile: string;
  title: string;
}

export default function ParolesPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [modalData, setModalData] = useState<ImageData | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });

    fetch("/data/fr/paroles.json")
      .then(res => res.ok ? res.json() : Promise.reject("Impossible de charger le JSON"))
      .then(setImages)
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (modalData) {
      fetch(modalData.textFile)
        .then(res => res.ok ? res.text() : Promise.reject("Fichier introuvable"))
        .then(setText)
        .catch(() => setText("Impossible de charger le texte."));
    }
  }, [modalData]);

  return (
    <div className="flex flex-col w-full h-screen bg-black">
      <div className="relative w-full">
        <div className="absolute inset-0">
          <Image
            src="/img/live/PB150201-Edit_modified.jpg"
            alt="Background"
            fill
            className="z-0 object-cover"
            data-aos="fade-right"
          />
        </div>
        <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg text-center z-20 relative" data-aos="fade-right">
          PAROLES
        </h2>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex-1 cursor-pointer transition-all duration-500 hover:opacity-100 opacity-60"
          onClick={() => setModalData(image)}
          data-aos="fade-right"
        >
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-500 hover:bg-opacity-0"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white z-10">
            <h2 className="text-4xl font-extrabold" data-aos="fade-right">{image.title}</h2>
          </div>
        </div>
      ))}

      {modalData && (
        <Modal onClose={() => setModalData(null)}>
          <div className="relative w-full h-[80vh] flex flex-col">
            <Image
              src={modalData.src}
              alt={modalData.alt}
              fill
              className="object-cover opacity-30"
            />
            <button
              className="absolute top-4 right-4 text-white p-2 hover:text-[#F20D01] z-50"
              onClick={(e) => { e.stopPropagation(); setModalData(null); }}
            >
              <X size={32} />
            </button>

            <div className="relative flex-1 flex flex-col justify-center items-center p-6 text-white text-center overflow-auto">
              <h1 className="text-5xl font-extrabold mb-6">{modalData.title}</h1>
              <div className="text-lg whitespace-pre-line max-h-[60vh] overflow-y-auto">
                {text}
              </div>
              <button
                className="mt-6 px-6 py-2 bg-[#F20D01] rounded text-white font-bold"
                onClick={() => setModalData(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
