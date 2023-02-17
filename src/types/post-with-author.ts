import { Post, User } from "@prisma/client";

export type PostWithAuthor = Omit<Post, "createdAt" | "authorId"> & {
  author: Pick<User, "name" | "htmlUrl" | "image">;
};
