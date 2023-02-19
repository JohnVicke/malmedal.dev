import { Heading } from "@/components/heading";
import { getPosts } from "./fetch-blog-posts";
import { PreviewCard } from "./preview-card";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Heading>Blog</Heading>
      <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => (
          <PreviewCard post={p} key={p.slug} />
        ))}
      </div>
    </>
  );
}
