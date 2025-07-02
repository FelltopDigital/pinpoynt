"use client";

import { useEffect, useRef, React } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ entries = [] }) => 
{
    const progressRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => 
    {
        const progressEl = progressRef.current;
        const timelineEl = timelineRef.current;

        if (!progressEl || !timelineEl) return;

        gsap.set(progressEl, { height: 0 });
        let currentTween = null;

        ScrollTrigger.create({
            // markers: true,
            trigger: timelineEl,
            start: "top 25%",
            end: "bottom 50%",
            scrub: true,
            onUpdate: (self) => 
            {
                const targetHeight = `${self.progress * 100}%`;

                if (currentTween) currentTween.kill();

                currentTween = gsap.to(progressEl, {
                    height: targetHeight,
                    duration: 0.8,
                    ease: "power2.out",
                });
            },
        });

        return () => ScrollTrigger.killAll();
    }, []);

    return (
        <div>
            <h2 className="text-center font-light text-[32px] md:text-[70px] leading-none mt-8 md:mt-25 mb-8 md:mb-27.5">our story</h2>

            <div className="timeline max-w-[1200px] mx-auto mb-24 md:mb-40 pt-20 pb-4 md:pb-37.5 relative">
                <div className="timeline__indicator z-20 absolute top-0 hidden md:block left-[50%] ml-[-6px] w-[12px] min-h-[144px]" ref={progressRef} style={{ height: 0 }}>
                    <span className="absolute w-[12px] h-full bg-[#fff]"></span>
                </div>
                <span className="timeline__rail z-10 absolute w-[8px] h-[100%] top-0 bottom-0 left-[50%] bg-[url(/timeline-repeat.png)] bg-size-[8px_auto] bg-repeat-y transform-[translate(-50%,_0)]"></span>
                <span className="timeline__begin md:hidden z-10 absolute w-[65%] md:w-full max-w-[750px] h-[2px] top-0 left-[50%] bg-[#fff] transform-[translate(-50%,_0)]"></span>
                <span className="timeline__end z-10 absolute w-[65%] md:w-full max-w-[750px] h-[2px] bottom-0 left-[50%] bg-[#fff] transform-[translate(-50%,_0)]"></span>
                <div ref={timelineRef}>
                    {entries.map((entry, i) => (
                        <div key={i} className={"timeline__entry relative z-50 bg-black/92.5 md:bg-transparent rounded-xl md:rounded-none p-5 sm:p-8 md:p-0 border-2 md:border-0 text-center w-full md:w-[45%] mb-16" + (i % 2 == 0 ? ' ml-auto md:text-left' : ' mr-auto md:text-right')}>
                            <div className="timeline__entry__year text-[#9FACFF] text-[20px] md:text-[30px] font-light leading-none mb-4">{entry.year}</div>
                            <div className="timeline__entry__text text-[14px] md:text-[22px] font-medium" dangerouslySetInnerHTML={{ __html: entry.text }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;