import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The March | 3333 Penguins on Sui",
  description: "A collection of 3333 penguins marching toward greatness. Built on Sui blockchain with decentralized storage.",
  openGraph: {
    title: "The March | 3333 Penguins on Sui",
    description: "A collection of 3333 penguins marching toward greatness.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
