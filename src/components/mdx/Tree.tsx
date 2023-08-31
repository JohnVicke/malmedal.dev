import { cn } from "@/utils/cn";
import React from "react";
import Text from "../Text";
import { Icons } from "../Icons";

type Extensions = ".mdx" | ".md" | ".tsx" | ".astro";

type FolderBase = `${string}/`;
type Folder = FolderBase | `${string}${FolderBase}`;
type File = `${string}${Extensions}`;

interface Node {
  name: Folder | File;
  nodes?: Node[];
}

export interface TreeProps {
  nodes: Node[];
  root?: boolean;
  className?: string;
  index?: number;
}

export function Tree(props: TreeProps) {
  const { root = true, index = 0, nodes } = props;
  return (
    <ul
      className={cn(
        "flex list-inside flex-col gap-y-4",
        root ? "my-8" : "my-2 border-l border-l-foreground/20",
      )}
    >
      {nodes.map((node) => (
        <React.Fragment key={node.name}>
          {node.name.includes("/") ? (
            <>
              <DetailsElement node={node} index={index} />
            </>
          ) : (
            <ListElement node={node} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

function DetailsElement(props: { node: Node; index: number }) {
  const id = `tree-${props.index}`;
  return (
    <details className={cn("ml-6", `group/${id}`)} open>
      <summary className="inline-flex gap-x-2">
        <Icons.chevronDown
          className={cn("transition-all", `group-open/${id}:rotate-180`)}
        />
        <Icons.folder />
        {props.node.name}
      </summary>
      <Tree
        root={false}
        nodes={props.node.nodes}
        className="ml-4"
        index={props.index + 1}
      />
    </details>
  );
}

function ListElement(props: { node: Node }) {
  return (
    <li className="ml-6">
      <Text className="inline-flex gap-x-2">
        {getFileIcon(props.node.name)}
        {props.node.name}
      </Text>
    </li>
  );
}

function getFileIcon(name: FileName) {
  return <Icons.sun />;
}
