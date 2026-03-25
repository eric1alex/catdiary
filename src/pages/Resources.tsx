import BlogHeader from "@/components/BlogHeader";
import { resources } from "@/data/resources";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          resources i use
        </h2>
        <div className="space-y-0">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="py-5 border-b border-border last:border-b-0"
            >
              <h3 className="text-base font-medium text-foreground">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {resource.description}
              </p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs font-medium px-4 py-1.5 border border-border rounded-sm text-foreground hover:bg-secondary transition-colors"
              >
                visit →
              </a>
            </div>
          ))}
        </div>
      </main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Just someone trying to crack CAT.
      </footer>
    </div>
  );
};

export default Resources;
