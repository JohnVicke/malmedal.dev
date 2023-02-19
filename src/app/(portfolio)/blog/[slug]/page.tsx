import { notFound } from "next/navigation";
import { getPosts } from "../fetch-blog-posts";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPostProps) {
  const posts = await getPosts();
  const { slug } = params;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <div>hjaskdf</div>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}
