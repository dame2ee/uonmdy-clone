import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "University Of Nursing, Mandalay. - University Of Nursing Mandalay (2017)",
  description:
    "University of Nursing, Mandalay — established since November 1998. News, announcements, departments, faculty and academic programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
