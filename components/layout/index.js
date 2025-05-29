import React from 'react';
import Header from '@/components/header';
  
const Layout = ({ children }) => {
  return (
    <div className="relative h-[2000px]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;