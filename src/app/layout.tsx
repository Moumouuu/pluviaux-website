import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluviaux - Création de site web sur mesure à moindre coût",
  description:
    "Pluviaux est une agence de création de site web sur mesure à moindre coût. Nous vous proposons des sites web de qualité professionnelle à des prix abordables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("bg-black", inter.className)}>{children}</body>
    </html>
  );
}
