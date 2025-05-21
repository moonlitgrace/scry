import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      {Object.entries(plans).map(([key, plan]) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle>{plan.label}</CardTitle>
            <CardDescription>
              ({plan.isActive ? 'active' : 'coming soon'})
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            {plan.features.map((feat, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <Check className="text-muted-foreground size-4" /> {feat}
              </span>
            ))}
          </CardContent>
          <CardFooter>
            <Button disabled={!plan.isActive}>Get started</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const plans = {
  free: {
    label: 'Free',
    isActive: true,
    features: [
      '1 Project / Org',
      '1 Organization',
      'Basic Error Tracking',
      'Email alerts',
    ],
  },
  pro: {
    label: 'Pro',
    isActive: false,
    features: [
      '10 Project / Org',
      '5 Organization',
      'Advanced Filters',
      'Slack / Discord alerts',
    ],
  },
};
