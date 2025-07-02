"use client";

import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const content = {
  journeyText: "Keep track of our journey here",
  linkedinUrl: "https://linkedin.com",
  newsletterText: "Sign up to our newsletter",
  newsletterPlaceholder: "Enter Your Email",
  newsletterButton: "Subscribe",
  toTop: "↑ To Top",
  legalLinks: [
    { label: "WEBSITE TERMS AND CONDITIONS", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
    { label: "DISCLAIMER", href: "#" }
  ],
  locations: [
    {
      city: "London",
      address: [
        "Level 39,",
        "One Canada Square,",
        "Canary Wharf,",
        "London",
        "E14 5AB, England"
      ]
    },
    {
      city: "Bedfordshire",
      address: [
        "Bedford i-Lab,",
        "Stannard Way,",
        "Priory Business Park,",
        "Bedford",
        "MK44 3RZ, England"
      ]
    },
    {
      city: "Tokyo",
      address: [
        "3F Shiodome Building,",
        "1-2-20 Kaigan,",
        "Minato-ku,",
        "Tokyo, Tokyo-To,",
        "105-0022, Japan"
      ]
    }
  ]
};

const Footer = () => (
  <footer className="py-12">
    <Container>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
        {/* Left: Social & Newsletter */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg">{content.journeyText}</span>
            <span className="inline-block mx-2">→</span>
            <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block align-middle">
              {/* Replace with your LinkedIn SVG */}
              <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </a>
          </div>
          <div>
            <span className="text-white text-lg">{content.newsletterText}</span>
            <form className="flex mt-4 gap-4">
              <input
                type="email"
                placeholder={content.newsletterPlaceholder}
                className="rounded-full px-6 py-2 bg-white/15 text-white placeholder-gray-400 border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-2 bg-white/10 text-white border border-white/40 lg:cursor-pointer transition"
              >
                {content.newsletterButton}
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Locations */}
        <div className="flex flex-col sm:flex-row gap-10 lg:w-2/3 justify-center">
          {content.locations.map((location) => (
            <div key={location.city}>
              <h3 className="text-white font-semibold mb-8">{location.city}</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                {location.address.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: To Top & Legal */}
        <div className="flex flex-col items-end gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-gray-400 px-6 py-2 text-white hover:bg-gray-700 transition"
          >
            {content.toTop}
          </button>
          <div className="flex flex-col items-end space-y-1 text-sm text-right">
            {content.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-300 hover:underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
    </Container>
  </footer>
);

export default Footer;