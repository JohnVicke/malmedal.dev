import React from "react";

interface HeadingProps {
  topDecoration?: React.ReactNode;
  bottomDecoration?: React.ReactNode;
}

export const Heading = ({ topDecoration, bottomDecoration, children }: React.PropsWithChildren<HeadingProps>) => {
  return (
    <h1 className="relative font-serif text-4xl font-semibold">
      {topDecoration}
      {children}
      {bottomDecoration}
    </h1>
  );
};
