import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BugLeaf Software | Digital Products",
  description:
    "BugLeaf Software builds modern web, mobile and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}