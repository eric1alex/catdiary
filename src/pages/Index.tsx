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
        Just a student, trying to crack CAT.
      </footer>
    </div>
  );
};

export default Index;
