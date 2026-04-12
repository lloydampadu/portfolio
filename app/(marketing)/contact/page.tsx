import Biography from "@/app/component/Biography";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <Biography
        heading="Contact"
        body={`
          <p>
            <strong>Name:</strong> Lloyd Ampadu
          </p>
          <p>
            <strong>Phone:</strong> +233 020 4451 524
          </p>
          <p>
            <strong>Email:</strong> lloydampadu18@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Accra, Ghana
          </p>
          <p>
            Open to remote, hybrid, and on-site roles. Interested in commerce infrastructure,
            fullstack engineering, platform engineering, and fintech.
          </p>
        `}
        buttonLink="mailto:lloydampadu18@gmail.com"
        buttonText="Send Email"
        avatarSrc="/images/avatar.jpg"
      />
    </div>
  );
};

export default Contact;
