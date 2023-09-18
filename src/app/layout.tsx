import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const russo_One = Open_Sans({ subsets: ["cyrillic"], weight: "500" });

export const metadata: Metadata = {
  title: "Atelje Simikic",
  description:
    "Lokalna drvoprerađivačka radnja, proizvodnja nameštaja, obrada drveta CNC mašinom, izrada kuhinja, plakara, stolova, stolica, komoda, kreveta, vrata, prozora, stepeništa, kuhinjskih elemenata, izrada nameštaja po meri, izrada nameštaja od punog drveta, izrada nameštaja od univera, izrada nameštaja od medijapana, izrada nameštaja od iverice, izrada nameštaja od masiva, izrada nameštaja od furnira, izrada nameštaja od medi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={russo_One.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
