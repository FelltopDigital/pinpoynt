import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = ({ children, noPadd = false, bgBlack = false }) => {
  return (
    <div className={`relative h-[2000px] ${noPadd ? '' : 'pt-20 lg:pt-36'} ${bgBlack ? 'bg-black' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;