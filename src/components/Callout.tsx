import React from "react";
import { cn } from "@/utils/cn";

import Text from "./Text";

interface CalloutProps {
  title: string;
  description: string;
  className?: string;
}

export function Callout(props: CalloutProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 rounded-md bg-blue-100 p-4 dark:bg-blue-400/10",
        props.className,
      )}
    >
      <Text className="text-blue-800 dark:text-blue-100" level="h3">
        {props.title}
      </Text>
      <Text>{props.description}</Text>
    </div>
  );
}
