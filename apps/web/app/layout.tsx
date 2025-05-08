import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@repo/ui/globals.css";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "scry – Track the unseen",
  description: "Track and reveal hidden errors and logs in your JavaScript apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(firaCode.className, "dark")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
