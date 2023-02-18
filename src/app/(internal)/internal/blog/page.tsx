import { CustomLink } from "@/components/custom-link";
import { Heading } from "@/components/heading";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function AddBlogPost() {
  const session = await getServerSession(authOptions);
  console.log({ sessioNStuffa: session?.user });
  if (session?.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <>
      <Heading>Add blog post</Heading>
      <CustomLink href="/internal/blog/editor">Use editor</CustomLink>
      Upload file
    </>
  );
}
