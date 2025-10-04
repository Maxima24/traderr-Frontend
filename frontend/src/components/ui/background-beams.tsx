'use client';

import { use, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';

export function BackgroundBeams() {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (beamsRef.current) {
      const beams = beamsRef.current;
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        animate(beams, {
          background: `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        });
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.div
      ref={beamsRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      initial={{
        background: 'radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
    />
  );
}