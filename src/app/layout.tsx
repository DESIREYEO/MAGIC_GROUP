import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAGIC GROUP - Groupe pluridisciplinaire en Côte d'Ivoire",
  description: "MAGIC GROUP intervient dans 8 secteurs : Consulting, Commerce, Informatique, Construction, Hôtellerie, Transport, Agro-industrie et Fondation sociale",
  keywords: "magic group, consulting, commerce, informatique, construction, hôtellerie, transport, agro-industrie, fondation sociale, côte d'ivoire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}