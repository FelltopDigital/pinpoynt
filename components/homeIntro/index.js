"use client";

import React, { useEffect, useRef } from 'react';
import Container from '@/components/container';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const HomeIntro = () => {
  const pRef = useRef(null);

  useEffect(() => {
    if (pRef.current) {
      const splitText = new SplitText(pRef.current, { type: 'lines' });
      gsap.from(splitText.lines, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className="py-20 xl:py-30 text-center">
      <Container>
        <p ref={pRef} className="text-2xl md:text-4xl xl:text-6xl max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto">uncover footfall and spending patterns, anywhere, in real-time without any physical hardware</p>
      </Container>
    </div>
  );
};

export default HomeIntro;