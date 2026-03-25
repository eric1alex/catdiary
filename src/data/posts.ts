import fm from "front-matter";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

// Vite feature: import all markdown files as raw text
const mdFiles = import.meta.glob('/src/content/posts/*.md', { query: '?raw', eager: true, import: 'default' });

export const posts: BlogPost[] = Object.entries(mdFiles).map(([path, rawContent]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '';
  const { attributes, body } = fm<PostFrontmatter>(rawContent as string);
  
  return {
    id,
    title: attributes.title,
    date: attributes.date,
    excerpt: attributes.excerpt,
    tags: attributes.tags || [],
    content: body,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
