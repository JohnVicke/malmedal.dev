import React, { useRef } from "react";

export type CodeblockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  /** set by `rehype-pretty-code` */
  "data-language"?: string;
  /** set by `rehype-pretty-code` */
  "data-theme"?: string;
};

export default function Code(props: CodeblockProps) {
  const { children, ...rest } = props;

  const ref = useRef<HTMLPreElement>(null);

  return (
    <pre
      ref={ref}
      className="relative my-8 overflow-x-auto rounded-lg border border-foreground/20 bg-background p-4 font-mono text-sm font-semibold"
      {...rest}
    >
      {children}
    </pre>
  );
}
