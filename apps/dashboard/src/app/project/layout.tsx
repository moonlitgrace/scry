import Header from '@/components/organisms/header';
import { PROJECT_HEADER_LINKS } from '@/constants/links';

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <>
      <Header links={PROJECT_HEADER_LINKS} />
      <main className="mx-auto flex min-h-dvh max-w-350 flex-col gap-5 p-5">
        {children}
      </main>
    </>
  );
}
