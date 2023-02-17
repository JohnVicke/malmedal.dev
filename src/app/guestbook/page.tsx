import { CustomLink } from "@/components/custom-link";
import { GithubIcon } from "@/components/icons";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostWithAuthor } from "@/types/post-with-author";
import { fetchApi } from "@/utils/fetch";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import { SignGuestbookForm } from "./sign-guestbook-form";

function fetchMessages() {
  return fetchApi<PostWithAuthor[]>("/guestbook");
}

export default async function Guestbook() {
  const { data: messages, error } = await fetchMessages();
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      {session?.user && (
        <>
          <SignGuestbookForm />
        </>
      )}
      <ul className="flex flex-col gap-2">
        {messages?.map(({ id, updatedAt, content, author }) => (
          <li className="group relative rounded-md p-2" key={id}>
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
