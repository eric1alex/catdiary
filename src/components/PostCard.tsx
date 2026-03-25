import { Link } from "react-router-dom";
import { BlogPost } from "@/data/posts";

const PostCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-6 border-b border-border last:border-b-0">
      <Link to={`/post/${post.id}`} className="group no-underline">
        <time className="text-xs text-muted-foreground tracking-wide uppercase">
          {formattedDate}
        </time>
        <h2 className="text-xl font-medium text-foreground mt-1 group-hover:text-muted-foreground transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex gap-2 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
