// "use client";

// import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// import Image from 'next/image';

// interface NavbarProps {
//   className?: string;
//   onContactClick?: () => void;
//   onDateClick?: () => void;
//   onPhotoClick?: () => void;
//   onMusiqueClick?: () => void;
//   onBioClick?: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ className, onContactClick, onDateClick, onPhotoClick, onMusiqueClick, onBioClick }) => {

//   const [scrolled, setScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) { 
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//   className={`text-white flex items-center justify-between fixed top-0 px-5 z-50 
//     ${scrolled ? 'bg-black bg-opacity-50 backdrop-blur-md shadow-2xl' : 'bg-black bg-opacity-30 shadow-none'} 
//     ${className}`}
// >

//       {/* Conteneur pour les icônes sociaux */}
//       <div className="flex items-center justify-between space-x-3">
//         {/* Spotify */}
//         <a href="https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/spotify.png" alt="Spotify Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/spotify_red.png" alt="Spotify Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>

//         {/* Apple Music */}
//         <a href="https://music.apple.com/fr/artist/amantique/1771329106" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/apple.png" alt="Apple Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/apple_red.png" alt="Apple Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>

//         {/* Instagram */}
//         <a href="https://www.instagram.com/amantique._/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/instagram.png" alt="Instagram Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/instagram_red.png" alt="Instagram Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>

//         {/* Facebook */}
//         <a href="https://www.facebook.com/profile.php?id=100091951621434" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/facebook.png" alt="Facebook Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/facebook_red.png" alt="Facebook Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>

//         {/* TikTok */}
//         <a href="https://www.tiktok.com/@amantique_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/tiktok.png" alt="TikTok Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/tiktok_red.png" alt="TikTok Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>

//         {/* YouTube */}
//         <a href="https://www.youtube.com/@Amantique" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
//           <Image src="/img/icon/youtube.png" alt="YouTube Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
//           <Image src="/img/icon/youtube_red.png" alt="YouTube Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
//         </a>
//       </div>

//       {/* Logo centré */}
//       {/* <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 ${scrolled ? 'mt-1' : 'mt-1'}`}>
//         <Link href="/" className="text-xl font-bold p-2" onClick={(e) => {
//           e.preventDefault(); 
//           window.scrollTo({ top: 0, behavior: 'smooth' }); 
//         }}>
//           <Image
//             src="/img/logo/logo.png"
//             alt="Logo"
//             width={500}
//             height={473}
//             className={`transition-all duration-300 ${scrolled ? 'w-[180px] h-[120px]' : 'w-[700px] h-[350px]'}`}
//           />
//         </Link>
//       </div> */}
//       <div>
//         <h1 className='text-6xl'>AMANTIQUE</h1>
//       </div>

//       {/* Liens de navigation */}
//       <div className="text-2xl flex items-center justify-between space-x-3">
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault(); 
//             onDateClick?.(); 
//           }}
//           className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
//         >
//           DATE
//         </a>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             onMusiqueClick?.();
//           }}
//           className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
//         >
//           MUSIQUE
//         </a>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault(); 
//             onBioClick?.(); 
//           }}
//           className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
//         >
//           BIO
//         </a>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             onPhotoClick?.(); 
//           }}
//           className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
//         >
//           PHOTO
//         </a>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             onContactClick?.();
//           }}
//           className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
//         >
//           CONTACT
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
  onDateClick?: () => void;
  onMusiqueClick?: () => void;
  onBioClick?: () => void;
  onPhotoClick?: () => void;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick, onDateClick, onMusiqueClick, onBioClick, onPhotoClick }, ref) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={ref}  // Ajouter la référence ici
      className={`text-white flex items-center justify-between fixed top-0 px-5 z-50 
        ${scrolled ? 'bg-black bg-opacity-50 backdrop-blur-md shadow-2xl' : 'bg-black bg-opacity-30 shadow-none'} 
        ${className}`}
    >
      {/* Conteneur pour les icônes sociaux */}
      <div className="flex items-center justify-between space-x-3">
        {/* Spotify */}
        <a href="https://open.spotify.com/intl-fr/artist/1gUDo746RvvVVY3lbL2r7N?si=9xiGodwdSca93pMnkZ37-w" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/spotify.png" alt="Spotify Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/spotify_red.png" alt="Spotify Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* Apple Music */}
        <a href="https://music.apple.com/fr/artist/amantique/1771329106" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/apple.png" alt="Apple Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/apple_red.png" alt="Apple Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/amantique._/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/instagram.png" alt="Instagram Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/instagram_red.png" alt="Instagram Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=100091951621434" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/facebook.png" alt="Facebook Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/facebook_red.png" alt="Facebook Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@amantique_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/tiktok.png" alt="TikTok Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/tiktok_red.png" alt="TikTok Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com/@Amantique" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/youtube.png" alt="YouTube Icon" width={20} height={20} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/youtube_red.png" alt="YouTube Icon Hover" width={20} height={20} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>
      </div>

      {/* Logo centré */}
      <div>
        <h1
          className='text-6xl cursor-pointer'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          AMANTIQUE
        </h1>
      </div>

      {/* Liens de navigation */}
      <div className="text-2xl flex items-center justify-between space-x-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); 
            onDateClick?.(); 
          }}
          className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
        >
          DATE
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onMusiqueClick?.();
          }}
          className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
        >
          MUSIQUE
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBioClick?.();
          }}
          className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
        >
          BIO
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPhotoClick?.();
          }}
          className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
        >
          PHOTOS
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onContactClick?.();
          }}
          className="px-1 hover:text-[#F20D01] transition-colors-transform duration-300 rounded-md hover:scale-150"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
