import { XataClient } from "./xata";

export async function getPageViews(slug: string) {
  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH ?? "main",
  });

  return xata.db["post-meta"].read(slug);
}
