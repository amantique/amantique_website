"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useMemo } from "react";
import { TiltImageMotionProps } from "./TiltImageMotion.types";

export default function TiltImageMotion({
  src,
  alt,
  width,
  height,
  className = "",
  tiltRange = { x: [-15, 15], y: [-15, 15] },
  overlayText,
}: TiltImageMotionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Génère un tilt aléatoire une seule fois par rendu
  const defaultTilt = useMemo(
    () => ({
      x: Math.random() * (tiltRange.x[1] - tiltRange.x[0]) + tiltRange.x[0],
      y: Math.random() * (tiltRange.y[1] - tiltRange.y[0]) + tiltRange.y[0],
    }),
    [tiltRange]
  );

  // Initialise x et y avec le tilt par défaut
  const x = useMotionValue(defaultTilt.y); // swap x/y pour correspondre à l’axe
  const y = useMotionValue(defaultTilt.x);

  // Ajout du tilt par défaut avec les transformations de souris
  const rotateX = useTransform(
    y,
    [-50, 50],
    [15 + defaultTilt.x, -15 + defaultTilt.x]
  );
  const rotateY = useTransform(
    x,
    [-50, 50],
    [-15 + defaultTilt.y, 15 + defaultTilt.y]
  );

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    x.set(px);
    y.set(py);
  };

  const reset = () => {
    // remet x et y à leur valeur initiale pour conserver le tilt par défaut
    x.set(defaultTilt.y);
    y.set(defaultTilt.x);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-3xl shadow-2xl cursor-pointer ${className} group`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-3xl object-cover"
      />

      {overlayText && (
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[#F20D01] text-5xl font-bold group-hover:animate-none"
        >
          {overlayText}
        </motion.div>
      )}
    </motion.div>
  );
}
