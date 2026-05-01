import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-white/20 p-4">
            <p className="text-sm opacity-70">{post.date}</p>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-1 opacity-90">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
