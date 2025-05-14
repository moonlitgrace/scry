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

export default function OrgNameCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Org Name</CardTitle>
        <CardDescription>
          This is your org&apos;s visible name within Scry. For example, the name of your
          company or department.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          defaultValue={"moonlitgrace's Org"}
          placeholder="Org name..."
          className="max-w-100"
          maxLength={32}
        />
      </CardContent>
      <CardFooter className="justify-between border-t">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-xs">
            Please use 32 characters at maximum.
          </span>
          <span className="text-muted-foreground text-xs">
            Avoid using special characters or emojis.
          </span>
        </div>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
}
