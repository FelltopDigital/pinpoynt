"use client";

import React, { useState } from 'react';
import Container from '@/components/container';
import Link from 'next/link';
import PinpoyntLogo from '@/svgs/pinpoynt-logo';
  
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
      label: 'Sector',
      href: '/sector'
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
    <header className="mt-6 xl:mt-8">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1><PinpoyntLogo className="w-auto h-8 xl:h-10" /></h1>
          </div>
          <div className="hidden lg:flex items-center mx-6">
            <nav className="border border-white/30 rounded-full px-6">
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
            <Link className="border text-sm border-white rounded-full px-6 xl:px-10 py-2 bg-white/20" href="/login">Login</Link>
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