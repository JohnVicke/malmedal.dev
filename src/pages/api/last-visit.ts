import { LastVisit } from "@/types/last-visit";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const getErrorResponse = (error: Array<{ message: string }>) => {
  return JSON.stringify({ error });
};

export default function handler(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response(getErrorResponse([{ message: "Method not allowed" }]), { status: 405 });
  }
  if (!req.geo?.city || !req.geo?.country) {
    return new Response(getErrorResponse([{ message: "Could not get geo data" }]), { status: 500 });
  }

  const lastVisit: LastVisit = { country: req.geo?.country, city: req.geo?.city, date: new Date() };
  return new Response(
    JSON.stringify({
      lastVisit,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    },
  );
}
