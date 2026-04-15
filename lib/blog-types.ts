export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  dateModified?: string;
  author: string;
  authorTitle: string;
  tags: string[];
  keywords: string[];
  relatedSlugs: string[];
  content: string; // markdown
  coverImage?: string;
};
