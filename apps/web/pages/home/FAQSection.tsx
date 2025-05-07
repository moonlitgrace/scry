import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import { withAngleBrackets } from "@/utils/with-angle-brackets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion"

export default function FAQSection() {
  return <>
    <HomeSectionLayout id="faq">
      <h3 className="font-bold text-2xl md:text-4xl text-center">FAQ</h3>
      <h2 className="text-muted-foreground text-sm md:text-base text-center">{withAngleBrackets('frequently asked questions')}</h2>
      <Accordion type="single" collapsible className="w-full bg-card border" defaultValue="qs-0">
        {questions.map((qs, idx) => (
          <AccordionItem key={idx} value={`qs-${idx}`} className="px-5">
            <AccordionTrigger>{qs.label}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{qs.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </HomeSectionLayout>
  </>
}

const questions = [
  {
    label: 'How is Scry different from console.log()?',
    content: 'Scry automatically captures all errors (even uncaught exceptions) and organizes them in your dashboard with metadata like browser, OS, and frequency - no manual logging required.'
  },
  {
    label: 'What JavaScript frameworks does Scry support?',
    content: 'Scry works with any JS framework (React, Vue, Angular) and vanilla JS. Just install our SDK once.'
  },
  {
    label: 'Can I use Scry in production environments?',
    content: 'Yes! Scry is production-ready with minimal performance impact (<1% bundle size increase). All data is encrypted in transit.'
  }
]
