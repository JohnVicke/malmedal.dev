import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  className?: string;
}

export const CustomLink = ({ className, children, href }: React.PropsWithChildren<CustomLinkProps>) => {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
