import { CustomLink } from "@/components/custom-link";

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
    <CustomLink href={`/blog/${post.slug}`}>
      <div className="group max-w-xs animate-border cursor-pointer rounded-md p-0.5 transition-all hover:-translate-y-1 hover:bg-[#251E35]">
        <img
          alt="image"
          className="rounded-t-md object-cover"
          src="https://images.unsplash.com/photo-1600456548090-7d1b3f0bbea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
        <div className="rounded-b-md bg-[#121018] py-2 px-4">
          <div className="flex gap-2 opacity-70">
            <p>{post.estimatedRead} minutes read,</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
          <h2 className="font-bold group-hover:underline">{post.title}</h2>
        </div>
      </div>
    </CustomLink>
  );
}
