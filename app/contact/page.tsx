"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactData } from "./Contact.types";

const ContactPage = () => {
  const [data, setData] = useState<ContactData | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    fetch("/data/fr/contacts.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <>
      <h1 className="sr-only">amantique</h1>

      <div className="w-full mx-auto text-black bg-[#F20D01] px-4 sm:px-20 pb-4">
        {/* Conteneur principal */}
        <div className="text-center">
          {/* Première colonne */}
          <div className="flex-1">
            <h2
              className="text-7xl font-extrabold sm:text-9xl pt-7"
              data-aos="fade-right"
            >
              {data.title}
            </h2>
            <div className="pl-4">
              <p
                className="text-base text-white font-robotomono"
                data-aos="fade-right"
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Deuxième colonne */}
          <div className="flex-1 space-y-4 mt-4">
            {/* Email */}
            <div
              className="bg-white p-4 rounded-lg shadow-md mt-7 max-w-md mx-auto"
              data-aos="fade-left"
            >
              <p className="text-3xl text-gray-600">
                <a
                  href={data.email.href}
                  className="relative text-[#F20D01] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#F20D01] after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                >
                  {data.email.label}
                </a>
              </p>
            </div>

            {/* Téléphone */}
            <div
              className="bg-white p-4 rounded-lg shadow-md mt-7 max-w-md mx-auto"
              data-aos="fade-left"
            >
              <p className="text-3xl text-gray-600">
                <a
                  href={data.phone.href}
                  className="relative text-[#F20D01] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#F20D01] after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                >
                  {data.phone.label}
                </a>
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div
              className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto"
              data-aos="fade-left"
            >
              <div className="flex flex-wrap justify-center gap-6">
                {data.socials.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-150"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={30}
                      height={30}
                      className="rounded-md"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
