import { Metadata } from 'next';
import DeleteOrgCard from './_components/cards/delete-org-card';
import LeaveOrgCard from './_components/cards/leave-org-card';
import OrgIDCard from './_components/cards/org-id-card';
import OrgNameCard from './_components/cards/org-name-card';

export const metadata: Metadata = {
  title: 'General – Org Settings – Dashboard – scry',
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
      <OrgNameCard />
      <OrgIDCard />
      <LeaveOrgCard />
      <DeleteOrgCard />
    </>
  );
}
