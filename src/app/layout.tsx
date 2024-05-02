import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluviaux - Création de site web sur mesure à moindre coût",
  description:
    "Pluviaux est une agence de création de site web sur mesure à moindre coût. Nous vous proposons des sites web de qualité professionnelle à des prix abordables.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("bg-[#0d0d0d]", inter.className)}>{children}</body>
      <Script defer src="https://umami-production-3f4f.up.railway.app/script.js" data-website-id="6f019808-f162-4f0a-9bd1-1b633b581b07"/>
    </html>
  );
}
