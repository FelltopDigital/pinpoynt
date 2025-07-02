import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const RealtimeBenefits = () => {

  const benefits = [
    {
      title: 'Evaluate individual site performance at a granular level',
    }, 
    {
      title: 'Understand competitor activity on a site-by-site or overall basis',
    }, 
    {
      title: 'Scope out the best locations for new shops and hospitality sites',
    }, 
    {
      title: 'Measure the impact of marketing campaigns on footfall and sales',
    }, 
    {
      title: 'Optimise operations and efficiency',
    }, 
    {
      title: 'Make better investment decisions through faster access to more comprehensive data',
    }, 
    {
      title: 'Reduce portfolio risk and deploy capital more effectively',
    }, 
    {
      title: 'Monitor and measure the impact of investments and events',
    }, 
  ]

  return (
    <div className="mt-12">
      <Container>
        <div>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-[60px] font-medium flex-[0_0_500px] mx-[10%] leading-14">real-time benefits for your business</h2>
            <div className="border-b border-white pb-4">
              <p className="mb-4 text-xl">Zero in on any location, down to the level of individual shops or sites to access granular data and insights on a real-time basis. Greater accuracy, better coverage and faster setup than physical solutions.</p>
              <p className="mb-4 text-xl">Pinpoynt.ai enables better-informed decision-making:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div className="bg-white/80 rounded-lg px-5 py-6 border border-white/20" key={`benefit-${index}`}>
                <Image width={100} height={40} src={'/dots-logo.png'} alt="dot-logo" className="w-auto h-14 mb-11" />
                <p className="text-[#001860] font-medium text-xl leading-tight block w-full border-b border-[#001860] pb-6">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RealtimeBenefits;