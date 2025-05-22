import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Checkbox } from '@repo/design-system/components/ui/checkbox';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-bold">Notifications</h5>
        <span className="text-muted-foreground text-sm">
          Manage your personal notification settings for the organization projects.
        </span>
      </div>
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Email</CardTitle>
          <CardDescription>
            Choose which updates you want to receive via email.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {Object.entries(emailOptions).map(([key, options]) => (
            <div key={key} className="flex flex-col gap-2">
              <h5 className="font-medium capitalize">{key}</h5>
              {options.map(({ checked, label }) => {
                const id = `${key} ${label.toLowerCase().replaceAll(' ', '-')}`;
                return (
                  <div key={id} className="flex items-center space-x-2">
                    <Checkbox id={id} defaultChecked={checked} />
                    <label
                      htmlFor={id}
                      className="text-muted-foreground text-sm select-none"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

const emailOptions = {
  alerts: [
    {
      label: 'Critical Errors',
      checked: true,
    },
    {
      label: 'New Error types',
      checked: true,
    },
    {
      label: 'Recurring reminders',
      checked: false,
    },
  ],
  frecuency: [
    {
      label: 'Instant',
      checked: false,
    },
    {
      label: 'Daily Digest',
      checked: true,
    },
  ],
  scope: [
    {
      label: 'Production only',
      checked: true,
    },
    {
      label: 'Include Dev',
      checked: false,
    },
  ],
};
