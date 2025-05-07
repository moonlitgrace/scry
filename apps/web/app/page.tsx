import CTASection from "@/pages/home/CTASection";
import FAQSection from "@/pages/home/FAQSection";
import HeroSection from "@/pages/home/HeroSection";
import HowItWorksSection from "@/pages/home/HowItWorksSection";
import PricingSection from "@/pages/home/PricingSection";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-10 md:gap-20 md:max-w-3xl md:mx-auto my-5 md:my-10">
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
