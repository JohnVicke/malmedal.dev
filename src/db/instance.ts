import { XataClient } from "./xata";
import { getSecret } from "astro:env/server";

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    apiKey: getSecret("XATA_API_KEY")!,
    branch: getSecret("XATA_BRANCH")!,
  });

  return instance;
};
