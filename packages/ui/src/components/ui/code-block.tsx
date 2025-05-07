import { BundledLanguage, codeToHtml } from "shiki"

interface Props {
  children: string;
  lang: BundledLanguage;
}

async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'github-dark-default'
  })

  return <div className="border p-2 [&_pre]:bg-transparent!" dangerouslySetInnerHTML={{ __html: out }} />
}

export { CodeBlock }
