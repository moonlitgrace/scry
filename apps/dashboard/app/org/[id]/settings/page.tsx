import { Metadata } from 'next';
import OrgNameCard from './_components/cards/OrgNameCard';
import OrgIDCard from './_components/cards/OrgIDCard';
import LeaveOrgCard from './_components/cards/LeaveOrgCard';
import DeleteOrgCard from './_components/cards/DeleteOrgCard';

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
