import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";

export type TextComponent = Extract<
  keyof JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "p"
>;

export type TextProps<TComponent extends TextComponent> =
  JSX.IntrinsicElements[TComponent] & {
    level?: TextComponent;
  };

const textVariants = cva("text-foreground", {
  variants: {
    level: {
      h1: "text-2xl mb-4 font-bold",
      h2: "text-xl mb-2 font-bold",
      h3: "text-lg mb-2 font-bold",
      p: "text-base font-normal",
    },
  },
});

const Text = <T extends TextComponent>({
  level = "p",
  children,
  className,
  color,
  ...rest
}: TextProps<T>) => {
  const Component = level as React.ElementType;

  return (
    <Component className={cn(textVariants({ level }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
