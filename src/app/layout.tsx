import type { Metadata } from "next";
import { Geist, Geist_Mono, Ovo, Outfit } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css";


 const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400"]
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Rohan Jaggi Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
