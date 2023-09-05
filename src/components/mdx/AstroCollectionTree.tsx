import React from "react";
import { FileTree, type TreeProps } from "./Tree";

const tree = {
  nodes: [
    {
      name: "src/content/",
      nodes: [
        {
          name: "blog/",
          description: "blog collection",
          nodes: [
            {
              name: "blog-post-1.mdx",
            },
            {
              name: "blog-post-2.mdx",
            },
          ],
        },
        {
          name: "projects/",
          description: "project collection",
          nodes: [
            {
              name: "project-1.json",
            },
            {
              name: "project-2.json",
            },
          ],
        },
        {
          name: "config.ts",
        },
      ],
    },
  ],
} satisfies TreeProps;

export default function AstroCollectionTree() {
  return <FileTree nodes={tree.nodes} />;
}
