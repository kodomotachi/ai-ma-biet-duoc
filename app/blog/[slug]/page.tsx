import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-10">
      <p className="text-sm opacity-70">{post.date}</p>
      <h1 className="mb-3 text-3xl font-bold">{post.title}</h1>
      <p className="mb-8 opacity-85">{post.excerpt}</p>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
