import { XataClient } from "./xata";

export async function getPageViews() {
  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH ?? "main",
  });

  return xata.db["post-meta"].select(["id", "views"]).getAll();
}
