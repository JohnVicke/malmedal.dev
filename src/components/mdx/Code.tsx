import React from "react";
import { Icons } from "../Icons";
import { cn } from "@/utils/cn";

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
  const [rawString, setRawString] = React.useState("");
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (!ref.current?.innerText) return;
    const rawString = ref.current.innerText;
    setRawString(rawString);
  }, [ref.current]);

  return (
    <>
      <pre
        ref={ref}
        className="relative mb-8 overflow-x-auto rounded-lg bg-foreground/5 bg-none p-4 font-mono text-sm font-semibold shadow shadow-foreground/10 outline outline-1 outline-foreground/10"
        {...rest}
      >
        {children}
        {rawString && (
          <CopyButton
            className="absolute right-10 top-4 z-10 hidden sm:block"
            rawString={rawString}
          />
        )}
      </pre>
    </>
  );
}

function copyToClipboard(text: string) {
  void window.navigator.clipboard.writeText(text);
}

function CopyButton(props: { className?: string; rawString: string }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let timeout: number;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [copied]);

  function copyText(text: string) {
    copyToClipboard(text);
    setCopied(true);
  }

  return (
    <button
      type="button"
      disabled={copied}
      className={cn(
        props.className,
        "text-foreground/60 transition-all hover:text-foreground/100",
        copied && "text-foreground/100",
      )}
      aria-label="Copy code to clipboard"
      onClick={() => {
        copyText(props.rawString);
      }}
    >
      <>
        <Icons.copy
          className={cn(
            "absolute h-6 w-6 scale-100 p-0 transition-all",
            copied && "scale-0",
          )}
        />
        <Icons.check
          className={cn(
            "absolute h-6 w-6 scale-0 p-0 transition-all",
            copied && "scale-100",
          )}
        />
      </>
    </button>
  );
}
