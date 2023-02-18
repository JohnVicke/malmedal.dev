import { notFound } from "next/navigation";
import { BlogPost } from "./preview-card";

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

const posts: BlogPost[] = [
  { slug: "Telescope", createdAt: new Date(), title: "Telescope", estimatedRead: 4 },
  { slug: "Neovim", createdAt: new Date(), title: "Telescope", estimatedRead: 4 },
];

function getPosts() {
  return new Promise<typeof posts>(res => {
    res(posts);
  });
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}
