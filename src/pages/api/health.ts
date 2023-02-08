import type { NextApiRequest, NextApiResponse } from "next";

type ErrorMessage = {
  message: string;
};

type UpTimeMessage = {
  version: `v${number}`;
  message: string;
  status: string;
};

type Data<T> =
  | {
      data: T;
    }
  | { error: ErrorMessage[] };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data<UpTimeMessage>>) {
  if (req.method !== "GET") {
    res.status(405).json({ error: [{ message: "Method not allowed" }] });
    return;
  }
  res.status(200).json({ data: { message: "Hello there!", status: "up", version: "v1" } });
}
