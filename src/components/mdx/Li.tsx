import React from "react";

const Li = ({ children }: React.PropsWithChildren) => {
  return <li className="list-disc marker:text-foreground/20">{children}</li>;
};

export default Li;
