import { Metadata } from 'next';
import OrgNameCard from './_components/OrgNameCard';
import OrgIDCard from './_components/OrgIDCard';
import LeaveOrgCard from './_components/LeaveOrgCard';
import DeleteOrgCard from './_components/DeleteOrgCard';

export const metadata: Metadata = {
  title: 'General - Org Settings - Dashboard – scry',
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
