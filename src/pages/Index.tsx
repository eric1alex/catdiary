import { Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Just someone trying to crack CAT. |{" "}
        <Link to="/resources" className="underline hover:text-foreground transition-colors">
          resources i use
        </Link>
      </footer>
    </div>
  );
};

export default Index;
