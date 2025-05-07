import React from "react"

interface Props {
  children: React.ReactNode;
}

export default function HomeSectionLayout({ children }: Props) {
  return (
    <section className="flex flex-col items-center gap-2 md:gap-5">
      {children}
    </section>
  )
}

