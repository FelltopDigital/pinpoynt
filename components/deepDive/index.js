"use client";

import React, { useEffect, useRef } from 'react';
import Container from '@/components/container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DeepDive = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    // Only run animations on screens 1024px and above
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(gradientRef.current, { scale: 0 });

      // Create ScrollTrigger for scaling animation
      ScrollTrigger.create({
        trigger: gradientRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(gradientRef.current, {
            scale: self.progress,
            duration: 0.1
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div>
        <h3>How it works - a deep dive</h3>
        <p>100% privacy compliant data collection feeds our AI and quantum mechanics models, with insights immediately available through dashboards and data feeds (API, RESTful JSON, or flat file CSV).</p>
      </div>
    </div>
  );
};

export default DeepDive;