import NextAuth, { DefaultUser, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface DefaultUser {
    role: "ADMIN" | "USER";
  }
  interface Session {
    user: DefaultUser;
  }
}
