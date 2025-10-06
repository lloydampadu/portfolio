import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header from "./component/Header";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasu Lloyd",
  description: "Private Tutor and Junior Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} min-h-screen`}>
      <body className={`${sora.className} bg-white text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
