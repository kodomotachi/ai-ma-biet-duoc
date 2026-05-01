import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

async function getPostFiles(): Promise<string[]> {
  const files = await fs.readdir(postsDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const files = await getPostFiles();

  const posts = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(postsDirectory, file);
      const source = await fs.readFile(fullPath, "utf8");
      const { data } = matter(source);
      return data as PostMeta;
    }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostsMetaByTag(tag: string): Promise<PostMeta[]> {
  const posts = await getAllPostsMeta();
  return posts.filter((post) => post.tags?.includes(tag));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(source);

    return {
      ...(data as PostMeta),
      content,
    };
  } catch {
    return null;
  }
}
