// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roro Shop",
  description: "Ecommerce site to purchase crypto products.",
  metadataBase: new URL("https://shop.lololabs.xyz/"),
  openGraph: {
    title: "Roro Shop",
    description: "Ecommerce site to purchase crypto products.",
    url: "https://shop.lololabs.xyz/",
    siteName: "Roro Shop",
    images: [
      {
        url: "/website-preview.png",
        width: 1260,
        height: 800,
      },
    ],
  },
  twitter: {
    site: `@LoicDlugosz`,
    creator: `@LoicDlugosz`,
    card: "summary",
  },
  category: "blockchain",
  icons: "/logo.jpeg",
};
