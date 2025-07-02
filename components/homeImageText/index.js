"use client";
import React, { useRef, useEffect, useState } from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const paragraphs = [
  "Our unique solution delivers accurate, real-time data on footfall and transactions in any location in the world, powering better-informed decision-making and ROI for retailers, real-estate companies, the hospitality industry, investment and quant funds, event organisers and the public sector. In increasingly competitive markets, Pinpoynt.ai provides the insights you need to improve performance, seize opportunities and increase market share. Ready to transform your business with data-driven insights? Get in touch with us today.",
  "Actionable insights on current and predicted footfall, dwell time, and spend, delivered through an interactive dashboard or direct feed into your business intelligence and analytics solutions. Proven and tested to be 99.73% accurate when compared to camera-based systems and fully privacy-compliant, with no Personally Identifiable Information (PII) collected."
];

const HomeImageText = () => {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unstick, setUnstick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;

      // Stick when 100px from top, unstick after all paragraphs
      if (top <= 100 && !unstick) {
        setIsSticky(true);
      } else if (top > 100) {
        setIsSticky(false);
        setActiveIndex(0);
        setUnstick(false);
      }

      // Calculate scroll progress within the sticky section
      if (isSticky && !unstick) {
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY + 100 - sectionRef.current.offsetTop;
        const progress = Math.max(0, Math.min(1, scrollY / (sectionHeight * 0.7)));
        const newIndex = Math.min(
          paragraphs.length - 1,
          Math.floor(progress * paragraphs.length)
        );
        setActiveIndex(newIndex);

        // Unstick after last paragraph
        if (progress >= 1) {
          setUnstick(true);
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky, unstick]);

  return (
    <div ref={sectionRef} className="mb-64 relative">
      <Container>
        <div className="flex-[0_0_100%] h-[400px] mb-10 lg:mb-48 overflow-hidden rounded-3xl">
          <Image
            src="/sectors-header.jpg"
            alt="Sectors Header"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`
            flex-[0_0_100%] flex flex-col lg:flex-row lg:items-center lg:justify-between
            ${isSticky && !unstick ? 'sticky top-[100px] z-20 bg-black' : ''}
          `}
          style={{
            transition: 'box-shadow 0.3s',
            boxShadow: isSticky && !unstick ? '0 2px 16px rgba(0,0,0,0.1)' : 'none'
          }}
        >
          <h1 className="flex-[0_0_30%] max-w-[380px] mb-5 lg:mb-0 lg:max-w-full text-[32px] lg:text-[55px] leading-[1.1] lg:leading-tight">
            transforming decision-making for your business
          </h1>
          <div className="flex-[0_0_60%] lg:text-xl min-h-[120px] relative">
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={`
                  absolute left-0 top-0 w-full transition-opacity duration-500 border-b border-white pb-10
                  ${activeIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeImageText;