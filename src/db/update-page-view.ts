import { getSecret } from "astro:env/server"
import { getXataClient } from "./instance";

export async function updateAndSelectPageView(id: string) {
  if (getSecret("DEV")) {
    return Promise.resolve({ views: 1337 });
  }

  const client = getXataClient()

  const exists = await client.db["post-meta"].read(id);

  if (!exists) {
    return client.db["post-meta"].create({
      id,
      views: 1,
    });
  }
  return client.db["post-meta"].update({
    id,
    views: {
      $increment: 1,
    },
  });
}
