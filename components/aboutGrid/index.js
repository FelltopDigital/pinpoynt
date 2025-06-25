"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTENT = [
  { title: "Scalable & instant deployment", text: "can track footfall and transactions globally without on-site setup" },
  { title: "beyond footfall", text: "delivering footfall, dwell time and the number of people likely to transact" },
  { title: "reliable, accurate, and proven", text: "delivering footfall, dwell time and the number of people likely to transact" },
  { title: "privacy-first", text: "no hardware or personally identifiable information, making it fully compliant with global privacy laws" },
  { title: "not just credit card data", text: "captures cash transactions, Suica, and alternative payment methods" },
  { title: "competitive pricing model", text: "no costly sensor installations and flexible Software-as-a-Service (SaaS) model" },
];

export default function ContentScroller() {
  const containerRef = useRef(null);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      CONTENT.forEach((_, i) => {
        const start = i * window.innerHeight;
        const end = (i + 1) * window.innerHeight;
  
        // --- Title Animation ---
        gsap.to(titleRefs.current[i], {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${start} top`,
            end: `${end} top`,
            scrub: true,
          },
          keyframes: [
            { autoAlpha: 0, y: 10, duration: 0 },
            { autoAlpha: 1, y: 0, duration: 0.3 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            { autoAlpha: 0, y: -10, duration: 0.3 },
          ],
          ease: "none",
        });
  
        // --- Paragraph Animation (fade only) ---
        gsap.to(textRefs.current[i], {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${start} top`,
            end: `${end} top`,
            scrub: true,
          },
          keyframes: [
            { autoAlpha: 0, y: 10, duration: 0 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            { autoAlpha: 0, y: -10, duration: 0.5 },
          ],
          ease: "none",
        });
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);  

  return (
    <div className="relative w-screen">
      {/* Pinned Layout */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Lines */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-1/2 w-full h-[1px] bg-white transform -translate-y-1/2" />
          <div className="absolute left-1/2 h-full w-[1px] bg-white transform -translate-x-1/2" />
        </div>

        {/* Top-left quadrant (Title) */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 p-8 flex items-end justify-end z-20">
          {CONTENT.map((item, i) => (
            <h2
              key={i}
              ref={(el) => (titleRefs.current[i] = el)}
              className="absolute text-white text-2xl font-bold opacity-0"
            >
              {item.title}
            </h2>
          ))}
        </div>

        {/* Bottom-right quadrant (Text) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-8 flex items-start justify-start z-20">
          {CONTENT.map((item, i) => (
            <p
              key={i}
              ref={(el) => (textRefs.current[i] = el)}
              className="absolute text-white text-sm max-w-md opacity-100 leading-relaxed"
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>

      {/* Spacer for scrolling */}
      <div ref={containerRef} style={{ height: `${CONTENT.length * 100}vh` }} />
    </div>
  );
}
