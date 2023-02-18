"use client";

import { GithubIcon } from "@/components/icons";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="inline-flex w-fit items-center gap-4 rounded-md border border-gray-200 px-4 py-2 font-sans"
    >
      <GithubIcon /> Continue using GitHub
    </button>
  );
};
