import { cn } from "@/utils/cn";
import React from "react";
import Text from "../Text";
import { Icons } from "../Icons";
import { Card } from "../Card";

type Extensions = keyof Pick<typeof Icons, "mdx" | "json" | "ts">;

type FolderBase = `${string}/`;
type Folder = FolderBase | `${FolderBase}${FolderBase}`;
type File = `${string}.${Extensions}`;

interface Node {
  name: Folder | File;
  description?: string;
  nodes?: Node[];
}

export interface TreeProps {
  nodes: Node[];
  root?: boolean;
  className?: string;
  index?: number;
}

export function FileTree(props: TreeProps) {
  return (
    <Card className="overflow-x-auto px-0">
      <Tree {...props} />
    </Card>
  );
}

export function Tree(props: TreeProps) {
  const { root = true, index = 0, nodes } = props;
  return (
    <ul
      className={cn(
        "my-2 flex list-inside flex-col gap-y-2",
        !root && "my-2 ml-2 border-l border-l-foreground/20",
      )}
    >
      {nodes.map((node) => (
        <React.Fragment key={node.name}>
          {node.name.includes("/") ? (
            <DetailsElement node={node} index={index} />
          ) : (
            <ListElement node={node} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

function DetailsElement(props: { node: Node; index: number }) {
  return (
    <details className={cn("group ml-4")} open>
      <summary className="inline-flex cursor-pointer items-center gap-x-2 rounded-sm transition-all hover:bg-foreground/10">
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap">
          <Icons.chevronDown className={cn("h-4 w-4 transition-all")} />
          <Icons.folder />
        </span>
        {props.node.name}
        {props.node.description && (
          <span className="ml-8 whitespace-nowrap text-sm text-foreground/50">
            // {props.node.description}
          </span>
        )}
      </summary>
      {props.node.nodes && (
        <Tree
          root={false}
          nodes={props.node.nodes}
          className="ml-4"
          index={props.index + 1}
        />
      )}
    </details>
  );
}

function ListElement(props: { node: Node }) {
  return (
    <li className="ml-6">
      <Text className="inline-flex items-center gap-x-2">
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap">
          {getFileIcon(props.node.name as File)}
          {props.node.name}
        </span>
        {props.node.description && (
          <span className="ml-8 whitespace-nowrap text-sm text-foreground/50">
            // {props.node.description}
          </span>
        )}
      </Text>
    </li>
  );
}

function getFileIcon(name: File) {
  const Icon = Icons[name.split(".")[1] as keyof typeof Icons];
  return <Icon className="h-4 w-4" />;
}
