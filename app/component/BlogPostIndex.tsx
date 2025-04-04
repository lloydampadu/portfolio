import Bounded from "./Bounded";
import ContentList from "./ContentList";
import Heading from "./Heading";

// Define unified content type
type ContentItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string; // Now required for all items
  date?: string; // Optional for projects
};

type BlogPostIndexProps = {
  contentType: "Blogs" | "Projects";
  heading: string;
  description?: string;
  viewMoreText?: string;
  fallbackItemImage?: string;
  items: ContentItem[]; // Use single content type
};

const BlogPostIndex = ({
  contentType = "Blogs",
  heading,
  description,
  viewMoreText = "Learn More",
  fallbackItemImage,
  items,
}: BlogPostIndexProps): JSX.Element => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        {heading}
      </Heading>
      {description && (
        <div className="prose prose-xl prose-invert mb-10">{description}</div>
      )}
      <ContentList
        items={items}
        contentType={contentType}
        viewMoreText={viewMoreText}
        fallbackItemImage={fallbackItemImage}
      />
    </Bounded>
  );
};

export default BlogPostIndex;
