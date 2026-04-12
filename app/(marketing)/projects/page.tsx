import BlogPostIndex from "@/app/component/BlogPostIndex";
import Bounded from "@/app/component/Bounded";
import Button from "@/app/component/Button";

const contentItems = [
  {
    id: "snrael",
    title: "Snrael",
    description:
      "Multi-tenant e-commerce platform for Africa (Ghana-first). Merchants get their own branded online store with subdomain routing, Mobile Money payments via Hubtel, phone-based OTP auth, order management, inventory tracking, and a full theme editor. Built as a monorepo with a separate API server.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Tailwind CSS",
      "Hubtel MoMo",
      "Docker",
      "Turborepo",
    ],
    image: "/snrael.jpg",
    url: "https://www.snrael.com",
  },
  {
    id: "lorabel",
    title: "Lorabel",
    description:
      "Software development and digital agency website. Features scroll-driven animations, service pages with dynamic OG images, SEO optimization targeting Ghana and global audiences, JSON-LD structured data, and a modern design system with custom cursor and dark mode.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel OG",
      "SEO",
    ],
    image: "/lorabel.jpg",
    url: "https://wenllo.vercel.app",
  },
  {
    id: "blooming-and-beyond",
    title: "Blooming & Beyond",
    description:
      "Complete digital presence for an ABA therapy-based facilitation service for children with developmental disabilities in Accra. Built the website, marketing toolkit, school outreach materials, and brand positioning strategy differentiating the service on ABA-based methodology.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Affinity Designer"],
    image: "/blooming.jpg",
    url: "https://bloomingandbeyond.com",
  },
];

const Projects = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <BlogPostIndex
          contentType="Projects"
          heading="Projects"
          description="Production applications I've built and shipped."
          items={contentItems}
          viewMoreText="Visit"
        />

        <Button link="https://github.com/lloydampadu" label="Github" />
      </div>
    </Bounded>
  );
};

export default Projects;
