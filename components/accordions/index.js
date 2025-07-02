"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AccordionItem = ({ item, index }) => 
{
    const [isOpen, setIsOpen] = useState(false);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const toggleAccordion = () => 
    {
        const el = contentRef.current;

        if (isOpen) 
        {
            gsap.to(el, 
            {
                height: 0,
                duration: 0.5,
                onComplete: () => setIsOpen(false)
            });
        } else 
        {
            setIsOpen(true);
            requestAnimationFrame(() => 
            {
                gsap.fromTo(el, 
                    { 
                        height: 0 
                    }, 
                    {
                        height: el.scrollHeight,
                        duration: 0.5
                    }
                );
            });
        }
    };

    const activeStyle = 
    {
        color: "#DAFFF1",
        cursor: "pointer",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
    };

    const inactiveStyle = 
    {
        color: "#DAFFF1",
        cursor: "pointer",
        padding: "20px",
        borderBottom: "1px solid",
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(to right, #3179FF, #89CCFF)"
    };

    return (
        <div className="accordion-item">
            <h2 onClick={toggleAccordion} ref={titleRef} className={`text-[18px] md:text-[24px] items-center flex accordion-title ${isOpen ? 'open' : ''}`} style={{ color: "#DAFFF1", cursor: "pointer", padding: "20px", borderBottom: "1px solid", borderImageSlice: 1, borderImageSource: "linear-gradient(to right, #3179FF, #89CCFF)" }}>
                <span className="opacity-30 text-[18px] md:text-[20px] mr-[16px] md:mr-[35px] w-8">{(index + 1).toString().padStart(2, '0')}</span>
                {item.title}
                <span className="ml-auto">{isOpen ? '-' : '+'}</span>
            </h2>
            <div ref={contentRef} style={{
                height: isOpen ? "auto" : 0,
                overflow: "hidden",
            }}>
                <div className="md:px-22 pt-2 md:pt-6 pb-2">
                    <p className="text-[16px] md:text-[24px]" style={{ margin: 0 }}>{item.text}</p>
                </div>
            </div>
        </div>
    );
};

export default function Accordions({ items = [] }) 
{
    return (
        <div className="accordions max-h-[614px] overflow-auto">
            {items.map((item, i) => (
                <AccordionItem key={i} index={i} item={item} />
            ))}
        </div>
    );
}
