"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '@/svgs/logo';

// import Logo from '@svgs/logo';

const Loader = () => {
  const wordsRef = useRef([]);
  const logoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Set initial state - all words invisible
    gsap.set(wordsRef.current, { opacity: 0, y: 20 });

    // Create staggered animation
    const tl = gsap.timeline();
    
    tl.to(wordsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3, // 0.3 seconds between each word
      ease: "power2.out",
      delay: 1 // 1 second delay before animation starts
    })
    .to(wordsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.in"
    }, "+=0.5") // 2 seconds after the last word appears
    .to(logoRef.current, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.2") // Start logo animation slightly before words finish fading
    .to(wrapperRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        if (wrapperRef.current) {
          wrapperRef.current.style.pointerEvents = 'none';
        }
      }
    }, "+=0.5"); // Fade out wrapper after logo animation

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <div ref={logoRef} className="absolute -top-10 opacity-0 left-0 w-full h-full flex items-center justify-center">
        <Logo className="w-[60%] max-w-[600px]" />
      </div>
      {/* Inline keyframes */}  
      <h1 className="text-white text-4xl font-bold relative z-10 max-w-[calc(100%-60px)] text-center leading-[0.8]">
        <span ref={el => wordsRef.current[0] = el}>footfall, </span>
        <span ref={el => wordsRef.current[1] = el}>spending, </span>
        <span ref={el => wordsRef.current[2] = el}>anywhere, </span>
        <span ref={el => wordsRef.current[3] = el}>real-time</span>
      </h1>
    </div>
  );
};

export default Loader;