"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ParolePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const src = decodeURIComponent(searchParams.get("src") || "");
  const textFile = decodeURIComponent(searchParams.get("textFile") || "");
  const title = decodeURIComponent(searchParams.get("title") || "Sans titre");

  const [text, setText] = useState("");

  useEffect(() => {
    if (textFile) {
      fetch(textFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fichier introuvable");
          }
          return response.text();
        })
        .then(setText)
        .catch(() => setText("Impossible de charger le texte."));
    }
  }, [textFile]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center text-white flex justify-center items-center p-4 text-center"
      style={{ backgroundImage: `url(${src})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
        <div className="flex items-center mb-6">
          {/* Bouton retour */}
          <button
            className="px-4 py-2 bg-[#F20D01] text-white rounded mr-4"
            onClick={() => router.back()}
          >
            Retour
          </button>
          {/* Titre dynamique */}
          <h1 className="text-6xl font-extrabold">{title}</h1>
        </div>
        {/* Contenu défilable */}
        <div className="overflow-auto max-h-full w-full p-4">
          <p className="text-xl whitespace-pre-line">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ParolePage;
