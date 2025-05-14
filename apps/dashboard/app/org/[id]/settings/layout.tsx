import SettingsBar from './_components/SettingsBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-4 md:gap-10">
      <SettingsBar />
      <div className="flex flex-col gap-5 md:col-span-3">{children}</div>
    </div>
  );
}
