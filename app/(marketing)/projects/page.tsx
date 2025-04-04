import Avatar from "@/app/component/Avatar";
import BlogPostIndex from "@/app/component/BlogPostIndex";
import Bounded from "@/app/component/Bounded";
import Button from "@/app/component/Button";

interface BiographyProps {
  heading: string;
  body: string;
  buttonLink: string;
  buttonText: string;
  avatarSrc: string;
}

const contentItems = [
  {
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
];

const Projects = ({}: BiographyProps): JSX.Element => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <BlogPostIndex
          contentType="Blogs"
          heading="Projects"
          items={contentItems}
        />

        <Button link="https://github.com/lloydampadu" label="Github" />

        {/* <Avatar className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" /> */}
      </div>
    </Bounded>
  );
};

export default Projects;
