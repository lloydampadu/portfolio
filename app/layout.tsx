import type { Metadata } from "next";
<<<<<<< HEAD
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
=======
import { Sora } from "next/font/google";
import Header from "./component/Header";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
  display: "swap",
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Lloyd Ampadu — Fullstack Engineer",
  description:
    "Fullstack software engineer specialising in Next.js, TypeScript, PostgreSQL, and Node.js. Built production e-commerce infrastructure with Mobile Money payment integration.",
  keywords: [
    "fullstack developer",
    "software engineer",
    "Next.js",
    "TypeScript",
    "Ghana",
    "e-commerce",
    "Lloyd Ampadu",
  ],
  authors: [{ name: "Lloyd Ampadu" }],
  openGraph: {
    title: "Lloyd Ampadu — Fullstack Engineer",
    description:
      "Fullstack software engineer based in Accra, Ghana. Next.js, TypeScript, PostgreSQL.",
    type: "website",
  },
=======
  title: "Sasu Lloyd",
  description: "Private Tutor and Junior Developer",
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen`}
    >
      <body
        className="font-[family-name:var(--font-body)] relative min-h-screen bg-[#0a0a14] text-[#a1a1b5]"
      >
        <div className="background-gradient pointer-events-none fixed inset-0 -z-50 opacity-60" />
        <Header />
        {children}
        <Footer />
=======
    <html lang="en" className={`${sora.variable} min-h-screen`}>
      <body className={`${sora.className} bg-white text-gray-900`}>
        <Header />
        {children}
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
      </body>
    </html>
  );
}
