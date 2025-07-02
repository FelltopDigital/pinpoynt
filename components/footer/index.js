import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const Footer = () => (
  <footer className="py-12">
    <Container>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
        {/* Left: Social & Newsletter */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg">Keep track of our journey here</span>
            <span className="inline-block mx-2">→</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block align-middle">
              {/* Replace with your LinkedIn SVG */}
              <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </a>
          </div>
          <div>
            <span className="text-white text-lg">Sign up to our newsletter</span>
            <form className="flex mt-4 gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full px-6 py-2 bg-white/15 text-white placeholder-gray-400 border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-2 bg-white/10 text-white border border-white/40 lg:cursor-pointer transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Locations */}
        <div className="flex flex-col sm:flex-row gap-10 lg:w-2/3 justify-center">
          <div>
            <h3 className="text-white font-semibold mb-8">London</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>Level 39,</li>
              <li>One Canada Square,</li>
              <li>Canary Wharf,</li>
              <li>London</li>
              <li>E14 5AB, England</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-8">Bedfordshire</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>Bedford i-Lab,</li>
              <li>Stannard Way,</li>
              <li>Priory Business Park,</li>
              <li>Bedford</li>
              <li>MK44 3RZ, England</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-8">Tokyo</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>3F Shiodome Building,</li>
              <li>1-2-20 Kaigan,</li>
              <li>Minato-ku,</li>
              <li>Tokyo, Tokyo-To,</li>
              <li>105-0022, Japan</li>
            </ul>
          </div>
        </div>

        {/* Right: To Top & Legal */}
        <div className="flex flex-col items-end gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-gray-400 px-6 py-2 text-white hover:bg-gray-700 transition"
          >
            ↑ To Top
          </button>
          <div className="flex flex-col items-end space-y-1 text-sm text-right">
            <a href="#" className="text-gray-300 hover:underline">WEBSITE TERMS AND CONDITIONS</a>
            <a href="#" className="text-gray-300 hover:underline">PRIVACY POLICY</a>
            <a href="#" className="text-gray-300 hover:underline">DISCLAIMER</a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
    </Container>
  </footer>
);

export default Footer;