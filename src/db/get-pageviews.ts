import { getXataClient } from "./instance";

export async function getPageViews(slug: string) {
  return getXataClient().db["post-meta"].read(slug);
}
