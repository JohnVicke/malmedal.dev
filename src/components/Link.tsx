import React from "react";
import { cn } from "~/utils/cn";

interface LinkProps {
  className?: string;
  href: string;
}

export default function Link({
  children,
  className,
  href,
}: React.PropsWithChildren<LinkProps>) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className={cn(
        "underline-offset-3 text-foreground underline decoration-foreground/50 transition-all hover:decoration-foreground",
        className,
      )}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
