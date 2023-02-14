import { GuestbookMessage } from "@/types/guestbook-message";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

interface ErrorMessage {
  message: string;
}

type Data<T> = T | { error: ErrorMessage[] };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data<GuestbookMessage>>) {
  const session = await getSession({ req });

  if (!session?.user) {
    return res.status(403).json({ error: [{ message: "Unauthorized" }] });
  }

  const { name, email, id } = session.user;

  if (req.method === "POST") {
    // run post stuff
    return res.status(200).json({
      id: "1",
      message: `Hello there! ${name} ${email}`,
      type: "update",
      name: "Viktor Malmedal",
      updateAt: new Date(),
    });
  }

  if (req.method === "DELETE") {
    // run delete stuff
    return res.status(204).json({
      id: "1",
      message: `Hello there! ${name} ${email}`,
      type: "update",
      name: "Viktor Malmedal",
      updateAt: new Date(),
    });
  }

  return res.status(405).json({ error: [{ message: "Method not allowed!" }] });
}
