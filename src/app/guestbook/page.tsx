import { CustomLink } from "@/components/custom-link";
import { GithubIcon } from "@/components/icons";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostWithAuthor } from "@/types/post-with-author";
import { fetchApi } from "@/utils/fetch";
import { getServerSession } from "next-auth/next";
import { SignGuestbookForm } from "./sign-guestbook-form";
import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";


export default async function Guestbook() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      {!session?.user ? <SignInButton /> : <SignOutButton />}
      <SignGuestbookForm />
      <ul className="flex flex-col gap-4">
        {mockMessage.map(({ id, message, name, updateAt }) => (
          <li className="rounded-md px-4 py-2 hover:bg-[#0B0713]" key={id}>
            <div className="flex justify-between opacity-60 ">
              <h3 className="flex items-center gap-2">
                <GithubIcon />
                {name}
              </h3>
              <h4>{updateAt.toLocaleString()}</h4>
            </div>
            <p>{message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
