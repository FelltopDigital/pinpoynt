import React from 'react';
import Image from "next/image";

const Customer = ({ customer = {} }) => 
{
    return (
        <div className="mb-12 md:mb-25">
            <div className="relative mb-12 md:mb-25">
                <video loop={true} muted={true} autoPlay={true} preload={"true"} className="w-full h-auto rounded-[20px]">
                    <source src={customer.video} type="video/mp4"/>
                </video>

                {customer.logos && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <div className="flex gap-[24px] md:gap-[58px] items-center flex-wrap">
                            {customer.logos?.map((logo, index) => (
                                <Image key={index} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain w-16 h-16 sm:w-24 sm:h-24 lg:w-auto lg:h-auto" />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div>
                <h2 className="font-medium text-[28px] md:text-[64px] mb-8 md:mb-15">{customer.name}</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="w-full md:w-1/3">
                    {customer.challenge && (
                        <p className="md:max-w-[480px] text-[18px] md:text-[22px]"><strong>Challenge:</strong><br />{customer.challenge}</p>
                    )}
                </div>

                <div className="w-full md:w-1/3">
                    {customer.solution && (
                        <p className="md:max-w-[480px] text-[18px] md:text-[22px]"><strong>Solution:</strong><br />{customer.solution}</p>
                    )}
                </div>

                <div className="w-full md:w-1/3">
                    {customer.outcome && (
                        <p className="md:max-w-[480px] text-[18px] md:text-[22px]"><strong>Outcome:</strong><br />{customer.outcome}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Customer;