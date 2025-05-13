import SettingsBar from './_components/SettingsItems';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl font-bold">Settings</h3>
      <div className="grid grid-cols-4 gap-10">
        <SettingsBar />
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
}
