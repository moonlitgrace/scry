import HomeSectionLayout from '@/layouts/HomeSectionLayout';
import CTASection from '@/pages/home/CTASection';
import FAQSection from '@/pages/home/FAQSection';
import HeroSection from '@/pages/home/HeroSection';
import HowItWorksSection from '@/pages/home/HowItWorksSection';
import PricingSection from '@/pages/home/PricingSection';
import { withAngleBrackets } from '@/utils/with-angle-brackets';

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-10 md:gap-20 md:max-w-3xl md:mx-auto my-5 md:my-10">
      <HeroSection />
      {sections.map(({ id, title, subText, Component }, idx) => (
        <HomeSectionLayout key={idx} id={id}>
          <h3 className="font-sans font-bold text-2xl md:text-4xl">{title}</h3>
          <h2 className="text-muted-foreground text-sm text-center">
            {withAngleBrackets(subText)}
          </h2>
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
    subText: 'in 3 simple steps',
    Component: HowItWorksSection,
  },
  {
    id: 'pricing',
    title: 'Pricing',
    subText: 'start free. upgrade when you need more',
    Component: PricingSection,
  },
  {
    title: 'Ready To DEBUG Smarter?',
    subText: 'join developers tracking errors with scry today',
    Component: CTASection,
  },
  {
    id: 'faq',
    title: 'FAQ',
    subText: 'frequently asked questions',
    Component: FAQSection,
  },
];
