import Biography from "@/app/component/Biography";

const About = () => {
  return (
    <div>
      <Biography
        heading="About Me"
        body={`
        <p>
        I'm Lloyd Ampadu — a fullstack software engineer based in Accra, Ghana. I design and build
        production web applications from database architecture to polished frontends, with a focus
        on Next.js, TypeScript, PostgreSQL, and Node.js.
        </p>
        <p>
        My most significant project is <strong>Snrael</strong> (snrael.com) — a multi-tenant e-commerce
        platform I architected and engineered end-to-end. It handles JWT + OTP authentication, Mobile Money
        payment integration (MTN MoMo, Telecel, AirtelTigo), real-time inventory tracking, a custom
        Liquid-inspired theme engine, and a full merchant dashboard. The entire system was built by me
        and is live in production serving real merchants.
        </p>
        <p>
        Currently pursuing a Computer Science degree at University of the People while building
        software full-time.
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
        heading="Technical Skills"
        body={`
        <p>
        <strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3, Bash
        </p>
        <p>
        <strong>Frontend:</strong> Next.js (App Router), React, Tailwind CSS, shadcn/ui, Framer Motion,
        GSAP, responsive/mobile-first design, theme system architecture
        </p>
        <p>
        <strong>Backend:</strong> Node.js, Express.js, REST API design, Server Actions, Middleware,
        JWT authentication, sessions, webhooks, role-based access control
        </p>
        <p>
        <strong>Databases:</strong> PostgreSQL, MySQL, Prisma ORM, schema design & normalisation,
        query optimisation, Redis
        </p>
        <p>
        <strong>Payments & Integrations:</strong> Hubtel Payment Gateway, MTN MoMo API, Telecel Cash,
        AirtelTigo Money, WhatsApp Business API, UploadThing, Vercel OG
        </p>
        <p>
        <strong>Infrastructure:</strong> Git, GitHub, Docker, Vercel, Render, Turborepo (monorepos), Linux CLI
        </p>
        `}
        buttonLink="/projects"
        buttonText="View Projects"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
        heading="Experience"
        body={`
        <p>
        <strong>Fullstack Engineer — Snrael</strong><br/>
        2024 – Present<br/>
        Architected and built a multi-tenant e-commerce platform from scratch. Designed the database schema,
        API layer, authentication system, payment integrations, and frontend — all deployed and serving
        live merchants in production.
        </p>
        <p>
        <strong>IT Support Technician — Registrar-General's Department</strong><br/>
        November 2024 – January 2026<br/>
        Primary technical support for a major government agency. 90%+ same-day incident resolution rate.
        Hardware, software, network provisioning, and infrastructure configuration.
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
        heading="Education"
        body={`
        <p>
        <strong>Bachelor of Science — Computer Science (In Progress)</strong><br/>
        University of the People — Accredited US institution<br/>
        Expected Graduation: 2027
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
    </div>
  );
};

export default About;
