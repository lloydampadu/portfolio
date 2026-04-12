// app/blog/[id]/page.tsx
import Bounded from "@/app/component/Bounded";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "This is an introduction to Next.js...",
  },
  {
    id: "2",
    title: "Understanding Routing in Next.js",
    content: "Routing in Next.js is file-based...",
  },
  {
    id: "3",
    title: "Deploying to Vercel",
    content: "Here’s how you can deploy your app to Vercel...",
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] text-white">
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
        <div>ahjsjfhajehfoajsn aljnsfdljnbakljsb jahlfuahsgn</div>
      </div>
    </Bounded>
  );
}
