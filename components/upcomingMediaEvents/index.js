import React from 'react';
import Image from "next/image";
import ArrowRight from '@/svgs/arrow-right';

const UpcomingMediaEvents = () => 
{
    return (
        <div className="mb-12 md:mb-25">
            <div className="mb-8 md:mb-15">
                <h2 className="font-medium text-[36px] md:text-[70px] mb-4">media <em className="font-light font-serif">&amp;</em> <span className="font-light font-serif">events</span></h2>
                <p className="opacity-80 text-[18px] md:text-[24px] md:max-w-[440px]">Read more about our work and meet us at upcoming events!</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-[34px]">
                <div className="flex items-center justify-center lg:hidden h-[34px] w-full">
                    <Image src="/card-star.png" alt="Decorative star" width="34" height="34"/>
                </div>

                <div className="w-full lg:w-1/3 relative">
                    <div className="hidden lg:block h-[34px] absolute top-[-18px] bottom-[-18px] left-[-34px] w-[34px] h-auto">
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute top-0"/>
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute bottom-0"/>
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-1 rounded-[30px]" style={{background: 'radial-gradient(50% 65.58% at 79.03% 76.92%, #86520E 0%, #201403 100%)'}}></div>
                    <div className="border-1 rounded-[30px] bg-white/5 p-8 md:pt-14 md:pb-14 md:pl-10 md:pr-8 relative z-5 backdrop-blur-lg h-full">
                        <p className="font-serif font-light text-[24px] md:text-[42px] leading-[32px] md:leading-[52px] mb-8 md:mb-18"><em>‘AI gives retailers new eyes without the cameras’</em></p>

                        <Image src="/logo-illuminaire.png" alt="Logo illuminaire" width="312" height="45" className="w-32 md:w-full max-w-[312px] h-auto object-contain mb-8 md:mb-18"/>

                        <a href="#" className="bg-white/20 border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
                            <span>Read more</span>
                            <ArrowRight className="w-4 h-4 absolute top-4 right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:hidden h-[34px] w-full">
                    <Image src="/card-star.png" alt="Decorative star" width="34" height="34"/>
                </div>

                <div className="w-full lg:w-1/3 relative">
                    <div className="hidden lg:block h-[34px] absolute top-[-18px] bottom-[-18px] left-[-34px] w-[34px] h-auto">
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute top-0"/>
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute bottom-0"/>
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-1 rounded-[30px]" style={{background: 'radial-gradient(59.07% 62.21% at 29.18% 76.4%, #0E1A86 0%, #0C1021 100%)'}}></div>
                    <div className="border-1 rounded-[30px] bg-white/5 p-8 md:pt-14 md:pb-14 md:pl-10 md:pr-8 relative z-5 backdrop-blur-lg h-full">
                        <p className="font-serif font-light text-[24px] md:text-[42px] leading-[32px] md:leading-[52px] mb-8 md:mb-18"><em>‘UK Al tool promises real-time shopper footfall and spending’</em></p>

                        <Image src="/logo-grocer.png" alt="Logo grocer" width="215" height="60" className="w-32 md:w-full max-w-[215px] h-auto object-contain mb-8 md:mb-18"/>

                        <a href="#" className="bg-white/20 border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
                            <span>Read more</span>
                            <ArrowRight className="w-4 h-4 absolute top-4 right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:hidden h-[34px] w-full">
                    <Image src="/card-star.png" alt="Decorative star" width="34" height="34"/>
                </div>

                <div className="w-full lg:w-1/3 relative">
                    <div className="hidden lg:block h-[34px] absolute top-[-18px] bottom-[-18px] left-[-34px] w-[34px] h-auto">
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute top-0"/>
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute bottom-0"/>
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-1 rounded-[30px]" style={{background: 'radial-gradient(62.65% 88.09% at 82.1% 23.95%, #860E5E 0%, #2B0323 100%)'}}></div>
                    <div className="border-1 rounded-[30px] bg-white/5 p-8 md:pt-14 md:pb-14 md:pl-10 md:pr-8 relative z-5 backdrop-blur-lg h-full">
                        <p className="font-serif font-light text-[24px] md:text-[42px] leading-[32px] md:leading-[52px] mb-8 md:mb-18"><em>‘Yellow Sub AI launches launches Pinpoynt.ai software solution’</em></p>

                        <Image src="/logo-rtih.png" alt="Logo RTIH" width="245" height="72" className="w-32 md:w-full max-w-[245px] h-auto object-contain mb-8 md:mb-18"/>

                        <a href="#" className="bg-white/20 border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
                            <span>Read more</span>
                            <ArrowRight className="w-4 h-4 absolute top-4 right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
                        </a>
                    </div>

                    <div className="hidden lg:block h-[34px] absolute top-[-18px] bottom-[-18px] right-[-34px] w-[34px] h-auto">
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute top-0"/>
                        <Image src="/card-star.png" alt="Decorative star" width="34" height="34" className="absolute bottom-0"/>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:hidden h-[34px] w-full">
                    <Image src="/card-star.png" alt="Decorative star" width="34" height="34"/>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMediaEvents;