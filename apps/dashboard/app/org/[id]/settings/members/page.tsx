import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/design-system/components/ui/tabs';
import InviteMembers from './_components/invite-members';
import OrgMembers from './_components/org-members';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-bold">Members</h5>
        <span className="text-muted-foreground text-sm">
          Manage team members and invitations
        </span>
      </div>
      <InviteMembers />
      <Tabs defaultValue="org-members">
        <TabsList className="gap-5 border-0 bg-transparent! p-0">
          {['Org Members', 'Pending Invitations'].map((item) => {
            const value = item.replaceAll(' ', '-').toLowerCase();
            return (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:border-primary! rounded-none border-0! border-b-2! border-transparent! bg-transparent! p-0"
              >
                {item}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="org-members">
          <OrgMembers />
        </TabsContent>
      </Tabs>
    </>
  );
}
