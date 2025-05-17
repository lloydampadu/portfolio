import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Header from "./component/Header";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sasu lloyd",
  description: "Private Tutor and Junior Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={urbanist.className}>
        <Header />
        {children}
      </body>
    </html>
}
