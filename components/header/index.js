"use client";

import React, { useState } from 'react';
import Container from '@/components/container';
import Link from 'next/link';
import PinpoyntLogo from '@/svgs/pinpoynt-logo';
import Login from '@/svgs/login';
  
const Header = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Product',
      href: '/product'
    },
    {
      label: 'Sectors',
      href: '/sectors'
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'FAQs',
      href: '/faqs'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact Us',
      href: '/contact-us'
    }
  ]

  return (
    <header className="mt-6 xl:mt-8 relative z-100">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1><PinpoyntLogo className="w-auto h-8 xl:h-10" /></h1>
          </div>
          <div className="hidden lg:flex items-center mx-6">
            <nav className="border border-white/30 rounded-full px-6 backdrop-blur-lg">
              <ul className="flex items-center gap-4">
                {headerLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm font-medium text-white hover:text-gray-300 block py-4 px-3 xl:py-5 xl:px-6" href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center">
            <Link className="text-sm px-6 py-2 flex items-center" href="/login">
              <span className="mr-2 border bg-orange-400 inset-shadow-sm inset-shadow-black/60 block border-white rounded-full w-[32px] h-[32px]"></span>
              <span className="text-white text-xl font-medium">Demo</span>
            </Link>
            <Link className="text-sm px-6 py-2 flex items-center" href="/login">
              <span className="mr-2 border block border-white rounded-full p-4"><Login /></span>
              <span className="text-white text-xl font-medium">Login</span>
            </Link>
          </div>
          <div className={`lg:hidden w-6 h-6 relative -mt-[4px] cursor-pointer pinpoynt-transition ${isMenuOpen ? 'rotate-180' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`pointer-events-none absolute right-0 w-full h-[1px] bg-white rounded-full pinpoynt-transition ${isMenuOpen ? 'rotate-45 top-1/2' : 'top-[4px]'}`}></div>
            <div className={`pointer-events-none absolute top-1/2 right-0 w-full h-[1px] bg-white rounded-full pinpoynt-transition ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`pointer-events-none absolute right-0 w-full h-[1px] bg-white rounded-full pinpoynt-transition ${isMenuOpen ? '-rotate-45 top-1/2' : 'top-[20px]'}`}></div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;