import React from "react";

import { Card } from "./Card";
import Text from "./Text";

interface CalloutProps {
  title: string;
  description: string;
  className?: string;
}

export function Callout(props: React.PropsWithChildren<CalloutProps>) {
  return (
    <Card className={props.className ?? ""}>
      <Text level="h3">{props.title}</Text>
      <Text>{props.description}</Text>
      {props.children}
    </Card>
  );
}
