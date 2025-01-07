"use client";

export default function Footer() {
    return (
      <footer className="text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AMANTIQUE. Tous droits réservés.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white mx-2">PHOTO <span className="text-[#F20D01]">???</span></a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">VIDÉO <span className="text-[#F20D01]">???</span></a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">WEBSITE <span className="text-[#F20D01]">Pellé Servan</span></a>
          </div>
        </div>
      </footer>
    );
  }
  