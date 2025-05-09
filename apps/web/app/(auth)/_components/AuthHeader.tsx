export default function AuthHeader({ text }: { text: string; }) {
  return (
    <>
      <h4 className="font-sans text-5xl">{text}</h4>
      <p className="text-sm text-muted-foreground">Scry helps you track and reveal hidden errors and logs in your JavaScript apps.</p>
    </>
  )
}

