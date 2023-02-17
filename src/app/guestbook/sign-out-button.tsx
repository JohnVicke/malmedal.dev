"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button className="w-fit" onClick={() => signOut()}>
      Sign out :(
    </button>
  );
};
