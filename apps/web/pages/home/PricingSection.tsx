import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@repo/ui/components/ui/card';
import { cn } from "@repo/ui/lib/utils";
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <HomeSectionLayout>
      <h3 className="font-bold text-4xl">Pricing</h3>
      <h2 className="text-muted-foreground">{withAngleBrackets('start free. upgrade when you need more')}</h2>
      <div className="grid grid-cols-2 gap-2 w-full">
        {Object.entries(plans).map(([key, plan]) => (
          <Card key={key} className={cn(!plan.isActive && 'opacity-50 pointer-events-none select-none', "rounded-none")}>
            <CardHeader>
              <CardTitle>{plan.label}</CardTitle>
              <CardDescription>({plan.isActive ? 'active' : 'coming soon'})</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              {plan.features.map((feat, idx) => (
                <span key={idx} className="inline-flex items-center gap-2"><Check className="size-4 text-muted-foreground" /> {feat}</span>
              ))}
            </CardContent>
            <CardFooter>
              <Button>Get started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </HomeSectionLayout>
  )
}

const plans = {
  free: {
    label: 'Free',
    isActive: true,
    features: [
      '1 Project',
      'Basic Error Tracking',
      'Email alerts'
    ]
  },
  pro: {
    label: 'Pro',
    isActive: false,
    features: [
      '10 Project',
      'Advanced Filters',
      'Slack/Discord alerts'
    ]
  },
}
