import React from "react";
import { cn } from "@/utils/cn";

import Text from "./Text";

interface CalloutProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 rounded-md bg-foreground/5 p-4 outline outline-1 outline-foreground/10",
        props.className,
      )}
    >
      <Text level="h3">{props.title}</Text>
      <Text>{props.description}</Text>
      {props.children}
    </div>
  );
}
