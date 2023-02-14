import type { NextApiRequest, NextApiResponse } from "next";

interface ErrorMessage {
  message: string;
}

interface UpTimeMessage {
  version: `v${number}`;
  message: string;
  status: string;
}

type Data<T> = T | { error: ErrorMessage[] };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data<UpTimeMessage>>) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: [{ message: "Method not allowed" }] });
  }

  res.status(200).json({ message: "Hello there!", status: "up", version: "v1" });
}
