import React from 'react';
import Container from '@/components/container';
import Link from 'next/link';

const GetInTouch = () => {

  return (
    <div className="mt-12 text-center py-20">
      <Container size="sm">
        <h3 className="text-6xl mb-4 font-light"><span className="font-serif">get in</span> <em className="font-serif">touch</em> with us</h3>
        <p className="text-[16px] md:text-[20px] max-w-[435px] mx-auto my-10 text-white/80">better decision-making and increased efficiency for the retail, hospitality, real estate, investment, event, and public sectors.</p>
        <Link className="inline-block text-white border-1 border-white/25 px-18 py-5 rounded-full mr-4" href="/contact">Write a message</Link>
        <Link className="inline-block text-white bg-blue-500 px-20 py-6 rounded-full" href="/contact">Discuss Project</Link>
      </Container>
    </div>
  );
};

export default GetInTouch;