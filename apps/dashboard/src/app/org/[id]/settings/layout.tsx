import SettingsBar from './_components/settings-bar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-5 md:gap-5">
      <div className="flex-1">
        <SettingsBar />
      </div>
      <div className="flex flex-col gap-5 md:col-span-4">{children}</div>
    </div>
  );
}
