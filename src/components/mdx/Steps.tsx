import React from "react";
export default function Steps(props: React.PropsWithChildren) {
  return (
    <div className="my-8 flex flex-col gap-y-4 border-l border-foreground/10 pl-4">
      {props.children}
    </div>
  );
}
