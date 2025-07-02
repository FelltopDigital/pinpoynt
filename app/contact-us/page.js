import Layout from "@/components/layout";
import Container from '@/components/container';
import GetInTouch from "@/components/get-in-touch";
import ArrowRight from '@/svgs/arrow-right';

export default function ContactUs() {
  return (
    <Layout>
        <div className="pt-32 pb-16 md:pt-60 md:pb-45 mt-[-56px] md:mt-[-110px] bg-[#5895FF] bg-[url(/contact-bg.jpg)] bg-cover xl:bg-size-[1920px_auto] bg-top bg-no-repeat relative">
            <div className="z-10 absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-linear-to-t from-black/85 to-white mix-blend-multiply"></div>
            <Container>
                <div className="relative z-20 p-6 md:p-[60px] xl:pt-[80px] xl:pr-[120px] xl:pb-[80px] xl:pl-[80px] rounded-[22px] md:rounded-[30px] border-solid border-1 bg-white/5 flex flex-col md:flex-row items-center gap-4 backdrop-blur-lg">
                    <div className="md:w-1/2">
                        <h1 className="text-[36px] md:text-[66px] font-gs mb-8 md:mb-17.5 font-light"><span className="font-serif">get in</span> <em className="font-serif">touch</em> with us</h1>
                        <p className="md:max-w-[590px] text-[16px] md:text-[26px] mb-6 md:mb-10 font-medium">Transparent. Scalable. Designed for You.</p>
                        <p className="md:max-w-[440px] text-[16px] md:text-[26px] font-medium">Get in touch to discuss pricing, to explore our platform through a free demo or just to talk to us.</p>
                    </div>

                    <div className="md:w-1/2">
                        <form name="contact" method="POST" data-netlify="true">
                            <div className="flex flex-col md:flex-row gap-[24px] md:gap-[60px] mb-[24px] md:mb-[60px]">
                                <input className="leading-none placeholder:text-white/80 py-5 border-b-1 uppercase text-[16px] md:text-[24px] w-full" type="text" name="first_name" placeholder="First Name *" required/>
                                <input className="leading-none placeholder:text-white/80 py-5 border-b-1 uppercase text-[16px] md:text-[24px] w-full" type="text" name="last_name" placeholder="Last Name *" required/>
                            </div>

                            <div className="flex flex-col md:flex-row gap-[24px] md:gap-[60px] mb-[24px] md:mb-[60px]">
                                <input className="leading-none placeholder:text-white/80 py-5 border-b-1 uppercase text-[16px] md:text-[24px] w-full" type="email" name="email" placeholder="Email *" required/>
                                <input className="leading-none placeholder:text-white/80 py-5 border-b-1 uppercase text-[16px] md:text-[24px] w-full" type="text" name="company" placeholder="Company *" required/>
                            </div>

                            <div className="flex flex-col md:flex-row mb-[18px] md:mb-[50px]">
                                <textarea className="leading-none placeholder:text-white/80 py-2 border-b-1 uppercase text-[16px] md:text-[24px] w-full h-[134px]" name="message" placeholder="Message *" required></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row mb-[18px] md:mb-[50px]">
                                <button type="submit" className="uppercase bg-white/20 border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
                                    <span>Submit</span>
                                    <ArrowRight className="w-4 h-4 absolute top-4 right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
        <GetInTouch />
    </Layout>
  );
}
