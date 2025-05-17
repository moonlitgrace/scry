import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/design-system/components/ui/tabs';
import InviteMembers from './_components/invite-members';
import Members from './_components/members';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-bold">Members</h5>
        <span className="text-muted-foreground text-sm">
          Manage organization members and invitations
        </span>
      </div>
      <InviteMembers />
      <Tabs defaultValue="members">
        <TabsList className="gap-5 border-0 bg-transparent! p-0">
          {Object.entries(tabs).map(([value, { label, disabled }]) => (
            <TabsTrigger
              key={value}
              value={value}
              disabled={disabled}
              className="data-[state=active]:border-primary! rounded-none border-0! border-b-2! border-transparent! bg-transparent! p-0"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="members">
          <Members />
        </TabsContent>
      </Tabs>
    </>
  );
}

const tabs = {
  members: {
    label: 'Members',
    disabled: false,
  },
  'pending-invitations': {
    label: 'Pending Invitations',
    disabled: true,
  },
};
