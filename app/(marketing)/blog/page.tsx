import BlogPostIndex from "@/app/component/BlogPostIndex";
import Bounded from "@/app/component/Bounded";
import Button from "@/app/component/Button";

const contentItems = [
  {
    id: "my-blog-post",
    title: "Secret to keeping a child's attention",
    description: "About web development",
    tags: ["children"],
    image: "/blog1.jpg",
    url: "blog/1",
    date: "2024-03-20",
  },
];

const Blog = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <BlogPostIndex
          contentType="Blogs"
          heading="Blog"
          items={contentItems}
        />
      </div>
    </Bounded>
  );
};

export default Blog;
