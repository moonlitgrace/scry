import HeroSection from "@/pages/home/HeroSection";
import HowItWorksSection from "@/pages/home/HowItWorksSection";
import PricingSection from "@/pages/home/PricingSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 max-w-3xl mx-auto my-10">
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  )
}
