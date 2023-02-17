import { prisma } from "@/lib/prisma";
import { ApiResponse } from "@/types/api-response";
import { PostWithAuthor } from "@/types/post-with-author";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const postWithAuthorSelector = {
  id: true,
  updatedAt: true,
  content: true,
  author: {
    select: { name: true, htmlUrl: true },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<PostWithAuthor | PostWithAuthor[]>>,
) {
  if (req.method === "GET") {
    const messages = (await prisma.post.findMany({ select: postWithAuthorSelector })) satisfies PostWithAuthor[];

    return res.status(200).json({ data: messages });
  }

  const session = await getSession({ req });

  if (!session?.user) {
    return res.status(401).json({ error: [{ message: "Unauthorized" }] });
  }

  const { id } = session.user;

  if (req.method === "POST") {
    const { content } = req.body;
    console.log(content);
    const message = (await prisma.post.create({
      data: { content, author: { connect: { id } } },
      select: postWithAuthorSelector,
    })) satisfies PostWithAuthor;
    return res.status(201).json({ data: message });
  }

  if (req.method === "PUT") {
    return res.status(425).json({ error: [{ message: "not implemented" }] });
  }

  if (req.method === "DELETE") {
    // run delete stuff
    return res.status(425).json({ error: [{ message: "not implemented" }] });
  }

  return res.status(405).json({ error: [{ message: "Method not allowed!" }] });
}
