'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { useThrottledCallback } from 'use-debounce';

export default function OrgIDCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useThrottledCallback((val: string) => {
    window.navigator.clipboard.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  }, 1000);

  const CopyIcon = copied ? Check : Copy;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Org ID</CardTitle>
        <CardDescription>This is your org&apos;s ID within Scry.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="inline-flex items-center gap-5 border p-2">
          <span className="text-sm">jhxkrtym</span>
          <button onClick={() => handleCopy('jhxkrtym')} tabIndex={-1}>
            <CopyIcon className="text-muted-foreground animate-in zoom-in size-4" />
          </button>
        </div>
      </CardContent>
      <CardFooter className="text-muted-foreground border-t text-xs">
        Used when interacting with the Scry API (coming soon).
      </CardFooter>
    </Card>
  );
}
