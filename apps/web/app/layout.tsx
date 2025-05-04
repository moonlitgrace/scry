import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard – scry",
  description: "Track and reveal hidden errors and logs in your JavaScript apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
