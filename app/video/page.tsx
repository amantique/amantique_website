"use client";

import Image from "next/image";
import Link from "next/link";

const VideoPage = () => {
  return (
    <div
      className="w-full text-center bg-cover bg-center bg-no-repeat text-[#0A0A0A] pb-10"
      style={{ backgroundImage: "url('/img/live/153A1422.jpg')" }}
    >
      <h2 className="text-7xl text-white font-extrabold pt-4 sm:text-9xl drop-shadow-lg">
        VIDÉOS
      </h2>        

      <Link href="https://youtu.be/alw4OCDB05Y?si=rJE1heD2f5N5aWld" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col lg:flex-row items-start bg-black text-white relative overflow-hidden cursor-pointer transition-transform transform hover:scale-105 bg-opacity-80 px-4 mx-10">
        <div className="text-right p-4 text-2xs font-robotomono">
                <p className="font-medium leading-relaxed mb-4">
                    Grande nouvelle !  
                    Curieux·ses de plonger dans les coulisses de notre premier EP ? De savoir combien de cafés ont été nécessaires pour caler un seul break ? De découvrir si l’un d’entre nous dort vraiment avec son ampli ? Et surtout… de percer enfin le secret de la moustache de Louis ?
                </p>

                <p className="font-medium leading-relaxed mb-4">
                    Eh bien, tout ça (et bien plus encore) est maintenant possible grâce à un <span className="font-bold">documentaire aussi doux que bruitiste</span>, tourné pendant l’enregistrement de notre EP <span className="font-bold">« Laurent »</span> au Studio Arpège à Nantes, mixé par l’excellent <span className="font-bold">Alistair Groves</span> à Liverpool, et masterisé par le non moins excellent <span className="font-bold">Grant Berry</span> à Manchester.
                </p>

                <p className="font-medium leading-relaxed mb-4">
                    Merci de tout cœur à <span className="font-bold">Hector Touraine</span>, <span className="font-bold">Sacha Bonté</span> et <span className="font-bold">Avril Laurençon</span> pour avoir immortalisé ces moments entre fièvre créative et gros délires. On vous laisse découvrir ça !
                </p>
            </div>
            <div className="relative w-full lg:w-2/3 h-[300px] min-w-[300px] lg:min-w-0 self-center lg:self-auto mt-4 lg:mt-0">
                <Image
                src="/img/cover/docu.jpg"
                alt="Documentaire Amantique"
                layout="fill"
                style={{ objectFit: "cover", objectPosition: "left" }}
                />
                <div className="absolute bottom-2 right-2 text-white text-5xl px-3 py-1 rounded-lg">Regarder</div>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoPage;
