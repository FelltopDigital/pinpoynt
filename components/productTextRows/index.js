import React from 'react';
import Container from '@/components/container';
import Link from 'next/link';

const ProductTextRows = () => {

  return (
    <div>
      <Container>

        <div className="flex flex-row justify-between mb-30">
          <h3 className="text-2xl font-bold flex-[0_0_calc(45%-30px)]">real-time global insights, without hardware or privacy concerns</h3>
          <p className="text-lg flex-[0_0_calc(55%-30px)] pb-14 border-b border-white">Pinpoynt.ai is a remote, software-only footfall tracking solution that uses information derived from real-time sources, such as Google busyness data, mobile network operator data, and point of sale (POS) data. This is all anonymised, 100% privacy-compliant information, with no Personally Identifiable Information (PII) captured at any time.</p>
        </div>

        <div className="flex flex-row justify-between mb-30">
          <h3 className="text-2xl font-bold flex-[0_0_calc(45%-30px)]">accuracy for any global location</h3>
          <p className="text-lg flex-[0_0_calc(55%-30px)] pb-14 border-b border-white">Our AI has been continuously self-trained over many years on a wide range of POS and camera datasets - refining its ability to accurately identify real human presence, movement patterns, and transactional behaviour. Pinpoynt.ai is proven to give unrivalled 99.73% accuracy against actual retailer performance data.</p>
        </div>

        <div className="flex flex-row flex-wrap justify-between mb-30">
          <h3 className="text-2xl font-bold flex-[0_0_calc(45%-30px)]">insights personalised to match your needs</h3>
          <p className="text-lg flex-[0_0_calc(55%-30px)] pb-14 border-b border-white">Our Software-as-a-Service (SaaS) solution delivers data and insights in the form best suited to your decision-making process, either as a browser-based dashboard, as a direct feed into your business information management system, or as a CSV download.</p>
          <div className="flex justify-end flex-1">
            <div className="flex flex-row justify-between flex-[0_0_calc(55%-30px)] items-end">
              <p>Read more about our pricing </p>
              <Link href="/pricing">Explore Now</Link>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default ProductTextRows;