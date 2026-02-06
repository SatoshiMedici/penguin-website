import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Vasconcelos | Digital Strategist & Business Developer",
  description:
    "Marketing and business development professional with 7+ years scaling communities and driving growth in tech economies. Web3, community building, and AI-powered marketing.",
  keywords:
    "Mario Vasconcelos, Digital Strategist, Business Developer, Web3, Community Building, Marketing, AI",
  openGraph: {
    title: "Mario Vasconcelos | Digital Strategist & Business Developer",
    description:
      "7+ years scaling communities and driving growth in tech economies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Vasconcelos",
    description: "Digital Strategist & Business Developer",
    creator: "@satoshimedici",
  },
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
