import fs from "fs";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  updated: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): Post[] {
  const current = process.cwd();
  const path = current + "/src/content/posts";
  const fileNames = fs.readdirSync(path);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path + "/" + fileName;
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as Omit<Post, "slug" | "content">),
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getLastUpdatedPosts(limit: number = 3): Post[] {
  const posts = getAllPosts()
  return posts
    .filter((post) => post.updated)
    .sort((a, b) => (a.updated > b.updated ? -1 : 1))
    .slice(0, limit)
}
