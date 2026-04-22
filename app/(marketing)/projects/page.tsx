import BlogPostIndex from "@/app/component/BlogPostIndex";
import Bounded from "@/app/component/Bounded";
import Button from "@/app/component/Button";

const contentItems = [
  {
<<<<<<< HEAD
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
=======
    id: "my-blog-post",
    title: "Education Platform",
    description: "About web development",
    tags: ["tech"],
    image: "/blog1.jpg",
    url: "http://changer-main-main.vercel.app",
    date: "2024-03-20",
  },
  {
    id: "my-project",
    title: "Authentication System",
    description: "Web app development",
    tags: ["react"],
    image: "/project1.jpg",
    url: "http://changer-main-main.vercel.app",
  },
  {
    id: "new-blog-post",
    title: "How I Built a Responsive Portfolio",
    description: "A breakdown of design and development choices",
    tags: ["portfolio", "frontend"],
    image: "/blog2.jpg",
    url: "https://your-portfolio-blog-link.com",
    date: "2024-04-10",
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
  },
];

const Projects = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <BlogPostIndex
<<<<<<< HEAD
          contentType="Projects"
          heading="Projects"
          description="Production applications I've built and shipped."
          items={contentItems}
          viewMoreText="Visit"
=======
          contentType="Blogs"
          heading="Projects"
          items={contentItems}
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        />

        <Button link="https://github.com/lloydampadu" label="Github" />
      </div>
    </Bounded>
  );
};

export default Projects;
