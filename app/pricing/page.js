import Layout from "@/components/layout";
import Container from '@/components/container';
import GetInTouch from "@/components/get-in-touch";

export default function Pricing() {
  return (
    <Layout>
        <div className="pt-32 pb-16 md:pt-60 md:pb-45 mt-[-80px] md:mt-[-144px] bg-[#5895FF] bg-[url(/contact-bg.jpg)] bg-cover xl:bg-size-[1920px_auto] bg-top bg-no-repeat relative">
            <div className="z-10 absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-linear-to-t from-black/85 to-white mix-blend-multiply"></div>
            <Container>
                <div className="relative z-20 p-6 md:p-[60px] xl:pt-[80px] xl:pr-[120px] xl:pb-[80px] xl:pl-[80px] rounded-[22px] md:rounded-[30px] border-solid border-1 bg-white/5 flex flex-col md:flex-row items-center gap-4 backdrop-blur-lg">
                    <div className="md:w-1/2">
                        <h1 className="text-[36px] md:text-[66px] font-normal font-gs mb-8 md:mb-17.5">transparent, <span className="font-serif font-light">scalable,</span> designed <span className="font-serif font-light">for <em>you</em></span></h1>
                        <p className="md:max-w-[590px] opacity-80 text-[16px] md:text-[22px] mb-6 md:mb-10">Our pricing model is based on a flexible subscription service, designed to adapt to your needs.</p>
                        <p className="md:max-w-[590px] opacity-80 text-[16px] md:text-[22px]">Whether you&apos;re monitoring a single location or deploying globally, we tailor each plan to your coverage, data requirements, and depth of insight.</p>
                    </div>

                    <div className="md:w-1/2">
                        <p className="md:max-w-[700px] opacity-80 text-[16px] md:text-[22px] mb-8 md:mb-10 md:px-16">There are no rigid tiers, no hidden costs — just a transparent, collaborative approach to value. And with no hardware to install, setup is quick and cost-efficient.</p>

                        <form name="pricing" method="POST" data-netlify="true">
                            <textarea name="pricing_input" className="p-4 md:p-8 bg-black/20 w-full rounded-[16px] md:rounded-[42px] h-[156px] md:h-[296px] resize-none border-1 border-solid"></textarea>

                            <div className="flex items-center flex-col md:flex-row md:mt-12 mt-6 gap-[21px]">
                                <button className="w-full md:w-1/2 cursor-pointer bg-white/20 hover:bg-white/0 pinpoynt-transition border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group" type="submit">Try pinpoint.ai for free</button>
                                <a className="w-full md:w-1/2 cursor-pointer hover:bg-white/20 border border-white pinpoynt-transition text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group" href="/contact-us">speak to our team</a>
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
