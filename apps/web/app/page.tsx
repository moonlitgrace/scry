import HeroSection from "@/pages/home/HeroSection";
import HowItWorksSection from "@/pages/home/HowItWorksSection";

export default function Home() {
  return <main className="flex flex-col gap-10 max-w-3xl mx-auto my-10">
    <HeroSection />
    <HowItWorksSection />
  </main>
}
