import Layout from "@/components/layout";
import Accordions from "@/components/accordions";
import Container from '@/components/container';
import ArrowRight from '@/svgs/arrow-right';

const Questions = [
    {
        title: "How accurate is your footfall and spending data?",
        text: "Our AI and software have been developed over several years, resulting in an impressive 99.73% accuracy rate compared to traditional camera or sensor-based systems. Our advanced machine learning models eliminate issues like double-counting and child detection - common problems with legacy solutions."
    },
    {
        title: "Which industries do you work with?",
        text: "We support a wide range of industries - from retail and fast food to cafés and more. Our system uses 51 industry-specific machine learning models trained on tailored data to deliver precise insights for each sector."
    },
    {
        title: "Can you monitor shopping centres?",
        text: "Yes. We can track total footfall and spending across entire shopping centres and individual stores. Our system also recognises and separates data across multiple floors, making it ideal for multi-level centres."
    },
    {
        title: "Do you require cameras or physical sensors to collect data?",
        text: "No physical hardware is needed. We obtain data from the kernel layer of mobile devices, which gives us anonymous numerical identifiers. We also integrate with Google’s popular times data (via direct API), MVNO data, and other sources. Our proprietary algorithms then process this into accurate real-time footfall and transaction data."
    },
    {
        title: "Can you provide historical data?",
        text: "Yes, we offer historical data going back to April 2021."
    },
    {
        title: "Does the phone need to be switched on or connected to Wi-Fi?",
        text: "No. Because our data collection works through the kernel layer and is combined with other sources, we can detect presence even if the phone is off or not connected to Wi-Fi."
    },
    {
        title: "Do you collect any personal data from mobile devices?",
        text: "Absolutely not. We do not collect any personally identifiable information (PII). Our methods are fully privacy-compliant and limited strictly to anonymised data from the kernel layer - so even if we tried, we couldn’t access personal data."
    },
    {
        title: "Which devices are supported?",
        text: "We support a wide range of smartphones, including iOS, Android, Google, Samsung, and Huawei devices - there are no compatibility issues with modern smartphones."
    },
    {
        title: "Can you monitor any location in the world and define custom counting areas?",
        text: "We are able to monitor every area that has been mapped by Google (a majority of areas with civilisation). While we can track nearby corridor areas (like walkways outside shops), fully custom mapping of completely uncharted areas isn't supported in our standard product."
    },
    {
        title: "How real-time is your data?",
        text: "Our dashboard updates every 15 minutes, providing near real-time visibility into footfall and spend throughout the day and night, depending on the location."
    },
    {
        title: "Are you open to partnerships?",
        text: "Yes, we're actively exploring potential partnerships. Please reach out via our contact form to discuss further."
    },
    {
        title: "How secure is your data infrastructure?",
        text: "We take data security seriously. Our systems undergo regular penetration testing, and we’re in the process of acquiring certifications such as ISO 27001 and UK Cyber Essentials."
    },
    {
        title: "Can you track customer journeys within shopping centres?",
        text: "Yes. We provide ‘peel-off’ insights showing the journey customers take - such as whether they visited the Apple Store or Starbucks before entering your store."
    },
    {
        title: "Do you provide conversion rate data?",
        text: "Yes, our dashboard can show conversion rates by hour or day. We identify how many visitors enter a store and how many make a purchase, giving you a real-time conversion percentage per location."
    },
    {
        title: "Can you predict future footfall?",
        text: "Yes. We can forecast footfall and spending patterns up to 12 hours in advance using predictive modelling."
    }
];

export default function FAQs() {
  return (
    <Layout>
        <div className="faqs py-18 md:py-36">
            <Container>
                <h1 className="leading-[1.2] md:leading-[1] text-[36px] md:text-[70px] font-normal font-gs mb-8 md:mb-17.5">our <em className="font-gm font-light">frequently</em> <span className="font-gm font-light">asked</span> questions:</h1>

                <div className="flex text-center flex-col md:flex-row md:text-left gap-10 items-center md:px-22 mb-8 md:mb-21.5">
                    <div>
                        <p className="text-[16px] md:text-[22px] opacity-80">Can’t find the answer you’re looking for?<br />Don’t hesitate to get in touch – we’re here to help.</p>
                    </div>

                    <a href="/contact-us" className="bg-white/20 border border-white text-white px-8 py-3 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 relative group lg:hover:pr-14 pinpoynt-transition">
                        <span>Talk to us</span>
                        <ArrowRight className="w-4 h-4 absolute right-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-x-4 pinpoynt-transition" />
                    </a>
                </div>

                <Accordions items={Questions} />
            </Container>
        </div>
    </Layout>
  );
}
