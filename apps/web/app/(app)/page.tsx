import HomeSectionLayout from '@/layouts/home-section';
import HeroSection from './_components/hero-section';
import HowItWorksSection from './_components/how-it-works-section';
import PricingSection from './_components/pricing-section';
import CTASection from './_components/cta-section';
import FAQSection from './_components/faq-section';

export default function Home() {
  return (
    <main className="my-5 flex flex-col gap-10 p-5 md:mx-auto md:my-10 md:max-w-3xl md:gap-20">
      <HeroSection />
      {sections.map(({ id, title, subText, Component }, idx) => (
        <HomeSectionLayout key={idx} id={id}>
          <h3 className="text-center font-sans text-2xl font-black md:text-4xl">
            {title}
          </h3>
          <h2 className="text-muted-foreground text-center">{subText}</h2>
          <Component />
        </HomeSectionLayout>
      ))}
    </main>
  );
}

const sections = [
  {
    id: 'how-it-works',
    title: 'How It Works',
    subText: `Set up, configure, and debug effortlessly with Scry’s seamless workflow`,
    Component: HowItWorksSection,
  },
  {
    id: 'pricing',
    title: 'Pricing',
    subText: 'Start free. Upgrade when you need more.',
    Component: PricingSection,
  },
  {
    title: 'Ready To DEBUG Smarter?',
    subText: 'Join developers tracking errors with Scry today.',
    Component: CTASection,
  },
  {
    id: 'faq',
    title: 'FAQ',
    subText: 'Frequently Asked Questions',
    Component: FAQSection,
  },
];
