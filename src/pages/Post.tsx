import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { posts } from "@/data/posts";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <main className="container max-w-2xl mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/" className="text-sm text-foreground underline mt-4 inline-block">
            ← Back home
          </Link>
        </main>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Simple markdown-like rendering for bold text
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, i) => {
      const processed = paragraph
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n- /g, "<br/>• ")
        .replace(/\n(\d+)\. /g, "<br/>$1. ");

      if (paragraph.startsWith("- ") || paragraph.startsWith("1.")) {
        return (
          <div
            key={i}
            className="text-foreground/85 leading-relaxed my-3 pl-2"
            dangerouslySetInnerHTML={{
              __html: processed.replace(/^- /, "• "),
            }}
          />
        );
      }

      return (
        <p
          key={i}
          className="text-foreground/85 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← All posts
        </Link>
        <article className="mt-6">
          <time className="text-xs text-muted-foreground tracking-wide uppercase">
            {formattedDate}
          </time>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-6">
            {post.title}
          </h1>
          <div className="font-sans text-sm md:text-base">
            {renderContent(post.content)}
          </div>
          <div className="flex gap-2 mt-8 pt-6 border-t border-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
