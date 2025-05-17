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
      <Tabs defaultValue="members">
        <TabsList>
          <TabsTrigger value="members">Org Members</TabsTrigger>
          <TabsTrigger value="pending" disabled>
            Pending Invitations
          </TabsTrigger>
        </TabsList>
        <TabsContent value="members">
          <OrgMembers />
        </TabsContent>
      </Tabs>
    </>
  );
}
