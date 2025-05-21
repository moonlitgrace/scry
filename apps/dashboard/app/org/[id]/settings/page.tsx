import { Metadata } from 'next';
import OrgName from './_components/action-cards/org-name';
import OrgID from './_components/action-cards/org-id';
import LeaveOrg from './_components/action-cards/leave-org';
import DeleteOrg from './_components/action-cards/delete-org';

export const metadata: Metadata = {
  title: 'General - Org Settings – scry',
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-bold">General</h5>
        <span className="text-muted-foreground text-sm">
          Manage your organization&apos;s core identity and security settings.
        </span>
      </div>
      <OrgName />
      <OrgID />
      <LeaveOrg />
      <DeleteOrg />
    </>
  );
}
