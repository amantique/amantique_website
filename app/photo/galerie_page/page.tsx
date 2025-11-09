// pages/photo/galerie_page/page.tsx

import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Link from 'next/link'; // Importation de Link

const GalleryPage = async () => {
  const imagesDirectory = path.join(process.cwd(), 'public/img/live');
  
  // Lire les noms de fichiers dans le dossier
  const filenames = fs.readdirSync(imagesDirectory);
  
  // Filtrer pour ne garder que les fichiers images
  const imagePaths = filenames
    .filter((filename) => !filename.startsWith('.') && filename.match(/\.(jpg|jpeg|png|gif)$/))
    .map((filename) => `/img/live/${filename}`);

  return (
    <div style={styles.container}>
      {imagePaths.length > 0 ? (
        imagePaths.map((imagePath, index) => (
          <div
            key={index}
            style={{
              ...styles.imageWrapper,
              transform: `rotate(${(index * 10) % 360}deg)`, // Inclina chaque image d'un angle différent
              left: `${Math.random() * 80}%`, // Positionne aléatoirement les images
              top: `${Math.random() * 80}%`, 
            }}
          >
            <Image 
              src={imagePath} 
              alt={`Image ${index}`} 
              fill
              className="object-cover"
            />
          </div>
        ))
      ) : (
        <p>No images found.</p>
      )}
      
      {/* Bouton de retour à l'accueil */}
      <div style={styles.buttonWrapper}>
        <Link href="/">
          <button style={styles.button}>Retour à l&apos;accueil</button>
        </Link>
      </div>
    </div>
  );
};

// Définir un type explicite pour les styles
type Styles = {
  container: React.CSSProperties;
  imageWrapper: React.CSSProperties;
  buttonWrapper: React.CSSProperties;
  button: React.CSSProperties;
};

// Créer l'objet de styles en respectant ce type
const styles: Styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh', // L'élément prend toute la hauteur de la page
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
    transition: 'transform 0.5s ease', // Smooth transition pour le déplacement
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default GalleryPage;
