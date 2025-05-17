import Biography from "@/app/component/Biography";

const About = () => {
  return (
    <div>
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
        Beyond the screen, I'm a dedicated private tutor with a strong track
        record of helping students excel in SAT and WASSCE exams. My
        experience spans working with high school students aiming for top
        scores, as well as young learners developing foundational skills.
        I specialize in creating personalized learning plans that make
        complex concepts accessible and engaging.
        </p>
        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
      <Biography
        heading="Experience"
        body={`
      <p>
      As a dedicated private tutor, I have guided numerous students through their academic journeys, specializing in SAT and WASSCE preparations. My approach involves tailoring lesson plans to individual learning styles, ensuring that each student grasps complex concepts with ease.
    </p>
    <p>
      Beyond standardized test preparation, I've worked closely with young learners, including children as young as five, fostering foundational skills in mathematics and computer science. My commitment to education is evident in the measurable improvements and confidence my students gain.
    </p>
    <p>
      In addition to tutoring, I have engaged in community outreach programs, conducting workshops and seminars aimed at bridging educational gaps and promoting STEM education among underrepresented groups.
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

        `}
        buttonLink="/contact"
        buttonText="Get in touch"
        avatarSrc="/images/avatar.jpg"
      />
    </div>
  );
};

export default About;
