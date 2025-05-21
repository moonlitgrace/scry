import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Input } from '@repo/design-system/components/ui/input';

export default function OrgName() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization Name</CardTitle>
        <CardDescription>
          This is your organization&apos;s visible name within Scry. For example, the name
          of your company or department.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          defaultValue={"moonlitgrace's Org"}
          placeholder="Org name..."
          className="md:max-w-100"
          maxLength={32}
        />
      </CardContent>
      <CardFooter className="flex-col justify-between gap-2 border-t md:flex-row">
        <div className="text-muted-foreground flex flex-col items-center text-sm md:items-start">
          <span>Please use 32 characters at maximum.</span>
          <span>Avoid using special characters, symbols or emojis.</span>
        </div>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
}
