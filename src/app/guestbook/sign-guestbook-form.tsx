"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

async function postGuestbookMessage() {
  const res = await fetch("/api/guestbook", { method: "POST" });
  return res.json();
}

export const SignGuestbookForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await postGuestbookMessage();
    console.log({ res });
    startTransition(() => router.refresh());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Psst, you can write something here..."
        className={clsx(
          "w-full rounded-md py-2 pl-4 pr-32",
          "text-neutral-900",
          "dark:bg-[#1C1926] dark:text-neutral-100",
        )}
        name="text-input"
        id="text-input"
        type="text"
      />
      <button disabled={isPending} type="submit" className="float-right">
        Sign guestbook
      </button>
    </form>
  );
};
