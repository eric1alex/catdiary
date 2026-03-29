import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const BlogHeader = () => {
  const totalMinutes = posts.reduce((sum, post) => sum + (post.studyTime || 0), 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <header className="border-b border-border py-6">
      <div className="container max-w-2xl mx-auto px-4 flex justify-between items-center gap-4">
        <div>
          <Link to="/" className="no-underline">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              i better ace CAT.
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            documenting the journey, one day at a time.
          </p>
        </div>
        <div className="text-right flex flex-col items-end whitespace-nowrap">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Study Time</span>
          <span className="text-sm font-medium text-foreground mt-0.5">
            {hours}h {minutes}m
          </span>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
