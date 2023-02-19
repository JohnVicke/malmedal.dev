import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { MarkdownEditor } from "../markdown-editor";

export default async function AddBlogPost() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <>
      <MarkdownEditor />
    </>
  );
}
