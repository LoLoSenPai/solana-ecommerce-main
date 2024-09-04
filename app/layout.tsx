import type { Metadata } from "next";
import "./globals.css";
import AppWalletProvider from "../context/AppWalletProvider";
import { NavBar } from "../components/NavBar";
import { Poppins } from "next/font/google";
import Footer from "../components/Footer";
import { ShoppingCartProvider } from "../context/shoppingCart";

const font = Poppins({
  subsets: [],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Solana Ecommerce",
  description: "Ecommerce site to purchase crypto products.",
  metadataBase: new URL("https://solana-nft-minting-dapp-kaktos.vercel.app/"),
  openGraph: {
    title: "Solana Ecommerce",
    description: "Ecommerce site to purchase crypto products.",
    url: "https://solana-nft-minting-dapp-kaktos.vercel.app/",
    siteName: "Solana Ecommerce",
    images: [
      {
        url: "/kaktosSMB.png",
        width: 1260,
        height: 800,
      },
    ],
  },
  twitter: {
    site: `@KaktosSol`,
    creator: `@KaktosSol`,
    card: "summary",
  },
  category: "blockchain",
  icons: "/kaktosSMB.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen flex flex-col">
        <AppWalletProvider>
          <ShoppingCartProvider>
            <NavBar />
            <main className="flex-grow max-w-custom w-full mx-auto">
              {children}
            </main>
            <Footer />
          </ShoppingCartProvider>
        </AppWalletProvider>
      </body>
    </html>
  );
}
