import React from "react";
import { Tree, TreeProps } from "./Tree";

const tree = {
  nodes: [
    {
      name: "src/content/",
      nodes: [
        {
          name: "blog/",
          nodes: [
            {
              name: "blog-post-1.mdx",
            },
            {
              name: "blog-post-2.mdx",
            },
            {
              name: "blog-post-3.mdx",
            },
          ],
        },
      ],
    },
  ],
} satisfies TreeProps;

export default function AstroCollectionTree() {
  return <Tree nodes={tree.nodes} />;
}
