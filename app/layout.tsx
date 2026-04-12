import type { Metadata } from "next";
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
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
      </body>
    </html>
  );
}
