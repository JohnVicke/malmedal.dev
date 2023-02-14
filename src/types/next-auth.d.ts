import { Profile, DefaultUser } from "next-auth";
import { GithubProfile } from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultUser & {
      id: string;
    };
  }
}
