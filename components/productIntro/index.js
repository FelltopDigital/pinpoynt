import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const ProductIntro = () => {
  return (
    <div>
      <Container>
        <div className="h-[200px] lg:h-[350px] w-full rounded-xl mb-10">
          <Image src="/sectors-header.jpg" alt="Product Intro" width={1000} height={1000} className="w-full h-full object-cover rounded-xl" />
        </div>
      </Container>
    </div>
  );
};

export default ProductIntro;