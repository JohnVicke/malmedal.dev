import React from "react";
import { cn } from "~/utils/cn";

interface CardProps {
  className?: string;
}

export function Card(props: React.PropsWithChildren<CardProps>) {
  return (
    <div
      className={cn(
        "my-8 flex flex-col gap-y-2 rounded-md bg-foreground/5 p-4 shadow shadow-foreground/10 outline outline-1 outline-foreground/10",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
