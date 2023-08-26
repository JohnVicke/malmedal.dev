import React from "react";

const Ul = ({ children }: React.PropsWithChildren) => {
  return <ul className="my-8 ml-8 flex flex-col gap-y-2">{children}</ul>;
};

export default Ul;
