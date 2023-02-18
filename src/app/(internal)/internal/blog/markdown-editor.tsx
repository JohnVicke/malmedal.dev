"use client";

import Editor from "@monaco-editor/react";

export const MarkdownEditor = () => {
  return <Editor height="80vh" defaultLanguage="markdown" theme="vs-dark" />;
};
