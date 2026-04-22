import Biography from "@/app/component/Biography";

const About = () => {
  return (
    <div>
      <Biography
        heading="About Me"
        body={`
        <p>
<<<<<<< HEAD
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
=======
        Hey, I'm Sasu Lloyd! Born and raised in the vibrant heart of Accra,
        I thrive where tropical rhythms meet tech innovation. From the
        buzzing Makola Market to the golden shores of Labadi Beach, my
        city's dynamic energy fuels my dual passion for bold design and
        clean code.
        </p>
        <p>
        Beyond the screen, I'm a dedicated private tutor with a strong track
        record of helping students excel in SAT and WASSCE exams. My
        experience spans working with high school students aiming for top
        scores, as well as young learners developing foundational skills.
        I specialize in creating personalized learning plans that make
        complex concepts accessible and engaging.
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
<<<<<<< HEAD
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
=======
        heading="Experience"
        body={`
      <p>
      As a dedicated private tutor, I have guided numerous students through their academic journeys, specializing in SAT and WASSCE preparations. My approach involves tailoring lesson plans to individual learning styles, ensuring that each student grasps complex concepts with ease.
    </p>
    <p>
      Beyond standardized test preparation, I've worked closely with young learners, including children, fostering foundational skills in mathematics and computer science. My commitment to education is evident in the measurable improvements and confidence my students gain.
    </p>
    <p>
      In addition to tutoring, I have engaged in community outreach programs, conducting workshops and seminars aimed at bridging educational gaps and promoting STEM education among underrepresented groups.
    </p>
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
        heading="Education"
        body={`
<<<<<<< HEAD
        <p>
        <strong>Bachelor of Science — Computer Science (In Progress)</strong><br/>
        University of the People — Accredited US institution<br/>
        Expected Graduation: 2027
        </p>
=======
       <p>
      <strong>Bachelor of Science in Mathematical Sciences</strong><br/>
      University of Ghana, Accra, Ghana<br/>
    </p>
    <p>
      <strong>Major:</strong> Mathematics<br/>
      <strong>Minor:</strong> Computer Science
    </p>
    <p>
      Relevant coursework includes Data Structures and Algorithms, Object-Oriented Programming, Linear Algebra, Calculus, Database Systems, and Web Development.
    </p>

>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
    </div>
  );
};

export default About;
