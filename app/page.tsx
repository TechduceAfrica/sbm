import Image from "next/image";
import Hero from "./components/Hero";
import HomeInteraction1 from "./components/HomeInteraction1";
import HomeServices from "./components/HomeServices";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import HomeBenefits from "./components/HomeBenefits";
import SealDeal from "./components/SealDeal";
import ProofSection from "./components/ProofSection";
import ThreeSteps from "./components/ThreeSteps";
import NewTestimonialCarousels from "./components/NewTestimonialCarousels"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <HomeInteraction1 /> */}
      <ProofSection />
      <HomeServices />
      <Features />
      <HomeBenefits />
      <ThreeSteps />
      <Testimonials />
    </main>
  );
}
