import React from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import Link from 'next/link';
  
const SectorsHeader = () => {

  return (
    <div className="py-36">
      <Container>
        
        <div className="flex items-center justify-between flex-wrap mb-38">
          <div className="flex-[0_0_100%] flex items-center justify-between">
            <h1 className="flex-[0_0_30%] text-[55px] leading-tight">transforming decision-making for your business</h1>
            <p className="flex-[0_0_60%] text-xl pb-10 border-b border-white">Our unique solution delivers accurate, real-time data on footfall and transactions in any location in the world, powering better-informed decision-making and ROI for retailers, real-estate companies, the hospitality industry, investment and quant funds, event organisers and the public sector. In increasingly competitive markets, Pinpoynt.ai provides the insights you need to improve performance, seize opportunities and increase market share.</p>
          </div>
          <div class="flex-[0_0_100%] h-[400px] mt-48 overflow-hidden rounded-3xl">
            <Image src="/sectors-header.jpg" alt="Sectors Header" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mb-48">
          <div className="flex items-center justify-between mb-20">
            <div className="flex-[0_0_calc(40%-30px)]">
              <h2 className="text-[55px] leading-tight mb-8">retail, real-estate and hospitality</h2>
              <p className="text-xl">With Pinpoynt.ai you can monitor and predict footfall and transactions in any location in the world – without needing to install hardware. Understand your own and your competitors’ performance, plan more accurately and benefit from having a competitive edge:</p>
            </div>
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-t border-b border-white">
              <h3 className="text-[300px] font-extralight leading-[0.7em]">01</h3>
              <p className="text-xl max-w-80">Measure current footfall, transactional and dwell time performance of all of your sites</p>
            </div>
          </div>
          <div className="flex items-stretch justify-between">
            <div className="w-full flex-[0_0_calc(40%-30px)] rounded-2xl overflow-hidden relative">
              <Image src="/sectors-header.jpg" alt="Sectors Header" width={1000} height={50} className="w-full h-full absolute left-0 top-0 object-cover" />
            </div>
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-b border-white">
              <p className="text-xl max-w-80">Understand the impact of marketing campaigns on key metrics</p>
              <h3 className="text-[300px] font-extralight leading-[0.7em]">02</h3>
            </div>
          </div>
        </div>

        <div className="mb-48">
          <div className="flex items-center justify-between mb-20">
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-t border-b border-white">
              <h3 className="text-[300px] font-extralight leading-[0.7em]">01</h3>
              <p className="text-xl max-w-80">Measure current footfall, transactional and dwell time performance of all of your sites</p>
            </div>
            <div className="flex-[0_0_calc(40%-30px)]">
              <h2 className="text-[55px] leading-tight mb-8">retail, real-estate and hospitality</h2>
              <p className="text-xl">With Pinpoynt.ai you can monitor and predict footfall and transactions in any location in the world – without needing to install hardware. Understand your own and your competitors’ performance, plan more accurately and benefit from having a competitive edge:</p>
            </div>
          </div>
          <div className="flex items-stretch justify-between">
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-b border-white">
              <p className="text-xl max-w-80">Understand the impact of marketing campaigns on key metrics</p>
              <h3 className="text-[300px] font-extralight leading-[0.7em]">02</h3>
            </div>
            <div className="w-full flex-[0_0_calc(40%-30px)] rounded-2xl overflow-hidden relative">
              <Image src="/sectors-header.jpg" alt="Sectors Header" width={1000} height={50} className="w-full h-full absolute left-0 top-0 object-cover" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-20">
            <div className="flex-[0_0_calc(40%-30px)]">
              <h2 className="text-[55px] leading-tight mb-8">retail, real-estate and hospitality</h2>
              <p className="text-xl">With Pinpoynt.ai you can monitor and predict footfall and transactions in any location in the world – without needing to install hardware. Understand your own and your competitors’ performance, plan more accurately and benefit from having a competitive edge:</p>
            </div>
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-t border-b border-white">
              <h3 className="text-[300px] font-extralight leading-[0.7em]">01</h3>
              <p className="text-xl max-w-80">Measure current footfall, transactional and dwell time performance of all of your sites</p>
            </div>
          </div>
          <div className="flex items-stretch justify-between">
            <div className="w-full flex-[0_0_calc(40%-30px)] rounded-2xl overflow-hidden relative">
              <Image src="/sectors-header.jpg" alt="Sectors Header" width={1000} height={50} className="w-full h-full absolute left-0 top-0 object-cover" />
            </div>
            <div className="flex-[0_0_calc(60%-30px)] flex items-end justify-between py-20 border-b border-white">
              <p className="text-xl max-w-80">Understand the impact of marketing campaigns on key metrics</p>
              <h3 className="text-[300px] font-extralight leading-[0.7em]">02</h3>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default SectorsHeader;