import Biography from "@/app/component/Biography";

const About = () => {
  return (
    <Biography
      heading="About Me"
      body={`
        <p>
          Hey, I'm Sasu Lloyd! Born and raised in the vibrant heart of Accra,
          I thrive where tropical rhythms meet tech innovation. From the
          buzzing Makola Market to the golden shores of Labadi Beach, my
          city's dynamic energy fuels my dual passion for bold design and
          clean code.
        </p>
        <p>
          As a self-taught developer from Ghana's fast-growing tech ecosystem,
          I bridge the gap between African aesthetic traditions and modern web
          experiences.
        </p>
        <p>
          Beyond the screen, I'm a dedicated private tutor with a strong track
          record of helping students excel in SAT and WASSCE exams. My
          experience spans working with high school students aiming for top
          scores, as well as young learners developing foundational skills.
          I specialize in creating personalized learning plans that make
          complex concepts accessible and engaging.
        </p>
        <p>
          Whether I'm debugging code or breaking down algebra for a five-year-old,
          I bring the same energy: clarity, creativity, and a deep respect for
          the learning journey.
        </p>
      `}
      buttonLink="/contact"
      buttonText="Get in touch"
      avatarSrc="/images/avatar.jpg"
    />
  );
};

export default About;
