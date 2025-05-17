import Biography from "@/app/component/Biography";

const Project = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <Biography
        heading="Contact"
        body={`
          <p>
            <strong>Name:</strong> Sasu Lloyd
          </p>
          <p>
            <strong>Phone:</strong> +233 020 4451 524
          </p>
          <p>
            <strong>Email:</strong> lloydampadu18@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Spintex, Accra, Ghana
          </p>
          <p>
            I'm always eager to connect, whether it's to discuss tutoring opportunities, delve into tech collaborations, or simply share ideas. Feel free to reach out!
          </p>
        `}
        buttonLink="/contact"
        buttonText="Get in Touch"
        avatarSrc="/images/avatar.jpg"
      />
    </div>
  );
};

export default Project;
