import { BundledLanguage, codeToHtml } from 'shiki';

interface Props {
  children: string;
  lang: BundledLanguage;
}

async function CodeBlock(props: Props) {
  const html = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'github-dark-default',
  });

  return (
    <div
      className="bg-card border p-2 [&_pre]:bg-transparent!"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export { CodeBlock };
