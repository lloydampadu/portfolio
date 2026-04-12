import Bounded from "./Bounded";
import Heading from "./Heading";

const EXPERIENCE_ITEMS = [
  {
    title: "Fullstack Engineer",
    timePeriod: "2024 – Present",
    institution: "Snrael (snrael.com)",
    description:
      "Architected and built a multi-tenant e-commerce platform from scratch — Next.js 16 App Router, PostgreSQL with Prisma ORM, Redis caching, JWT + OTP authentication, and native Mobile Money payment integration via Hubtel. Designed the subdomain-based multi-tenancy system, custom Liquid-inspired theme engine, and merchant dashboard with full order/inventory management. Deployed on Vercel and Render with Docker.",
  },
];

const EDUCATION_ITEMS = [
  {
    title: "BSc Computer Science (In Progress)",
    timePeriod: "2024 – 2027",
    institution: "University of the People",
    description:
      "Accredited US institution. Core modules: Programming Fundamentals (Python), CS Principles, Discrete Mathematics. Upcoming: Data Structures & Algorithms, Database Management, Operating Systems, Software Engineering.",
  },
];

export default function Experience() {
  return (
    <Bounded>
      <Heading as="h2" size="lg">
        Experience
      </Heading>
      {EXPERIENCE_ITEMS.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>
          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-[#6b6b80]">
            <span>{item.timePeriod}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <p className="prose prose-lg prose-invert mt-4">{item.description}</p>
        </div>
      ))}

      <div className="mt-20">
        <Heading as="h2" size="lg">
          Education
        </Heading>
        {EDUCATION_ITEMS.map((item, index) => (
          <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
            <Heading as="h3" size="sm">
              {item.title}
            </Heading>
            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-[#6b6b80]">
              <span>{item.timePeriod}</span>{" "}
              <span className="text-3xl font-extralight">/</span>{" "}
              <span>{item.institution}</span>
            </div>
            <p className="prose prose-lg prose-invert mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Bounded>
  );
}
