import SettingsBar from './_components/SettingsBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-4 gap-10">
      <SettingsBar />
      <div className="col-span-3 flex flex-col gap-5">{children}</div>
    </div>
  );
}
