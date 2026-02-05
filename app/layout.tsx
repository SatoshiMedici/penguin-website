import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
