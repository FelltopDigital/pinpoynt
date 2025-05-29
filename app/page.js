import Image from "next/image";
import Layout from "@/components/layout";
import HomeIntro from "@/components/homeIntro";
import HomeTryCta from "@/components/homeTryCta";
  
export default function Home() {
  return (
    <Layout>
      <HomeIntro />
      <HomeTryCta />
    </Layout>
  );
}
