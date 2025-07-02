import Layout from "@/components/layout";
import Image from "next/image";
import Container from '@/components/container';
import Timeline from '@/components/timeline';
import Customer from '@/components/customer';
import UpcomingMediaEvents from '@/components/upcomingMediaEvents';

const TimelineEntries = [
    {
        year: 2017,
        text: "Winner of JLAB John Lewis & Waitrose<br />accelerator (product then known as BB1)"
    },
    {
        year: 2017,
        text: "Company founded by serial<br />entrepreneur Justin Staines"
    },
    {
        year: 2019,
        text: "Selected by Department for International Trade to attend Finnosummit, Mexico City"
    },
    {
        year: 2024,
        text: "Part of a delegation of cutting-edge UK Tech companies to the UK-Southeast Asia Tech Week, presenting in Thailand, Vietnam and Singapore."
    },
    {
        year: 2025,
        text: "Pinpoynt.ai launched and shortlisted for the 2025 Retail Technology Innovation Awards"
    },
    {
        year: 2025,
        text: "3-5 June 2025: <a href=\"https://nrfbigshowapac.nrf.com/\" target=\"_blank\" style=\"text-decoration: underline; text-decoration-thickness: 0.5px; text-underline-offset: 2px\">NRF Singapore 2025</a>"
    }
];

const Customers = {
    BurgerKing: {
        name: 'Burger King',
        challenge: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        solution: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        outcome: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        logos: [
            {
                src: '/logo-bk.svg',
                alt: 'Burger King Logo',
                width: 242,
                height: 242
            }
        ],
        video: '/sample_1920.mp4'
    },
    BDOFailteIreland: {
        name: 'BDO / Failte Ireland',
        challenge: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        solution: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        outcome: 'Selected by Department for International Trade to attend Finnosummit, Mexico City',
        logos: [
            {
                src: '/logo-bdo.svg',
                alt: 'BDO Logo',
                width: 307,
                height: 119
            },
            {
                src: '/logo-fi.svg',
                alt: 'Logo Failte Ireland',
                width: 310,
                height: 116
            }
        ],
        video: '/sample_1920.mp4'
    }
};

export default function About() {
  return (
    <Layout>
        <div className="relative overflow-x-clip w-full">
            <div className="hidden md:block" style={{position: 'absolute', width: '1004px', height: '5224px', left: '-220px', top: '-100px', zIndex: '-1', background: 'radial-gradient(91.95% 43.56% at 116.27% 66.3%, #6B4B00 0%, #000000 100%)', filter: 'blur(150px)', transform: 'rotate(-180deg)'}}></div>
            <div className="hidden md:block" style={{position: 'absolute', width: '802px', height: '5968px', right: '-100px', top: '-1000px', zIndex: '-1', background: 'radial-gradient(91.95% 43.56% at 116.27% 66.3%, #214A94 0%, #000000 100%)', filter: 'blur(150px)', transform: 'rotate(-180deg) scaleX(-1)'}}></div>

            <Container>
                <div className="text-center pt-8 pb-8 md:pt-25 md:pb-37.5">
                    <h1 className="text-[36px] md:text-[66px] font-gs font-medium leading-none">built on <span className="font-light font-serif">innovation</span><br /> and <em className="font-serif">experience</em></h1>
                </div>
            </Container>

            <div className="p-8 md:p-0 mb-0 md:mb-32 flex-row flex-wrap md:flex-nowrap gap-[24px] md:gap-[54px] flex items-center">
                <figure className="order-1 md:order-1 flex-1 md:flex-initial w-1/2 md:w-1/8 flex justify-start">
                    <Image src="/about-left.jpg" alt="About left image" width="219" height="421" className="w-full h-auto max-h-[150px] object-cover object-[65%_15%] md:max-h-[none] rounded-[16px] md:rounded-[30px]" />
                </figure>

                <figure className="order-3 md:order-2 w-full md:w-6/8">
                    <Image src="/about-main.jpg" alt="About main image" width="1366" height="486" className="w-full object-cover object-[60%_50%] h-[180px] sm:h-[220px] md:h-auto rounded-[16px] md:rounded-[30px]" />
                </figure>

                <figure className="order-2 md:order-3 flex-1 md:flex-initial w-1/2 md:w-1/8 flex justify-end">
                    <Image src="/about-right.jpg" alt="About right image" width="219" height="421" className="w-full h-auto max-h-[150px] object-cover object-[50%_5%] md:max-h-[none] rounded-[16px] md:rounded-[30px]" />
                </figure>
            </div>

            <Container>
                <div className="flex flex-col text-center lg:text-left lg:flex-row gap-[24px] lg:gap-[54px]">
                    <div className="lg:w-1/3">
                        <p className="text-justify font-medium opacity-80 text-[18px] lg:text-[27.75px] leading-[24px] lg:leading-[34px]">Pinpoynt.ai has been created to solve a specific pain-point – how can organisations understand footfall and transactions in real-time, anywhere in the world, without having to install hardware and while ensuring privacy?</p>
                    </div>

                    <div className="lg:w-1/3">
                        <p className="text-justify font-medium opacity-80 text-[18px] lg:text-[27.75px] leading-[24px] lg:leading-[34px]">Our technology was originally developed as part of JLAB, the John Lewis/Waitrose business accelerator, a competition we won in 2017. This solution grew into Pinpoynt.ai, the first product from the <strong>Yellow Sub AI Group</strong>, an AI-driven technology company specialising in data analytics and advanced communications.</p>
                    </div>

                    <div className="lg:w-1/3">
                        <p className="text-justify font-medium opacity-80 text-[18px] lg:text-[27.75px] leading-[24px] lg:leading-[34px]">Since 2017 we have trained and extended our AI and quantum mechanics models and worked closely with customers across the globe to deliver a solution dedicated to meeting their needs. We’re continuing to develop Pinpoynt.ai while increasing our global sales footprint to meet growing customer demand.</p>
                    </div>
                </div>

                <Timeline entries={TimelineEntries} />

                <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[87.5px] mb-24">
                    <h2 className="w-full md:w-3/5 text-[36px] md:text-[70px] font-normal">customers <span className="font-serif font-light">already <em>benefitting</em></span> from our solution</h2>
                    <div className="w-full md:w-2/5">
                        <p className="md:max-w-[488px] font-medium text-[16px] md:text-[22px] leading-[24px] md:leading-[34px] opacity-80">Pinpoynt.ai has now been deployed globally by retailers, hospitality groups, local authorities and investors including Burger King Thailand, Bluewater Shopping Centre, BDO Ireland/Fáilte Ireland and many others</p>
                    </div>
                </div>

                <Customer customer={Customers.BurgerKing}/>
                <Customer customer={Customers.BDOFailteIreland}/>

                <div className="hidden md:block h-128"></div>

                <UpcomingMediaEvents/>
                
                <div className="hidden md:block h-128"></div>
            </Container>
        </div>
    </Layout>
  );
}
