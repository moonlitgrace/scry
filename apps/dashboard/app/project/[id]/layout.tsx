import { ProjectContextProvider } from '@/context/project-context';

interface Props {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function Layout({ params, children }: Props) {
  const { id } = await params;

  return <ProjectContextProvider id={id}>{children}</ProjectContextProvider>;
}
