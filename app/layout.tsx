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
  title: "Roro Shop",
  description: "Ecommerce site to purchase crypto products.",
  metadataBase: new URL("https://shop.roroland.xyz/"),
  openGraph: {
    title: "Roro Shop",
    description: "Ecommerce site to purchase crypto products.",
    url: "https://shop.roroland.xyz/",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen flex flex-col scroll-smooth overflow-y-auto">
        <AppWalletProvider>
          <ShoppingCartProvider>
            <NavBar />
            <main className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </ShoppingCartProvider>
        </AppWalletProvider>
      </body>
    </html>
  );
}
