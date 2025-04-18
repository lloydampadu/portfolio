import { Analytics } from "@vercel/analytics/next";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 ">
        {children} <Analytics />
      </main>
    </div>
  );
}
