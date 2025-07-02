import Image from "next/image";
import Layout from "@/components/layout";
import HomeIntro from "@/components/homeIntro";
import HomeTryCta from "@/components/homeTryCta";
import RealtimeBenefits from "@/components/realtime-benefits";
import GetInTouch from "@/components/get-in-touch";
import Partners from "@/components/partners";
import HomeImageText from "@/components/homeImageText";

export default function Home() {
  return (
    <Layout>
      <HomeIntro />
      <HomeImageText />
      <RealtimeBenefits />
      <GetInTouch />
      <Partners />
    </Layout>
  );
}
