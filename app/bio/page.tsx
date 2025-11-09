"use client";

import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BioPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800});
  }, []); 

  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>
      <div className="relative w-full flex flex-col">
        <div className="relative w-full">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/video/eau_salee.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>

          <div className="relative z-10 w-full lg:w-1/2 p-4 sm:px-8 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-7xl text-[#F20D01] font-extrabold sm:text-9xl drop-shadow-lg" data-aos="fade-left">BIO</h2>

              <div className="sm:text-base flex flex-col items-center justify-center text-justify font-robotomono max-w-7xl" data-aos="fade-left">
                <div className="w-full p-4">
                  <p className="font-medium leading-relaxed mb-4">
                    Quatuor parisiano-nantais né en <span className="font-bold">2023</span> aux membres affectueux et aux visages pileux, produisant du <span className="font-bold">rock alternatif punkifié</span> dans la langue de Molière.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Amantique s&apos;est fondé sur la volonté de créer une <span className="font-bold">musique nouvelle</span>, mêlant une fondation instrumentale explosive, brutale mais aussi sensible, pleine d&apos;empathie, avec un chant en français lui hurlant dessus, et qui parfois, avec rancœur et déséquilibre, lui chuchote quelques mots d&apos;amour.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Amantique aime s&apos;hydrater et prend plaisir à puiser dans de multiples sources, allant des <span className="font-bold">Red Hot Chili Peppers</span>, à <span className="font-bold">Viagra Boys</span>, en passant par <span className="font-bold">Pogo Car Crash Control</span> ou encore <span className="font-bold">Feu! Chatterton</span>. Les membres ont tous entre <span className="font-bold">19 et 24 ans</span>, et comptent bien aller au moins jusqu&apos;à <span className="font-bold">20 et 25 ans</span>.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Une communication affectueuse entre eux rend leurs rapports sains, équilibrés et modernes. Amantique cherche le <span className="font-bold">mouvement</span>, d&apos;une foule, de l&apos;aile d&apos;une mouche, d&apos;une tête qui se laisse bercer, d&apos;une moustache ou d&apos;une grosse caisse.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Été <span className="font-bold">2024</span>, le groupe a enregistré son premier <span className="font-bold">EP &quot;Laurent&quot;</span> au Studio Arpège à Nantes, le tout mixé par le superbe anglais <span className="font-bold">Alistair Groves</span> au <span className="font-bold">Motor Museum Studio</span> à Liverpool (Oasis, Arctic Monkeys, Bring Me The Horizon...) et masterisé par l&apos;aussi superbe et anglais <span className="font-bold">Grant Berry</span> à Manchester (While She Sleeps, Busted...).
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Après une <span className="font-bold">trentaine de concerts</span> à Paris et en région parisienne, incluant des salles emblématiques tels que le <span className="font-bold">Pop Up, le Supersonic</span> ou encore <span className="font-bold">l&apos;International</span>, Amantique a sorti son <span className="font-bold">premier single &quot;Eau Salée&quot;</span> le <span className="font-bold">11 octobre</span>, suivi d’un second, <span className="font-bold">&quot;Anges & Mouches&quot;</span> le <span className="font-bold">3 décembre</span>, le tout en <span className="font-bold">2024</span>.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Leur premier EP <span className="font-bold">&quot;Laurent&quot;</span> est sorti le <span className="font-bold">17 février 2025</span>. Un gros caillou brut. Mais aussi un léger bourdonnement, celui d&apos;un insecte qui, après avoir pondu de beaux œufs, s&apos;en va marcher un coup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioPage;
