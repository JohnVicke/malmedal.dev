import { useMDXComponent } from "next-contentlayer/hooks";

const customComponents = {};

interface MdxProps {
  markdown: string;
}

export const Mdx = ({ markdown }: MdxProps) => {
  const C = useMDXComponent(markdown);
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <C components={{ ...customComponents }} />
    </article>
  );
};
