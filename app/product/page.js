import Image from "next/image";
import Layout from "@/components/layout";
import AboutGrid from "@/components/aboutGrid";
import ProductIntro from "@/components/productIntro";
import ProductTextRows from "@/components/productTextRows";
import DeepDive from "@/components/deepDive";

export default function Home() {
  return (
    <Layout bgBlack>
      <ProductIntro />
      <ProductTextRows />
      <DeepDive />
      <AboutGrid />
    </Layout>
  );
}
