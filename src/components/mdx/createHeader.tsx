import React from "react";

import Text, { type TextComponent, type TextProps } from "../Text";

export const createHeader = (level: Exclude<TextComponent, "p">) => {
  return (props: Omit<TextProps<TextComponent>, "level">) => (
    <Text className="my-4" {...props} level={level} />
  );
};
