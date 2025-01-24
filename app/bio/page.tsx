"use client";

import React from 'react';

const BioPage = () => {
  return (
    <>
      <div className="relative w-full flex flex-col">
        {/* Conteneur principal : La hauteur est définie par le texte */}
        <div className="relative w-full">
          {/* Vidéo en arrière-plan */}
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
                height: "100%", // La hauteur s'ajustera à la hauteur du parent
                objectFit: "cover", // La vidéo couvre toute la zone sans déformation
              }}
            >
              <source src="/video/eau_salee.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>

          {/* Contenu texte à droite */}
          <div className="relative z-10 w-full lg:w-1/2 p-4 sm:px-8 flex flex-col items-center justify-center bg-white bg-opacity-75">
            <div className="text-center text-[#0A0A0A]">
              <h2 className="text-7xl text-[#F20D01] font-extrabold sm:text-9xl drop-shadow-lg">BIO</h2>

              <div className="sm:text-base flex flex-col items-center justify-center text-justify font-robotomono max-w-7xl">
                {/* Bloc de texte - Section principale */}
                <div className="w-full p-4">
                  <p className="font-medium leading-relaxed mb-4">
                    Fondé en <span className="font-bold">2023</span>, venant de <span className="font-bold">Nantes</span> et <span className="font-bold">Paris</span>, 
                    Amantique est un groupe de <span className="font-bold">rock alternatif/psyché</span> avec du <span className="font-bold">chant en français</span>. C’est une musique géignarde, 
                    qui se traduit par d’intenses gémissements de 4 à 6 minutes, le tout rendu possible par une communication affectueuse entre les membres du groupe, 
                    tous allant de 19 à 23 ans.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    La musique d’Amantique est influencée par des groupes tels que les <span className="font-bold">Red Hot Chili Peppers</span>, <span className="font-bold">Feu! Chatterton</span>
                    , <span className="font-bold">Viagra Boys</span> ou encore <span className="font-bold">Pogo Car Crash Control</span>. Le batteur explose, les lignes de basses ont chacune un Haut 
                    Potentiel Émotionnel (HPE), le guitariste s’appelle Samuel et le chanteur, Louis, a une puissante moustache.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    <span className="font-bold">Amantique</span> souhaite à travers sa musique en live offrir une <span className="font-bold">possibilité de se réunir</span>, 
                    de s’extraire un temps de nos existences individuelles: <span className="font-bold">créer du mouvement</span>.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Été 2024, <span className="font-bold">Amantique</span> a enregistré son premier <span className="font-bold">EP. “Laurent”</span> au 
                    Studio Arpège à Nantes, le tout mixé par l’anglais <span className="font-bold">Alistair Groves</span> au <span className="font-bold">Motor Museum Studio</span> à <span className="font-bold">Liverpool (Oasis, Arctic Monkeys, Bring Me The Horizon…)</span> et 
                    masterisé par <span className="font-bold">Grant Berry à Manchester (While She Sleeps, Busted…)</span>.
                  </p>
                  <p className="font-medium leading-relaxed mb-4">
                    Après une <span className="font-bold">vingtaine de concerts à Paris et en région parisienne</span>, incluant des salles emblématiques tels 
                    que le <span className="font-bold">Pop Up, le Supersonic ou encore l’International</span>, Amantique a sorti son <span className="font-bold">premier single 
                    “Eau Salée”</span> le <span className="font-bold">11 octobre dernier</span>, suivi d’un second nommé <span className="font-bold">“Anges & Mouches”</span>, 
                    souhaitant défendre un <span className="font-bold">premier projet musical rempli d’émotions</span>, en disant déjà beaucoup sur <span className="font-bold">eux et leur musique</span>.
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
