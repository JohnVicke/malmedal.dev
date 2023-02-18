"use client";

import { PostWithAuthor } from "@/types/post-with-author";
import { fetchApi } from "@/utils/fetch";
import { Post } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

type CreatePostInput = Pick<Post, "content">;

function postGuestbookMessage(data: CreatePostInput) {
  return fetchApi<PostWithAuthor>("/guestbook", { method: "POST", body: JSON.stringify(data) });
}

export const SignGuestbookForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("text-input") as HTMLInputElement;
    const res = await postGuestbookMessage({ content: input.value });
    input.value = "";
    startTransition(() => router.refresh());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        placeholder="Psst, you can write something here..."
        className={clsx("w-full rounded-md py-3 px-4", "text-neutral-900", "dark:bg-[#1C1926] dark:text-neutral-100")}
        name="text-input"
        id="text-input"
        type="text"
      />
      <button disabled={isPending} type="submit" className="h-auto w-fit rounded-md bg-[#251E35] px-4">
        Sign
      </button>
    </form>
  );
};
