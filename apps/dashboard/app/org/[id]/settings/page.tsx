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
      <OrgNameCard />
      <OrgIDCard />
      <LeaveOrgCard />
      <DeleteOrgCard />
    </>
  );
}
