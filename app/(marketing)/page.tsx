import Hero from "../component/Hero";
<<<<<<< HEAD
import Biography from "../component/Biography";
import TechList from "../component/TechList";
import CaseStudy from "../component/CaseStudy";
import Experience from "../component/Experience";
import BlogPostIndex from "../component/BlogPostIndex";
import Button from "../component/Button";
import Bounded from "../component/Bounded";

const PROJECTS = [
  {
    id: "snrael",
    title: "Snrael",
    description:
      "Multi-tenant e-commerce platform for Ghana. Mobile Money payments, WhatsApp ordering, theme editor, merchant dashboard.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Hubtel"],
    image: "/snrael.jpg",
    url: "https://www.snrael.com",
  },
  {
    id: "lorabel",
    title: "Lorabel",
    description:
      "Digital agency website with scroll animations, dynamic OG images, SEO optimization, and JSON-LD structured data.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/lorabel.jpg",
    url: "https://wenllo.vercel.app",
  },
  {
    id: "blooming-and-beyond",
    title: "Blooming & Beyond",
    description:
      "ABA therapy service website with scroll-based video hero, feature sections, and brand positioning.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/blooming.jpg",
    url: "https://bloomingandbeyond.com",
  },
];
=======
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae

export default function Home() {
  return (
    <div>
      <Hero />
<<<<<<< HEAD
      <Biography
        heading="About Me"
        body={`
        <p>
        I'm Lloyd Ampadu — a fullstack software engineer based in Accra, Ghana. I specialise in
        building production web applications with Next.js, TypeScript, PostgreSQL, and Node.js.
        </p>
        <p>
        My most significant project is <strong>Snrael</strong> — a multi-tenant e-commerce platform
        I architected and engineered end-to-end. It handles authentication, Mobile Money payments,
        real-time inventory, a custom theme engine, and serves live merchants. The entire system —
        database design, API layer, frontend, payment integrations, deployment — was built by me.
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <CaseStudy />
      <TechList />
      <Experience />
      <Bounded>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <BlogPostIndex
            contentType="Projects"
            heading="Projects"
            description="Production applications I've built and shipped."
            items={PROJECTS}
            viewMoreText="Visit"
          />
          <Button link="https://github.com/lloydampadu" label="Github" />
        </div>
      </Bounded>
=======
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
    </div>
  );
}
