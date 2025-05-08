import HomeSectionLayout from '@/layouts/HomeSectionLayout';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import { withAngleBrackets } from '@/lib/with-angle-brackets';

export default function Home() {
  return (
    <main className="my-5 flex flex-col gap-10 p-5 md:mx-auto md:my-10 md:max-w-3xl md:gap-20">
      <HeroSection />
      {sections.map(({ id, title, subText, Component }, idx) => (
        <HomeSectionLayout key={idx} id={id}>
          <h3 className="font-sans text-2xl font-bold md:text-4xl">{title}</h3>
          <h2 className="text-muted-foreground text-center text-sm">
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
    subText: `in 3 I's`,
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
