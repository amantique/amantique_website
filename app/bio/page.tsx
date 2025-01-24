"use client";

import React from 'react';

const BioPage = () => {
  return (
    <>
      <div className="relative w-full flex">
        {/* Vidéo à gauche */}
        <div className="flex-shrink-0 w-1/2 h-screen relative">
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
              zIndex: -1,
            }}
          >
            <source src="/video/eau_salee.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>

        {/* Contenu texte à droite */}
        <div className="flex-1 bg-white p-8 sm:px-16">
          <div className="text-center text-[#0A0A0A]">
            <h2 className="text-7xl font-extrabold sm:text-9xl text-[#F20D01] drop-shadow-lg">
              BIO
            </h2>

            <div className="flex flex-col items-center justify-center">
              {/* Bloc de texte - Section principale */}
              <div className="bg-white bg-opacity-90 w-full max-w-7xl p-10 shadow-xl space-y-8">
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  Fondé en <span className="text-3xl text-[#F20D01]">2023</span>, venant de <span className="text-3xl text-[#F20D01]">Nantes</span> et <span className="text-3xl text-[#F20D01]">Paris</span>, 
                  Amantique est un groupe de <span className="text-3xl text-[#F20D01]">rock alternatif/psyché</span> avec du <span className="text-3xl text-[#F20D01]">chant en français</span>. C’est une musique géignarde, 
                  qui se traduit par d’intenses gémissements de 4 à 6 minutes, le tout rendu possible par une communication affectueuse entre les membres du groupe, 
                  tous allant de 19 à 23 ans.
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  La musique d’Amantique est influencée par des groupes tels que les <span className="text-3xl text-[#F20D01]">Red Hot Chili Peppers</span>, <span className="text-3xl text-[#F20D01]">Feu! Chatterton</span>
                  , <span className="text-3xl text-[#F20D01]">Viagra Boys</span> ou encore <span className="text-3xl text-[#F20D01]">Pogo Car Crash Control</span>. Le batteur explose, les lignes de basses ont chacune un Haut 
                  Potentiel Émotionnel (HPE), le guitariste s’appelle Samuel et le chanteur, Louis, a une puissante moustache.
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  <span className="text-3xl text-[#F20D01]">Amantique</span> souhaite à travers sa musique en live offrir une <span className="text-3xl text-[#F20D01]">possibilité de se réunir</span>, 
                  de s’extraire un temps de nos existences individuelles: <span className="text-3xl text-[#F20D01]">créer du mouvement</span>.
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  Été 2024, <span className="text-3xl text-[#F20D01]">Amantique</span> a enregistré son premier <span className="text-3xl text-[#F20D01]">EP. “Laurent”</span> au 
                  Studio Arpège à Nantes, le tout mixé par l’anglais <span className="text-3xl text-[#F20D01]">Alistair Groves</span> au <span className="text-3xl text-[#F20D01]">Motor Museum Studio</span> à <span className="text-3xl text-[#F20D01]">Liverpool (Oasis, Arctic Monkeys, Bring Me The Horizon…)</span> et 
                  masterisé par <span className="text-3xl text-[#F20D01]">Grant Berry à Manchester (While She Sleeps, Busted…)</span>.
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  Après une <span className="text-3xl text-[#F20D01]">vingtaine de concerts à Paris et en région parisienne</span>, incluant des salles emblématiques tels 
                  que le <span className="text-3xl text-[#F20D01]">Pop Up, le Supersonic ou encore l’International</span>, Amantique a sorti son <span className="text-3xl text-[#F20D01]">premier single 
                  “Eau Salée”</span> le <span className="text-3xl text-[#F20D01]">11 octobre dernier</span>, suivi d’un second nommé <span className="text-3xl text-[#F20D01]">“Anges & Mouches”</span>, 
                  souhaitant défendre un <span className="text-3xl text-[#F20D01]">premier projet musical rempli d’émotions</span>, en disant déjà beaucoup sur <span className="text-3xl text-[#F20D01]">eux et leur musique</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioPage;
