import type { Metadata } from "next";
import { Press_Start_2P, Silkscreen } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from "geist/font/pixel";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel-clean",
});

export const metadata: Metadata = {
  title: "Krypto Pengus | 3,333 NFTs on Sui",
  description: "The solitary penguin journeying toward mountains - symbolizes persistence, determination, never giving up. 3,333 unique pixel art NFTs on Sui Network.",
  keywords: "NFT, Krypto Pengus, Sui Network, Pixel Art, Blockchain, CryptoPunks",
  openGraph: {
    title: "Krypto Pengus | 3,333 NFTs on Sui",
    description: "3,333 unique pixel art penguins. One journey. Never give up.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krypto Pengus",
    description: "3,333 unique pixel art penguins on Sui Network",
    creator: "@KryptoPengus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${silkscreen.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable}`}>
      <body>{children}</body>
    </html>
  );
}
