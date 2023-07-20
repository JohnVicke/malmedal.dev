import React from "react";

import "@/styles/code.css";

export default function Code({ children }: React.PropsWithChildren) {
  return (
    <code className="after:(font-black dark:text-gray-600) before:(font-black dark:text-gray-600) rounded text-sm text-gray-400 text-gray-400 [letter-spacing:-0.02em]">
      {children}
    </code>
  );
}
