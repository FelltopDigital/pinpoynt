'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';

const logos = [
  '/google.png',
  '/google.png',
  '/google.png',
  '/google.png',
  '/google.png',
  '/google.png',
];

export default function VerticalLogoTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        yPercent: -50,
        ease: 'linear',
        duration: 20,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-96 w-full overflow-hidden flex items-center justify-center">
      {/* Fade overlay top */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-42 bg-gradient-to-b from-[#171717] to-transparent z-10" />
      {/* Fade overlay bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-42 bg-gradient-to-t from-[#171717] to-transparent z-10" />

      <div className="absolute flex flex-col gap-12" ref={tickerRef}>
        {[...logos, ...logos].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Logo ${idx}`}
            className="h-12 opacity-80 hover:opacity-100 transition-opacity mx-auto"
          />
        ))}
      </div>
    </div>
  );
}
