"use client";

import React, { useEffect, useRef } from 'react';
import Container from '@/components/container';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ArrowRight from '@/svgs/arrow-right';

const HomeIntro = () => {
  const pRef = useRef(null);

  useEffect(() => {
    if (pRef.current) {
      const splitText = new SplitText(pRef.current, { type: 'lines' });
      gsap.from(splitText.lines, {
        opacity: 0,
        y: 20,
        delay: 0.7,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className="text-center absolute left-1/2 -translate-x-1/2 top-[67vh] [@media(min-height:800px)]:top-[75vh] w-full">
      <Container>
        <p ref={pRef} className="text-sm max-w-xs mx-auto">Better decision-making and increased efficiency for the retail, hospitality, real estate, investment, event, and public sectors.</p>
        <button className="bg-white/20 border border-white text-white px-8 py-3 rounded-full mt-6 cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
          <span>try for free</span>
          <ArrowRight className="w-4 h-4 absolute right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
        </button>
      </Container>
    </div>
  );
};

export default HomeIntro;