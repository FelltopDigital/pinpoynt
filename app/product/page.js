import Image from "next/image";
import Layout from "@/components/layout";
import AboutGrid from "@/components/aboutGrid";
  
export default function Home() {
  return (
    <Layout>
      <AboutGrid />
      <div className="h-screen">
        <h1>About</h1>
      </div>
    </Layout>
  );
}
