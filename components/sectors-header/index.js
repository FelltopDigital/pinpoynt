"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectorsHeader = () => {
  const sectionRefOne = useRef(null);
  const rightColScrollRefOne = useRef(null);

  const sectionRefTwo = useRef(null);
  const rightColScrollRefTwo = useRef(null);

  const sectionRefThree = useRef(null);
  const rightColScrollRefThree = useRef(null);

  useEffect(() => {
    // Only run animations on screens 1024px and above
    if (window.innerWidth < 1024) return;

    const panels = rightColScrollRefOne.current.children.length;
    const panelHeight = 400;
    const visiblePanels = 2;
    const scrollDistance = (panels - visiblePanels) * panelHeight;

    const ctx = gsap.context(() => {
      // Pin the section, 100px from top
      ScrollTrigger.create({
        trigger: sectionRefOne.current,
        start: "top-=100",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });

      // Scroll the right column's content
      gsap.to(rightColScrollRefOne.current, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRefOne.current,
          start: "top-=100",
          end: `+=${scrollDistance}`,
          scrub: true,
        },
      });
    });

    const ctxTwo = gsap.context(() => {
      // Pin the section, 100px from top
      ScrollTrigger.create({
        trigger: sectionRefTwo.current,
        start: "top-=100",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });

      // Scroll the right column's content
      gsap.to(rightColScrollRefTwo.current, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRefTwo.current,
          start: "top-=100",
          end: `+=${scrollDistance}`,
          scrub: true,
        },
      });
    });

    const ctxThree = gsap.context(() => {
      // Pin the section, 100px from top
      ScrollTrigger.create({
        trigger: sectionRefThree.current,
        start: "top-=100",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });

      // Scroll the right column's content
      gsap.to(rightColScrollRefThree.current, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRefThree.current,
          start: "top-=100",
          end: `+=${scrollDistance}`,
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
      ctxTwo.revert();
      ctxThree.revert();
    };
  }, []);

  return (
    <div className="pt-36 lg:pt-52 pb-24 bg-gradient-to-b from-black to-[#11126b]">
      <Container>
        {/* Header section */}
        <div className="flex items-center justify-between flex-wrap mb-10 lg:mb-38">
          <div className="flex-[0_0_100%] flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h1 className="flex-[0_0_30%] max-w-[380px] mb-5 lg:mb-0 lg:max-w-full text-[32px] lg:text-[55px] leading-[1.1] lg:leading-tight">
              transforming decision-making for your business
            </h1>
            <p className="flex-[0_0_60%] lg:text-xl pb-10 border-b border-white">
              Our unique solution delivers accurate, real-time data on footfall
              and transactions in any location in the world, powering
              better-informed decision-making and ROI for retailers, real-estate
              companies, the hospitality industry, investment and quant funds,
              event organisers and the public sector. In increasingly
              competitive markets, Pinpoynt.ai provides the insights you need to
              improve performance, seize opportunities and increase market
              share.
            </p>
          </div>

          <div className="flex-[0_0_100%] h-[400px] mt-10 lg:mt-48 overflow-hidden rounded-3xl">
            <Image
              src="/sectors-header.jpg"
              alt="Sectors Header"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scroll container with 100px visual offset */}
        <div className="relative pt-0 pb-10 lg:pt-24 lg:pb-24">
          {/* Pinned section */}
          <div ref={sectionRefOne} className="flex flex-col lg:flex-row items-start justify-between lg:h-[800px] overflow-hidden">
            {/* Left column */}
            <div className="mb-10 lg:mb-48 flex-[0_0_calc(40%-30px)] flex flex-col">
              <div className="lg:h-[400px]">
                <h3 className="text-[64px] leading-[1.1] font-light font-sans">
                  retail, real-estate{" "}
                  <span className="italic font-serif text-[64px]">and</span>{" "}
                  hospitality
                </h3>
                <p className="mt-8 text-[20px] text-neutral-300 font-light max-w-[600px]">
                  With Pinpoynt.ai you can monitor and predict footfall and
                  transactions in any location in the world – without needing to
                  install hardware. Understand your own and your
                  competitors&rsquo; performance, plan more accurately and benefit
                  from having a competitive edge:
                </p>
              </div>

              <div className="w-full lg:h-[400px] overflow-hidden rounded-3xl mt-10 lg:mt-auto">
                <Image
                  src="/sectors-header.jpg"
                  alt="Sectors Header"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column that scrolls inside pinned section */}
            <div className="flex-[0_0_calc(60%-30px)] lg:h-[800px] overflow-hidden w-full lg:w-auto">
              <div ref={rightColScrollRefOne}>
                {/* Panels */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row w-full lg:items-end justify-between py-10 border-t border-b border-white lg:h-[400px] ${i % 2 === 1 ? 'lg:flex-row-reverse items-end' : ''}`}>
                    <h3 className="text-[100px] lg:text-[300px] font-extralight leading-[0.7em]">
                      {String(i + 1).padStart(2, "0")}
                    </h3>
                    <p className="text-xl max-w-80 mt-8 lg:mb-0">
                      Example text for panel {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll container with 100px visual offset */}
        <div className="relative pt-0 pb-10 lg:pt-24 lg:pb-24">
          {/* Pinned section */}
          <div ref={sectionRefTwo} className="flex flex-col lg:flex-row-reverse items-start justify-between lg:h-[800px] overflow-hidden">
            {/* Left column */}
            <div className="mb-10 lg:mb-48 flex-[0_0_calc(40%-30px)] flex flex-col">
              <div className="lg:h-[400px]">
                <h3 className="text-[64px] leading-[1.1] font-light font-sans">
                  retail, real-estate{" "}
                  <span className="italic font-serif text-[64px]">and</span>{" "}
                  hospitality
                </h3>
                <p className="mt-8 text-[20px] text-neutral-300 font-light max-w-[600px]">
                  With Pinpoynt.ai you can monitor and predict footfall and
                  transactions in any location in the world – without needing to
                  install hardware. Understand your own and your
                  competitors&rsquo; performance, plan more accurately and benefit
                  from having a competitive edge:
                </p>
              </div>

              <div className="w-full lg:h-[400px] overflow-hidden rounded-3xl mt-10 lg:mt-auto">
                <Image
                  src="/sectors-header.jpg"
                  alt="Sectors Header"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column that scrolls inside pinned section */}
            <div className="flex-[0_0_calc(60%-30px)] lg:h-[800px] overflow-hidden w-full lg:w-auto">
              <div ref={rightColScrollRefTwo}>
                {/* Panels */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row w-full lg:items-end justify-between py-10 border-t border-b border-white lg:h-[400px] ${i % 2 === 1 ? 'lg:flex-row-reverse items-end' : ''}`}>
                    <h3 className="text-[100px] lg:text-[300px] font-extralight leading-[0.7em]">
                      {String(i + 1).padStart(2, "0")}
                    </h3>
                    <p className="text-xl max-w-80 mt-8 lg:mb-0">
                      Example text for panel {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll container with 100px visual offset */}
        <div className="relative pt-0 pb-10 lg:pt-24 lg:pb-24">
          {/* Pinned section */}
          <div ref={sectionRefThree} className="flex flex-col lg:flex-row items-start justify-between lg:h-[800px] overflow-hidden">
            {/* Left column */}
            <div className="mb-10 lg:mb-48 flex-[0_0_calc(40%-30px)] flex flex-col">
              <div className="lg:h-[400px]">
                <h3 className="text-[64px] leading-[1.1] font-light font-sans">
                  retail, real-estate{" "}
                  <span className="italic font-serif text-[64px]">and</span>{" "}
                  hospitality
                </h3>
                <p className="mt-8 text-[20px] text-neutral-300 font-light max-w-[600px]">
                  With Pinpoynt.ai you can monitor and predict footfall and
                  transactions in any location in the world – without needing to
                  install hardware. Understand your own and your
                  competitors&rsquo; performance, plan more accurately and benefit
                  from having a competitive edge:
                </p>
              </div>

              <div className="w-full lg:h-[400px] overflow-hidden rounded-3xl mt-10 lg:mt-auto">
                <Image
                  src="/sectors-header.jpg"
                  alt="Sectors Header"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column that scrolls inside pinned section */}
            <div className="flex-[0_0_calc(60%-30px)] lg:h-[800px] overflow-hidden w-full lg:w-auto">
              <div ref={rightColScrollRefThree}>
                {/* Panels */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row w-full lg:items-end justify-between py-10 border-t border-b border-white lg:h-[400px] ${i % 2 === 1 ? 'lg:flex-row-reverse items-end' : ''}`}>
                    <h3 className="text-[100px] lg:text-[300px] font-extralight leading-[0.7em]">
                      {String(i + 1).padStart(2, "0")}
                    </h3>
                    <p className="text-xl max-w-80 mt-8 lg:mb-0">
                      Example text for panel {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectorsHeader;
