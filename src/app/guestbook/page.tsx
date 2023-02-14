import { GithubIcon } from "@/components/icons";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GuestbookMessage } from "@/types/guestbook-message";
import { getServerSession } from "next-auth/next";
import { SignGuestbookForm } from "./sign-guestbook-form";
import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";

const mockMessage: GuestbookMessage[] = [
  {
    id: " 1",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 2",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 3",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 4",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 5",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 6",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 7",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 8",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 9",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 10",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 11",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
  {
    id: " 12",
    updateAt: new Date(),
    name: "Viktor Malmedal",
    type: "update",
    message: "This is a very cool portfolio thank sfor being here",
  },
];

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
