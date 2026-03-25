import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="border-b border-border py-6">
      <div className="container max-w-2xl mx-auto px-4">
        <Link to="/" className="no-underline">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            i better ace CAT.
          </h1>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">
          documenting the journey, one day at a time.
        </p>
      </div>
    </header>
  );
};

export default BlogHeader;
