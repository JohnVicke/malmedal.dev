import { CustomLink } from "@/components/custom-link";
import { GithubIcon } from "@/components/icons";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostWithAuthor } from "@/types/post-with-author";
import { fetchApi } from "@/utils/fetch";
import { getServerSession } from "next-auth/next";
import { SignGuestbookForm } from "./sign-guestbook-form";
import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";

import dynamic from "next/dynamic";
import Image from "next/image";
import Deletebutton from "./delete-button";
const ReactionButton = dynamic(() => import("./reaction-button"));

function fetchMessages() {
  return fetchApi<PostWithAuthor[]>("/guestbook");
}

export default async function Guestbook() {
  const { data: messages, error } = await fetchMessages();
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      {!session?.user ? (
        <SignInButton />
      ) : (
        <>
          <SignOutButton />
          <SignGuestbookForm />
        </>
      )}
      <ul className="flex flex-col">
        {messages?.map(({ id, updatedAt, content, author }) => (
          <li className="group relative rounded-md p-2" key={id}>
            <div className="invisible absolute -bottom-2 right-4 flex gap-1 rounded-md border border-gray-800 bg-[#0B0713] p-1 group-hover:visible">
              <ReactionButton />
              <Deletebutton />
            </div>
            <div className="flex gap-2">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
                {author.image ? (
                  <Image className="rounded-lg" fill src={author.image} alt={`profile image of ${author.name}`} />
                ) : (
                  <GithubIcon />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-end gap-2">
                  <CustomLink href={author.htmlUrl || ""}>
                    <h3 className="font-bold hover:underline">{author?.name}</h3>
                  </CustomLink>
                  <p className="text-sm opacity-60">{new Date(updatedAt).toLocaleDateString()}</p>
                </div>
                <p>{content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
