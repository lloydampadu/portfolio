import BlogPostIndex from "@/app/component/BlogPostIndex";
import Bounded from "@/app/component/Bounded";
import Button from "@/app/component/Button";

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
  {
    id: "new-blog-post",
    title: "How I Built a Responsive Portfolio",
    description: "A breakdown of design and development choices",
    tags: ["portfolio", "frontend"],
    image: "/blog2.jpg",
    url: "https://your-portfolio-blog-link.com",
    date: "2024-04-10",
  },
];

const Projects = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <BlogPostIndex
          contentType="Blogs"
          heading="Projects"
          items={contentItems}
        />

        <Button link="https://github.com/lloydampadu" label="Github" />
      </div>
    </Bounded>
  );
};

export default Projects;
