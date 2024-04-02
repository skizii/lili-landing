import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import YMetrika from "./lib/YMetrika";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-plus-jakarta-sans'
})

export const metadata: Metadata = {
  title: "lili",
  description: "Simplify Your Budget Control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable} bg-main bg-bottom bg-net-pattern bg-no-repeat bg-repeat-x text-white`}>{children}</body>
      <YMetrika counter={96878953}/>
    </html>
  );
}