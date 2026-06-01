import type { Metadata } from "next";
import { Archivo, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import SmoothScroll from "./components/smooth-scroll";
import { Analytics } from "@vercel/analytics/react";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohan Jaggi",
  description: "ML Engineer & Data Scientist — Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${archivo.variable} ${sora.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
