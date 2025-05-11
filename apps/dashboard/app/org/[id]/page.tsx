import OrgControls from "./_components/OrgControls"
import OrgProjects from "./_components/OrgProjects"
import OrgRecentErrors from "./_components/OrgRecentErrors"

export default function Page() {
  return (
    <>
      <OrgControls />
      <section className="grid grid-cols-3 gap-5">
        <OrgRecentErrors />
        <OrgProjects />
      </section>
    </>
  )
}

