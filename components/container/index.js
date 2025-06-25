import React from 'react';
  
const Container = ({ children, size = 'lg' }) => {
  return (
    <div className={`container mx-auto px-7 ${size === 'lg' ? 'max-w-9xl' : size === 'sm' ? 'max-w-3xl' : 'max-w-7xl'}`}>
      {children}
    </div>
  );
};

export default Container;