import { Heading } from "@/components/heading";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";

export default async function Guestbook() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session?.user) {
    return (
      <>
        <Heading>Guestbook</Heading>
        <SignInButton />
      </>
    );
  }

  return (
    <div>
      <SignOutButton />
    </div>
  );
}
