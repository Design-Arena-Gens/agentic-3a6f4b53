import type { Metadata } from "next";
import { Playfair_Display, Karla } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Karla({
  variable: "--font-sans-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nivora Home Bakery",
  description:
    "Nivora is a home bakery crafting elegant cakes and desserts by a passionate duo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
