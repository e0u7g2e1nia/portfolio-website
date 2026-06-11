import Hero from "@/components/sections/Hero";
import AICollabSection from "@/components/sections/AICollabSection";
import ProductSection from "@/components/sections/ProductSection";
import DesignSection from "@/components/sections/DesignSection";
import PhotographySection from "@/components/sections/PhotographySection";
import SocialSection from "@/components/sections/SocialSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AICollabSection />
      <ProductSection />
      <DesignSection />
      <PhotographySection />
      <SocialSection />
    </main>
  );
}
