import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
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
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-foreground hover:prose-a:text-muted-foreground prose-a:transition-colors">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <Link
              to="/resources"
              className="text-sm text-muted-foreground underline hover:text-foreground transition-colors"
            >
              resources i use
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
