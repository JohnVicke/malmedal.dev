import React from "react";
import { cn } from "@/utils/cn";

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
        "text-foreground/70 transition-colors hover:text-foreground",
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
