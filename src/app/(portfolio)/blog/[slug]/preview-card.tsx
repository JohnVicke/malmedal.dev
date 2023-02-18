export interface BlogPost {
  title: string;
  slug: string;
  estimatedRead: number;
  createdAt: Date;
}

interface PreviewCardProps {
  post: BlogPost;
}

export function PreviewCard({ post }: PreviewCardProps) {
  return (
    <div className="flex gap-2">
      <h2>{post.title}</h2>
      <p>{post.createdAt.toLocaleDateString()}</p>
    </div>
  );
}
