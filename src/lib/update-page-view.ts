import { XataClient } from "./xata";

export async function updateAndSelectPageView(id: string) {
  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH ?? "main",
  });

  const exists = await xata.db["post-meta"].read(id);

  if (!exists) {
    return xata.db["post-meta"].create({
      id,
      views: 1,
    });
  }
  return xata.db["post-meta"].update({
    id,
    views: {
      $increment: 1,
    },
  });
}
