import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    </html>
  );
}
